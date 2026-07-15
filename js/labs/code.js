/*! MODULE: js/labs/code.js — Code Output Predictor with line-by-line trace (C / C++ / Java / Python) */

const CODE_Q = [
  {
    lang: 'C', code: `int a = 10, b = 5, c = 10;\nprintf("%d", a > b ? (a > c ? a : c) : b);`,
    opts: ['10', '5', '1', '0'], ans: '10',
    trace: [['a=10, b=5, c=10', '—'], ['a > b ?', '10 > 5 → true'], ['भीतर: a > c ?', '10 > 10 → false'], ['इसलिए c चुना', 'c = 10'], ['printf', '10']],
    why: 'Nested ternary। a>b सच है, तो भीतर वाला चलेगा: a>c यानी 10>10 → झूठ → c मिलेगा = <b>10</b>। ⚠️ ध्यान: <code>&gt;</code> है, <code>&gt;=</code> नहीं — बराबर होने पर false।'
  },
  {
    lang: 'C', code: `int x = 5;\nprintf("%d %d", x++, ++x);`,
    opts: ['5 7', '6 7', '5 6', 'Undefined Behaviour'], ans: 'Undefined Behaviour',
    trace: [['x = 5', '—'], ['एक ही statement में x दो बार बदला', 'sequence point टूटा'], ['C standard', 'Undefined Behaviour']],
    why: 'एक ही expression में एक ही variable को दो बार modify करना <b>Undefined Behaviour</b> है — compiler कुछ भी दे सकता है। परीक्षा में यही असली जवाब होता है।'
  },
  {
    lang: 'C', code: `int arr[5] = {1,2,3,4,5};\nint *p = arr;\nprintf("%d", *p++);`,
    opts: ['1', '2', '5', 'Error'], ans: '1',
    trace: [['p → arr[0]', 'value 1'], ['*p++ में ++ postfix है', 'पहले *p इस्तेमाल'], ['*p = 1 छपा', 'फिर p आगे बढ़ा'], ['नतीजा', '1']],
    why: '<code>*p++</code> = <code>*(p++)</code>। Postfix ++ की प्राथमिकता ज़्यादा, पर वह <b>पहले पुरानी क़ीमत देता है</b>, फिर pointer आगे बढ़ता है। इसलिए छपेगा <b>1</b>, और p अब arr[1] पर है।'
  },
  {
    lang: 'C', code: `printf("%d", sizeof(char));`,
    opts: ['1', '2', '4', '8'], ans: '1',
    trace: [['C standard', 'sizeof(char) हमेशा 1'], ['नतीजा', '1']],
    why: 'C में <b>sizeof(char) हमेशा 1</b> होता है (परिभाषा से)। int आमतौर पर 4, float 4, double 8।'
  },
  {
    lang: 'Java', code: `String s1 = "RSSB";\nString s2 = "RSSB";\nSystem.out.println(s1 == s2);`,
    opts: ['true', 'false', 'Error', 'null'], ans: 'true',
    trace: [['s1 = "RSSB"', 'String pool में गया'], ['s2 = "RSSB"', 'वही pool object मिला'], ['s1 == s2', 'दोनों एक ही reference'], ['नतीजा', 'true']],
    why: 'String <b>literals</b> Java के <b>String Pool</b> में जाते हैं — दोनों एक ही object की ओर इशारा करते हैं, इसलिए <b>true</b>। ⚠️ पर <code>new String("RSSB")</code> लिखा होता तो <b>false</b> आता (नया object बनता)।'
  },
  {
    lang: 'Java', code: `int i = 0;\nSystem.out.println(i++ + ++i);`,
    opts: ['2', '1', '3', '0'], ans: '2',
    trace: [['i = 0', '—'], ['i++ → 0 देता है', 'i अब 1'], ['++i → i को 2 करके 2 देता है', 'i अब 2'], ['0 + 2', '2']],
    why: 'i++ पहले <b>पुरानी</b> क़ीमत (0) देता है, फिर i=1। ++i पहले <b>बढ़ाता</b> है (i=2), फिर 2 देता है। 0+2 = <b>2</b>। (Java में यह defined है, C के उलट।)'
  },
  {
    lang: 'Python', code: `print(type(5/2))\nprint(5//2)`,
    opts: ["<class 'float'> और 2", "<class 'int'> और 2.5", "<class 'float'> और 2.5", "Error"], ans: "<class 'float'> और 2",
    trace: [['5/2', 'Python 3 में हमेशा float → 2.5'], ['type(2.5)', "<class 'float'>"], ['5//2', 'floor division → 2']],
    why: "Python 3 में <code>/</code> हमेशा <b>float</b> देता है (2.5), और <code>//</code> <b>floor division</b> है (2)। Python 2 में <code>5/2</code> 2 देता था — यही भ्रम पैदा किया जाता है।"
  },
  {
    lang: 'Python', code: `x = [1, 2, 3]\ny = x\ny.append(4)\nprint(len(x))`,
    opts: ['3', '4', 'Error', '1'], ans: '4',
    trace: [['x = [1,2,3]', 'list object बना'], ['y = x', '⚠️ copy नहीं — वही object'], ['y.append(4)', 'उसी list में जुड़ा'], ['len(x)', '4']],
    why: 'Python में <code>y = x</code> कोई <b>copy नहीं</b> बनाता — दोनों नाम <b>एक ही list</b> की ओर इशारा करते हैं। इसलिए y में जोड़ने पर x भी बदल गया। असली copy: <code>y = x.copy()</code> या <code>x[:]</code>।'
  },
  {
    lang: 'C++', code: `class A { public: virtual void f() = 0; };\nA obj;`,
    opts: ['ठीक चलेगा', 'Compile Error — abstract class का object नहीं बनता', 'Runtime Error', 'Warning पर चलेगा'], ans: 'Compile Error — abstract class का object नहीं बनता',
    trace: [['f() = 0', 'pure virtual function'], ['इसलिए A abstract class है', '—'], ['A obj;', '❌ Compile Error']],
    why: 'जिस class में एक भी <b>pure virtual function</b> (= 0) हो, वह <b>abstract</b> हो जाती है — उसका object <b>कभी नहीं</b> बन सकता। सिर्फ़ उसका pointer/reference बन सकता है।'
  },
  {
    lang: 'C', code: `int i;\nfor(i = 0; i < 5; i++);\nprintf("%d", i);`,
    opts: ['5', '4', '0', 'अनंत loop'], ans: '5',
    trace: [['for(...);', '⚠️ semicolon = खाली body'], ['loop 0..4 घूमा', 'i बढ़ता रहा'], ['बाहर निकलते समय', 'i = 5 (शर्त टूटी)'], ['printf', '5']],
    why: 'for के आगे <b>semicolon</b> लगा है — इसलिए loop की body ख़ाली है। Loop तब रुका जब i=5 (5<5 झूठ)। इसलिए छपेगा <b>5</b>, 4 नहीं। यह क्लासिक चारा है।'
  }
];

let codeI = 0;
function codeRender() {
  const q = CODE_Q[codeI];
  const el = document.getElementById('cdBody');
  if (!el) return;
  el.innerHTML =
    `<div class="cdLang">${q.lang}</div>
     <pre class="cdCode">${q.code.replace(/</g, '&lt;')}</pre>
     <div class="cdAsk">output क्या होगा?</div>
     <div class="sqlChips">${q.opts.map(o =>
      `<button class="sqlChip" onclick="codeCheck('${String(o).replace(/'/g, "\\'")}')">${String(o).replace(/</g, '&lt;')}</button>`).join('')}</div>
     <div id="cdFb" class="ribFb"></div>`;
}
function codeCheck(given) {
  const q = CODE_Q[codeI];
  const fb = document.getElementById('cdFb');
  if (given === q.ans) {
    fb.innerHTML = `<span class="ribOk">✅ सही — ${String(q.ans).replace(/</g, '&lt;')}</span>` +
      labSteps(q.trace, ['क़दम', 'क्या हुआ']) +
      `<div class="sqlNote">${q.why}</div>`;
    if (typeof addXP === 'function') addXP(5);
  } else {
    fb.innerHTML = `<span class="ribNo">❌ नहीं। नीचे trace देख — फिर सोच।</span>` +
      labSteps(q.trace, ['क़दम', 'क्या हुआ']) +
      `<div class="sqlNote">सही जवाब: <b>${String(q.ans).replace(/</g, '&lt;')}</b><br>${q.why}</div>`;
  }
}
function codeNext() { codeI = (codeI + 1) % CODE_Q.length; codeRender(); }
function codePrev() { codeI = (codeI - 1 + CODE_Q.length) % CODE_Q.length; codeRender(); }
