/*! MODULE: js/state.js — state, localStorage, XP/level, badges, HUD, nav */
/* ============ STATE ============ */
let S={xp:0,lvl:1,done:[],badges:[],av:0,scores:{}};
const AV=['💻','🖥️','⌨️','🖱️','💾','🧠','🤖','🛡️'];
const LV=[0,150,400,750,1200,1800,2600,3600,5000];
const TTL=['','नौसिखिया','शिष्य','ज्ञाता','विद्वान','आचार्य','महारथी','गुरु','लीजेंड'];
const BDG=[{i:'🗄️',n:'डेटा गुरु',k:'p2db'},{i:'📊',n:'ऑफिस मास्टर',k:'p2dp'},{i:'💻',n:'कोड योद्धा',k:'p2pf'},
{i:'⚙️',n:'सिस्टम सम्राट',k:'p2os'},{i:'🌳',n:'एल्गो एक्का',k:'p2dsa'},{i:'🌐',n:'नेटवर्क नाथ',k:'p2net'},
{i:'🛡️',n:'साइबर रक्षक',k:'p2sec'},{i:'👑',n:'लीजेंड',k:'legend'}];

function save(){try{localStorage.setItem('cmquest',JSON.stringify(S))}catch(e){}}
try{const d=localStorage.getItem('cmquest');if(d)S=JSON.parse(d)}catch(e){}

function addXP(n){
  S.xp+=n;
  const p=document.getElementById('pop');p.textContent='+'+n+' XP';
  p.classList.remove('go');void p.offsetWidth;p.classList.add('go');
  let l=S.lvl;while(l<LV.length-1&&S.xp>=LV[l])l++;
  if(l>S.lvl){S.lvl=l;
    document.getElementById('luT').textContent='LEVEL '+l+' — '+TTL[l];
    document.getElementById('luS').textContent='नया खिताब अनलॉक! 🎖️';
    document.getElementById('lu').classList.add('on');
    if(l>=7)unlock('legend');}
  save();hud();
}
function unlock(k){if(!S.badges.includes(k)){S.badges.push(k);save();renderB();}}
function hud(){
  const c=LV[S.lvl-1]||0,n=LV[S.lvl]||LV[LV.length-1];
  document.getElementById('xf').style.width=Math.min(100,((S.xp-c)/(n-c))*100)+'%';
  document.getElementById('xt').textContent=S.xp+' / '+n+' XP';
  document.getElementById('lvT').textContent='Lv '+S.lvl;
  document.getElementById('ttl').textContent=TTL[S.lvl];
  document.getElementById('av').textContent=AV[S.av];
  document.getElementById('dn').textContent=S.done.length+'/'+CH.length;
}
document.getElementById('av').onclick=()=>{S.av=(S.av+1)%AV.length;save();hud();};
function renderB(){document.getElementById('bgs').innerHTML=BDG.map(b=>
 `<div class="b1 ${S.badges.includes(b.k)?'on':''}"><div class="i">${b.i}</div><div class="n">${b.n}</div></div>`).join('');}

document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('nav button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  document.getElementById(b.dataset.p).classList.add('on');
  window.scrollTo({top:0,behavior:'smooth'});
});
