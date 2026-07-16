/*! MODULE: data/paper2/u-security.js — Paper-II Unit: Network Security (PYQ ≈ 8/100) */

CH.push({ id: 'p2sec', ic: '🛡️', t: 'Network Security', s: 'CIA • Encryption • Attacks • Malware', xp: 120, p: 2 });

LESSON.p2sec = `
<div class="blk"><h3>🛡️ Network Security — परिचय</h3>
<p><b>सरल भाषा में:</b> जिस दिन कंप्यूटर नेटवर्क से जुड़ा, उसी दिन से उसे तीन ख़तरे घेरने लगे — कोई उसका data <b>चुरा</b> ले (जासूसी), कोई उसे <b>बदल</b> दे (धोखाधड़ी), या कोई उसे <b>बंद</b> कर दे (रुकावट)। Security का पूरा विज्ञान इन्हीं तीन ख़तरों से बचने के तरीक़े खोजना है — और यह तीनों मिलकर <b>CIA triad</b> बनाते हैं, जो हर सुरक्षा-सिद्धांत की जड़ है।</p>
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
<div class="tk">🧠 <b>CIA triad</b> — <b>C</b>onfidentiality (गोपनीयता), <b>I</b>ntegrity (अखंडता), <b>A</b>vailability (उपलब्धता)। हर हमला, चाहे कितना भी नया-अनोखा दिखे, अंत में इन्हीं तीन में से किसी एक (या ज़्यादा) पर वार करता है — इसलिए किसी भी नए हमले को भी इस triad से जोड़कर समझा जा सकता है। एक चौथा गुण अक्सर जोड़ा जाता है: <b>Non-repudiation</b> — भेजने वाला बाद में मुकर न सके कि "मैंने भेजा ही नहीं था"।</div>
<div class="tr">⚠️ <b>याद रखने का तरीक़ा:</b> बैंक लॉकर सोच — <b>Confidentiality</b> = सिर्फ़ तुझे चाबी मिले; <b>Integrity</b> = अंदर रखा सामान कोई बदल न सके; <b>Availability</b> = जब चाहे बैंक खुला मिले, लॉकर तक पहुँच सके।</div>
</div>

<div class="blk"><h3>🔐 Encryption — गोपनीयता की मशीनरी</h3>
<p><b>Encryption क्यों बना?</b> जब data इंटरनेट जैसे खुले, असुरक्षित रास्ते से गुज़रता है, तो बीच में कोई भी उसे पढ़ सकता है — जैसे पोस्टकार्ड पर लिखी बात हर डाकिया पढ़ सकता है। Encryption इस समस्या का हल है: असली संदेश (<b>Plaintext</b>) को एक गणितीय नियम (Algorithm) और एक गुप्त <b>Key</b> से उलझाकर बेमानी-सा दिखने वाला संदेश (<b>Ciphertext</b>) बना दिया जाता है। बिना सही Key के, Ciphertext सिर्फ़ बकवास अक्षरों का ढेर लगता है। सही Key वाला ही उसे वापस Plaintext में बदल (Decrypt) सकता है।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Symmetric Encryption</th><th>Asymmetric Encryption</th></tr>
<tr><td>Key</td><td><b>एक ही</b> गुप्त key — भेजने और खोलने दोनों के लिए</td><td><b>दो अलग</b> keys — Public (सबके लिए) + Private (सिर्फ़ मालिक के लिए)</td></tr>
<tr><td>रफ़्तार</td><td>तेज़ (कम गणना)</td><td>धीमा (भारी गणना)</td></tr>
<tr><td>असली मिसाल</td><td>DES, AES, 3DES</td><td>RSA, ECC, Diffie-Hellman</td></tr>
<tr><td>सबसे बड़ी दिक़्क़त</td><td>वही एक key दोनों तक <b>सुरक्षित पहुँचाना कैसे?</b> (Key Distribution Problem)</td><td>धीमी है, पर key बाँटने की समस्या ख़त्म — Public key तो खुले-आम बाँटी जा सकती है</td></tr>
</table></div>
<div class="tk">🧠 <b>असली मिसाल — Symmetric:</b> एक ताला जिसकी एक ही चाबी है — वही चाबी बनाने वाले के पास और खोलने वाले के पास होनी चाहिए। समस्या: वह चाबी दूसरे तक <b>सुरक्षित रूप से</b> कैसे पहुँचे, अगर रास्ता ही असुरक्षित है?<br>
🧠 <b>असली मिसाल — Asymmetric:</b> एक डाकबॉक्स जिसमें <b>कोई भी चिट्ठी डाल सकता है</b> (Public key से बंद), पर <b>सिर्फ़ मालिक की चाबी</b> उसे खोल सकती है (Private key)। इसीलिए Public key बिना डर के बाँटी जा सकती है।</div>
<div class="tk">🧠 <b>दो अलग इस्तेमाल, दो अलग दिशाएँ (सबसे ज़्यादा उलझाया जाने वाला हिस्सा):</b><br>
<b>गोपनीयता चाहिए</b> → भेजने वाला संदेश को <b>receiver की Public key</b> से encrypt करता है; सिर्फ़ receiver अपनी Private key से खोल सकता है।<br>
<b>प्रमाणीकरण (Digital Signature) चाहिए</b> → भेजने वाला अपनी <b>ख़ुद की Private key</b> से sign करता है; कोई भी उसकी Public key से जाँच सकता है कि यह सच में उसी ने भेजा है।</div>
<div class="tr">⚠️ <b>PYQ ट्रैप:</b> "Digital signature किस key पर आधारित है?" → भेजने वाले की <b>Private key</b> (sign करने के लिए)। "गोपनीयता" और "signature" के लिए इस्तेमाल होने वाली keys को उलट देना सबसे आम ग़लती है — ऊपर वाला बॉक्स याद रख।</div>
</div>

<div class="blk"><h3>🗝️ Cipher के प्रकार — संदेश को उलझाने के चार तरीक़े</h3>
<p>Encryption के अंदर भी अलग-अलग "तरीक़े" (Cipher) होते हैं — यानी असली संदेश को उलझाने का गणितीय ढंग अलग-अलग हो सकता है।</p>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>कैसे काम करे</th><th>मिसाल</th></tr>
<tr><td><b>Substitution</b></td><td>हर अक्षर को किसी दूसरे अक्षर/चिह्न से बदल दो</td><td>Caesar Cipher, Vigenère Cipher</td></tr>
<tr><td><b>Transposition</b></td><td>अक्षर वही रहें, सिर्फ़ उनका <b>क्रम</b> बदल दो</td><td>Rail Fence Cipher</td></tr>
<tr><td><b>Block Cipher</b></td><td>data को तय आकार के <b>टुकड़ों (blocks)</b> में बाँटकर, हर टुकड़े को encrypt करो</td><td>DES (56-bit key), AES (128/192/256-bit), 3DES</td></tr>
<tr><td><b>Stream Cipher</b></td><td>data को <b>bit-दर-bit</b>, लगातार धारा की तरह encrypt करो</td><td>RC4</td></tr>
</table></div>
<div class="tk">🧠 <b>Substitution बनाम Transposition:</b> Substitution में "अक्षर बदलते हैं, जगह वही"; Transposition में "अक्षर वही रहते हैं, जगह बदलती है"। दोनों के मेल से आधुनिक ciphers (जैसे AES) बनते हैं — असल में AES दोनों तरीक़ों को कई राउंड तक बार-बार लगाता है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> AES को "block cipher" कहना सही है (यह 128-bit के block में काम करता है), पर उसे "substitution cipher" कह देना अधूरी बात है — वह उससे कहीं ज़्यादा जटिल है। परीक्षा में सिर्फ़ classification वाली table याद रखना काफ़ी है।</div>
</div>

<div class="blk"><h3>#️⃣ Hashing — एकतरफ़ा फ़िंगरप्रिंट</h3>
<p><b>Hashing क्यों?</b> कभी-कभी हमें data को <b>छिपाना नहीं</b>, बस यह जाँचना होता है कि उसमें <b>छेड़छाड़ तो नहीं हुई</b>। इसके लिए Encryption ज़रूरत से ज़्यादा है (जो वापस खुल सके) — बल्कि एक ऐसा फ़ंक्शन चाहिए जो data का एक <b>निश्चित-लंबाई फ़िंगरप्रिंट (hash)</b> बना दे, और वह फ़िंगरप्रिंट <b>कभी वापस असली data में न बदले</b> — यही Hashing है।</p>
<div style="overflow-x:auto"><table>
<tr><th>Algorithm</th><th>Output लंबाई</th><th>स्थिति</th></tr>
<tr><td><b>MD5</b></td><td>128-bit</td><td>पुराना, कमज़ोर — collision (दो अलग input, एक ही hash) मिल चुके हैं</td></tr>
<tr><td><b>SHA-1</b></td><td>160-bit</td><td>अब असुरक्षित माना जाता है</td></tr>
<tr><td><b>SHA-256</b></td><td>256-bit</td><td>आज मानक (बैंकिंग, blockchain)</td></tr>
</table></div>
<div class="tk">🧠 <b>असली इस्तेमाल:</b> Password कभी सीधे database में नहीं रखा जाता — उसका <b>hash</b> रखा जाता है। Login के समय जो password तू टाइप करे, उसका hash निकालकर पुरानी hash से मिलाया जाता है। इसीलिए अगर database चोरी भी हो जाए, हैकर को असली password नहीं मिलता — बस hash मिलता है, जिससे वापस password निकालना (लगभग) नामुमकिन है।<br>
🧠 File download के बाद "SHA-256 checksum verify करें" का मतलब है — file में transit के दौरान कोई bit बदला तो नहीं, यह hash मिलाकर जाँच रहे हैं।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Hashing को Encryption समझ लेना सबसे बड़ी ग़लती है। Encryption <b>दोतरफ़ा</b> है (decrypt हो सकता है); Hashing <b>एकतरफ़ा</b> है (कभी वापस नहीं खुलता)। "MD5/SHA-256 encryption algorithm हैं" — यह कथन हमेशा ग़लत होता है।</div>
</div>

<div class="blk"><h3>📜 PKI और Digital Certificate — किसी अनजान की Public key पर भरोसा कैसे करें</h3>
<p>Asymmetric encryption में एक बड़ी समस्या बचती है — जब कोई कहे "यह मेरी Public key है", तो तुझे कैसे पता चले कि यह सच में <b>उसी की</b> है, किसी नक़ली आदमी की नहीं? इसका हल है <b>PKI</b> (Public Key Infrastructure) — एक भरोसेमंद तीसरा पक्ष, <b>Certificate Authority (CA)</b>, हर व्यक्ति/वेबसाइट की Public key को उसकी पहचान से जोड़कर एक <b>Digital Certificate</b> जारी करता है।</p>
<div class="tk">🧠 <b>असली मिसाल:</b> यह ठीक वैसा ही है जैसे नोटरी (Notary) किसी दस्तावेज़ पर मुहर लगाकर कहता है "मैंने इस व्यक्ति की पहचान जाँच ली है"। जब तू किसी वेबसाइट (जैसे बैंक) पर जाता है और ब्राउज़र में <b>🔒 lock icon</b> दिखता है, तो असल में ब्राउज़र ने उस वेबसाइट का Digital Certificate किसी भरोसेमंद CA से जाँच लिया है।<br>
🧠 <b>SSL/TLS</b> — यही पूरी तकनीक HTTPS के पीछे काम करती है। "HTTP<b>S</b>" का "S" इसी Secure लेयर (SSL/TLS) से आता है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Digital Certificate सिर्फ़ "encryption" नहीं करता — वह <b>पहचान की गारंटी</b> देता है (कि Public key सच में उस व्यक्ति/वेबसाइट की है)। Certificate और Encryption को एक ही चीज़ समझना ग़लत है।</div>
</div>

<div class="blk"><h3>🔏 Security Services और Authentication — CIA से आगे</h3>
<p>CIA triad बुनियाद है, पर व्यवहार में सुरक्षा को पाँच ठोस "सेवाओं" में बाँटा जाता है — हर एक का अपना ज़िम्मेदार औज़ार।</p>
<div style="overflow-x:auto"><table>
<tr><th>सेवा</th><th>मतलब</th><th>कैसे मिलती है</th></tr>
<tr><td><b>Confidentiality</b></td><td>कोई पढ़ न सके</td><td>Encryption</td></tr>
<tr><td><b>Integrity</b></td><td>बदला न जाए</td><td>Hashing / MAC</td></tr>
<tr><td><b>Availability</b></td><td>ज़रूरत पर मिले</td><td>Backup, redundancy, anti-DoS</td></tr>
<tr><td><b>Authentication</b></td><td>तू सच में वही है जो दावा कर रहा है</td><td>Password, biometric, OTP</td></tr>
<tr><td><b>Non-repudiation</b></td><td>बाद में मुकर न सके</td><td>Digital signature</td></tr>
</table></div>
<div class="tk">🧠 <b>Authentication के तीन कारक (Factors):</b><br>
<b>कुछ तू जानता है</b> (Something you know) — password, PIN।<br>
<b>कुछ तेरे पास है</b> (Something you have) — OTP, ATM card, security token।<br>
<b>कुछ तू है</b> (Something you are) — fingerprint, face, retina (biometric)।<br>
जब दो या ज़्यादा कारक एक साथ इस्तेमाल हों (जैसे password + OTP), उसे <b>2FA/MFA</b> (Two/Multi-Factor Authentication) कहते हैं — ATM से पैसे निकालना असल में 2FA का उदाहरण है: card (कुछ तेरे पास है) + PIN (कुछ तू जानता है)।</div>
</div>

<div class="blk"><h3>🎡 Caesar Cipher — encryption ख़ुद देख</h3>
<p style="font-size:.8rem;color:var(--dim)">ऊपर पढ़ा गया "Substitution cipher" यहाँ ख़ुद चलाकर देख — सबसे पुराना cipher, जूलियस सीज़र के ज़माने का।</p>
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
<div class="tk">🧠 Caesar cipher हर अक्षर को तय संख्या से आगे खिसकाता है — यह <b>symmetric</b> है (encrypt और decrypt दोनों के लिए वही shift-संख्या चाहिए)। यह बहुत कमज़ोर है — सिर्फ़ 25 संभव keys हैं, इसलिए कोई भी computer सेकंडों में सारी संभावनाएँ आज़मा कर तोड़ सकता है (Brute Force — नीचे पढ़)। <b>ROT13</b> (shift 13) ख़ास है: दो बार लगाने पर मूल text वापस आ जाता है, क्योंकि 13+13=26 = पूरा alphabet घूम गया।</div>
</div>

<div class="blk"><h3>🦠 Malware — नुक़सान पहुँचाने वाले सॉफ़्टवेयर का पूरा कुनबा</h3>
<p><b>Malware</b> (Malicious + Software) कोई भी ऐसा प्रोग्राम है जो जानबूझकर नुक़सान पहुँचाने के लिए बनाया गया हो। इसकी कई किस्में हैं, और हर किस्म को पहचानने की कुंजी है — <b>यह कैसे फैलता है और क्या छिपाता है</b>।</p>
<div style="overflow-x:auto"><table>
<tr><th>क़िस्म</th><th>कैसे फैले</th><th>पहचान</th></tr>
<tr><td><b>Virus</b></td><td>किसी host program से चिपककर — उस program को चलाने पर सक्रिय हो</td><td>बिना host के अकेला नहीं चल सकता</td></tr>
<tr><td><b>Worm</b></td><td>ख़ुद, नेटवर्क के ज़रिए, बिना किसी host की मदद के</td><td>सबसे तेज़ फैलने वाला (मिसाल: WannaCry)</td></tr>
<tr><td><b>Trojan</b></td><td>उपयोगी सॉफ़्टवेयर का भेस — user ख़ुद इंस्टॉल करता है</td><td>ख़ुद नहीं फैलता, धोखे से अंदर आता है</td></tr>
<tr><td><b>Rootkit</b></td><td>OS की गहराई (admin/root स्तर) में छिपकर बैठ जाता है</td><td>Antivirus से भी छिपा रह सकता है</td></tr>
<tr><td><b>Ransomware</b></td><td>data को encrypt करके ताला लगा देता है</td><td>पैसे (फिरौती) माँगता है, तभी चाबी दे</td></tr>
<tr><td><b>Spyware</b></td><td>चुपके से बैठकर जानकारी बाहर भेजता रहे</td><td>user को पता ही नहीं चलता</td></tr>
<tr><td><b>Keylogger</b></td><td>Spyware का ही एक ख़ास रूप — तेरा <b>हर keyboard बटन</b> रिकॉर्ड करे</td><td>इसी से password/ATM PIN चोरी होते हैं</td></tr>
<tr><td><b>Adware</b></td><td>ज़बरदस्ती <b>विज्ञापन</b> (pop-up) दिखाता रहे</td><td>सबसे <b>कम ख़तरनाक</b> — मक़सद नुक़सान नहीं, <b>पैसा कमाना</b> (विज्ञापन से); पर चिढ़ाता है व मशीन धीमी करता है</td></tr>
</table></div>
<div class="tk">🧠 <b>Virus Life Cycle के 4 चरण:</b> <b>Dormant</b> (सुप्त — बस बैठा है, कुछ नहीं करता) → <b>Propagation</b> (फैलना — अपनी नक़ल बनाना) → <b>Triggering</b> (जागना — कोई शर्त पूरी हुई, जैसे तारीख़) → <b>Execution</b> (असली नुक़सान)। ठीक वैसे ही जैसे कोई बीज ज़मीन में सोया रहता है, फिर बढ़ता है, फिर मौसम आने पर फूल देता है।</div>
<div class="tr">⚠️ <b>PYQ (Q15):</b> "Virus life cycle में शामिल <b>नहीं</b> कौन-सा चरण?" → इन चारों के बाहर की कोई भी बनावटी चीज़ (जैसे "Deletion phase" — असली life cycle में यह नहीं है)।<br>
⚠️ <b>PYQ (Q75):</b> "OS की कार्यप्रणाली बदलकर छिपकर पूरा नियंत्रण लेने वाला" → <b>Rootkit</b> (Spyware सिर्फ़ जानकारी भेजता है, नियंत्रण नहीं लेता — दोनों को उलझा मत)।</div>
</div>

<div class="blk"><h3>💥 Attacks — इंसान और तंत्र दोनों को निशाना</h3>
<p>हमले (Attacks) दो बड़े परिवारों में बँटते हैं — कुछ <b>तकनीक</b> को तोड़ते हैं (जैसे कोई कोड की कमज़ोरी ढूँढना), कुछ <b>इंसान की भोलेपन/जल्दबाज़ी</b> का फ़ायदा उठाते हैं (Social Engineering)। परीक्षा में ज़्यादातर सवाल "इस नाम का मतलब क्या है" पूछते हैं — इसलिए हर नाम की सटीक परिभाषा याद रखना ज़रूरी है।</p>
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
<tr><th>हमला</th><th>क्या करता है</th><th>किस पर वार (CIA)</th></tr>
<tr><td><b>Phishing</b></td><td>नक़ली bank/mail बनकर पासवर्ड ठगे (Social Engineering)</td><td>Confidentiality</td></tr>
<tr><td><b>Phreaking</b></td><td>फ़ोन तंत्र को धोखा देकर मुफ़्त कॉल (सबसे पुरानी hacking तकनीक)</td><td>Availability/चोरी</td></tr>
<tr><td><b>Hacktivism</b></td><td>राजनीतिक/सामाजिक मक़सद से hacking (पैसे के लिए नहीं, संदेश के लिए)</td><td>अलग-अलग</td></tr>
<tr><td><b>DoS / DDoS</b></td><td>server को नक़ली traffic की बाढ़ से डुबोकर ठप करना</td><td>Availability</td></tr>
<tr><td><b>MITM</b></td><td>दो पक्षों के बीच चुपके से बैठकर संवाद पढ़ना/बदलना</td><td>Confidentiality + Integrity</td></tr>
<tr><td><b>SQL Injection</b></td><td>वेबसाइट के input box में SQL कोड डालकर database को धोखा देना</td><td>Confidentiality/Integrity</td></tr>
<tr><td><b>Brute Force</b></td><td>हर संभव password एक-एक करके आज़माना</td><td>Confidentiality</td></tr>
</table></div>
<div class="tk">🧠 <b>DoS बनाम DDoS:</b> DoS (Denial of Service) एक ही मशीन से हमला करता है; DDoS (Distributed) एक साथ हज़ारों "ज़ॉम्बी" मशीनों (botnet) से हमला करता है — इसलिए रोकना कहीं ज़्यादा कठिन है।<br>
🧠 <b>SQL Injection कैसे काम करता है (सोच):</b> मान ले login form में username बॉक्स में कोई टाइप करे <code>' OR '1'='1</code> — अगर वेबसाइट input को ठीक से जाँचे बिना सीधे SQL query में जोड़ दे, तो यह हमेशा-सच शर्त बन जाती है और बिना पासवर्ड जाने लॉगिन हो जाता है। हल: input को कभी सीधे query में मत जोड़ो (Parameterized Query/Prepared Statements)।</div>
<div class="tr">⚠️ <b>PYQ (Q42):</b> सबसे पुरानी फ़ोन-hacking तकनीक → <b>Phreaking</b>। <b>PYQ (Q39):</b> Hacktivism = राजनीतिक hacking। <b>PYQ (Q65):</b> password cracking के रूप → Brute Force, Dictionary attack, Rainbow table (तीनों अलग तरीक़े, एक ही मक़सद)।</div>
</div>

<div class="blk"><h3>🧱 Firewall — नेटवर्क का दरबान</h3>
<p><b>Firewall क्यों चाहिए?</b> बिना जाँच के हर आने-जाने वाला traffic अंदर आ सके, यह ख़तरनाक है। Firewall एक ऐसी दीवार है जो हर packet को एक नियम-सूची (rule set) के आधार पर जाँचती है — अंदर आने दे या रोक दे।</p>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>कैसे जाँचे</th><th>किस परत पर</th></tr>
<tr><td><b>Network-layer Firewall</b></td><td><b>Packet filter</b> — हर packet का source/destination IP और port देखे</td><td>Network layer (3)</td></tr>
<tr><td><b>Application-layer Firewall</b></td><td><b>Proxy</b> — पूरे application-स्तर के request (जैसे HTTP) को समझकर जाँचे</td><td>Application layer (7)</td></tr>
</table></div>
<div class="tk">🧠 <b>असली मिसाल:</b> Network-layer firewall एक दरबान जैसा है जो सिर्फ़ ID कार्ड (IP/port) देखकर अंदर आने देता है — तेज़ पर सतही जाँच। Application-layer firewall एक जासूस जैसा है जो हर बैग खोलकर पूरा सामान (असली request का content) जाँचता है — धीमा पर गहरा।</div>
<div class="tr">⚠️ <b>PYQ (Q61):</b> Network-layer firewall = <b>packet filter</b> की तरह काम करता है — यह हूबहू आता है।</div>
</div>

<div class="blk"><h3>🚨 IDS बनाम IPS — देखना बनाम रोकना</h3>
<p>Firewall नियम-आधारित है, पर कुछ हमले नियमों में फ़िट नहीं होते (जैसे कोई अंदर का ही व्यक्ति ग़लत काम करे)। इसके लिए चाहिए ऐसा तंत्र जो <b>व्यवहार पर नज़र रखे</b>।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>IDS (Intrusion Detection System)</th><th>IPS (Intrusion Prevention System)</th></tr>
<tr><td>काम</td><td>घुसपैठ का पता लगाकर सिर्फ़ <b>अलार्म</b> बजाए</td><td>घुसपैठ का पता लगाकर उसे <b>तुरंत रोक</b> भी दे</td></tr>
<tr><td>मिसाल</td><td>चोर घुसा, घर का alarm बजा (पर चोर को रोका नहीं)</td><td>चोर घुसा, दरवाज़ा अपने आप बंद होकर उसे फँसा दिया</td></tr>
</table></div>
<div class="tk">🧠 याद रखने की तरकीब: <b>D</b>etection = सिर्फ़ <b>D</b>ekh (देखे); <b>P</b>revention = <b>P</b>akde/Roke (रोके)।</div>
</div>

<div class="blk"><h3>🕳️ VPN — सार्वजनिक रास्ते पर निजी सुरंग</h3>
<p><b>VPN (Virtual Private Network) क्यों?</b> जब तू कैफ़े के खुले WiFi से बैंकिंग करता है, तो वह रास्ता असुरक्षित है — कोई बीच में सुन सकता है (MITM)। VPN इस समस्या को हल करता है: तेरे डिवाइस और VPN सर्वर के बीच एक <b>encrypted "सुरंग" (tunnel)</b> बनती है, जिसके अंदर से गुज़रता हर data बाहर से पढ़ा नहीं जा सकता, चाहे नेटवर्क कितना भी खुला/असुरक्षित हो।</p>
<div class="tk">🧠 <b>असली मिसाल:</b> सार्वजनिक सड़क (इंटरनेट) पर एक बंद, बुलेटप्रूफ़ गाड़ी (encrypted tunnel) से यात्रा करना — सड़क खुली रहे, पर गाड़ी के अंदर कोई झाँक नहीं सकता।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> VPN इंटरनेट की <b>रफ़्तार नहीं बढ़ाता</b> (encryption की वजह से अक्सर थोड़ा धीमा भी कर देता है) — इसका काम गति नहीं, <b>गोपनीयता</b> है।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🔺 <b>CIA</b> = Confidentiality, Integrity, Availability (+Non-repudiation)<br>
🔐 <b>Symmetric</b> = एक key, तेज़ (AES/DES) | <b>Asymmetric</b> = 2 keys (RSA)<br>
✍️ गोपनीयता = receiver की Public key से encrypt | Signature = अपनी Private key से sign<br>
🗝️ Substitution(अक्षर बदलो) | Transposition(क्रम बदलो) | Block/Stream cipher<br>
#️⃣ Hashing (MD5/SHA) = एकतरफ़ा, सिर्फ़ integrity — encryption नहीं<br>
📜 PKI/CA = किसी की Public key की पहचान जाँचे | SSL/TLS = HTTPS का आधार<br>
🔑 Authentication 3 factors: जानता है, पास है, है (2FA/MFA)<br>
🦠 Virus (host चाहिए) | Worm (ख़ुद फैले) | Trojan (छिपा, ख़ुद न फैले) | Rootkit (गहरा नियंत्रण)<br>
🔄 Virus cycle: <b>Dormant → Propagation → Triggering → Execution</b><br>
📞 <b>Phreaking</b> = पुरानी फ़ोन hacking | <b>Hacktivism</b> = राजनीतिक hacking<br>
💥 DoS/DDoS = availability पर वार | MITM = बीच में सुनना | SQLi = query को धोखा<br>
🧱 Network firewall = <b>packet filter</b> | App firewall = proxy<br>
🚨 IDS = सिर्फ़ देखे/अलार्म | IPS = रोके भी<br>
🕳️ VPN = encrypted tunnel, गोपनीयता के लिए (रफ़्तार के लिए नहीं)
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
