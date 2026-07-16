/*! MODULE: data/paper2/u-iot.js — Paper-II Unit: Internet, IoT, AI & Emerging Tech (PYQ ≈ 4/100) */

CH.push({ id: 'p2iot', ic: '🌍', t: 'Internet & IoT', s: 'Web • IoT • AI/ML • E-commerce • Cloud', xp: 100, p: 2 });

LESSON.p2iot = `
<div class="blk"><h3>🌍 Internet, IoT & Emerging Technology — परिचय</h3>
<p><b>सरल भाषा में:</b> यह यूनिट "नई दुनिया" की है — Internet कैसे चलता है, चीज़ें (things) कैसे इंटरनेट से जुड़ीं (IoT), मशीनें कैसे "सोचने" लगीं (AI), ऑनलाइन ख़रीद-बिक्री (E-commerce) कैसे काम करती है, और आगे क्या आने वाला है (Blockchain, Cloud)। PYQ भार कम है (~4/100), पर सवाल <b>तथ्य-आधारित</b> होते हैं — इसलिए सही परिभाषा और सही उदाहरण याद रखना ज़्यादा काम आता है, गहरी गणना नहीं।</p>
</div>

<div class="blk"><h3>🕸️ Web & Internet की बुनियाद</h3>
<p>वेब को चलाने वाले चार बुनियादी हिस्से हैं — इन्हें अलग-अलग समझना बहुत ज़रूरी है, क्योंकि इनके नाम एक-जैसे लगते हैं पर काम बिल्कुल अलग।</p>
<div style="overflow-x:auto"><table>
<tr><th>शब्द</th><th>मतलब</th></tr>
<tr><td><b>WWW</b></td><td>वेब पन्नों का जाल — Tim Berners-Lee ने 1989 में बनाया</td></tr>
<tr><td><b>HTTP/HTTPS</b></td><td>वेब पन्ने भेजने का protocol (S = सुरक्षित/encrypted)</td></tr>
<tr><td><b>URL</b></td><td>पन्ने का पता — बनावट: protocol://domain/path</td></tr>
<tr><td><b>HTML</b></td><td>पन्ने का ढाँचा बनाने की markup language</td></tr>
<tr><td><b>Browser</b></td><td>पन्ने पढ़कर दिखाने वाला सॉफ़्टवेयर (Chrome, Firefox)</td></tr>
<tr><td><b>Search Engine</b></td><td>पूरे वेब में ढूँढने वाली सेवा (Google) — <b>यह browser नहीं है!</b></td></tr>
</table></div>
<div class="tk">🧠 <b>HTML बनाम HTTP (पक्का भ्रम):</b> HT<b>ML</b> = <b>M</b>arkup — पन्ने का <b>ढाँचा</b> (क्या दिखे)। HT<b>TP</b> = <b>T</b>ransfer <b>P</b>rotocol — पन्ने को <b>भेजने</b> का तरीक़ा (कैसे पहुँचे)। एक "क्या" है, दूसरा "कैसे" है।</div>
<div class="tr">⚠️ <b>PYQ (Q18):</b> वेब पन्ने भेजने का protocol = <b>HTTP</b>। <b>ट्रैप:</b> Google को "browser" कह देना — Google एक <b>search engine</b> है; browser तो Chrome/Firefox/Edge हैं जिनमें Google खोला जाता है।</div>
</div>

<div class="blk"><h3>🌐 Internet बनाम WWW — और URL को टुकड़ों में पढ़ना</h3>
<p><b>सबसे बड़ा भ्रम:</b> लोग Internet और WWW को एक ही समझते हैं — <u>ये एक नहीं हैं</u>।</p>
<div class="tk">🧠 <b>Internet</b> = दुनिया भर के कंप्यूटरों को जोड़ने वाला <b>भौतिक नेटवर्क</b> (तारें, राऊटर, satellite) — यानी <b>सड़कें</b>। यह 1969 के <b>ARPANET</b> से निकला।<br>
<b>WWW</b> = उन सड़कों पर चलने वाली <b>एक सेवा</b> — आपस में link किए हुए वेब पन्नों का जाल। इसे <b>Tim Berners-Lee</b> ने <b>1989</b> में बनाया।<br>
<b>असली मिसाल:</b> Internet = सड़कें; WWW = उन पर चलने वाली <b>एक</b> तरह की गाड़ी। Email, FTP, WhatsApp भी उन्हीं सड़कों पर चलती दूसरी गाड़ियाँ हैं — <b>पर वे WWW नहीं हैं</b>। इसलिए: <b>Internet पहले आया (1969), WWW बाद में (1989)</b>; WWW इंटरनेट का हिस्सा है, बराबर नहीं।</div>
<p><b>URL को टुकड़ों में पढ़ना</b> — पूरा नाम <b>Uniform Resource Locator</b>, यानी किसी संसाधन का "पूरा पता"। मिसाल लो: <code>https://www.rssb.gov.in/exam/notice.pdf</code></p>
<div style="overflow-x:auto"><table>
<tr><th>टुकड़ा</th><th>नाम</th><th>क्या बताता है</th></tr>
<tr><td><b>https</b></td><td>Protocol</td><td>किस नियम से लाना है (s = सुरक्षित)</td></tr>
<tr><td><b>www.rssb.gov.in</b></td><td>Domain name</td><td>कौन-से server पर</td></tr>
<tr><td><b>.gov</b></td><td>Domain type</td><td>संस्था की क़िस्म (सरकारी)</td></tr>
<tr><td><b>.in</b></td><td>Country code</td><td>देश (भारत)</td></tr>
<tr><td><b>/exam/notice.pdf</b></td><td>Path</td><td>उस server पर कौन-सी फ़ाइल</td></tr>
</table></div>
<div class="tk">🧠 <b>ज़रूरी Domain types:</b> <b>.com</b> (व्यापारिक), <b>.org</b> (संगठन/NGO), <b>.edu</b> (शिक्षा), <b>.gov</b> (सरकारी), <b>.net</b> (नेटवर्क), <b>.mil</b> (सैन्य)। Country: .in (भारत), .uk, .us।<br>
🧠 <b>DNS की भूमिका:</b> इंसान नाम याद रखता है, मशीन सिर्फ़ IP। जब तू URL डालता है, <b>DNS</b> उस domain name को उसके IP address में बदलता है — इंटरनेट की "फ़ोनबुक"। (इसीलिए DNS न चले तो साइट नाम से नहीं खुलती।)</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "Internet और WWW एक ही हैं" — <b>ग़लत</b>। Internet = ढाँचा/सड़क (1969, ARPANET); WWW = उस पर की एक सेवा (1989, Berners-Lee)। और <b>URL = पता</b>, <b>HTTP = लाने का नियम</b>, <b>DNS = नाम को IP में बदलने वाला</b> — तीनों अलग काम हैं।</div>
</div>

<div class="blk"><h3>🏢 Internet, Intranet और Extranet — तीनों का फ़र्क़</h3>
<p>ये तीन नाम जान-बूझकर मिलते-जुलते रखे गए हैं, और परीक्षा इसी उलझन का फ़ायदा उठाती है। फ़र्क़ सिर्फ़ एक बात का है — <b>इसे कौन इस्तेमाल कर सकता है</b>।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Internet</th><th>Intranet</th><th>Extranet</th></tr>
<tr><td>कौन इस्तेमाल करे</td><td><b>सब</b> — पूरी दुनिया</td><td>सिर्फ़ <b>एक संस्था के अंदर</b> के लोग</td><td>संस्था के लोग <b>+ चुने हुए बाहरी</b> (ग्राहक/सप्लायर)</td></tr>
<tr><td>दायरा</td><td>सार्वजनिक (public)</td><td>निजी (private)</td><td>निजी + नियंत्रित बाहरी पहुँच</td></tr>
<tr><td>मिसाल</td><td>google.com</td><td>दफ़्तर का अंदरूनी portal (छुट्टी/वेतन)</td><td>कंपनी का supplier portal (dealer login)</td></tr>
</table></div>
<div class="tk">🧠 <b>असली मिसाल (घर से समझ):</b><br>
<b>Internet</b> = सार्वजनिक सड़क — कोई भी चल सकता है।<br>
<b>Intranet</b> = तेरे घर के <b>अंदर</b> के कमरे — सिर्फ़ घरवाले।<br>
<b>Extranet</b> = घरवाले + कुछ <b>ख़ास मेहमान</b> जिन्हें तूने चाबी दी है (सब नहीं, चुने हुए)।<br>
<b>सीढ़ी याद रख:</b> Intranet ⊂ Extranet ⊂ Internet (दायरा बढ़ता जाता है)।</div>
<div class="tk">🧠 <b>तीनों एक ही तकनीक (TCP/IP, browser) पर चलते हैं</b> — फ़र्क़ तकनीक का नहीं, <b>पहुँच (access)</b> का है। Intranet को बाहर से बचाने के लिए <b>Firewall</b> लगता है; बाहर से सुरक्षित घुसने के लिए <b>VPN</b>।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "Extranet" को "Internet का दूसरा नाम" मान लेना — ग़लत। Extranet = Intranet का वह हिस्सा जो <b>चुने हुए बाहरी</b> लोगों को दिखाया जाए। मंत्र: <b>"अंदर = Intranet, अंदर+ख़ास मेहमान = Extranet, सब = Internet।"</b></div>
</div>

<div class="blk"><h3>🔖 HTML बनाम XML — दिखाना बनाम बताना</h3>
<p><b>XML क्यों बनी?</b> HTML सिर्फ़ यह जानता है कि पन्ना कैसा <b>दिखे</b> — उसे "data का मतलब" से कोई परवाह नहीं। जब दो अलग-अलग कंप्यूटर सिस्टम को आपस में डेटा भेजना हो (सिर्फ़ दिखाना नहीं, बल्कि <b>समझना</b> भी), तो एक ऐसी भाषा चाहिए जो अपने tags के <b>मतलब ख़ुद बता सके</b> — इसीलिए XML बनी, जिसमें tags तय नहीं होते, user अपने हिसाब से नाम रखता है (जैसे &lt;price&gt;, &lt;name&gt;)।</p>
<div style="overflow-x:auto"><table>
<tr><th>HTML</th><th>XML</th></tr>
<tr><td>data <b>दिखाने</b> के लिए (presentation)</td><td>data <b>बताने/ले जाने</b> के लिए (data transport)</td></tr>
<tr><td>tags <b>पहले से तय</b> (&lt;p&gt;, &lt;h1&gt;)</td><td>tags <b>user-defined</b></td></tr>
<tr><td>case-insensitive, ढीला (कुछ tag बंद न भी करो तो चल जाता है)</td><td>case-sensitive, सख़्त — हर opening tag का closing tag ज़रूरी</td></tr>
</table></div>
<div class="tk">🧠 <b>मंत्र:</b> "HTML <b>दिखाता</b> है, XML <b>बताता</b> है।" अगर XML में कोई tag बिना बंद किए छोड़ दिया जाए, तो document "not well-formed" कहलाता है और ग़लत माना जाता है — HTML में ऐसी सख़्ती नहीं।</div>
<div class="tr">⚠️ <b>PYQ (Q19/Q23):</b> XML data को <b>describe/store</b> करने के लिए है (HTML दिखाने के लिए); XML के tags <b>user-defined</b> होते हैं, पहले से तय नहीं।</div>
</div>

<div class="blk"><h3>🎨 Web Development — HTML, CSS, JS की तिकड़ी</h3>
<p>हर आधुनिक वेबसाइट तीन तकनीकों के मेल से बनती है, और तीनों का काम साफ़-साफ़ बँटा हुआ है।</p>
<div style="overflow-x:auto"><table>
<tr><th>तकनीक</th><th>काम</th><th>मिसाल</th></tr>
<tr><td><b>HTML</b></td><td>ढाँचा (structure)</td><td>&lt;h1&gt;, &lt;p&gt;, &lt;a&gt;, &lt;img&gt;</td></tr>
<tr><td><b>CSS</b></td><td>सजावट (style)</td><td>रंग, फ़ॉन्ट, layout</td></tr>
<tr><td><b>JavaScript</b></td><td>व्यवहार (behaviour)</td><td>click पर react करना, animation, गणना</td></tr>
</table></div>
<div class="tk">🧠 <b>"HTML = ढाँचा (हड्डी), CSS = कपड़े, JS = जान।"</b> बिना JS के एक वेबसाइट सिर्फ़ एक स्थिर तस्वीर जैसी है — कहीं क्लिक करो, कुछ नहीं होता। JS ही उसे "ज़िंदा" बनाता है।<br>
🧠 <b>Client-side</b> (सब कुछ browser में चले — HTML/CSS/JS) बनाम <b>Server-side</b> (server पर चले — PHP, Node, Python, फिर तैयार जवाब भेजे)। <b>Static website</b> (हर बार वही दिखे) बनाम <b>Dynamic website</b> (हर बार नए सिरे से, data के हिसाब से बने — जैसे Facebook feed)।</div>
</div>

<div class="blk"><h3>📡 IoT — Internet of Things</h3>
<p><b>यह क्यों बना?</b> पहले सिर्फ़ कंप्यूटर और फ़ोन इंटरनेट से जुड़ते थे। IoT का विचार है — रोज़मर्रा की <b>किसी भी चीज़</b> (fridge, watch, बल्ब, गाड़ी) में एक छोटा sensor और internet connectivity डाल दो, ताकि वह चीज़ भी data भेज/ले सके और "समझदार" बन जाए। जैसे एक smart watch तेरी धड़कन नापकर फ़ोन को भेज देती है, और फ़ोन अगर कुछ ग़लत लगे तो तुझे चेता देता है।</p>
<div class="tk">🧠 <b>IoT का काम-चक्र — 4 हिस्से:</b><br>
<b>Sensor</b> (भौतिक दुनिया से data इकट्ठा करे — जैसे तापमान) → <b>Connectivity</b> (उस data को भेजे — WiFi/Bluetooth/5G) → <b>Processing</b> (cloud में उस data पर हिसाब-किताब/निर्णय) → <b>Action/UI</b> (नतीजा user को दिखाए, या ख़ुद कोई क्रिया करे)।<br>
असली मिसाल: Smart home (लाइट अपने आप जले), wearables (fitness band), smart city (ट्रैफ़िक सेंसर), connected car।</div>
<div class="tk">🧠 <b>ज़रूरी शब्द जो अक्सर उलझते हैं:</b><br>
<b>Sensor</b> = भौतिक राशि को डिजिटल data में बदले (तापमान नापना)।<br>
<b>Actuator</b> = डिजिटल आदेश को भौतिक क्रिया में बदले (मोटर चालू करना) — Sensor का उल्टा काम।<br>
<b>RFID</b> = Radio Frequency Identification — रेडियो तरंगों से, <b>बिना छुए</b>, किसी वस्तु की पहचान (जैसे toll tag)।<br>
<b>Embedded System</b> = किसी बड़े यंत्र (जैसे वाशिंग मशीन) के अंदर बैठा एक छोटा, ख़ास-मक़सद वाला कंप्यूटर।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Sensor और Actuator के काम को उलट देना सबसे आम ग़लती है — <b>"Sensor महसूस करे, Actuator कर के दिखाए।"</b></div>
</div>

<div class="blk"><h3>🤖 AI / Machine Learning / Deep Learning</h3>
<p><b>तीनों का रिश्ता समझना ज़रूरी है</b> — ये तीन अलग चीज़ें नहीं, बल्कि एक-दूसरे के अंदर <b>घोंसले</b> की तरह बैठी हैं।</p>
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
<div class="tk">🧠 <b>घोंसला (nesting):</b> <b>AI</b> (सबसे बड़ा दायरा) = मशीन में किसी भी तरह की समझदारी। <b>ML</b> (AI का उपसमूह) = मशीन को नियम बताने के बजाय, उसे <b>data/अनुभव से ख़ुद सीखने</b> देना। <b>Deep Learning</b> (ML का उपसमूह) = दिमाग़ की नस-संरचना जैसे "neural networks" से बहुत गहरी सीख।<br>
🧠 <b>ML के तीन तरीक़े:</b> <b>Supervised</b> (सही जवाबों के साथ training data दिया गया — जैसे बिल्ली/कुत्ते की पहचानी हुई तस्वीरें) • <b>Unsupervised</b> (कोई label नहीं, मशीन ख़ुद pattern/समूह ढूँढे) • <b>Reinforcement</b> (इनाम-सज़ा से सीखना, जैसे कोई गेम खेलकर सीखना)।</div>
<div class="tk">🧠 <b>AI Agent के प्रकार (PYQ यहीं से आता है):</b> Simple Reflex (सीधा react करे), Goal-based (लक्ष्य देखकर चले), <b>Utility-based</b> (लक्ष्य के साथ-साथ यह भी मापे कि कौन-सी अवस्था "कितनी अच्छी" है — इसलिए happy/unhappy states में फ़र्क़ कर सकता है), Learning agent (अनुभव से सुधरे)।</div>
<div class="tr">⚠️ <b>PYQ (Q53):</b> "happy/unhappy state" से निपटने वाला agent = <b>Utility-based agent</b> (Goal-based सिर्फ़ लक्ष्य पूरा/अधूरा देखता है, संतुष्टि की मात्रा नहीं)।<br>
⚠️ इतिहास: <b>John McCarthy = "Father of AI"</b> (1956 में यह शब्द ख़ुद गढ़ा); <b>Alan Turing = Turing Test</b> (यह जाँचने का तरीक़ा कि मशीन "सोच" सकती है या नहीं)। दोनों को उलझाना मत — McCarthy ने नाम दिया, Turing ने कसौटी (test) दी।</div>
</div>

<div class="blk"><h3>🛒 E-Commerce — ऑनलाइन कारोबार के मॉडल</h3>
<p>E-commerce में "कौन किसे बेच रहा है" के आधार पर चार मॉडल हैं — नाम ख़ुद अपना मतलब बताते हैं, बस दिशा (Business/Consumer) पहचाननी है।</p>
<div style="overflow-x:auto"><table>
<tr><th>मॉडल</th><th>मतलब</th><th>मिसाल</th></tr>
<tr><td><b>B2C</b></td><td>Business → Consumer</td><td>Amazon से ख़रीदना</td></tr>
<tr><td><b>B2B</b></td><td>Business → Business</td><td>थोक विक्रेता → दुकान</td></tr>
<tr><td><b>C2C</b></td><td>Consumer → Consumer</td><td>OLX, eBay</td></tr>
<tr><td><b>C2B</b></td><td>Consumer → Business</td><td>freelancer → कंपनी</td></tr>
</table></div>
<div class="tk">🧠 <b>UPI</b> = Unified Payments Interface — NPCI ने 2016 में बनाया, तुरंत बैंक-से-बैंक भुगतान के लिए (बिना बैंक details बार-बार डाले)।<br>
🧠 <b>IT Act 2000</b> = भारत में साइबर-कानून की नींव — इसी अधिनियम ने Digital Signature को कानूनी मान्यता दी और cyber crime को परिभाषित किया।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> E-commerce और IT Act/UPI से जुड़े सवाल अक्सर <b>तथ्य-आधारित</b> होते हैं (कौन-सी संस्था, कौन-सा साल) — इन्हें रट के रखना ज़्यादा काम आता है बजाय सिद्धांत समझने के।</div>
</div>

<div class="blk"><h3>⛓️ Blockchain — बिना मालिक के भरोसेमंद रिकॉर्ड</h3>
<p><b>यह समस्या हल करती है:</b> आम तौर पर किसी भी रिकॉर्ड (जैसे बैंक बहीखाता) का एक मालिक/केंद्र होता है, जिस पर सबको भरोसा करना पड़ता है। Blockchain का विचार है — रिकॉर्ड को <b>किसी एक जगह नहीं, हज़ारों कंप्यूटरों पर एक साथ</b> रखा जाए, और हर नया "block" पिछले block का <b>hash (फ़िंगरप्रिंट)</b> अपने में शामिल करे।</p>
<div class="tk">🧠 <b>इससे छेड़छाड़ नामुमकिन क्यों हो जाती है?</b> अगर कोई एक पुराना block बदल दे, तो उसका hash बदल जाएगा — और अगले block में जो hash सहेजा था वह मेल नहीं खाएगा। पूरी ज़ंजीर टूट जाएगी, और हज़ारों बाक़ी कंप्यूटरों की नक़ल से यह गड़बड़ी तुरंत पकड़ में आ जाएगी। इसीलिए Blockchain को <b>Decentralized</b> (कोई एक मालिक नहीं) और <b>पारदर्शी (transparent)</b> कहा जाता है।<br>
🧠 <b>उपयोग:</b> Bitcoin/cryptocurrency, Smart Contracts (ख़ुद-ब-ख़ुद चलने वाले क़रार)।</div>
</div>

<div class="blk"><h3>📊 Big Data + Data Mining</h3>
<div class="tk">🧠 <b>Big Data</b> — इतना बड़ा, इतनी तेज़ी से आने वाला, और इतना विविध data कि पुराने तरीक़ों (Excel जैसे) से संभाला ही नहीं जा सकता। इसे <b>5V</b> से पहचानते हैं: <b>V</b>olume (आकार), <b>V</b>elocity (रफ़्तार), <b>V</b>ariety (विविधता), <b>V</b>eracity (सच्चाई/भरोसा), <b>V</b>alue (उपयोगिता)।<br>
🧠 <b>Data Mining</b> = उस बड़े ढेर के अंदर से छिपे <b>pattern/जानकारी</b> निकालना — जैसे "कौन-से दो सामान अक्सर एक साथ ख़रीदे जाते हैं"।</div>
</div>

<div class="blk"><h3>🚀 अन्य उभरती तकनीकें</h3>
<div class="tk">🧠 <b>AR (Augmented Reality)</b> = असली दुनिया के ऊपर डिजिटल चीज़ें जोड़ना (जैसे मोबाइल कैमरे से कमरे में फ़र्नीचर "रखकर" देखना)।<br>
🧠 <b>VR (Virtual Reality)</b> = पूरी तरह एक नई, बनावटी दुनिया में डूब जाना (headset पहनकर)।<br>
🧠 <b>Edge Computing</b> = हिसाब-किताब को दूर के बड़े cloud सर्वर तक भेजने के बजाय, <b>data बनने की जगह के पास ही</b> (डिवाइस पर या नज़दीकी सर्वर पर) करना — इससे देरी (latency) कम होती है, जो self-driving car जैसी चीज़ों के लिए बहुत ज़रूरी है।<br>
🧠 <b>5G</b> = मोबाइल नेटवर्क की पाँचवीं पीढ़ी — बहुत तेज़ रफ़्तार, कम देरी — इसीलिए इसे IoT और self-driving तकनीक का "आधार-स्तंभ" कहा जाता है।</div>
</div>

<div class="blk"><h3>☁️ Cloud Computing — किराए पर कंप्यूटिंग</h3>
<p><b>यह क्यों बना?</b> अपना ख़ुद का बड़ा सर्वर ख़रीदना, चलाना, ठीक रखना बहुत महँगा है — ख़ासकर छोटी कंपनियों के लिए। Cloud का विचार है — किसी और (जैसे Amazon, Google, Microsoft) के विशाल data centers से, ज़रूरत के मुताबिक़, किराए पर कंप्यूटिंग शक्ति लो।</p>
<div class="tk">🧠 <b>तीन सेवा-मॉडल — कम से ज़्यादा "तैयार":</b><br>
<b>IaaS</b> (Infrastructure as a Service) = सिर्फ़ कच्चा server/storage किराए पर (AWS EC2) — बाक़ी सब ख़ुद सेट करना है।<br>
<b>PaaS</b> (Platform as a Service) = app बनाने का पूरा मंच तैयार (Google App Engine) — कोडिंग करो, बाक़ी infrastructure provider संभाले।<br>
<b>SaaS</b> (Software as a Service) = पूरा तैयार software, बस इस्तेमाल करो (Gmail, Google Docs)।<br>
<i>"नीचे से ऊपर — ज़मीन (Infra), मंच (Platform), मकान (Software) — जैसे-जैसे ऊपर जाओ, कम मेहनत ख़ुद करनी पड़े।"</i></div>
<div class="tk">🧠 <b>Deployment के प्रकार:</b> <b>Public</b> (किसी के लिए भी खुला, जैसे Gmail) • <b>Private</b> (एक ही संगठन के लिए, ज़्यादा नियंत्रण/सुरक्षा) • <b>Hybrid</b> (दोनों का मिश्रण — ज़रूरी data private में, बाक़ी public में)।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🕸️ वेब protocol = <b>HTTP</b> | HTML दिखाए, HTTP भेजे | Google = search engine, browser नहीं<br>
🔖 <b>HTML</b> tags तय + दिखाना | <b>XML</b> tags user-defined + data बताना (सख़्त, हर tag बंद हो)<br>
🎨 HTML=ढाँचा, CSS=सजावट, JS=व्यवहार | Client-side बनाम Server-side<br>
📡 IoT 4 हिस्से: Sensor→Connectivity→Processing→Action | Sensor महसूस करे, Actuator करे<br>
🤖 <b>AI ⊃ ML ⊃ Deep Learning</b> | happy/unhappy agent = <b>Utility-based</b><br>
🤖 McCarthy = नाम दिया (Father of AI) | Turing = कसौटी दी (Turing Test)<br>
🛒 B2C (Amazon) | B2B (थोक) | C2C (OLX) | C2B (freelancer)<br>
💸 UPI = NPCI 2016 | IT Act 2000 = भारत का साइबर कानून<br>
⛓️ Blockchain = decentralized, hash-जुड़ी ज़ंजीर, छेड़छाड़ नामुमकिन<br>
📊 Big Data = 5V (Volume, Velocity, Variety, Veracity, Value)<br>
🚀 Edge computing = data के पास processing (कम देरी) | 5G = IoT का आधार<br>
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
