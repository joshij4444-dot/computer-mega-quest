/*! MODULE: js/labs/os.js — OS labs: CPU Scheduler (FCFS/SJF/RR) + Page/State visual */

function schedFCFS(procs) {
  const p = procs.slice().sort((a, b) => a.at - b.at);
  let t = 0; const rows = [];
  p.forEach(x => {
    if (t < x.at) t = x.at;
    const start = t, comp = t + x.bt;
    rows.push({ id: x.id, at: x.at, bt: x.bt, start, comp, tat: comp - x.at, wt: start - x.at });
    t = comp;
  });
  return rows;
}
function schedSJF(procs) {
  const p = procs.slice(); const done = []; let t = 0;
  while (done.length < procs.length) {
    const ready = p.filter(x => x.at <= t && !x._d);
    if (!ready.length) { t = Math.min(...p.filter(x => !x._d).map(x => x.at)); continue; }
    ready.sort((a, b) => a.bt - b.bt);
    const x = ready[0]; x._d = true;
    const start = t, comp = t + x.bt;
    done.push({ id: x.id, at: x.at, bt: x.bt, start, comp, tat: comp - x.at, wt: start - x.at });
    t = comp;
  }
  procs.forEach(x => delete x._d);
  return done;
}
function schedRR(procs, q) {
  const p = procs.slice().sort((a, b) => a.at - b.at).map(x => ({ ...x, rem: x.bt }));
  const queue = []; let t = 0, i = 0; const comp = {};
  const seg = [];
  while (i < p.length && p[i].at <= t) queue.push(p[i++]);
  if (!queue.length && p.length) { t = p[0].at; while (i < p.length && p[i].at <= t) queue.push(p[i++]); }
  while (queue.length) {
    const x = queue.shift();
    const run = Math.min(q, x.rem);
    seg.push([x.id, t, t + run]);
    t += run; x.rem -= run;
    while (i < p.length && p[i].at <= t) queue.push(p[i++]);
    if (x.rem > 0) queue.push(x); else comp[x.id] = t;
    if (!queue.length && i < p.length) { t = p[i].at; while (i < p.length && p[i].at <= t) queue.push(p[i++]); }
  }
  return p.map(x => ({ id: x.id, at: x.at, bt: x.bt, comp: comp[x.id], tat: comp[x.id] - x.at, wt: comp[x.id] - x.at - x.bt })).sort((a, b) => a.id > b.id ? 1 : -1);
}

let SCHED = [{ id: 'P1', at: 0, bt: 5 }, { id: 'P2', at: 1, bt: 3 }, { id: 'P3', at: 2, bt: 8 }, { id: 'P4', at: 3, bt: 2 }];
function schedRun(algo) {
  let rows, label;
  if (algo === 'sjf') { rows = schedSJF(SCHED); label = 'SJF (Shortest Job First — non-preemptive)'; }
  else if (algo === 'rr') { rows = schedRR(SCHED, 2); label = 'Round Robin (quantum = 2)'; }
  else { rows = schedFCFS(SCHED); label = 'FCFS (First Come First Served)'; }
  const avgWt = (rows.reduce((s, r) => s + r.wt, 0) / rows.length).toFixed(2);
  const avgTat = (rows.reduce((s, r) => s + r.tat, 0) / rows.length).toFixed(2);
  const h = `<div class="nsStep"><b>${label}</b></div>` +
    labSteps(rows.map(r => [r.id, r.at, r.bt, r.comp, r.tat, r.wt]),
      ['Process', 'Arrival', 'Burst', 'Completion', 'TAT', 'Waiting']) +
    `<div class="nsRes">औसत Waiting = <b>${avgWt}</b> &nbsp;|&nbsp; औसत TAT = <b>${avgTat}</b></div>` +
    `<div class="sqlNote">🧠 <b>TAT</b> (Turnaround) = Completion − Arrival। <b>WT</b> (Waiting) = TAT − Burst।<br>
      <b>SJF</b> औसत waiting में सबसे बढ़िया है (साबित), पर लंबे job भूखे रह सकते हैं (<b>starvation</b>)। <b>RR</b> सबको बराबर बारी देता है — इसलिए time-sharing OS में इस्तेमाल होता है।</div>`;
  document.getElementById('schOut').innerHTML = h;
  document.querySelectorAll('#schBar .sqlBtn').forEach(b => b.classList.toggle('go', b.dataset.a === algo));
}

/* Semaphore simulator (PYQ: init 8, 12 P, 7 V) */
function semRun() {
  const init = +document.getElementById('semInit').value || 0;
  const p = +document.getElementById('semP').value || 0;
  const v = +document.getElementById('semV').value || 0;
  const val = init - p + v;
  let note;
  if (val < 0) note = `मान <b>ऋणात्मक (${val})</b> है → इसका निरपेक्ष मान <b>${-val}</b> बताता है कि <b>${-val} process(es) blocked (waiting)</b> हैं।`;
  else note = `मान <b>${val}</b> है → अभी <b>${val} और process</b> बिना रुके संसाधन ले सकती हैं; कोई blocked नहीं।`;
  document.getElementById('semOut').innerHTML =
    `<div class="nsRes">S = ${init} − ${p} (P/wait) + ${v} (V/signal) = <b>${val}</b></div>
     <div class="sqlNote">${note}<br>🧠 <b>P (wait/down)</b> मान घटाता है; <b>V (signal/up)</b> बढ़ाता है। Counting semaphore ऋणात्मक हो सकता है; Binary सिर्फ़ 0/1।</div>`;
}
