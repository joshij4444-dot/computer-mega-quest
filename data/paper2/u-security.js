/*! MODULE: data/paper2/u-security.js — Paper-II Unit: Network Security (PYQ ≈ 8/100) */

CH.push({ id: 'p2sec', ic: '🛡️', t: 'Network Security', s: 'CIA • Encryption • Attacks • Malware', xp: 120, p: 2 });

LESSON.p2sec = `
<div class="blk"><h3>🛡️ Network Security</h3>
<p><b>सरल भाषा में:</b> Security का मतलब है तेरे data को तीन ख़तरों से बचाना — कोई <b>चुरा</b> न ले, कोई <b>बदल</b> न दे, और ज़रूरत पड़ने पर वो <b>मिल</b> ज़रूर जाए। यही तीन मिलकर <b>CIA triad</b> बनाते हैं।</p>
<div class="viz">
<svg viewBox="0 0 380 130" xmlns="http://www.w3.org/2000/svg">
 <polygon points="190,12 360,118 20,118" fill="none" stroke="#ffc233" stroke-width="1.5"/>
 <text x="190" y="40" text-anchor="middle" fill="#22d3ee" font-size="12" font-weight="800">Confidentiality</text>
 <text x="190" y="54" text-anchor="middle" fill="#8298b6" font-size="8">कोई चुरा न ले (गोपनीयता)</text>
 <text x="80" y="108" text-anchor="middle" fill="#26d07c" font-size="12" font-weight="800">Integrity</text>
 <text x="80" y="120" text-anchor="middle" fill="#8298b6" font-size="8">कोई बदल न दे</text>
 <text x="300" y="108" text-anchor="middle" fill="#ff8c1a" font-size="12" font-weight="800">Availability</text>
 <text x="300" y="120" text-anchor="middle" fill="#8298b6" font-size="8">ज़रूरत पर मिले</text>
</svg>
</div>
<div class="tk">🧠 <b>CIA triad</b> — <b>C</b>onfidentiality (गोपनीयता), <b>I</b>ntegrity (अखंडता), <b>A</b>vailability (उपलब्धता)। हर हमला इन्हीं तीन में से किसी पर वार करता है। (चौथा अक्सर जोड़ा जाता है: <b>Non-repudiation</b> — मुकर न सकना।)</div>
</div>

<div class="blk"><h3>🔐 Encryption — Symmetric बनाम Asymmetric</h3>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Symmetric</th><th>Asymmetric</th></tr>
<tr><td>Keys</td><td><b>एक ही</b> key (secret)</td><td><b>दो</b> keys — Public + Private</td></tr>
<tr><td>रफ़्तार</td><td>तेज़</td><td>धीमा</td></tr>
<tr><td>मिसाल</td><td>DES, AES, 3DES</td><td>RSA, ECC, Diffie-Hellman</td></tr>
<tr><td>दिक़्क़त</td><td>key साझा कैसे करें?</td><td>धीमा, पर key समस्या हल</td></tr>
</table></div>
<div class="tk">🧠 <b>Digital Signature की चाबी (पक्का सवाल):</b> संदेश को भेजने वाला अपनी <b>private key</b> से "sign" करता है; कोई भी उसकी <b>public key</b> से जाँच सकता है। इससे <b>authentication + non-repudiation</b> मिलता है।<br>
<i>उल्टा: गोपनीयता के लिए receiver की <b>public key</b> से encrypt करते हैं, वो अपनी <b>private key</b> से खोलता है।</i></div>
<div class="tr">⚠️ <b>PYQ:</b> "Digital signature किस key पर आधारित है?" → भेजने वाले की <b>Private key</b> (sign करने के लिए)।<br>
<b>Hashing</b> (MD5, SHA) encryption नहीं — यह <b>एकतरफ़ा</b> है (वापस नहीं खुलता), सिर्फ़ integrity जाँचने के लिए।</div>
</div>

<div class="blk"><h3>🔑 Cipher प्रकार + Hashing + PKI</h3>
<div style="overflow-x:auto"><table>
<tr><th>श्रेणी</th><th>उदाहरण</th><th>ख़ास</th></tr>
<tr><td><b>Substitution</b></td><td>Caesar, Vigenère</td><td>अक्षर बदलो</td></tr>
<tr><td><b>Transposition</b></td><td>Rail Fence</td><td>अक्षरों का क्रम बदलो</td></tr>
<tr><td><b>Block cipher</b></td><td>DES (56-bit), AES (128/192/256), 3DES</td><td>टुकड़ों (block) में</td></tr>
<tr><td><b>Stream cipher</b></td><td>RC4</td><td>bit-दर-bit</td></tr>
</table></div>
<div class="tk">🧠 <b>Hashing (एकतरफ़ा):</b> MD5 (128-bit, कमज़ोर), SHA-1 (160), SHA-256 — इनपुट का fixed "fingerprint"। वापस नहीं खुलता; सिर्फ़ <b>integrity</b> (छेड़छाड़ पकड़ना)।<br>
🧠 <b>PKI + Digital Certificate:</b> <b>CA</b> (Certificate Authority) public key को व्यक्ति से जोड़कर certificate देता है — ताकि किसी की public key नक़ली न हो। <b>SSL/TLS</b> इसी पर HTTPS चलाता है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> MD5/SHA = hashing (encryption नहीं)। DES symmetric, RSA asymmetric। Encryption वापस खुलता है, hashing नहीं।</div>
</div>

<div class="blk"><h3>🔐 Security Services (CIA का विस्तार)</h3>
<div style="overflow-x:auto"><table>
<tr><th>सेवा</th><th>मतलब</th><th>कैसे मिले</th></tr>
<tr><td><b>Confidentiality</b></td><td>कोई पढ़ न सके</td><td>Encryption</td></tr>
<tr><td><b>Integrity</b></td><td>बदला न जाए</td><td>Hashing / MAC</td></tr>
<tr><td><b>Availability</b></td><td>ज़रूरत पर मिले</td><td>Backup, anti-DoS</td></tr>
<tr><td><b>Authentication</b></td><td>असली कौन</td><td>Password, biometric, OTP</td></tr>
<tr><td><b>Non-repudiation</b></td><td>मुकर न सके</td><td>Digital signature</td></tr>
</table></div>
<div class="tk">🧠 <b>Authentication के 3 कारक:</b> कुछ आप <b>जानते</b> हैं (password), कुछ आपके <b>पास</b> है (OTP/token), कुछ आप <b>हैं</b> (biometric)। दो या ज़्यादा = <b>2FA/MFA</b>।</div>
</div>

<div class="blk"><h3>🎡 Caesar Cipher — encryption ख़ुद देख</h3>
<div class="sqlLab">
  <div class="nsBar">
    <input id="caeIn" class="nsIn" value="RSSB" spellcheck="false">
    <span style="font-size:.72rem;color:var(--dim)">shift</span>
    <input id="caeKey" class="nsIn" value="3" style="max-width:55px">
    <button class="sqlBtn go" onclick="caesarRun()">🔒 encrypt</button>
  </div>
  <div class="sqlChips">
    <button class="sqlChip" onclick="caeDemo('HELLO',3)">HELLO shift 3</button>
    <button class="sqlChip" onclick="caeDemo('ATTACK',13)">ATTACK shift 13 (ROT13)</button>
  </div>
  <div id="caeOut" class="sqlOut"></div>
</div>
<div class="tk">🧠 Caesar = सबसे पुराना <b>substitution</b> cipher, <b>symmetric</b>। ROT13 = shift 13 (दो बार लगाओ तो वापस मूल)।</div>
</div>

<div class="blk"><h3>🦠 Malware — पूरा कुनबा</h3>
<div style="overflow-x:auto"><table>
<tr><th>क़िस्म</th><th>पहचान</th></tr>
<tr><td><b>Virus</b></td><td>host program से चिपककर फैले (उसे चलाना पड़े)</td></tr>
<tr><td><b>Worm</b></td><td>ख़ुद फैले, host नहीं चाहिए — नेटवर्क से</td></tr>
<tr><td><b>Trojan</b></td><td>उपयोगी दिखे, अंदर नुक़सान; ख़ुद न फैले</td></tr>
<tr><td><b>Rootkit</b></td><td>OS में गहराई से छिपकर पूरा नियंत्रण ले</td></tr>
<tr><td><b>Ransomware</b></td><td>data को lock/encrypt करके फिरौती माँगे</td></tr>
<tr><td><b>Spyware</b></td><td>चुपके से जानकारी भेजे</td></tr>
</table></div>
<div class="tk">🧠 <b>Virus Life Cycle के 4 चरण:</b> <b>Dormant</b> (सुप्त) → <b>Propagation</b> (फैलना/नक़ल) → <b>Triggering</b> (जागना) → <b>Execution</b> (नुक़सान)।</div>
<div class="tr">⚠️ <b>PYQ (Q15):</b> "Virus life cycle में शामिल <b>नहीं</b> कौन-सा चरण?" → जो इन चारों में से न हो (जैसे "Deletion phase")।<br>
⚠️ <b>PYQ (Q75):</b> "OS की कार्यप्रणाली बदलकर पूरा नियंत्रण लेने वाला" → <b>Rootkit</b>।</div>
</div>

<div class="blk"><h3>💥 Attacks — पहचानो और मिलाओ</h3>
<div class="sqlLab">
  <div id="atkAsk" class="ribAsk">🎯 "चैलेंज दे" दबा — हमला पहचान।</div>
  <div class="nsBar" style="margin-top:7px">
    <input id="atkAns" class="nsIn" placeholder="हमले का नाम..." spellcheck="false">
    <button class="sqlBtn go" onclick="atkCheck()">✓</button>
  </div>
  <div class="sqlBar">
    <button class="sqlBtn" onclick="labNext('atk')">🎯 चैलेंज दे</button>
    <button class="sqlBtn" onclick="labSkip('atk')">🤷 जवाब</button>
    <span id="atkScore" class="ribScore">स्कोर: 0</span>
  </div>
  <div id="atkFb" class="ribFb"></div>
</div>
<div style="overflow-x:auto"><table>
<tr><th>हमला</th><th>क्या करता है</th></tr>
<tr><td><b>Phishing</b></td><td>नक़ली bank/mail बनकर पासवर्ड ठगे</td></tr>
<tr><td><b>Phreaking</b></td><td>फ़ोन तंत्र को धोखा देकर मुफ़्त कॉल (सबसे पुरानी)</td></tr>
<tr><td><b>Hacktivism</b></td><td>राजनीतिक/सामाजिक मक़सद से hacking</td></tr>
<tr><td><b>DoS / DDoS</b></td><td>server को नक़ली traffic से डुबोकर ठप करना (Availability पर वार)</td></tr>
<tr><td><b>MITM</b></td><td>बीच में बैठकर संवाद पढ़ना/बदलना</td></tr>
<tr><td><b>SQL Injection</b></td><td>input में SQL डालकर database तोड़ना</td></tr>
<tr><td><b>Brute Force</b></td><td>हर संभव password आज़माना</td></tr>
</table></div>
<div class="tr">⚠️ <b>PYQ (Q42):</b> सबसे पुरानी फ़ोन-hacking तकनीक → <b>Phreaking</b>। <b>PYQ (Q39):</b> Hacktivism = राजनीतिक hacking। <b>PYQ (Q65):</b> password cracking के रूप → Brute Force, Dictionary attack, Rainbow table।</div>
</div>

<div class="blk"><h3>🧱 बचाव के औज़ार</h3>
<div class="tk">🧠 <b>Firewall</b> = network का दरबान (कौन-सा traffic अंदर/बाहर)। <b>Network-layer firewall = packet filter</b>। <b>Application firewall = proxy</b>।<br>
<b>IDS</b> (Intrusion Detection — सिर्फ़ अलार्म बजाए) बनाम <b>IPS</b> (Intrusion Prevention — रोक भी दे)।<br>
<b>VPN</b> = सार्वजनिक इंटरनेट पर एक निजी, encrypted सुरंग।<br>
<b>Antivirus</b> = malware पकड़े व हटाए।</div>
<div class="tr">⚠️ <b>PYQ (Q61):</b> Network-layer firewall = <b>packet filter</b> की तरह काम करता है।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🔺 <b>CIA</b> = Confidentiality, Integrity, Availability (+Non-repudiation)<br>
🔐 <b>Symmetric</b> = एक key, तेज़ (AES/DES) | <b>Asymmetric</b> = 2 keys (RSA)<br>
✍️ Digital signature = भेजने वाले की <b>private key</b> से sign<br>
#️⃣ Hashing (MD5/SHA) = एकतरफ़ा, सिर्फ़ integrity<br>
🦠 Virus (host चाहिए) | Worm (ख़ुद फैले) | Trojan (छिपा) | Rootkit (गहरा नियंत्रण)<br>
🔄 Virus cycle: <b>Dormant → Propagation → Triggering → Execution</b><br>
📞 <b>Phreaking</b> = पुरानी फ़ोन hacking | <b>Hacktivism</b> = राजनीतिक hacking<br>
💥 DoS = availability पर वार | MITM = बीच में सुनना<br>
🧱 Network firewall = <b>packet filter</b> | App firewall = proxy | IDS अलार्म, IPS रोके<br>
🔢 Base64 = 24 बिट → चार 6-बिट टुकड़े
</div>
</div>
`;

CARDS.p2sec = [
  ['[रिकॉल] Security का CIA triad किन तीन चीज़ों से बनता है?', 'Confidentiality, Integrity, Availability।', 'सी-आई-ए'],
  ['[रिकॉल] Digital signature भेजने वाले की कौन-सी key से बनता है?', 'Private key से (sign)। जाँच public key से होती है।', 'निजी से हस्ताक्षर'],
  ['[रिकॉल] OS की कार्यप्रणाली बदलकर छिपकर पूरा नियंत्रण लेने वाला malware?', 'Rootkit।', 'जड़ में छिपा'],
  ['[रिवर्स रिकॉल] "एक ही key से encrypt और decrypt, तेज़, जैसे AES/DES" — कौन-सा encryption?', 'Symmetric encryption।', 'एक चाबी'],
  ['[रिवर्स रिकॉल] "फ़ोन तंत्र को धोखा देकर मुफ़्त कॉल की सबसे पुरानी तकनीक" — क्या?', 'Phreaking।', 'फ्रीक कॉल'],
  ['[रिक्त स्थान] Asymmetric encryption में ______ और ______ नाम की दो keys होती हैं।', 'Public; Private', 'दो चाबियाँ'],
  ['[रिक्त स्थान] Base64 में 24 बिट को ______ छह-बिट टुकड़ों में बाँटा जाता है।', 'चार (4)', '24÷6=4'],
  ['[कथन आधारित] कथन: Hashing एक प्रकार का encryption है जिसे वापस खोला जा सकता है।', 'ग़लत। Hashing एकतरफ़ा (one-way) है — वापस नहीं खुलती। यह सिर्फ़ integrity जाँचने के लिए है।', 'हैश वापस नहीं'],
  ['[कथन आधारित] कथन: Worm को फैलने के लिए host program चाहिए।', 'ग़लत। Worm ख़ुद फैलता है (नेटवर्क से), host नहीं चाहिए। Virus को host चाहिए।', 'वर्म आज़ाद'],
  ['[मैच] मिलाओ: (a) Virus (b) Worm (c) Trojan (d) Ransomware', '(a) host चाहिए, (b) ख़ुद फैले, (c) उपयोगी दिखे पर नुक़सान, (d) data lock करके फिरौती।', 'malware कुनबा'],
  ['[मैच] मिलाओ: (a) Phishing (b) Phreaking (c) Hacktivism (d) DoS', '(a) नक़ली bank से ठगी, (b) पुरानी फ़ोन hacking, (c) राजनीतिक hacking, (d) server ठप करना।', 'हमलों की जोड़ी'],
  ['[मैच] मिलाओ: (a) AES (b) RSA (c) SHA (d) VPN', '(a) symmetric, (b) asymmetric, (c) hashing (one-way), (d) encrypted सुरंग।', 'औज़ार पहचानो'],
  ['[तुलना] Symmetric और Asymmetric encryption में फ़र्क़?', 'Symmetric = एक ही key से encrypt/decrypt, तेज़, पर key साझा करना जोखिम (AES/DES)। Asymmetric = public+private key, धीमा, पर key समस्या हल (RSA)।', 'एक बनाम दो चाबी'],
  ['[तुलना] Virus और Worm में फ़र्क़?', 'Virus को फैलने के लिए host program चाहिए और उसे चलाना पड़ता है। Worm ख़ुद, नेटवर्क के ज़रिए, बिना host फैलता है।', 'host चाहिए या नहीं'],
  ['[तुलना] IDS और IPS में फ़र्क़?', 'IDS (Detection) सिर्फ़ घुसपैठ का अलार्म बजाता है। IPS (Prevention) घुसपैठ को रोक भी देता है।', 'अलार्म बनाम रोक'],
  ['[कालक्रम] Virus life cycle के चार चरण क्रम में लिखो।', 'Dormant → Propagation → Triggering → Execution।', 'सोए-फैले-जागे-मारे'],
  ['[Code Output] Caesar cipher: "ABC" को shift 3 से encrypt करो।', 'DEF। हर अक्षर 3 जगह आगे: A→D, B→E, C→F।', 'तीन आगे'],
  ['[Code Output] Base64: 24 बिट के मूल data में कितने bytes और encoding के बाद कितने 6-बिट टुकड़े?', '3 bytes (24 बिट) → चार 6-बिट टुकड़े। हर टुकड़ा एक अक्षर बनता है।', '3 बाइट, 4 अक्षर'],
  ['[True/False] Network-layer firewall एक packet filter की तरह काम करता है।', 'True। यह हर packet के IP/port देखकर आने-जाने का फ़ैसला करता है।', 'पैकेट छाने'],
  ['[True/False] DoS attack गोपनीयता (Confidentiality) पर वार करता है।', 'False। DoS availability पर वार करता है — server को ठप करके सेवा रोक देता है।', 'DoS = उपलब्धता'],
  ['[ट्रैप कार्ड] Digital signature गोपनीयता (confidentiality) देता है?', 'नहीं! Digital signature authentication और non-repudiation देता है (असली भेजने वाला कौन)। गोपनीयता encryption देता है।', 'हस्ताक्षर ≠ गोपनीयता'],
  ['[ट्रैप कार्ड] Trojan ख़ुद फैलता है?', 'नहीं! Trojan ख़ुद नहीं फैलता — user को धोखे से इंस्टॉल कराना पड़ता है। ख़ुद फैलने वाला Worm है।', 'ट्रोजन को बुलाना पड़े'],
  ['[ट्रैप कार्ड] MD5 और SHA encryption algorithm हैं?', 'नहीं! ये hashing (एकतरफ़ा) हैं — वापस नहीं खुलतीं। Encryption (AES, RSA) वापस खुलता है।', 'हैश बनाम encryption']
];

QB.p2sec = [
  { q: 'Hacktivism क्या है?', o: ['एक प्रकार का antivirus', 'राजनीतिक या सामाजिक उद्देश्य से की गई hacking', 'फ़ोन hacking की तकनीक', 'एक encryption algorithm'], a: 1, e: 'Hacktivism = Hacking + Activism — किसी राजनीतिक या सामाजिक संदेश/विरोध के लिए की गई hacking (जैसे किसी सरकारी साइट को विरोध में बदल देना)।', trap: 'Phreaking (फ़ोन hacking) से उलझ जाना।', d: 2, tag: 'Attacks', pyq: 'Paper-II Q39 — हूबहू' },
  { q: 'हैकरों द्वारा मुफ़्त कॉल करने के लिए प्रयोग की जाने वाली सबसे पुरानी फ़ोन hacking तकनीक कौन-सी है?', o: ['Phishing', 'Phreaking', 'Spoofing', 'Sniffing'], a: 1, e: 'Phreaking टेलिफ़ोन तंत्र (जैसे विशेष tone) को धोखा देकर मुफ़्त कॉल करने की सबसे पुरानी तकनीक है — इसी से "hacker" संस्कृति शुरू हुई मानी जाती है।', trap: 'Phishing चुन लेना — वो password ठगने की तकनीक है, फ़ोन hacking नहीं।', d: 2, tag: 'Attacks', pyq: 'Paper-II Q42 — हूबहू' },
  { q: 'निम्न में से कौन-सा malware OS की सामान्य कार्यप्रणाली बदलकर छिपे हुए पूर्ण नियंत्रण ले लेता है?', o: ['Adware', 'Rootkit', 'Spyware', 'Keylogger'], a: 1, e: 'Rootkit OS की गहराई (root/admin स्तर) में छिपकर बैठ जाता है, सामान्य कार्यप्रणाली बदल देता है, और antivirus से भी छिपा रहता है — इसलिए पकड़ना बहुत कठिन।', trap: 'Spyware चुन लेना — वो जानकारी चुराता है पर पूर्ण नियंत्रण या छिपाव नहीं करता।', d: 3, tag: 'Malware', pyq: 'Paper-II Q75 — हूबहू' },
  { q: 'Network layer firewall मुख्यतः किस रूप में कार्य करता है?', o: ['Packet filter', 'Application proxy', 'Antivirus scanner', 'Password manager'], a: 0, e: 'Network layer firewall packet filter है — यह हर packet के source/destination IP और port के आधार पर उसे अनुमति देता या रोकता है।', trap: 'Application proxy चुन लेना — वो application-layer firewall है।', d: 2, tag: 'Firewall', pyq: 'Paper-II Q61 — हूबहू' },
  { q: 'Encoding scheme में जब 24 बिट को चार 6-बिट chunks में बाँटा जाता है, तो यह कौन-सी scheme है?', o: ['ASCII', 'Base64', 'Unicode', 'EBCDIC'], a: 1, e: 'Base64 में 24 बिट (3 bytes) को चार 6-बिट टुकड़ों में तोड़ा जाता है और हर टुकड़े को एक printable अक्षर में बदला जाता है (2⁶ = 64 अक्षर)।', trap: 'ASCII चुन लेना — ASCII 7/8 बिट प्रति अक्षर है, यह chunk-आधारित नहीं।', d: 3, tag: 'Encoding', pyq: 'Paper-II Q64 — हूबहू' },
  { q: 'Digital signature किस key पर आधारित होता है?', o: ['Receiver की public key', 'Sender की private key', 'Sender की public key', 'एक साझा secret key'], a: 1, e: 'Digital signature बनाने के लिए sender अपनी private key से संदेश को sign करता है; कोई भी उसकी public key से जाँच सकता है। इससे authentication और non-repudiation मिलते हैं।', trap: 'Public key चुन लेना — गोपनीयता (encryption) में receiver की public key लगती है, पर signature में sender की private।', d: 3, tag: 'Cryptography', pyq: 'KVS Q आधारित' },
  { q: 'Virus life cycle में निम्न में से कौन-सा चरण सामान्यतः शामिल नहीं होता?', o: ['Dormant phase', 'Propagation phase', 'Triggering phase', 'Compilation phase'], a: 3, e: 'Virus life cycle के चार चरण हैं — Dormant, Propagation, Triggering और Execution। "Compilation phase" इसका हिस्सा नहीं है।', trap: 'Dormant जैसे कम सुने चरण को ग़लत मान लेना — वो असली है।', d: 2, tag: 'Malware', pyq: 'Paper-II Q15 — हूबहू' },
  { q: 'Symmetric और Asymmetric encryption में मुख्य अंतर क्या है?', o: ['Symmetric में दो keys, Asymmetric में एक', 'Symmetric में एक ही key, Asymmetric में public व private दो keys', 'दोनों में एक ही key', 'Asymmetric हमेशा तेज़ होता है'], a: 1, e: 'Symmetric encryption एक ही secret key से encrypt व decrypt करता है (तेज़, जैसे AES)। Asymmetric में दो keys होती हैं — public व private (धीमा, जैसे RSA), पर key वितरण की समस्या हल हो जाती है।', trap: 'keys की संख्या उलट देना।', d: 2, tag: 'Cryptography', pyq: 'बार-बार' },
  { q: 'Password cracking की तकनीकों में निम्न में से कौन-सी शामिल है?', o: ['Brute force, Dictionary attack, Rainbow table', 'केवल Phishing', 'Paging और Segmentation', 'FCFS और SJF'], a: 0, e: 'Password cracking के मुख्य रूप — Brute force (हर संभव combination), Dictionary attack (आम शब्दों की सूची), और Rainbow table (पहले से बनी hash तालिका)।', trap: 'Paging/Scheduling जैसे OS शब्द देखकर भ्रमित होना — वे यहाँ असंगत हैं।', d: 2, tag: 'Attacks', pyq: 'Paper-II Q65 — हूबहू' },
  { q: 'DoS (Denial of Service) attack CIA triad के किस हिस्से पर वार करता है?', o: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'], a: 2, e: 'DoS attack server को नक़ली traffic से भर देता है ताकि असली users को सेवा न मिले — यह सीधे Availability (उपलब्धता) पर वार है।', trap: 'Confidentiality चुन लेना — DoS data चुराता नहीं, सेवा रोकता है।', d: 2, tag: 'Attacks', pyq: 'बार-बार' },
  { q: 'निम्न में से कौन hashing algorithm है (encryption नहीं)?', o: ['AES', 'RSA', 'SHA-256', 'DES'], a: 2, e: 'SHA-256 एक hashing algorithm है — एकतरफ़ा, वापस नहीं खुलती, सिर्फ़ integrity जाँचने के लिए। AES व DES symmetric encryption हैं, RSA asymmetric।', trap: 'AES या DES चुन लेना — वे encryption हैं (वापस खुलते हैं)।', d: 3, tag: 'Cryptography', pyq: 'बार-बार' },
  { q: 'भरोसेमंद/उपयोगी दिखने वाला पर अंदर से नुक़सानदेह program जो ख़ुद नहीं फैलता, क्या कहलाता है?', o: ['Worm', 'Trojan Horse', 'Rootkit', 'Boot sector virus'], a: 1, e: 'Trojan Horse उपयोगी software का भेस धरता है — user ख़ुद इंस्टॉल करता है, फिर वह अंदर नुक़सान करता है। यह ख़ुद फैलता नहीं (Worm की तरह)।', trap: 'Worm चुन लेना — Worm ख़ुद फैलता है, Trojan नहीं।', d: 2, tag: 'Malware', pyq: 'बार-बार' },
  { q: 'दो पक्षों के बीच के संवाद में चुपके से बैठकर उसे पढ़ने/बदलने वाला attack क्या कहलाता है?', o: ['DoS', 'Man-in-the-Middle (MITM)', 'SQL Injection', 'Phishing'], a: 1, e: 'Man-in-the-Middle attack में हमलावर दो पक्षों के बीच घुसकर उनका संवाद चुपचाप पढ़ता या बदल देता है, जबकि दोनों को लगता है कि वे सीधे बात कर रहे हैं।', trap: 'Phishing चुन लेना — वो नक़ली पहचान से ठगी है, बीच में बैठना नहीं।', d: 2, tag: 'Attacks', pyq: 'बार-बार' },
  { q: 'IDS और IPS में मुख्य अंतर क्या है?', o: ['IDS हमले को रोकता है, IPS सिर्फ़ पता लगाता है', 'IDS सिर्फ़ पता लगाकर अलार्म देता है, IPS रोक भी देता है', 'दोनों एक ही हैं', 'IPS केवल virus पकड़ता है'], a: 1, e: 'IDS (Intrusion Detection System) घुसपैठ का पता लगाकर सिर्फ़ चेतावनी देता है। IPS (Intrusion Prevention System) पता लगाकर उसे रोक भी देता है।', trap: 'दोनों की भूमिकाएँ उलट देना।', d: 3, tag: 'Security Tools', pyq: 'गहरा' },
  { q: 'VPN का मुख्य उद्देश्य क्या है?', o: ['इंटरनेट की गति बढ़ाना', 'सार्वजनिक नेटवर्क पर एक सुरक्षित (encrypted) निजी सुरंग बनाना', 'virus हटाना', 'RAM बढ़ाना'], a: 1, e: 'VPN (Virtual Private Network) सार्वजनिक इंटरनेट पर data को encrypt करके एक निजी "सुरंग" बनाता है, जिससे बीच में कोई पढ़ न सके।', trap: '"गति बढ़ाना" चुन लेना — VPN अक्सर थोड़ा धीमा करता है, तेज़ नहीं।', d: 2, tag: 'Security Tools', pyq: 'बार-बार' },
  { q: 'CIA triad में "I" किसका प्रतीक है?', o: ['Internet', 'Integrity', 'Identity', 'Information'], a: 1, e: 'CIA = Confidentiality, Integrity, Availability। "I" = Integrity यानी data बिना अनुमति बदला न जाए, सही-सलामत रहे।', trap: 'Information/Identity चुन लेना।', d: 1, tag: 'Fundamentals', pyq: 'आधारभूत' },
  { q: 'ROT13 cipher असल में किसका विशेष रूप है?', o: ['Transposition cipher', 'Caesar (shift) cipher with shift 13', 'RSA', 'Hashing'], a: 1, e: 'ROT13 = Caesar cipher जिसमें shift 13 है। चूँकि 13+13=26, इसे दो बार लगाने पर मूल text वापस आ जाता है।', trap: 'Transposition चुन लेना — ROT13 substitution है, अक्षरों की जगह नहीं बदलता, उन्हें खिसकाता है।', d: 2, tag: 'Cryptography', pyq: 'सामान्य' },
  { q: 'Worm और Virus में मुख्य अंतर क्या है?', o: ['Worm को host program चाहिए, Virus को नहीं', 'Virus को host program चाहिए, Worm ख़ुद फैलता है', 'दोनों एक जैसे हैं', 'Worm हमेशा हानिरहित होता है'], a: 1, e: 'Virus किसी host program से चिपकता है और उसे चलाने पर सक्रिय होता है। Worm स्वतंत्र है — नेटवर्क के ज़रिए ख़ुद अपनी नक़ल बनाकर फैलता है, उसे host नहीं चाहिए।', trap: 'भूमिकाएँ उलट देना।', d: 2, tag: 'Malware', pyq: 'बार-बार' },
  { q: 'Application layer firewall को और किस नाम से जाना जाता है?', o: ['Packet filter', 'Proxy (proxy server)', 'Repeater', 'Switch'], a: 1, e: 'Application layer firewall proxy की तरह काम करता है — यह पूरे application स्तर के traffic (जैसे HTTP request) को समझकर filter करता है। Packet filter network layer पर होता है।', trap: 'Packet filter चुन लेना — वो network-layer firewall है।', d: 3, tag: 'Firewall', pyq: 'गहरा' },
  { q: 'निम्न में से कौन-सा CIA triad का हिस्सा नहीं है?', o: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'], a: 3, e: 'CIA triad = Confidentiality, Integrity, Availability। Authentication एक अलग (यद्यपि संबंधित) सुरक्षा सिद्धांत है, triad का सीधा हिस्सा नहीं।', trap: 'Authentication को CIA में गिन लेना — वह अक्सर साथ पढ़ाया जाता है पर triad से अलग है।', d: 2, tag: 'Fundamentals', pyq: 'बार-बार' }
];

UNIT_INIT.p2sec = function () { caesarRun(); if (document.getElementById('b64Out')) b64Show(); };
