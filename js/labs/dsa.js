/*! MODULE: js/labs/dsa.js — DSA Visualizer: Bubble Sort pass-by-pass • Stack • BST traversal • Prefix/Postfix */

/* ---------- 1. BUBBLE SORT (pass by pass — exactly the PYQ format) ---------- */
let bsArr = [64, 34, 25, 12, 22];
function bsRender(arr, hi, note) {
  return '<div class="dsaRow">' + arr.map((v, i) =>
    `<div class="dsaBox ${hi && hi.includes(i) ? 'hot' : ''}">${v}</div>`).join('') + '</div>' +
    (note ? `<div class="sqlNote">${note}</div>` : '');
}
function bsRun() {
  const raw = document.getElementById('bsIn').value.split(',').map(x => +x.trim()).filter(x => !isNaN(x));
  if (raw.length < 2) { document.getElementById('bsOut').innerHTML = '<div class="sqlNote sqlErr">❌ कम-से-कम 2 अंक दे (comma से अलग)।</div>'; return; }
  const a = raw.slice();
  let h = `<div class="nsStep"><b>शुरुआत:</b></div>` + bsRender(a);
  const n = a.length;
  for (let p = 0; p < n - 1; p++) {
    let swapped = false;
    for (let i = 0; i < n - 1 - p; i++) {
      if (a[i] > a[i + 1]) { [a[i], a[i + 1]] = [a[i + 1], a[i]]; swapped = true; }
    }
    h += `<div class="nsStep"><b>Pass ${p + 1}</b> के बाद — सबसे बड़ा तत्व अपनी जगह पहुँचा (⭐):</div>` +
      bsRender(a, [n - 1 - p]);
    if (p === 0) h += `<div class="sqlNote">⚠️ <b>यही PYQ पूछता है:</b> "first pass के बाद array क्या होगा?" — बस <b>यहीं तक</b> रुकना है, पूरा sort नहीं करना!</div>`;
    if (!swapped) { h += `<div class="sqlNote">✅ कोई swap नहीं हुआ — array पहले ही sorted है, यहीं रुक सकते हैं।</div>`; break; }
  }
  h += `<div class="nsRes">Sorted: [${a.join(', ')}]</div>
        <div class="sqlNote">⏱️ Bubble Sort: worst/average <b>O(n²)</b>, best <b>O(n)</b> (पहले से sorted हो तो)। Stable ✅, In-place ✅</div>`;
  document.getElementById('bsOut').innerHTML = h;
}

/* ---------- 2. STACK ---------- */
let stk = [];
function stkRender(msg) {
  const box = document.getElementById('stkOut');
  if (!box) return;
  const cells = stk.length
    ? stk.slice().reverse().map((v, i) =>
      `<div class="stkCell ${i === 0 ? 'top' : ''}">${v}${i === 0 ? ' <span class="stkTop">← TOP</span>' : ''}</div>`).join('')
    : '<div class="sqlNote">Stack ख़ाली है (underflow की हालत)।</div>';
  box.innerHTML = `<div class="stkWrap">${cells}</div>` +
    `<div class="sqlNote">${msg || ''} &nbsp;<b>LIFO</b> — Last In, First Out। push/pop दोनों <b>एक ही सिरे (TOP)</b> से।</div>`;
}
function stkPush() {
  const v = document.getElementById('stkIn').value.trim();
  if (!v) return;
  if (stk.length >= 6) { stkRender('❌ <b>Stack OVERFLOW</b> — जगह ख़त्म।'); return; }
  stk.push(v);
  document.getElementById('stkIn').value = '';
  stkRender(`➕ push(${v})`);
}
function stkPop() {
  if (!stk.length) { stkRender('❌ <b>Stack UNDERFLOW</b> — ख़ाली stack से pop नहीं हो सकता।'); return; }
  const v = stk.pop();
  stkRender(`➖ pop() → <b>${v}</b> निकला (जो सबसे बाद में डाला था)।`);
}
function stkClear() { stk = []; stkRender('🔄 साफ़।'); }

/* ---------- 3. BST + traversals ---------- */
function bstInsert(root, v) {
  if (!root) return { v, l: null, r: null };
  if (v < root.v) root.l = bstInsert(root.l, v); else root.r = bstInsert(root.r, v);
  return root;
}
const _pre = (n, o = []) => { if (n) { o.push(n.v); _pre(n.l, o); _pre(n.r, o); } return o; };
const _in = (n, o = []) => { if (n) { _in(n.l, o); o.push(n.v); _in(n.r, o); } return o; };
const _post = (n, o = []) => { if (n) { _post(n.l, o); _post(n.r, o); o.push(n.v); } return o; };

function bstDraw(root) {
  const W = 340, H = 150;
  let s = '';
  const walk = (n, x, y, dx, px, py) => {
    if (!n) return;
    if (px !== undefined) s += `<line x1="${px}" y1="${py}" x2="${x}" y2="${y}" stroke="#293a5c" stroke-width="1.5"/>`;
    walk(n.l, x - dx, y + 38, dx / 2, x, y);
    walk(n.r, x + dx, y + 38, dx / 2, x, y);
    s += `<circle cx="${x}" cy="${y}" r="13" fill="#1a2742" stroke="#ffc233" stroke-width="1.5"/>
          <text x="${x}" y="${y + 4}" text-anchor="middle" fill="#eef3fa" font-size="10" font-weight="800">${n.v}</text>`;
  };
  walk(root, W / 2, 20, 80);
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;
}
function bstRun() {
  const vals = document.getElementById('bstIn').value.split(',').map(x => +x.trim()).filter(x => !isNaN(x));
  if (!vals.length) return;
  let root = null;
  vals.forEach(v => { root = bstInsert(root, v); });
  document.getElementById('bstOut').innerHTML =
    `<div class="viz" style="margin:0">${bstDraw(root)}</div>` +
    labSteps([
      ['<b>Preorder</b> (Root→L→R)', _pre(root).join(' → ')],
      ['<b>Inorder</b> (L→Root→R)', _in(root).join(' → ')],
      ['<b>Postorder</b> (L→R→Root)', _post(root).join(' → ')]
    ], ['Traversal', 'क्रम']) +
    `<div class="sqlNote">🧠 <b>BST का सुनहरा नियम: Inorder हमेशा sorted देता है।</b> यही जाँच है कि tree सही बना या नहीं।<br>
     🧠 नाम का मतलब: <b>Pre</b>=Root <b>पहले</b>, <b>In</b>=Root <b>बीच</b> में, <b>Post</b>=Root <b>बाद</b> में। L हमेशा R से पहले।</div>`;
}

/* ---------- 4. Infix → Prefix / Postfix + evaluation ---------- */
const _prec = o => (o === '+' || o === '-') ? 1 : (o === '*' || o === '/') ? 2 : (o === '^') ? 3 : 0;
function toPostfix(tokens) {
  const out = [], op = [];
  tokens.forEach(t => {
    if (/^[A-Za-z0-9]+$/.test(t)) out.push(t);
    else if (t === '(') op.push(t);
    else if (t === ')') { while (op.length && op[op.length - 1] !== '(') out.push(op.pop()); op.pop(); }
    else { while (op.length && _prec(op[op.length - 1]) >= _prec(t)) out.push(op.pop()); op.push(t); }
  });
  while (op.length) out.push(op.pop());
  return out;
}
function evalPostfix(pf) {
  const s = [];
  pf.forEach(t => {
    if (/^\d+$/.test(t)) s.push(+t);
    else { const b = s.pop(), a = s.pop(); s.push(t === '+' ? a + b : t === '-' ? a - b : t === '*' ? a * b : t === '/' ? a / b : Math.pow(a, b)); }
  });
  return s[0];
}
function exRun() {
  const raw = document.getElementById('exIn').value.trim();
  const out = document.getElementById('exOut');
  try {
    const tokens = raw.match(/\d+|[A-Za-z]+|[()+\-*/^]/g);
    if (!tokens) throw new Error('कुछ समझ नहीं आया।');
    const post = toPostfix(tokens);
    // prefix = reverse infix, swap brackets, postfix, reverse
    const rev = tokens.slice().reverse().map(t => t === '(' ? ')' : t === ')' ? '(' : t);
    const pre = toPostfix(rev).reverse();
    let h = labSteps([
      ['Infix (जो लिखा)', tokens.join(' ')],
      ['<b>Postfix</b> (Reverse Polish)', post.join(' ')],
      ['<b>Prefix</b> (Polish)', pre.join(' ')]
    ], ['रूप', 'नतीजा']);
    if (/^[\d+\-*/^() ]+$/.test(raw)) h += `<div class="nsRes">मान = <b>${evalPostfix(post)}</b></div>`;
    h += `<div class="sqlNote">🧠 <b>Prefix</b> = operator <b>पहले</b> (+AB) • <b>Postfix</b> = operator <b>बाद</b> में (AB+)।<br>
      Postfix/Prefix में <b>कोष्ठक की ज़रूरत ही नहीं</b> पड़ती — यही इनका पूरा फ़ायदा है, और मशीन इन्हें <b>Stack</b> से चलाती है।</div>`;
    out.innerHTML = h;
  } catch (e) {
    out.innerHTML = '<div class="sqlNote sqlErr">❌ ' + e.message + '</div>';
  }
}
function exDemo(v) { document.getElementById('exIn').value = v; exRun(); }
