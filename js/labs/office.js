/*! MODULE: js/labs/office.js — MS Office labs: Word Ribbon Simulator + Excel Formula Sandbox */
/* Why these two: ~half of the Paper-II MS-Office questions are "इस कमांड का घर कहाँ है?"
   (Gutter, WordArt, Watermark, Track Changes) and the rest are "इस formula का output क्या?"
   (LCM, SUM, $A$1). Reading can't fix that — only touching can.
   Globals used by lesson HTML onclick: ribTab, ribPick, ribQuiz, ribSkip, xlRun, xlDemo, xlReset */

/* ================= 1. WORD RIBBON SIMULATOR ================= */
/* Structure taken from the Word ribbon mind-map in source/ (Word 2010/2016 layout). */
const RIBBON = {
  'File': {
    'Backstage': ['Save', 'Save As', 'Open', 'Close', 'Info', 'Recent', 'New', 'Print', 'Save & Send', 'Help', 'Options']
  },
  'Home': {
    'Clipboard': ['Paste', 'Cut', 'Copy', 'Format Painter'],
    'Font': ['Bold', 'Italic', 'Underline', 'Font Size', 'Text Highlight', 'Change Case', 'Subscript', 'Superscript'],
    'Paragraph': ['Bullets', 'Numbering', 'Align Left', 'Center', 'Justify', 'Line Spacing', 'Borders', 'Shading'],
    'Styles': ['Heading 1', 'Heading 2', 'Change Styles'],
    'Editing': ['Find', 'Replace', 'Select']
  },
  'Insert': {
    'Pages': ['Cover Page', 'Blank Page', 'Page Break'],
    'Tables': ['Table', 'Draw Table', 'Excel Spreadsheet'],
    'Illustrations': ['Picture', 'Clip Art', 'Shapes', 'SmartArt', 'Chart', 'Screenshot'],
    'Links': ['Hyperlink', 'Bookmark', 'Cross-reference'],
    'Header & Footer': ['Header', 'Footer', 'Page Number'],
    'Text': ['Text Box', 'WordArt', 'Drop Cap', 'Signature Line', 'Date & Time', 'Object'],
    'Symbols': ['Equation', 'Symbol']
  },
  'Page Layout': {
    'Themes': ['Themes', 'Colors', 'Fonts'],
    'Page Setup': ['Margins (Gutter)', 'Orientation', 'Size', 'Columns', 'Breaks', 'Line Numbers', 'Hyphenation'],
    'Page Background': ['Watermark', 'Page Color', 'Page Borders'],
    'Paragraph': ['Indent Left', 'Indent Right', 'Spacing Before', 'Spacing After'],
    'Arrange': ['Position', 'Wrap Text', 'Bring Forward', 'Send Backward', 'Align', 'Group', 'Rotate']
  },
  'References': {
    'Table of Contents': ['Table of Contents', 'Add Text', 'Update Table'],
    'Footnotes': ['Insert Footnote', 'Insert Endnote', 'Next Footnote'],
    'Citations & Bibliography': ['Insert Citation', 'Bibliography'],
    'Captions': ['Insert Caption', 'Table of Figures'],
    'Index': ['Mark Entry', 'Insert Index']
  },
  'Mailings': {
    'Create': ['Envelopes', 'Labels'],
    'Start Mail Merge': ['Start Mail Merge', 'Select Recipients', 'Edit Recipient List'],
    'Write & Insert Fields': ['Address Block', 'Greeting Line', 'Insert Merge Field'],
    'Finish': ['Preview Results', 'Finish & Merge']
  },
  'Review': {
    'Proofing': ['Spelling & Grammar (F7)', 'Thesaurus', 'Word Count'],
    'Comments': ['New Comment', 'Delete Comment'],
    'Tracking': ['Track Changes', 'Show Markup'],
    'Changes': ['Accept', 'Reject'],
    'Protect': ['Restrict Editing']
  },
  'View': {
    'Document Views': ['Print Layout', 'Full Screen Reading', 'Web Layout', 'Outline', 'Draft'],
    'Show': ['Ruler', 'Gridlines', 'Navigation Pane'],
    'Zoom': ['Zoom', 'One Page', 'Two Pages'],
    'Window': ['New Window', 'Split', 'Arrange All', 'Switch Windows'],
    'Macros': ['Macros']
  }
};

/* Challenges — every one of these is a real RSSB-style "where does it live" question */
const RIB_Q = [
  { ask: "'<b>Gutter</b>' सेटिंग कहाँ मिलेगी?", tab: 'Page Layout', cmd: 'Margins (Gutter)', why: 'Gutter = binding के लिए छोड़ी गई अतिरिक्त जगह — यह <b>Margins</b> का हिस्सा है। असली PYQ: "Gutter is related to → Margins"।' },
  { ask: "दस्तावेज़ में <b>सजावटी text (decorative text)</b> कहाँ से डालोगे?", tab: 'Insert', cmd: 'WordArt', why: 'सजावटी text = <b>WordArt</b>। ClipArt (तस्वीर), SmartArt (डायग्राम) और Bookmark (निशान) से मत उलझो — असली PYQ यही चार विकल्प देता है।' },
  { ask: "पन्ने के पीछे हल्का '<b>CONFIDENTIAL</b>' छापना है — कौन-सा कमांड?", tab: 'Page Layout', cmd: 'Watermark', why: 'Watermark → Page Layout > Page Background में। Header/Footer में नहीं!' },
  { ask: "<b>Mail Merge</b> कहाँ से शुरू होगा?", tab: 'Mailings', cmd: 'Start Mail Merge', why: 'Mail Merge का पूरा घर = <b>Mailings</b> tab। एक ही letter को सैकड़ों पतों पर भेजने की तकनीक।' },
  { ask: "किसने क्या बदला — यह <b>रिकॉर्ड</b> करना है। कौन-सा कमांड?", tab: 'Review', cmd: 'Track Changes', why: 'Track Changes → <b>Review</b> tab। Comments भी यहीं हैं।' },
  { ask: "<b>Spelling & Grammar</b> जाँच (F7) कहाँ है?", tab: 'Review', cmd: 'Spelling & Grammar (F7)', why: '<b>F7</b> = Spelling & Grammar। PowerPoint में भी यही key। F5 से मत उलझो (वो slide show है)।' },
  { ask: "<b>Table of Contents</b> (विषय-सूची) कहाँ से बनेगी?", tab: 'References', cmd: 'Table of Contents', why: 'TOC, Footnote, Citation, Index — सब <b>References</b> tab में।' },
  { ask: "एक ही दस्तावेज़ को <b>दो हिस्सों में बाँटकर</b> देखना है।", tab: 'View', cmd: 'Split', why: 'Split → <b>View > Window</b>। एक ही file के दो हिस्से साथ-साथ।' },
  { ask: "<b>Page Break</b> कहाँ से डालोगे?", tab: 'Insert', cmd: 'Page Break', why: 'Page Break → <b>Insert > Pages</b>। (Section Break अलग है — वो Page Layout > Breaks में।)' },
  { ask: "<b>Header / Footer</b> कहाँ से डालेंगे?", tab: 'Insert', cmd: 'Header', why: 'Header, Footer और Page Number — तीनों <b>Insert</b> tab में।' },
  { ask: "तस्वीर के चारों ओर text लपेटना है (<b>Wrap Text</b>)।", tab: 'Page Layout', cmd: 'Wrap Text', why: 'Wrap Text → <b>Page Layout > Arrange</b>।' },
  { ask: "<b>Equation</b> (गणितीय सूत्र) कहाँ से डालोगे?", tab: 'Insert', cmd: 'Equation', why: 'Equation और Symbol → <b>Insert > Symbols</b>। Gutter की तरह यह भी उलझाया जाता है।' }
];

let ribTabCur = 'Home', ribQ = null, ribScore = 0, ribTries = 0;

function ribRender() {
  const tabs = Object.keys(RIBBON).map(t =>
    `<button class="ribTab ${t === ribTabCur ? 'on' : ''}" onclick="ribTab('${t}')">${t}</button>`).join('');
  const groups = Object.entries(RIBBON[ribTabCur]).map(([g, cmds]) =>
    `<div class="ribGrp"><div class="ribGrpN">${g}</div><div class="ribCmds">` +
    cmds.map(c => `<button class="ribCmd" onclick="ribPick('${c.replace(/'/g, "\\'")}')">${c}</button>`).join('') +
    `</div></div>`).join('');
  const el = document.getElementById('ribBody');
  if (el) el.innerHTML = `<div class="ribTabs">${tabs}</div><div class="ribPane">${groups}</div>`;
}
function ribTab(t) { ribTabCur = t; ribRender(); }

function ribQuiz() {
  ribQ = RIB_Q[Math.floor(Math.random() * RIB_Q.length)];
  ribTries = 0;
  document.getElementById('ribAsk').innerHTML = '🎯 ' + ribQ.ask;
  document.getElementById('ribFb').innerHTML = '<span style="color:var(--dim)">सही tab खोल, फिर सही कमांड दबा।</span>';
  document.getElementById('ribScore').textContent = 'स्कोर: ' + ribScore;
}
function ribSkip() {
  if (!ribQ) return;
  document.getElementById('ribFb').innerHTML =
    `<span class="ribNo">जवाब: <b>${ribQ.tab} → ${ribQ.cmd}</b></span><br><span style="color:var(--dim)">${ribQ.why}</span>`;
  ribTabCur = ribQ.tab; ribRender(); ribQ = null;
}
function ribPick(cmd) {
  if (!ribQ) {
    document.getElementById('ribFb').innerHTML =
      `<span style="color:var(--cyan)">📍 <b>${cmd}</b> — घर: <b>${ribTabCur}</b> tab</span>`;
    return;
  }
  ribTries++;
  if (cmd === ribQ.cmd && ribTabCur === ribQ.tab) {
    const pts = ribTries === 1 ? 2 : 1;
    ribScore += pts;
    document.getElementById('ribFb').innerHTML =
      `<span class="ribOk">✅ सही! +${pts}</span><br><span style="color:var(--dim)">${ribQ.why}</span>`;
    document.getElementById('ribScore').textContent = 'स्कोर: ' + ribScore;
    ribQ = null;
    if (typeof addXP === 'function') addXP(5);
  } else {
    document.getElementById('ribFb').innerHTML =
      `<span class="ribNo">❌ नहीं — <b>${cmd}</b> यहाँ नहीं। दोबारा सोच: यह काम किस tab का है?</span>`;
  }
}

/* ================= 2. EXCEL FORMULA SANDBOX ================= */
const XL_GRID = {
  A: [10, 20, 30, 40],
  B: [5, 7, 35, 2],
  C: [100, 200, 300, 400]
};
function xlCell(ref) {
  const m = ref.toUpperCase().replace(/\$/g, '').match(/^([A-C])([1-4])$/);
  if (!m) throw new Error('ऐसा कोई cell नहीं: ' + ref);
  return XL_GRID[m[1]][+m[2] - 1];
}
function xlRange(a, b) {
  const ma = a.toUpperCase().replace(/\$/g, '').match(/^([A-C])([1-4])$/);
  const mb = b.toUpperCase().replace(/\$/g, '').match(/^([A-C])([1-4])$/);
  if (!ma || !mb) throw new Error('गलत range: ' + a + ':' + b);
  const cols = ['A', 'B', 'C'], out = [];
  for (let c = cols.indexOf(ma[1]); c <= cols.indexOf(mb[1]); c++)
    for (let r = +ma[2]; r <= +mb[2]; r++) out.push(XL_GRID[cols[c]][r - 1]);
  return out;
}
const _gcd = (a, b) => b ? _gcd(b, a % b) : Math.abs(a);
const _lcm2 = (a, b) => Math.abs(a * b) / _gcd(a, b);
const XL_FN = {
  SUM: v => v.reduce((a, b) => a + b, 0),
  AVERAGE: v => +(v.reduce((a, b) => a + b, 0) / v.length).toFixed(2),
  MAX: v => Math.max(...v),
  MIN: v => Math.min(...v),
  COUNT: v => v.length,
  PRODUCT: v => v.reduce((a, b) => a * b, 1),
  LCM: v => v.reduce((a, b) => _lcm2(a, b)),
  GCD: v => v.reduce((a, b) => _gcd(a, b)),
  ROUND: v => Math.round(v[0] * Math.pow(10, v[1] || 0)) / Math.pow(10, v[1] || 0),
  POWER: v => Math.pow(v[0], v[1]),
  SQRT: v => +Math.sqrt(v[0]).toFixed(4),
  ABS: v => Math.abs(v[0])
};

function xlGridHTML() {
  let h = '<table class="xlT"><tr><th></th><th>A</th><th>B</th><th>C</th></tr>';
  for (let r = 1; r <= 4; r++) {
    h += `<tr><th>${r}</th><td>${XL_GRID.A[r - 1]}</td><td>${XL_GRID.B[r - 1]}</td><td>${XL_GRID.C[r - 1]}</td></tr>`;
  }
  return h + '</table>';
}
function xlReset() {
  const g = document.getElementById('xlGrid');
  if (g) g.innerHTML = xlGridHTML();
  xlOut('<div class="sqlNote">👆 ऊपर की शीट पर formula चला के देख।</div>');
}
function xlOut(h) { const e = document.getElementById('xlOut'); if (e) e.innerHTML = h; }
function xlDemo(f) { const i = document.getElementById('xlIn'); if (i) { i.value = f; xlRun(); } }

function xlRun() {
  const inp = document.getElementById('xlIn');
  if (!inp) return;
  let f = inp.value.trim();
  try {
    if (!f.startsWith('=')) throw new Error('Excel में हर formula <b>=</b> से शुरू होता है। यही पहली गलती है।');
    let e = f.slice(1).toUpperCase();

    // FN(args) -> value
    e = e.replace(/([A-Z]+)\(([^()]*)\)/g, (whole, fn, args) => {
      if (!XL_FN[fn]) throw new Error('यह function समर्थित नहीं: ' + fn + '()');
      let vals = [];
      args.split(',').forEach(a => {
        a = a.trim();
        if (!a) return;
        if (a.includes(':')) { const [x, y] = a.split(':'); vals = vals.concat(xlRange(x, y)); }
        else if (/^\$?[A-C]\$?[1-4]$/.test(a)) vals.push(xlCell(a));
        else if (!isNaN(+a)) vals.push(+a);
        else throw new Error('समझ नहीं आया: ' + a);
      });
      return XL_FN[fn](vals);
    });
    // bare cell refs
    e = e.replace(/\$?([A-C])\$?([1-4])/g, (w) => xlCell(w));
    if (/[A-Z]/.test(e)) throw new Error('formula में कुछ अनजाना बचा: ' + e);
    const val = Function('"use strict";return (' + e + ')')();

    let note = '';
    if (/LCM/i.test(f)) note = '<div class="sqlNote">🧠 <b>LCM</b> = लघुत्तम समापवर्त्य। LCM(5,7,35) → 5 और 7 का LCM 35, फिर 35 और 35 का LCM <b>35</b>। असली PYQ में विकल्प 70 और 1225 (यानी 35×35) डालकर फँसाया जाता है।</div>';
    if (/\$/.test(f)) note = '<div class="sqlNote">🔒 <b>$</b> का मतलब <b>absolute reference</b>। <code>$A$1</code> copy करने पर <b>नहीं बदलेगा</b>; <code>A1</code> (relative) बदल जाएगा। <code>$A1</code> = column बँधा, row आज़ाद।</div>';
    xlOut(`<div class="xlRes">${f} &nbsp;→&nbsp; <b>${val}</b></div>` + note);
  } catch (err) {
    xlOut('<div class="sqlNote sqlErr">❌ ' + err.message + '</div>');
  }
}
