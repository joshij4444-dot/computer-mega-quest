/*! MODULE: data/paper2/u-coaos.js — Paper-II Unit: Computer Organization & Operating System (PYQ ≈ 9/100) */

CH.push({ id: 'p2os', ic: '⚙️', t: 'CO & OS', s: 'Logic gates • CPU • Scheduling • Deadlock • Memory', xp: 130, p: 2 });

LESSON.p2os = `
<div class="blk"><h3>⚙️ Computer Organization + Operating System — पूरा नक़्शा</h3>
<p><b>सरल भाषा में:</b> दो कहानियाँ। <b>CO</b> = कंप्यूटर <b>अंदर से</b> कैसे बना (gates, CPU, memory, number)। <b>OS</b> = वो <b>manager</b> जो hardware और तेरे बीच बैठकर सब सँभालता है।</p>
<div class="tk">💡 <b>OS बना ही क्यों?</b> बिना OS के user सीधे hardware नहीं चला सकता — बहुत जटिल। OS <b>CPU, memory, I/O</b> को कई programs में बाँटकर (multiprogramming) CPU को कभी ख़ाली नहीं रहने देता। यह user और hardware के बीच <b>intermediary/interface</b> है।</div>
</div>

<div class="blk"><h3>1️⃣ Logic Gates — डिजिटल दुनिया की ईंटें</h3>
<p><b>Gate होता क्या है?</b> कंप्यूटर के अंदर हर चीज़ सिर्फ़ दो हालतों में रहती है — बिजली है (<b>1</b>) या नहीं है (<b>0</b>)। एक <b>Logic Gate</b> एक नन्हा इलेक्ट्रॉनिक फ़ैसला-लेने वाला circuit है: यह एक या दो input (0/1) लेता है और एक <b>तयशुदा नियम</b> के हिसाब से एक output (0/1) दे देता है। बस यही करोड़ों नन्हे फ़ैसले आपस में जुड़कर पूरा CPU बना देते हैं — इसीलिए इन्हें डिजिटल दुनिया की "ईंट" कहते हैं।</p>
<p><b>क्यों ज़रूरी है (Why)?</b> कंप्यूटर को जोड़, तुलना, चुनाव — हर काम "हाँ/नहीं" के छोटे-छोटे फ़ैसलों में तोड़कर करना पड़ता है। ये फ़ैसले gates ही लेते हैं। बिना gates के न ALU बने, न memory, न कुछ।</p>
<p><b>असली मिसाल (बिजली के switch):</b> दो switch सोच। <b>AND</b> = दोनों switch एक ही तार में (series) — बल्ब <u>तभी</u> जले जब <b>दोनों</b> ON हों। <b>OR</b> = दोनों switch अलग-अलग तार में (parallel) — <b>कोई एक</b> भी ON हो तो बल्ब जल जाए।</p>
<p><b>हर gate का पूरा नियम (Truth Table):</b> input A और B के हर जोड़े पर output क्या होगा —</p>
<div style="overflow-x:auto"><table>
<tr><th>A</th><th>B</th><th>AND</th><th>OR</th><th>XOR</th><th>NAND</th><th>NOR</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
</table></div>
<div class="tk">🧠 <b>एक-एक gate की आत्मा:</b><br>
<b>AND</b> = "दोनों राज़ी तो काम" (दोनों 1 → 1)।<br>
<b>OR</b> = "एक भी राज़ी तो काम" (कोई एक 1 → 1)।<br>
<b>NOT</b> = उल्टा कर दे (0→1, 1→0); इसे <b>Inverter</b> भी कहते हैं — इकलौता single-input gate।<br>
<b>XOR</b> = "दोनों अलग हों तो 1" (0-1 या 1-0 → 1; बराबर → 0)। जोड़ (addition) में इसी से sum निकलता है।<br>
<b>NAND</b> = AND का उल्टा • <b>NOR</b> = OR का उल्टा • <b>XNOR</b> = XOR का उल्टा (बराबर → 1)।</div>
<div class="tk">💡 <b>NAND और NOR "Universal Gates" क्यों हैं?</b> Universal का मतलब — सिर्फ़ इसी एक gate को बार-बार इस्तेमाल करके <u>कोई भी</u> दूसरा gate (AND, OR, NOT — और इसलिए पूरा कंप्यूटर) बनाया जा सकता है। मिसाल: NAND के दोनों input एक साथ जोड़ दो तो वह NOT बन जाता है; दो NAND जोड़ने पर AND; आगे मिलाने पर OR। यही "किसी एक ईंट से पूरा घर" वाली ख़ूबी NAND और NOR में है, AND/OR में नहीं — इसीलिए असल chips अक्सर सिर्फ़ NAND से बनते हैं (सस्ता, एक ही तरह का part)।</div>
<div class="tk">🧠 <b>Boolean Algebra (गणित की भाषा):</b> gates के नियम बीजगणित में लिखे जाते हैं। सबसे ज़रूरी — <b>De Morgan के नियम:</b> (A·B)' = A'+B' और (A+B)' = A'·B' (यानी "पूरे का उल्टा = हर एक का उल्टा, और चिह्न बदल जाए")। बड़े circuit को छोटा करने के लिए <b>K-map (Karnaugh map)</b> इस्तेमाल होता है।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "Universal gate कौन?" का जवाब हमेशा <b>NAND या NOR</b> — AND/OR/XOR को कभी universal मत चुनना (यह सबसे आम फँसाने वाला सवाल है)।</div>
</div>

<div class="blk"><h3>1️⃣-B Combinational बनाम Sequential Circuits</h3>
<p>Gates जोड़कर दो बिल्कुल अलग तरह के बड़े circuit बनते हैं — और यह फ़र्क़ समझना OS/memory तक काम आता है।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Combinational</th><th>Sequential</th></tr>
<tr><td>Output किस पर</td><td>सिर्फ़ <b>अभी के input</b> पर</td><td>अभी के input <b>+ पिछली हालत (memory)</b> पर</td></tr>
<tr><td>याददाश्त</td><td>नहीं (भूल जाता है)</td><td>हाँ (याद रखता है)</td></tr>
<tr><td>मिसाल</td><td>Adder, <b>Decoder</b>, Encoder, MUX, DeMUX</td><td>Flip-flop, Register, Counter</td></tr>
</table></div>
<div class="tk">🧠 <b>असली फ़र्क़ आसान भाषा में:</b> Combinational = कैलकुलेटर (जो अभी दबाओ वही जवाब, पुराना याद नहीं)। Sequential = घड़ी/काउंटर (जिसका अगला अंक पिछले अंक पर निर्भर है — यानी उसे "याद" है)।<br>
🧠 <b>ज़रूरी component:</b> <b>Decoder</b> = n input lines को 2ⁿ output lines में खोलता है (जैसे 3-बिट पता → 8 में से 1 चुनना)। <b>Flip-flop</b> = सबसे छोटी sequential इकाई, यानी <b>1 bit की सबसे छोटी memory</b> (प्रकार: SR, D, JK, T)। कई flip-flop जुड़कर Register बनते हैं।</div>
<div class="tr">⚠️ <b>PYQ (Q57):</b> "2ⁿ output lines वाला combinational circuit?" → <b>Decoder</b> (या Demultiplexer)। <b>PYQ (Q50):</b> "1024 × 8 RAM को कितनी address lines चाहिए?" → 1024 = 2¹⁰, इसलिए <b>10 address lines</b> ("×8" तो हर word की चौड़ाई है, address नहीं)।</div>
</div>

<div class="blk"><h3>2️⃣ ऋणात्मक संख्याएँ — कंप्यूटर "माइनस" कैसे रखता है</h3>
<p><b>समस्या:</b> कंप्यूटर के पास सिर्फ़ 0 और 1 हैं — कोई "−" चिह्न नहीं। तो वह −5 जैसी ऋणात्मक संख्या कैसे स्टोर करे? इसके तीन तरीक़े बने, हर अगला पिछले की कमी दूर करता है।</p>
<div style="overflow-x:auto"><table>
<tr><th>तरीक़ा</th><th>कैसे बनता है</th><th>−5 (8-बिट में)</th><th>दिक़्क़त</th></tr>
<tr><td><b>Sign-Magnitude</b></td><td>सबसे बाईं bit (MSB) = चिह्न (0=धन, 1=ऋण), बाक़ी = मान</td><td>1000 0101</td><td>+0 और −0 दो अलग रूप; जोड़-घटाव जटिल</td></tr>
<tr><td><b>1's Complement</b></td><td>धन संख्या के <b>हर bit को उल्टो</b></td><td>1111 1010</td><td>अब भी +0 और −0 दो रूप</td></tr>
<tr><td><b>2's Complement</b> ⭐</td><td>1's complement <b>+ 1</b></td><td>1111 1011</td><td>कोई नहीं — इसीलिए सब यही इस्तेमाल करते हैं</td></tr>
</table></div>
<div class="tk">🧠 <b>2's complement बनाना — क़दम-दर-क़दम (मान लो +5 = 0000 0101):</b><br>
1) हर bit उल्टो → 1111 1010 (यह 1's complement है)<br>
2) उसमें 1 जोड़ो → <b>1111 1011</b> = −5<br>
<b>क्यों यही जीता?</b> इसमें (a) शून्य का <b>सिर्फ़ एक</b> रूप है, और (b) घटाना = ऋणात्मक को जोड़ना — यानी CPU को अलग "घटाने वाला" circuit बनाना ही नहीं पड़ता, वही <b>adder</b> दोनों काम कर लेता है। कम hardware, कम ख़र्च।</div>
<div class="tk">🧠 <b>Floating Point (दशमलव/बड़ी संख्याएँ):</b> बहुत बड़ी या दशमलव संख्या (जैसे 3.14 × 10⁸) के लिए <b>IEEE 754</b> फ़ॉर्मैट — तीन हिस्से: <b>Sign</b> (चिह्न) + <b>Exponent</b> (घात/कहाँ दशमलव) + <b>Mantissa</b> (असली अंक)। <b>Fixed point</b> में दशमलव की जगह तय रहती है (सीमित रेंज); <b>Floating point</b> में वह "तैर" सकती है (बहुत बड़ी रेंज)।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "कंप्यूटर ऋणात्मक संख्या किस रूप में रखता है?" → <b>2's complement</b> (सबसे प्रचलित)। MSB हमेशा <b>sign bit</b>।</div>
</div>

<div class="blk"><h3>2️⃣-B CPU — कंप्यूटर का दिमाग़, अंदर से</h3>
<p><b>CPU (Central Processing Unit)</b> हर हिसाब और हर फ़ैसले का असली मालिक है — इसे कंप्यूटर का "दिमाग़" कहते हैं। इसके तीन मुख्य हिस्से हैं, हर एक का अलग काम:</p>
<div style="overflow-x:auto"><table>
<tr><th>हिस्सा</th><th>काम</th><th>असली मिसाल</th></tr>
<tr><td><b>ALU</b> (Arithmetic Logic Unit)</td><td>असली गणना (जोड़/घटाव) और तुलना (logic: बड़ा/छोटा/बराबर)</td><td>ऑफ़िस का "हिसाब-किताब वाला मुनीम"</td></tr>
<tr><td><b>CU</b> (Control Unit)</td><td>हुक्म चलाना — किसको कब क्या करना है, यह तय व निर्देशित करना (ख़ुद हिसाब नहीं करता)</td><td>"मैनेजर" जो सबको आदेश देता है</td></tr>
<tr><td><b>Registers</b></td><td>CPU के अंदर की सबसे तेज़, सबसे छोटी memory — बीच के मान पल भर रखने के लिए</td><td>मुनीम की मेज़ पर रखी पर्चियाँ</td></tr>
</table></div>
<div class="tk">🧠 <b>ज़रूरी Registers:</b> <b>PC</b> (Program Counter) = <u>अगले</u> instruction का पता। <b>IR</b> (Instruction Register) = अभी चल रहा instruction। <b>MAR/MDR</b> = memory से पता/data की अदला-बदली। <b>Accumulator</b> = ALU का नतीजा।<br>
🧠 <b>Bus (डेटा की सड़कें):</b> हिस्से आपस में तीन "सड़कों" से जुड़े हैं — <b>Data Bus</b> (data ले जाए), <b>Address Bus</b> (पता ले जाए, एकतरफ़ा), <b>Control Bus</b> (नियंत्रण संकेत)।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> गणना <b>ALU</b> करता है, <b>CU नहीं</b> — नाम में "control" देखकर CU मत चुन लेना। और Register एक अलग memory नहीं, CPU का <u>हिस्सा</u> है।</div>
</div>

<div class="blk"><h3>2️⃣-C Instruction Cycle + Addressing Modes</h3>
<p><b>Instruction Cycle</b> = वह चक्र जो CPU हर एक निर्देश के लिए दोहराता है। CPU कुछ जादू नहीं करता — बस यही तीन क़दम, अरबों बार प्रति सेकंड:</p>
<div class="viz">
<svg viewBox="0 0 400 70" xmlns="http://www.w3.org/2000/svg">
 <rect x="18" y="22" width="96" height="30" rx="6" fill="#22d3ee" opacity=".25" stroke="#22d3ee"/><text x="66" y="41" text-anchor="middle" fill="#eef3fa" font-size="11" font-weight="800">FETCH</text>
 <rect x="152" y="22" width="96" height="30" rx="6" fill="#ffc233" opacity=".25" stroke="#ffc233"/><text x="200" y="41" text-anchor="middle" fill="#eef3fa" font-size="11" font-weight="800">DECODE</text>
 <rect x="286" y="22" width="96" height="30" rx="6" fill="#26d07c" opacity=".25" stroke="#26d07c"/><text x="334" y="41" text-anchor="middle" fill="#eef3fa" font-size="11" font-weight="800">EXECUTE</text>
 <path d="M114 37 L150 37 M248 37 L284 37" stroke="#8298b6" stroke-width="1.6"/>
 <path d="M334 20 Q334 6 200 6 Q66 6 66 20" stroke="#8298b6" stroke-width="1.2" fill="none" stroke-dasharray="3 2"/>
</svg>
</div>
<div class="tk">🧠 <b>तीन क़दम:</b> <b>Fetch</b> = memory से instruction उठाओ (PC बताता है कहाँ से)। <b>Decode</b> = CU समझे कि करना क्या है। <b>Execute</b> = ALU/register उसे कर दें (कभी-कभी नतीजा वापस लिखने का <b>Store</b> चरण भी)। फिर PC आगे बढ़ता है और चक्र दोहराता है।</div>
<div class="tk">🧠 <b>Addressing Modes — instruction को उसका data कहाँ मिले, यह बताने के तरीक़े:</b><br>
<b>Immediate</b> = मान सीधे instruction में (जैसे "5 जोड़ो")।<br>
<b>Direct</b> = data का पता दिया है (जैसे "पते 200 पर रखा मान जोड़ो")।<br>
<b>Indirect</b> = पते का पता (जैसे "पते 200 पर जो पता लिखा है, वहाँ का मान")।<br>
<b>Register</b> = data किसी register में है। <b>Indexed</b> = base पता + index (array के लिए)।</div>
<div class="tk">🧠 <b>Pipelining</b> = एक instruction के Fetch के साथ अगले का Decode साथ-साथ चलाना — जैसे धुलाई-सुखाई-प्रेस एक ही समय अलग कपड़ों पर। इससे <b>throughput</b> (गति) बढ़ती है, पर "hazard" (टकराव) संभल भी हो सकता है।<br>
🧠 <b>RISC बनाम CISC:</b> <b>RISC</b> = कम, सरल instruction (तेज़, mobile chips); <b>CISC</b> = ज़्यादा, जटिल instruction (पुराने PC processors)।</div>
</div>

<div class="blk"><h3>2️⃣-D Interrupt — CPU का "दरवाज़े की घंटी"</h3>
<p><b>समस्या (Why):</b> CPU बहुत तेज़ है; keyboard, printer, disk बहुत धीमे। अगर CPU हर धीमे यंत्र से बार-बार पूछता रहे "तैयार हो क्या? अब? अब?" — तो उसका सारा क़ीमती समय पूछने में ही बर्बाद हो जाए। इस बेकार पूछताछ को <b>Polling</b> कहते हैं।</p>
<p><b>हल — Interrupt:</b> CPU अपना काम करता रहे; जिस यंत्र को ध्यान चाहिए, <b>वही CPU को संकेत भेजकर टोक दे</b>। यही "टोकना" <b>Interrupt</b> है।</p>
<div class="tk">🧠 <b>असली मिसाल:</b> तू पढ़ रहा है। दो तरीक़े हैं — (1) हर 2 मिनट में उठकर दरवाज़ा देखना कि कोई आया क्या (= <b>Polling</b>, समय की बर्बादी), या (2) आराम से पढ़ते रहना और <b>घंटी बजने पर</b> ही उठना (= <b>Interrupt</b>)। दूसरा तरीक़ा साफ़ बेहतर है — यही CPU करता है।</div>
<div class="tk">🧠 <b>अंदर से कैसे (step-by-step):</b><br>
1) यंत्र ने interrupt संकेत भेजा।<br>
2) CPU अपना मौजूदा काम <b>रोकता</b> है और उसकी हालत (PC, registers) <b>PCB/stack में सहेजता</b> है।<br>
3) <b>ISR</b> (Interrupt Service Routine) चलती है — यानी उस यंत्र का काम निपटाने वाला छोटा program।<br>
4) ISR ख़त्म; CPU सहेजी हुई हालत <b>वापस लोड</b> करके ठीक वहीं से काम जारी रखता है।<br>
<b>Interrupt Vector Table</b> = सूची जो बताती है कि किस interrupt पर कौन-सी ISR चलानी है।</div>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>कहाँ से आता है</th><th>मिसाल</th></tr>
<tr><td><b>Hardware Interrupt</b></td><td>बाहरी यंत्र से</td><td>keyboard दबी, printer तैयार</td></tr>
<tr><td><b>Software Interrupt</b></td><td>ख़ुद program से (trap)</td><td>system call, 0 से भाग</td></tr>
<tr><td><b>Maskable</b></td><td>रोका/टाला जा सकता है</td><td>सामान्य I/O</td></tr>
<tr><td><b>Non-Maskable (NMI)</b></td><td><b>टाला नहीं जा सकता</b></td><td>बिजली जाना, hardware ख़राबी</td></tr>
</table></div>
<div class="tr">⚠️ <b>RSSB Trap:</b> <b>Polling</b> = CPU ख़ुद बार-बार पूछे (CPU का समय बर्बाद)। <b>Interrupt</b> = यंत्र ख़ुद बताए (कुशल)। इन्हें उलट देना आम ग़लती। और <b>NMI कभी नज़रअंदाज़ नहीं</b> की जा सकती — यही उसकी पहचान है।</div>
</div>

<div class="blk"><h3>2️⃣-E DMA — CPU को बीच से हटा दो</h3>
<p><b>अगली समस्या:</b> Interrupt से पूछताछ तो बची, पर एक दिक़्क़त बाक़ी है — disk से RAM में 10 MB की फ़ाइल लानी हो, तो हर एक byte CPU के <u>हाथ से होकर</u> गुज़रे: disk → CPU → RAM। CPU जैसा क़ीमती दिमाग़ सिर्फ़ "मज़दूरी" (byte ढोने) में लगा रहे — यह भारी बर्बादी है।</p>
<p><b>हल — DMA (Direct Memory Access):</b> एक अलग छोटा चिप, <b>DMA Controller</b>, लगा दो जो यंत्र और memory के बीच <b>सीधा</b> data ले जाए — <b>CPU को बीच में लाए बिना</b>। CPU सिर्फ़ शुरू में हुक्म देता है ("इतना data, यहाँ से वहाँ") और फिर अपना दूसरा काम करने चला जाता है। काम पूरा होने पर DMA controller CPU को एक <b>interrupt</b> भेजकर बता देता है।</p>
<div class="tk">🧠 <b>असली मिसाल:</b> घर का सारा सामान ट्रक से उतारकर <b>तू ख़ुद</b> एक-एक करके अंदर रखे (= बिना DMA, CPU थक जाए), या <b>मज़दूर</b> लगा दे जो सीधा ट्रक से कमरे में रख दें और काम ख़त्म होने पर तुझे बता दें (= <b>DMA</b>)। तू तब तक अपना ज़रूरी काम करता रह।</div>
<div class="tk">🧠 <b>अंदर से कैसे:</b> DMA के दौरान controller को memory bus चाहिए, इसलिए वह CPU से <b>bus माँगता</b> है। CPU थोड़ी देर के लिए bus छोड़ देता है — इसे <b>Cycle Stealing</b> (चक्र चुराना) कहते हैं। रास्ते: Burst mode (पूरा block एक साथ), Cycle stealing (एक-एक word), Transparent mode।</div>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>बिना DMA (Programmed I/O)</th><th>DMA के साथ</th></tr>
<tr><td>रास्ता</td><td>Device → <b>CPU</b> → Memory</td><td>Device → <b>सीधा</b> → Memory</td></tr>
<tr><td>CPU की भूमिका</td><td>हर byte ख़ुद ढोए</td><td>सिर्फ़ शुरू में हुक्म, अंत में interrupt</td></tr>
<tr><td>रफ़्तार</td><td>धीमा, CPU व्यस्त</td><td>तेज़, CPU आज़ाद</td></tr>
<tr><td>उपयोग</td><td>छोटा data</td><td><b>बड़ा data</b> — disk, sound card, graphics</td></tr>
</table></div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "DMA का मुख्य फ़ायदा?" → <b>CPU की भागीदारी के बिना</b> यंत्र और memory के बीच सीधा data transfer (यानी CPU आज़ाद रहे)। ध्यान: DMA transfer के <b>अंत में CPU को interrupt</b> ज़रूर मिलता है — यानी DMA और interrupt दुश्मन नहीं, <b>साथी</b> हैं।</div>
</div>

<div class="blk"><h3>3️⃣ Cache Memory + Mapping</h3>
<p><b>समस्या (Why):</b> CPU बिजली की रफ़्तार से चलता है, पर RAM उसकी तुलना में <u>बहुत</u> धीमी है। अगर CPU को हर बार RAM का इंतज़ार करना पड़े, तो उसकी सारी रफ़्तार बेकार। इसलिए CPU और RAM के <b>बीच</b> एक छोटी-पर-बहुत-तेज़ memory रख दी गई — यही <b>Cache</b>। इसका इकलौता मक़सद: दोनों की रफ़्तार का फ़र्क़ घटाना।</p>
<p><b>यह काम कैसे करता है (Internal working):</b> इसका आधार है <b>Locality of Reference</b> — यह देखा गया कि प्रोग्राम अक्सर <u>पास-पास का</u> और <u>हाल में इस्तेमाल हुआ</u> data बार-बार माँगते हैं (जैसे किसी loop की वही चंद lines)। इसलिए वही थोड़ा-सा "गरम" data cache में रख लो — अगली बार RAM तक जाना ही न पड़े।</p>
<div class="tk">🧠 <b>असली मिसाल:</b> RAM = घर की बड़ी अलमारी (बहुत सामान, पर उठने-जाने में समय)। Cache = मेज़ पर रखी वो 4-5 चीज़ें जो अभी बार-बार चाहिए (हाथ बढ़ाते ही मिल जाएँ)। रोज़मर्रा का सामान मेज़ पर रखना — यही cache का पूरा विचार है।</div>
<p><b>Cache Mapping (RAM का कौन-सा block cache में कहाँ बैठे — 3 तरीक़े):</b></p>
<div style="overflow-x:auto"><table>
<tr><th>तरीक़ा</th><th>नियम</th><th>अच्छा/बुरा</th></tr>
<tr><td><b>Direct Mapping</b></td><td>हर RAM block के लिए cache में <b>एक ही तयशुदा</b> जगह</td><td>सबसे सरल व सस्ता; पर टकराव ज़्यादा (दो block एक ही जगह लड़ें)</td></tr>
<tr><td><b>Associative Mapping</b></td><td>कोई भी block cache में <b>कहीं भी</b> बैठ सकता है</td><td>सबसे लचीला; पर ढूँढना महँगा (पूरा cache जाँचो)</td></tr>
<tr><td><b>Set-Associative</b></td><td>cache को छोटे "set" में बाँटो — block अपने set में <b>कहीं भी</b></td><td>बीच का सुनहरा रास्ता — असल CPU यही इस्तेमाल करते हैं</td></tr>
</table></div>
<div class="tk">🧠 <b>Hit और Miss:</b> CPU ने जो माँगा वह cache में <b>मिल गया</b> = <b>Hit</b> (तेज़)। नहीं मिला, RAM से लाना पड़ा = <b>Miss</b> (धीमा)। <b>Hit Ratio</b> = (hits ÷ कुल कोशिश) — यह जितना ज़्यादा, cache उतना कारगर। बढ़िया cache का hit ratio 90%+ होता है।</div>
<div class="tr">⚠️ <b>याद रखने का क्रम (तेज़ → धीमा, महँगा → सस्ता):</b> Register &gt; Cache &gt; RAM &gt; SSD &gt; HDD &gt; Tape। सबसे तेज़ हमेशा <b>Register</b> (Cache नहीं!) — यह पक्का ट्रैप है।</div>
</div>

<div class="blk"><h3>4️⃣ Operating System — परिभाषा और काम</h3>
<p><b>OS है क्या?</b> Operating System वह मुख्य software है जो user और hardware के <b>बीच बैठकर</b> सब कुछ सँभालता है — एक "manager" या "बिचौलिया (interface)"। जब तू फ़ाइल खोलता है, तो सीधे hard disk से बात नहीं करता; तेरी बात OS सुनता है, disk से data मँगवाता है, और स्क्रीन पर दिखा देता है।</p>
<p><b>क्यों ज़रूरी (Why)?</b> Hardware को सीधे चलाना बेहद जटिल है — हर अलग disk, प्रिंटर, memory की अपनी भाषा। OS यह सारी जटिलता छिपा लेता है और हमें आसान बटन/आदेश देता है। साथ ही यह <b>CPU को कभी ख़ाली नहीं बैठने देता</b> — एक प्रोग्राम I/O का इंतज़ार करे तो OS दूसरे को CPU दे देता है (multiprogramming)।</p>
<div class="tk">🎯 <b>OS के दो लक्ष्य:</b> <b>Primary (मुख्य)</b> = user को hardware <b>convenient</b> (आसान) तरीक़े से देना। <b>Secondary (गौण)</b> = hardware का <b>efficient</b> (कुशल, बिना बर्बादी) उपयोग। यह "आसानी बनाम कुशलता" वाला जोड़ा RSSB बार-बार पूछता है।</div>
<div class="tk">🧠 <b>OS के 5 मुख्य काम (हर एक एक "manager"):</b><br>
<b>Process Management</b> = कौन-सा प्रोग्राम कब CPU पाए (scheduling)।<br>
<b>Memory Management</b> = किस प्रोग्राम को RAM में कितनी जगह।<br>
<b>File Management</b> = data कैसे रखा, ढूँढा, सुरक्षित किया जाए।<br>
<b>Device (I/O) Management</b> = keyboard, प्रिंटर, disk से बातचीत (driver के ज़रिए)।<br>
<b>Security Management</b> = कौन क्या access कर सकता है (password, अनुमति)।</div>
<div class="tk">🖥️ <b>Interface के दो रूप:</b> <b>GUI</b> (Graphical User Interface) = icon, mouse, खिड़कियाँ — आसान, नौसिखिए के लिए (Windows, macOS)। <b>CLI/CUI</b> (Command Line) = टाइप करके आदेश — तेज़ पर याद रखना पड़े (Linux terminal, पुराना DOS)।</div>
<p style="margin-top:.6rem"><b>OS के दो हिस्से — Kernel और Shell:</b> OS एक ही ठोस चीज़ नहीं; उसके भीतर दो परतें हैं, और यह जोड़ी बार-बार पूछी जाती है।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Kernel (कर्नेल)</th><th>Shell (शेल)</th></tr>
<tr><td>जगह</td><td>OS का सबसे <b>भीतरी</b> कोर — hardware से सटा</td><td>सबसे <b>बाहरी</b> परत — user से सटा</td></tr>
<tr><td>काम</td><td>असली काम — memory, process, device, file सँभालना</td><td>user का आदेश लेकर kernel तक पहुँचाना (<b>दुभाषिया</b>)</td></tr>
<tr><td>User से बात</td><td>सीधे <b>नहीं</b> करता</td><td>सीधे करता है</td></tr>
<tr><td>मिसाल</td><td>Linux kernel</td><td>Bash, DOS का command.com</td></tr>
</table></div>
<div class="tk">🧠 <b>असली मिसाल (नारियल):</b> <b>Shell</b> = बाहरी सख़्त खोल जिसे तू छूता है। <b>Kernel</b> = अंदर की असली गिरी जिसमें सारा दम है। तू खोल से बात करता है, काम गिरी करती है।<br>
🧠 <b>Kernel के प्रकार:</b> <b>Monolithic</b> (सारी सेवाएँ एक ही बड़े कोर में — तेज़, पर एक बिगड़े तो सब बिगड़े; जैसे Linux) बनाम <b>Micro-kernel</b> (कोर में सिर्फ़ ज़रूरी, बाक़ी बाहर — ज़्यादा भरोसेमंद, थोड़ा धीमा)।</div>
<div class="tk">🧠 <b>User Mode बनाम Kernel Mode:</b> CPU दो हालतों में चलता है। <b>User mode</b> = आम program (सीमित अधिकार, hardware सीधे नहीं छू सकता)। <b>Kernel mode</b> = OS ख़ुद (पूरे अधिकार)। जब program को कोई ऐसा काम चाहिए जो सिर्फ़ OS कर सकता है (जैसे फ़ाइल पढ़ना), तो वह <b>System Call</b> करता है और CPU user→kernel mode में बदल जाता है — इसी बदलाव को <b>Mode Switch</b> कहते हैं।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> <b>Mode switch</b> (user ↔ kernel mode) और <b>Context switch</b> (एक process से दूसरी process पर) — दोनों अलग हैं! "दो processes के बीच बदलाव" पूछें तो जवाब <b>Context switch</b> है, mode switch नहीं। और Shell कोई कर्नेल का हिस्सा नहीं — वह <b>ऊपर की परत</b> है।</div>
<p><b>OS के प्रकार (कैसे और कब):</b></p>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>कैसे काम करता है</th><th>कहाँ/मिसाल</th></tr>
<tr><td><b>Batch</b></td><td>मिलते-जुलते काम समूह में इकट्ठे, बिना user के बीच दख़ल के चलते हैं</td><td>पुराने bank/payroll systems</td></tr>
<tr><td><b>Multiprogramming</b></td><td>कई programs एक साथ RAM में; एक रुके तो CPU दूसरे को</td><td>आम desktop OS की जड़</td></tr>
<tr><td><b>Time-sharing</b></td><td>हर user/काम को बारी-बारी छोटा-छोटा समय (Round Robin) — सबको लगे "मुझे तुरंत जवाब मिला"</td><td>कई users वाला server</td></tr>
<tr><td><b>Real-time (RTOS)</b></td><td>जवाब <b>तय समय-सीमा</b> में देना ही पड़े (Hard = बिल्कुल पक्का, Soft = लगभग)</td><td>ISRO राकेट, ICU मॉनिटर, ABS ब्रेक</td></tr>
<tr><td><b>Distributed</b></td><td>कई अलग मशीनें मिलकर एक जैसी दिखें व काम बाँटें</td><td>Google जैसे बड़े data centre</td></tr>
<tr><td><b>Multiprocessing</b></td><td>एक ही मशीन में कई CPU एक साथ काम करें</td><td>आज के multi-core PC/server</td></tr>
</table></div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "तय समय-सीमा में जवाब ज़रूरी" वाला OS हमेशा <b>Real-time</b> होता है। और OS का Primary goal <b>convenience</b> है, efficiency नहीं (वह secondary है) — इन्हें उलटा मत करना।</div>
</div>

<div class="blk"><h3>5️⃣ Process, Thread + States</h3>
<div class="viz">
<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
 <rect x="8" y="54" width="60" height="26" rx="6" fill="#8298b6" opacity=".25" stroke="#8298b6"/><text x="38" y="71" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">New</text>
 <rect x="100" y="54" width="60" height="26" rx="6" fill="#22d3ee" opacity=".25" stroke="#22d3ee"/><text x="130" y="71" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">Ready</text>
 <rect x="200" y="54" width="60" height="26" rx="6" fill="#ffc233" opacity=".25" stroke="#ffc233"/><text x="230" y="71" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">Running</text>
 <rect x="300" y="54" width="72" height="26" rx="6" fill="#26d07c" opacity=".25" stroke="#26d07c"/><text x="336" y="71" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">Terminated</text>
 <rect x="200" y="8" width="60" height="24" rx="6" fill="#ff4d5e" opacity=".25" stroke="#ff4d5e"/><text x="230" y="24" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">Waiting</text>
 <path d="M68 67 L98 67 M160 67 L198 67 M260 67 L298 67" stroke="#8298b6" stroke-width="1.4" fill="none"/>
 <path d="M230 54 L230 34 M215 34 Q150 40 150 54" stroke="#ff4d5e" stroke-width="1.2" fill="none"/>
</svg>
</div>
<p>New → Ready → Running → (Waiting ⇄ Ready) → Terminated। एक core पर एक समय <b>एक ही</b> process Running।</p>
<div class="tk">🧠 <b>Process बनाम Thread:</b> Process = चलता हुआ program (अपनी अलग memory)। Thread = process के अंदर का हल्का "sub-task" (memory साझा) — इसलिए thread बनाना/बदलना सस्ता। एक process में कई threads = multithreading।<br>
🧠 <b>PCB</b> (Process Control Block) = हर process की जानकारी (id, state, PC, registers)। <b>Context switch</b> = एक process से दूसरी पर जाना (state save/load)।</div>
<div class="tr">⚠️ <b>PYQ (Q13):</b> कई thread एक object साझा करें → <b>Race condition</b> (हल: mutual exclusion)। <b>PYQ (Q58):</b> सामान्यतः 5 states।</div>
</div>

<div class="blk"><h3>6️⃣ CPU Scheduling — बारी किसकी</h3>
<p><b>क्या और क्यों?</b> एक CPU, पर कतार में कई process। CPU Scheduler यह तय करता है कि Ready कतार में से <b>अगली बारी किसकी</b> हो — ताकि CPU ख़ाली न बैठे और सबको उचित मौक़ा मिले। यह चुनाव सीधे तय करता है कि कंप्यूटर कितना तेज़ और कितना "responsive" महसूस होगा।</p>
<p><b>दो पैमाने:</b> <b>TAT</b> (Turnaround Time) = काम पूरा होने का समय − आने का समय (कुल कितनी देर लगी)। <b>WT</b> (Waiting Time) = TAT − Burst (कतार में बेकार कितनी देर रुका)। अच्छा scheduler औसत WT कम रखता है। नीचे तीनों तरीक़े ख़ुद चलाकर उनका WT/TAT देख —</p>
<div class="sqlLab">
  <div id="schBar" class="sqlBar" style="flex-wrap:wrap">
    <button class="sqlBtn go" data-a="fcfs" onclick="schedRun('fcfs')">FCFS</button>
    <button class="sqlBtn" data-a="sjf" onclick="schedRun('sjf')">SJF</button>
    <button class="sqlBtn" data-a="rr" onclick="schedRun('rr')">Round Robin (q=2)</button>
  </div>
  <div style="font-size:.72rem;color:var(--dim);margin:4px 0">डेटा: P1(AT0,BT5) P2(AT1,BT3) P3(AT2,BT8) P4(AT3,BT2)</div>
  <div id="schOut" class="sqlOut"></div>
</div>
<div class="tk">🧠 <b>TAT</b> = Completion − Arrival; <b>WT</b> = TAT − Burst।<br>
🧠 <b>प्रकार:</b> <b>FCFS</b> (पहले आया — convoy effect), <b>SJF</b> (छोटा पहले — न्यूनतम औसत waiting, पर starvation), <b>Round Robin</b> (बराबर quantum — time sharing), <b>Priority</b> (starvation, हल: aging)।<br>
🧠 <b>Preemptive</b> (बीच में छीन सकते — RR, SRTF) बनाम <b>Non-preemptive</b> (FCFS, SJF)।</div>
</div>

<div class="blk"><h3>7️⃣ Process Synchronization</h3>
<p><b>समस्या (Why):</b> जब कई process एक ही साझा चीज़ (जैसे एक bank account, एक फ़ाइल) को <u>एक साथ</u> बदलने लगें, तो नतीजा इस पर निर्भर हो जाता है कि कौन पहले पहुँचा — इसे <b>Race Condition</b> कहते हैं। मिसाल: दो लोग एक ही account से एक साथ पैसे निकालें और दोनों को पुराना balance दिख जाए — bank का हिसाब बिगड़ जाए।</p>
<div class="tk">🧠 <b>Critical Section</b> = code का वह नाज़ुक हिस्सा जहाँ साझा संसाधन छुआ जाता है। नियम: एक समय पर <b>सिर्फ़ एक</b> process ही यहाँ घुसे — इसे <b>Mutual Exclusion</b> कहते हैं (जैसे एक ही टॉयलेट, अंदर एक ही जाए, बाक़ी बाहर रुकें)।<br>
🧠 <b>हल के औज़ार:</b> <b>Semaphore</b> (Dijkstra का बनाया — एक गिनती जो बताती है कितनी जगह ख़ाली), <b>Mutex</b> (सिर्फ़ 0/1 वाला ताला), <b>Monitor</b> (ऊँचे स्तर की सुविधा)।<br>
🧠 <b>Semaphore कैसे चलता है:</b> इसमें एक मान होता है। <b>P (wait/down)</b> = अंदर जाने की कोशिश → मान <b>1 घटाओ</b>। <b>V (signal/up)</b> = बाहर निकलना → मान <b>1 बढ़ाओ</b>। मान ऋणात्मक हो जाए तो उतनी process <b>blocked (कतार में इंतज़ार)</b> हैं। (नीचे calculator में ख़ुद देख।)</div>
<div class="sqlLab">
  <div class="nsBar" style="flex-wrap:wrap">
    <span style="font-size:.72rem;color:var(--dim)">init</span><input id="semInit" class="nsIn" value="8" style="max-width:55px">
    <span style="font-size:.72rem;color:var(--dim)">P(wait)</span><input id="semP" class="nsIn" value="12" style="max-width:55px">
    <span style="font-size:.72rem;color:var(--dim)">V(signal)</span><input id="semV" class="nsIn" value="7" style="max-width:55px">
    <button class="sqlBtn go" onclick="semRun()">= हल</button>
  </div>
  <div id="semOut" class="sqlOut"></div>
</div>
<div class="tr">⚠️ <b>PYQ (Q82):</b> semaphore = init − P + V। ऋणात्मक हो तो उतने process blocked। P घटाए, V बढ़ाए।</div>
</div>

<div class="blk"><h3>7️⃣-B Deadlock — जब सब अटक जाएँ</h3>
<p><b>Deadlock</b> = ऐसी हालत जहाँ हर process किसी संसाधन के लिए दूसरे का इंतज़ार कर रही है, और कोई आगे नहीं बढ़ पा रहा — पूरा तंत्र जाम।</p>
<p><b>असली मिसाल:</b> दो कारें एक तंग पुल पर आमने-सामने आ गईं — दोनों को आगे जाना है, दोनों को दूसरे के पीछे हटने का इंतज़ार है, कोई नहीं हटता। हमेशा के लिए अटक। यही deadlock है।</p>
<div class="tk">🧠 <b>Coffman की 4 शर्तें — deadlock के लिए चारों एक साथ ज़रूरी ("MHNC"):</b><br>
<b>M — Mutual Exclusion:</b> संसाधन एक बार में एक को ही (शेयर नहीं हो सकता)।<br>
<b>H — Hold and Wait:</b> process एक संसाधन पकड़े हुए है और दूसरे का इंतज़ार भी कर रही है।<br>
<b>N — No Preemption:</b> ज़बरन नहीं छीन सकते; process ख़ुद छोड़े तभी मिले।<br>
<b>C — Circular Wait:</b> इंतज़ार का गोल घेरा — A, B का इंतज़ार करे; B, A का।</div>
<div class="tk">🧠 <b>निपटने के 4 तरीक़े:</b><br>
<b>Prevention</b> = चारों में से किसी <u>एक</u> शर्त को कभी बनने ही मत दो।<br>
<b>Avoidance</b> = हर request पर पहले जाँचो कि "safe state" रहेगी या नहीं — यही <b>Banker's Algorithm</b> करता है (बैंक की तरह पहले देखता है कि सबका पैसा लौटाया जा सकेगा तभी loan देता है)।<br>
<b>Detection & Recovery</b> = deadlock हो जाने दो, फिर पकड़कर किसी process को मार दो।<br>
<b>Ostrich (शुतुरमुर्ग)</b> = नज़रअंदाज़ कर दो (कभी-कभार हो तो झेल लो — Windows/Linux अक्सर यही करते हैं)।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "कई thread एक साथ एक object साझा करें" → यह <b>Race Condition</b> है (deadlock नहीं)। और <b>Banker's Algorithm</b> हमेशा deadlock <b>Avoidance</b> है (Prevention नहीं)।</div>
</div>

<div class="blk"><h3>8️⃣ Memory Management — RAM किसको, कितनी</h3>
<p><b>काम क्या है?</b> RAM सीमित है, पर कई programs एक साथ चलना चाहते हैं। OS का Memory Manager तय करता है — किस program को RAM में कहाँ और कितनी जगह मिले, और काम ख़त्म होने पर वह जगह वापस कैसे लो। मक़सद: RAM की एक-एक byte का पूरा उपयोग, बिना टकराव के।</p>
<p><b>Allocation के दो तरीक़े:</b> <b>Contiguous</b> = हर program को एक ही लगातार टुकड़ा (सरल, पर बीच में छेद रह जाते हैं)। <b>Non-contiguous</b> = program को छोटे टुकड़ों में तोड़कर RAM में जहाँ-जहाँ जगह मिले बिखेर दो — यही आधुनिक तरीक़ा (Paging व Segmentation)।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Paging</th><th>Segmentation</th></tr>
<tr><td>टुकड़े</td><td><b>बराबर आकार</b> के (Page = तार्किक, Frame = भौतिक)</td><td><b>अलग-अलग आकार</b> के तार्किक हिस्से</td></tr>
<tr><td>आधार</td><td>भौतिक (memory की सुविधा)</td><td>तार्किक (program की बनावट — code, data, stack)</td></tr>
<tr><td>दिक़्क़त</td><td>Internal fragmentation</td><td>External fragmentation</td></tr>
</table></div>
<div class="tk">🧠 <b>Paging अंदर से कैसे चलता है:</b> program के तार्किक पते (page + offset) को असली RAM पते में बदलने के लिए OS एक <b>Page Table</b> रखता है — "page 3 असल में frame 7 में है" जैसी लिस्ट। CPU जब कोई पता माँगे, page table देखकर उसे असली frame में बदल देता है। इससे program को यह जानने की ज़रूरत ही नहीं कि वह RAM में बिखरा पड़ा है — उसे सब लगातार दिखता है।</div>
<div class="tk">🧠 <b>Fragmentation (जगह की बर्बादी) दो तरह की:</b><br>
<b>Internal</b> = टुकड़ा तय आकार का है पर program को उससे कम चाहिए → अंदर थोड़ी जगह बेकार (paging में)।<br>
<b>External</b> = कुल ख़ाली जगह तो काफ़ी है, पर वह छोटे-छोटे बिखरे टुकड़ों में है, एक बड़े program के लिए लगातार जगह नहीं मिलती → हल: <b>Compaction</b> (सारे programs को खिसकाकर ख़ाली जगह एक तरफ़ जमा करना)।</div>
</div>

<div class="blk"><h3>8️⃣-B Virtual Memory + Page Replacement</h3>
<p><b>Virtual Memory क्या है?</b> एक चालाकी जिससे RAM से भी <u>बड़े</u> program चल सकें। तरकीब: पूरे program को RAM में मत लाओ — सिर्फ़ वो हिस्से लाओ जो अभी चाहिए, बाक़ी hard disk पर रहने दो। इस तरह disk को RAM की "नक़ली बढ़ोतरी" की तरह इस्तेमाल किया जाता है (तकनीक: <b>Demand Paging</b> — page तभी लाओ जब सच में माँगा जाए)।</p>
<div class="tk">🧠 <b>Page Fault — तब क्या होता है (flow):</b> CPU ने कोई page माँगा → वह RAM में नहीं मिला (<b>Page Fault</b>) → OS उसे disk से ढूँढकर RAM के किसी ख़ाली frame में लाता है → अगर कोई frame ख़ाली नहीं, तो किसी पुराने page को हटाना पड़ेगा (यही Page Replacement) → फिर program आगे बढ़ता है।</div>
<div class="tk">🧠 <b>Page Replacement — किस पुराने page को हटाएँ (3 नीति):</b><br>
<b>FIFO</b> = जो सबसे पहले आया वही सबसे पहले हटाओ (सरल, पर "<b>Belady's Anomaly</b>" — कभी frame बढ़ाने पर भी fault बढ़ सकते हैं)।<br>
<b>LRU</b> (Least Recently Used) = जो सबसे लंबे समय से इस्तेमाल नहीं हुआ, उसे हटाओ (व्यावहारिक व अच्छा)।<br>
<b>Optimal</b> = जो भविष्य में सबसे देर बाद चाहिए वही हटाओ (सबसे अच्छा, पर भविष्य पता नहीं — सिर्फ़ बेंचमार्क)।</div>
<div class="tk">🧠 <b>Thrashing</b> = जब RAM इतनी कम पड़ जाए कि CPU का ज़्यादातर समय असली काम की जगह page लाने-ले-जाने में ही बीते — मशीन "हैंग" जैसी लगती है। हल: RAM बढ़ाओ या कम programs चलाओ।</div>
<div class="tr">⚠️ <b>PYQ (Q78):</b> छोटा <b>bootstrap loader ROM में</b> होता है (RAM में नहीं — RAM चालू होते समय ख़ाली/volatile है)। <b>PYQ (Q54):</b> job queue बनाने वाला program = <b>Spooler</b>।</div>
</div>

<div class="blk"><h3>9️⃣ File System — data को नाम देकर सँभालना</h3>
<p><b>File क्या है?</b> संबंधित data का एक नाम-बद्ध संग्रह (जैसे "resume.pdf")। User को disk के block/sector की चिंता नहीं करनी पड़ती — वह बस फ़ाइल का नाम जानता है, बाक़ी File System सँभालता है।</p>
<div class="tk">🧠 <b>File Allocation (फ़ाइल disk पर कैसे रखी जाए — 3 तरीक़े):</b><br>
<b>Contiguous</b> = फ़ाइल के सारे block एक साथ, लगातार (पढ़ना तेज़, पर external fragmentation)।<br>
<b>Linked</b> = block जहाँ-तहाँ बिखरे, हर block में अगले block का पता (जगह की बर्बादी नहीं, पर बीच का block सीधे नहीं पढ़ सकते)।<br>
<b>Indexed</b> = एक अलग "index block" में फ़ाइल के सारे block-पते की लिस्ट (direct access मिल जाए)।</div>
<div class="tk">🧠 <b>Directory</b> = फ़ाइलों को व्यवस्थित रखने का ढाँचा — Single-level (सब एक जगह), <b>Tree</b> (folder-में-folder, आज का सामान्य तरीक़ा)।<br>
🧠 <b>File Access (फ़ाइल कैसे पढ़ें):</b> <b>Sequential</b> (शुरू से क्रम में — टेप की तरह), <b>Direct/Random</b> (सीधे किसी भी हिस्से पर कूदो — disk की तरह), <b>Indexed</b> (index देखकर पहुँचो)।</div>
</div>

<div class="blk"><h3>9️⃣-B Disk Scheduling — head को कहाँ भेजें</h3>
<p><b>समस्या:</b> hard disk में एक चलता-फिरता "head" data पढ़ता/लिखता है, और उसका इधर-उधर जाना (seek) सबसे धीमा व महँगा काम है। जब कई read/write की माँगें एक साथ कतार में हों, तो head को किस क्रम में भेजें ताकि कुल घुमाई (seek time) सबसे कम हो — यही Disk Scheduling तय करता है।</p>
<div style="overflow-x:auto"><table>
<tr><th>Algorithm</th><th>कैसे</th><th>ख़ासियत</th></tr>
<tr><td><b>FCFS</b></td><td>जो माँग पहले आई, पहले पूरी</td><td>न्यायपूर्ण पर धीमा (head बहुत भटके)</td></tr>
<tr><td><b>SSTF</b></td><td>head के <b>सबसे पास</b> वाली माँग पहले</td><td>तेज़, पर दूर वाली माँगें भूखी रह सकती हैं (starvation)</td></tr>
<tr><td><b>SCAN</b></td><td>head एक दिशा में जाता हुआ रास्ते की सारी माँगें निपटाए, फिर पलटे</td><td>"<b>Elevator (लिफ़्ट) algorithm</b>"</td></tr>
<tr><td><b>C-SCAN</b></td><td>SCAN जैसा, पर छोर पर पहुँचकर सीधे शुरू में लौट जाए (एक ही दिशा में सेवा)</td><td>ज़्यादा एक-समान इंतज़ार</td></tr>
<tr><td><b>LOOK</b></td><td>SCAN जैसा, पर आख़िरी माँग तक ही जाए (पूरे छोर तक नहीं)</td><td>SCAN का बेहतर रूप</td></tr>
</table></div>
<div class="tk">🧠 <b>SCAN = लिफ़्ट क्यों?</b> लिफ़्ट ऊपर जाते समय बीच की सारी मंज़िलों पर रुकती है, फिर ऊपर पहुँचकर नीचे आते हुए बाक़ी पर — ठीक वैसे ही disk का head एक दिशा में सारी माँगें निपटाते हुए चलता है। इसीलिए इसका उपनाम "elevator algorithm" है।</div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "elevator algorithm" पूछते ही सीधा <b>SCAN</b> बोल। और <b>SSTF</b> तेज़ ज़रूर है पर <b>starvation</b> दे सकता है — यह जोड़ी याद रख।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🔌 <b>NAND, NOR = universal</b> | Flip-flop = 1 bit memory (sequential) | Decoder = 2ⁿ input<br>
🔢 <b>2's complement</b> = ऋणात्मक | Fetch→Decode→Execute | ALU हिसाब, CU हुक्म<br>
⚡ Cache mapping: Direct/Associative/Set | Register &gt; Cache &gt; RAM &gt; SSD &gt; HDD<br>
🎯 OS goal: convenient (primary) + efficient | GUI vs CLI | types: batch/time-sharing/real-time<br>
🔄 Process (अलग memory) vs Thread (साझा) | 5 states | context switch | race condition<br>
📊 SJF = कम औसत waiting | RR = time sharing | preemptive vs non-preemptive<br>
🔒 Deadlock 4 शर्तें <b>MHNC</b> | Banker's = avoidance | semaphore init−P+V<br>
💾 Paging (बराबर) vs Segmentation (तार्किक) | Internal vs External fragmentation<br>
🔁 Page replace: FIFO/LRU/Optimal | Belady FIFO में | Thrashing<br>
💿 Disk: FCFS/SSTF/<b>SCAN (elevator)</b>/C-SCAN | bootstrap ROM में | Spooler = job queue
</div>
</div>
`;


CARDS.p2os = [
  ['[रिकॉल] कौन-से दो gates "universal gates" कहलाते हैं?', 'NAND और NOR — इन अकेले से कोई भी अन्य gate बनाया जा सकता है।', 'नैंड-नॉर सर्वशक्ति'],
  ['[रिकॉल] Deadlock की चार शर्तें कौन-सी हैं?', 'Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait (MHNC)।', 'MHNC'],
  ['[रिकॉल] छोटा bootstrap loader कहाँ स्थित होता है?', 'ROM में।', 'रोम में बूट'],
  ['[रिवर्स रिकॉल] "2ⁿ input lines को n output में बदलने वाला combinational circuit" — कौन?', 'Decoder (या Demultiplexer)।', '2ⁿ = Decoder'],
  ['[रिवर्स रिकॉल] "job queue बनाने वाला विशेष software" — क्या कहलाता है?', 'Spooler।', 'स्पूल = क़तार'],
  ['[रिक्त स्थान] कंप्यूटर ऋणात्मक संख्याएँ ______ रूप में रखता है, जिसमें MSB ______ bit होती है।', "2's complement; sign", 'दो का पूरक'],
  ['[रिक्त स्थान] Instruction cycle के तीन मुख्य चरण ______ → ______ → ______ हैं।', 'Fetch → Decode → Execute', 'FDE'],
  ['[कथन आधारित] कथन: SJF scheduling औसत waiting time के लिहाज़ से सबसे बेहतर है।', 'सही। पर लंबे jobs starvation का शिकार हो सकते हैं।', 'छोटा पहले'],
  ['[कथन आधारित] कथन: AND gate एक universal gate है।', 'ग़लत। सिर्फ़ NAND और NOR universal हैं।', 'AND साधारण'],
  ['[मैच] मिलाओ: (a) AND (b) OR (c) XOR (d) NOT', '(a) दोनों 1→1, (b) कोई एक 1→1, (c) अलग→1, (d) उल्टा।', 'चार बुनियादी gate'],
  ['[मैच] मिलाओ: (a) FCFS (b) SJF (c) Round Robin (d) Priority', '(a) पहले आया पहले, (b) छोटा काम पहले, (c) बराबर time slice, (d) प्राथमिकता के हिसाब।', 'चार scheduler'],
  ['[मैच] मिलाओ: (a) FIFO (b) LRU (c) Optimal (d) Page fault', '(a) सबसे पुराना हटाओ, (b) सबसे कम हाल में इस्तेमाल हटाओ, (c) सबसे देर बाद चाहिए वो हटाओ, (d) चाहा page RAM में न मिलना।', 'पेज बदलो'],
  ['[तुलना] Combinational और Sequential circuit में फ़र्क़?', 'Combinational का output सिर्फ़ अभी के input पर (Adder, Decoder, MUX)। Sequential का output पिछली हालत/memory पर भी (Flip-flop, Counter, Register)।', 'याददाश्त है या नहीं'],
  ['[तुलना] Paging और Segmentation में फ़र्क़?', 'Paging में memory बराबर आकार के टुकड़ों (pages) में बँटती है। Segmentation में तार्किक, अलग-अलग आकार के टुकड़ों (code, data, stack) में।', 'बराबर बनाम तार्किक'],
  ['[तुलना] Deadlock avoidance और prevention में फ़र्क़?', 'Prevention = चारों शर्तों में से किसी एक को कभी बनने ही मत दो। Avoidance = हर request पर जाँचो कि safe state रहेगी या नहीं (Banker\'s Algorithm)।', 'रोको बनाम बचो'],
  ['[कालक्रम] एक process की सामान्य states आगमन क्रम में लिखो।', 'New → Ready → Running → (Waiting) → Terminated।', 'पाँच अवस्थाएँ'],
  ['[Code Output] Semaphore init 8, फिर 12 P (wait) और 7 V (signal) — अंतिम मान?', '8 − 12 + 7 = 3। मान धनात्मक है, इसलिए कोई process blocked नहीं।', 'init−P+V'],
  ['[Code Output] Semaphore init 2, फिर 5 P और 1 V — मान और blocked process?', '2 − 5 + 1 = −2। ऋणात्मक होने से 2 process blocked (waiting) हैं।', 'ऋण = blocked'],
  ['[True/False] एक समय में CPU पर एक से अधिक process "Running" अवस्था में हो सकती हैं (single core)।', 'False। Single core पर एक समय में सिर्फ़ एक process Running। बाक़ी Ready में इंतज़ार करती हैं।', 'एक कोर, एक running'],
  ['[True/False] Banker\'s Algorithm deadlock avoidance की तकनीक है।', 'True। यह हर संसाधन-अनुरोध पर पहले जाँचता है कि system safe state में रहेगा या नहीं।', 'बैंकर बचाता है'],
  ['[ट्रैप कार्ड] कई threads एक साथ एक ही object को बदलें तो क्या स्थिति बनती है?', 'Race condition। हल = mutual exclusion / synchronization (lock, semaphore)। इसे deadlock मत समझो — दोनों अलग हैं।', 'दौड़ की हालत'],
  ['[ट्रैप कार्ड] FIFO page replacement में page frames बढ़ाने पर page faults हमेशा घटते हैं?', 'नहीं! FIFO में frames बढ़ाने पर faults बढ़ भी सकते हैं — इसे Belady\'s Anomaly कहते हैं। LRU और Optimal में ऐसा नहीं होता।', "Belady की विसंगति"],
  ['[ट्रैप कार्ड] Flip-flop combinational circuit है?', 'नहीं! Flip-flop sequential है (उसमें memory है — पिछली हालत याद रखता है)। यही 1 bit की सबसे छोटी memory है।', 'फ्लिप = याददाश्त']
];

QB.p2os = [
  { q: 'निम्न में से कौन-से universal gates हैं?', o: ['AND और OR', 'NAND और NOR', 'NOT और XOR', 'XOR और XNOR'], a: 1, e: 'NAND और NOR universal gates हैं — इन अकेले से AND, OR, NOT समेत कोई भी logic circuit बनाया जा सकता है।', trap: 'AND और OR चुन लेना — वे बुनियादी तो हैं, पर universal नहीं।', d: 2, tag: 'Logic Gates', pyq: 'बार-बार' },
  { q: '2ⁿ input lines और n output lines वाला combinational circuit क्या कहलाता है?', o: ['Multiplexer', 'Encoder', 'Decoder', 'Flip-flop'], a: 1, e: 'Encoder 2ⁿ input lines को n output lines में बदलता है (उल्टा काम Decoder करता है — n input को 2ⁿ output)। दोनों combinational हैं। (प्रश्न के शब्दों पर ध्यान दें — किसकी दिशा पूछी गई है।)', trap: 'Encoder और Decoder की दिशा उलट देना; Flip-flop चुन लेना (वो sequential है)।', d: 3, tag: 'Digital', pyq: 'Paper-II Q57 पैटर्न' },
  { q: 'यदि एक semaphore को 8 से initialize किया जाए, फिर उस पर 12 P (wait) और 7 V (signal) operations हों, तो अंतिम मान क्या होगा?', o: ['3', '-3', '13', '27'], a: 0, e: 'S = init − (P की संख्या) + (V की संख्या) = 8 − 12 + 7 = 3। धनात्मक होने से कोई process blocked नहीं है।', trap: 'P और V के चिह्न उलट देना (P घटाता है, V बढ़ाता है)।', d: 3, tag: 'Synchronization', pyq: 'Paper-II Q82 — हूबहू' },
  { q: 'जब कई threads एक साथ एक ही साझा object को access/modify करें, तो कौन-सी स्थिति उत्पन्न होती है?', o: ['Deadlock', 'Race condition', 'Starvation', 'Page fault'], a: 1, e: 'Race condition — जब नतीजा इस बात पर निर्भर हो जाए कि कौन-सा thread पहले पहुँचा। हल: mutual exclusion / synchronization (lock, semaphore, monitor)।', trap: 'Deadlock चुन लेना — deadlock तब है जब सब एक-दूसरे का इंतज़ार करते हुए अटक जाएँ, यह अलग है।', d: 2, tag: 'Synchronization', pyq: 'Paper-II Q13 — हूबहू' },
  { q: 'छोटा bootstrap loader program कहाँ स्थित होता है?', o: ['Hard Disk', 'RAM', 'ROM', 'Cache'], a: 2, e: 'Bootstrap loader ROM में होता है (non-volatile), ताकि मशीन चालू होते ही चल सके और OS को disk से RAM में लोड कर सके।', trap: 'RAM चुन लेना — RAM तो चालू होते समय ख़ाली/volatile होती है।', d: 2, tag: 'Booting', pyq: 'Paper-II Q78 — हूबहू' },
  { q: 'Job queue बनाने वाला विशेष software क्या कहलाता है?', o: ['Compiler', 'Spooler', 'Loader', 'Debugger'], a: 1, e: 'Spooler (Simultaneous Peripheral Operations On-Line) प्रिंट जैसे कामों की queue बनाकर उन्हें क्रम से भेजता है, ताकि CPU को धीमे device का इंतज़ार न करना पड़े।', trap: 'Loader चुन लेना — वो program को memory में लाता है, queue नहीं बनाता।', d: 2, tag: 'OS Concepts', pyq: 'Paper-II Q54 — हूबहू' },
  { q: 'Deadlock होने के लिए Coffman की चार आवश्यक शर्तों में निम्न में से कौन-सी शामिल नहीं है?', o: ['Mutual Exclusion', 'Hold and Wait', 'Circular Wait', 'Preemption'], a: 3, e: 'चार शर्तें हैं — Mutual Exclusion, Hold and Wait, No Preemption और Circular Wait। "Preemption" (छीन लेना) उल्टा है — असली शर्त तो "No Preemption" है।', trap: 'Preemption और No Preemption में अंतर न पकड़ना।', d: 3, tag: 'Deadlock', pyq: 'बार-बार' },
  { q: 'CPU scheduling में औसत waiting time के लिहाज़ से सबसे बेहतर (गैर-preemptive) algorithm कौन-सा है?', o: ['FCFS', 'SJF', 'Round Robin', 'Priority'], a: 1, e: 'SJF (Shortest Job First) गणितीय रूप से न्यूनतम औसत waiting time देता है — छोटे काम पहले निपटा देता है। पर लंबे jobs starvation झेल सकते हैं।', trap: 'FCFS चुन लेना — वो सरल है पर convoy effect से औसत waiting बढ़ा देता है।', d: 2, tag: 'Scheduling', pyq: 'बार-बार' },
  { q: 'एक process की सामान्यतः कितनी states होती हैं?', o: ['3', '5', '7', '2'], a: 1, e: 'सामान्य model में 5 states — New, Ready, Running, Waiting (Blocked), Terminated।', trap: '2 (सिर्फ़ running/not-running) चुन लेना — वो अति-सरलीकृत model है।', d: 1, tag: 'Process', pyq: 'Paper-II Q58 पैटर्न' },
  { q: 'Banker\'s Algorithm किसके लिए प्रयोग होता है?', o: ['Deadlock prevention', 'Deadlock avoidance', 'Deadlock detection', 'Memory allocation only'], a: 1, e: 'Banker\'s Algorithm deadlock avoidance है — यह हर संसाधन-अनुरोध से पहले जाँचता है कि system "safe state" में रहेगा या नहीं, और असुरक्षित होने पर अनुरोध रोक देता है।', trap: 'Prevention और avoidance को एक मान लेना — prevention शर्तें तोड़ता है, avoidance जाँच करता है।', d: 3, tag: 'Deadlock', pyq: 'गहरा' },
  { q: 'कंप्यूटर में ऋणात्मक पूर्णांक सबसे प्रचलित रूप से किस रूप में संग्रहीत होते हैं?', o: ["1's complement", "2's complement", 'Sign-magnitude', 'BCD'], a: 1, e: "2's complement सबसे प्रचलित है क्योंकि इसमें जोड़-घटाव एक ही circuit से होता है और शून्य का केवल एक ही रूप होता है (1's complement में दो — +0 और −0)।", trap: "1's complement चुन लेना — वो पुराना और कम प्रयुक्त है।", d: 2, tag: 'CPU', pyq: 'बार-बार' },
  { q: 'FIFO page replacement में frames बढ़ाने पर page faults का बढ़ जाना क्या कहलाता है?', o: ['Thrashing', "Belady\'s Anomaly", 'Starvation', 'Fragmentation'], a: 1, e: "Belady\'s Anomaly — FIFO में कभी-कभी frames बढ़ाने पर भी page faults बढ़ जाते हैं। LRU और Optimal (stack algorithms) में ऐसा नहीं होता।", trap: 'Thrashing चुन लेना — वो अलग है (बहुत ज़्यादा paging से CPU का समय बर्बाद होना)।', d: 3, tag: 'Memory', pyq: 'गहरा' },
  { q: 'Flip-flop किस श्रेणी का circuit है और उसकी क्षमता क्या है?', o: ['Combinational, 8 bit', 'Sequential, 1 bit memory', 'Combinational, कोई memory नहीं', 'Sequential, 8 bit'], a: 1, e: 'Flip-flop sequential circuit है क्योंकि उसका output पिछली हालत पर निर्भर करता है — यही 1 bit की सबसे छोटी memory इकाई है।', trap: 'Combinational मान लेना — combinational में memory नहीं होती।', d: 2, tag: 'Digital', pyq: 'बार-बार' },
  { q: 'Round Robin scheduling किस प्रकार के system के लिए सबसे उपयुक्त है?', o: ['Batch system', 'Time-sharing system', 'Real-time hard system', 'Single-user system'], a: 1, e: 'Round Robin हर process को बराबर time quantum देकर बारी-बारी चलाता है — इसलिए time-sharing (जहाँ कई users एक साथ जल्दी response चाहते हैं) के लिए आदर्श है।', trap: 'Batch system चुन लेना — वहाँ FCFS/SJF ज़्यादा उपयुक्त है।', d: 2, tag: 'Scheduling', pyq: 'बार-बार' },
  { q: 'Virtual memory का मुख्य उद्देश्य क्या है?', o: ['RAM की गति बढ़ाना', 'उपलब्ध RAM से बड़े programs चलाना (disk को RAM की तरह इस्तेमाल करके)', 'CPU cache बढ़ाना', 'फ़ाइलें स्थायी रूप से सहेजना'], a: 1, e: 'Virtual memory disk के एक हिस्से को RAM की तरह इस्तेमाल करती है, जिससे भौतिक RAM से बड़े programs भी चल सकते हैं। तकनीक: paging और segmentation।', trap: '"RAM की गति बढ़ाना" चुन लेना — virtual memory असल में धीमी है (disk शामिल है), पर जगह बढ़ाती है।', d: 2, tag: 'Memory', pyq: 'बार-बार' },
  { q: 'Instruction cycle का सही क्रम क्या है?', o: ['Decode → Fetch → Execute', 'Fetch → Decode → Execute', 'Execute → Fetch → Decode', 'Fetch → Execute → Decode'], a: 1, e: 'पहले instruction memory से लाया जाता है (Fetch), फिर उसका अर्थ निकाला जाता है (Decode), फिर उसे चलाया जाता है (Execute)।', trap: 'क्रम उलट देना।', d: 1, tag: 'CPU', pyq: 'आधारभूत' },
  { q: 'एक multiprogramming system में दो memory-resident processes के बीच transition क्या कहलाता है?', o: ['Process switch (Context switch)', 'Mode switch', 'Transition switch', 'Page switch'], a: 0, e: 'एक process से दूसरी पर जाने के लिए CPU को पहली की स्थिति (context) सहेजनी और दूसरी की लोड करनी पड़ती है — इसे process/context switch कहते हैं।', trap: 'Mode switch चुन लेना — वो user↔kernel mode के बीच होता है, process बदलने में नहीं।', d: 2, tag: 'Process', pyq: '1000 MCQs Q33 — हूबहू' },
  { q: '1024 × 8 क्षमता वाली RAM के लिए कितनी address lines चाहिए?', o: ['8', '10', '1024', '13'], a: 1, e: '1024 = 2¹⁰, इसलिए 1024 words को address करने के लिए 10 address lines चाहिए। "×8" प्रत्येक word की चौड़ाई (8 bit) बताता है, address lines नहीं।', trap: '8 चुन लेना (word width को address lines समझ लेना)।', d: 3, tag: 'Memory', pyq: 'Paper-II Q50 पैटर्न' },
  { q: 'Segmentation और Paging में मुख्य अंतर क्या है?', o: ['दोनों बिल्कुल एक जैसे हैं', 'Paging बराबर आकार के टुकड़े बनाता है, Segmentation तार्किक अलग-अलग आकार के', 'Segmentation बराबर आकार का है', 'Paging सिर्फ़ ROM पर होता है'], a: 1, e: 'Paging memory को बराबर आकार के pages/frames में बाँटता है (भौतिक दृष्टि)। Segmentation तार्किक इकाइयों (code, data, stack) में बाँटता है, जिनका आकार अलग-अलग होता है।', trap: 'दोनों को उलट देना।', d: 2, tag: 'Memory', pyq: 'बार-बार' },
  { q: 'Priority scheduling में कम प्राथमिकता वाले process के हमेशा इंतज़ार करते रह जाने की समस्या को क्या कहते हैं, और उसका हल क्या है?', o: ['Deadlock; Banker\'s Algorithm', 'Starvation; Aging', 'Thrashing; Paging', 'Race condition; Locking'], a: 1, e: 'Starvation = कम प्राथमिकता वाला process कभी CPU न पाना। हल Aging है — इंतज़ार करते process की प्राथमिकता धीरे-धीरे बढ़ा देना, ताकि आख़िरकार उसकी बारी आ जाए।', trap: 'Deadlock चुन लेना — starvation में process अटका नहीं, बस लगातार पीछे धकेला जाता है।', d: 3, tag: 'Scheduling', pyq: 'गहरा' }
];

UNIT_INIT.p2os = function () { schedRun('fcfs'); semRun(); };
