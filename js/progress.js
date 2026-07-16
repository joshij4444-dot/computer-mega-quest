/*! MODULE: js/progress.js — Progress page: Dashboard, Revise (mistake bank/bookmarks), Test Center
   All pool-builders below just filter/sample the SAME QB the units already use —
   no new content, no duplicated question data. Every mode funnels into the one
   shared battle engine (js/battle.js) via bStart(label, {pool, time, mount, onQuit}). */

/* real PYQ weight per unit (from the source paper's distribution) — used only to
   proportion the Full Mock Test so it feels like the real exam, not a stub value. */
const UNIT_WEIGHT={p2db:13,p2dp:10,p2pf:9,p2os:9,p2dsa:8,p2sad:8,p2sec:8,p2foc:8,p2net:6,p2iot:4,p2ped:4};

function pTab(i,el){
  document.querySelectorAll('#pTabs .tb').forEach(x=>x.classList.remove('on'));el.classList.add('on');
  document.querySelectorAll('#pBody .tp').forEach((p,j)=>p.classList.toggle('on',j===i));
}
function unitName(uid){const c=CH.find(x=>x.id===uid);return c?c.ic+' '+c.t:uid;}
function meterRow(label,acc){
  const col=acc>=70?'var(--grn)':acc>=40?'var(--gold)':'var(--red)';
  return `<div class="bar2"><span class="lb">${label}</span><div class="bx"><i style="width:${acc}%;background:${col}"></i></div><span class="vl">${acc}%</span></div>`;
}

/* ---------- Dashboard ---------- */
function renderDashboard(){
  const el=document.getElementById('pT0');if(!el)return;
  const ov=Track.overall(),st=Track.streak(),hm=Track.heatmap(28);
  const weak=Track.weakUnits(4),strong=Track.weakUnits(4).slice().sort((a,b)=>b.acc-a.acc).slice(0,3);
  let h=`<div class="blk"><h3>🔥 स्टडी स्ट्रीक</h3>
    <p style="font-size:1.7rem;font-weight:900;color:var(--gold);margin:2px 0">${st.cur} दिन ${st.cur>0?'🔥':''}</p>
    <p style="font-size:.68rem;color:var(--dim)">सबसे लंबी स्ट्रीक: ${st.best} दिन • रोज़ खोल कर स्ट्रीक बढ़ा</p>
    <div class="heat">${hm.map(d=>`<span class="heatDot ${d.active?'on':''}" title="${d.date}"></span>`).join('')}</div>
  </div>`;
  h+=`<div class="blk"><h3>🎯 कुल Accuracy</h3>
    ${ov.total?meterRow(ov.c+'/'+ov.total+' सही',ov.acc)
      :'<p style="color:var(--dim);font-size:.8rem">अभी तक कोई बैटल नहीं खेली — कोई भी यूनिट खोल और शुरू कर!</p>'}
  </div>`;
  if(weak.length)h+=`<div class="blk"><h3>📉 कमज़ोर यूनिट — इन पर ध्यान दे</h3>${weak.map(w=>meterRow(unitName(w.uid),w.acc)).join('')}</div>`;
  if(strong.length&&strong[0].acc>=70)h+=`<div class="blk"><h3>💪 मज़बूत यूनिट</h3>${strong.filter(s=>s.acc>=70).map(w=>meterRow(unitName(w.uid),w.acc)).join('')}</div>`;
  el.innerHTML=h;
}

/* ---------- Revise: mistake bank + bookmarks + today's target ---------- */
function renderRevise(){
  const el=document.getElementById('pT1');if(!el)return;
  const mist=Track.mistakePool(),book=Track.bookmarkPool();
  let h=`<div class="blk"><h3>🎯 आज का टारगेट</h3>
    <p style="font-size:.8rem;color:var(--dim);line-height:1.6">${mist.length?mist.length+' सवाल पहले गलत हुए थे — इन्हें आज दोहरा दे। लगातार 2 बार सही होने पर सवाल अपने आप "mastered" हो जाता है और लिस्ट से हट जाता है।':'अभी कोई गलती बाकी नहीं है — बढ़िया चल रहा है! कोई यूनिट खेल कर नई प्रैक्टिस शुरू कर।'}</p>
    ${mist.length?`<button class="btn" onclick="startMistakes(10)">🔁 आज का रिवीज़न (${Math.min(10,mist.length)} सवाल)</button>`:''}
  </div>`;
  h+=`<div class="blk"><h3>❌ गलतियों का बैंक (${mist.length})</h3>
    ${mist.length?`<button class="btn gh" onclick="startMistakes()">📖 सारी गलतियाँ दोहरा</button>`
      :'<p style="font-size:.8rem;color:var(--dim)">बैटल में जो सवाल गलत होंगे, वो अपने आप यहाँ आ जाएँगे।</p>'}
  </div>`;
  const cardBm=book.filter(b=>b.isCard),mcqBm=book.filter(b=>!b.isCard);
  h+=`<div class="blk"><h3>⭐ बुकमार्क</h3>
    ${mcqBm.length?`<button class="btn gh" onclick="startBookmarks()">⭐ बुकमार्क किए सवाल दोहरा (${mcqBm.length})</button>`:''}
    ${cardBm.length?`<p style="font-size:.75rem;color:var(--dim);margin-top:${mcqBm.length?'10px':'0'}">⭐ बुकमार्क किए फ्लैशकार्ड (${cardBm.length}) — टैप कर के पलट:</p>
      <div class="fg" style="margin-top:8px">${cardBm.map(c=>`<div class="fl" onclick="this.classList.toggle('on')"><div class="fi">
        <div class="fF"><div class="q">${c.front}</div></div>
        <div class="fB"><div><div class="a">${c.back}</div><div class="s">${c.hint}</div></div></div>
       </div></div>`).join('')}</div>`:''}
    ${!mcqBm.length&&!cardBm.length?'<p style="font-size:.8rem;color:var(--dim)">बैटल के किसी सवाल पर या फ्लैशकार्ड पर ☆ दबाकर उसे याद रखने के लिए बुकमार्क कर।</p>':''}
  </div>`;
  el.innerHTML=h;
}
function startMistakes(limit){
  const pool=Track.mistakePool();
  if(!pool.length)return;
  bStart('MISTAKES',{pool:limit?pool.slice(0,limit):pool,mount:'pP',onQuit:renderRevise});
}
function startBookmarks(){
  const pool=Track.bookmarkPool().filter(b=>!b.isCard);
  if(!pool.length)return;
  bStart('BOOKMARKS',{pool,mount:'pP',onQuit:renderRevise});
}

/* ---------- Test Center: mock / PYQ / time challenge / adaptive / sectional ---------- */
function buildMockPool(total){
  total=total||50;
  const ids=Object.keys(QB);
  const totalW=ids.reduce((s,id)=>s+(UNIT_WEIGHT[id]||5),0);
  let pool=[];
  ids.forEach(id=>{
    const want=Math.max(1,Math.round(total*(UNIT_WEIGHT[id]||5)/totalW));
    pool=pool.concat(QB[id].slice().sort(()=>Math.random()-.5).slice(0,Math.min(want,QB[id].length)));
  });
  return pool.sort(()=>Math.random()-.5);
}
function buildPyqPool(){
  let out=[];
  Object.values(QB).forEach(arr=>{out=out.concat(arr.filter(q=>/हूबहू/.test(q.pyq||'')));});
  return out;
}
function buildWeakPool(n){
  const weak=Track.weakUnits(3).slice(0,3).map(x=>x.uid);
  let pool=[];
  weak.forEach(uid=>{pool=pool.concat(QB[uid]||[]);});
  if(!pool.length)Object.values(QB).forEach(arr=>{pool=pool.concat(arr);});
  return pool.sort(()=>Math.random()-.5).slice(0,n||24);
}
function renderTestCenter(){
  const el=document.getElementById('pT2');if(!el)return;
  const pyqCount=buildPyqPool().length;
  const opts=CH.map(c=>`<option value="${c.id}">${c.ic} ${c.t}</option>`).join('');
  el.innerHTML=`
   <div class="blk"><h3>📝 फुल मॉक टेस्ट</h3>
     <p style="font-size:.8rem;color:var(--dim)">50 सवाल • असली परीक्षा जैसा यूनिट-वितरण • 60 मिनट</p>
     <button class="btn" onclick="startMock()">▶ मॉक टेस्ट शुरू</button></div>
   <div class="blk"><h3>⭐ PYQ मोड</h3>
     <p style="font-size:.8rem;color:var(--dim)">सिर्फ़ असली RSSB पिछले पेपर के सवाल (${pyqCount} सवाल, हूबहू) • बिना टाइमर</p>
     <button class="btn" onclick="startPYQ()" ${pyqCount?'':'disabled'}>▶ PYQ मोड शुरू</button></div>
   <div class="blk"><h3>⏱ टाइम चैलेंज</h3>
     <p style="font-size:.8rem;color:var(--dim)">15 सवाल • सिर्फ़ 5 मिनट • असली परीक्षा जैसा दबाव</p>
     <button class="btn" onclick="startTimeChallenge()">▶ चैलेंज शुरू</button></div>
   <div class="blk"><h3>🎯 Adaptive प्रैक्टिस</h3>
     <p style="font-size:.8rem;color:var(--dim)">तेरी सबसे कमज़ोर यूनिट्स से 24 सवाल — बिना टाइमर</p>
     <button class="btn" onclick="startWeak()">▶ Adaptive शुरू</button></div>
   <div class="blk"><h3>📂 सेक्शनल टेस्ट</h3>
     <p style="font-size:.8rem;color:var(--dim)">एक यूनिट चुन, timed टेस्ट दे (15 मिनट)</p>
     <select id="sectSel" class="nsSel" style="width:100%;margin-bottom:8px">${opts}</select>
     <button class="btn" onclick="startSectional()">▶ सेक्शनल शुरू</button></div>`;
}
function startMock(){bStart('MOCK',{pool:buildMockPool(50),time:3600,mount:'pP',onQuit:renderTestCenter});}
function startPYQ(){const p=buildPyqPool();if(!p.length)return;bStart('PYQ',{pool:p,mount:'pP',onQuit:renderTestCenter});}
function startTimeChallenge(){let all=[];Object.values(QB).forEach(a=>{all=all.concat(a);});bStart('TIME',{pool:all,limit:15,time:300,mount:'pP',onQuit:renderTestCenter});}
function startWeak(){bStart('WEAK',{pool:buildWeakPool(24),mount:'pP',onQuit:renderTestCenter});}
function startSectional(){
  const sel=document.getElementById('sectSel');if(!sel)return;
  const id=sel.value;
  bStart(id,{pool:(QB[id]||[]).slice(),time:900,mount:'pP',onQuit:renderTestCenter});
}

function renderProgressPage(){
  try{renderDashboard();}catch(e){}
  try{renderRevise();}catch(e){}
  try{renderTestCenter();}catch(e){}
}

/* ---------- Home nudge: surface the mistake bank before the student has to go looking ---------- */
function renderHomeNudge(){
  const el=document.getElementById('homeNudge');if(!el)return;
  let mist=0;try{mist=Track.mistakePool().length;}catch(e){}
  el.innerHTML=mist?`<div class="blk" style="border-color:var(--gold);background:linear-gradient(135deg,rgba(255,194,51,.1),var(--card))">
    <h3>🎯 आज का रिवीज़न बाकी है</h3>
    <p style="font-size:.82rem;line-height:1.6">${mist} सवाल पहले गलत हुए थे — सिर्फ़ ${Math.min(10,mist)} सवाल, 3 मिनट में दोबारा पक्के कर।</p>
    <button class="btn" onclick="goToRevise()">🔁 अभी रिवीज़न कर</button></div>`:'';
}
function goToRevise(){
  const navBtn=document.querySelector('nav button[data-p="pP"]');if(navBtn)navBtn.click();
  const t=document.querySelectorAll('#pTabs .tb')[1];if(t){t.click();pTab(1,t);}
}
