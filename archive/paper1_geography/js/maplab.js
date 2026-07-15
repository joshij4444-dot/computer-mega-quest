/*! MODULE: js/maplab.js — Map Lab (v1 base + v2 atlas upgrade; ORDER IS LOAD-BEARING) */
/* ===== MAP LAB PRO ===== */
/* ======= DISTRICT DATA — हर जिले पर सारे chapters के facts =======
 cat: भौतिक(P) जलवायु(C) नदी(R) झील(L) बाँध(D) खनिज(M) मिट्टी(S) वन(F) जल(W) सीमा(B)
*/
let L='div';
document.getElementById('lay').innerHTML=LAYERS.map(l=>
 `<button class="lyP ${l.k==='div'?'on':''}" data-k="${l.k}"
   style="${l.k==='div'?'background:'+l.c:''}">${l.n}</button>`).join('');
document.querySelectorAll('.lyP').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.lyP').forEach(x=>{x.classList.remove('on');x.style.background='';});
  b.classList.add('on');
  const lay=LAYERS.find(l=>l.k===b.dataset.k);b.style.background=lay.c;
  L=b.dataset.k;
  if(L==='quiz')startQ();else{stopQ();paint();}
});

/* ======= BUILD MAP ======= */
const CW=23,CHh=22,OX=15,OY=17;
function build(){
  let s='<defs><filter id="sf"><feDropShadow dx="0" dy="1.5" stdDeviation="1.2" flood-opacity=".45"/></filter></defs>';
  // कर्क रेखा
  const ty=OY+7*CHh+13;
  s+=`<line class="tlP" x1="6" y1="${ty}" x2="204" y2="${ty-7}"/>
      <text x="176" y="${ty-10}" font-size="5" fill="#ffc233" font-weight="900">कर्क रेखा</text>`;
  // पाकिस्तान सीमा
  s+=`<path class="pklP" d="M${OX+CW-6},${OY-7} Q${OX-6},${OY+CHh*1.4} ${OX-8},${OY+CHh*2.7}
      Q${OX-10},${OY+CHh*3.8} ${OX+3},${OY+CHh*4.5}"/>
      <text x="5" y="${OY+CHh*2.2}" class="nbP" fill="#ff8b96"
      transform="rotate(-90 5 ${OY+CHh*2.2})">पाकिस्तान</text>`;
  // पड़ोसी राज्य
  s+=`<text class="nbP" x="52" y="9">पंजाब</text><text class="nbP" x="130" y="9">हरियाणा</text>
      <text class="nbP" x="203" y="${OY+CHh*2.2}" transform="rotate(90 203 ${OY+CHh*2.2})">उ.प्र.</text>
      <text class="nbP" x="205" y="${OY+CHh*4.8}" transform="rotate(90 205 ${OY+CHh*4.8})">म.प्र.</text>
      <text class="nbP" x="24" y="${OY+CHh*7.9}">गुजरात</text>`;
  D.forEach((d,i)=>{
    const x=OX+d.x*CW,y=OY+d.y*CHh;
    s+=`<rect class="dP" id="d${i}" x="${x}" y="${y}" width="${CW-2.6}" height="${CHh-2.6}" rx="3.5"
        fill="${DIV[d.dv]}" filter="url(#sf)" onclick="pick(${i})"/>`;
    const nm=d.n.length>10?d.n.slice(0,9)+'…':d.n;
    s+=`<text class="dlP" x="${x+(CW-2.6)/2}" y="${y+(CHh-2.6)/2+1.8}">${nm}</text>`;
  });
  document.getElementById('map').innerHTML=s;
}

/* ======= PAINT ======= */
function paint(){
  let cnt=0;
  D.forEach((d,i)=>{
    const el=document.getElementById('d'+i);
    el.classList.remove('dim','gl','sel');
    let f=DIV[d.dv],show=true;
    if(L==='div'){}
    else if(L==='star'){
      show=d.f.some(x=>x[2]===1&&(x[1].includes('⭐')||x[1].includes('🏆')||x[1].includes('सबसे')));
      f=show?'#ffc233':'#1c2a44';
    }
    else if(L==='B'){
      show=d.b!=='n';
      f = d.b==='i' ? '#ff4d5e' : (d.st.length>1?'#ffc233':'#22d3ee');
      if(!show)f='#1c2a44';
      if(d.st.length>1||d.b==='i')el.classList.add('gl');
    }
    else{
      show=d.f.some(x=>x[0]===L);
      f=show?CAT[L][2]:'#1c2a44';
      if(show&&d.f.some(x=>x[0]===L&&x[2]===1))el.classList.add('gl');
    }
    if(!show)el.classList.add('dim');else cnt++;
    el.setAttribute('fill',f);
    el.style.color=f;
  });
  lgd(cnt);trick();
}
function lgd(cnt){
  const g=document.getElementById('lgm'),c=document.getElementById('cntm');
  if(L==='div'){g.innerHTML=Object.keys(DIV).map(k=>
    `<span><i class="swP" style="background:${DIV[k]}"></i>${k}</span>`).join('');c.textContent='';}
  else if(L==='B'){g.innerHTML=`<span><i class="swP" style="background:#ff4d5e"></i>पाकिस्तान (4)</span>
    <span><i class="swP" style="background:#ffc233"></i>2 राज्यों से (4)</span>
    <span><i class="swP" style="background:#22d3ee"></i>1 राज्य से</span>
    <span><i class="swP" style="background:#1c2a44"></i>अंतःस्थलीय (13)</span>`;c.textContent='';}
  else if(L==='star'){g.innerHTML=`<span><i class="swP" style="background:#ffc233"></i>exam के "सबसे/⭐" वाले जिले</span>`;
    c.textContent=`${cnt} जिलों में records`;}
  else{g.innerHTML=`<span><i class="swP" style="background:${CAT[L][2]}"></i>${CAT[L][1]} वाले जिले</span>
    <span><i class="swP" style="background:${CAT[L][2]};animation:gl 1.6s infinite"></i>चमकते = ⭐ ज़रूरी</span>`;
    c.textContent=`${cnt} जिलों में ${CAT[L][1]} के facts`;}
}
function trick(){
  const T=document.getElementById('tkBoxM');
  const M={
   div:`<div class="tk">🧠 <b>7 संभाग:</b> जोधपुर(8—सर्वाधिक) • जयपुर व उदयपुर(7) • अजमेर(6) • भरतपुर(5) • कोटा व बीकानेर(4—न्यूनतम)<br>
    <span class="hl">अजमेर</span> = सभी संभागों से सीमा बनाने वाला</div>`,
   B:`<div class="tk">🧠 <b>पाक से 4:</b> श्रीगंगानगर, बीकानेर, जैसलमेर, बाड़मेर (लाल)<br>
    <b>2 राज्यों से 4:</b> हनुमानगढ़, डीग, धौलपुर, बाँसवाड़ा (सुनहरे, चमकते)</div>
    <div class="tr">📌 <b>दोनों सीमाओं पर:</b> श्रीगंगानगर व बाड़मेर • <b>अंतःस्थलीय:</b> 13 जिले<br>
    सीमा क्रम: <b>MP(1600) &gt; हरियाणा(1262) &gt; गुजरात(1022) &gt; UP(877) &gt; पंजाब(89)</b> — "म-ह-गु-उ-पं"</div>`,
   M:`<div class="tk">⛏️ <b>खनिज मास्टर-जोड़ी:</b><br>
    तांबा-<b>खेतड़ी</b>(झुंझुनूं) • जस्ता-<b>आगुचा</b>(भीलवाड़ा) • टंगस्टन-<b>डेगाना</b>(नागौर)<br>
    जिप्सम-<b>जामसर</b>(बीकानेर) • मार्बल-<b>मकराना</b>(नागौर) • पेट्रोल-<b>मंगला</b>(बाड़मेर)</div>`,
   R:`<div class="tk">🌊 सबसे लंबी = <b>चंबल</b> | पूर्णतः राज. में = <b>बनास</b> (खमनौर, राजसमंद से)<br>
    दो त्रिवेणी: <b>रामेश्वर घाट</b>(स.माधोपुर) = चंबल+बनास+सीप • <b>बेणेश्वर</b>(डूंगरपुर) = सोम+माही+जाखम</div>`,
   L:`<div class="tk">🏞️ सबसे बड़ी खारी = <b>सांभर</b>(जयपुर) • शुद्ध नमक = <b>पचपदरा</b>(बालोतरा)<br>
    सबसे बड़ी कृत्रिम = <b>जयसमंद</b>(सलूम्बर) • सबसे ऊँची = <b>नक्की</b>(सिरोही) • सबसे पवित्र = <b>पुष्कर</b>(अजमेर)</div>`,
   D:`<div class="tk">💦 सबसे <b>बड़ा</b> = राणा प्रताप सागर(चित्तौड़) • सबसे <b>लंबा</b> = माही बजाज(बाँसवाड़ा)<br>
    सबसे <b>ऊँचा</b> = जाखम(प्रतापगढ़) • सबसे बड़ी पेयजल = बीसलपुर(टोंक)</div>`,
   F:`<div class="tk">🌳 सर्वाधिक वन = <b>उदयपुर</b> (दोनों) • न्यूनतम = <b>चूरू</b><br>
    धोक वन 58%(सबसे ज़्यादा) • सदाबहार 1%(माउंट आबू) • खेजड़ी=राज्य वृक्ष(जोधपुर)</div>`,
   P:`<div class="tk">🏜️ सबसे बड़ा जिला = <b>जैसलमेर</b> • सबसे छोटा = <b>धौलपुर</b><br>
    सबसे ऊँची चोटी = <b>गुरु शिखर</b>(सिरोही, 1722) • सबसे ऊँचा पठार = उड़िया</div>`,
   C:`<div class="tk">🌦️ सबसे गरम = <b>फलौदी/चूरू</b> • सबसे ठंडा = <b>माउंट आबू</b>(सिरोही)<br>
    सर्वाधिक वर्षा = <b>झालावाड़</b>(ज़िला) / माउंट आबू(स्थान) • आँधी = श्रीगंगानगर</div>`,
   W:`<div class="tk">💧 बावड़ियों का शहर = <b>बूंदी</b> • खड़ीन = <b>जैसलमेर</b>(पालीवाल)<br>
    MJSA शुरुआत = <b>झालावाड़</b>(तनकनखेड़ी) • जोहड़ = शेखावाटी(राजेंद्र सिंह)</div>`,
   star:`<div class="tk">🏆 सारे records एक साथ — इन जिलों पर टैप कर के पढ़!<br>
    ये वही हैं जो exam में बार-बार आते हैं।</div>`
  };
  T.innerHTML=M[L]||'';
}

/* ======= PICK ======= */
let sel=-1;
function pick(i){
  if(quiz){chk(i);return;}
  sel=i;
  D.forEach((_,j)=>document.getElementById('d'+j).classList.toggle('sel',j===i));
  const d=D[i];
  const bd=[];
  if(d.b==='i')bd.push('<span class="bcP" style="background:rgba(255,77,94,.16);color:#ff8b96">🔴 पाकिस्तान सीमा</span>');
  d.st.forEach(s=>bd.push(`<span class="bcP" style="background:rgba(34,211,238,.14);color:#22d3ee">🌈 ${s}</span>`));
  if(d.b==='n')bd.push('<span class="bcP" style="background:rgba(38,208,124,.14);color:#26d07c">🟢 अंतःस्थलीय</span>');
  // facts — layer के हिसाब से sort
  let fs=[...d.f];
  if(L!=='div'&&L!=='star'&&L!=='B'&&CAT[L]) fs.sort((a,b)=>(b[0]===L?1:0)-(a[0]===L?1:0));
  fs.sort((a,b)=>b[2]-a[2]);
  document.getElementById('pnl').innerHTML=
   `<div class="phP">
     <div class="pinP" style="background:${DIV[d.dv]}22;border:1px solid ${DIV[d.dv]}">📍</div>
     <div><div class="nmP">${d.n}</div><div class="sbP">${d.dv} संभाग • ${d.f.length} facts</div></div>
    </div>
    <div class="bchP">${bd.join('')}</div>
    <div class="fsP">${fs.map(f=>
      `<div class="frP"><div class="fiP">${CAT[f[0]][0]}</div>
       <div class="ftP ${f[2]?'star':''}">${f[1]}</div></div>`).join('')}</div>`;
  document.getElementById('pnl').scrollIntoView({behavior:'smooth',block:'nearest'});
}

/* ======= SEARCH ======= */
const sIn=document.getElementById('sIn'),sug=document.getElementById('sug');
sIn.oninput=()=>{
  const v=sIn.value.trim();
  if(!v){sug.classList.remove('on');return;}
  const hits=[];
  D.forEach((d,i)=>{
    if(d.n.includes(v)){hits.push([i,d.n,'जिला']);return;}
    const m=d.f.find(f=>f[1].replace(/<[^>]+>/g,'').includes(v));
    if(m)hits.push([i,d.n,m[1].replace(/<[^>]+>/g,'').slice(0,26)+'…']);
  });
  if(!hits.length){sug.innerHTML='<div style="color:var(--dim)">कुछ नहीं मिला</div>';sug.classList.add('on');return;}
  sug.innerHTML=hits.slice(0,8).map(h=>
    `<div onclick="go(${h[0]})"><b style="color:var(--gold)">${h[1]}</b> <span style="color:var(--dim);font-size:.74rem">— ${h[2]}</span></div>`).join('');
  sug.classList.add('on');
};
function go(i){sug.classList.remove('on');sIn.value='';pick(i);
  document.getElementById('d'+i).classList.add('gl');
  setTimeout(()=>document.getElementById('d'+i).classList.remove('gl'),2600);}
document.addEventListener('click',e=>{if(!e.target.closest('.srchP'))sug.classList.remove('on');});

/* ======= QUIZ ======= */
let quiz=false,ql=[],qi=0,qs=0,stk=0;
function startQ(){
  quiz=true;qs=0;qi=0;stk=0;
  ql=[...QQ].sort(()=>Math.random()-.5);
  document.getElementById('qzm').classList.add('on');
  document.getElementById('totm').textContent=ql.length;
  document.getElementById('scm').textContent=0;
  D.forEach((_,j)=>{const e=document.getElementById('d'+j);
    e.classList.remove('dim','gl','sel');e.setAttribute('fill','#1c2a44');});
  document.getElementById('lgm').innerHTML='';document.getElementById('cntm').textContent='';
  document.getElementById('tkBoxM').innerHTML='';
  document.getElementById('pnl').innerHTML='<div class="empty">🎯 क्विज़ चालू — ऊपर सवाल पढ़, नक्शे पर टैप कर!</div>';
  ask();
}
function ask(){
  if(qi>=ql.length){
    document.getElementById('akm').innerHTML=`🏆 खत्म! स्कोर: <b>${qs}/${ql.length}</b>`;
    document.getElementById('fbkm').innerHTML= qs>=28?'<span style="color:var(--grn)">कमाल भाई! नक्शा तेरा हो गया 🔥</span>':
      '<span style="color:var(--gold)">थोड़ा और खेल — फिर पक्का!</span>';
    return;
  }
  document.getElementById('akm').innerHTML=ql[qi][0];
  document.getElementById('fbkm').innerHTML='';
  document.getElementById('stkm').innerHTML=stk>=2?`🔥 x${stk}`:'';
}
function chk(i){
  if(qi>=ql.length)return;
  const r=ql[qi][1],el=document.getElementById('d'+i);
  if(D[i].n===r){qs++;stk++;el.setAttribute('fill','#26d07c');
    document.getElementById('fbkm').innerHTML='<span style="color:var(--grn)">✅ बिल्कुल सही!</span>';}
  else{stk=0;el.setAttribute('fill','#ff4d5e');
    const ri=D.findIndex(d=>d.n===r);
    if(ri>=0){const re=document.getElementById('d'+ri);re.setAttribute('fill','#26d07c');re.classList.add('gl');}
    document.getElementById('fbkm').innerHTML=`<span style="color:var(--red)">❌ सही: <b>${r}</b> (हरा)</span>`;}
  document.getElementById('scm').textContent=qs;
  setTimeout(()=>{
    D.forEach((_,j)=>{const e=document.getElementById('d'+j);
      e.setAttribute('fill','#1c2a44');e.classList.remove('gl');});
    qi++;ask();
  },1500);
}
function stopQ(){quiz=false;document.getElementById('qzm').classList.remove('on');
  document.querySelectorAll('.lyP').forEach(x=>{x.classList.remove('on');x.style.background='';});
  const b=document.querySelector('.lyP[data-k="div"]');b.classList.add('on');b.style.background='#ffc233';
  L='div';paint();}

let mapReady=false;
function loadMap(){ if(mapReady)return; mapReady=true; build(); paint(); }



/* ================= MAP LAB PRO+ : ATLAS UPGRADE (केवल मैप लैब) ================= */
/* ---- 1. जिला-वार विस्तृत एटलस डेटा ---- */
NEWL.forEach(o=>{ if(!LAYERS.some(l=>l.k===o.k)) LAYERS.splice(LAYERS.length-2,0,{k:o.k,n:SET[o.k].n,c:SET[o.k].c}); });

/* ---- 3. मैप-लैब UI: मोड बार + लर्न पैनल (सिर्फ #pM में) ---- */
const pMEl=document.getElementById('pM');
const modeBar=document.createElement('div');
modeBar.className='layP';modeBar.id='mlMode';modeBar.style.marginBottom='.2rem';
modeBar.innerHTML=`<button class="lyP on" id="mdE" style="background:#ffc233">🧭 एक्सप्लोर</button>
 <button class="lyP" id="mdL">📚 लर्निंग मोड</button>
 <button class="lyP" id="mdX">🎯 RSSB एग्ज़ाम मोड</button>`;
pMEl.insertBefore(modeBar,document.querySelector('#pM .srchP'));
const learnBox=document.createElement('div');learnBox.id='mlLearn';learnBox.style.display='none';
pMEl.insertBefore(learnBox,document.getElementById('lay'));
const diffBox=document.createElement('div');diffBox.id='mlDiff';diffBox.style.display='none';
diffBox.className='layP';
diffBox.innerHTML=`<button class="lyP on" data-d="1" style="background:#26d07c">🟢 आसान</button>
 <button class="lyP" data-d="2">🟡 मध्यम</button>
 <button class="lyP" data-d="3">🔴 कठिन</button>
 <button class="lyP" data-d="0">🎲 मिक्स</button>`;
pMEl.insertBefore(diffBox,document.getElementById('qzm'));

/* ---- 4. रंग/पेंट (सभी पुराने + नए लेयर) ---- */
let hlList=null;
function paint(){
  let cnt=0;
  D.forEach((d,i)=>{
    const el=document.getElementById('d'+i);
    if(!el)return;
    el.classList.remove('dim','gl','sel');
    let f=DIV[d.dv],show=true;
    if(hlList){
      show=hlList.includes(d.n); f=show?'#ffc233':'#1c2a44';
      if(show)el.classList.add('gl');
    }
    else if(L==='div'){}
    else if(L==='star'){
      show=d.f.some(x=>x[2]===1&&(x[1].includes('⭐')||x[1].includes('🏆')||x[1].includes('सबसे')));
      f=show?'#ffc233':'#1c2a44';
    }
    else if(L==='B'){
      show=d.b!=='n';
      f = d.b==='i' ? '#ff4d5e' : (d.st.length>1?'#ffc233':'#22d3ee');
      if(!show)f='#1c2a44';
      if(d.st.length>1||d.b==='i')el.classList.add('gl');
    }
    else if(SET[L]){
      const e=SET[L].m[d.n];
      show=!!e; f=show?e[0]:'#1c2a44';
      if(show&&e[1].includes('सबसे'))el.classList.add('gl');
    }
    else if(CAT[L]){
      show=d.f.some(x=>x[0]===L);
      f=show?CAT[L][2]:'#1c2a44';
      if(show&&d.f.some(x=>x[0]===L&&x[2]===1))el.classList.add('gl');
    }
    if(!show)el.classList.add('dim');else cnt++;
    el.setAttribute('fill',f);
    el.style.color=f;
  });
  lgd(cnt);trick();
}
function lgd(cnt){
  const g=document.getElementById('lgm'),c=document.getElementById('cntm');
  if(hlList){g.innerHTML=`<span><i class="swP" style="background:#ffc233"></i>खोज परिणाम</span>`;
    c.textContent=`${hlList.length} जिले हाइलाइट`;return;}
  if(L==='div'){g.innerHTML=Object.keys(DIV).map(k=>
    `<span><i class="swP" style="background:${DIV[k]}"></i>${k}</span>`).join('');c.textContent='7 संभाग • 41 जिले';}
  else if(L==='B'){g.innerHTML=`<span><i class="swP" style="background:#ff4d5e"></i>पाकिस्तान</span>
    <span><i class="swP" style="background:#ffc233"></i>2 राज्यों से</span>
    <span><i class="swP" style="background:#22d3ee"></i>1 राज्य से</span>
    <span><i class="swP" style="background:#1c2a44"></i>अंतःस्थलीय</span>`;c.textContent='';}
  else if(L==='star'){g.innerHTML=`<span><i class="swP" style="background:#ffc233"></i>records वाले जिले</span>`;
    c.textContent=`${cnt} जिलों में records`;}
  else if(SET[L]){
    const byC={},s=SET[L];
    Object.keys(s.m).forEach(k=>{const e=s.m[k];if(!byC[e[0]])byC[e[0]]=e[1].split('—')[0].trim();});
    g.innerHTML=Object.keys(byC).slice(0,8).map(col=>
      `<span><i class="swP" style="background:${col}"></i>${byC[col]}</span>`).join('');
    c.textContent=`${cnt} जिले • ${s.lg}`;}
  else if(CAT[L]){g.innerHTML=`<span><i class="swP" style="background:${CAT[L][2]}"></i>${CAT[L][1]} वाले जिले</span>
    <span><i class="swP" style="background:${CAT[L][2]};animation:gl 1.6s infinite"></i>चमकते = ⭐ ज़रूरी</span>`;
    c.textContent=`${cnt} जिलों में ${CAT[L][1]} के facts`;}
}
const TK2={
 ar:`<div class="tk">⛰️ <b>अरावली:</b> विश्व की प्राचीनतम वलित पर्वतमाला • दिशा द.प. → उ.पू. • लंबाई ≈692 किमी<br>
  ऊँचाई क्रम: <span class="hl">गुरुशिखर 1722 (सिरोही) &gt; सेर 1597 &gt; दिलवाड़ा 1442 &gt; जरगा 1431 (उदयपुर) &gt; अचलगढ़ 1380 &gt; कुम्भलगढ़ 1224</span></div>
  <div class="tr">📌 <b>ट्रैप:</b> दूसरी सबसे ऊँची चोटी = <b>सेर</b> (जरगा नहीं)। अरावली मानसून के <b>समांतर</b> है — इसीलिए पश्चिम सूखा।</div>`,
 np:`<div class="tk">🏞️ <b>3 राष्ट्रीय उद्यान:</b> केवलादेव (भरतपुर — पक्षी) • रणथंभौर (स.माधोपुर — बाघ) • मुकुंदरा हिल्स (कोटा, 2012)<br>
  ट्रिक: <span class="hl">"के-र-मु"</span></div>
  <div class="tr">📌 <b>ट्रैप:</b> सरिस्का <b>राष्ट्रीय उद्यान नहीं</b> — वह अभयारण्य/टाइगर रिजर्व है।</div>`,
 ws:`<div class="tk">🐅 <b>26 अभयारण्य</b> • जीव-जोड़ी: गोडावण-<b>मरु उद्यान</b> • काला हिरण-<b>तालछापर</b> • उड़न गिलहरी-<b>सीतामाता</b> • घड़ियाल/डॉल्फिन-<b>चंबल</b> • कुरजाँ-<b>खींचन</b><br>
  कैलादेवी = <span class="hl">दूसरा सबसे बड़ा अभयारण्य</span></div>`,
 cn:`<div class="tk">🛶 <b>IGNP (मरु गंगा):</b> हरिके बैराज (पंजाब) → गडरारोड (बाड़मेर) • ≈845 किमी • 7 लिफ्ट नहरें<br>
  प्रारूप <b>कँवर सेन</b> → उद्घाटन <b>31 मार्च 1958</b> (पंत) → पहला पानी <b>11 अक्टूबर 1961</b> (राधाकृष्णन)</div>
  <div class="tr">📌 गंगनहर (1927) = राज्य की <b>पहली</b> सिंचाई परियोजना • चारणवाला = दो जिलों वाली इकलौती शाखा।</div>`,
 ip:`<div class="tk">💧 <b>बाँध रिकॉर्ड:</b> सबसे बड़ा = राणा प्रताप सागर (चित्तौड़गढ़) • सबसे लंबा = माही बजाज सागर (बाँसवाड़ा) • सबसे ऊँचा = जाखम (प्रतापगढ़) • सबसे बड़ी पेयजल = बीसलपुर (टोंक)<br>
  फव्वारा पद्धति = <span class="hl">नर्मदा नहर (जालोर-बालोतरा)</span></div>`,
 rn:`<div class="tk">🌧️ वर्षा <b>दक्षिण-पूर्व → उत्तर-पश्चिम</b> घटती है • औसत <b>57.5 सेमी</b><br>
  सर्वाधिक <b>जिला</b> = झालावाड़ • सर्वाधिक <b>स्थान</b> = माउंट आबू (≈150 सेमी) • न्यूनतम = जैसलमेर (≈9 सेमी)</div>
  <div class="tr">📌 वर्षा परिवर्तिता — सर्वाधिक <b>जैसलमेर</b>, न्यूनतम <b>झालावाड़</b>।</div>`,
 so:`<div class="tk">🌱 रेतीली (सर्वाधिक क्षेत्र) • जलोढ़ (सबसे उपजाऊ — पूर्वी) • काली (हाड़ौती, लावा — जल धारण सर्वाधिक) • लाल दोमट (दक्षिण — मक्का)<br>
  सुधार: <span class="hl">अम्लीय → चूना, क्षारीय → जिप्सम</span></div>`,
 cl:`<div class="tk">🌦️ कोपेन: <b>BWhw</b> (सबसे बड़ा — पश्चिम) • BShw (मध्य) • Cwg (पूर्व) • <b>Aw</b> (सबसे छोटा — दक्षिण)<br>
  ट्रिक: <span class="hl">"B से बड़ा, A से छोटा"</span></div>`,
 ag:`<div class="tk">🌾 सरसों-<b>भरतपुर</b> • मक्का-<b>भीलवाड़ा/उदयपुर</b> • सोयाबीन-<b>कोटा/झालावाड़</b> • बाजरा-<b>पश्चिमी राजस्थान</b> • जीरा/इसबगोल-<b>जालौर</b> • संतरा-<b>झालावाड़</b></div>`,
 tu:`<div class="tk">🕌 विश्व धरोहर दुर्ग (6): चित्तौड़गढ़ • कुम्भलगढ़ (राजसमंद) • रणथंभौर (स.माधोपुर) • आमेर (जयपुर) • जैसलमेर • गागरोन (झालावाड़)<br>
  अन्य विश्व धरोहर: <span class="hl">जंतर-मंतर (जयपुर) • केवलादेव (भरतपुर)</span></div>`
};
const TK1={
 div:`<div class="tk">🧠 <b>7 संभाग:</b> जोधपुर(8—सर्वाधिक) • जयपुर व उदयपुर(7) • अजमेर(6) • भरतपुर(5) • कोटा व बीकानेर(4—न्यूनतम)<br>
  <span class="hl">अजमेर</span> = सभी संभागों से सीमा बनाने वाला</div>`,
 B:`<div class="tk">🧠 <b>पाक से 4:</b> श्रीगंगानगर, बीकानेर, जैसलमेर, बाड़मेर (लाल)<br>
  <b>2 राज्यों से:</b> हनुमानगढ़, डीग, धौलपुर, बाँसवाड़ा (सुनहरे)</div>
  <div class="tr">📌 <b>दोनों सीमाओं पर:</b> श्रीगंगानगर व बाड़मेर<br>
  सीमा क्रम: <b>MP &gt; हरियाणा &gt; गुजरात &gt; UP &gt; पंजाब</b> — "म-ह-गु-उ-पं"</div>`,
 M:`<div class="tk">⛏️ <b>खनिज मास्टर-जोड़ी:</b><br>
  तांबा-<b>खेतड़ी</b>(झुंझुनूं) • जस्ता-<b>आगुचा</b>(भीलवाड़ा) • टंगस्टन-<b>डेगाना</b>(नागौर)<br>
  जिप्सम-<b>जामसर</b>(बीकानेर) • मार्बल-<b>मकराना</b>(नागौर) • पेट्रोल-<b>मंगला</b>(बाड़मेर)</div>`,
 R:`<div class="tk">🌊 सबसे लंबी = <b>चंबल</b> | पूर्णतः राज. में = <b>बनास</b> (खमनौर, राजसमंद से)<br>
  दो त्रिवेणी: <b>रामेश्वर घाट</b>(स.माधोपुर) • <b>बेणेश्वर</b>(डूंगरपुर)</div>`,
 L:`<div class="tk">🏞️ सबसे बड़ी खारी = <b>सांभर</b> • शुद्ध नमक = <b>पचपदरा</b>(बालोतरा)<br>
  सबसे बड़ी कृत्रिम = <b>जयसमंद</b>(सलूम्बर) • सबसे ऊँची = <b>नक्की</b>(सिरोही) • सबसे पवित्र = <b>पुष्कर</b>(अजमेर)</div>`,
 D:`<div class="tk">💦 सबसे <b>बड़ा</b> = राणा प्रताप सागर • सबसे <b>लंबा</b> = माही बजाज<br>
  सबसे <b>ऊँचा</b> = जाखम(प्रतापगढ़) • सबसे बड़ी पेयजल = बीसलपुर(टोंक)</div>`,
 F:`<div class="tk">🌳 सर्वाधिक वन = <b>उदयपुर</b> • न्यूनतम = <b>चूरू</b><br>
  धोक वन 58% • सदाबहार 1%(माउंट आबू) • खेजड़ी = राज्य वृक्ष</div>`,
 P:`<div class="tk">🏜️ सबसे बड़ा जिला = <b>जैसलमेर</b> • सबसे छोटा = <b>धौलपुर</b><br>
  सबसे ऊँची चोटी = <b>गुरु शिखर</b>(सिरोही, 1722) • सबसे ऊँचा पठार = उड़िया</div>`,
 C:`<div class="tk">🌦️ सबसे गरम = <b>फलौदी/चूरू</b> • सबसे ठंडा = <b>माउंट आबू</b>(सिरोही)<br>
  सर्वाधिक वर्षा = <b>झालावाड़</b>(ज़िला) / माउंट आबू(स्थान) • आँधी = श्रीगंगानगर</div>`,
 W:`<div class="tk">💧 बावड़ियों का शहर = <b>बूंदी</b> • खड़ीन = <b>जैसलमेर</b>(पालीवाल)<br>
  MJSA शुरुआत = <b>झालावाड़</b> • जोहड़ = अलवर/शेखावाटी (राजेंद्र सिंह)</div>`,
 star:`<div class="tk">🏆 सारे records एक साथ — इन जिलों पर टैप कर के पढ़!</div>`
};
function trick(){
  const T=document.getElementById('tkBoxM');
  if(!T)return;
  if(hlList){T.innerHTML='';return;}
  T.innerHTML=TK2[L]||TK1[L]||'';
}

/* ---- 5. प्रीमियम डिस्ट्रिक्ट पैनल ---- */
const BX=(c,t,b)=>`<div style="border-left:4px solid ${c};background:${c}1f;border-radius:10px;padding:.5rem .65rem;margin:.45rem 0;font-size:.78rem;line-height:1.6"><b>${t}</b><br>${b}</div>`;
const ROW=(ic,k,v)=>v&&v!=='—'?`<tr><td style="border:1px solid rgba(128,128,128,.28);padding:.35rem .45rem;white-space:nowrap;font-size:.74rem;opacity:.85">${ic} ${k}</td><td style="border:1px solid rgba(128,128,128,.28);padding:.35rem .45rem;font-size:.76rem">${v}</td></tr>`:'';
function chip(n){return `<span onclick="goN('${n}')" style="cursor:pointer;display:inline-block;background:rgba(255,194,51,.14);border:1px solid rgba(255,194,51,.45);color:#ffc233;border-radius:999px;padding:.18rem .55rem;font-size:.72rem;margin:.12rem .18rem 0 0">${n}</span>`;}
function goN(n){const i=D.findIndex(d=>d.n===n);if(i>=0){hlList=null;paint();pick(i);}}
function pick(i){
  if(quiz){chk(i);return;}
  sel=i;
  D.forEach((_,j)=>{const e=document.getElementById('d'+j);if(e)e.classList.toggle('sel',j===i);});
  const d=D[i],X=DX[d.n]||{};
  const bd=[];
  if(d.b==='i')bd.push('<span class="bcP" style="background:rgba(255,77,94,.16);color:#ff8b96">🔴 पाकिस्तान सीमा</span>');
  d.st.forEach(s=>bd.push(`<span class="bcP" style="background:rgba(34,211,238,.14);color:#22d3ee">🌈 ${s}</span>`));
  if(d.b==='n')bd.push('<span class="bcP" style="background:rgba(38,208,124,.14);color:#26d07c">🟢 अंतःस्थलीय</span>');
  if(SET[L]&&SET[L].m[d.n])bd.push(`<span class="bcP" style="background:${SET[L].m[d.n][0]}33;color:${SET[L].m[d.n][0]}">${SET[L].n.split(' ')[0]} ${SET[L].m[d.n][1]}</span>`);
  let fs=[...d.f];
  if(CAT[L]) fs.sort((a,b)=>(b[0]===L?1:0)-(a[0]===L?1:0));
  fs.sort((a,b)=>b[2]-a[2]);
  const stars=d.f.filter(f=>f[2]===1).length;
  const pct=Math.min(100,Math.round(stars/8*100));
  const tbl=`<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;margin:.4rem 0">
    ${ROW('🏛️','संभाग',d.dv+' संभाग')}${ROW('📐','क्षेत्रफल',X.ar)}${ROW('👥','जनसंख्या',X.pop)}
    ${ROW('🛡️','पाक सीमा',X.pak)}${ROW('🌊','नदियाँ',X.riv)}${ROW('🏞️','झीलें',X.lak)}
    ${ROW('💦','बाँध/नहर',X.dam)}${ROW('🌱','मिट्टी',X.soil)}${ROW('🌦️','जलवायु',X.cli)}
    ${ROW('⛏️','खनिज',X.min)}${ROW('🌳','वन',X.for)}${ROW('🐅','उद्यान/अभयारण्य',X.np)}
    ${ROW('🌾','प्रमुख फसलें',X.crop)}${ROW('🕌','प्रसिद्ध स्थल',X.place)}</table></div>`;
  document.getElementById('pnl').innerHTML=
   `<div class="phP">
     <div class="pinP" style="background:${DIV[d.dv]}22;border:1px solid ${DIV[d.dv]}">📍</div>
     <div><div class="nmP">${d.n}</div><div class="sbP">${d.dv} संभाग • ${d.f.length} facts • ${stars} ⭐ records</div></div>
    </div>
    <div class="bchP">${bd.join('')}</div>
    <div style="margin:.35rem 0 .1rem;font-size:.72rem;opacity:.75">परीक्षा महत्व</div>
    <div style="height:8px;border-radius:999px;background:rgba(128,128,128,.25);overflow:hidden">
      <i style="display:block;height:100%;width:${pct}%;background:linear-gradient(90deg,#26d07c,#ffc233)"></i></div>
    ${tbl}
    <div style="font-size:.74rem;opacity:.75;margin:.5rem 0 .2rem">🔥 सबसे ज़रूरी तथ्य</div>
    <div class="fsP">${fs.map(f=>
      `<div class="frP"><div class="fiP">${CAT[f[0]][0]}</div>
       <div class="ftP ${f[2]?'star':''}">${f[1]}</div></div>`).join('')}</div>
    ${X.pyq?BX('#3b82f6','📊 बार-बार आने वाले PYQ',X.pyq):''}
    ${X.trap?BX('#ef4444','⚠️ RSSB ट्रैप',X.trap):''}
    ${X.trick?BX('#f59e0b','🧠 मेमोरी ट्रिक',X.trick):''}
    ${X.rel?`<div style="font-size:.74rem;opacity:.75;margin:.5rem 0 .2rem">🔗 संबंधित/पड़ोसी जिले</div><div>${X.rel.map(chip).join('')}</div>`:''}
    <div style="font-size:.74rem;opacity:.75;margin:.6rem 0 .2rem">⚡ क्विक रिवीजन</div>
    <div style="background:rgba(38,208,124,.12);border:1px solid rgba(38,208,124,.35);border-radius:10px;padding:.5rem .65rem;font-size:.78rem;line-height:1.6">
      ${d.f.filter(f=>f[2]===1).slice(0,4).map(f=>'• '+f[1]).join('<br>')||'• '+d.n+' — '+d.dv+' संभाग'}</div>`;
  document.getElementById('pnl').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function hlSet(list,label){
  hlList=list;paint();
  document.getElementById('pnl').innerHTML=
   `<div style="font-size:.9rem;font-weight:800;color:#ffc233;margin-bottom:.3rem">🔍 ${label}</div>
    <div style="font-size:.78rem;opacity:.8;margin-bottom:.4rem">${list.length} जिले हाइलाइट — किसी पर टैप कर के पूरा एटलस कार्ड पढ़ो</div>
    <div>${list.map(chip).join('')}</div>
    <button class="btn gh" style="margin-top:.6rem" onclick="clearHL()">✕ हाइलाइट हटाओ</button>`;
}
function clearHL(){hlList=null;paint();document.getElementById('pnl').innerHTML=
  '<div class="emptyP">👆 किसी जिले पर टैप कर<br><span style="font-size:.75rem">नदी, झील, बाँध, खनिज, मिट्टी, वन, जलवायु — पूरा एटलस कार्ड</span></div>';}
sIn.placeholder='ढूंढो... (मार्बल, IGNP, जस्ता, काली मिट्टी, उदयपुर)';
sIn.oninput=()=>{
  const v=sIn.value.trim();
  if(!v){sug.classList.remove('on');return;}
  const lv=v.toLowerCase();
  const out=[];
  KW.forEach((k,ki)=>{ if(new RegExp(k[0],'i').test(lv)) out.push(`<div onclick="hlSet(KW[${ki}][1],KW[${ki}][2]);sug.classList.remove('on');sIn.value='';"><b style="color:#26d07c">🎯 ${k[2]}</b> <span style="color:var(--dim);font-size:.74rem">— ${k[1].length} जिले हाइलाइट</span></div>`); });
  D.forEach((d,i)=>{
    if(d.n.includes(v)){out.push(`<div onclick="go(${i})"><b style="color:var(--gold)">${d.n}</b> <span style="color:var(--dim);font-size:.74rem">— जिला</span></div>`);return;}
    const X=DX[d.n]||{};
    const hay=Object.keys(X).map(k=>Array.isArray(X[k])?X[k].join(' '):X[k]).join(' ')+' '+d.f.map(f=>f[1]).join(' ');
    if(hay.replace(/<[^>]+>/g,'').toLowerCase().includes(lv))
      out.push(`<div onclick="go(${i})"><b style="color:var(--gold)">${d.n}</b> <span style="color:var(--dim);font-size:.74rem">— मिलान</span></div>`);
  });
  if(!out.length){sug.innerHTML='<div style="color:var(--dim)">कुछ नहीं मिला</div>';sug.classList.add('on');return;}
  sug.innerHTML=out.slice(0,10).join('');sug.classList.add('on');
};
function go(i){sug.classList.remove('on');sIn.value='';hlList=null;paint();pick(i);
  const e=document.getElementById('d'+i);if(e){e.classList.add('gl');setTimeout(()=>e.classList.remove('gl'),2600);}}

let diffSel=1,qMode='quiz',lives=3;
document.querySelectorAll('#mlDiff .lyP').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#mlDiff .lyP').forEach(x=>{x.classList.remove('on');x.style.background='';});
  b.classList.add('on');b.style.background=b.dataset.d==='1'?'#26d07c':b.dataset.d==='2'?'#ffc233':b.dataset.d==='3'?'#ff4d5e':'#a855f7';
  diffSel=+b.dataset.d;
  if(quiz)startQ(qMode);
});
function qBank(){
  let b=QQ2.filter(q=>diffSel===0?true:q[3]===diffSel);
  if(b.length<8)b=QQ2.slice();
  return b.sort(()=>Math.random()-.5);
}
function startQ(mode){
  qMode=(mode==='exam')?'exam':'quiz';
  quiz=true;qs=0;qi=0;stk=0;lives=3;hlList=null;
  ql=qBank();
  if(qMode==='exam')ql=ql.slice(0,12);
  document.getElementById('mlDiff').style.display='flex';
  document.getElementById('qzm').classList.add('on');
  document.getElementById('totm').textContent=ql.length;
  document.getElementById('scm').textContent=0;
  D.forEach((_,j)=>{const e=document.getElementById('d'+j);
    if(e){e.classList.remove('dim','gl','sel');e.setAttribute('fill','#1c2a44');}});
  document.getElementById('lgm').innerHTML='';document.getElementById('cntm').textContent='';
  document.getElementById('tkBoxM').innerHTML= qMode==='exam'
    ?'<div class="tk">🎯 <b>RSSB एग्ज़ाम मोड</b> — 12 मैप सवाल • 3 ❤️ जान • गलत = 1 जान कम। सारे सवाल Non-Tech नोट्स/PYQ पैटर्न से।</div>'
    :'<div class="tk">🎯 <b>मैप क्विज़</b> — ऊपर से कठिनाई चुन (आसान/मध्यम/कठिन/मिक्स)। सवाल पढ़, नक्शे पर सही जिला टैप कर।</div>';
  document.getElementById('pnl').innerHTML='<div class="emptyP">🎯 क्विज़ चालू — ऊपर सवाल पढ़, नक्शे पर टैप कर!</div>';
  ask();
}
function ask(){
  const A=document.getElementById('akm');
  if(qi>=ql.length||(qMode==='exam'&&lives<=0)){
    const pc=Math.round(qs/ql.length*100);
    A.innerHTML=`🏆 खत्म! स्कोर: <b>${qs}/${ql.length}</b> (${pc}%)`;
    document.getElementById('fbkm').innerHTML= pc>=80?'<span style="color:var(--grn)">कमाल! नक्शा तेरा हो गया 🔥</span>':
      pc>=50?'<span style="color:var(--gold)">अच्छा! एक बार और खेल — पक्का हो जाएगा</span>':
      '<span style="color:var(--red)">जिलों पर टैप कर के एटलस कार्ड पढ़, फिर लौट</span>';
    return;
  }
  const q=ql[qi];
  A.innerHTML=`<div style="display:flex;gap:.3rem;flex-wrap:wrap;margin-bottom:.25rem">
    <span style="background:rgba(59,130,246,.18);border:1px solid rgba(59,130,246,.5);border-radius:999px;padding:.1rem .45rem;font-size:.66rem">${q[2]}</span>
    <span style="background:${q[3]===1?'rgba(38,208,124,.18)':q[3]===2?'rgba(255,194,51,.18)':'rgba(255,77,94,.18)'};border-radius:999px;padding:.1rem .45rem;font-size:.66rem">${q[3]===1?'आसान':q[3]===2?'मध्यम':'कठिन'}</span>
    <span style="font-size:.66rem;opacity:.7">सवाल ${qi+1}/${ql.length}</span>
    ${qMode==='exam'?`<span style="font-size:.7rem">${'❤️'.repeat(Math.max(0,lives))}</span>`:''}
  </div>${q[0]}`;
  document.getElementById('fbkm').innerHTML='';
  document.getElementById('stkm').innerHTML=stk>=2?`🔥 x${stk}`:'';
}
function chk(i){
  if(qi>=ql.length)return;
  const r=ql[qi][1],el=document.getElementById('d'+i);
  if(D[i].n===r){qs++;stk++;el.setAttribute('fill','#26d07c');
    document.getElementById('fbkm').innerHTML='<span style="color:var(--grn)">✅ बिल्कुल सही!</span>';}
  else{stk=0;if(qMode==='exam')lives--;el.setAttribute('fill','#ff4d5e');
    const ri=D.findIndex(d=>d.n===r);
    if(ri>=0){const re=document.getElementById('d'+ri);re.setAttribute('fill','#26d07c');re.classList.add('gl');}
    const X=DX[r]||{};
    document.getElementById('fbkm').innerHTML=`<span style="color:var(--red)">❌ सही: <b>${r}</b> (हरा)</span>${X.trick?`<br><span style="font-size:.72rem;color:var(--gold)">🧠 ${X.trick}</span>`:''}`;}
  document.getElementById('scm').textContent=qs;
  setTimeout(()=>{
    D.forEach((_,j)=>{const e=document.getElementById('d'+j);
      if(e){e.setAttribute('fill','#1c2a44');e.classList.remove('gl');}});
    qi++;ask();
  },1700);
}
function stopQ(){quiz=false;document.getElementById('qzm').classList.remove('on');
  document.getElementById('mlDiff').style.display='none';
  document.querySelectorAll('.lyP').forEach(x=>{if(x.closest('#lay')){x.classList.remove('on');x.style.background='';}});
  const b=document.querySelector('.lyP[data-k="div"]');if(b){b.classList.add('on');b.style.background='#ffc233';}
  L='div';hlList=null;paint();
  document.getElementById('pnl').innerHTML='<div class="emptyP">👆 किसी जिले पर टैप कर<br><span style="font-size:.75rem">नदी, झील, बाँध, खनिज, मिट्टी, वन, जलवायु — पूरा एटलस कार्ड</span></div>';}

let stI=0,learnOn=false;
function renderLearn(){
  const s=STEPS[stI];
  L=s.l;hlList=null;
  document.querySelectorAll('#lay .lyP').forEach(x=>{x.classList.remove('on');x.style.background='';
    if(x.dataset.k===s.l){x.classList.add('on');const ly=LAYERS.find(l=>l.k===s.l);if(ly)x.style.background=ly.c;}});
  paint();
  learnBox.innerHTML=`<div class="blk" style="margin:.4rem 0">
    <div style="display:flex;gap:.3rem;margin-bottom:.4rem">${STEPS.map((_,k)=>
      `<i style="flex:1;height:6px;border-radius:999px;background:${k<=stI?'linear-gradient(90deg,#26d07c,#ffc233)':'rgba(128,128,128,.3)'}"></i>`).join('')}</div>
    <h3 style="margin:.1rem 0">${s.t}</h3>
    <p style="font-size:.8rem;line-height:1.7">${s.h}</p>
    <div style="display:flex;gap:.4rem;margin-top:.5rem">
      <button class="btn gh" style="flex:1" onclick="stepGo(-1)">← पिछला</button>
      <button class="btn" style="flex:1" onclick="stepGo(1)">${stI===STEPS.length-1?'🎯 एग्ज़ाम मोड':'अगला →'}</button>
    </div></div>`;
}
function stepGo(d){
  if(d===1&&stI===STEPS.length-1){setMode('exam');return;}
  stI=Math.max(0,Math.min(STEPS.length-1,stI+d));renderLearn();
}
/* ---- 9. मोड स्विच ---- */
function setMode(m){
  const bs={e:document.getElementById('mdE'),l:document.getElementById('mdL'),x:document.getElementById('mdX')};
  Object.values(bs).forEach(b=>{b.classList.remove('on');b.style.background='';});
  stopQ();
  learnBox.style.display='none';learnOn=false;
  document.getElementById('lay').style.display='flex';
  if(m==='learn'){bs.l.classList.add('on');bs.l.style.background='#22d3ee';
    learnOn=true;learnBox.style.display='block';stI=0;renderLearn();}
  else if(m==='exam'){bs.x.classList.add('on');bs.x.style.background='#ff8c1a';
    diffSel=0;document.querySelectorAll('#mlDiff .lyP').forEach(x=>{x.classList.remove('on');x.style.background='';
      if(x.dataset.d==='0'){x.classList.add('on');x.style.background='#a855f7';}});
    startQ('exam');}
  else{bs.e.classList.add('on');bs.e.style.background='#ffc233';}
}
document.getElementById('mdE').onclick=()=>setMode('explore');
document.getElementById('mdL').onclick=()=>setMode('learn');
document.getElementById('mdX').onclick=()=>setMode('exam');
/* लेयर बार को नए लेयर के साथ फिर से रेंडर */
document.getElementById('lay').innerHTML=LAYERS.map(l=>
 `<button class="lyP ${l.k==='div'?'on':''}" data-k="${l.k}" style="${l.k==='div'?'background:'+l.c:''}">${l.n}</button>`).join('');
document.querySelectorAll('#lay .lyP').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('#lay .lyP').forEach(x=>{x.classList.remove('on');x.style.background='';});
  b.classList.add('on');
  const lay=LAYERS.find(l=>l.k===b.dataset.k);b.style.background=lay.c;
  L=b.dataset.k;hlList=null;
  if(L==='quiz'){startQ('quiz');}
  else{if(quiz)stopQ();L=b.dataset.k;b.classList.add('on');b.style.background=lay.c;paint();}
});
