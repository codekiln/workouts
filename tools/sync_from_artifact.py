#!/usr/bin/env python3
"""Regenerate index.html, style.css and app.js from the Workouts artifact's HTML.

    python3 -I tools/sync_from_artifact.py path/to/artifact.html

The artifact is one HTML file: a <style>, the page markup and one <script>. This script splits it into
style.css, index.html and app.js and changes what only works on claude.ai:

- Storage and downloads: shim.js defines window.claude.use("db") and use("downloads") on localStorage,
  so app.js keeps the artifact's database code.
- Video clips and their poster frames are artifact assets. Each chapter's clip URL becomes a YouTube URL at the
  chapter's start, every <video> becomes a call to wkChapter() in static.js, and poster frames are dropped.
- Wikimedia Commons photos point to the copies in img/, found through tools/photos.json.
- A few sentences about Claude and claude.ai are reworded, and the page is started from static.js.

Every change has to match the artifact. When one doesn't, the script stops and names it, and writes nothing.
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTO_MAP = Path(__file__).resolve().parent / "photos.json"

DESCRIPTION = "A weekly training plan built from Huberman's Protocols, Chapter 2, with a set-by-set log that stays in your browser."
HEADER_LABEL = "Protocols, Chapter 2 · codekiln's training week"
FORK_BADGE = '<div class="forkme"><a href="https://github.com/codekiln/workouts#make-your-own-copy" title="Make your own copy of this page">Fork me on GitHub</a></div>'
BORN_FIELD = ('<span class="field"><label class="lbl" for="born" title="Used for the heart-rate targets: max heart rate ≈ 220 − age">Born</label>'
              '<input type="month" id="born" placeholder="YYYY-MM" pattern="\\d{4}-\\d{2}" aria-describedby="born-help"></span>\n'
              '      <span id="born-help" hidden>Year and month you were born, used to work out heart-rate targets.</span>')
FOOTER_LOG = ('<p>Your log is saved in this browser only. To back it up or move it to another device, use Export and Import on the '
              '<a href="#history">History</a> tab. The page\'s source, and how to make your own copy, are at '
              '<a href="https://github.com/codekiln/workouts#make-your-own-copy">github.com/codekiln/workouts</a>.</p>')
GENERATED = "Generated from the Workouts artifact by tools/sync_from_artifact.py. In a fork, edit this file directly."

# (name, pattern, replacement); each pattern must match exactly once. Replacements are literal text.
MARKUP_EDITS = [
    ("header label", r"<h1>Workouts</h1>", f'<div class="lbl">{HEADER_LABEL}</div>\n      <h1>Workouts</h1>'),
    ("Born field", r'(<span class="field"><label class="lbl" for="unit">Unit</label><select id="unit">.*?</select></span>)',
     None),  # filled in below: keeps the unit field and adds Born after it
    ("footer video sentence",
     r"Video clips are cut from Huberman's unlisted Protocols videos for (Day [^;]*?) and stored privately in this artifact;",
     None),
    ("footer log paragraph", r"<p>Claude can fill the log too:.*?</p>", FOOTER_LOG),
]
SCRIPT_EDITS = [
    ("term links", r'const ARTIFACT_URL="[^"]*";', "const ARTIFACT_URL=location.origin+location.pathname;"),
    ("no-storage message", r"Log unavailable here \(sign in on claude\.ai to record sets\)\. The plan still works\.",
     "This browser won't let the page save anything (private windows often block it), so sets can't be logged here. The plan still works."),
    ("empty history", r"or ask Claude to log one;", "or import a log file below;"),
    ("heart-rate placeholder", r"birth month not in settings yet", "set Born at the top of the page"),
    ("day video label", r" · plays straight through", " · each chapter opens on YouTube"),
    ("install dialog", r"First, open this page on its own \(not beside a chat\), so the app opens straight to your log\. You'll stay signed in to Claude\.",
     "The log stays in the browser that saved it. If the installed app opens with an empty log, use Export log on the History tab here and Import a file… in the app."),
    ("page start", r'\n\$\("#date"\)\.value=state\.date;\nif\(!route\(\)\)render\(\);\nconnect\(\);(?=\n|\Z)',
     '\n$("#date").value=state.date;\n/* static.js starts the page */'),
]
VIDEO_TAG = re.compile(r'<video\b[^>]*?\bsrc="\$\{esc\(([A-Za-z_$][\w$.]*?)\.c\)\}"[^>]*></video>')
RUNTIME_NAMES = {"db", "downloads"}


class SyncError(Exception):
    pass


def edit_once(text, name, pattern, repl):
    hits = re.findall(pattern, text, flags=re.S)
    if len(hits) != 1:
        raise SyncError(f"{name}: expected one match for {pattern!r}, found {len(hits)}")
    return re.sub(pattern, lambda m: repl(m) if callable(repl) else repl, text, count=1, flags=re.S)


def split_artifact(html):
    """Return (wrapper_css, head_links, css, markup, script)."""
    wrapper_css = ""
    m = re.match(r"\s*<!doctype html><html><head>.*?<style>(.*?)</style></head><body>", html, flags=re.S | re.I)
    if m:  # claude.ai wraps the published page in a skeleton with base styles
        wrapper_css = m.group(1)
        html = html[m.end():]
        html = re.sub(r"</body></html>\s*$", "", html, flags=re.I)
    styles = list(re.finditer(r"<style>(.*?)</style>", html, flags=re.S))
    scripts = list(re.finditer(r"<script>(.*?)</script>", html, flags=re.S))
    if len(styles) != 1 or len(scripts) != 1:
        raise SyncError(f"expected one <style> and one <script> in the artifact, found {len(styles)} and {len(scripts)}")
    if re.search(r"<script\b[^>]*\bsrc=", html):
        raise SyncError("the artifact loads an external script; add it to the head in build_index()")
    head = html[:styles[0].start()]
    links = re.findall(r"<link\b[^>]*>", head)
    markup = html[styles[0].end():scripts[0].start()].strip("\n")
    return wrapper_css, links, styles[0].group(1).strip("\n"), markup, scripts[0].group(1).strip("\n")


def json_const(script, name, fn):
    """Rewrite a one-line `const NAME={...};` data declaration through fn(obj)."""
    pat = re.compile(rf"^const {name}\s*=\s*(\{{.*\}});?$", re.M)
    hits = pat.findall(script)
    if len(hits) != 1:
        raise SyncError(f"{name}: expected one one-line JSON declaration, found {len(hits)}")
    obj = fn(json.loads(hits[0]))
    return pat.sub(lambda m: f"const {name}={json.dumps(obj, ensure_ascii=False)};", script, count=1)


def convert_script(script, photo_map, warnings):
    def hvid(o):
        for v in o.values():
            for c in v["ch"]:
                c["c"] = f"https://www.youtube.com/watch?v={v['yt']}&t={c['s']}s"
        return o

    def photos(o):
        out = {}
        for k, lst in o.items():
            keep = []
            for p in lst:
                f = photo_map.get(p.get("src", ""))
                if f and (ROOT / f).exists():
                    keep.append({**p, "url": f})
                else:
                    warnings.append(f"photo for {k} has no copy in img/: {p.get('src')} (download it from Commons into img/ and add it to tools/photos.json)")
            if keep:
                out[k] = keep
        return out

    def equip(o):
        for v in o.values():
            if str(v.get("img", "")).startswith("/_blob/"):
                del v["img"]  # a frame from Huberman's video
        return o

    script = json_const(script, "HVID", hvid)
    script = json_const(script, "THUMB", lambda o: {})  # poster frames from Huberman's videos
    script = json_const(script, "PHOTOS", photos)
    script = json_const(script, "EQUIP", equip)

    script, n = VIDEO_TAG.subn(lambda m: "${wkChapter(" + m.group(1) + ")}", script)
    if not n or "<video" in script:
        raise SyncError(f"video players: replaced {n}, and {script.count('<video')} <video> tags are left in a shape the script doesn't know")
    for name, pat, repl in SCRIPT_EDITS:
        script = edit_once(script, name, pat, repl)

    used = set(re.findall(r'window\.claude\?\.use\?\.\("([^"]+)"\)', script))
    if used - RUNTIME_NAMES:
        raise SyncError(f"the artifact uses claude.ai features shim.js doesn't provide: {sorted(used - RUNTIME_NAMES)}")
    if "window.claude" in re.sub(r'window\.claude\?\.use\?\.\("(db|downloads)"\)', "", script):
        raise SyncError("the artifact calls window.claude in a way shim.js doesn't provide; search app.js for window.claude")
    return f"/* {GENERATED} */\n{script}\n"


def convert_markup(markup):
    edits = []
    for name, pat, repl in MARKUP_EDITS:
        if name == "Born field":
            repl = lambda m: m.group(1) + "\n      " + BORN_FIELD
        elif name == "footer video sentence":
            repl = lambda m: f"Video chapters open Huberman's unlisted Protocols videos for {m.group(1)} on YouTube at each chapter's start;"
        edits.append((name, pat, repl))
    for name, pat, repl in edits:
        markup = edit_once(markup, name, pat, repl)
    return re.sub(r'\s*<meta name="claude:[^"]*"[^>]*>', "", markup)


def build_index(links, markup):
    head_links = "\n".join(l for l in links if "fonts.googleapis" in l or "fonts.gstatic" in l)
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Workouts</title>
<meta name="description" content="{DESCRIPTION}">
<!-- {GENERATED} -->
{head_links}
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="static.css">
</head>
<body>
{FORK_BADGE}
{markup}
<script src="shim.js"></script>
<script src="app.js"></script>
<script src="static.js"></script>
</body>
</html>
"""


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("artifact", type=Path, help="the artifact's HTML, as the Artifact tool's read action saves it")
    ap.add_argument("--out", type=Path, default=ROOT, help="where to write index.html, style.css and app.js (default: the repository)")
    args = ap.parse_args(argv)

    html = args.artifact.read_text(encoding="utf-8")
    photo_map = json.loads(PHOTO_MAP.read_text(encoding="utf-8"))
    warnings = []
    try:
        wrapper_css, links, css, markup, script = split_artifact(html)
        app_js = convert_script(script, photo_map, warnings)
        index_html = build_index(links, convert_markup(markup))
        style_css = f"/* {GENERATED} */\n" + (wrapper_css.replace("}", "}\n").strip() + "\n" if wrapper_css else "") + css + "\n"
        leftover = [n for n, t in (("index.html", index_html), ("style.css", style_css), ("app.js", app_js)) if "/_blob/" in t]
        if leftover:
            raise SyncError(f"artifact asset URLs (/_blob/) are left in {', '.join(leftover)}; add a rule for them to the script")
    except SyncError as e:
        print(f"sync_from_artifact: {e}", file=sys.stderr)
        return 1

    args.out.mkdir(parents=True, exist_ok=True)
    for name, text in (("index.html", index_html), ("style.css", style_css), ("app.js", app_js)):
        (args.out / name).write_text(text, encoding="utf-8")
    for w in warnings:
        print(f"warning: {w}", file=sys.stderr)
    stray = [m for m in ("claude.ai", "Claude") if m in app_js or m in index_html]
    if stray:
        print(f"note: {' and '.join(stray)} still appear in the page; check that each still makes sense outside claude.ai", file=sys.stderr)
    print(f"wrote index.html, style.css and app.js to {args.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
