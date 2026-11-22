/* window.claude for the static site: the "db" and "downloads" that app.js asks for, kept in this browser.
   The log is one JSON object in localStorage under "wk.log.v1":
   {sessions:{"YYYY-MM-DD":{…}}, quiz:{…}, quiznotes:{…}, srs:{…}, srslog:{…}, settings:{main:{…}}}
   db.collection(name).onSnapshot(cb) and db.doc("collection/id").onSnapshot(cb) call cb now and after every change,
   including changes made in another tab; doc.set(v) replaces a document; doc.update(v) merges into one that exists. */
(function(){
"use strict";
const KEY="wk.log.v1";
const COLLECTIONS=["sessions","quiz","quiznotes","srs","srslog","settings"];
const copy=v=>v==null?v:JSON.parse(JSON.stringify(v));
const later=f=>setTimeout(f,0); // snapshots arrive after the write that caused them
const subs=new Map(); // "sessions" or "settings/main" -> listeners
let data=null;

function read(){try{const v=JSON.parse(localStorage.getItem(KEY)||"{}");return v&&typeof v==="object"?v:{}}catch(e){return {}}}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(data))}
  catch(e){const err=new Error("browser storage is full or blocked");err.code="storage";throw err}}
function coll(c){return data[c]||(data[c]={})}
function split(path){const i=String(path).indexOf("/");
  if(i<1||i===path.length-1)throw new Error("expected collection/id, got "+path);return [path.slice(0,i),path.slice(i+1)]}
function emit(keys){later(()=>keys.forEach(k=>{const s=subs.get(k);if(s)s.forEach(f=>f())}))}
function listen(key,f){if(!subs.has(key))subs.set(key,new Set());subs.get(key).add(f);later(f);return()=>subs.get(key).delete(f)}
function write(c,id,next){const had=Object.prototype.hasOwnProperty.call(coll(c),id),prev=coll(c)[id];
  coll(c)[id]=next;
  try{persist()}catch(e){if(had)coll(c)[id]=prev;else delete coll(c)[id];throw e}
  emit([c,c+"/"+id])}

const db={
  collection:c=>({onSnapshot:(cb,onErr)=>listen(c,()=>{
    try{cb({docs:Object.keys(data[c]||{}).map(id=>({id,data:()=>copy(data[c][id])}))})}catch(e){if(onErr)onErr(e);else throw e}})}),
  doc:path=>{const [c,id]=split(path);return {
    set:async v=>write(c,id,copy(v)),
    update:async v=>{const cur=(data[c]||{})[id];
      if(cur==null){const err=new Error("no document at "+path);err.code="not-found";throw err}
      write(c,id,Object.assign(copy(cur),copy(v)))},
    onSnapshot:(cb,onErr)=>listen(path,()=>{const v=(data[c]||{})[id];
      try{cb({exists:v!=null,data:()=>copy(v)})}catch(e){if(onErr)onErr(e);else throw e}})}}
};
function openDB(){
  if(data)return db;
  localStorage.setItem(KEY+".probe","1");localStorage.removeItem(KEY+".probe"); // throws where storage is blocked
  data=read();
  window.addEventListener("storage",ev=>{if(ev.key!==KEY)return;data=read();emit([...subs.keys()])});
  return db;
}

const downloads={save:async({filename,data:body,mimeType})=>{
  const type=mimeType||(/\.json$/i.test(filename||"")?"application/json":/\.md$/i.test(filename||"")?"text/markdown":"text/plain");
  const url=URL.createObjectURL(body instanceof Blob?body:new Blob([body],{type}));
  const a=document.createElement("a");a.href=url;a.download=filename||"download";document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),10000)}};

window.claude={use:async name=>name==="db"?openDB():name==="downloads"?downloads:null};

/* Export and import in the workouts-log format, version 1. Importing replaces each document that is in the file and keeps the rest. */
window.wkLog={
  exportAll(){openDB();const out={type:"workouts-log",version:1,exportedAt:new Date().toISOString()};
    COLLECTIONS.forEach(c=>{out[c]=copy(data[c]||{})});return out},
  importAll(r){openDB();const n={};
    COLLECTIONS.filter(c=>c!=="settings").forEach(c=>{n[c]=0;
      for(const [id,doc] of Object.entries((r&&r[c])||{})){
        if(!doc||typeof doc!=="object"||!id||(c==="sessions"&&!/^\d{4}-\d{2}-\d{2}$/.test(id)))continue;
        coll(c)[id]=copy(doc);n[c]++}});
    const st=r&&r.settings&&r.settings.main;
    if(st&&typeof st==="object")coll("settings").main=Object.assign(coll("settings").main||{},copy(st));
    persist();emit([...subs.keys()]);return n},
  isEmpty(){openDB();return !Object.keys(data.sessions||{}).length}
};
})();
