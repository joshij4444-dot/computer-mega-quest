/*! MODULE: js/chapters.js — unit registry + unit grid renderer */
/* CH is filled by the Paper-II unit files (data/paper2/u-*.js), each of which
   does CH.push({id, ic, t, s, xp}). Kept as a plain array so the engine
   (sheet, battle, XP, badges) works unchanged. */

const CH = [];

function cgCard(c){
  const d=S.done.includes(c.id), sc=S.scores[c.id]||0;
  return `<div class="ch ${d?'done':''}" onclick="openCh('${c.id}')">
     <div class="tick">✓</div><div class="ic">${c.ic}</div>
     <div class="t">${c.t}</div><div class="s">${c.s}</div>
     <div class="bar"><i style="width:${sc}%"></i></div>
     <div class="pc">${sc?sc+'% बेस्ट':'+'+c.xp+' XP'}</div></div>`;
}
function renderCG(){
  document.getElementById('cg').innerHTML=CH.map(cgCard).join('');
}
