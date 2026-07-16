/*! MODULE: data/paper2/u-foc.js — Paper-II Unit: Fundamentals of Computer + Number System (PYQ ≈ 8/100) */

CH.push({ id: 'p2foc', ic: '🖥️', t: 'Fundamentals', s: 'Generations • I/O • Memory • Number System', xp: 110, p: 2 });

LESSON.p2foc = `
<div class="blk"><h3>🖥️ Fundamentals of Computer — पूरा नक़्शा</h3>
<p><b>सरल भाषा में:</b> यह पूरी यूनिट "कंप्यूटर क्या है, कहाँ से आया, अंदर से कैसा है, और गिनती कैसे करता है" — इसकी है। हम इसे उसी क्रम में पढ़ेंगे जैसे तेरे नोट्स में है: पहले <b>डेटा बनाम सूचना</b>, फिर <b>इतिहास व पीढ़ियाँ</b>, फिर <b>वर्गीकरण</b>, फिर <b>अंदरूनी ढाँचा (block diagram)</b>, फिर <b>इनपुट-आउटपुट</b>, फिर <b>मेमोरी</b>, फिर <b>संख्या पद्धति व codes</b>, और आख़िर में <b>software</b>।</p>
<div style="display:flex;flex-wrap:wrap;gap:.3rem;font-size:.68rem;margin-top:.5rem">
${['डेटा/सूचना', 'इतिहास', 'पीढ़ियाँ', 'वर्गीकरण', 'Block Diagram', 'CPU', 'Input', 'Output', 'Memory', 'Number System', 'Codes', 'Software'].map(x => '<span style="background:rgba(34,211,238,.12);border:1px solid rgba(34,211,238,.4);padding:.2rem .5rem;border-radius:999px">' + x + '</span>').join('')}
</div>
</div>

<div class="blk"><h3>1️⃣ Data, Information, Knowledge, Wisdom (DIKW)</h3>
<p>हर कंप्यूटर का असली काम एक ही है — <b>कच्चे data को उपयोगी information में बदलना</b>। इसलिए सबसे पहले यही फ़र्क़ साफ़ होना चाहिए।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Data</th><th>Information</th></tr>
<tr><td>अर्थ</td><td>कच्चे तथ्य व अंक (raw facts & figures)</td><td>संसाधित, अर्थपूर्ण data</td></tr>
<tr><td>उपयोगिता</td><td><b>अर्थहीन</b> (meaningless)</td><td><b>अर्थपूर्ण</b> (meaningful)</td></tr>
<tr><td>अवस्था</td><td>असंसाधित (unprocessed), अव्यवस्थित</td><td>संसाधित (processed), व्यवस्थित</td></tr>
<tr><td>मिसाल</td><td>90, 85, 70</td><td>"राम के औसत अंक 81.6 हैं"</td></tr>
</table></div>
<div class="tk">🧠 <b>DIKW सीढ़ी (नोट्स का मुख्य चित्र):</b><br>
<b>Data</b> → (सही pattern/order में लगाओ) → <b>Information</b> → (जमा करो) → <b>Knowledge</b> → (उस पर सही निर्णय/action लो) → <b>Wisdom</b>।<br>
<i>Data कच्चा माल, Information पका खाना, Knowledge रसोई का अनुभव, Wisdom कब क्या पकाना है — यह समझ।</i></div>
<div class="tk">🧠 <b>तीन और बुनियादी शब्द:</b><br>
<b>Instruction</b> = कंप्यूटर को उसकी भाषा में दिया गया एक command।<br>
<b>Program</b> = instructions का एक समूह (set of instructions)।<br>
<b>Software</b> = programs का समूह जो user को कोई ख़ास काम करने देता है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> "Data को information बनाने के लिए इसे input की तरह लिया जाता है" — यानी information का input ही data है। Data और information को उल्टा मत करो।</div>
</div>

<div class="blk"><h3>2️⃣ Computer — परिभाषा, विशेषताएँ, सीमाएँ</h3>
<p><b>Computer</b> शब्द लैटिन "Computare" से बना है, जिसका अर्थ है "गणना करना"। यह एक इलेक्ट्रॉनिक यंत्र है जो data लेकर (input), नियमों के अनुसार प्रोसेस करके, उपयोगी परिणाम (output) देता है — और बीच में उसे याद (storage) भी रखता है।</p>
<div style="overflow-x:auto"><table>
<tr><th>विशेषताएँ (ताक़त)</th><th>सीमाएँ (कमज़ोरी)</th></tr>
<tr><td><b>Speed</b> — बिजली की रफ़्तार (ns/ps में)</td><td><b>No IQ / No thinking</b> — ख़ुद नहीं सोचता</td></tr>
<tr><td><b>Accuracy</b> — ग़लती नहीं (GIGO छोड़कर)</td><td><b>No common sense / feelings</b></td></tr>
<tr><td><b>Diligence</b> — बिना थके, बिना ऊबे</td><td>ख़ुद निर्णय नहीं ले सकता</td></tr>
<tr><td><b>Versatility</b> — हर तरह का काम</td><td>बिजली/निर्देश के बिना बेकार</td></tr>
<tr><td><b>Storage</b> — विशाल याददाश्त</td><td> </td></tr>
</table></div>
<div class="tk">🧠 <b>GIGO</b> = Garbage In, Garbage Out — कंप्यूटर उतना ही सही देगा जितना सही तुम दोगे। ग़लती इंसान की, कंप्यूटर की नहीं।<br>
🧠 विशेषताएँ याद रखो — <b>"SAD VS"</b>: Speed, Accuracy, Diligence, Versatility, Storage।</div>
</div>

<div class="blk"><h3>3️⃣ इतिहास — गिनती के औज़ारों से कंप्यूटर तक</h3>
<div style="overflow-x:auto"><table>
<tr><th>औज़ार / मशीन</th><th>किसने / कब</th><th>ख़ास बात</th></tr>
<tr><td><b>Abacus</b></td><td>चीन, ~2500 वर्ष पुराना</td><td>पहला गिनती यंत्र</td></tr>
<tr><td><b>Napier's Bones</b></td><td>John Napier</td><td>गुणा-भाग की छड़ें; log का जनक</td></tr>
<tr><td><b>Pascaline</b></td><td>Blaise Pascal (1642)</td><td>पहला यांत्रिक adding machine</td></tr>
<tr><td><b>Leibniz Calculator</b></td><td>Leibniz</td><td>जोड़-घटाव-गुणा-भाग</td></tr>
<tr><td><b>Punch Card</b></td><td>Hollerith (Tabulating machine)</td><td>I/O व storage; क्षमता <b>80 byte</b></td></tr>
<tr><td><b>Difference Engine</b></td><td><b>Charles Babbage</b> (1821-22)</td><td>भाप से चला; technical issue से fail</td></tr>
<tr><td><b>Analytical Engine</b></td><td>Charles Babbage (1832-35)</td><td>पहला IPO (Input-Process-Output) विचार</td></tr>
</table></div>
<div class="tk">🧠 <b>Charles Babbage = "Father of Computer"</b> (जन्म 26-12-1791)। उन्होंने पहली बार <b>input-output को अलग</b> किया — यही IPO अवधारणा आज भी हर कंप्यूटर का आधार है। Analytical Engine को पहला "आधुनिक कंप्यूटर का खाका" माना जाता है।<br>
🧠 <b>Ada Lovelace</b> = पहली programmer (Analytical Engine के लिए)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Difference Engine और Analytical Engine — दोनों Babbage के, पर Analytical बड़ा व सामान्य-उद्देश्य (general purpose) था। Punch card की क्षमता <b>80 byte</b> (80 columns) याद रखो।</div>
</div>

<div class="blk"><h3>4️⃣ पीढ़ियाँ (Generations) — तकनीक के हिसाब से</h3>
<div style="overflow-x:auto"><table>
<tr><th>पीढ़ी</th><th>तकनीक</th><th>मिसाल</th><th>भाषा</th></tr>
<tr><td><b>1st</b> (1940-56)</td><td><b>Vacuum Tube</b></td><td>ENIAC, EDVAC, UNIVAC-I, Mark-I</td><td>Machine</td></tr>
<tr><td><b>2nd</b> (1956-63)</td><td><b>Transistor</b></td><td>IBM 1401, Honeywell 400</td><td>Assembly</td></tr>
<tr><td><b>3rd</b> (1964-71)</td><td><b>IC</b> (Integrated Circuit)</td><td>IBM 360</td><td>COBOL, FORTRAN</td></tr>
<tr><td><b>4th</b> (1971-80)</td><td><b>Microprocessor</b> (VLSI)</td><td>IBM PC, Apple II, Altair</td><td>C, C++</td></tr>
<tr><td><b>5th</b> (1980-अब)</td><td><b>AI / ULSI</b></td><td>Robots, आज के PC</td><td>Python, Prolog, LISP</td></tr>
</table></div>
<div class="tk">🧠 <b>अमर मेमोरी ट्रिक — "<span class="hl">वो ट्रांजिस्टर इंटीग्रेटेड माइक्रो AI</span>":</b><br>
<b>वो</b>=Vacuum tube (1) → <b>ट्रां</b>=Transistor (2) → <b>इंटी</b>=IC (3) → <b>माइक्रो</b>=Microprocessor (4) → <b>AI</b> (5)।<br>
हर पीढ़ी में मशीन <b>छोटी, तेज़, सस्ती, ज़्यादा भरोसेमंद</b> होती गई और बिजली कम खाने लगी।</div>
<div class="tk">🧠 <b>ज़रूरी तथ्य:</b> IC का आविष्कार <b>Jack Kilby</b> ने किया। पहला microprocessor <b>Intel 4004</b> (1971)। Vacuum tube का आविष्कार Lee De Forest, transistor Bardeen-Brattain-Shockley (Bell Labs)।</div>
<div class="tr">⚠️ <b>PYQ ट्रैप (Q92):</b> "कौन-सा <b>first-generation</b> कंप्यूटर <b>नहीं</b> है?" → ENIAC/EDVAC/UNIVAC पहली पीढ़ी हैं; <b>IBM 1401 (transistor) दूसरी</b> पीढ़ी का है।</div>
</div>

<div class="blk"><h3>5️⃣ वर्गीकरण (Classification)</h3>
<p><b>(A) आकार व क्षमता के अनुसार</b> — यह सबसे ज़रूरी वर्गीकरण है।</p>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>ख़ासियत</th><th>ज़रूरी तथ्य</th></tr>
<tr><td><b>Micro</b></td><td>निजी उपयोग (PC, laptop)</td><td>विश्व का पहला — <b>Altair</b> (MITS); भारत का पहला — <b>Siddhartha</b></td></tr>
<tr><td><b>Mini</b></td><td>"midrange server"; multi-user; parallel processing</td><td>पहला — <b>PDP-8</b> (1965, DEC कंपनी)। micro से ~5 गुना तेज़</td></tr>
<tr><td><b>Mainframe</b></td><td>बहुत बड़ा, multi-user; railway, airline, बैंक, बीमा</td><td><b>IBM</b> ने 1963 में लॉन्च; <b>EBCDIC</b> (8-bit) code इसी में</td></tr>
<tr><td><b>Super</b></td><td>सबसे शक्तिशाली; मौसम, अनुसंधान, परमाणु</td><td>भारत का पहला — <b>PARAM</b> (C-DAC, 1991); Cray सबसे मशहूर</td></tr>
</table></div>
<div class="tk">🧠 आकार क्रम (छोटे→बड़े): <b>Micro &lt; Mini &lt; Mainframe &lt; Super</b>। ("मिनी माइक्रो से भारी, सुपर सबसे भारी।")</div>
<p style="margin-top:.6rem"><b>(B) उद्देश्य के अनुसार:</b> General Purpose (हर काम) व Special Purpose (एक काम — जैसे ATM, कैलकुलेटर)।</p>
<p><b>(C) डेटा के प्रकार के अनुसार:</b></p>
<div style="overflow-x:auto"><table>
<tr><th>Analog</th><th>Digital</th><th>Hybrid</th></tr>
<tr><td>लगातार बदलती राशि (तापमान, दाब)</td><td>अंकों (0/1) में</td><td>दोनों का मेल</td></tr>
<tr><td>speedometer, thermometer</td><td>आज के सारे PC</td><td>ICU के monitor, पेट्रोल पंप</td></tr>
</table></div>
<div class="tk">🇮🇳 <b>भारत का सबसे पहला अपना कंप्यूटर — TIFRAC:</b> पूरा नाम <b>T</b>ata <b>I</b>nstitute of <b>F</b>undamental <b>R</b>esearch <b>A</b>utomatic <b>C</b>alculator। 1950 के दशक में <b>TIFR, मुंबई</b> में भारत में ही डिज़ाइन और बना पहला स्वदेशी कंप्यूटर — नाम ही उस संस्थान का है जिसने इसे बनाया। (नाम याद रखने का तरीक़ा: <b>TIFR + AC</b> = संस्थान + "Automatic Calculator"।)</div>
<div class="tr">⚠️ <b>ट्रैप:</b> भारत का पहला super computer <b>PARAM</b> (माइक्रो/मिनी नहीं); भारत का पहला micro <b>Siddhartha</b>; पहला mini <b>PDP-8</b>; भारत का पहला <b>स्वदेशी</b> कंप्यूटर <b>TIFRAC</b> (PARAM नहीं — PARAM पहला <i>super</i> है, पहला कंप्यूटर नहीं)। इन चारों को घुमाकर पूछा जाता है।</div>
</div>

<div class="blk"><h3>6️⃣ Block Diagram + Von Neumann Architecture</h3>
<div class="viz">
<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg">
 <rect x="6" y="52" width="72" height="36" rx="7" fill="#22d3ee" opacity=".2" stroke="#22d3ee"/>
 <text x="42" y="74" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">INPUT</text>
 <rect x="110" y="26" width="120" height="88" rx="7" fill="#ffc233" opacity=".14" stroke="#ffc233"/>
 <text x="170" y="20" text-anchor="middle" fill="#ffc233" font-size="10" font-weight="800">CPU</text>
 <rect x="120" y="34" width="100" height="22" rx="4" fill="#ff8c1a" opacity=".25" stroke="#ff8c1a"/><text x="170" y="49" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">CU (Control Unit)</text>
 <rect x="120" y="60" width="100" height="22" rx="4" fill="#ff4d5e" opacity=".22" stroke="#ff4d5e"/><text x="170" y="75" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">ALU</text>
 <rect x="120" y="86" width="100" height="22" rx="4" fill="#a855f7" opacity=".22" stroke="#a855f7"/><text x="170" y="101" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">Register</text>
 <rect x="262" y="52" width="78" height="36" rx="7" fill="#26d07c" opacity=".2" stroke="#26d07c"/>
 <text x="301" y="74" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">OUTPUT</text>
 <rect x="110" y="118" width="120" height="18" rx="4" fill="#8298b6" opacity=".2" stroke="#8298b6"/><text x="170" y="131" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">Memory (RAM)</text>
 <path d="M78 70 L108 70 M230 70 L260 70 M170 114 L170 116" stroke="#8298b6" stroke-width="1.6"/>
</svg>
</div>
<div class="tk">💡 <b>Von Neumann का विचार (stored program concept):</b> "program भी data की तरह <b>उसी memory</b> में रखो"। इससे पहले मशीन को दोबारा प्रोग्राम करने के लिए <b>तारें बदलनी</b> पड़ती थीं। आज का हर कंप्यूटर इसी पर चलता है।</div>
<div class="tk">🧠 <b>CPU (मस्तिष्क) के तीन हिस्से:</b><br>
<b>ALU</b> (Arithmetic Logic Unit) — जोड़-घटाव व तुलना (logic)।<br>
<b>CU</b> (Control Unit) — हुक्म चलाने वाला manager; ख़ुद हिसाब नहीं करता, सबको निर्देश देता है।<br>
<b>Register</b> — CPU के अंदर की सबसे तेज़, सबसे छोटी memory।<br>
CU + ALU मिलकर बनाते हैं <b>"heart/brain"</b>; PC (Program Counter), IR, Accumulator ज़रूरी registers हैं।</div>
<div class="tk">🧠 <b>Bus (डेटा की सड़कें):</b> <b>Data Bus</b> (data ले जाए), <b>Address Bus</b> (पता ले जाए — एकतरफ़ा), <b>Control Bus</b> (नियंत्रण संकेत)।</div>
<div class="tr">⚠️ <b>PYQ ट्रैप:</b> गणना ALU करता है, <b>CU नहीं</b> (नाम "control" देखकर CU मत चुनना)। Register CPU का हिस्सा है, अलग memory नहीं।</div>
</div>

<div class="blk"><h3>7️⃣ Input Devices — इंसान से मशीन तक का पुल</h3>
<p><b>ये हैं क्या और क्यों चाहिए?</b> तू हिन्दी/अंग्रेज़ी में सोचता है, मशीन सिर्फ़ 0-1 समझती है। <b>Input device</b> वह पुल है जो तेरी दुनिया की चीज़ (अक्षर, आवाज़, तस्वीर, छुअन) को मशीन के 0-1 में बदल देता है। बिना input device के कंप्यूटर एक बंद डिब्बा है — उसे बताने का कोई रास्ता ही नहीं।</p>
<div class="tk">🧠 <b>चार परिवार (काम के हिसाब से):</b><br>
<b>Keying</b> (टाइप करके) — Keyboard।<br>
<b>Pointing</b> (इशारा करके) — Mouse, Joystick, Light Pen, Touch screen।<br>
<b>Scanning</b> (पढ़कर) — MICR, OMR, OCR, BCR, Scanner।<br>
<b>Audio-Visual</b> (सुन/देखकर) — Mic, Web-cam।</div>
<p><b>अब चारों "पढ़ने वाले" यंत्र — असल में ये काम कैसे करते हैं (यहीं से PYQ बनते हैं):</b></p>
<div class="tk">🏦 <b>MICR (Magnetic Ink Character Recognition):</b> चेक के नीचे जो अजीब मोटे अंक छपे होते हैं, वे <b>चुम्बकीय स्याही</b> (आयरन ऑक्साइड) से, एक ख़ास <b>E-13B</b> फ़ॉन्ट में छपते हैं। मशीन उन्हें स्याही के <b>चुम्बकीय गुण</b> से पढ़ती है, आँख से नहीं।<br>
<b>बैंक इसी को क्यों चुनते हैं?</b> तीन वजहें — (1) चेक मुड़ा, मैला या उस पर मुहर लगी हो तब भी चुम्बकीय स्याही पढ़ी जाती है, (2) <b>फ़ोटोकॉपी में चुम्बकीय गुण नहीं आता</b>, इसलिए नक़ली चेक पकड़ा जाता है, (3) बहुत तेज़ — हज़ारों चेक प्रति घंटा। इसीलिए हर PYQ में "चेक = MICR"।</div>
<div class="tk">⭕ <b>OMR (Optical Mark Reader):</b> यह अक्षर <u>नहीं</u> पढ़ता — यह सिर्फ़ देखता है कि किसी तय जगह पर <b>निशान है या नहीं</b>। काम कैसे: उस जगह पर रोशनी डालता है; पेंसिल से भरा गोला रोशनी <b>सोख</b> लेता है (कम परावर्तन), ख़ाली जगह रोशनी <b>लौटा</b> देती है। इसी फ़र्क़ से "भरा/ख़ाली" तय होता है। इसीलिए तेरी परीक्षा की OMR शीट में गहरा भरने को कहा जाता है।</div>
<div class="tk">🔤 <b>OCR (Optical Character Recognition):</b> यह असल में <b>अक्षर की शक्ल पहचानता</b> है — छपे या लिखे अक्षर की तस्वीर लेकर उसे <b>संपादन योग्य text</b> में बदल देता है। मिसाल: किताब का पन्ना scan करके Word फ़ाइल बना लेना, या गाड़ी की नंबर-प्लेट पढ़ना।</div>
<div class="tk">📊 <b>BCR (Bar Code Reader):</b> काली-सफ़ेद पट्टियों की <b>चौड़ाई और दूरी</b> में संख्या छिपी होती है। Laser रोशनी डालकर लौटी रोशनी नापता है — काली पट्टी सोखती है, सफ़ेद लौटाती है। दुकान पर सामान का दाम इसी से आता है।</div>
<div style="overflow-x:auto"><table>
<tr><th>यंत्र</th><th>क्या पढ़ता है</th><th>कैसे</th><th>कहाँ</th></tr>
<tr><td><b>MICR</b></td><td>चुम्बकीय स्याही के अंक</td><td>चुम्बकीय गुण</td><td>⭐ बैंक चेक</td></tr>
<tr><td><b>OMR</b></td><td>निशान/गोला (है या नहीं)</td><td>रोशनी का परावर्तन</td><td>परीक्षा OMR शीट</td></tr>
<tr><td><b>OCR</b></td><td>अक्षर की शक्ल</td><td>आकृति पहचान</td><td>scan → text</td></tr>
<tr><td><b>BCR</b></td><td>पट्टियों की चौड़ाई</td><td>Laser परावर्तन</td><td>दुकान/सामान</td></tr>
</table></div>
<div class="tk">🧠 <b>Keying:</b> <b>Keyboard</b> — QWERTY layout (यह नाम ऊपर की पहली छह कुंजियों से आया), आम तौर पर <b>101/104</b> कुंजियाँ। इसमें Function keys (F1-F12), Alphanumeric, Numeric keypad, Navigation और Modifier (Shift/Ctrl/Alt) कुंजियाँ होती हैं।</div>
<div class="tk">🧠 <b>Pointing devices (इशारा करने वाले) — चारों का फ़र्क़:</b><br>
<b>Mouse</b> — घुमाओ तो परदे का cursor चले; आविष्कारक <b>Douglas Engelbart</b>। पुराना ball-mouse, आज optical (LED+sensor)।<br>
<b>Trackball</b> — <b>उल्टा mouse</b>: यहाँ पूरा यंत्र नहीं हिलता, सिर्फ़ ऊपर लगी <b>गेंद उँगली से घुमाई</b> जाती है। फ़ायदा — मेज़ पर जगह नहीं चाहिए, इसलिए तंग जगह/CAD/कुछ laptops में।<br>
<b>Joystick</b> — एक डंडी जिसे झुकाने पर उसी दिशा में गति होती है; games, विमान simulator, wheelchair नियंत्रण में।<br>
<b>Light Pen</b> — क़लम जैसा यंत्र जिसे सीधे <b>परदे पर छुआकर</b> चित्र बनाया या चुना जाता है (light sensor परदे की रोशनी पकड़ता है); design/CAD में।</div>
<div class="tk">🧠 <b>अन्य:</b> <b>Scanner</b> — काग़ज़ की तस्वीर लेकर डिजिटल बनाए (OCR के साथ मिलकर text भी)। <b>Web-cam</b> — चलती तस्वीर (video) इनपुट। <b>Microphone</b> — आवाज़ इनपुट। <b>Touch screen</b> ख़ास है — यह <b>input और output दोनों</b> है (दिखाता भी है, छुअन भी लेता है)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> <b>Mouse बनाम Trackball</b> — mouse में <b>पूरा यंत्र</b> हिलता है, trackball में सिर्फ़ <b>गेंद</b> (यंत्र स्थिर रहता है)। "उल्टा mouse" कहा जाए तो जवाब <b>Trackball</b>। और <b>Touch screen</b> = इकलौता आम यंत्र जो input+output दोनों है।</div>
<div class="tr">⚠️ <b>RSSB Trap (Q34):</b> "बैंक में चेक की भारी मात्रा" → हमेशा <b>MICR</b>। OCR चुन लेना सबसे आम ग़लती है — OCR सामान्य छपे अक्षर पढ़ता है, चुम्बकीय स्याही नहीं। मंत्र: <b>"चेक = MICR, गोले = OMR, अक्षर = OCR, पट्टी = BCR"</b>।</div>
</div>

<div class="blk"><h3>8️⃣ Output Devices + Printers</h3>
<p><b>Output के प्रकार:</b> <b>Soft copy</b> (monitor, speaker — अस्थायी) और <b>Hard copy</b> (printer, plotter — कागज़ पर स्थायी)।</p>
<div style="overflow-x:auto"><table>
<tr><th>Impact (ठोकर मारे)</th><th>Non-Impact (छुए बिना)</th></tr>
<tr><td>Dot Matrix, Daisy Wheel, <b>Line printer</b> (Drum/Chain), Barrel</td><td>Inkjet, <b>Laser (Page printer)</b>, Thermal</td></tr>
<tr><td>शोर करते हैं; carbon copy बनती है; सस्ती छपाई</td><td>चुप; बढ़िया क्वालिटी; महँगी</td></tr>
</table></div>
<div class="tk">🧠 <b>छपाई की इकाई के हिसाब से:</b> <b>Character printer</b> (एक-एक अक्षर — Dot Matrix, Daisy) → <b>Line printer</b> (एक-एक लाइन — Drum, Chain) → <b>Page printer</b> (पूरा पन्ना — <b>Laser</b>)।<br>
🧠 Monitor की गुणवत्ता = <b>resolution</b> (pixels); CRT (पुराना, भारी), LCD/LED (पतला)।</div>
<div class="tr">⚠️ <b>PYQ (Q66):</b> "line printer और page printer क्रमशः?" → <b>Drum/Chain = line</b>, <b>Laser = page</b>। Plotter बड़े नक़्शे/इंजीनियरिंग drawing छापता है।</div>
</div>

<div class="blk"><h3>9️⃣ Memory — पूरा पिरामिड</h3>
<div class="viz">
<svg viewBox="0 0 380 150" xmlns="http://www.w3.org/2000/svg">
 <polygon points="190,6 240,36 140,36" fill="#ff4d5e" opacity=".3" stroke="#ff4d5e"/>
 <text x="190" y="30" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">Register</text>
 <polygon points="140,38 240,38 265,68 115,68" fill="#ff8c1a" opacity=".3" stroke="#ff8c1a"/>
 <text x="190" y="60" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">Cache (L1/L2/L3)</text>
 <polygon points="115,70 265,70 290,100 90,100" fill="#ffc233" opacity=".3" stroke="#ffc233"/>
 <text x="190" y="92" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">RAM (Primary)</text>
 <polygon points="90,102 290,102 315,138 65,138" fill="#26d07c" opacity=".3" stroke="#26d07c"/>
 <text x="190" y="124" text-anchor="middle" fill="#fff" font-size="10" font-weight="800">HDD / SSD (Secondary)</text>
 <text x="18" y="40" fill="#ff4d5e" font-size="9">तेज़/महँगा ⬆</text>
 <text x="18" y="132" fill="#26d07c" font-size="9">सस्ता/बड़ा ⬇</text>
</svg>
</div>
<p><b>तीन बड़ी श्रेणियाँ:</b> <b>Primary</b> (RAM/ROM — CPU सीधे पहुँचे), <b>Secondary</b> (HDD/SSD/pen drive — स्थायी, बड़ी), <b>Cache/Register</b> (सबसे तेज़)।</p>
<div style="overflow-x:auto"><table>
<tr><th>RAM (Random Access)</th><th>ROM (Read Only)</th></tr>
<tr><td><b>Volatile</b> — बिजली गई, सब गया</td><td><b>Non-volatile</b> — पक्का</td></tr>
<tr><td>पढ़ो + लिखो; अस्थायी working memory</td><td>मुख्यतः सिर्फ़ पढ़ो; BIOS यहीं</td></tr>
<tr><td><b>SRAM</b> (Static — refresh नहीं, तेज़, cache), <b>DRAM</b> (Dynamic — refresh चाहिए, सस्ती, main)</td><td><b>PROM</b> (एक बार लिखो), <b>EPROM</b> (UV से मिटे), <b>EEPROM</b> (बिजली से मिटे)</td></tr>
</table></div>
<div class="tk">🧠 <b>Cache क्यों?</b> CPU बहुत तेज़, RAM धीमी। बीच में छोटी-पर-बहुत-तेज़ <b>Cache</b> रखी गई — इकलौता मक़सद: <b>CPU और memory की रफ़्तार का फ़र्क़ घटाना</b> (PYQ Q87)।<br>
🧠 <b>SRAM बनाम DRAM:</b> "Static = स्थिर (refresh नहीं, महँगी, cache); Dynamic = दौड़ती रहे (बार-बार refresh, सस्ती, RAM)।"</div>
<div class="tk">🧠 <b>Secondary storage:</b> HDD (चुंबकीय, घूमती plate), SSD (flash, बिना part, तेज़), Optical (CD 700MB / DVD 4.7GB / Blu-ray 25GB), Pen drive (flash)।<br>
<b>Access:</b> RAM = direct/random; Magnetic tape = sequential (क्रम से)।</div>
<p><b>मापन की इकाइयाँ (छोटे→बड़े):</b></p>
<div class="tk">1 Bit → 4 bit = <b>Nibble</b> → 8 bit = <b>Byte</b> → KB → MB → GB → <b>TB → PB (Peta)</b> → EB → ZB → YB<br>
🧠 <b>ट्रिक — "किमी गया, टीपीई ज़ेड-वाय":</b> K, M, G, T, P, E, Z, Y। (1 KB = 1024 byte = 2¹⁰)</div>
<p><b>पूरा नाम और सही गणना — यहीं से नंबर कटते हैं:</b> ऊपर की सीढ़ी सिर्फ़ <i>क्रम</i> बताती है। परीक्षा सीधे <b>"1 Petabyte = ?"</b> पूछती है, इसलिए दो बातें पक्की करो — (1) हर संक्षिप्त नाम का <b>पूरा रूप</b>, (2) हर सीढ़ी पर गुणा <b>हमेशा 1024</b> का।</p>
<div class="tk">🧮 <b>सुनहरा नियम:</b> सीढ़ी की <b>हर</b> छलाँग = <b>× 1024</b> (= 2¹⁰)। यानी 1 MB = 1024 KB, 1 GB = 1024 MB, 1 TB = 1024 GB, <b>1 PB = 1024 TB</b> — नियम एक ही है, सिर्फ़ नाम बदलता है।<br>
1024 ही क्यों, 1000 क्यों नहीं? क्योंकि कंप्यूटर <b>binary (2 का पहाड़ा)</b> गिनता है, दहाई का नहीं — और 2¹⁰ = 1024 ही 1000 के सबसे पास पड़ता है।</div>
<div style="overflow-x:auto"><table>
<tr><th>संक्षिप्त</th><th>पूरा नाम</th><th>बराबर है</th><th>घात</th></tr>
<tr><td>B</td><td><b>Byte</b></td><td>8 bit</td><td>2³ bit</td></tr>
<tr><td><b>KB</b></td><td><b>Kilobyte</b></td><td>1024 Byte</td><td>2¹⁰ B</td></tr>
<tr><td><b>MB</b></td><td><b>Megabyte</b></td><td>1024 KB</td><td>2²⁰ B</td></tr>
<tr><td><b>GB</b></td><td><b>Gigabyte</b></td><td>1024 MB</td><td>2³⁰ B</td></tr>
<tr><td><b>TB</b></td><td><b>Terabyte</b></td><td>1024 GB</td><td>2⁴⁰ B</td></tr>
<tr><td><b>PB</b></td><td><b>Petabyte</b></td><td><b>1024 TB</b></td><td>2⁵⁰ B</td></tr>
<tr><td>EB</td><td><b>Exabyte</b></td><td>1024 PB</td><td>2⁶⁰ B</td></tr>
<tr><td>ZB</td><td><b>Zettabyte</b></td><td>1024 EB</td><td>2⁷⁰ B</td></tr>
<tr><td>YB</td><td><b>Yottabyte</b></td><td>1024 ZB</td><td>2⁸⁰ B</td></tr>
</table></div>
<div class="tr">⚠️ <b>RSSB Trap:</b> प्रश्न <b>पूरे नाम</b> से आता है ("1 Petabyte बराबर है?") पर विकल्प भी पूरे नाम में होते हैं — <b>1 PB = 1024 Terabyte</b>, 1024 Gigabyte नहीं। एक सीढ़ी ऊपर-नीचे खिसकना सबसे आम ग़लती है। दूसरा जाल: क्रम पूछें (Kilobyte → Gigabyte → Petabyte) तो <b>Mega/Tera बीच में छूटे हुए</b> होते हैं — फिर भी क्रम <b>बढ़ता हुआ</b> ही है, विकल्प देखकर घबराना नहीं।</div>
<div class="tr">⚠️ <b>PYQ:</b> सबसे तेज़ = <b>Register</b> (Cache नहीं!)। सबसे बड़ी दी गई इकाई पहचानो (Q17)। SD = Secure Digital, MMC = MultiMedia Card (Q28)।</div>
</div>

<div class="blk"><h3>🔟 Number System — पूरी गहराई</h3>
<div style="overflow-x:auto"><table>
<tr><th>पद्धति</th><th>Base</th><th>अंक</th></tr>
<tr><td><b>Binary</b></td><td>2</td><td>0,1</td></tr>
<tr><td><b>Octal</b></td><td>8</td><td>0-7</td></tr>
<tr><td><b>Decimal</b></td><td>10</td><td>0-9</td></tr>
<tr><td><b>Hexadecimal</b></td><td>16</td><td>0-9, A-F</td></tr>
</table></div>
<div class="tk">🧠 <b>बदलने के नियम:</b><br>
• किसी भी base → <b>Decimal</b>: हर अंक × (base के घात)।<br>
• Decimal → किसी base: बार-बार भाग दो, <b>शेषफल नीचे से ऊपर</b> पढ़ो।<br>
• Binary ↔ Octal: <b>3-3 बिट</b> के गुच्छे (8=2³)। Binary ↔ Hex: <b>4-4 बिट</b> (16=2⁴)।<br>
• Octal ↔ Hex: सीधे नहीं — <b>बीच में Binary</b> से जाओ।</div>
<p><b>Complement (ऋणात्मक संख्या के लिए):</b> 1's complement = हर bit उल्टो। 2's complement = 1's complement + 1 (सबसे प्रचलित, क्योंकि जोड़-घटाव एक ही circuit से)।</p>
<p style="font-size:.8rem;color:var(--dim)">नीचे converter में हर क़दम देख — जवाब नहीं, <b>तरीक़ा</b>।</p>
<div class="sqlLab">
  <div class="nsBar">
    <input id="nsIn" class="nsIn" value="356" spellcheck="false">
    <select id="nsFrom" class="nsSel"><option value="2">Binary</option><option value="8" selected>Octal</option><option value="10">Decimal</option><option value="16">Hex</option></select>
    <span style="color:var(--dim)">→</span>
    <select id="nsTo" class="nsSel"><option value="2">Binary</option><option value="8">Octal</option><option value="10">Decimal</option><option value="16" selected>Hex</option></select>
  </div>
  <div class="sqlBar"><button class="sqlBtn go" onclick="nsRun()">▶ बदलो</button></div>
  <div class="sqlChips">
    <button class="sqlChip" onclick="nsDemo('356',8,16)">(356)₈ → Hex — असली PYQ</button>
    <button class="sqlChip" onclick="nsDemo('11111111',2,10)">(11111111)₂ → Dec</button>
    <button class="sqlChip" onclick="nsDemo('255',10,16)">255 → Hex</button>
    <button class="sqlChip" onclick="nsDemo('1010',2,16)">(1010)₂ → Hex</button>
  </div>
  <div id="nsOut" class="sqlOut"></div>
  <div class="ribHead" style="margin-top:10px;border-top:1px solid var(--line);padding-top:9px">
    <div id="nsAsk" class="ribAsk">🎯 ख़ुद हल कर के देख — "चैलेंज दे" दबा।</div>
    <div class="nsBar" style="margin-top:7px">
      <input id="nsAns" class="nsIn" placeholder="जवाब लिख..." spellcheck="false">
      <button class="sqlBtn go" onclick="nsCheck()">✓ जाँच</button>
    </div>
    <div class="sqlBar">
      <button class="sqlBtn" onclick="labNext('ns')">🎯 चैलेंज दे</button>
      <button class="sqlBtn" onclick="labSkip('ns')">🤷 जवाब दिखा</button>
      <span id="nsScore" class="ribScore">स्कोर: 0</span>
    </div>
    <div id="nsFb" class="ribFb"></div>
  </div>
</div>
<div class="tr">⚠️ <b>PYQ Q68 (हूबहू):</b> (356)₈ = (EE)₁₆ — बीच में binary से जाओ (3-3 बिट तोड़ो, फिर 4-4 बिट जोड़ो)।</div>
</div>

<div class="blk"><h3>1️⃣1️⃣ Codes — अक्षरों को 0-1 में लिखने की भाषा</h3>
<p><b>समस्या (Why):</b> Memory में सिर्फ़ 0 और 1 रह सकते हैं। तो जब तू 'A' टाइप करता है, वह अंदर क्या बनकर बैठता है? कोई तय <b>समझौता</b> चाहिए कि "यह वाला bit-pattern = A"। यही समझौता <b>Code</b> कहलाता है। और यह समझौता <u>सबका एक जैसा</u> होना ज़रूरी है — वरना तेरे कंप्यूटर का 'A' दूसरे कंप्यूटर पर कुछ और दिखेगा।</p>
<div class="tk">🔤 <b>ASCII</b> (American Standard Code for Information Interchange) — सबसे प्रचलित। <b>7 बिट</b> का, इसलिए 2⁷ = <b>128 अक्षर</b> (0-127) रख सकता है। Extended ASCII <b>8 बिट</b> का = 256 अक्षर।<br>
<b>पक्के मान (रट लो):</b> 'A' = <b>65</b> • 'a' = <b>97</b> • '0' = <b>48</b> • space = 32 • Enter = 13।<br>
🧠 <b>ट्रिक:</b> बड़े और छोटे अक्षर में फ़र्क़ हमेशा <b>32</b> का (65 + 32 = 97)। इसीलिए अगर A=65 याद है तो a अपने आप निकल आएगा। और अंक '0' का मान 48 है — यानी अक्षर '5' का ASCII 53 होगा (48+5)।</div>
<div class="tk">🏢 <b>EBCDIC</b> (Extended Binary Coded Decimal Interchange Code) — <b>8 बिट</b> का, <b>IBM</b> का अपना बनाया हुआ, सिर्फ़ IBM <b>mainframe</b> में चलता है। ASCII से मुक़ाबले में हार गया, पर परीक्षा में इसका नाम इसी "IBM mainframe" के साथ आता है।</div>
<div class="tk">🔢 <b>BCD</b> (Binary Coded Decimal) — इसका तरीक़ा अलग है: यह पूरी संख्या को binary में नहीं बदलता, बल्कि <b>हर दशमलव अंक को अलग-अलग</b> 4 बिट में लिखता है।<br>
<b>मिसाल:</b> 59 को —<br>
• सामान्य binary में: 111011<br>
• <b>BCD</b> में: 5 = 0101 और 9 = 1001 → <b>0101 1001</b><br>
<b>फ़ायदा:</b> इंसान के पढ़ने/दिखाने में आसान (calculator, digital घड़ी के display में यही)। <b>नुक़सान:</b> जगह ज़्यादा लेता है और 4 बिट में 10 से 15 वाले 6 pattern बेकार चले जाते हैं।</div>
<div class="tk">🌏 <b>Unicode</b> — ASCII की सबसे बड़ी कमी यह थी कि 128/256 खानों में दुनिया की सारी भाषाएँ आ ही नहीं सकतीं (हिन्दी, चीनी, अरबी कहाँ जाएँ?)। <b>Unicode</b> (16+ बिट) ने हर भाषा के हर अक्षर को अपना अनोखा नंबर दे दिया — इसीलिए आज तू फ़ोन पर हिन्दी टाइप कर पाता है। <i>यह पूरा app जो देवनागरी में दिख रहा है, वह Unicode की ही देन है।</i></div>
<div class="tk">🔘 <b>Gray Code</b> — इसकी ख़ासियत सिर्फ़ एक नियम है: एक संख्या से अगली पर जाने में <b>सिर्फ़ 1 bit बदलता है</b>।<br>
मिसाल: 0 → 000, 1 → 001, 2 → 011, 3 → 010 (हर बार एक ही bit बदला)।<br>
<b>यह चाहिए ही क्यों?</b> सामान्य binary में 3 (011) से 4 (100) जाते समय <b>तीनों</b> bit एक साथ बदलते हैं। असली circuit में सब bit ठीक एक ही पल में नहीं बदलते — बीच में पल भर के लिए कोई ग़लत संख्या बन सकती है। Gray code में एक ही bit बदलता है, इसलिए यह ग़लती संभव ही नहीं। इसीलिए घूमने वाले sensor/encoder में इसका उपयोग होता है।</div>
<div style="overflow-x:auto"><table>
<tr><th>Code</th><th>bits</th><th>ख़ास पहचान</th><th>कहाँ</th></tr>
<tr><td><b>ASCII</b></td><td>7 (ext. 8)</td><td>128/256 अक्षर; A=65, a=97, 0=48</td><td>सबसे प्रचलित</td></tr>
<tr><td><b>EBCDIC</b></td><td>8</td><td>IBM का अपना</td><td>IBM mainframe</td></tr>
<tr><td><b>BCD</b></td><td>4 प्रति अंक</td><td>हर अंक अलग-अलग</td><td>calculator, display</td></tr>
<tr><td><b>Unicode</b></td><td>16+</td><td>हर भाषा (हिन्दी भी)</td><td>आज का हर device</td></tr>
<tr><td><b>Gray</b></td><td>—</td><td>एक बार में सिर्फ़ 1 bit बदले</td><td>sensor/encoder</td></tr>
</table></div>
<div class="tr">⚠️ <b>RSSB Trap:</b> ASCII = <b>7 बिट</b> (extended 8), EBCDIC = <b>8 बिट</b> — इन दोनों की bit-संख्या उलट देना आम ग़लती। और <b>EBCDIC हमेशा IBM mainframe</b> के साथ जोड़कर याद रख।</div>
</div>

<div class="blk"><h3>1️⃣2️⃣ Software + Booting</h3>
<div style="overflow-x:auto"><table>
<tr><th>System Software</th><th>Application Software</th></tr>
<tr><td>मशीन को <b>चलाता</b> है</td><td>तेरा <b>काम</b> करता है</td></tr>
<tr><td>OS, Compiler, Assembler, Interpreter, Device Driver, Utility, Linker, Loader</td><td>MS Word, Excel, Photoshop, Browser, Games, Tally</td></tr>
</table></div>
<div class="tk">🧠 <b>Translators:</b> <b>Compiler</b> (पूरा प्रोग्राम एक बार में — तेज़, सारी errors एक साथ), <b>Interpreter</b> (लाइन-दर-लाइन — धीमा, पहली error पर रुके), <b>Assembler</b> (assembly → machine)।<br>
🧠 <b>Firmware</b> = ROM में बैठा software (BIOS)। <b>Utility</b> = antivirus, disk cleanup। <b>Open source</b> = Linux; <b>Proprietary</b> = Windows।</div>
<div class="tk">🧠 <b>Booting:</b> मशीन चालू होकर OS को RAM में लाने की प्रक्रिया। <b>Cold boot</b> = बंद से चालू। <b>Warm boot</b> = चलते-चलते restart (Ctrl+Alt+Del)। छोटा <b>bootstrap loader</b> ROM में बैठा रहता है।</div>
<div class="tr">⚠️ <b>PYQ (Q14):</b> "कौन-सा system software नहीं है?" → MS Word/Excel जैसा application। Compiler, Assembler, OS, Driver — सब system software।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
📊 Data (कच्चा, अर्थहीन) → Information (संसाधित, अर्थपूर्ण) → Knowledge → Wisdom<br>
🏛️ Babbage = Father of Computer | Difference (1821) + Analytical (1832, IPO) | Punch card = 80 byte<br>
🕰️ पीढ़ी: <b>वो-ट्रां-इंटी-माइक्रो-AI</b> | Intel 4004 पहला µP | IC = Jack Kilby<br>
💻 पहला micro Altair (भारत: Siddhartha) | पहला mini PDP-8 | Mainframe IBM 1963 (EBCDIC) | भारत सुपर PARAM<br>
🖥️ CPU = ALU (हिसाब) + CU (हुक्म) + Register (सबसे तेज़) | Von Neumann = stored program<br>
🏦 चेक = <b>MICR</b> | गोले = OMR | अक्षर = OCR | Laser = Page printer, Drum = Line printer<br>
⚡ Cache = रफ़्तार का पुल | RAM volatile, ROM non-volatile | SRAM स्थिर, DRAM refresh<br>
📏 4bit=Nibble, 8bit=Byte, K-M-G-<b>T-P</b>-E-Z-Y | सबसे तेज़ = Register<br>
🧮 (356)₈ = <b>(EE)₁₆</b> (बीच में binary) | 2's complement = ऋणात्मक<br>
🔤 ASCII: A=65, a=97, 0=48 | EBCDIC 8-bit IBM | Unicode = हर भाषा<br>
💿 System sw = OS/Compiler/Assembler/Driver | Application = MS Word | bootstrap ROM में
</div>
</div>
`;


CARDS.p2foc = [
  ['[रिकॉल] बैंक में चेक की भारी मात्रा पढ़ने के लिए कौन-सी तकनीक?', 'MICR — Magnetic Ink Character Recognition।', 'चेक = MICR'],
  ['[रिकॉल] Cache memory क्यों बनाई गई?', 'CPU और मुख्य memory की रफ़्तार के फ़र्क़ को घटाने के लिए।', 'बीच का पुल'],
  ['[रिकॉल] Von Neumann का मुख्य विचार क्या था?', 'Stored Program Concept — program भी data की तरह उसी memory में रखो।', 'प्रोग्राम भी डेटा'],
  ['[रिवर्स रिकॉल] "Vacuum Tube, ENIAC, UNIVAC-I" — यह कौन-सी पीढ़ी है?', 'पहली पीढ़ी (1st Generation, 1940-56)।', 'ट्यूब = पहली'],
  ['[रिवर्स रिकॉल] "पूरा पन्ना एक साथ छापता है, non-impact है" — कौन-सा printer?', 'Laser printer (Page printer)।', 'लेज़र = पन्ना'],
  ['[रिक्त स्थान] 4 bit = 1 ______ और 8 bit = 1 ______।', 'Nibble; Byte', 'निबल आधा बाइट'],
  ['[रिक्त स्थान] SD का पूरा नाम ______ और MMC का ______ है।', 'Secure Digital; MultiMedia Card', 'SD-MMC'],
  ['[कथन आधारित] कथन: Compiler एक application software है। सही या ग़लत?', 'ग़लत। Compiler, Assembler, Interpreter, OS और Device Driver — सब System Software हैं।', 'अनुवादक = सिस्टम'],
  ['[कथन आधारित] कथन: ROM volatile memory है।', 'ग़लत। ROM non-volatile है (बिजली जाने पर भी बचा रहता है)। RAM volatile है।', 'RAM उड़ जाए'],
  ['[मैच] मिलाओ: (a) MICR (b) OMR (c) OCR (d) BCR', '(a) बैंक चेक, (b) OMR शीट के गोले, (c) छपे अक्षर→text, (d) बार कोड।', 'चारों पढ़ने वाले'],
  ['[मैच] मिलाओ: (a) ALU (b) CU (c) Register (d) Cache', '(a) हिसाब व तुलना, (b) हुक्म चलाना, (c) सबसे तेज़ छोटी memory, (d) CPU-RAM रफ़्तार का पुल।', 'CPU का परिवार'],
  ['[मैच] मिलाओ: (a) SRAM (b) DRAM (c) EPROM (d) Firmware', '(a) तेज़, refresh नहीं, cache में; (b) refresh चाहिए, main memory; (c) UV से मिटती है; (d) ROM में बैठा software (BIOS)।', 'मेमोरी का कुनबा'],
  ['[तुलना] Compiler और Interpreter में फ़र्क़?', 'Compiler पूरा प्रोग्राम एक बार में अनुवाद करता है (तेज़ execution, सारी errors एक साथ)। Interpreter लाइन-दर-लाइन चलता है (धीमा, पहली error पर रुक जाता है)।', 'किताब बनाम दुभाषिया'],
  ['[तुलना] Impact और Non-Impact printer में फ़र्क़ + दो-दो मिसाल?', 'Impact कागज़ पर ठोकर मारता है (Dot Matrix, Line printer) — शोर, कार्बन कॉपी। Non-Impact छुए बिना छापता है (Laser, Inkjet) — चुप, बढ़िया क्वालिटी।', 'ठोकर बनाम छुअन'],
  ['[तुलना] Cold Boot और Warm Boot?', 'Cold boot = बंद मशीन को चालू करना। Warm boot = चलते-चलते restart (Ctrl+Alt+Del)।', 'ठंडा=बंद से'],
  ['[कालक्रम] पाँच पीढ़ियों की तकनीक क्रम से लिखो।', 'Vacuum Tube → Transistor → IC → Microprocessor → AI/ULSI।', 'वो-ट्रां-इंटी-माइक्रो-AI'],
  ['[कालक्रम] Storage इकाइयाँ छोटे से बड़े क्रम में (KB के बाद)?', 'KB → MB → GB → TB → PB → EB → ZB → YB।', 'किमी गया टीपी'],
  ['[Code Output] (1010)₂ को decimal में बदलो — क़दम दिखाओ।', '8+0+2+0 = 10। (1×2³ + 0×2² + 1×2¹ + 0×2⁰)', 'जगह की क़ीमत'],
  ['[Code Output] (356)₈ = (?)₁₆', 'EE। पहले octal→binary (3=011, 5=101, 6=110) = 011101110; फिर 4-4 बिट: 1110 1110 = EE।', 'बीच में binary'],
  ['[True/False] IBM 1401 पहली पीढ़ी का कंप्यूटर है।', 'False। IBM 1401 transistor आधारित है — दूसरी पीढ़ी। पहली पीढ़ी = ENIAC, EDVAC, UNIVAC-I, Mark-I।', 'IBM 1401 = दूसरी'],
  ['[True/False] Control Unit (CU) गणना (calculation) करता है।', 'False। गणना ALU करता है। CU सिर्फ़ निर्देश देता/नियंत्रित करता है।', 'CU बॉस, ALU मज़दूर'],
  ['[ट्रैप कार्ड] सबसे तेज़ memory कौन-सी है — Cache या Register?', 'Register! क्रम है: Register > Cache > RAM > HDD। लोग Cache लिख आते हैं।', 'रजिस्टर सबसे ऊपर'],
  ['[ट्रैप कार्ड] Octal से Hex में सीधे बदल सकते हैं?', 'नहीं — बीच में Binary (या Decimal) से गुज़रना पड़ता है, क्योंकि 8 और 16 में सीधा गुच्छा-सम्बन्ध नहीं है।', 'बिना पुल नहीं'],
  ['[ट्रैप कार्ड] OMR और OCR — चेक कौन पढ़ता है?', 'दोनों नहीं! चेक MICR पढ़ता है। OMR गोले पढ़ता है, OCR छपे अक्षर।', 'चेक = चुम्बकीय स्याही']
];

QB.p2foc = [
  { q: 'बैंकिंग उद्योग में चेकों की भारी मात्रा को संभालने के लिए निम्न में से किसका प्रयोग किया जाता है?', o: ['OCR', 'OMR', 'MICR', 'Bar Code Reader'], a: 2, e: 'MICR (Magnetic Ink Character Recognition) चेक के नीचे चुम्बकीय स्याही से छपे अंकों को तेज़ी से पढ़ता है — इसीलिए बैंक इसी का प्रयोग करते हैं।', trap: 'OCR चुन लेना — वो सामान्य छपे अक्षर पढ़ता है, चुम्बकीय स्याही नहीं।', d: 1, tag: 'Input Devices', pyq: 'Paper-II Q34 — हूबहू' },
  { q: '(356)₈ = (x)₁₆ हो, तो x का मान क्या है?', o: ['EE', 'FE', 'E6', '1AE'], a: 0, e: 'पहले octal को binary में: 3=011, 5=101, 6=110 → 011101110। अब दाईं ओर से 4-4 बिट: 1110 1110 → E E। इसलिए x = EE।', trap: 'Octal से सीधे Hex बदलने की कोशिश — यह चलता ही नहीं, बीच में binary चाहिए।', d: 3, tag: 'Number System', pyq: 'Paper-II Q68 — हूबहू' },
  { q: 'निम्न में से कौन-सा system software नहीं है?', o: ['Compiler', 'Device Driver', 'MS PowerPoint', 'Assembler'], a: 2, e: 'MS PowerPoint एक application software है — यह उपयोगकर्ता का काम करता है। Compiler, Assembler और Device Driver मशीन को चलाने वाले system software हैं।', trap: 'Compiler को application मान लेना — वो अनुवादक है, यानी system software।', d: 1, tag: 'Software', pyq: 'Paper-II Q14 — हूबहू' },
  { q: 'Cache memory का मुख्य उद्देश्य क्या है?', o: ['स्थायी रूप से डेटा सहेजना', 'CPU और मुख्य memory की गति के अंतर को कम करना', 'बिजली की खपत घटाना', 'हार्ड डिस्क का आकार बढ़ाना'], a: 1, e: 'CPU बहुत तेज़ है और RAM उसकी तुलना में धीमी। बीच में छोटी-पर-बहुत-तेज़ cache रखकर यह अंतर घटाया जाता है।', trap: '"स्थायी रूप से सहेजना" चुन लेना — cache volatile है, storage नहीं।', d: 2, tag: 'Memory', pyq: 'Paper-II Q87 — हूबहू' },
  { q: 'निम्न में से कौन-सा प्रथम पीढ़ी का कंप्यूटर नहीं है?', o: ['ENIAC', 'EDVAC', 'UNIVAC-I', 'IBM 1401'], a: 3, e: 'IBM 1401 transistor पर आधारित है, इसलिए वह दूसरी पीढ़ी का है। ENIAC, EDVAC और UNIVAC-I vacuum tube वाले प्रथम पीढ़ी के कंप्यूटर हैं।', trap: 'IBM का नाम देखकर उसे पुराना (पहली पीढ़ी) मान लेना।', d: 2, tag: 'Generations', pyq: 'Paper-II Q92 — हूबहू' },
  { q: 'निम्न में से क्रमशः line printer और page printer कौन-से हैं?', o: ['Laser और Drum', 'Drum और Laser', 'Inkjet और Dot Matrix', 'Dot Matrix और Inkjet'], a: 1, e: 'Drum/Chain printer एक बार में पूरी लाइन छापता है (impact)। Laser printer पूरा पन्ना एक साथ बनाता है (non-impact) — इसीलिए उसे page printer कहते हैं।', trap: 'Laser को line printer मान लेना — वो तो पूरा पन्ना छापता है।', d: 2, tag: 'Output Devices', pyq: 'Paper-II Q66 — हूबहू' },
  { q: 'निम्न में से सबसे बड़ी storage इकाई कौन-सी है?', o: ['Terabyte', 'Gigabyte', 'Petabyte', 'Megabyte'], a: 2, e: 'क्रम है — KB < MB < GB < TB < PB < EB < ZB < YB। इसलिए इनमें Petabyte सबसे बड़ी है।', trap: 'Terabyte चुन लेना, क्योंकि वही सबसे ज़्यादा सुना हुआ नाम है।', d: 1, tag: 'Memory Units', pyq: 'Paper-II Q17 — हूबहू' },
  { q: 'Memory card के संदर्भ में SD और MMC का पूरा नाम क्रमशः है —', o: ['Secure Data और Multi Memory Card', 'Secure Digital और MultiMedia Card', 'Standard Disk और Micro Memory Card', 'Solid Drive और Multi Media Chip'], a: 1, e: 'SD = Secure Digital, MMC = MultiMedia Card। दोनों flash आधारित हटाए जा सकने वाले storage हैं।', trap: '"Secure Data" सुनने में सही लगता है, पर असली नाम Secure Digital है।', d: 2, tag: 'Storage', pyq: 'Paper-II Q28 — हूबहू' },
  { q: 'निम्न में से सबसे तेज़ memory कौन-सी है?', o: ['Cache', 'Register', 'RAM', 'SSD'], a: 1, e: 'गति का क्रम है — Register > Cache > RAM > SSD > HDD। Register CPU के अंदर ही होते हैं, इसलिए सबसे तेज़।', trap: 'Cache चुन लेना — वो तेज़ ज़रूर है, पर Register उससे भी तेज़ है।', d: 2, tag: 'Memory', pyq: 'हर practice book में' },
  { q: 'SRAM और DRAM के बारे में सही कथन कौन-सा है?', o: ['SRAM को बार-बार refresh करना पड़ता है', 'DRAM तेज़ है और cache में प्रयोग होती है', 'SRAM तेज़ व महँगी है और cache में प्रयोग होती है, जबकि DRAM को refresh चाहिए', 'दोनों non-volatile हैं'], a: 2, e: 'SRAM (Static) को refresh नहीं चाहिए, वह तेज़ व महँगी है — इसलिए cache में। DRAM (Dynamic) को लगातार refresh चाहिए, सस्ती है — इसलिए main memory में। दोनों volatile हैं।', trap: 'Static और Dynamic के गुण आपस में उलट देना।', d: 3, tag: 'Memory', pyq: 'LT Grade आधारित' },
  { q: 'Von Neumann architecture की सबसे प्रमुख विशेषता क्या है?', o: ['Stored Program Concept', 'Parallel Processing', 'Cloud Storage', 'Quantum Computing'], a: 0, e: 'Von Neumann ने कहा कि program को भी data की तरह उसी memory में रखा जाए। इससे पहले मशीन को दोबारा प्रोग्राम करने के लिए तारें बदलनी पड़ती थीं।', trap: 'Parallel Processing चुन लेना — वो बाद की अवधारणा है।', d: 2, tag: 'Architecture', pyq: 'वैचारिक — आधार' },
  { q: 'CPU का कौन-सा भाग गणितीय और तार्किक संक्रियाएँ करता है?', o: ['Control Unit', 'ALU', 'Register', 'Cache'], a: 1, e: 'ALU (Arithmetic Logic Unit) जोड़-घटाव और तुलना करता है। Control Unit सिर्फ़ निर्देशों को नियंत्रित करता है — वह ख़ुद गणना नहीं करता।', trap: 'Control Unit चुन लेना, क्योंकि नाम में "control" है।', d: 1, tag: 'CPU', pyq: 'आधारभूत — बार-बार' },
  { q: '4 bit के समूह को क्या कहते हैं?', o: ['Byte', 'Nibble', 'Word', 'Character'], a: 1, e: '4 bit = 1 Nibble (आधा byte)। 8 bit = 1 Byte।', trap: 'Byte चुन लेना — वो 8 bit का होता है।', d: 1, tag: 'Number System', pyq: 'सामान्य' },
  { q: '(11111111)₂ का दशमलव मान क्या है?', o: ['127', '255', '256', '128'], a: 1, e: '8 बिट सब 1 होने पर मान 2⁸ − 1 = 255 होता है। यही एक byte का अधिकतम मान है (0 से 255 तक कुल 256 मान)।', trap: '256 चुन लेना — 256 कुल संख्या है, अधिकतम मान 255 है।', d: 2, tag: 'Number System', pyq: 'सामान्य' },
  { q: 'चलते हुए कंप्यूटर को Ctrl+Alt+Del से restart करना क्या कहलाता है?', o: ['Cold Booting', 'Warm Booting', 'Hard Booting', 'Fast Booting'], a: 1, e: 'Warm boot = मशीन पहले से चालू है और उसे restart किया जाता है। Cold boot = पूरी तरह बंद मशीन को चालू करना।', trap: 'Cold और Warm उलट देना — बंद मशीन "ठंडी" होती है।', d: 2, tag: 'Booting', pyq: '1000 MCQs Q49 आधारित' },
  { q: 'Compiler और Interpreter के बीच सही अंतर कौन-सा है?', o: ['Interpreter पूरा प्रोग्राम एक साथ अनुवाद करता है', 'Compiler पूरा प्रोग्राम एक बार में अनुवाद करता है, जबकि Interpreter लाइन-दर-लाइन', 'दोनों एक ही हैं', 'Compiler सिर्फ़ Python के लिए होता है'], a: 1, e: 'Compiler पूरे source code का एक बार में अनुवाद करके object code बनाता है (execution तेज़)। Interpreter एक-एक लाइन अनुवाद करके चलाता है (धीमा, पर debugging आसान)।', trap: 'दोनों की परिभाषाएँ उलट देना।', d: 2, tag: 'Software', pyq: 'सामान्य' },
  { q: 'ROM में स्थायी रूप से लिखा गया software क्या कहलाता है?', o: ['Freeware', 'Firmware', 'Shareware', 'Malware'], a: 1, e: 'Firmware = hardware में ही बसा हुआ software, जैसे BIOS। यह ROM में रहता है इसलिए बिजली जाने पर भी बचा रहता है।', trap: 'Freeware चुन लेना — वो सिर्फ़ मुफ़्त सॉफ़्टवेयर है।', d: 2, tag: 'Software', pyq: 'सामान्य' },
  { q: 'निम्न में से कौन-सा audio file का valid extension नहीं है?', o: ['.mp3', '.wav', '.wma', '.mov'], a: 3, e: '.mov QuickTime का video/animation format है, audio नहीं। .mp3, .wav और .wma तीनों audio formats हैं।', trap: '.wma कम सुना हुआ है, इसलिए उसे ग़लत मान लेना।', d: 2, tag: 'File Formats', pyq: 'Paper-II Q56 — हूबहू पैटर्न' },
  { q: 'OMR का सही उपयोग कौन-सा है?', o: ['बैंक के चेक पढ़ना', 'उत्तर-पुस्तिका के भरे हुए गोले पढ़ना', 'छपे हुए अक्षरों को text में बदलना', 'बार कोड पढ़ना'], a: 1, e: 'OMR (Optical Mark Reader) पेंसिल से भरे गए निशान/गोले पढ़ता है — जैसे परीक्षा की OMR शीट।', trap: 'OCR वाला काम (अक्षर पढ़ना) OMR को दे देना।', d: 1, tag: 'Input Devices', pyq: 'सामान्य' },
  { q: 'RAM के बारे में कौन-सा कथन सही है?', o: ['यह non-volatile है', 'यह volatile है — बिजली जाने पर डेटा मिट जाता है', 'इसमें केवल पढ़ा जा सकता है', 'यह secondary storage है'], a: 1, e: 'RAM volatile है — बिजली गई तो सारा डेटा उड़ गया। इसीलिए काम को बार-बार save करना पड़ता है। ROM non-volatile है।', trap: 'ROM और RAM के गुण आपस में उलट देना।', d: 1, tag: 'Memory', pyq: 'आधारभूत' }
];

UNIT_INIT.p2foc = function () { nsRun(); };
