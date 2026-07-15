/*! MODULE: data/paper2/u-iot.js — Paper-II Unit: Internet, IoT, AI & Emerging Tech (PYQ ≈ 4/100) */

CH.push({ id: 'p2iot', ic: '🌍', t: 'Internet & IoT', s: 'Web • IoT • AI/ML • E-commerce • Cloud', xp: 100, p: 2 });

LESSON.p2iot = `
<div class="blk"><h3>🌍 Internet, IoT & Emerging Technology</h3>
<p><b>सरल भाषा में:</b> यह यूनिट "नई दुनिया" की है — Internet कैसे चलता है, चीज़ें (things) कैसे इंटरनेट से जुड़ीं (IoT), मशीनें कैसे "सोचने" लगीं (AI), और ऑनलाइन ख़रीद-बिक्री (E-commerce)।</p>
</div>

<div class="blk"><h3>🕸️ Web & Internet की बुनियाद</h3>
<div style="overflow-x:auto"><table>
<tr><th>शब्द</th><th>मतलब</th></tr>
<tr><td><b>WWW</b></td><td>वेब पन्नों का जाल (Tim Berners-Lee, 1989)</td></tr>
<tr><td><b>HTTP/HTTPS</b></td><td>वेब पन्ने भेजने का protocol (S = सुरक्षित)</td></tr>
<tr><td><b>URL</b></td><td>पन्ने का पता (protocol://domain/path)</td></tr>
<tr><td><b>HTML</b></td><td>पन्ने का ढाँचा (markup language)</td></tr>
<tr><td><b>Browser</b></td><td>पन्ने दिखाने वाला (Chrome, Firefox)</td></tr>
<tr><td><b>Search Engine</b></td><td>ढूँढने वाला (Google) — browser नहीं!</td></tr>
</table></div>
<div class="tk">🧠 <b>HTML बनाम HTTP (पक्का भ्रम):</b> HT<b>ML</b> = <b>M</b>arkup — पन्ने का <b>ढाँचा</b>। HT<b>TP</b> = <b>T</b>ransfer <b>P</b>rotocol — पन्ने को <b>भेजने</b> का तरीक़ा।</div>
<div class="tr">⚠️ <b>PYQ (Q18):</b> वेब पन्ने भेजने का protocol = <b>HTTP</b>। <b>PYQ (Q19/Q23):</b> XML = data को <b>describe/store</b> करने के लिए (HTML दिखाने के लिए, XML बताने के लिए); XML के tags <b>user-defined</b> होते हैं।</div>
</div>

<div class="blk"><h3>🔖 HTML बनाम XML</h3>
<div style="overflow-x:auto"><table>
<tr><th>HTML</th><th>XML</th></tr>
<tr><td>data <b>दिखाने</b> के लिए</td><td>data <b>बताने/ले जाने</b> के लिए</td></tr>
<tr><td>tags <b>पहले से तय</b> (&lt;p&gt;, &lt;h1&gt;)</td><td>tags <b>user-defined</b></td></tr>
<tr><td>case-insensitive, ढीला</td><td>case-sensitive, सख़्त (हर tag बंद हो)</td></tr>
<tr><td>presentation</td><td>data transport</td></tr>
</table></div>
<div class="tk">🧠 <b>मंत्र:</b> "HTML <b>दिखाता</b> है, XML <b>बताता</b> है।" XML में हर opening tag का closing tag ज़रूरी — वरना document "not well-formed"।</div>
</div>

<div class="blk"><h3>🎨 Web Development — HTML, CSS, JS</h3>
<div style="overflow-x:auto"><table>
<tr><th>तकनीक</th><th>काम</th><th>मिसाल</th></tr>
<tr><td><b>HTML</b></td><td>ढाँचा (structure)</td><td>&lt;h1&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;</td></tr>
<tr><td><b>CSS</b></td><td>सजावट (style)</td><td>रंग, फ़ॉन्ट, layout</td></tr>
<tr><td><b>JavaScript</b></td><td>व्यवहार (behaviour)</td><td>click, animation, गणना</td></tr>
</table></div>
<div class="tk">🧠 <b>"HTML = ढाँचा, CSS = कपड़े, JS = जान।"</b> HTML tag जोड़े में (&lt;p&gt;...&lt;/p&gt;); कुछ खाली (&lt;br&gt;, &lt;img&gt;)।<br>
🧠 <b>ज़रूरी tags:</b> &lt;a href&gt; (link), &lt;img src&gt; (तस्वीर), &lt;table&gt;, &lt;ul&gt;/&lt;ol&gt; (सूची), &lt;form&gt; (input)।<br>
🧠 <b>Client-side</b> (browser में — HTML/CSS/JS) बनाम <b>Server-side</b> (server पर — PHP, Node, Python)। <b>Static</b> (नहीं बदलता) बनाम <b>Dynamic</b> (हर बार बने) वेबसाइट।</div>
</div>

<div class="blk"><h3>📡 IoT — Internet of Things</h3>
<p><b>सरल भाषा में:</b> रोज़मर्रा की चीज़ों (fridge, watch, car, bulb) में <b>sensor + internet</b> डाल देना, ताकि वे data इकट्ठा करें और आपस में बात करें। जैसे smart watch तेरी धड़कन नापकर फ़ोन को भेजे।</p>
<div class="tk">🧠 <b>IoT के 4 हिस्से:</b> <b>Sensor</b> (data इकट्ठा करे) → <b>Connectivity</b> (भेजे — WiFi/Bluetooth/5G) → <b>Processing</b> (cloud में हिसाब) → <b>Action/UI</b> (नतीजा दिखाए/करे)।<br>
मिसाल: Smart home, wearables, smart city, connected car।</div>
<div class="tk">🧠 <b>ज़रूरी शब्द:</b> <b>RFID</b> (रेडियो से पहचान — बिना छुए), <b>Sensor</b> (भौतिक→डिजिटल), <b>Actuator</b> (डिजिटल→भौतिक क्रिया), <b>Embedded system</b> (किसी बड़े यंत्र में बैठा छोटा कंप्यूटर)।</div>
</div>

<div class="blk"><h3>🤖 AI / Machine Learning</h3>
<div class="viz">
<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg">
 <circle cx="160" cy="55" r="52" fill="#a855f7" opacity=".14" stroke="#a855f7"/>
 <text x="160" y="18" text-anchor="middle" fill="#a855f7" font-size="11" font-weight="800">AI</text>
 <circle cx="160" cy="62" r="36" fill="#22d3ee" opacity=".16" stroke="#22d3ee"/>
 <text x="160" y="45" text-anchor="middle" fill="#22d3ee" font-size="10" font-weight="800">ML</text>
 <circle cx="160" cy="72" r="20" fill="#26d07c" opacity=".2" stroke="#26d07c"/>
 <text x="160" y="76" text-anchor="middle" fill="#26d07c" font-size="9" font-weight="800">Deep L.</text>
</svg>
</div>
<div class="tk">🧠 <b>घोंसला (nesting):</b> AI ⊃ ML ⊃ Deep Learning। AI = मशीन में समझदारी। ML = अनुभव/data से ख़ुद सीखना। DL = neural networks से गहरी सीख।<br>
<b>ML के प्रकार:</b> Supervised (labelled data से), Unsupervised (बिना label, pattern ढूँढे), Reinforcement (इनाम-सज़ा से)।</div>
<div class="tr">⚠️ <b>PYQ (Q53):</b> AI में "happy/unhappy state" से निपटने वाला agent = <b>Utility-based agent</b> (जो सिर्फ़ लक्ष्य नहीं, संतुष्टि/उपयोगिता भी देखता है)।<br>
इतिहास: <b>John McCarthy = "Father of AI"</b> (1956, शब्द गढ़ा); <b>Alan Turing = Turing Test</b> (मशीन सोच सकती है या नहीं)।</div>
</div>

<div class="blk"><h3>🛒 E-Commerce & Digital</h3>
<div style="overflow-x:auto"><table>
<tr><th>मॉडल</th><th>मतलब</th><th>मिसाल</th></tr>
<tr><td><b>B2C</b></td><td>Business → Consumer</td><td>Amazon से ख़रीदना</td></tr>
<tr><td><b>B2B</b></td><td>Business → Business</td><td>थोक विक्रेता → दुकान</td></tr>
<tr><td><b>C2C</b></td><td>Consumer → Consumer</td><td>OLX, eBay</td></tr>
<tr><td><b>C2B</b></td><td>Consumer → Business</td><td>freelancer → कंपनी</td></tr>
</table></div>
<div class="tk">🧠 <b>UPI</b> = Unified Payments Interface (NPCI, 2016) — तुरंत बैंक-से-बैंक भुगतान। <b>Digital signature</b> = कानूनी वैधता (IT Act 2000)।<br>
<b>IT Act 2000</b> = भारत में साइबर कानून की नींव (digital signature, cyber crime को मान्यता)।</div>
<div class="tr">⚠️ <b>PYQ (Q1 area):</b> E-commerce, IT Act और UPI से तथ्य-आधारित सवाल आते हैं — कौन-सी कंपनी, कौन-सा CEO, कौन-सा साल।</div>
</div>

<div class="blk"><h3>⛓️ Blockchain + उभरती तकनीक</h3>
<div class="tk">🧠 <b>Blockchain</b> = blocks की ज़ंजीर, हर block पिछले का hash रखे — इसलिए छेड़छाड़ नामुमकिन। <b>Decentralized</b> (कोई केंद्रीय मालिक नहीं), पारदर्शी। उपयोग: Bitcoin/crypto, smart contract।<br>
🧠 <b>Big Data</b> = बहुत बड़ा/तेज़/विविध data (5V: Volume, Velocity, Variety, Veracity, Value)। <b>Data Mining</b> = data से pattern निकालना।<br>
🧠 <b>AR/VR</b> (Augmented/Virtual Reality), <b>Edge computing</b> (data source के पास processing), <b>5G</b> (तेज़ wireless — IoT का आधार)।</div>
</div>

<div class="blk"><h3>☁️ Cloud Computing</h3>
<div class="tk">🧠 <b>तीन सेवा-मॉडल:</b><br>
<b>IaaS</b> (Infrastructure) = किराए पर server/storage (AWS EC2)<br>
<b>PaaS</b> (Platform) = बनाने का मंच (Google App Engine)<br>
<b>SaaS</b> (Software) = तैयार software (Gmail, Google Docs)<br>
<i>"नीचे से ऊपर — ज़मीन (Infra), मंच (Platform), मकान (Software)।"</i></div>
<div class="tk">🧠 <b>Deployment:</b> Public (सबके लिए), Private (एक संगठन), Hybrid (मिश्रित)।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🕸️ वेब protocol = <b>HTTP</b> | HTML दिखाए, HTTP भेजे<br>
🔖 <b>HTML</b> tags तय + दिखाना | <b>XML</b> tags user-defined + data बताना<br>
📡 IoT = चीज़ों में sensor + internet | 4 हिस्से: Sensor→Connect→Process→Act<br>
🏷️ RFID = रेडियो पहचान | Sensor (भौतिक→डिजिटल) | Actuator (डिजिटल→क्रिया)<br>
🤖 <b>AI ⊃ ML ⊃ Deep Learning</b> | McCarthy = Father of AI | Turing Test<br>
🎯 happy/unhappy state agent = <b>Utility-based agent</b><br>
🛒 B2C (Amazon) | B2B (थोक) | C2C (OLX) | C2B (freelancer)<br>
💸 UPI = NPCI 2016 | IT Act 2000 = भारत का साइबर कानून<br>
☁️ Cloud: IaaS (ज़मीन) &lt; PaaS (मंच) &lt; SaaS (तैयार software)
</div>
</div>
`;

CARDS.p2iot = [
  ['[रिकॉल] वेब पन्ने भेजने के लिए सबसे आम protocol कौन-सा है?', 'HTTP (HyperText Transfer Protocol)।', 'पन्ना = HTTP'],
  ['[रिकॉल] "Father of AI" किसे कहा जाता है?', 'John McCarthy (1956 में "Artificial Intelligence" शब्द गढ़ा)।', 'मैकार्थी पिता'],
  ['[रिकॉल] IoT के चार मुख्य हिस्से कौन-से हैं?', 'Sensor → Connectivity → Processing → Action/UI।', 'नाप-भेज-सोच-करो'],
  ['[रिवर्स रिकॉल] "जिसके tags user ख़ुद बनाता है और जो data को describe करता है" — कौन-सी भाषा?', 'XML।', 'user के tags'],
  ['[रिवर्स रिकॉल] "बिना छुए रेडियो तरंगों से किसी वस्तु की पहचान" — कौन-सी तकनीक?', 'RFID (Radio Frequency Identification)।', 'रेडियो पहचान'],
  ['[रिक्त स्थान] AI ⊃ ______ ⊃ ______ (बड़े से छोटे घोंसले के क्रम में)।', 'ML; Deep Learning', 'घोंसला'],
  ['[रिक्त स्थान] Cloud के तीन service models हैं — ______, ______ और ______।', 'IaaS, PaaS, SaaS', 'इंफ्रा-प्लेटफॉर्म-सॉफ्टवेयर'],
  ['[कथन आधारित] कथन: XML data दिखाने (presentation) के लिए है और HTML data ले जाने के लिए।', 'ग़लत। उल्टा है — HTML दिखाने के लिए, XML data बताने/ले जाने के लिए।', 'HटML दिखाए'],
  ['[कथन आधारित] कथन: Google एक web browser है।', 'ग़लत। Google एक search engine है। Browser तो Chrome, Firefox, Edge हैं।', 'गूगल = खोज'],
  ['[मैच] मिलाओ: (a) B2C (b) B2B (c) C2C (d) C2B', '(a) Amazon से ख़रीद, (b) थोक→दुकान, (c) OLX, (d) freelancer→कंपनी।', 'e-commerce मॉडल'],
  ['[मैच] मिलाओ: (a) IaaS (b) PaaS (c) SaaS (d) RFID', '(a) किराए का server, (b) बनाने का मंच, (c) तैयार software (Gmail), (d) रेडियो पहचान।', 'cloud + IoT'],
  ['[मैच] मिलाओ: (a) John McCarthy (b) Alan Turing (c) Tim Berners-Lee', '(a) Father of AI, (b) Turing Test, (c) WWW के जनक।', 'तीन जनक'],
  ['[तुलना] HTML और XML में फ़र्क़?', 'HTML के tags पहले से तय हैं और वह data दिखाता है (presentation)। XML के tags user-defined हैं और वह data बताता/ले जाता है, case-sensitive व सख़्त है।', 'दिखाना बनाम बताना'],
  ['[तुलना] AI, ML और Deep Learning में संबंध?', 'AI सबसे बड़ा (मशीन में समझदारी)। ML उसका उपसमूह (data से ख़ुद सीखना)। Deep Learning ML का उपसमूह (neural networks)। AI ⊃ ML ⊃ DL।', 'घोंसले में घोंसला'],
  ['[तुलना] Sensor और Actuator में फ़र्क़?', 'Sensor भौतिक चीज़ को डिजिटल data में बदलता है (तापमान नापना)। Actuator डिजिटल आदेश को भौतिक क्रिया में बदलता है (मोटर चालू करना)।', 'नापे बनाम करे'],
  ['[कालक्रम] Cloud service models को "कम नियंत्रण से ज़्यादा तैयार" क्रम में लिखो।', 'IaaS → PaaS → SaaS (ज़मीन → मंच → तैयार software)।', 'नीचे से ऊपर'],
  ['[Code Output] XML में <name>Ram लिखा है पर </name> नहीं — यह document कैसा है?', 'Not well-formed (ग़लत)। XML में हर opening tag का closing tag ज़रूरी है।', 'हर tag बंद हो'],
  ['[Code Output] URL "https://www.rssb.gov.in/exam" में protocol कौन-सा है?', 'https (सुरक्षित)। www.rssb.gov.in = domain, /exam = path।', 'शुरू में protocol'],
  ['[True/False] Reinforcement learning इनाम और सज़ा के आधार पर सीखता है।', 'True। Reinforcement learning में agent सही काम पर इनाम, ग़लत पर सज़ा पाकर सीखता है।', 'इनाम-सज़ा'],
  ['[True/False] UPI को NPCI ने लॉन्च किया था।', 'True। UPI (Unified Payments Interface) NPCI द्वारा 2016 में शुरू किया गया।', 'NPCI का UPI'],
  ['[ट्रैप कार्ड] Machine Learning और AI एक ही चीज़ हैं?', 'नहीं! ML, AI का एक उपसमूह है। AI बड़ा दायरा (हर तरह की मशीनी समझदारी); ML उसका एक तरीक़ा (data से सीखना)।', 'ML ⊂ AI'],
  ['[ट्रैप कार्ड] AI में "happy/unhappy state" से निपटने वाला agent कौन-सा — Goal-based?', 'नहीं! Utility-based agent। Goal-based सिर्फ़ लक्ष्य देखता है; Utility-based संतुष्टि/उपयोगिता (कितना अच्छा) भी मापता है।', 'utility = संतुष्टि'],
  ['[ट्रैप कार्ड] Gmail कौन-सा cloud model है — PaaS?', 'नहीं! Gmail SaaS है (तैयार software, सीधे इस्तेमाल)। PaaS तो बनाने का मंच है (जैसे App Engine)।', 'तैयार = SaaS']
];

QB.p2iot = [
  { q: 'वेब पन्ने के transfer के लिए सबसे आम प्रयुक्त protocol कौन-सा है?', o: ['FTP', 'SMTP', 'HTTP', 'SNMP'], a: 2, e: 'HTTP (HyperText Transfer Protocol) वेब browser और server के बीच वेब पन्ने भेजने का मानक protocol है। सुरक्षित संस्करण HTTPS है।', trap: 'FTP चुन लेना — वो फ़ाइल transfer के लिए है, वेब पन्ने के लिए नहीं।', d: 1, tag: 'Web', pyq: 'Paper-II Q18 — हूबहू' },
  { q: 'XML के संबंध में कौन-सा कथन सही है?', o: ['इसके tags पहले से तय (predefined) होते हैं', 'यह मुख्यतः data को describe/transport करने के लिए है और इसके tags user-defined होते हैं', 'यह केवल data दिखाने (presentation) के लिए है', 'यह HTML से पुराना है'], a: 1, e: 'XML (eXtensible Markup Language) data को describe और transport करने के लिए है; इसके tags user ख़ुद परिभाषित करता है। HTML data दिखाने के लिए है और उसके tags पहले से तय हैं।', trap: 'HTML वाले गुण (predefined tags, presentation) XML को दे देना।', d: 2, tag: 'Web', pyq: 'Paper-II Q19/Q23 — हूबहू' },
  { q: 'AI में वह agent जो "happy" और "unhappy" states से निपटता है, कौन-सा कहलाता है?', o: ['Simple reflex agent', 'Goal-based agent', 'Utility-based agent', 'Model-based agent'], a: 2, e: 'Utility-based agent सिर्फ़ लक्ष्य तक पहुँचना नहीं देखता, बल्कि यह भी मापता है कि कौन-सी अवस्था कितनी "अच्छी" (संतुष्टि/utility) है — इसलिए वह happy/unhappy states में अंतर कर पाता है।', trap: 'Goal-based agent चुन लेना — वो सिर्फ़ लक्ष्य पूरा/अधूरा देखता है, संतुष्टि की मात्रा नहीं।', d: 3, tag: 'AI', pyq: 'Paper-II Q53 — हूबहू' },
  { q: 'HTML और XML में मुख्य अंतर क्या है?', o: ['दोनों बिल्कुल एक जैसे हैं', 'HTML data दिखाता है (predefined tags), XML data बताता है (user-defined tags)', 'XML केवल presentation के लिए है', 'HTML case-sensitive है, XML नहीं'], a: 1, e: 'HTML का काम data को दिखाना है और उसके tags पहले से तय हैं। XML का काम data को describe/transport करना है और उसके tags user बनाता है; XML case-sensitive व सख़्त भी है।', trap: 'case-sensitivity उलट देना — असल में XML case-sensitive है, HTML नहीं।', d: 2, tag: 'Web', pyq: 'बार-बार' },
  { q: 'AI, Machine Learning और Deep Learning के बीच सही संबंध क्या है?', o: ['तीनों अलग-अलग स्वतंत्र क्षेत्र हैं', 'AI ⊃ ML ⊃ Deep Learning', 'ML ⊃ AI ⊃ Deep Learning', 'Deep Learning ⊃ AI ⊃ ML'], a: 1, e: 'AI सबसे बड़ा दायरा है (मशीन में किसी भी तरह की समझदारी)। ML उसका उपसमूह है (data/अनुभव से सीखना)। Deep Learning, ML का उपसमूह है (neural networks पर आधारित)।', trap: 'घोंसले का क्रम उलट देना।', d: 2, tag: 'AI', pyq: 'बार-बार' },
  { q: 'IoT (Internet of Things) का मूल विचार क्या है?', o: ['सिर्फ़ कंप्यूटरों को जोड़ना', 'रोज़मर्रा की वस्तुओं में sensor व connectivity डालकर उन्हें internet से जोड़ना', 'नई प्रोग्रामिंग भाषा बनाना', 'सिर्फ़ mobile apps बनाना'], a: 1, e: 'IoT में रोज़मर्रा की चीज़ों (घड़ी, फ्रिज, गाड़ी) में sensor और internet connectivity डाल दी जाती है, ताकि वे data इकट्ठा करके आपस में और cloud से बात कर सकें।', trap: '"सिर्फ़ कंप्यूटर जोड़ना" चुन लेना — IoT का ख़ास ज़ोर non-computer "things" पर है।', d: 1, tag: 'IoT', pyq: 'बार-बार' },
  { q: 'निम्न में से कौन-सा e-commerce मॉडल OLX या eBay जैसी साइटों को दर्शाता है?', o: ['B2C', 'B2B', 'C2C', 'B2G'], a: 2, e: 'C2C (Consumer to Consumer) — जहाँ एक उपभोक्ता सीधे दूसरे उपभोक्ता को बेचता है, जैसे OLX या eBay पर पुरानी चीज़ें।', trap: 'B2C चुन लेना — वो business→consumer (Amazon) है।', d: 2, tag: 'E-commerce', pyq: 'बार-बार' },
  { q: 'Cloud computing में Gmail और Google Docs किस service model के उदाहरण हैं?', o: ['IaaS', 'PaaS', 'SaaS', 'DaaS'], a: 2, e: 'SaaS (Software as a Service) — तैयार software जिसे user सीधे browser से इस्तेमाल करता है, कुछ इंस्टॉल किए बिना। Gmail, Google Docs इसके उदाहरण हैं।', trap: 'PaaS चुन लेना — वो developers के लिए बनाने का मंच है, तैयार app नहीं।', d: 2, tag: 'Cloud', pyq: 'बार-बार' },
  { q: '"Father of Artificial Intelligence" किसे माना जाता है?', o: ['Alan Turing', 'John McCarthy', 'Charles Babbage', 'Tim Berners-Lee'], a: 1, e: 'John McCarthy ने 1956 में "Artificial Intelligence" शब्द गढ़ा और LISP भाषा बनाई — इसलिए उन्हें Father of AI कहते हैं। Alan Turing ने Turing Test दिया।', trap: 'Alan Turing चुन लेना — उनका योगदान Turing Test/computing की नींव है, पर "Father of AI" McCarthy हैं।', d: 2, tag: 'AI', pyq: 'बार-बार' },
  { q: 'RFID तकनीक का मुख्य उपयोग क्या है?', o: ['वेब पन्ने बनाना', 'रेडियो तरंगों से बिना छुए वस्तुओं की पहचान/ट्रैकिंग', 'ईमेल भेजना', 'डेटा encrypt करना'], a: 1, e: 'RFID (Radio Frequency Identification) रेडियो तरंगों का उपयोग करके बिना सीधे संपर्क के tags/वस्तुओं की पहचान करता है — जैसे toll tag, inventory tracking, pet chips।', trap: 'encryption से उलझ जाना — RFID पहचान की तकनीक है।', d: 2, tag: 'IoT', pyq: 'बार-बार' },
  { q: 'XML document के "well-formed" होने के लिए क्या ज़रूरी है?', o: ['हर tag बड़े अक्षर में हो', 'हर opening tag का एक closing tag हो और सही nesting हो', 'उसमें CSS हो', 'वह HTML में बदला जा सके'], a: 1, e: 'Well-formed XML के लिए — हर opening tag का closing tag हो, tags सही ढंग से nested हों, और एक ही root element हो। XML case-sensitive भी है।', trap: '"बड़े अक्षर में" चुन लेना — XML case-sensitive है पर case fix नहीं करता, बस मेल खाना चाहिए।', d: 3, tag: 'Web', pyq: 'गहरा' },
  { q: 'Machine Learning के तीन मुख्य प्रकार कौन-से हैं?', o: ['Supervised, Unsupervised, Reinforcement', 'Compiled, Interpreted, Hybrid', 'Static, Dynamic, Mixed', 'Public, Private, Hybrid'], a: 0, e: 'ML के तीन प्रकार — Supervised (labelled data से सीखना), Unsupervised (बिना label, pattern/cluster ढूँढना), Reinforcement (इनाम-सज़ा से सीखना)।', trap: 'Cloud deployment models (Public/Private/Hybrid) से उलझ जाना।', d: 2, tag: 'AI/ML', pyq: 'बार-बार' },
  { q: 'भारत में साइबर लेन-देन और digital signature को कानूनी मान्यता कौन-सा अधिनियम देता है?', o: ['IT Act 2000', 'RTI Act 2005', 'Copyright Act 1957', 'Companies Act 2013'], a: 0, e: 'Information Technology Act, 2000 भारत में साइबर कानून की नींव है — यह digital signature को कानूनी मान्यता देता है और cyber crimes को परिभाषित करता है।', trap: 'RTI या Copyright Act चुन लेना — वे अलग क्षेत्रों के हैं।', d: 2, tag: 'IT Act', pyq: 'बार-बार' },
  { q: 'Cloud service models में सबसे अधिक "तैयार" (सबसे कम user नियंत्रण वाला) कौन-सा है?', o: ['IaaS', 'PaaS', 'SaaS', 'तीनों बराबर'], a: 2, e: 'SaaS सबसे तैयार है — user सिर्फ़ software इस्तेमाल करता है, नीचे का सब कुछ (server, platform) provider संभालता है। IaaS में सबसे ज़्यादा नियंत्रण (कच्चा infrastructure) मिलता है।', trap: 'IaaS चुन लेना — उसमें तो सबसे ज़्यादा नियंत्रण और सबसे कम "तैयारी" होती है।', d: 3, tag: 'Cloud', pyq: 'गहरा' },
  { q: 'Search engine और web browser में मुख्य अंतर क्या है?', o: ['दोनों एक ही हैं', 'Browser पन्ने दिखाता है (Chrome), Search engine जानकारी ढूँढता है (Google)', 'Search engine पन्ने दिखाता है', 'Browser सिर्फ़ ईमेल के लिए है'], a: 1, e: 'Web browser (Chrome, Firefox) वेब पन्नों को खोलकर दिखाता है। Search engine (Google, Bing) एक सेवा है जो keywords के आधार पर पन्ने ढूँढकर देती है — इसे browser में खोला जाता है।', trap: 'Google को browser मान लेना — यह बहुत आम ग़लती है।', d: 1, tag: 'Web', pyq: 'बार-बार' },
  { q: 'UPI (Unified Payments Interface) किस संस्था ने विकसित किया?', o: ['RBI', 'NPCI', 'SEBI', 'TRAI'], a: 1, e: 'UPI को NPCI (National Payments Corporation of India) ने 2016 में विकसित किया — यह तुरंत बैंक-से-बैंक भुगतान की सुविधा देता है।', trap: 'RBI चुन लेना — RBI नियामक है, पर UPI बनाया NPCI ने।', d: 2, tag: 'Digital Payment', pyq: 'बार-बार' },
  { q: 'IoT के संदर्भ में Actuator का क्या काम है?', o: ['भौतिक राशि को डिजिटल data में बदलना', 'डिजिटल आदेश को भौतिक क्रिया में बदलना', 'data को encrypt करना', 'internet connection देना'], a: 1, e: 'Actuator डिजिटल संकेत को भौतिक क्रिया में बदलता है (जैसे motor चालू करना, दरवाज़ा खोलना)। इसका उल्टा काम Sensor करता है (भौतिक → डिजिटल)।', trap: 'Sensor वाला काम Actuator को दे देना — दोनों उल्टे हैं।', d: 2, tag: 'IoT', pyq: 'बार-बार' },
  { q: 'Supervised और Unsupervised learning में मुख्य अंतर क्या है?', o: ['Supervised बिना labelled data के सीखता है', 'Supervised labelled data से सीखता है, Unsupervised बिना label के pattern ढूँढता है', 'दोनों एक ही हैं', 'Unsupervised हमेशा तेज़ होता है'], a: 1, e: 'Supervised learning में training data पर सही "उत्तर" (label) पहले से दिए होते हैं। Unsupervised में कोई label नहीं — algorithm ख़ुद data में समूह/pattern ढूँढता है (clustering)।', trap: 'दोनों की परिभाषाएँ उलट देना।', d: 3, tag: 'AI/ML', pyq: 'गहरा' },
  { q: 'WWW (World Wide Web) के आविष्कारक कौन हैं?', o: ['Tim Berners-Lee', 'Vint Cerf', 'John McCarthy', 'Dennis Ritchie'], a: 0, e: 'Tim Berners-Lee ने 1989 में WWW का आविष्कार किया — HTTP, HTML और URL की अवधारणा दी। (Vint Cerf को इंटरनेट/TCP-IP का जनक कहते हैं — WWW और Internet अलग हैं।)', trap: 'Vint Cerf चुन लेना — वे इंटरनेट (नेटवर्क) से जुड़े हैं, WWW (पन्नों का जाल) से Berners-Lee।', d: 2, tag: 'Web', pyq: 'बार-बार' },
  { q: 'B2B e-commerce मॉडल किसे दर्शाता है?', o: ['Amazon से ग्राहक की ख़रीद', 'एक व्यवसाय का दूसरे व्यवसाय से लेन-देन (जैसे निर्माता → थोक विक्रेता)', 'OLX पर व्यक्ति-से-व्यक्ति बिक्री', 'freelancer का कंपनी को काम'], a: 1, e: 'B2B (Business to Business) — जहाँ एक कंपनी दूसरी कंपनी को बेचती है, जैसे निर्माता से थोक विक्रेता, या थोक से खुदरा दुकान।', trap: 'B2C (Amazon→ग्राहक) से उलझ जाना।', d: 2, tag: 'E-commerce', pyq: 'बार-बार' }
];
