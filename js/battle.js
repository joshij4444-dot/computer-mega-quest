/*! MODULE: js/battle.js — MCQ battle engine (lives, combo, boss HP, review, timer, bookmarks)
   ARCHITECTURE NOTE: the battle box + result box used to be duplicated verbatim in
   sheet.js (unit battle) AND inline here (Final Boss) — same element ids in both.
   Since the unit-sheet is a modal that stays in the DOM (display:none) even when
   "closed", and the Final Boss box is a permanent child of #pB, BOTH copies could
   exist simultaneously → getElementById silently picked whichever came first in
   document order, so scores/HP could update the wrong hidden copy in some
   sequences. Fixed by making the battle UI a single element that gets *moved*
   (appendChild) into whichever container is starting a session — one DOM node,
   never duplicated, never collides. This also made Test Center (Mock/PYQ/Time/
   Mistakes/Bookmarks) trivial to add: they're just a different pool + mount. */
let bp=[],bi=0,bok=0,bw=[],life=3,cmb=0,bxp=0,bMode='',bQuitCB=null,bCustomPool=false;
let bTimeLimit=0,bTimeLeft=0,bTimer=null;

function battleBoxTemplate(){
  return `<div class="bt">
      <div class="hp"><div class="hpL"><span>🐉 बॉस</span><span id="fp">100%</span></div>
        <div class="hpB f"><i id="fb2"></i></div></div>
      <div class="cmb" id="cb"></div>
      <div class="hp"><div class="hpL"><span id="lt">❤️❤️❤️</span><span id="qc"></span></div>
        <div class="hpB"><i id="yb"></i></div></div>
    </div>
    <div class="qHead"><div class="qN" id="qn"></div><span id="bTimer" class="bTimer" style="display:none"></span>
      <button class="bkStar" id="qBook" onclick="toggleBookmark()" title="याद रखने के लिए बुकमार्क">☆</button></div>
    <div class="qT" id="qt"></div>
    <div id="qo"></div><div class="ex" id="qe"></div>
    <button class="btn" id="qnx" disabled onclick="bNext()">अगला →</button>`;
}
function resBoxTemplate(){
  return `<div id="ri" style="font-size:2.8rem"></div><div class="rb" id="rb"></div>
    <div class="rm" id="rm"></div>
    <div class="rr"><div><b style="color:var(--grn)" id="rc"></b>सही</div>
      <div><b style="color:var(--red)" id="rw"></b>गलत</div>
      <div><b style="color:var(--gold)" id="rx"></b>XP</div></div>
    <button class="btn" id="rrv" onclick="bRev()">📖 गलत दोबारा</button>
    <button class="btn gh" onclick="bQuit()">✕ बंद</button>`;
}
function ensureBattleWrap(){
  let wrap=document.getElementById('battleWrap');
  if(!wrap){
    wrap=document.createElement('div'); wrap.id='battleWrap';
    wrap.innerHTML=`<div class="blk" id="battleBox">${battleBoxTemplate()}</div>
                     <div class="blk res" id="battleRes" style="display:none">${resBoxTemplate()}</div>`;
  }
  return wrap;
}
function mountBattle(mountId){
  const container=document.getElementById(mountId);
  if(!container)return;
  container.appendChild(ensureBattleWrap()); // moves the node if it already lives elsewhere
  document.getElementById('battleBox').style.display='block';
  document.getElementById('battleRes').style.display='none';
}

/* origin unit id of a question — works for live QB refs AND stored mistake/bookmark copies */
function qOrigin(it){
  if(it&&it.uid)return it.uid;
  if(typeof QB==='object')for(const k in QB){if(QB[k].indexOf(it)>=0)return k;}
  return bMode;
}

/* bStart(m) — unchanged calling convention: bStart('p2db') or bStart('FINAL').
   bStart(label, opts) — new: opts.pool=[...] (array of questions), opts.limit,
   opts.time (seconds, 0=untimed), opts.mount (container id), opts.onQuit (callback). */
function bStart(m,opts){
  opts=opts||{};
  bMode=m;
  bCustomPool=!!opts.pool;
  bTimeLimit=opts.time||0;
  bQuitCB=opts.onQuit||null;

  if(opts.pool){
    bp=opts.pool.slice().sort(()=>Math.random()-.5);
    if(opts.limit)bp=bp.slice(0,opts.limit);
  }else if(m==='FINAL'){
    let all=[];Object.keys(QB).forEach(k=>all=all.concat(QB[k]));
    bp=all.sort(()=>Math.random()-.5).slice(0,40);
  }else{
    bp=[...(QB[m]||[])].sort(()=>Math.random()-.5);
  }
  if(!bp.length)return;

  const mountId=opts.mount||(m==='FINAL'?'pB':(opts.pool?'pP':'t2mount'));
  const s=document.getElementById(m==='FINAL'?'fbStart':'bs');
  if(s&&mountId!=='pP')s.style.display='none';
  mountBattle(mountId);
  bi=0;bok=0;bw=[];life=3;cmb=0;bxp=0;
  startTimer();
  bDraw();
}
function startTimer(){
  stopTimer();
  const el=document.getElementById('bTimer');
  if(!bTimeLimit){if(el)el.style.display='none';return;}
  bTimeLeft=bTimeLimit;
  if(el)el.style.display='inline-block';
  drawTimer();
  bTimer=setInterval(()=>{
    bTimeLeft--;
    drawTimer();
    if(bTimeLeft<=0){stopTimer();bRes(false,true);}
  },1000);
}
function drawTimer(){
  const el=document.getElementById('bTimer');if(!el)return;
  const mm=Math.floor(Math.max(0,bTimeLeft)/60),ss=Math.max(0,bTimeLeft)%60;
  el.textContent='⏱ '+mm+':'+String(ss).padStart(2,'0');
  el.classList.toggle('low',bTimeLeft<=30);
}
function stopTimer(){if(bTimer){clearInterval(bTimer);bTimer=null;}}

function bDraw(){
  const it=bp[bi];
  document.getElementById('qn').textContent='प्रश्न '+(bi+1)+'/'+bp.length;
  document.getElementById('qc').textContent=(bi+1)+'/'+bp.length;
  document.getElementById('qt').textContent=it.q;
  document.getElementById('lt').textContent='❤️'.repeat(life)+'🖤'.repeat(3-life);
  document.getElementById('yb').style.width=(life/3*100)+'%';
  const fp=Math.max(0,100-Math.round(bok/bp.length*100));
  document.getElementById('fb2').style.width=fp+'%';
  document.getElementById('fp').textContent=fp+'%';
  document.getElementById('cb').textContent=cmb>=2?'🔥x'+cmb:'';
  const bk=document.getElementById('qBook');
  if(bk){let bm=false;try{bm=Track.isBookmarked(it);}catch(e){}bk.textContent=bm?'★':'☆';bk.classList.toggle('on',bm);}
  const e=document.getElementById('qe');e.className='ex';e.innerHTML='';
  const n=document.getElementById('qnx');n.disabled=true;
  n.textContent=bi===bp.length-1?'परिणाम ✓':'अगला →';
  const box=document.getElementById('qo');box.innerHTML='';
  const L=['A','B','C','D'];
  it.o.forEach((op,i)=>{
    const b=document.createElement('button');b.className='op';
    b.innerHTML=`<span class="lb">${L[i]}</span><span>${op}</span>`;
    b.onclick=()=>{
      if(b.dataset.d)return;
      document.querySelectorAll('#qo .op').forEach(x=>x.dataset.d=1);
      const correct=i===it.a;
      if(correct){b.classList.add('ok');bok++;cmb++;const g=cmb>=3?20:10;bxp+=g;addXP(g);}
      else{b.classList.add('no');document.querySelectorAll('#qo .op')[it.a].classList.add('ok');
        bw.push(it);cmb=0;life=Math.max(0,life-1);}
      try{Track.record(it,correct);}catch(err){}
      e.className='ex on';
      e.innerHTML=`<b>${correct?'✅ सही! 💥':'❌ सही: '+L[it.a]}</b> — ${it.e}`;
      document.getElementById('lt').textContent='❤️'.repeat(life)+'🖤'.repeat(3-life);
      document.getElementById('yb').style.width=(life/3*100)+'%';
      const f2=Math.max(0,100-Math.round(bok/bp.length*100));
      document.getElementById('fb2').style.width=f2+'%';
      document.getElementById('fp').textContent=f2+'%';
      document.getElementById('cb').textContent=cmb>=2?'🔥x'+cmb:'';
      n.disabled=false;
      if(life===0){stopTimer();setTimeout(()=>bRes(true),700);}
    };
    box.appendChild(b);
  });
}
function toggleBookmark(){
  const it=bp[bi];if(!it)return;
  let on=false;try{on=Track.toggleBookmark(it);}catch(e){}
  const bk=document.getElementById('qBook');
  if(bk){bk.textContent=on?'★':'☆';bk.classList.toggle('on',on);}
}
function bNext(){if(bi<bp.length-1){bi++;bDraw();}else bRes(false);}
function bRes(dead,timeUp){
  stopTimer();
  document.getElementById('battleBox').style.display='none';
  document.getElementById('battleRes').style.display='block';
  const p=Math.round(bok/bp.length*100);
  document.getElementById('ri').textContent=dead?'💀':(p>=85?'🏆':(p>=60?'⚔️':'🛡️'));
  document.getElementById('rb').textContent=bok+'/'+bp.length;
  document.getElementById('rc').textContent=bok;
  document.getElementById('rw').textContent=bp.length-bok;
  document.getElementById('rx').textContent='+'+bxp;
  let m;
  if(timeUp)m='⏱ समय खत्म! '+bok+'/'+bp.length+' सही — फिर से कोशिश कर।';
  else if(dead)m='💀 जान खत्म! दोबारा try कर भाई।';
  else if(p===100){m='👑 PERFECT! लीजेंड!';unlock('legend');}
  else if(p>=85)m='🏆 बॉस हार गया! Selection पक्का!';
  else if(p>=60)m='⚔️ अच्छी लड़ाई — थोड़ा और।';
  else m='📖 दोबारा पढ़, फिर बैटल।';
  document.getElementById('rm').textContent=m;
  document.getElementById('rrv').style.display=bw.length?'block':'none';
  if(!bCustomPool&&bMode!=='FINAL'&&!dead){
    S.scores[bMode]=Math.max(S.scores[bMode]||0,p);save();renderCG();
  }
  if((bMode==='FINAL'||bCustomPool)&&p>=85)unlock('legend');
}
function bRev(){if(!bw.length)return;bp=[...bw];bi=0;bok=0;bw=[];life=3;cmb=0;bTimeLimit=0;
  document.getElementById('battleRes').style.display='none';
  document.getElementById('battleBox').style.display='block';bDraw();}
function bQuit(){
  stopTimer();
  const box=document.getElementById('battleBox'),res=document.getElementById('battleRes');
  if(box)box.style.display='none';
  if(res)res.style.display='none';
  if(bQuitCB){const cb=bQuitCB;bQuitCB=null;cb();}
  else if(bMode==='FINAL'){const s=document.getElementById('fbStart');if(s)s.style.display='block';}
  else if(!bCustomPool){const s=document.getElementById('bs');if(s)s.style.display='block';}
}
