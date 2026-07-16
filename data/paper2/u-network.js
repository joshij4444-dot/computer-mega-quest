/*! MODULE: data/paper2/u-network.js — Paper-II Unit: Communication & Network (PYQ ≈ 6/100) */

CH.push({ id: 'p2net', ic: '🌐', t: 'Comm. & Network', s: 'OSI • TCP/IP • Topology • Protocols', xp: 120, p: 2 });

LESSON.p2net = `
<div class="blk"><h3>🌐 Data Communication & Networking — परिचय</h3>
<p><b>सरल भाषा में:</b> Networking का मतलब है दो या ज़्यादा कंप्यूटरों को इस तरह जोड़ना कि वे <b>भरोसे से data बाँट सकें</b>। और इंसानों की बातचीत की तरह, मशीनों की बातचीत के भी सख़्त <b>नियम</b> (protocol) होते हैं — कौन पहले बोलेगा, कितनी देर बोलेगा, अगर बात कट जाए तो क्या करेगा। बिना इन नियमों के, दो कंपनियों के बनाए राऊटर, स्विच और सॉफ़्टवेयर आपस में कभी बात ही नहीं कर पाते।</p>
<div class="tk">💡 <b>Layer में क्यों बाँटा गया?</b> पूरा संचार — तार में बिजली के signal से लेकर तेरे ब्राउज़र में दिखते वेब पेज तक — एक साथ, एक ही जगह संभालना नामुमकिन है। इंजीनियरों ने इसे <b>परतों (layers)</b> में तोड़ा — हर परत का सिर्फ़ एक काम, और हर परत सिर्फ़ अपने ठीक नीचे वाली परत की सेवा लेती है, बाक़ी परतों की चिंता नहीं करती। इसका सबसे बड़ा फ़ायदा — एक परत की तकनीक बदल जाए (जैसे केबल की जगह WiFi आ जाए) तो ऊपर की परतों को कुछ पता ही नहीं चलता, कुछ बदलना नहीं पड़ता। यही सोच OSI और TCP/IP दोनों मॉडल के पीछे है।</div>
</div>

<div class="blk"><h3>🏗️ OSI Model — 7 परतों का संदर्भ-मॉडल</h3>
<p><b>OSI</b> (Open Systems Interconnection) 1984 में <b>ISO</b> (International Organization for Standardization) ने बनाया — मक़सद था: दुनिया के हर कंप्यूटर-निर्माता को एक <b>साझा नक़्शा</b> देना, ताकि अलग-अलग कंपनियों के यंत्र आपस में जुड़ सकें। ध्यान रहे — OSI ख़ुद कोई प्रोग्राम या प्रोटोकॉल नहीं है; यह सिर्फ़ एक <b>सैद्धांतिक ब्लूप्रिंट</b> है जिसके सहारे नेटवर्किंग समझी और सिखाई जाती है।</p>
<p style="font-size:.8rem;color:var(--dim)">हर परत का काम अलग है। जब data भेजा जाता है, वह हर परत से गुज़रते हुए एक नए "लिफ़ाफ़े" (header) में लिपटता जाता है — इसे <b>Encapsulation</b> कहते हैं। दूसरी तरफ़ पहुँचने पर, हर परत अपना-अपना लिफ़ाफ़ा खोलती जाती है (Decapsulation) जब तक असली संदेश न बचे।</p>
<div class="sqlLab"><div id="osiOut"></div></div>
<div style="overflow-x:auto"><table>
<tr><th>परत</th><th>मुख्य काम</th><th>इकाई (PDU)</th><th>यंत्र</th></tr>
<tr><td>7. Application</td><td>user को सीधी सेवा (browser, mail app)</td><td>Data</td><td>—</td></tr>
<tr><td>6. Presentation</td><td>रूप बदलना — encrypt, compress, format</td><td>Data</td><td>—</td></tr>
<tr><td>5. Session</td><td>बातचीत शुरू/बंद करना, याद रखना</td><td>Data</td><td>—</td></tr>
<tr><td>4. Transport</td><td>end-to-end भरोसा, टुकड़े जोड़ना</td><td><b>Segment</b></td><td>—</td></tr>
<tr><td>3. Network</td><td>रास्ता चुनना (routing), addressing</td><td><b>Packet</b></td><td>Router</td></tr>
<tr><td>2. Data Link</td><td>पड़ोसी यंत्र तक भेजना, error जाँचना</td><td><b>Frame</b></td><td>Switch, Bridge</td></tr>
<tr><td>1. Physical</td><td>असली सिग्नल/बिजली/प्रकाश</td><td><b>Bits</b></td><td>Hub, Repeater, Cable</td></tr>
</table></div>
<div class="tk">🧠 <b>मंत्र (7→1): "All People Seem To Need Data Processing"</b> — Application, Presentation, Session, Transport, Network, Data-link, Physical। नीचे से ऊपर याद रखना हो तो "Please Do Not Throw Sausage Pizza Away"।</div>
<div class="tr">⚠️ <b>यंत्र किस परत पर — पक्का सवाल:</b> Hub/Repeater = <b>Physical (1)</b> — ये सिर्फ़ सिग्नल दोहराते हैं, कोई समझदारी नहीं। Switch/Bridge = <b>Data Link (2)</b> — MAC address देखकर सही तरफ़ भेजते हैं। Router = <b>Network (3)</b> — IP address देखकर रास्ता चुनता है। Gateway = सभी परतों पर काम कर सकता है (दो अलग नेटवर्क-भाषाओं के बीच अनुवादक)।</div>
<div class="tr">⚠️ <b>सामान्य ग़लती:</b> लोग सोचते हैं OSI असल इंटरनेट चलाता है — ग़लत! OSI सिर्फ़ पढ़ाने/समझाने का मॉडल है। असली इंटरनेट <b>TCP/IP</b> मॉडल पर चलता है (नीचे देखो)।</div>
</div>

<div class="blk"><h3>🔗 TCP/IP Model — जो असल में इंटरनेट चलाता है</h3>
<p>OSI बनने से पहले ही, 1970 के दशक में अमेरिकी सेना की <b>DARPA</b> परियोजना ने TCP/IP सुइट बनाई थी — व्यावहारिक ज़रूरत के लिए, किताबी सिद्धांत के लिए नहीं। इसीलिए यह ज़्यादा <b>सरल</b> (सिर्फ़ 4 परतें) और ज़्यादा <b>असली दुनिया में इस्तेमाल</b> होने वाला मॉडल है — आज हर वेबसाइट, हर ऐप इसी पर चलती है।</p>
<div style="overflow-x:auto"><table>
<tr><th>OSI (7 परतें, सैद्धांतिक)</th><th>TCP/IP (4 परतें, व्यावहारिक)</th></tr>
<tr><td>Application + Presentation + Session</td><td><b>Application</b> (सब एक में — HTTP, FTP, SMTP)</td></tr>
<tr><td>Transport</td><td><b>Transport</b> (TCP, UDP)</td></tr>
<tr><td>Network</td><td><b>Internet</b> (IP)</td></tr>
<tr><td>Data Link + Physical</td><td><b>Network Access</b> (Ethernet, WiFi)</td></tr>
</table></div>
<div class="tk">🧠 <b>याद रखने की तरकीब:</b> OSI की ऊपर की 3 परतें (App+Presentation+Session) TCP/IP में सिमट कर सिर्फ़ एक "Application" परत बन जाती हैं; नीचे की 2 (Data Link+Physical) सिमट कर "Network Access" बन जाती हैं। बीच की Transport और Network लगभग वैसी ही रहती हैं (नाम बदलकर Internet)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> "TCP/IP में कितनी परतें?" का जवाब हमेशा <b>4</b> — OSI के 7 से भ्रमित मत होना।</div>
</div>

<div class="blk"><h3>🚚 Transport Layer — TCP बनाम UDP</h3>
<p>Transport परत का काम है — data को <b>end-to-end</b> (एक असली एप्लिकेशन से दूसरे तक) सही-सलामत पहुँचाना। इसके लिए दो बिल्कुल अलग स्वभाव वाले प्रोटोकॉल हैं, और परीक्षा में इन्हें अक्सर आमने-सामने खड़ा किया जाता है।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>TCP</th><th>UDP</th></tr>
<tr><td>Connection</td><td><b>Connection-oriented</b> (पहले हाथ मिलाना — 3-way handshake)</td><td>Connectionless (सीधे भेज दो)</td></tr>
<tr><td>भरोसा</td><td>Reliable — acknowledgement, दोबारा भेजना</td><td>Unreliable — कोई गारंटी नहीं</td></tr>
<tr><td>क्रम</td><td>पैकेट क्रम में पहुँचें (in-order)</td><td>क्रम की चिंता नहीं</td></tr>
<tr><td>रफ़्तार</td><td>धीमा (सारी जाँच-पड़ताल की वजह से)</td><td>तेज़ (सीधा भेजना)</td></tr>
<tr><td>उदाहरण</td><td>वेब (HTTP), ईमेल, फ़ाइल transfer</td><td>Video call, live streaming, DNS, online gaming</td></tr>
</table></div>
<div class="tk">🧠 <b>असली मिसाल:</b> <b>TCP = रजिस्टर्ड डाक</b> — रसीद मिलती है, पक्का पहुँचता है, पर समय लगता है। <b>UDP = पोस्टकार्ड</b> — फेंक दो, पहुँचे तो पहुँचे, तेज़ है और कोई रसीद नहीं माँगता।</div>
<div class="tk">🧠 <b>UDP का इस्तेमाल क्यों?</b> Video call में अगर एक frame खो जाए तो उसे दोबारा माँगने से देर हो जाएगी (call ही अटक जाएगी) — इसलिए बेहतर है उसे छोड़कर आगे बढ़ना। यही वजह है कि हल्की सी रुकावट में भी video call चलती रहती है, पर फ़ाइल download रुक कर दोबारा कोशिश करता है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> "UDP भरोसेमंद और connection-oriented है" — यह हमेशा ग़लत कथन होता है। दोनों गुण सिर्फ़ TCP के हैं।</div>
</div>

<div class="blk"><h3>📮 Application Layer Protocols और Ports</h3>
<p>एक कंप्यूटर पर एक साथ कई एप्लिकेशन इंटरनेट इस्तेमाल कर रहे होते हैं — browser, mail app, game। सबका data एक ही IP address पर आता है, तो OS यह कैसे तय करे कि कौन-सा data किस एप्लिकेशन का है? इसका हल है — <b>Port Number</b> (0 से 65535 तक)। हर सेवा का एक तय "दरवाज़ा नंबर" होता है, जिसे <b>Well-Known Port</b> कहा जाता है (0-1023)।</p>
<div style="overflow-x:auto"><table>
<tr><th>Protocol</th><th>Port</th><th>काम</th></tr>
<tr><td><b>HTTP</b></td><td>80</td><td>सामान्य वेब पन्ने</td></tr>
<tr><td><b>HTTPS</b></td><td>443</td><td>सुरक्षित (encrypted) वेब पन्ने</td></tr>
<tr><td><b>FTP</b></td><td>21 (control), 20 (data)</td><td>फ़ाइल transfer</td></tr>
<tr><td><b>Telnet</b></td><td>23</td><td>दूर के कंप्यूटर पर लॉगिन (असुरक्षित)</td></tr>
<tr><td><b>DNS</b></td><td>53</td><td>नाम → IP address</td></tr>
<tr><td><b>SMTP</b></td><td>25</td><td>mail <b>भेजना</b> (push)</td></tr>
<tr><td><b>POP3</b></td><td>110</td><td>mail <b>लाना</b>, फिर server से हटाना</td></tr>
<tr><td><b>IMAP</b></td><td>143</td><td>mail server पर <b>रखे-रखे</b> देखना (कई डिवाइस पर sync)</td></tr>
</table></div>
<div class="tk">🧠 <b>ईमेल के तीन प्रोटोकॉल — पक्का ट्रैप:</b> कल्पना कर एक डाकिया है (SMTP) जो सिर्फ़ चिट्ठी <b>भेजता</b> है, कभी लाता नहीं। घर पर चिट्ठियाँ या तो पूरी तरह उठा ली जाती हैं और डाकख़ाने से मिटा दी जाती हैं (POP3), या डाकख़ाने में ही रहती हैं और तू बस उन्हें देखने जाता है, कहीं से भी (IMAP)।</div>
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
<div class="tr">⚠️ <b>PYQ (Q76):</b> "इंटरनेट पर mail को move करने वाला protocol?" → <b>SMTP</b> (भेजना)। POP3/IMAP सिर्फ़ लाने के लिए हैं — यह घुमा-फिराकर बार-बार पूछा जाता है।</div>
</div>

<div class="blk"><h3>🔢 IP Address — बनावट और Classes</h3>
<p>हर डिवाइस को इंटरनेट पर एक अनोखा पता चाहिए — जैसे हर घर का एक पता होता है। <b>IPv4</b> यह पता <b>32 बिट</b> में देता है, जिसे इंसान के पढ़ने लायक बनाने के लिए 4 हिस्सों (<b>octet</b>, हर एक 0-255) में लिखा जाता है — जैसे 192.168.1.1। हर IP address के दो हिस्से होते हैं: <b>Network भाग</b> (किस नेटवर्क का सदस्य) और <b>Host भाग</b> (उस नेटवर्क में कौन-सा डिवाइस)।</p>
<p><b>Classes क्यों बनीं?</b> शुरुआती इंटरनेट में तय करना था कि Network भाग कितना बड़ा और Host भाग कितना बड़ा हो — छोटे संगठन को कम host चाहिए, बड़े को ज़्यादा। इसलिए address को श्रेणियों में बाँटा गया, हर श्रेणी में network:host का बँटवारा अलग।</p>
<div style="overflow-x:auto"><table>
<tr><th>Class</th><th>पहला Octet</th><th>उपयोग</th></tr>
<tr><td><b>A</b></td><td>0 – 127</td><td>बहुत बड़े संगठन (कम network, बहुत सारे hosts)</td></tr>
<tr><td><b>B</b></td><td>128 – 191</td><td>मध्यम आकार के संगठन</td></tr>
<tr><td><b>C</b></td><td>192 – 223</td><td>छोटे नेटवर्क (सबसे सामान्य, घर/ऑफ़िस)</td></tr>
<tr><td><b>D</b></td><td>224 – 239</td><td>Multicast (एक भेजे, कई सुनें)</td></tr>
<tr><td><b>E</b></td><td>240 – 255</td><td>प्रायोगिक/अनुसंधान — सामान्य उपयोग में नहीं</td></tr>
</table></div>
<div class="tk">🧠 <b>ट्रिक:</b> पहला octet जितना छोटा, संगठन उतना बड़ा (Class A सबसे बड़े संगठनों के लिए, बहुत कम बचे हैं)। Class C सबसे सामान्य क्योंकि ज़्यादातर नेटवर्क छोटे होते हैं।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> पहला octet 192-223 दिखे तो सीधे <b>Class C</b> बोल — यही सबसे ज़्यादा पूछा जाता है।</div>
</div>

<div class="blk"><h3>🏠 विशेष Address, Subnetting, DHCP और NAT</h3>
<p>Class-आधारित बँटवारे के अलावा कुछ address ऐसे हैं जो हर तकनीशियन को याद होने चाहिए, क्योंकि इनका एक ख़ास, तय काम है।</p>
<div style="overflow-x:auto"><table>
<tr><th>Address / तकनीक</th><th>मतलब</th></tr>
<tr><td><b>127.0.0.1</b></td><td><b>Loopback</b> — कंप्यूटर का ख़ुद का पता, "localhost" (नेटवर्क टेस्ट करने के लिए)</td></tr>
<tr><td>Private ranges (10.x, 172.16-31.x, 192.168.x)</td><td>घर/ऑफ़िस के भीतर इस्तेमाल — इंटरनेट पर सीधे नहीं दिखते</td></tr>
<tr><td><b>Subnet Mask</b> (जैसे 255.255.255.0)</td><td>बताता है कि address में कितना हिस्सा Network है, कितना Host</td></tr>
<tr><td><b>DHCP</b></td><td>Dynamic Host Configuration Protocol — डिवाइस को अपने आप IP दे देता है</td></tr>
<tr><td><b>NAT</b></td><td>Network Address Translation — घर के private IP को इंटरनेट के एक public IP में बदलता है</td></tr>
</table></div>
<div class="tk">🧠 <b>NAT क्यों ज़रूरी है?</b> IPv4 के कुल पते सीमित हैं (लगभग 4 अरब), पर दुनिया में उससे कहीं ज़्यादा डिवाइस हैं। NAT की वजह से एक घर के 10 डिवाइस, एक ही public IP शेयर कर सकते हैं — राऊटर अंदर-बाहर के पते ख़ुद बदलता रहता है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> 127.0.0.1 को कभी "किसी और सर्वर का पता" मत समझना — यह हमेशा <b>अपना ही</b> डिवाइस होता है (self-test/loopback)।</div>
</div>

<div class="blk"><h3>📦 IP Header Decoder — पहला byte ख़ुद पढ़</h3>
<p>हर IPv4 packet के आगे एक छोटा "header" जुड़ा होता है — जैसे चिट्ठी के ऊपर पता लिखा होता है। इस header का सबसे पहला byte दो हिस्सों में बँटा है: पहले 4 बिट <b>Version</b> (4=IPv4, 6=IPv6), अगले 4 बिट <b>IHL</b> (Header Length — header कितने 4-byte शब्दों का है)।</p>
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
<div class="tr">⚠️ <b>PYQ (Q90):</b> पहले 8 बिट 01000010 → Version = 0100 = <b>4 (IPv4)</b>, IHL = 0010 = 2 (असल में बहुत छोटा, invalid — पर सवाल का मक़सद सिर्फ़ यह जाँचना है कि तुझे पता है पहले 4 बिट version बताते हैं)।</div>
</div>

<div class="blk"><h3>🧵 Transmission Media — डेटा किस रास्ते बहता है</h3>
<p>Physical परत पर असली सवाल है — signal किस माध्यम से यात्रा करे? इसके दो बड़े परिवार हैं।</p>
<div style="overflow-x:auto"><table>
<tr><th>Guided (तार वाला माध्यम)</th><th>Unguided (बेतार माध्यम)</th></tr>
<tr><td><b>Twisted Pair</b> — सस्ता, LAN में सबसे आम</td><td><b>Radio Wave</b> — WiFi, mobile</td></tr>
<tr><td><b>Coaxial Cable</b> — पुराना, TV cable</td><td><b>Microwave</b> — टावर-से-टावर, लाइन-ऑफ़-साइट चाहिए</td></tr>
<tr><td><b>Optical Fibre</b> — प्रकाश से, सबसे तेज़, EMI-मुक्त</td><td><b>Infrared</b> — TV remote, बहुत कम दूरी</td></tr>
<tr><td> </td><td><b>Satellite</b> — बहुत बड़ी दूरी, दूर-दराज़ इलाक़े</td></tr>
</table></div>
<div class="tk">🧠 <b>Optical Fibre सबसे बेहतर क्यों?</b> इसमें डेटा प्रकाश की किरण के रूप में यात्रा करता है (सिद्धांत: total internal reflection) — इसलिए इसमें <b>Electromagnetic Interference (EMI) का कोई असर नहीं</b> होता, नुक़सान (attenuation) सबसे कम है, और bandwidth सबसे ज़्यादा। यही वजह है कि देशों के बीच समुंदर के अंदर बिछी केबल भी fibre ही होती है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Twisted pair "सस्ता और आम" है, पर "सबसे तेज़/best" नहीं — वह ख़िताब Optical Fibre का है। दोनों को मत उलझा।</div>
</div>

<div class="blk"><h3>🔀 Switching Techniques — रास्ता कैसे तय होता है</h3>
<p>जब कई डिवाइस एक ही नेटवर्क शेयर करते हैं, तो data को एक स्रोत से मंज़िल तक भेजने का तरीक़ा चुनना पड़ता है — इसे Switching कहते हैं।</p>
<div style="overflow-x:auto"><table>
<tr><th>तरीक़ा</th><th>कैसे काम करता है</th><th>मिसाल</th></tr>
<tr><td><b>Circuit Switching</b></td><td>बात शुरू होने से पहले पूरा रास्ता आरक्षित (dedicated) कर लिया जाता है</td><td>पुराना टेलीफ़ोन नेटवर्क</td></tr>
<tr><td><b>Packet Switching</b></td><td>Data छोटे-छोटे packets में टूटता है, हर packet अपना अलग रास्ता ले सकता है, मंज़िल पर फिर जुड़ता है</td><td>इंटरनेट</td></tr>
<tr><td>Message Switching</td><td>पूरा संदेश एक जगह रुकता है, फिर आगे भेजा जाता है (store-and-forward)</td><td>पुराना टेलीग्राफ़</td></tr>
</table></div>
<div class="tk">🧠 <b>Circuit switching की बर्बादी:</b> पूरी बातचीत के दौरान रास्ता आरक्षित रहता है, चाहे उस पल कोई बोल न रहा हो — यानी बैंडविड्थ बर्बाद होती है। <b>Packet switching इसी समस्या को हल करती है</b> — रास्ता तभी इस्तेमाल होता है जब सच में data भेजना हो, इसलिए एक ही लाइन पर कई लोगों का data एक साथ बँट सकता है। यही वजह है कि इंटरनेट सिर्फ़ packet switching पर बना है।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> "इंटरनेट किस switching पर चलता है?" — हमेशा <b>Packet switching</b>, Circuit switching नहीं।</div>
</div>

<div class="blk"><h3>🎛️ Multiplexing — एक लाइन पर कई आवाज़ें</h3>
<p>महँगी केबल/तार बार-बार बिछाना मुश्किल है। इसलिए एक ही भौतिक माध्यम पर <b>कई संकेतों को एक साथ भेजने</b> की तकनीक विकसित हुई — इसे Multiplexing कहते हैं। भेजने वाले सिरे पर Multiplexer (MUX) संकेत जोड़ता है, प्राप्त करने वाले सिरे पर Demultiplexer (DEMUX) उन्हें फिर अलग करता है।</p>
<div style="overflow-x:auto"><table>
<tr><th>तरीक़ा</th><th>कैसे बाँटता है</th><th>मिसाल</th></tr>
<tr><td><b>FDM</b> (Frequency Division)</td><td>हर संकेत को अलग frequency-band दो</td><td>रेडियो/TV चैनल</td></tr>
<tr><td><b>TDM</b> (Time Division)</td><td>हर संकेत को बारी-बारी थोड़ा-थोड़ा समय दो</td><td>डिजिटल टेलीफ़ोन लाइनें</td></tr>
<tr><td><b>WDM</b> (Wavelength Division)</td><td>प्रकाश की अलग-अलग तरंगदैर्घ्य (रंग) एक साथ भेजो</td><td>Optical Fibre backbone</td></tr>
</table></div>
<div class="tk">🧠 याद रखने की तरकीब: <b>FDM = जगह बाँटो (frequency), TDM = समय बाँटो, WDM = रंग बाँटो</b>।</div>
</div>

<div class="blk"><h3>📻 Modem — डिजिटल और एनालॉग के बीच अनुवादक</h3>
<p><b>समस्या (Why):</b> तेरा कंप्यूटर <b>digital</b> भाषा बोलता है (सिर्फ़ 0 और 1 — चौकोर दालें)। पर पुरानी टेलीफ़ोन लाइन/केबल पर सिर्फ़ <b>analog</b> संकेत (लहरें) चल सकते हैं। दोनों की भाषा अलग — तो कंप्यूटर का data उस लाइन पर जाए कैसे?</p>
<p><b>हल — Modem।</b> नाम ही उसका काम है: <b>MO</b>dulator + <b>DEM</b>odulator।</p>
<div class="tk">🧠 <b>दोनों काम (यही परिभाषा है):</b><br>
<b>Modulation</b> (भेजते समय) = कंप्यूटर का <b>digital → analog</b> में बदलना, ताकि लाइन पर चल सके।<br>
<b>Demodulation</b> (पाते समय) = आई हुई <b>analog → digital</b> में वापस बदलना, ताकि कंप्यूटर समझ सके।<br>
यानी modem दोनों सिरों पर चाहिए — एक भेजने वाले के पास, एक पाने वाले के पास।</div>
<div class="tk">🧠 <b>असली मिसाल:</b> दो लोग हिन्दी जानते हैं, पर बीच का तार सिर्फ़ अंग्रेज़ी ले जा सकता है। तो एक <b>दुभाषिया</b> इस सिरे पर हिन्दी→अंग्रेज़ी करे, दूसरा उस सिरे पर अंग्रेज़ी→हिन्दी। Modem वही दुभाषिया है।<br>
🧠 <b>रफ़्तार</b> <b>bps</b> (bits per second) में नापी जाती है। प्रकार: Internal/External, Dial-up (धीमा), DSL/Cable (तेज़)।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> Modem का पूरा नाम <b>Modulator-Demodulator</b> — और यह <b>digital↔analog दोनों दिशा</b> में बदलता है (सिर्फ़ एक दिशा नहीं)। इसे Router से मत उलझा: <b>Modem</b> = भाषा बदले (ISP से जोड़े); <b>Router</b> = रास्ता चुने व कई डिवाइस में बाँटे।</div>
</div>

<div class="blk"><h3>🛡️ Error Detection — रास्ते में बिगड़े data को पकड़ना</h3>
<p><b>समस्या (Why):</b> तार में बिजली का शोर (noise) किसी bit को 0 से 1 कर सकता है। पाने वाले को कैसे पता चले कि जो मिला वही भेजा गया था? इसके लिए भेजने वाला कुछ <b>अतिरिक्त जाँच-बिट</b> साथ भेजता है।</p>
<div class="tk">🧠 <b>1) Parity Bit — सबसे सरल तरीक़ा:</b> data के साथ <b>एक अतिरिक्त bit</b> जोड़ो ताकि 1 की कुल गिनती एक तय नियम पर आ जाए।<br>
<b>Even parity</b> = 1 की गिनती <b>सम</b> रखो। <b>Odd parity</b> = <b>विषम</b> रखो।<br>
<b>मिसाल (even parity):</b> data 1011001 में चार 1 हैं (पहले से सम) → parity bit = <b>0</b> → भेजा 10110010।<br>
अगर data 1010001 होता (तीन 1, विषम) → parity bit = <b>1</b> लगाकर सम बनाते।<br>
पाने वाला 1 गिनता है — गिनती नियम तोड़े तो समझ जाता है कि data बिगड़ा।<br>
<b>सीमा:</b> यह सिर्फ़ <b>विषम संख्या</b> में बिगड़ी bits पकड़ता है — अगर <b>दो</b> bits एक साथ बदल जाएँ तो गिनती फिर सम हो जाएगी और ग़लती <b>छूट जाएगी</b>। और यह ग़लती <b>पकड़ता</b> है, <b>सुधारता नहीं</b>।</div>
<div class="tk">🧠 <b>2) Checksum:</b> सारे data-खंडों को जोड़कर एक जाँच-संख्या भेजो; पाने वाला ख़ुद जोड़कर मिलाए — मेल न खाए तो data बिगड़ा। (यह भी सिर्फ़ पकड़ता है।)<br>
🧠 <b>3) CRC</b> (Cyclic Redundancy Check) = भाग (division) पर आधारित, parity से कहीं ज़्यादा ताक़तवर — Ethernet इसी का उपयोग करता है।<br>
🧠 <b>4) Hamming Code</b> — यह अकेला ऐसा है जो ग़लती <b>पकड़ता भी है और सुधारता भी</b> (error <u>correction</u>): कई parity bits अलग-अलग जगह रखकर यह बता देता है कि <b>कौन-सी bit</b> बिगड़ी, फिर उसे उलट दो।</div>
<div style="overflow-x:auto"><table>
<tr><th>तरीक़ा</th><th>क्या करता है</th><th>ताक़त</th></tr>
<tr><td><b>Parity</b></td><td>सिर्फ़ पकड़े (detect)</td><td>सबसे कमज़ोर — 2 bit बिगड़ें तो चूक जाए</td></tr>
<tr><td><b>Checksum</b></td><td>सिर्फ़ पकड़े</td><td>मध्यम</td></tr>
<tr><td><b>CRC</b></td><td>सिर्फ़ पकड़े</td><td>मज़बूत (Ethernet)</td></tr>
<tr><td><b>Hamming</b></td><td>पकड़े <b>+ सुधारे</b></td><td>⭐ correction भी</td></tr>
</table></div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "error <b>detection</b>" पूछें → Parity/Checksum/CRC। "error <b>correction</b>" पूछें → <b>Hamming code</b>। सबसे आम ग़लती: parity को "ग़लती सुधारने वाला" मान लेना — वह सिर्फ़ <b>बताता</b> है कि ग़लती हुई, ठीक नहीं करता।</div>
</div>

<div class="blk"><h3>🕸️ Network Topology — डिवाइस कैसे जुड़े हैं</h3>
<p>Topology का मतलब है — नेटवर्क के डिवाइस भौतिक/तार्किक रूप से किस <b>आकार</b> में जुड़े हैं। यह चुनाव सीधे तौर पर तय करता है कि नेटवर्क कितना भरोसेमंद है और कितना ख़र्च होगा।</p>
<div style="overflow-x:auto"><table>
<tr><th>Topology</th><th>ढाँचा</th><th>फ़ायदा</th><th>नुक़सान</th></tr>
<tr><td><b>Star</b></td><td>सब डिवाइस केंद्रीय hub/switch से जुड़े</td><td>एक तार टूटे तो बाक़ी अप्रभावित; ढूँढना आसान</td><td>hub/switch फेल तो <b>सब कुछ ठप</b></td></tr>
<tr><td><b>Bus</b></td><td>सब डिवाइस एक ही मुख्य केबल से जुड़े</td><td>सस्ता, बिछाना आसान</td><td>मुख्य केबल टूटी तो <b>पूरा नेटवर्क ठप</b></td></tr>
<tr><td><b>Ring</b></td><td>डिवाइस गोल घेरे में जुड़े, data token से घूमे</td><td>बराबर मौक़ा सबको</td><td>एक कड़ी टूटी तो घेरा टूटे (सिवाय dual-ring के)</td></tr>
<tr><td><b>Mesh</b></td><td>हर डिवाइस हर दूसरे डिवाइस से सीधा जुड़ा</td><td>सबसे भरोसेमंद — एक रास्ता टूटे तो दूसरा मिलेगा</td><td>सबसे महँगा (बहुत सारी केबल)</td></tr>
</table></div>
<div class="tk">🧠 <b>असली मिसाल:</b> Star = कंपनी में हर कर्मचारी का सीधा फ़ोन manager के पास (manager गया तो communication ठप)। Mesh = हर कर्मचारी का हर दूसरे कर्मचारी को सीधा नंबर (किसी का फ़ोन ख़राब भी हो तो बाक़ी रास्ते खुले)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> "सबसे भरोसेमंद पर सबसे महँगी" पूछते ही सीधा <b>Mesh</b> बोल। "सबसे सस्ती पर एक तार टूटने पर पूरा नेटवर्क ठप" पूछते ही <b>Bus</b> बोल।</div>
</div>

<div class="blk"><h3>📡 Transmission Mode — बात किस दिशा में हो सकती है</h3>
<p>दो डिवाइस के बीच data किस दिशा में बह सकता है, इसके तीन तरीक़े हैं — और तीनों की असली दुनिया की मिसालें एक बार समझ लेने पर कभी नहीं भूलती।</p>
<div style="overflow-x:auto"><table>
<tr><th>मोड</th><th>दिशा</th><th>मिसाल</th></tr>
<tr><td><b>Simplex</b></td><td>सिर्फ़ एक दिशा, हमेशा</td><td>TV प्रसारण, keyboard→computer</td></tr>
<tr><td><b>Half-Duplex</b></td><td>दोनों दिशा, पर <b>एक बार में एक ही</b></td><td>Walkie-talkie</td></tr>
<tr><td><b>Full-Duplex</b></td><td>दोनों दिशा, <b>एक साथ</b></td><td>टेलीफ़ोन बातचीत</td></tr>
</table></div>
<div class="tk">🧠 Walkie-talkie में जब तक तू "over" न कहे, दूसरा बोल नहीं सकता — यही Half-duplex है। फ़ोन पर दोनों एक साथ बोल और सुन सकते हैं — यही Full-duplex है।</div>
</div>

<div class="blk"><h3>📏 Network के प्रकार — आकार के अनुसार</h3>
<p>नेटवर्क कितनी भौगोलिक दूरी तक फैला है, इसके आधार पर उसे नाम दिया जाता है — छोटे कमरे से लेकर पूरी दुनिया तक।</p>
<div class="tk">🧠 <b>PAN</b> (Personal — एक व्यक्ति, जैसे Bluetooth headset) &lt; <b>LAN</b> (Local — एक इमारत/ऑफ़िस) &lt; <b>MAN</b> (Metropolitan — एक शहर) &lt; <b>WAN</b> (Wide — देश/दुनिया — <b>इंटरनेट सबसे बड़ा WAN है</b>)।</div>
<div class="tr">⚠️ <b>PYQ (Q94):</b> WiFi बनाम WiMax — <b>WiFi = LAN स्तर</b> (लगभग 100 मीटर, एक इमारत), <b>WiMax = MAN स्तर</b> (कई किलोमीटर, पूरा शहर)। इन्हें आकार के हिसाब से ही याद रख।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🏗️ OSI 7 परतें: <b>All People Seem To Need Data Processing</b> | TCP/IP सिर्फ़ 4 परतें<br>
🔌 Hub/Repeater=Physical(1) | Switch/Bridge=DataLink(2) | Router=Network(3)<br>
📦 PDU: Transport=Segment, Network=<b>Packet</b>, DataLink=Frame, Physical=Bits<br>
🚚 <b>TCP</b> = भरोसेमंद/धीमा (रजिस्टर्ड डाक) | <b>UDP</b> = तेज़/बेभरोसा (पोस्टकार्ड)<br>
📮 <b>SMTP(25)</b> भेजे | POP3(110) लाए+हटाए | IMAP(143) रखे-रखे देखे<br>
🔢 HTTP=80, HTTPS=443, FTP=21, DNS=53, Telnet=23<br>
📦 IPv4 पहला byte = 4bit Version + 4bit IHL | 192-223 = Class C | 127.0.0.1 = loopback<br>
🌉 NAT = private↔public IP बदले | DHCP = अपने आप IP दे<br>
🧵 Optical Fibre सबसे तेज़ (EMI-मुक्त) | इंटरनेट = <b>Packet switching</b><br>
🎛️ FDM=जगह बाँटो, TDM=समय बाँटो, WDM=रंग बाँटो<br>
🕸️ Star (hub, केंद्रीय फेल=सब ठप) | Bus (एक केबल) | Ring (token) | Mesh (सबसे भरोसेमंद)<br>
📡 Simplex(एकतरफ़ा) | Half-duplex(बारी) | Full-duplex(साथ-साथ)<br>
📏 PAN &lt; LAN(WiFi) &lt; MAN(WiMax) &lt; WAN | Checksum = error detection
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
