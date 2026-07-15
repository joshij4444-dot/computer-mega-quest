/*! MODULE: js/labs/numsys.js — Number System Converter + challenge (Unit: FOC) */

const NS_BASE = { 2: 'Binary', 8: 'Octal', 10: 'Decimal', 16: 'Hex' };

function nsToDec(v, b) {
  v = v.trim().toUpperCase();
  const D = '0123456789ABCDEF';
  let n = 0;
  for (const ch of v) {
    const d = D.indexOf(ch);
    if (d < 0 || d >= b) throw new Error(`अंक "${ch}" base-${b} में हो ही नहीं सकता (0 से ${b - 1} तक ही)।`);
    n = n * b + d;
  }
  return n;
}
function nsFromDec(n, b) {
  if (n === 0) return '0';
  const D = '0123456789ABCDEF';
  let s = '';
  while (n > 0) { s = D[n % b] + s; n = Math.floor(n / b); }
  return s;
}

function nsRun() {
  const v = document.getElementById('nsIn').value;
  const from = +document.getElementById('nsFrom').value;
  const to = +document.getElementById('nsTo').value;
  const out = document.getElementById('nsOut');
  try {
    if (!v.trim()) throw new Error('कुछ लिख तो सही।');
    const dec = nsToDec(v, from);

    // step 1: to decimal
    const digits = v.trim().toUpperCase().split('');
    const rows1 = digits.map((ch, i) => {
      const p = digits.length - 1 - i;
      const d = '0123456789ABCDEF'.indexOf(ch);
      return [ch, `${from}<sup>${p}</sup>`, `${d} × ${Math.pow(from, p)}`, d * Math.pow(from, p)];
    });
    let h = '';
    if (from !== 10) {
      h += `<div class="nsStep"><b>क़दम 1 —</b> पहले <b>Decimal</b> में लाओ (हर अंक × उसकी जगह की क़ीमत):</div>`;
      h += labSteps(rows1, ['अंक', 'स्थान', 'गुणा', 'मान']);
      h += `<div class="nsEq">जोड़ = <b>${dec}</b><sub>10</sub></div>`;
    } else {
      h += `<div class="nsStep">Decimal तो पहले से है: <b>${dec}</b></div>`;
    }

    // step 2: from decimal
    if (to !== 10) {
      const rows2 = [];
      let n = dec;
      if (n === 0) rows2.push([0, to, 0, 0]);
      while (n > 0) { rows2.push([n, to, Math.floor(n / to), '0123456789ABCDEF'[n % to]]); n = Math.floor(n / to); }
      h += `<div class="nsStep"><b>क़दम 2 —</b> ${dec} को बार-बार <b>${to} से भाग</b> दो, <b>शेषफल नीचे से ऊपर</b> पढ़ो:</div>`;
      h += labSteps(rows2, ['संख्या', '÷', 'भागफल', 'शेष']);
    }
    const res = nsFromDec(dec, to);
    h += `<div class="nsRes">(${v.trim().toUpperCase()})<sub>${from}</sub> = <b>(${res})</b><sub>${to}</sub></div>`;

    // shortcut hint
    if ((from === 2 && to === 8) || (from === 8 && to === 2)) h += `<div class="sqlNote">⚡ <b>शॉर्टकट:</b> Binary ↔ Octal में decimal की ज़रूरत ही नहीं — <b>3-3 बिट</b> के गुच्छे बना लो (8 = 2³)।</div>`;
    if ((from === 2 && to === 16) || (from === 16 && to === 2)) h += `<div class="sqlNote">⚡ <b>शॉर्टकट:</b> Binary ↔ Hex में <b>4-4 बिट</b> के गुच्छे (16 = 2⁴)।</div>`;
    if ((from === 8 && to === 16) || (from === 16 && to === 8)) h += `<div class="sqlNote">⚡ <b>Octal ↔ Hex सीधा नहीं होता</b> — बीच में <b>Binary</b> (या Decimal) से गुज़रना पड़ता है। असली PYQ: (356)₈ = (EE)₁₆</div>`;
    out.innerHTML = h;
  } catch (e) {
    out.innerHTML = '<div class="sqlNote sqlErr">❌ ' + e.message + '</div>';
  }
}
function nsDemo(v, f, t) {
  document.getElementById('nsIn').value = v;
  document.getElementById('nsFrom').value = f;
  document.getElementById('nsTo').value = t;
  nsRun();
}

/* ---- challenge (uses shared core) ---- */
const NS_Q = [
  { ask: '(356)<sub>8</sub> = (?)<sub>16</sub>', ans: 'EE', why: 'पहले octal→binary: 3=011, 5=101, 6=110 → 011101110। अब 4-4 बिट: 1110 1110 = <b>EE</b>। यह असली Paper-II Q68 है।' },
  { ask: '(1010)<sub>2</sub> = (?)<sub>10</sub>', ans: '10', why: '8+0+2+0 = <b>10</b>।' },
  { ask: '(255)<sub>10</sub> = (?)<sub>16</sub>', ans: 'FF', why: '255 = 15×16 + 15 → <b>FF</b>। एक byte का अधिकतम मान।' },
  { ask: '(11111111)<sub>2</sub> = (?)<sub>10</sub>', ans: '255', why: '8 बिट सब 1 = 2⁸−1 = <b>255</b>।' },
  { ask: '(64)<sub>10</sub> = (?)<sub>2</sub>', ans: '1000000', why: '64 = 2⁶ → <b>1000000</b> (एक 1 और छह 0)।' },
  { ask: '(1F)<sub>16</sub> = (?)<sub>10</sub>', ans: '31', why: '1×16 + 15 = <b>31</b>।' },
  { ask: '(17)<sub>8</sub> = (?)<sub>10</sub>', ans: '15', why: '1×8 + 7 = <b>15</b>।' },
  { ask: '(1100)<sub>2</sub> = (?)<sub>8</sub>', ans: '14', why: '3-3 बिट: 001 100 → <b>14</b>।' }
];
labMake('ns', {
  items: NS_Q, ask: 'nsAsk', fb: 'nsFb', score: 'nsScore',
  match: (item, given) => String(given).trim().toUpperCase().replace(/^0+(?=.)/, '') === item.ans.toUpperCase()
});
function nsCheck() { labAnswer('ns', document.getElementById('nsAns').value); }
