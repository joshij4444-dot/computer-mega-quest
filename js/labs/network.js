/*! MODULE: js/labs/network.js — OSI/TCP-IP layer matcher + IP header decoder (Unit: Communication & Network) */

const OSI = [
  ['7 Application', 'HTTP, FTP, SMTP, DNS', 'user का data'],
  ['6 Presentation', 'encryption, compression, JPEG', 'रूप बदले'],
  ['5 Session', 'session खोले/बंद करे', 'बातचीत सँभाले'],
  ['4 Transport', 'TCP, UDP • port • segment', 'end-to-end भरोसा'],
  ['3 Network', 'IP, Router • packet', 'रास्ता (routing)'],
  ['2 Data Link', 'MAC, Switch • frame', 'पड़ोसी तक'],
  ['1 Physical', 'cable, hub, bits', 'बिजली/सिग्नल']
];
function osiRender() {
  const el = document.getElementById('osiOut');
  if (!el) return;
  el.innerHTML = OSI.map((r, i) =>
    `<div class="osiRow" style="opacity:${1 - i * 0.04}">
       <div class="osiN">${r[0]}</div><div class="osiD">${r[1]}</div><div class="osiP">${r[2]}</div></div>`).join('') +
    `<div class="sqlNote">🧠 ऊपर से नीचे याद रखने का मंत्र: <b>"All People Seem To Need Data Processing"</b> (Application→Physical)।<br>
     PDU बदलता है: Transport=<b>Segment</b>, Network=<b>Packet</b>, Data Link=<b>Frame</b>, Physical=<b>Bits</b>।</div>`;
}

/* IP header first-byte decoder — the PYQ Q90 pattern (01000010) */
function ipDecode() {
  const raw = (document.getElementById('ipIn').value || '').trim().replace(/\s/g, '');
  const out = document.getElementById('ipOut');
  try {
    if (!/^[01]{8}$/.test(raw)) throw new Error('ठीक 8 बिट (0/1) दे, जैसे 01000010।');
    const ver = parseInt(raw.slice(0, 4), 2);
    const ihl = parseInt(raw.slice(4, 8), 2);
    const bytes = ihl * 4;
    let note;
    if (ver === 4) note = `Version = <b>4</b> → यह एक <b>IPv4</b> packet है।`;
    else if (ver === 6) note = `Version = <b>6</b> → IPv6 packet।`;
    else note = `Version = <b>${ver}</b> → यह valid IP version नहीं है — packet <b>ग़लत/discard</b> होगा।`;
    out.innerHTML = labSteps([
      ['पहले 4 बिट', raw.slice(0, 4) + ' = Version ' + ver],
      ['अगले 4 बिट', raw.slice(4, 8) + ' = IHL ' + ihl + ' (यानी header ' + bytes + ' bytes)']
    ], ['हिस्सा', 'अर्थ']) +
      `<div class="nsRes">${note}</div>
       <div class="sqlNote">🧠 IPv4 header का पहला byte = 4 bit <b>Version</b> + 4 bit <b>IHL</b> (header length words में; ×4 = bytes)। न्यूनतम header 20 bytes (IHL=5)।</div>`;
  } catch (e) { out.innerHTML = '<div class="sqlNote sqlErr">❌ ' + e.message + '</div>'; }
}
function ipDemo(v) { document.getElementById('ipIn').value = v; ipDecode(); }

/* protocol → port challenge (shared core) */
labMake('port', {
  items: [
    { ask: 'HTTP का default port?', ans: '80', why: 'HTTP = <b>80</b>, HTTPS = 443।' },
    { ask: 'HTTPS का port?', ans: '443', why: 'HTTPS = <b>443</b> (सुरक्षित HTTP)।' },
    { ask: 'FTP (control) का port?', ans: '21', why: 'FTP = <b>21</b> (data 20)।' },
    { ask: 'SMTP का port?', ans: '25', why: 'SMTP (mail भेजना) = <b>25</b>।' },
    { ask: 'DNS का port?', ans: '53', why: 'DNS = <b>53</b>।' },
    { ask: 'Telnet का port?', ans: '23', why: 'Telnet = <b>23</b>।' },
    { ask: 'POP3 का port?', ans: '110', why: 'POP3 (mail लाना) = <b>110</b>; IMAP = 143।' }
  ], ask: 'portAsk', fb: 'portFb', score: 'portScore'
});
function portCheck() { labAnswer('port', document.getElementById('portAns').value); }
