#!/usr/bin/env python3
"""Write data/log.json, the published log, from a folder of session documents.

    python3 -I tools/publish_log.py path/to/sessions/

The folder holds one JSON file per date, named YYYY-MM-DD.json, each the artifact's sessions/YYYY-MM-DD
document. The output is a workouts-log file, version 1, with sessions only: no quiz results, no settings,
and so no birth year or month. The page shows these sessions in every browser, behind the browser's own log.
"""
import argparse
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATE = re.compile(r"^\d{4}-\d{2}-\d{2}$")
# state of a session in progress: the exercise under way and a running rest timer
TRANSIENT = {"active", "restNow"}
PRIVATE = {"birthYear", "birthMonth"}


def strip_private(o):
    """Drop birth fields wherever they are, and sort keys so a re-export with the same content writes the same file."""
    if isinstance(o, dict):
        return {k: strip_private(o[k]) for k in sorted(o) if k not in PRIVATE}
    if isinstance(o, list):
        return [strip_private(v) for v in o]
    return o


def read_session(path):
    doc = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(doc, dict) and "ex" not in doc and isinstance(doc.get("data"), dict):
        doc = doc["data"]  # a {id, data} wrapper around the document
    if not isinstance(doc, dict) or not isinstance(doc.get("ex", {}), dict):
        raise ValueError("not a session document")
    if doc.get("date") not in (None, path.stem):
        raise ValueError(f"its date is {doc.get('date')}")
    doc = {k: v for k, v in doc.items() if k not in TRANSIENT}
    return strip_private(doc)


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("folder", type=Path, help="folder of YYYY-MM-DD.json session documents")
    ap.add_argument("--out", type=Path, default=ROOT / "data" / "log.json", help="where to write the log (default: data/log.json)")
    args = ap.parse_args(argv)

    files = sorted(p for p in args.folder.glob("*.json") if DATE.match(p.stem))
    others = sorted(p.name for p in args.folder.iterdir() if p.is_file() and p not in files)
    if not files:
        print(f"publish_log: no YYYY-MM-DD.json files in {args.folder}", file=sys.stderr)
        return 1
    sessions = {}
    for p in files:
        try:
            sessions[p.stem] = read_session(p)
        except ValueError as e:
            print(f"publish_log: {p.name}: {e}", file=sys.stderr)
            return 1
    log = {"type": "workouts-log", "version": 1, "sessions": sessions}
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(log, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    if others:
        print(f"skipped: {', '.join(others)}", file=sys.stderr)
    print(f"wrote {len(sessions)} sessions, {min(sessions)} to {max(sessions)}, to {args.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
