/*! MODULE: data/paper2/u-coaos.js — Paper-II Unit: Computer Organization & Operating System (PYQ ≈ 9/100) */

CH.push({ id: 'p2os', ic: '⚙️', t: 'CO & OS', s: 'Logic gates • CPU • Scheduling • Deadlock • Memory', xp: 130, p: 2 });

LESSON.p2os = `
<div class="blk"><h3>⚙️ Computer Organization + Operating System — पूरा नक़्शा</h3>
<p><b>सरल भाषा में:</b> दो कहानियाँ। <b>CO</b> = कंप्यूटर <b>अंदर से</b> कैसे बना (gates, CPU, memory, number)। <b>OS</b> = वो <b>manager</b> जो hardware और तेरे बीच बैठकर सब सँभालता है।</p>
<div class="tk">💡 <b>OS बना ही क्यों?</b> बिना OS के user सीधे hardware नहीं चला सकता — बहुत जटिल। OS <b>CPU, memory, I/O</b> को कई programs में बाँटकर (multiprogramming) CPU को कभी ख़ाली नहीं रहने देता। यह user और hardware के बीच <b>intermediary/interface</b> है।</div>
</div>

<div class="blk"><h3>1️⃣ Logic Gates — डिजिटल की ईंटें</h3>
<div style="overflow-x:auto"><table>
<tr><th>Gate</th><th>नियम</th><th>याद</th></tr>
<tr><td><b>AND</b></td><td>दोनों 1 → 1</td><td>"दोनों राज़ी"</td></tr>
<tr><td><b>OR</b></td><td>कोई एक 1 → 1</td><td>"एक भी राज़ी"</td></tr>
<tr><td><b>NOT</b></td><td>उल्टा</td><td>Inverter</td></tr>
<tr><td><b>NAND</b></td><td>AND का उल्टा</td><td>⭐ Universal</td></tr>
<tr><td><b>NOR</b></td><td>OR का उल्टा</td><td>⭐ Universal</td></tr>
<tr><td><b>XOR</b></td><td>अलग → 1</td><td>"अलग तो 1"</td></tr>
<tr><td><b>XNOR</b></td><td>बराबर → 1</td><td>XOR का उल्टा</td></tr>
</table></div>
<div class="tr">⚠️ <b>NAND और NOR = universal gates</b> (इन अकेले से कोई भी gate बने)। AND/OR universal नहीं।</div>
<div class="tk">🧠 <b>Boolean बीजगणित:</b> De Morgan के नियम — (A·B)' = A'+B' और (A+B)' = A'·B'। Truth table से circuit, K-map से सरलीकरण।<br>
🧠 <b>Combinational</b> (output सिर्फ़ अभी के input पर): Adder (Half/Full), <b>Decoder</b>, Encoder, MUX, DeMUX। <b>Sequential</b> (पिछली हालत/memory पर भी): Flip-flop (SR, D, JK, T), Register, Counter। <b>Flip-flop = 1 bit की सबसे छोटी memory।</b></div>
<div class="tr">⚠️ <b>PYQ (Q57):</b> 2ⁿ input lines वाला combinational = <b>Decoder/Demux</b>। <b>PYQ (Q50):</b> 1024×8 RAM → 1024 = 2¹⁰ → 10 address lines।</div>
</div>

<div class="blk"><h3>2️⃣ Number Representation + CPU</h3>
<div class="tk">🧠 <b>ऋणात्मक संख्या:</b> <b>Sign-magnitude</b> (MSB = चिह्न), <b>1's complement</b> (हर bit उल्टो), <b>2's complement</b> (1's + 1 — सबसे प्रचलित, क्योंकि जोड़-घटाव एक ही circuit से और शून्य का एक ही रूप)।<br>
🧠 <b>Floating point (IEEE 754):</b> sign + exponent + mantissa। <b>Fixed vs floating</b> — floating में बड़ी रेंज।</div>
<div class="tk">🧠 <b>CPU के भाग:</b> ALU (हिसाब+logic), CU (हुक्म), Registers (PC=अगला पता, IR=मौजूदा instruction, MAR/MDR=memory से बात, Accumulator=नतीजा)।<br>
🧠 <b>Instruction Cycle:</b> <b>Fetch → Decode → Execute</b> (→ Store)।<br>
🧠 <b>Addressing modes:</b> Immediate (मान सीधे), Direct (पता दिया), Indirect (पते का पता), Register, Indexed।</div>
<div class="tk">🧠 <b>Pipelining</b> = instruction के चरण एक साथ (धुलाई-सुखाई साथ) → throughput बढ़े, पर hazards। <b>RISC</b> (कम, सरल instruction) बनाम <b>CISC</b> (ज़्यादा, जटिल)।</div>
<div class="tr">⚠️ गणना <b>ALU</b> करता है, CU नहीं। Register CPU का हिस्सा है।</div>
</div>

<div class="blk"><h3>3️⃣ Cache Mapping + Memory Organization</h3>
<div class="tk">🧠 <b>Cache क्यों?</b> CPU तेज़, RAM धीमी — बीच में छोटी-तेज़ cache, ताकि रफ़्तार का फ़र्क़ घटे। <b>Locality of reference</b> (पास का data बार-बार चाहिए) इसका आधार।<br>
🧠 <b>Cache mapping 3 तरीक़े:</b> Direct (हर block एक ही जगह), Associative (कहीं भी), Set-associative (बीच का रास्ता)।<br>
🧠 <b>Hit</b> = cache में मिल गया; <b>Miss</b> = नहीं मिला, RAM से लाना पड़ा। Hit ratio जितना ज़्यादा, उतना अच्छा।</div>
<div class="tr">⚠️ Memory क्रम (तेज़→धीमा): Register &gt; Cache &gt; RAM &gt; SSD &gt; HDD &gt; Tape।</div>
</div>

<div class="blk"><h3>4️⃣ OS — परिभाषा, लक्ष्य, प्रकार</h3>
<div class="tk">🧠 <b>OS के लक्ष्य:</b> Primary = user को hardware <b>convenient</b> (आसान) तरीक़े से देना; Secondary = <b>efficient</b> (कुशल) उपयोग।<br>
🧠 <b>Interface:</b> <b>GUI</b> (Graphical — icons, mouse; Windows) बनाम <b>CLI/CUI</b> (Command line — टाइप करो; Linux/DOS terminal)।</div>
<div style="overflow-x:auto"><table>
<tr><th>OS प्रकार</th><th>ख़ासियत</th></tr>
<tr><td><b>Batch</b></td><td>काम समूह में, बिना user दखल</td></tr>
<tr><td><b>Multiprogramming</b></td><td>कई programs RAM में, CPU बँटे</td></tr>
<tr><td><b>Time-sharing</b></td><td>हर user को बारी (Round Robin)</td></tr>
<tr><td><b>Real-time</b></td><td>तय समय-सीमा (ISRO, ICU) — Hard/Soft</td></tr>
<tr><td><b>Distributed</b></td><td>कई मशीनें मिलकर</td></tr>
<tr><td><b>Multiprocessing</b></td><td>कई CPU</td></tr>
</table></div>
<div class="tk">🧠 <b>OS के काम:</b> Process, Memory, File, Device (I/O), Security management। मिसाल: Windows, Linux, Unix, macOS, Android।</div>
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

<div class="blk"><h3>6️⃣ CPU Scheduling — चला के देख</h3>
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

<div class="blk"><h3>7️⃣ Synchronization + Deadlock</h3>
<p><b>असली मिसाल:</b> दो कारें तंग पुल पर आमने-सामने, कोई पीछे नहीं हटता — deadlock।</p>
<div class="tk">🧠 <b>Critical Section</b> = code का वो हिस्सा जहाँ साझा संसाधन छुआ जाए — एक समय एक ही process घुसे (mutual exclusion)। हल: <b>Semaphore</b> (Dijkstra), Mutex, Monitor।<br>
🧠 <b>Coffman की 4 शर्तें — "MHNC":</b> <b>M</b>utual Exclusion, <b>H</b>old & Wait, <b>N</b>o Preemption, <b>C</b>ircular Wait (चारों एक साथ हों तभी deadlock)।<br>
🧠 <b>निपटने के तरीक़े:</b> Prevention (शर्त तोड़ो), Avoidance (<b>Banker's Algorithm</b> — safe state जाँचो), Detection & Recovery, Ostrich (नज़रअंदाज़)।</div>
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

<div class="blk"><h3>8️⃣ Memory Management</h3>
<div class="tk">🧠 <b>Allocation:</b> Contiguous (एक टुकड़ा) बनाम Non-contiguous (Paging/Segmentation)।<br>
<b>Paging</b> = बराबर आकार के pages/frames (भौतिक)। <b>Segmentation</b> = तार्किक, अलग-अलग आकार (code/data/stack)।<br>
🧠 <b>Fragmentation:</b> Internal (page के अंदर बची जगह) बनाम External (बिखरी ख़ाली जगह — Compaction से हल)।<br>
🧠 <b>Virtual Memory</b> = disk को RAM की तरह — बड़े program चलें। <b>Page fault</b> = चाहा page RAM में नहीं।</div>
<div class="tk">🧠 <b>Page replacement:</b> <b>FIFO</b> (सबसे पुराना — Belady's anomaly), <b>LRU</b> (सबसे कम हाल में इस्तेमाल), <b>Optimal</b> (सबसे देर बाद चाहिए — बेंचमार्क)। <b>Thrashing</b> = बहुत ज़्यादा paging से CPU का समय बर्बाद।</div>
<div class="tr">⚠️ <b>PYQ (Q78):</b> bootstrap loader = ROM में। <b>PYQ (Q54):</b> job queue = Spooler।</div>
</div>

<div class="blk"><h3>9️⃣ File System + Disk Scheduling</h3>
<div class="tk">🧠 <b>File</b> = related data का नाम-बद्ध संग्रह। <b>File allocation:</b> Contiguous, Linked, Indexed। <b>Directory</b> = files का संगठन (single-level, tree, आदि)।<br>
🧠 <b>File access:</b> Sequential, Direct/Random, Indexed।<br>
🧠 <b>Disk scheduling</b> (head कहाँ जाए): <b>FCFS</b>, <b>SSTF</b> (सबसे पास पहले), <b>SCAN</b> (लिफ़्ट — एक दिशा फिर लौटे), <b>C-SCAN</b>, LOOK।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> SSTF starvation दे सकता है; SCAN "elevator algorithm" कहलाता है।</div>
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
