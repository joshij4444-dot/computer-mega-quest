/*! MODULE: js/sheet.js — chapter sheet overlay (lesson/cards/battle tabs) */
/* ============ SHEET ============ */
let curC='';
function openCh(id){
  curC=id;
  const c=CH.find(x=>x.id===id);
  document.getElementById('shTitle').textContent=c.ic+' '+c.t;
  document.getElementById('shTabs').innerHTML=`
    <button class="tb on" onclick="tab(0,this)">📖 पढ़ो</button>
    <button class="tb" onclick="tab(1,this)">⚡ कार्ड</button>
    <button class="tb" onclick="tab(2,this)">⚔️ बैटल</button>`;
  const cards=(CARDS[id]||[]).map((f,i)=>{
    let bm=false;try{bm=Track.isCardBookmarked(id,i);}catch(e){}
    return `<div class="fl" onclick="this.classList.toggle('on')"><div class="fi">
      <div class="fF"><button class="cardStar ${bm?'on':''}" onclick="event.stopPropagation();toggleCardBM(this,'${id}',${i})">${bm?'★':'☆'}</button><div class="q">${f[0]}</div></div>
      <div class="fB"><div><div class="a">${f[1]}</div><div class="s">${f[2]}</div></div></div>
     </div></div>`;}).join('');
  document.getElementById('shBody').innerHTML=`
   <div class="tp on" id="t0">${LESSON[id]||'<div class="blk"><p>जल्द...</p></div>'}
     <button class="btn" onclick="doneCh('${id}')">✅ पढ़ लिया (+${c.xp} XP)</button></div>
   <div class="tp" id="t1"><div class="blk"><h3>⚡ फ्लैश कार्ड</h3>
     <p style="font-size:.78rem;color:var(--dim)">टैप कर के पलटो</p>
     <div class="fg" style="margin-top:9px">${cards}</div></div></div>
   <div class="tp" id="t2"><div class="blk" id="bs">
     <h3>⚔️ ${c.t} — बैटल</h3>
     <p style="line-height:1.7">${(QB[id]||[]).length} सवाल • 3 ❤️ जान • combo = डबल XP</p>
     <button class="btn" onclick="bStart('${id}')">⚔️ शुरू करो</button></div>
     <div id="t2mount"></div></div>`;
  document.getElementById('sh').classList.add('on');
  document.body.style.overflow='hidden';
  document.getElementById('sh').scrollTop=0;
  /* lab lifecycle hook — lesson HTML is now in the DOM, so any embedded lab can draw itself */
  if(typeof UNIT_INIT==='object'&&typeof UNIT_INIT[id]==='function'){
    try{UNIT_INIT[id]();}catch(e){console.error('lab init failed for '+id,e);}
  }
}
function tab(i,el){
  document.querySelectorAll('#shTabs .tb').forEach(x=>x.classList.remove('on'));el.classList.add('on');
  document.querySelectorAll('#shBody .tp').forEach((p,j)=>p.classList.toggle('on',j===i));
}
function doneCh(id){
  if(!S.done.includes(id)){S.done.push(id);save();
    const c=CH.find(x=>x.id===id);addXP(c.xp);unlock(id);renderCG();}
  closeSh();
}
function closeSh(){document.getElementById('sh').classList.remove('on');document.body.style.overflow='';}

