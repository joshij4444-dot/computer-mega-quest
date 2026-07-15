/*! MODULE: data/paper2/u-network.js — Paper-II Unit: Communication & Network (PYQ ≈ 6/100) */

CH.push({ id: 'p2net', ic: '🌐', t: 'Comm. & Network', s: 'OSI • TCP/IP • Topology • Protocols', xp: 120, p: 2 });

LESSON.p2net = `
<div class="blk"><h3>🌐 Data Communication & Networking</h3>
<p><b>सरल भाषा में:</b> Networking का मतलब है दो कंप्यूटरों को इस तरह जोड़ना कि वे <b>भरोसे से बात</b> कर सकें। और इंसानों की तरह, बात करने के भी <b>नियम</b> (protocol) होते हैं — वरना अफ़रा-तफ़री मच जाए।</p>
<div class="tk">💡 <b>Layer में क्यों बाँटा?</b> पूरा संचार एक साथ सँभालना नामुमकिन है। इसलिए काम को <b>परतों</b> में बाँटा — हर परत का एक काम, और हर परत नीचे वाली की सेवा लेती है। इससे एक परत बदलो तो बाक़ी पर असर न पड़े। यही OSI और TCP/IP model हैं।</div>
</div>

<div class="blk"><h3>🏗️ OSI Model — 7 परतें</h3>
<p style="font-size:.8rem;color:var(--dim)">हर परत का काम अलग। data नीचे जाते-जाते लिफ़ाफ़े में लिपटता जाता है।</p>
<div class="sqlLab"><div id="osiOut"></div></div>
<div style="overflow-x:auto"><table>
<tr><th>परत</th><th>इकाई (PDU)</th><th>यंत्र</th></tr>
<tr><td>Transport</td><td><b>Segment</b></td><td>—</td></tr>
<tr><td>Network</td><td><b>Packet</b></td><td>Router</td></tr>
<tr><td>Data Link</td><td><b>Frame</b></td><td>Switch, Bridge</td></tr>
<tr><td>Physical</td><td><b>Bits</b></td><td>Hub, Repeater, Cable</td></tr>
</table></div>
<div class="tk">🧠 <b>मंत्र (7→1): "All People Seem To Need Data Processing"</b> — Application, Presentation, Session, Transport, Network, Data-link, Physical।</div>
<div class="tr">⚠️ <b>यंत्र किस परत पर — पक्का सवाल:</b> Hub/Repeater = <b>Physical (1)</b>, Switch/Bridge = <b>Data Link (2)</b>, Router = <b>Network (3)</b>, Gateway = सभी परतें।</div>
</div>

<div class="blk"><h3>🔗 OSI बनाम TCP/IP</h3>
<div style="overflow-x:auto"><table>
<tr><th>OSI</th><th>TCP/IP</th></tr>
<tr><td>7 परतें</td><td><b>4 परतें</b> (Application, Transport, Internet, Network Access)</td></tr>
<tr><td>सैद्धांतिक model</td><td>असल में इंटरनेट यही चलाता है</td></tr>
</table></div>
<div class="tk">🧠 <b>TCP बनाम UDP (Transport परत):</b><br>
<b>TCP</b> = भरोसेमंद, connection-oriented, order पक्का, acknowledgement — पर धीमा। (मिसाल: फ़ाइल, email, web)<br>
<b>UDP</b> = तेज़, connectionless, कोई गारंटी नहीं। (मिसाल: video call, live streaming, DNS, gaming)<br>
<i>"TCP = रजिस्टर्ड डाक (रसीद के साथ); UDP = पोस्टकार्ड (फेंक दो, पहुँचे तो पहुँचे)।"</i></div>
</div>

<div class="blk"><h3>📮 Protocols और Ports</h3>
<div class="tk">🧠 <b>ईमेल के तीन protocol (पक्का ट्रैप):</b><br>
<b>SMTP</b> (port 25) = mail <b>भेजना</b> (Push)<br>
<b>POP3</b> (port 110) = mail <b>लाना</b>, फिर server से हटा देना<br>
<b>IMAP</b> (port 143) = mail server पर <b>रखे-रखे</b> देखना (कई डिवाइस पर sync)</div>
<div class="sqlLab">
  <div id="portAsk" class="ribAsk">🎯 "चैलेंज दे" दबा — port याद कर।</div>
  <div class="nsBar" style="margin-top:7px">
    <input id="portAns" class="nsIn" placeholder="port नंबर..." spellcheck="false">
    <button class="sqlBtn go" onclick="portCheck()">✓</button>
  </div>
  <div class="sqlBar">
    <button class="sqlBtn" onclick="labNext('port')">🎯 चैलेंज दे</button>
    <button class="sqlBtn" onclick="labSkip('port')">🤷 जवाब</button>
    <span id="portScore" class="ribScore">स्कोर: 0</span>
  </div>
  <div id="portFb" class="ribFb"></div>
</div>
<div class="tr">⚠️ <b>PYQ (Q76):</b> "इंटरनेट पर mail को move करने वाला protocol?" → <b>SMTP</b> (भेजना)। POP3/IMAP सिर्फ़ लाने के लिए हैं।</div>
</div>

<div class="blk"><h3>📦 IP Header Decoder</h3>
<p style="font-size:.8rem;color:var(--dim)">packet का पहला byte डाल — version और header length खुद निकलेगी।</p>
<div class="sqlLab">
  <div class="nsBar">
    <input id="ipIn" class="nsIn" value="01000010" spellcheck="false" maxlength="8">
    <button class="sqlBtn go" onclick="ipDecode()">▶ decode</button>
  </div>
  <div class="sqlChips">
    <button class="sqlChip" onclick="ipDemo('01000010')">01000010 — असली PYQ</button>
    <button class="sqlChip" onclick="ipDemo('01000101')">01000101 (सामान्य IPv4)</button>
    <button class="sqlChip" onclick="ipDemo('01100101')">0110... (IPv6?)</button>
  </div>
  <div id="ipOut" class="sqlOut"></div>
</div>
<div class="tr">⚠️ <b>PYQ (Q90):</b> पहले 8 बिट 01000010 → Version = 0100 = <b>4 (IPv4)</b>, IHL = 0010 = 2 (बहुत छोटा, असल में invalid)। असल पकड़ यही है कि पहले 4 बिट <b>version</b> बताते हैं।</div>
</div>

<div class="blk"><h3>📡 Transmission Media + Switching + Multiplexing</h3>
<div style="overflow-x:auto"><table>
<tr><th>Guided (तार वाला)</th><th>Unguided (बेतार)</th></tr>
<tr><td>Twisted Pair (सस्ता, LAN), Coaxial (TV), <b>Optical Fibre</b> (सबसे तेज़, प्रकाश से, कोई EMI नहीं)</td><td>Radio wave, Microwave, Infrared (TV remote), Satellite</td></tr>
</table></div>
<div class="tk">🧠 <b>Optical fibre</b> = सबसे ज़्यादा bandwidth, सबसे कम loss, प्रकाश (total internal reflection) से — इसीलिए backbone में। Twisted pair सबसे सस्ता व आम।<br>
🧠 <b>Switching:</b> <b>Circuit switching</b> (पूरा रास्ता पहले तय — फ़ोन), <b>Packet switching</b> (data छोटे packets में, अलग-अलग रास्ते — इंटरनेट), Message switching।<br>
🧠 <b>Multiplexing</b> (एक ही लाइन पर कई संकेत): <b>FDM</b> (frequency बाँटो — रेडियो), <b>TDM</b> (समय बाँटो), WDM (प्रकाश की तरंगदैर्घ्य — fibre)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> इंटरनेट <b>packet switching</b> इस्तेमाल करता है (circuit नहीं)। Bandwidth = एक सेकंड में कितना data (bps)।</div>
</div>

<div class="blk"><h3>🔢 IP Addressing + Classes</h3>
<div class="tk">🧠 <b>IPv4</b> = 32 bit (चार 8-बिट octets, 0-255), जैसे 192.168.1.1। <b>IPv6</b> = 128 bit (hex, अनगिनत पते)।<br>
🧠 हर IP के दो हिस्से: <b>Network</b> भाग + <b>Host</b> भाग।</div>
<div style="overflow-x:auto"><table>
<tr><th>Class</th><th>पहला octet</th><th>उपयोग</th></tr>
<tr><td><b>A</b></td><td>0-127</td><td>बहुत बड़े नेटवर्क</td></tr>
<tr><td><b>B</b></td><td>128-191</td><td>मध्यम</td></tr>
<tr><td><b>C</b></td><td>192-223</td><td>छोटे (आम)</td></tr>
<tr><td><b>D</b></td><td>224-239</td><td>Multicast</td></tr>
<tr><td><b>E</b></td><td>240-255</td><td>प्रयोग/अनुसंधान</td></tr>
</table></div>
<div class="tk">🧠 <b>ख़ास पते:</b> 127.0.0.1 = <b>loopback</b> (ख़ुद का पता)। Private ranges (10.x, 172.16-31.x, 192.168.x)। <b>Subnet mask</b> (जैसे 255.255.255.0) network व host भाग अलग करता है। <b>DHCP</b> अपने आप IP देता है; <b>NAT</b> private↔public बदलता है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> पहला octet 192-223 = <b>Class C</b>। 127.0.0.1 हमेशा loopback (localhost)।</div>
</div>

<div class="blk"><h3>🕸️ Topology और Transmission</h3>
<div style="overflow-x:auto"><table>
<tr><th>Topology</th><th>ढाँचा</th><th>ख़ास बात</th></tr>
<tr><td><b>Star</b></td><td>सब केंद्रीय hub/switch से</td><td>सबसे प्रचलित; hub फेल तो सब ठप</td></tr>
<tr><td><b>Bus</b></td><td>एक ही मुख्य केबल</td><td>सस्ता; केबल टूटी तो सब ठप</td></tr>
<tr><td><b>Ring</b></td><td>गोल घेरे में</td><td>token से बारी</td></tr>
<tr><td><b>Mesh</b></td><td>हर नोड हर नोड से</td><td>सबसे भरोसेमंद, सबसे महँगा</td></tr>
</table></div>
<div class="tk">🧠 <b>Transmission mode:</b> <b>Simplex</b> (एकतरफ़ा — TV, keyboard), <b>Half-duplex</b> (बारी-बारी — walkie-talkie), <b>Full-duplex</b> (एक साथ दोनों — फ़ोन)।</div>
<div class="tk">🧠 <b>Network आकार:</b> <b>PAN</b> (व्यक्तिगत) &lt; <b>LAN</b> (एक इमारत) &lt; <b>MAN</b> (शहर) &lt; <b>WAN</b> (देश/दुनिया — इंटरनेट सबसे बड़ा WAN)।</div>
<div class="tr">⚠️ <b>PYQ (Q94):</b> WiFi बनाम WiMax — WiFi छोटे इलाक़े (LAN, ~100m), WiMax बड़े इलाक़े (MAN, कई किमी)। <b>PYQ (Q96):</b> FTP के तीन transmission mode — <b>stream, block, compressed</b>। <b>PYQ (Q97):</b> Checksum = <b>error detection</b> के लिए।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🏗️ OSI 7 परतें: <b>All People Seem To Need Data Processing</b><br>
🔌 Hub/Repeater=Physical(1) | Switch/Bridge=DataLink(2) | Router=Network(3)<br>
📦 PDU: Transport=Segment, Network=<b>Packet</b>, DataLink=Frame, Physical=Bits<br>
🚚 <b>TCP</b> = भरोसेमंद/धीमा (रजिस्टर्ड डाक) | <b>UDP</b> = तेज़/बेभरोसा (पोस्टकार्ड)<br>
📮 <b>SMTP(25)</b> भेजे | POP3(110) लाए+हटाए | IMAP(143) रखे-रखे देखे<br>
🔢 HTTP=80, HTTPS=443, FTP=21, DNS=53, Telnet=23<br>
📦 IPv4 पहला byte = 4bit Version + 4bit IHL<br>
🕸️ Star (hub) | Bus (एक केबल) | Ring (token) | Mesh (सबसे भरोसेमंद)<br>
📡 Simplex(एकतरफ़ा) | Half-duplex(बारी) | Full-duplex(साथ-साथ)<br>
📏 PAN &lt; LAN &lt; MAN &lt; WAN | Checksum = error detection
</div>
</div>
`;

CARDS.p2net = [
  ['[रिकॉल] OSI model में कितनी परतें होती हैं और उन्हें याद रखने का मंत्र?', '7 परतें — "All People Seem To Need Data Processing" (Application से Physical तक)।', 'APSTNDP'],
  ['[रिकॉल] इंटरनेट पर mail भेजने वाला protocol कौन-सा है?', 'SMTP (Simple Mail Transfer Protocol), port 25।', 'भेजना = SMTP'],
  ['[रिकॉल] Router किस OSI परत पर काम करता है?', 'Network layer (परत 3)।', 'राउटर = रास्ता = 3'],
  ['[रिवर्स रिकॉल] "भरोसेमंद, connection-oriented, acknowledgement वाला पर धीमा" — कौन-सा protocol?', 'TCP।', 'रजिस्टर्ड डाक'],
  ['[रिवर्स रिकॉल] "हर नोड हर दूसरे नोड से जुड़ा, सबसे भरोसेमंद पर सबसे महँगा" — कौन-सी topology?', 'Mesh topology।', 'जाल = भरोसा'],
  ['[रिक्त स्थान] TCP/IP model में ______ परतें होती हैं, जबकि OSI में ______।', '4; 7', '4 बनाम 7'],
  ['[रिक्त स्थान] HTTP का port ______, HTTPS का ______ और DNS का ______ है।', '80; 443; 53', '80-443-53'],
  ['[कथन आधारित] कथन: UDP connection-oriented और भरोसेमंद protocol है।', 'ग़लत। UDP connectionless और बेभरोसा (पर तेज़) है। TCP connection-oriented व भरोसेमंद है।', 'UDP = पोस्टकार्ड'],
  ['[कथन आधारित] कथन: Switch, Network layer का device है।', 'ग़लत। Switch/Bridge = Data Link (2)। Router = Network (3)।', 'स्विच = परत 2'],
  ['[मैच] मिलाओ: (a) Hub (b) Switch (c) Router (d) Gateway', '(a) Physical(1), (b) Data Link(2), (c) Network(3), (d) सभी परतें।', 'यंत्र और परत'],
  ['[मैच] मिलाओ: (a) SMTP (b) POP3 (c) IMAP (d) HTTP', '(a) mail भेजना (25), (b) mail लाना+हटाना (110), (c) server पर रखे देखना (143), (d) web (80)।', 'protocol परिवार'],
  ['[मैच] मिलाओ: (a) Star (b) Bus (c) Ring (d) Mesh', '(a) केंद्रीय hub, (b) एक मुख्य केबल, (c) गोल token, (d) सब-से-सब।', 'चार topology'],
  ['[तुलना] TCP और UDP में मुख्य फ़र्क़?', 'TCP connection-oriented, भरोसेमंद, order+acknowledgement, धीमा (web/email)। UDP connectionless, बेभरोसा, तेज़ (video/DNS/gaming)।', 'डाक बनाम पोस्टकार्ड'],
  ['[तुलना] POP3 और IMAP में फ़र्क़?', 'POP3 mail download करके server से हटा देता है (एक डिवाइस)। IMAP mail server पर रखे-रखे दिखाता है (कई डिवाइस पर sync)।', 'हटाओ बनाम रखो'],
  ['[तुलना] Half-duplex और Full-duplex?', 'Half-duplex = बारी-बारी दोनों दिशा (walkie-talkie)। Full-duplex = एक साथ दोनों दिशा (फ़ोन)।', 'बारी बनाम साथ'],
  ['[कालक्रम] Network को आकार के अनुसार छोटे से बड़े क्रम में लिखो।', 'PAN → LAN → MAN → WAN।', 'व्यक्ति-इमारत-शहर-देश'],
  ['[Code Output] IPv4 packet का पहला byte 01000010 है — version क्या है?', 'पहले 4 बिट = 0100 = 4, यानी IPv4।', 'पहले 4 बिट = version'],
  ['[Code Output] OSI में Network layer की PDU क्या कहलाती है?', 'Packet। (Transport=Segment, Data Link=Frame, Physical=Bits।)', 'नेटवर्क = पैकेट'],
  ['[True/False] Hub एक intelligent device है जो सिर्फ़ सही port पर data भेजता है।', 'False। Hub "बेवक़ूफ़" है — data सब ports पर भेजता है (broadcast)। सही port पर भेजने वाला Switch है।', 'हब सबको भेजे'],
  ['[True/False] Checksum का उपयोग error detection के लिए होता है।', 'True। Checksum प्राप्त data की जाँच करके बताता है कि रास्ते में कोई bit बिगड़ा तो नहीं।', 'जाँच का अंक'],
  ['[ट्रैप कार्ड] mail लाने के लिए SMTP इस्तेमाल होता है?', 'नहीं! SMTP सिर्फ़ भेजने (push) के लिए है। लाने के लिए POP3 या IMAP।', 'SMTP सिर्फ़ भेजे'],
  ['[ट्रैप कार्ड] WiFi और WiMax एक ही चीज़ हैं?', 'नहीं। WiFi छोटे इलाक़े (LAN, ~100m) के लिए; WiMax बड़े इलाक़े (MAN, कई किलोमीटर) के लिए।', 'फ़ाई छोटा, मैक्स बड़ा'],
  ['[ट्रैप कार्ड] Repeater कौन-सी परत का device है — Data Link या Physical?', 'Physical (परत 1)। Repeater सिर्फ़ सिग्नल को दोबारा मज़बूत करता है, कोई समझदारी नहीं। Switch (Data Link) समझदार है।', 'रिपीटर = परत 1']
];

QB.p2net = [
  { q: 'इंटरनेट के माध्यम से एक mail server से दूसरे तक संदेश move करने के लिए कौन-सा protocol प्रयोग होता है?', o: ['POP3', 'IMAP', 'SMTP', 'HTTP'], a: 2, e: 'SMTP (Simple Mail Transfer Protocol, port 25) mail भेजने और servers के बीच forward करने के लिए है। POP3 और IMAP सिर्फ़ mail को client तक लाने के लिए हैं।', trap: 'POP3 चुन लेना — वो mail लाता है, भेजता नहीं।', d: 2, tag: 'Protocols', pyq: 'Paper-II Q76 — हूबहू' },
  { q: 'एक IP packet 01000010 पहले 8 बिट के साथ आया है। इसके बारे में सही कथन क्या है?', o: ['यह IPv6 packet है', 'पहले 4 बिट (0100) बताते हैं कि यह IPv4 है', 'यह एक ARP packet है', 'पहले 4 बिट header checksum हैं'], a: 1, e: 'IPv4 header के पहले 4 बिट Version field हैं — 0100 = 4, यानी IPv4। अगले 4 बिट IHL (header length) हैं।', trap: 'पहले byte को पूरा एक ही field मान लेना — असल में वह दो 4-बिट हिस्सों में बँटा है।', d: 3, tag: 'IP', pyq: 'Paper-II Q90 — हूबहू' },
  { q: 'Network layer firewall मुख्यतः किस रूप में काम करता है?', o: ['Packet filter', 'Proxy server', 'Antivirus', 'Encryption engine'], a: 0, e: 'Network layer (परत 3) पर काम करने वाला firewall packet filter की तरह काम करता है — वह हर packet के source/destination IP और port देखकर उसे आने दे या रोक दे, यह तय करता है।', trap: 'Proxy चुन लेना — proxy application layer पर काम करता है।', d: 2, tag: 'Network Devices', pyq: 'Paper-II Q61 — हूबहू' },
  { q: 'FTP में कितने और कौन-से transmission modes होते हैं?', o: ['दो — stream और block', 'तीन — stream, block और compressed', 'एक — सिर्फ़ stream', 'चार — stream, block, compressed, secure'], a: 1, e: 'FTP में तीन transmission modes हैं — stream (लगातार धारा), block (टुकड़ों में) और compressed (दबाकर)।', trap: '"secure" जोड़कर चार बना देना — वो अलग protocol (SFTP) है।', d: 3, tag: 'Protocols', pyq: 'Paper-II Q96 — हूबहू' },
  { q: 'Checksum का मुख्य उपयोग क्या है?', o: ['Encryption', 'Error detection', 'Routing', 'Compression'], a: 1, e: 'Checksum प्राप्त data पर एक गणना करके भेजे गए मान से मिलाता है — मेल न होने पर पता चल जाता है कि रास्ते में data बिगड़ गया। यह error detection है।', trap: 'Encryption चुन लेना — checksum गोपनीयता नहीं, शुद्धता जाँचता है।', d: 2, tag: 'Error Control', pyq: 'Paper-II Q97 — हूबहू' },
  { q: 'OSI model में Router किस परत पर काम करता है?', o: ['Physical', 'Data Link', 'Network', 'Transport'], a: 2, e: 'Router Network layer (परत 3) पर काम करता है — यह IP addresses देखकर packets का सबसे अच्छा रास्ता (routing) चुनता है।', trap: 'Data Link चुन लेना — वहाँ Switch/Bridge काम करते हैं।', d: 1, tag: 'OSI', pyq: 'बार-बार' },
  { q: 'TCP और UDP के बारे में कौन-सा कथन सही है?', o: ['दोनों connection-oriented हैं', 'TCP connection-oriented व भरोसेमंद है, UDP connectionless व तेज़', 'UDP भरोसेमंद है, TCP नहीं', 'दोनों Network layer के हैं'], a: 1, e: 'TCP connection बनाता है, order व acknowledgement देता है (भरोसेमंद पर धीमा — web, email)। UDP बिना connection के तेज़ी से भेजता है, कोई गारंटी नहीं (video call, DNS, gaming)। दोनों Transport layer के हैं।', trap: 'UDP को भरोसेमंद मान लेना।', d: 2, tag: 'Transport', pyq: 'बार-बार' },
  { q: 'निम्न में से कौन-सा device Physical layer पर काम करता है?', o: ['Switch', 'Router', 'Hub', 'Gateway'], a: 2, e: 'Hub और Repeater Physical layer (परत 1) के हैं — ये सिर्फ़ signal दोहराते/broadcast करते हैं, कोई समझदारी नहीं। Switch=परत 2, Router=परत 3।', trap: 'Switch चुन लेना — वो Data Link (परत 2) का है।', d: 2, tag: 'Network Devices', pyq: 'बार-बार' },
  { q: 'WiFi और WiMax के बारे में सही कथन कौन-सा है?', o: ['दोनों एक ही तकनीक हैं', 'WiFi छोटे क्षेत्र (LAN) के लिए, WiMax बड़े क्षेत्र (MAN) के लिए', 'WiMax सिर्फ़ केबल पर चलता है', 'WiFi WiMax से तेज़ और दूरगामी दोनों है'], a: 1, e: 'WiFi छोटी दूरी (लगभग 100 मीटर, एक इमारत/LAN) के लिए है, जबकि WiMax कई किलोमीटर (पूरे शहर/MAN) तक wireless broadband देता है।', trap: 'दोनों को एक मान लेना।', d: 2, tag: 'Wireless', pyq: 'Paper-II Q94 — हूबहू' },
  { q: 'HTTPS किस port का उपयोग करता है?', o: ['80', '443', '21', '25'], a: 1, e: 'HTTPS (सुरक्षित HTTP) port 443 का उपयोग करता है। सामान्य HTTP port 80 पर चलता है।', trap: '80 चुन लेना — वो असुरक्षित HTTP है।', d: 1, tag: 'Ports', pyq: 'बार-बार' },
  { q: 'OSI model में Network layer की protocol data unit (PDU) क्या कहलाती है?', o: ['Frame', 'Packet', 'Segment', 'Bit'], a: 1, e: 'Network layer की इकाई Packet है। Transport=Segment, Data Link=Frame, Physical=Bit।', trap: 'Segment (Transport की इकाई) चुन लेना।', d: 2, tag: 'OSI', pyq: 'बार-बार' },
  { q: 'सबसे भरोसेमंद (fault-tolerant) पर सबसे महँगी network topology कौन-सी है?', o: ['Star', 'Bus', 'Ring', 'Mesh'], a: 3, e: 'Mesh में हर नोड हर दूसरे नोड से सीधा जुड़ा होता है, इसलिए एक link टूटने पर भी बाक़ी रास्ते बचे रहते हैं — सबसे भरोसेमंद, पर सबसे ज़्यादा केबल/लागत।', trap: 'Star चुन लेना — वो प्रचलित है पर central hub फेल हो तो सब ठप।', d: 2, tag: 'Topology', pyq: 'बार-बार' },
  { q: 'POP3 और IMAP में मुख्य अंतर क्या है?', o: ['दोनों mail भेजते हैं', 'POP3 mail download करके server से हटाता है, IMAP server पर रखे-रखे sync करता है', 'IMAP mail भेजता है, POP3 लाता है', 'दोनों HTTP पर आधारित हैं'], a: 1, e: 'POP3 आमतौर पर mail को device पर download करके server से हटा देता है (एक ही डिवाइस के लिए ठीक)। IMAP mail को server पर रखता है और कई डिवाइसों में sync करता है।', trap: 'किसी एक को "भेजना" मान लेना — दोनों सिर्फ़ लाने के लिए हैं, भेजना SMTP का काम है।', d: 2, tag: 'Protocols', pyq: 'बार-बार' },
  { q: 'Walkie-talkie किस transmission mode का उदाहरण है?', o: ['Simplex', 'Half-duplex', 'Full-duplex', 'Multiplex'], a: 1, e: 'Walkie-talkie half-duplex है — एक समय में एक ही व्यक्ति बोल सकता है, दोनों बारी-बारी। Full-duplex (फ़ोन) में दोनों एक साथ बोल सकते हैं।', trap: 'Full-duplex चुन लेना — उसमें एक साथ दोनों दिशा चलती है, walkie-talkie में नहीं।', d: 2, tag: 'Transmission', pyq: 'बार-बार' },
  { q: 'TCP/IP model में कितनी परतें होती हैं?', o: ['7', '5', '4', '3'], a: 2, e: 'TCP/IP model में 4 परतें हैं — Application, Transport, Internet और Network Access। OSI में 7 होती हैं।', trap: '7 चुन लेना (OSI से भ्रमित होकर)।', d: 1, tag: 'TCP/IP', pyq: 'बार-बार' },
  { q: 'Base64 encoding में 24 बिट को किस तरह बाँटा जाता है?', o: ['तीन 8-बिट chunks में', 'चार 6-बिट chunks में', 'दो 12-बिट chunks में', 'छह 4-बिट chunks में'], a: 1, e: 'Base64 में 24 बिट (3 bytes) को चार 6-बिट chunks में बाँटा जाता है, और हर 6-बिट chunk को एक printable character में बदला जाता है (2⁶ = 64 अक्षर)।', trap: 'तीन 8-बिट (मूल bytes) चुन लेना — encoding के बाद तो चार 6-बिट होते हैं।', d: 3, tag: 'Encoding', pyq: 'Paper-II Q64 — हूबहू' },
  { q: 'Hub और Switch में मुख्य अंतर क्या है?', o: ['Hub data सिर्फ़ लक्षित port पर भेजता है', 'Switch data सिर्फ़ लक्षित port पर भेजता है, Hub सभी ports पर broadcast करता है', 'दोनों एक जैसे हैं', 'Switch Physical layer का है'], a: 1, e: 'Hub "बेवक़ूफ़" है — आया data सभी ports पर भेज देता है (broadcast, टक्कर ज़्यादा)। Switch MAC address देखकर सिर्फ़ सही port पर भेजता है (परत 2, समझदार)।', trap: 'दोनों को एक मान लेना, या भूमिकाएँ उलट देना।', d: 2, tag: 'Network Devices', pyq: 'बार-बार' },
  { q: 'निम्न में से सबसे बड़ा network कौन-सा है?', o: ['PAN', 'LAN', 'MAN', 'WAN'], a: 3, e: 'आकार क्रम: PAN (व्यक्तिगत) < LAN (एक इमारत) < MAN (शहर) < WAN (देश/दुनिया)। इंटरनेट सबसे बड़ा WAN है।', trap: 'MAN चुन लेना।', d: 1, tag: 'Network Types', pyq: 'आधारभूत' },
  { q: 'DNS का मुख्य कार्य क्या है और वह किस port पर चलता है?', o: ['Domain name को IP address में बदलना; port 53', 'Mail भेजना; port 25', 'फ़ाइल transfer; port 21', 'Web page लाना; port 80'], a: 0, e: 'DNS (Domain Name System) मानव-पठनीय नाम (google.com) को मशीन के IP address में बदलता है — इंटरनेट की "फ़ोनबुक"। यह port 53 पर चलता है।', trap: 'काम और port दोनों याद रखने पड़ते हैं; SMTP (25) से भ्रमित होना।', d: 2, tag: 'Protocols', pyq: 'बार-बार' },
  { q: 'Full-duplex संचार का सही उदाहरण कौन-सा है?', o: ['Radio broadcast', 'Keyboard से computer', 'Telephone बातचीत', 'TV प्रसारण'], a: 2, e: 'Telephone full-duplex है — दोनों व्यक्ति एक साथ बोल और सुन सकते हैं। Radio/TV simplex (एकतरफ़ा), keyboard→computer भी simplex।', trap: 'Radio broadcast चुन लेना — वो simplex (एकतरफ़ा) है।', d: 1, tag: 'Transmission', pyq: 'आधारभूत' }
];

UNIT_INIT.p2net = function () { osiRender(); ipDecode(); };
