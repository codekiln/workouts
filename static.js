/* The static site's own parts, for what the claude.ai artifact gets from claude.ai: video chapters, the Born field,
   Export log / Import a file… on the History tab, and the published log. Loaded after shim.js and app.js; the last lines start the page. */

/* The published log, a workouts-log file written by tools/publish_log.py. Every visit shows its sessions for the dates
   this browser has no session of its own. Empty, or a missing file: none. */
const PUBLISHED_LOG="data/log.json";

/* ---------- video chapters: each chapter opens Huberman's video on YouTube at its start ---------- */
/* app.js keeps the artifact's chapter list; tools/sync_from_artifact.py points each chapter's c at YouTube and calls this where the artifact has a <video> */
function wkChapter(c){
  const id=new URL(c.c).searchParams.get("v"),g=GV[id],b=g&&g.ids&&g.ids[String(c.s)];
  return `<div class="vids ytchap"><a class="vid" href="${esc(c.c)}" data-yt="${esc(id)}" data-s="${c.s}" target="_blank" rel="noopener"><span class="play" aria-hidden="true"></span><span>Play on YouTube</span><span class="t">${ts(c.s)}</span></a>${b?`<a class="vid" href="${esc(g.url+"#block-"+b)}" target="_blank" rel="noopener"><span class="play" aria-hidden="true" style="background:var(--green)"></span><span>Garden notes</span><span class="t">${ts(c.s)}</span></a>`:""}</div>`;
}
/* a transcript time opens YouTube at that moment */
document.addEventListener("click",ev=>{const b=ev.target.closest("[data-seek]");if(!b)return;
  const fig=b.closest(".clip,.dayvid"),a=fig&&fig.querySelector("a[data-yt]");if(!a||fig.querySelector("video"))return;
  window.open(`https://www.youtube.com/watch?v=${encodeURIComponent(a.dataset.yt)}&t=${Math.round(+a.dataset.s + +b.dataset.seek)}s`,"_blank","noopener")});

/* ---------- Born: year and month for the heart-rate targets, kept in settings/main ---------- */
function wkSaveSettings(v){const ref=state.db&&state.db.doc("settings/main");if(!ref)return;
  ref.update(v).catch(()=>ref.set(v)).catch(()=>{})}
document.addEventListener("change",ev=>{if(ev.target.id!=="born")return;
  const v=ev.target.value.trim(),m=/^(\d{4})-(\d{1,2})$/.exec(v),y=m&&+m[1],mo=m&&+m[2];
  if(m&&y>1900&&y<=new Date().getFullYear()&&mo>=1&&mo<=12)wkSaveSettings({birthYear:y,birthMonth:mo});
  else if(!v)wkSaveSettings({birthYear:null,birthMonth:null});
  else setStatus("Born: enter a year and month like 1990-04.",true)});
async function wkWatchSettings(){let db=null;try{db=await window.claude.use("db")}catch(e){}if(!db)return;
  db.doc("settings/main").onSnapshot(s=>{const v=(s.exists&&s.data())||{},el=$("#born");
    if(el&&document.activeElement!==el)el.value=v.birthYear?v.birthYear+"-"+String(v.birthMonth||1).padStart(2,"0"):"";
    if(!v.birthYear&&state.age!=null){state.age=null;if(!dirty)render()}})}

/* ---------- History: export and import the log ---------- */
let wkDataMsg="";
const wkRenderHistory=renderHistory;
renderHistory=function(){wkRenderHistory();if(state.db)$("#view").insertAdjacentHTML("beforeend",wkDataPanel())};
const wkPlural=(n,w)=>`${n} ${w}${n===1?"":"s"}`;
function wkCount(){return Object.keys(wkLog.exportAll().sessions).length+wkLog.publishedOnly()}
function wkDataPanel(){const n=Object.keys(wkLog.exportAll().sessions).length,m=wkLog.publishedOnly();
  return `<section class="panel"><h3>Your data</h3>
   <p class="muted" style="margin:4px 0 10px">The log is saved in this browser only: ${wkPlural(n,"session")} so far. Export it to keep a backup or to move it to another device or browser, then import the file there. Importing replaces any date that is in the file and keeps the rest. A voice session report can be imported here too.${m?` The page also shows ${wkPlural(m,"session")} from the site's published log. They aren't in the export, and a session you log here for one of those dates takes its place.`:""}</p>
   <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button type="button" class="btn primary" data-log="export">Export log</button><button type="button" class="btn" data-log="import">Import a file…</button><input type="file" id="importfile" accept=".json,application/json,text/plain" hidden><span class="muted" role="status">${esc(wkDataMsg)}</span></div></section>`}
function wkImport(txt){
  let r;try{const a=txt.indexOf("{"),z=txt.lastIndexOf("}");r=JSON.parse(txt.slice(a,z+1))}catch(e){return "Couldn't read that file as JSON."}
  if(r&&r.type==="workout-voice-log")return importReport(txt);
  if(!r||r.type!=="workouts-log")return "That file isn't a log export or a voice session report.";
  if(!state.db)return "The log isn't available in this browser, so nothing was imported.";
  flushNow();
  try{const n=wkLog.importAll(r);setStatus(`${wkPlural(wkCount(),"session")} in the log`);
    return `Imported ${n.sessions} session${n.sessions===1?"":"s"}.`}
  catch(e){return "Couldn't save the import ("+(e.code||e.message||"error")+")."}
}
document.addEventListener("click",async ev=>{const t=ev.target.closest("[data-log]");if(!t)return;
  if(t.dataset.log==="import"){$("#importfile").click();return}
  flushNow();
  try{const dl=await window.claude.use("downloads");
    await dl.save({filename:`workouts-log-${iso(new Date())}.json`,data:JSON.stringify(wkLog.exportAll(),null,1)});wkDataMsg="Exported."}
  catch(e){wkDataMsg="Couldn't export ("+(e.code||e.message||"error")+")."}
  render()});
document.addEventListener("change",async ev=>{if(ev.target.id!=="importfile")return;const f=ev.target.files&&ev.target.files[0];if(!f)return;
  let txt="";try{txt=await f.text()}catch(e){}
  wkDataMsg=wkImport(txt);ev.target.value="";render()});
async function wkLoadPublished(){if(!PUBLISHED_LOG)return;
  let r=null;try{const res=await fetch(PUBLISHED_LOG,{cache:"no-cache"});if(res.ok)r=await res.json()}catch(e){}
  if(!r||r.type!=="workouts-log")return;
  try{wkLog.setPublished(r.sessions)}catch(e){return} // no storage: the page shows no log at all
  const st=$("#status").textContent;
  if(/^Log connected|in the log$|^Connecting/.test(st))setStatus(`${wkPlural(wkCount(),"session")} in the log`)}

/* ---------- start ---------- */
wkWatchSettings();
if(!route())render();
connect();
wkLoadPublished();
