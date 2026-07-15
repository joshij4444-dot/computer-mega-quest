/*! MODULE: data/paper2/u-dsa.js — Paper-II Unit: Data Structures & Algorithms (PYQ ≈ 8/100) */

CH.push({ id: 'p2dsa', ic: '🌳', t: 'DSA', s: 'Stack • Queue • Tree • Sorting • Notation', xp: 130, p: 2 });

LESSON.p2dsa = `
<div class="blk"><h3>🌳 Data Structures & Algorithms — पूरा नक़्शा</h3>
<p><b>सरल भाषा में:</b> Data Structure = डेटा रखने का <b>तरीक़ा</b> (वही सामान, अलग अलमारी)। Algorithm = उस पर काम करने का <b>तरीक़ा</b>। अलमारी बदलते ही रफ़्तार बदल जाती है।</p>
<div class="tk">💡 <b>यह विषय बना ही क्यों?</b> 10 लाख नामों में एक ढूँढना — बिना सोचे एक-एक (Linear, 10 लाख क़दम); पर sorted हो और आधा-आधा छोड़ो (Binary, ~20 क़दम)। यही पूरा विषय — <i>सही ढाँचा चुनकर काम हज़ार गुना तेज़ करना</i>।</div>
<div style="overflow-x:auto"><table>
<tr><th>वर्ग</th><th>मिसाल</th></tr>
<tr><td><b>Linear</b> (एक कतार)</td><td>Array, Stack, Queue, Linked List</td></tr>
<tr><td><b>Non-Linear</b> (शाखाएँ)</td><td>Tree, Graph</td></tr>
</table></div>
</div>

<div class="blk"><h3>1️⃣ Algorithm विश्लेषण — Time & Space Complexity</h3>
<p>हर algorithm की क़ीमत दो चीज़ों में मापते हैं — <b>Time</b> (कितने क़दम) और <b>Space</b> (कितनी memory)। इनपुट n बड़ा होने पर ये कैसे बढ़ते हैं, यही असल सवाल है।</p>
<div class="tk">🧠 <b>तीन notation:</b> <b>Big-O (O)</b> = ऊपरी सीमा (worst case, सबसे ज़रूरी) • <b>Omega (Ω)</b> = निचली सीमा (best) • <b>Theta (Θ)</b> = दोनों (average/exact)।<br>
🧠 <b>बढ़ने का क्रम (धीमे→तेज़):</b><br>
<b>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ) &lt; O(n!)</b><br>
<i>constant सबसे अच्छा, factorial सबसे बुरा।</i></div>
<div style="overflow-x:auto"><table>
<tr><th>Complexity</th><th>मिसाल</th></tr>
<tr><td>O(1)</td><td>array के index से पढ़ना</td></tr>
<tr><td>O(log n)</td><td>Binary search</td></tr>
<tr><td>O(n)</td><td>Linear search</td></tr>
<tr><td>O(n log n)</td><td>Merge/Quick/Heap sort</td></tr>
<tr><td>O(n²)</td><td>Bubble/Selection/Insertion sort</td></tr>
</table></div>
<div class="tr">⚠️ <b>ट्रैप:</b> Big-O में सबसे बड़ी power ही बचती है — "closest/tightest bound" पूछें तो सबसे छोटी सही ऊपरी सीमा (जैसे n²+n+5 → O(n²), O(n³) नहीं)।</div>
</div>

<div class="blk"><h3>2️⃣ Array & Linked List</h3>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Array</th><th>Linked List</th></tr>
<tr><td>memory</td><td>लगातार (contiguous)</td><td>बिखरी (nodes + pointer)</td></tr>
<tr><td>आकार</td><td>तय (static)</td><td>बदल सकता (dynamic)</td></tr>
<tr><td>पहुँच</td><td>index से <b>O(1)</b> (random)</td><td>क्रम से <b>O(n)</b></td></tr>
<tr><td>insert/delete</td><td>महँगा (खिसकाना पड़े)</td><td>सस्ता (pointer बदलो)</td></tr>
</table></div>
<div class="tk">🧠 Array <b>index 0</b> से शुरू। पता = base + (index × आकार)।<br>
🧠 <b>Linked List के प्रकार:</b> Singly (एक दिशा), Doubly (दोनों दिशा, prev+next), Circular (आख़िरी → पहला)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> random/direct access सिर्फ़ Array में (O(1)); Linked list में हमेशा शुरू से चलना पड़े।</div>
</div>

<div class="blk"><h3>3️⃣ Stack — LIFO (थाली का ढेर)</h3>
<p>जो <b>आख़िर में</b> रखी, वही <b>पहले</b> उठेगी। push और pop दोनों <b>एक ही सिरे (TOP)</b> से।</p>
<div class="sqlLab">
  <div class="nsBar">
    <input id="stkIn" class="nsIn" placeholder="कोई मान..." spellcheck="false">
    <button class="sqlBtn go" onclick="stkPush()">⬆ push</button>
    <button class="sqlBtn" onclick="stkPop()">⬇ pop</button>
    <button class="sqlBtn" onclick="stkClear()">🔄</button>
  </div>
  <div id="stkOut" class="sqlOut"></div>
</div>
<div class="tk">🧠 <b>उपयोग:</b> Function call (recursion), Undo, browser Back, कोष्ठक जाँच, <b>Postfix मूल्यांकन</b>। <b>Overflow</b> = भरे में push; <b>Underflow</b> = ख़ाली से pop।</div>
</div>

<div class="blk"><h3>4️⃣ Queue — FIFO (टिकट की लाइन)</h3>
<p><b>REAR</b> से डालो (enqueue), <b>FRONT</b> से निकालो (dequeue) — जो पहले आया वही पहले जाए।</p>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>ख़ासियत</th></tr>
<tr><td><b>Simple</b></td><td>सीधी लाइन</td></tr>
<tr><td><b>Circular</b></td><td>आख़िरी → पहला (जगह बर्बाद न हो)</td></tr>
<tr><td><b>Priority</b></td><td>प्राथमिकता के हिसाब से निकले</td></tr>
<tr><td><b>Deque</b></td><td>दोनों सिरों से insert/delete</td></tr>
</table></div>
<div class="tk">🧠 <b>उपयोग:</b> CPU scheduling (Round Robin), printer spool, BFS।</div>
<div class="tr">⚠️ <b>Stack (LIFO, एक सिरा) बनाम Queue (FIFO, दो सिरे)</b> — "थाली का ढेर बनाम टिकट लाइन"।</div>
</div>

<div class="blk"><h3>5️⃣ Prefix / Postfix — मशीन की भाषा</h3>
<p>इंसान <b>Infix</b> (A+B) लिखता है; मशीन कोष्ठक से बचने को <b>Postfix</b> (AB+) में बदलकर <b>Stack</b> से हल करती है।</p>
<div class="sqlLab">
  <div class="nsBar">
    <input id="exIn" class="nsIn" value="(A+B)*C" spellcheck="false">
    <button class="sqlBtn go" onclick="exRun()">▶ बदलो</button>
  </div>
  <div class="sqlChips">
    <button class="sqlChip" onclick="exDemo('(A+B)*C')">(A+B)*C</button>
    <button class="sqlChip" onclick="exDemo('A+B*C')">A+B*C — प्राथमिकता</button>
    <button class="sqlChip" onclick="exDemo('3*2-8/4')">3*2−8/4 — मान निकलेगा</button>
    <button class="sqlChip" onclick="exDemo('(A+B)*(C-D)')">(A+B)*(C−D)</button>
  </div>
  <div id="exOut" class="sqlOut"></div>
</div>
<div class="tk">🧠 <b>Pre</b>fix = operator पहले (+AB) • <b>Post</b>fix = बाद में (AB+) • Infix = बीच में। Postfix/Prefix में कोष्ठक की ज़रूरत नहीं।</div>
<div class="tr">⚠️ <b>PYQ (Q45):</b> prefix दाएँ से बाएँ हल करो; postfix बाएँ से दाएँ।</div>
</div>

<div class="blk"><h3>6️⃣ Tree और BST</h3>
<div class="tk">🧠 <b>Tree शब्दावली:</b> Root (शीर्ष), Leaf (पत्ती, कोई child नहीं), Parent/Child, Height (सबसे लंबा रास्ता), Degree (children की संख्या)।<br>
🧠 <b>BST का नियम:</b> हर node के <b>बाएँ छोटे, दाएँ बड़े</b>।</div>
<div class="sqlLab">
  <div class="nsBar">
    <input id="bstIn" class="nsIn" value="50,30,70,20,40,60,80" spellcheck="false">
    <button class="sqlBtn go" onclick="bstRun()">🌳 बनाओ</button>
  </div>
  <div id="bstOut" class="sqlOut"></div>
</div>
<div class="tk">🧠 <b>तीन Traversal (Root कहाँ, वही नाम):</b> <b>Pre</b>order = Root→L→R • <b>In</b>order = L→Root→R (⭐ BST में sorted) • <b>Post</b>order = L→R→Root। (L हमेशा R से पहले।)<br>
🧠 <b>अन्य trees:</b> Binary tree (≤2 children), Complete/Full BT, <b>AVL</b> (self-balancing, height फ़र्क़ ≤1), <b>B-tree/B+ tree</b> (m-way, DBMS indexing), <b>Heap</b> (max/min — priority queue), Expression tree।</div>
<div class="tr">⚠️ <b>PYQ (Q25):</b> BST root हटाओ → नया root = inorder successor (दाएँ subtree का सबसे छोटा)। <b>PYQ (Q47):</b> preorder की पहली value = root, उसे inorder में ढूँढकर left/right बाँटो।</div>
</div>

<div class="blk"><h3>7️⃣ Graph — नोड और एज</h3>
<div class="tk">🧠 <b>Graph</b> = Vertices (नोड) + Edges (कड़ियाँ)। <b>Directed</b> (एकतरफ़ा एज) बनाम <b>Undirected</b>। <b>Weighted</b> (एज पर क़ीमत)।<br>
🧠 <b>दर्शाने के तरीक़े:</b> Adjacency Matrix (2D array, जगह O(V²)) या Adjacency List (कम जगह)।<br>
🧠 <b>दो traversal:</b> <b>BFS</b> (Breadth-First — Queue से, स्तर-दर-स्तर) और <b>DFS</b> (Depth-First — Stack/recursion से, गहराई पहले)।</div>
<div class="tk">🧠 <b>प्रसिद्ध algorithms:</b> Dijkstra (सबसे छोटा रास्ता), Prim/Kruskal (Minimum Spanning Tree), Floyd-Warshall (all-pairs)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> BFS = Queue, DFS = Stack। Tree एक ख़ास graph है (जिसमें cycle नहीं, connected)।</div>
</div>

<div class="blk"><h3>8️⃣ Bubble Sort — Pass दर Pass</h3>
<p style="font-size:.8rem;color:var(--dim)">PYQ हमेशा "<b>first pass के बाद</b>" पूछता है — नीचे हर pass अलग दिखेगा।</p>
<div class="sqlLab">
  <div class="nsBar">
    <input id="bsIn" class="nsIn" value="64,34,25,12,22" spellcheck="false">
    <button class="sqlBtn go" onclick="bsRun()">▶ चलाओ</button>
  </div>
  <div id="bsOut" class="sqlOut"></div>
</div>
<div style="overflow-x:auto"><table>
<tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Stable?</th></tr>
<tr><td><b>Bubble</b></td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>✅</td></tr>
<tr><td>Selection</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>❌</td></tr>
<tr><td>Insertion</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>✅</td></tr>
<tr><td><b>Merge</b></td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>✅</td></tr>
<tr><td><b>Quick</b></td><td>O(n log n)</td><td>O(n log n)</td><td><b>O(n²)</b></td><td>❌</td></tr>
<tr><td>Heap</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>❌</td></tr>
</table></div>
<div class="tk">🧠 <b>Merge और Quick = Divide and Conquer</b>। <b>Quick worst = O(n²)</b> (pivot हमेशा किनारे); <b>Merge हमेशा O(n log n)</b> पर extra जगह चाहिए।</div>
<div class="tr">⚠️ "सबसे तेज़" पूछें — average में Quick, पर worst में Merge। सवाल ध्यान से पढ़।</div>
</div>

<div class="blk"><h3>9️⃣ Searching + Hashing</h3>
<div class="tk">🧠 <b>Linear Search</b> = O(n), किसी भी array पर। <b>Binary Search</b> = O(log n), पर array <b>sorted होना ज़रूरी</b> — बीच से शुरू, आधा छोड़ता जाए।<br>
🧠 <b>Hashing</b> = key को hash function से सीधे पते में बदलना → खोज <b>O(1)</b> (औसतन)। <b>Collision</b> (दो key एक पते पर) का हल: Chaining (linked list) या Open addressing (linear/quadratic probing)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Binary search बिना sorting बेकार। Hashing सबसे तेज़ खोज पर क्रम नहीं रखता (range query नहीं)।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
📈 Big-O worst, Ω best, Θ दोनों | क्रम: 1 &lt; log n &lt; n &lt; n log n &lt; n² &lt; 2ⁿ &lt; n!<br>
📦 Array = O(1) random access, static | Linked list = dynamic, O(n) access<br>
🥞 <b>Stack LIFO</b> (एक सिरा) | <b>Queue FIFO</b> (REAR डाले, FRONT निकाले); circular/priority/deque<br>
🔢 Pre=operator पहले, Post=बाद | Postfix → <b>Stack</b> हल करे<br>
🌲 <b>Inorder = BST में sorted</b> | root हटाओ → inorder successor | AVL balanced, B+ DBMS<br>
🕸️ Graph = V+E | <b>BFS=Queue, DFS=Stack</b> | Dijkstra=shortest, Prim/Kruskal=MST<br>
🫧 Bubble first pass → सबसे बड़ा अंत में | Merge हमेशा O(n log n), Quick worst O(n²)<br>
🔎 Binary search O(log n) पर sorted चाहिए | Hashing O(1) पर collision संभालो
</div>
</div>
`;


CARDS.p2dsa = [
  ['[रिकॉल] Stack किस सिद्धांत पर चलता है?', 'LIFO — Last In, First Out। push और pop दोनों एक ही सिरे (TOP) से।', 'थाली का ढेर'],
  ['[रिकॉल] BST में कौन-सा traversal हमेशा sorted क्रम देता है?', 'Inorder (Left → Root → Right)।', 'बीच वाला sorted'],
  ['[रिकॉल] Binary Search चलाने के लिए क्या शर्त ज़रूरी है?', 'Array का पहले से sorted होना।', 'बिना क्रम नहीं'],
  ['[रिवर्स रिकॉल] "operator पहले, operand बाद में — जैसे +AB" — इसे क्या कहते हैं?', 'Prefix (Polish) notation।', 'पहले = Pre'],
  ['[रिवर्स रिकॉल] "हर pass में सबसे बड़ा तत्व बुलबुले की तरह अंत में पहुँच जाता है" — कौन-सा sort?', 'Bubble Sort।', 'बुलबुला ऊपर'],
  ['[रिक्त स्थान] भरे हुए stack में push करने पर ______ और ख़ाली stack से pop करने पर ______ होता है।', 'Overflow; Underflow', 'भरा=ऊपर, ख़ाली=नीचे'],
  ['[रिक्त स्थान] Queue में तत्व ______ सिरे से डाले जाते हैं और ______ सिरे से निकाले जाते हैं।', 'REAR (पीछे); FRONT (आगे)', 'लाइन का नियम'],
  ['[कथन आधारित] कथन: Quick Sort का worst-case time O(n log n) है।', 'ग़लत। Quick का worst case O(n²) है (जब pivot हमेशा सबसे छोटा/बड़ा निकले)। Merge Sort हमेशा O(n log n) रहता है।', 'Quick तेज़ पर जोखिम'],
  ['[कथन आधारित] कथन: Tree एक linear data structure है।', 'ग़लत। Tree और Graph non-linear हैं। Array, Stack, Queue और Linked List linear हैं।', 'शाखाएँ = non-linear'],
  ['[मैच] मिलाओ: (a) Stack (b) Queue (c) Tree (d) Graph', '(a) LIFO linear, (b) FIFO linear, (c) non-linear श्रेणीबद्ध, (d) non-linear नोड+एज।', 'चार ढाँचे'],
  ['[मैच] मिलाओ: (a) Preorder (b) Inorder (c) Postorder', '(a) Root-Left-Right, (b) Left-Root-Right, (c) Left-Right-Root।', 'Root कहाँ, वही नाम'],
  ['[मैच] मिलाओ: (a) Bubble (b) Merge (c) Quick (d) Binary Search', '(a) O(n²) stable, (b) हमेशा O(n log n), (c) average O(n log n) पर worst O(n²), (d) O(log n) पर sorted चाहिए।', 'रफ़्तार का हिसाब'],
  ['[तुलना] Stack और Queue में फ़र्क़?', 'Stack = LIFO, एक ही सिरा (TOP)। Queue = FIFO, दो सिरे (REAR से डालो, FRONT से निकालो)।', 'ढेर बनाम लाइन'],
  ['[तुलना] Merge Sort और Quick Sort?', 'दोनों Divide and Conquer। Merge हमेशा O(n log n) और stable, पर extra जगह चाहिए। Quick average में तेज़ पर worst O(n²), in-place।', 'भरोसा बनाम रफ़्तार'],
  ['[तुलना] Linear Search और Binary Search?', 'Linear O(n) — किसी भी array पर चलेगा। Binary O(log n) — पर array sorted होना ज़रूरी, बीच से शुरू करके आधा-आधा छोड़ता है।', 'आधा छोड़ो'],
  ['[कालक्रम] Infix (A+B)*C को Postfix में बदलने का सही नतीजा?', 'AB+C*', 'कोष्ठक पहले'],
  ['[कालक्रम] BST में 50,30,70,20,40 डालने पर Inorder क्या आएगा?', '20, 30, 40, 50, 70 — यानी sorted।', 'Inorder = sorted'],
  ['[Code Output] Array [64, 34, 25, 12, 22] पर Bubble Sort के first pass के बाद क्या होगा?', '[34, 25, 12, 22, 64]। सबसे बड़ा (64) अंत में पहुँच गया।', 'बड़ा अंत में'],
  ['[Code Output] Stack में push(1), push(2), push(3), pop(), push(4) के बाद TOP पर क्या है?', '4। (1,2 नीचे; 3 pop हो गया; फिर 4 सबसे ऊपर।)', 'आख़िरी ऊपर'],
  ['[True/False] Postfix expression को हल करने के लिए Queue का प्रयोग होता है।', 'False। Postfix को Stack से हल किया जाता है।', 'Postfix = Stack'],
  ['[True/False] Bubble Sort का best case O(n) है।', 'True। अगर array पहले से sorted हो और swap-flag लगाया गया हो, तो एक ही pass में काम ख़त्म — O(n)।', 'पहले से sorted = एक pass'],
  ['[ट्रैप कार्ड] BST का root हटाने पर नया root कौन बनेगा?', 'Inorder successor — दाएँ subtree का सबसे बाईं ओर वाला (सबसे छोटा) node। (या inorder predecessor।) सीधे कोई भी child नहीं!', 'दाएँ का सबसे छोटा'],
  ['[ट्रैप कार्ड] "सबसे तेज़ sorting algorithm कौन-सा है?"', 'सवाल अधूरा है! Average में Quick सबसे तेज़, पर worst case में Quick O(n²) हो जाता है — वहाँ Merge (हमेशा O(n log n)) जीतता है।', 'कौन-सा case पूछा?'],
  ['[ट्रैप कार्ड] Selection Sort stable है?', 'नहीं! Selection Sort unstable है। Bubble, Insertion और Merge stable हैं।', 'Selection बेवफ़ा']
];

QB.p2dsa = [
  { q: 'Array [64, 34, 25, 12, 22] पर Bubble Sort का first pass पूरा होने के बाद array कैसा होगा?', o: ['[12, 22, 25, 34, 64]', '[34, 25, 12, 22, 64]', '[34, 64, 25, 12, 22]', '[22, 12, 25, 34, 64]'], a: 1, e: 'First pass में बग़ल वाले तत्व बदलते हुए सबसे बड़ा तत्व (64) अंत में पहुँच जाता है: 64,34→34,64 फिर 64,25→25,64 और इसी तरह। नतीजा [34, 25, 12, 22, 64]।', trap: 'पूरा sorted array [12,22,25,34,64] चुन लेना — सवाल सिर्फ़ FIRST PASS का है, पूरे sort का नहीं।', d: 2, tag: 'Sorting', pyq: 'Paper-II Q33 — हूबहू' },
  { q: 'BST में root node को delete करने पर नया root कौन बनेगा?', o: ['बाएँ child को सीधे ऊपर उठा दिया जाएगा', 'दाएँ child को सीधे ऊपर उठा दिया जाएगा', 'Inorder successor (दाएँ subtree का सबसे छोटा node)', 'Tree ख़ाली हो जाएगा'], a: 2, e: 'Root हटाने पर उसकी जगह inorder successor (दाएँ subtree का सबसे बाईं ओर वाला, यानी सबसे छोटा node) या inorder predecessor आता है — ताकि BST का नियम (बाएँ छोटे, दाएँ बड़े) बना रहे।', trap: 'किसी child को सीधे उठा देना — इससे BST का क्रम टूट जाएगा।', d: 3, tag: 'Tree', pyq: 'Paper-II Q25 — हूबहू' },
  { q: 'Stack के संदर्भ में LIFO का क्या अर्थ है?', o: ['Last In First Out', 'Last In Final Out', 'Linear In First Out', 'Least In First Out'], a: 0, e: 'LIFO = Last In, First Out — जो सबसे बाद में डाला गया, वही सबसे पहले निकलेगा। push और pop दोनों एक ही सिरे (TOP) से होते हैं।', trap: 'FIFO (Queue) से उलझ जाना।', d: 1, tag: 'Stack', pyq: 'आधारभूत' },
  { q: 'Postfix expression को evaluate करने के लिए किस data structure का प्रयोग होता है?', o: ['Queue', 'Stack', 'Tree', 'Graph'], a: 1, e: 'Postfix में operand मिलते ही stack में डालते जाओ; operator मिलते ही ऊपर के दो operand निकालकर हिसाब करो और नतीजा वापस stack में डालो। इसीलिए इसमें कोष्ठक की ज़रूरत ही नहीं पड़ती।', trap: 'Queue चुन लेना — postfix का पूरा तंत्र stack पर खड़ा है।', d: 2, tag: 'Expression', pyq: 'Paper-II Q41/Q45 आधारित' },
  { q: 'Infix expression (A + B) * C का सही Postfix रूप क्या है?', o: ['AB+C*', 'ABC+*', '+AB*C', '*+ABC'], a: 0, e: 'पहले कोष्ठक हल होगा: A+B → AB+। फिर उसे C से गुणा: (AB+) C * → AB+C*।', trap: 'ABC+* चुन लेना — वह A+(B*C) का postfix है, जो अलग expression है।', d: 2, tag: 'Expression', pyq: 'Paper-II Q21 — हूबहू पैटर्न' },
  { q: 'Binary Search चलाने के लिए कौन-सी शर्त अनिवार्य है?', o: ['Array में duplicate न हों', 'Array sorted होना चाहिए', 'Array का आकार सम होना चाहिए', 'कोई शर्त नहीं'], a: 1, e: 'Binary Search हर बार बीच वाले तत्व से तुलना करके आधा हिस्सा छोड़ देता है — यह तभी काम करता है जब array पहले से sorted हो। इसकी जटिलता O(log n) है।', trap: '"कोई शर्त नहीं" चुन लेना — बिना sorting के binary search बेकार है।', d: 1, tag: 'Searching', pyq: '1000 MCQs Q12 आधारित' },
  { q: 'Quick Sort की worst-case time complexity क्या है?', o: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'], a: 2, e: 'Quick Sort average में O(n log n) है, पर जब pivot हर बार सबसे छोटा या सबसे बड़ा निकले (जैसे पहले से sorted array पर), तब विभाजन बेकार हो जाता है और complexity O(n²) हो जाती है।', trap: 'O(n log n) चुन लेना — वो average case है, worst नहीं। Merge Sort ही हर हाल में O(n log n) देता है।', d: 3, tag: 'Sorting', pyq: 'बार-बार' },
  { q: 'निम्न में से कौन-सा non-linear data structure है?', o: ['Array', 'Stack', 'Queue', 'Tree'], a: 3, e: 'Tree और Graph non-linear हैं (तत्व शाखाओं में बँटे होते हैं)। Array, Stack, Queue और Linked List linear हैं — तत्व एक कतार में होते हैं।', trap: 'Stack या Queue को non-linear मान लेना।', d: 1, tag: 'Basics', pyq: 'आधारभूत' },
  { q: 'किसी BST का Inorder traversal हमेशा क्या देता है?', o: ['Random क्रम', 'Sorted (आरोही) क्रम', 'अवरोही क्रम', 'Level-wise क्रम'], a: 1, e: 'BST में बाएँ सब छोटे और दाएँ सब बड़े होते हैं। Inorder (Left → Root → Right) चलने पर तत्व अपने आप आरोही (ascending) क्रम में मिलते हैं। यही जाँचने का सबसे आसान तरीक़ा है कि tree सही BST है या नहीं।', trap: 'Preorder चुन लेना।', d: 2, tag: 'Tree', pyq: 'बार-बार' },
  { q: 'ख़ाली stack पर pop operation करने पर क्या होता है?', o: ['Overflow', 'Underflow', 'कुछ नहीं होता', 'Stack अपने आप भर जाता है'], a: 1, e: 'Underflow = ख़ाली stack से निकालने की कोशिश। Overflow = पूरे भरे stack में और डालने की कोशिश।', trap: 'Overflow और Underflow उलट देना।', d: 1, tag: 'Stack', pyq: 'आधारभूत' },
  { q: 'Preorder और Inorder traversal दिए हों, तो Postorder निकालने की सही विधि क्या है?', o: ['Inorder की पहली value को root मानो', 'Preorder की पहली value को root मानो, फिर उसे Inorder में ढूँढकर left/right subtree बाँटो', 'दोनों को उलटकर जोड़ दो', 'यह संभव ही नहीं'], a: 1, e: 'Preorder की पहली value हमेशा root होती है। उसे Inorder में ढूँढो — उसके बाईं ओर सब left subtree, दाईं ओर सब right subtree। फिर हर subtree पर यही recursion दोहराओ।', trap: 'Inorder की पहली value को root मान लेना — Inorder में तो root बीच में आता है।', d: 3, tag: 'Tree', pyq: 'Paper-II Q47 — हूबहू' },
  { q: 'Queue में तत्व किन सिरों से डाले और निकाले जाते हैं?', o: ['दोनों काम एक ही सिरे से', 'REAR से डाले, FRONT से निकाले', 'FRONT से डाले, REAR से निकाले', 'बीच से डाले जाते हैं'], a: 1, e: 'Queue FIFO है — नए तत्व REAR (पीछे) से जुड़ते हैं और पुराने FRONT (आगे) से निकलते हैं, बिल्कुल टिकट की लाइन की तरह।', trap: '"एक ही सिरे से" चुन लेना — वह Stack का गुण है।', d: 1, tag: 'Queue', pyq: 'आधारभूत' },
  { q: 'Merge Sort और Quick Sort — दोनों किस तकनीक पर आधारित हैं?', o: ['Greedy', 'Dynamic Programming', 'Divide and Conquer', 'Backtracking'], a: 2, e: 'दोनों समस्या को छोटे टुकड़ों में बाँटते हैं, हर टुकड़े को हल करते हैं और फिर जोड़ते हैं — यही Divide and Conquer है। Binary Search भी इसी तकनीक पर है।', trap: 'Greedy चुन लेना।', d: 2, tag: 'Algorithms', pyq: 'LT Grade Q120 — हूबहू' },
  { q: 'निम्न में से कौन-सा sorting algorithm stable नहीं है?', o: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'], a: 3, e: 'Stable = बराबर मान वाले तत्वों का आपसी क्रम बना रहे। Bubble, Insertion और Merge stable हैं; Selection Sort और Quick Sort unstable हैं।', trap: 'Merge को unstable मान लेना — वो stable है।', d: 3, tag: 'Sorting', pyq: 'गहरा' },
  { q: 'DBMS में indexing के लिए Binary tree की जगह B+ tree क्यों पसंद किया जाता है?', o: ['क्योंकि वह कम memory लेता है', 'क्योंकि वह disk access की संख्या घटाता है (कम ऊँचाई, ज़्यादा children)', 'क्योंकि उसे बनाना आसान है', 'क्योंकि वह sorted नहीं रहता'], a: 1, e: 'B+ tree के हर node के कई children होते हैं, इसलिए tree चौड़ा और नाटा (कम ऊँचाई का) रहता है। कम ऊँचाई = कम disk access — और disk access ही सबसे महँगा काम है।', trap: '"कम memory" चुन लेना — असली फ़ायदा disk access का है।', d: 3, tag: 'Tree', pyq: 'LT Grade Q113 — हूबहू' },
  { q: 'Linear array LA में LB और UB क्रमशः lower व upper bound हैं। पूरे array को traverse करने का सही algorithm कौन-सा है?', o: ['Repeat for K = LB to UB: apply PROCESS to LA[K]; Exit', 'Repeat for K = UB to LB: apply PROCESS to LA[K]; Exit', 'Repeat for K = 1 to UB−LB: Exit', 'कोई नहीं'], a: 0, e: 'Traversal का अर्थ है array के हर तत्व पर, lower bound से upper bound तक क्रम से, कोई क्रिया (PROCESS) लागू करना।', trap: 'UB से LB (उल्टी दिशा) चुन लेना — वो reverse traversal है, सामान्य traversal नहीं।', d: 2, tag: 'Array', pyq: 'Paper-II Q98 — हूबहू' },
  { q: 'Bubble Sort की best-case time complexity क्या है और कब मिलती है?', o: ['O(n²) — हमेशा', 'O(n) — जब array पहले से sorted हो', 'O(log n) — जब array छोटा हो', 'O(1) — जब array ख़ाली हो'], a: 1, e: 'अगर array पहले से sorted हो और algorithm में swap-flag लगा हो, तो पहले ही pass में कोई swap नहीं होता और loop रुक जाता है — यानी सिर्फ़ n तुलनाएँ, O(n)।', trap: '"हमेशा O(n²)" चुन लेना — flag वाले संस्करण में best case O(n) है।', d: 3, tag: 'Sorting', pyq: 'गहरा' },
  { q: 'Stack का प्रयोग निम्न में से किसमें नहीं होता?', o: ['Function call / Recursion', 'Undo operation', 'Postfix evaluation', 'CPU का Round Robin scheduling'], a: 3, e: 'Round Robin scheduling में प्रक्रियाएँ बारी-बारी से आती हैं — वहाँ Queue (FIFO) चाहिए, Stack नहीं। Function call, Undo और Postfix — तीनों Stack पर चलते हैं।', trap: 'Undo को Queue से जोड़ देना — Undo तो उल्टा चलता है, इसलिए Stack।', d: 2, tag: 'Stack', pyq: 'वैचारिक' },
  { q: 'Prefix expression को evaluate करते समय किस दिशा से पढ़ा जाता है?', o: ['बाएँ से दाएँ', 'दाएँ से बाएँ', 'बीच से', 'किसी भी दिशा से'], a: 1, e: 'Prefix में operator पहले और operand बाद में आते हैं, इसलिए उसे दाएँ से बाएँ पढ़कर stack में डाला जाता है। Postfix इसके उलट — बाएँ से दाएँ।', trap: 'Postfix वाला नियम (बाएँ से दाएँ) prefix पर भी लगा देना।', d: 3, tag: 'Expression', pyq: 'Paper-II Q45 — हूबहू' },
  { q: 'n तत्वों वाले sorted array में Binary Search की time complexity क्या है?', o: ['O(n)', 'O(n²)', 'O(log n)', 'O(1)'], a: 2, e: 'हर क़दम पर खोज का दायरा आधा रह जाता है, इसलिए अधिकतम log₂n क़दम लगते हैं — यानी O(log n)। 10 लाख तत्वों में भी सिर्फ़ ~20 क़दम।', trap: 'O(n) चुन लेना — वो Linear Search है।', d: 2, tag: 'Searching', pyq: 'आधारभूत' }
];

UNIT_INIT.p2dsa = function () { stkRender(''); bstRun(); bsRun(); exRun(); };
