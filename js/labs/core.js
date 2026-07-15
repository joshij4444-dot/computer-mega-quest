/*! MODULE: js/labs/core.js — shared lab primitives (reused by every lab; no duplicate logic) */

const LAB = {};

/* Register a challenge-style lab.
   cfg = { items:[{ask,ans,why,...}], ask:'elId', fb:'elId', score:'elId',
           match(item,given)->bool, onCorrect(item), xp:Number } */
function labMake(key, cfg) {
  LAB[key] = Object.assign({ cur: null, score: 0, tries: 0, xp: 5 }, cfg);
}
function labEl(key, slot) { const c = LAB[key]; return c && c[slot] ? document.getElementById(c[slot]) : null; }
function labSay(key, html) { const e = labEl(key, 'fb'); if (e) e.innerHTML = html; }
function labScore(key) {
  const e = labEl(key, 'score');
  if (e) e.textContent = 'स्कोर: ' + LAB[key].score;
}
function labNext(key) {
  const c = LAB[key]; if (!c) return;
  c.cur = c.items[Math.floor(Math.random() * c.items.length)];
  c.tries = 0;
  const a = labEl(key, 'ask'); if (a) a.innerHTML = '🎯 ' + c.cur.ask;
  labSay(key, '<span style="color:var(--dim)">जवाब चुन / लिख।</span>');
  labScore(key);
  if (c.onNext) c.onNext(c.cur);
}
function labSkip(key) {
  const c = LAB[key]; if (!c || !c.cur) return;
  labSay(key, `<span class="ribNo">जवाब: <b>${c.cur.ans}</b></span><br><span style="color:var(--dim)">${c.cur.why}</span>`);
  if (c.onReveal) c.onReveal(c.cur);
  c.cur = null;
}
function labAnswer(key, given) {
  const c = LAB[key]; if (!c) return;
  if (!c.cur) { labSay(key, '<span style="color:var(--dim)">पहले "चैलेंज दे" दबा।</span>'); return; }
  c.tries++;
  const ok = c.match ? c.match(c.cur, given) : String(given).trim().toLowerCase() === String(c.cur.ans).trim().toLowerCase();
  if (ok) {
    const pts = c.tries === 1 ? 2 : 1;
    c.score += pts;
    labSay(key, `<span class="ribOk">✅ सही! +${pts}</span><br><span style="color:var(--dim)">${c.cur.why}</span>`);
    labScore(key);
    if (typeof addXP === 'function') addXP(c.xp);
    if (c.onCorrect) c.onCorrect(c.cur);
    c.cur = null;
  } else {
    labSay(key, `<span class="ribNo">❌ नहीं — <b>${given}</b> ग़लत है। दोबारा सोच।</span>`);
  }
}

/* Render 4 option buttons for a lab challenge */
function labOpts(key, opts) {
  return opts.map(o => `<button class="sqlChip" onclick="labAnswer('${key}','${String(o).replace(/'/g, "\\'")}')">${o}</button>`).join('');
}

/* Generic step-table renderer (used by code trace, conversion steps, scheduler) */
function labSteps(rows, head) {
  let h = '<div style="overflow-x:auto"><table class="stepT">';
  if (head) h += '<tr>' + head.map(x => `<th>${x}</th>`).join('') + '</tr>';
  rows.forEach(r => { h += '<tr>' + r.map(x => `<td>${x}</td>`).join('') + '</tr>'; });
  return h + '</table></div>';
}
