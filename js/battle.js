/*! MODULE: js/battle.js — MCQ battle engine (lives, combo, boss HP, review) */
/* ============ BATTLE ============ */
let bp=[],bi=0,bok=0,bw=[],life=3,cmb=0,bxp=0,bMode='';
function bStart(m){
  bMode=m;
  if(m==='FINAL'){
    let all=[];Object.keys(QB).forEach(k=>all=all.concat(QB[k]));
    bp=all.sort(()=>Math.random()-.5).slice(0,40);
    document.getElementById('fbStart').style.display='none';
    if(!document.getElementById('fbBox')){
      const d=document.createElement('div');d.innerHTML=`
      <div class="blk" id="fbBox">
        <div class="bt">
          <div class="hp"><div class="hpL"><span>🐉 बॉस</span><span id="fp">100%</span></div>
            <div class="hpB f"><i id="fb2"></i></div></div>
          <div class="cmb" id="cb"></div>
          <div class="hp"><div class="hpL"><span id="lt">❤️❤️❤️</span><span id="qc"></span></div>
            <div class="hpB"><i id="yb"></i></div></div>
        </div>
        <div class="qN" id="qn"></div><div class="qT" id="qt"></div>
        <div id="qo"></div><div class="ex" id="qe"></div>
        <button class="btn" id="qnx" disabled onclick="bNext()">अगला →</button>
      </div>
      <div class="blk res" id="br" style="display:none">
        <div id="ri" style="font-size:2.8rem"></div><div class="rb" id="rb"></div>
        <div class="rm" id="rm"></div>
        <div class="rr"><div><b style="color:var(--grn)" id="rc"></b>सही</div>
          <div><b style="color:var(--red)" id="rw"></b>गलत</div>
          <div><b style="color:var(--gold)" id="rx"></b>XP</div></div>
        <button class="btn" id="rrv" onclick="bRev()">📖 गलत दोबारा</button>
        <button class="btn gh" onclick="location.reload()">✕ बंद</button>
      </div>`;
      document.getElementById('pB').appendChild(d);
    }
  }else{
    bp=[...(QB[m]||[])].sort(()=>Math.random()-.5);
    document.getElementById('bs').style.display='none';
    document.getElementById('bb').style.display='block';
    document.getElementById('br').style.display='none';
  }
  bi=0;bok=0;bw=[];life=3;cmb=0;bxp=0;bDraw();
}
function bDraw(){
  const it=bp[bi];
  document.getElementById('qn').textContent='प्रश्न '+(bi+1);
  document.getElementById('qc').textContent=(bi+1)+'/'+bp.length;
  document.getElementById('qt').textContent=it.q;
  document.getElementById('lt').textContent='❤️'.repeat(life)+'🖤'.repeat(3-life);
  document.getElementById('yb').style.width=(life/3*100)+'%';
  const fp=Math.max(0,100-Math.round(bok/bp.length*100));
  document.getElementById('fb2').style.width=fp+'%';
  document.getElementById('fp').textContent=fp+'%';
  document.getElementById('cb').textContent=cmb>=2?'🔥x'+cmb:'';
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
      if(i===it.a){b.classList.add('ok');bok++;cmb++;const g=cmb>=3?20:10;bxp+=g;addXP(g);}
      else{b.classList.add('no');document.querySelectorAll('#qo .op')[it.a].classList.add('ok');
        bw.push(it);cmb=0;life=Math.max(0,life-1);}
      e.className='ex on';
      e.innerHTML=`<b>${i===it.a?'✅ सही! 💥':'❌ सही: '+L[it.a]}</b> — ${it.e}`;
      document.getElementById('lt').textContent='❤️'.repeat(life)+'🖤'.repeat(3-life);
      document.getElementById('yb').style.width=(life/3*100)+'%';
      const f2=Math.max(0,100-Math.round(bok/bp.length*100));
      document.getElementById('fb2').style.width=f2+'%';
      document.getElementById('fp').textContent=f2+'%';
      document.getElementById('cb').textContent=cmb>=2?'🔥x'+cmb:'';
      n.disabled=false;
      if(life===0)setTimeout(()=>bRes(true),700);
    };
    box.appendChild(b);
  });
}
function bNext(){if(bi<bp.length-1){bi++;bDraw();}else bRes(false);}
function bRes(dead){
  const bx=bMode==='FINAL'?'fbBox':'bb';
  document.getElementById(bx).style.display='none';
  document.getElementById('br').style.display='block';
  const p=Math.round(bok/bp.length*100);
  document.getElementById('ri').textContent=dead?'💀':(p>=85?'🏆':(p>=60?'⚔️':'🛡️'));
  document.getElementById('rb').textContent=bok+'/'+bp.length;
  document.getElementById('rc').textContent=bok;
  document.getElementById('rw').textContent=bp.length-bok;
  document.getElementById('rx').textContent='+'+bxp;
  let m;
  if(dead)m='💀 जान खत्म! दोबारा try कर भाई।';
  else if(p===100){m='👑 PERFECT! लीजेंड!';unlock('legend');}
  else if(p>=85)m='🏆 बॉस हार गया! Selection पक्का!';
  else if(p>=60)m='⚔️ अच्छी लड़ाई — थोड़ा और।';
  else m='📖 दोबारा पढ़, फिर बैटल।';
  document.getElementById('rm').textContent=m;
  document.getElementById('rrv').style.display=bw.length?'block':'none';
  if(bMode!=='FINAL'&&!dead){
    S.scores[bMode]=Math.max(S.scores[bMode]||0,p);save();renderCG();
  }
  if(bMode==='FINAL'&&p>=85)unlock('legend');
}
function bRev(){if(!bw.length)return;bp=[...bw];bi=0;bok=0;bw=[];life=3;cmb=0;
  document.getElementById('br').style.display='none';
  document.getElementById(bMode==='FINAL'?'fbBox':'bb').style.display='block';bDraw();}
function bQuit(){document.getElementById('br').style.display='none';
  document.getElementById('bb').style.display='none';
  document.getElementById('bs').style.display='block';}

