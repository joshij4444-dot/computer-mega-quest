/*! MODULE: js/labs/security.js — Caesar cipher wheel + Base64 chunk visual + attack matcher */

function caesarRun() {
  const txt = (document.getElementById('caeIn').value || '').toUpperCase();
  const k = ((+document.getElementById('caeKey').value || 0) % 26 + 26) % 26;
  const enc = txt.replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0) - 65 + k) % 26 + 65));
  document.getElementById('caeOut').innerHTML =
    `<div class="nsRes" style="direction:ltr">${txt || '—'} &nbsp;→(shift ${k})→&nbsp; <b>${enc || '—'}</b></div>
     <div class="sqlNote">🧠 Caesar cipher हर अक्षर को <b>${k}</b> जगह आगे खिसकाता है — यह <b>substitution</b> cipher है और <b>symmetric</b> (एक ही key से encrypt व decrypt)। बेहद कमज़ोर: सिर्फ़ 25 keys, brute force में सेकंडों में टूटे।</div>`;
}
function caeDemo(t, k) { document.getElementById('caeIn').value = t; document.getElementById('caeKey').value = k; caesarRun(); }

function b64Show() {
  const bits = '011000010110001001100011'; // "abc" example, 24 bits
  const chunks8 = bits.match(/.{8}/g);
  const chunks6 = bits.match(/.{6}/g);
  document.getElementById('b64Out').innerHTML =
    `<div class="sqlNote">3 bytes (24 bit) — मूल रूप:</div>` +
    `<div class="dsaRow">${chunks8.map(c => `<div class="dsaBox" style="min-width:64px">${c}</div>`).join('')}</div>` +
    `<div class="sqlNote">Base64 encoding — वही 24 बिट को <b>चार 6-बिट</b> टुकड़ों में तोड़ो:</div>` +
    `<div class="dsaRow">${chunks6.map(c => `<div class="dsaBox hot" style="min-width:52px">${c}</div>`).join('')}</div>` +
    `<div class="sqlNote">हर 6-बिट टुकड़े को एक अक्षर बनाया जाता है (2⁶ = 64 संभव अक्षर — इसीलिए नाम Base<b>64</b>)। यही Paper-II Q64 है।</div>`;
}

labMake('atk', {
  items: [
    { ask: 'फ़ोन hacking की सबसे पुरानी तकनीक (मुफ़्त कॉल के लिए)?', ans: 'Phreaking', why: '<b>Phreaking</b> — टेलिफ़ोन तंत्र को धोखा देकर मुफ़्त कॉल। यह असली Paper-II Q42 है।' },
    { ask: 'राजनीतिक/सामाजिक मक़सद से की गई hacking?', ans: 'Hacktivism', why: '<b>Hacktivism</b> = Hacking + Activism। असली Paper-II Q39।' },
    { ask: 'OS की सामान्य कार्यप्रणाली बदलकर पूरा नियंत्रण छिपकर लेने वाला malware?', ans: 'Rootkit', why: '<b>Rootkit</b> — गहराई (root/admin) में छिपकर बैठ जाता है। Paper-II Q75।' },
    { ask: 'ख़ुद की नक़ल बनाकर नेटवर्क में अपने आप फैलने वाला (host नहीं चाहिए)?', ans: 'Worm', why: '<b>Worm</b> — virus के उलट, इसे फैलने के लिए host program नहीं चाहिए।' },
    { ask: 'भरोसेमंद दिखकर अंदर नुक़सान करने वाला (छिपा हुआ) program?', ans: 'Trojan', why: '<b>Trojan Horse</b> — उपयोगी दिखता है, अंदर नुक़सान। ख़ुद फैलता नहीं।' },
    { ask: 'नक़ली वेबसाइट/ईमेल से पासवर्ड ठगना?', ans: 'Phishing', why: '<b>Phishing</b> — चारा डालकर (बैंक जैसा दिखकर) जानकारी चुराना।' },
    { ask: 'बीच में बैठकर दो पक्षों का संवाद चुपके से पढ़ना?', ans: 'MITM', why: '<b>Man-in-the-Middle</b> — बीच में घुसकर सुनना/बदलना।' }
  ], ask: 'atkAsk', fb: 'atkFb', score: 'atkScore',
  match: (item, g) => g.trim().toLowerCase().replace(/[^a-z]/g, '') === item.ans.toLowerCase().replace(/[^a-z]/g, '')
});
function atkCheck() { labAnswer('atk', document.getElementById('atkAns').value); }
