/*! MODULE: data/paper2/u-prog.js — Paper-II Unit: Programming Fundamentals (PYQ ≈ 9/100) */

CH.push({ id: 'p2pf', ic: '💻', t: 'Programming', s: 'C • C++ • Java • Python • OOP', xp: 130, p: 2 });

LESSON.p2pf = `
<div class="blk"><h3>💻 Programming Fundamentals — पूरा नक़्शा</h3>
<p><b>सरल भाषा में:</b> प्रोग्राम = मशीन को दी गई <b>रेसिपी</b>। पर पेपर रेसिपी लिखवाता नहीं — वो पूछता है "<b>यह रेसिपी चलाने पर बनेगा क्या?</b>"। इसलिए यहाँ रटना बेकार; <b>चलाकर सोचना</b> काम आएगा। क्रम: भाषाओं के स्तर → C का ढाँचा (token, data type, operator, control, function, array, pointer, structure) → OOP → C++/Java/Python की ख़ास बातें।</p>
</div>

<div class="blk"><h3>1️⃣ भाषाओं के स्तर + Translators</h3>
<div class="tk">💡 <b>भाषाएँ बनीं ही क्यों?</b> मशीन सिर्फ़ 0-1 समझती है, इंसान के लिए वो नामुमकिन। इसलिए सीढ़ी बनी:<br>
<b>Machine (0-1)</b> → <b>Assembly (MOV, ADD — mnemonics)</b> → <b>High-level (C, Java, Python — अंग्रेज़ी जैसी)</b>।</div>
<div style="overflow-x:auto"><table>
<tr><th>स्तर</th><th>मिसाल</th><th>ख़ासियत</th></tr>
<tr><td><b>Low (Machine)</b></td><td>0/1</td><td>मशीन सीधे समझे; इंसान के लिए कठिन</td></tr>
<tr><td><b>Assembly</b></td><td>MOV, ADD</td><td>mnemonic; Assembler अनुवाद करे</td></tr>
<tr><td><b>Middle</b></td><td><b>C</b></td><td>high + low दोनों का मेल</td></tr>
<tr><td><b>High</b></td><td>Java, Python</td><td>इंसान जैसी; portable</td></tr>
</table></div>
<div class="tk">🧠 <b>Translators तीन:</b> <b>Compiler</b> (पूरा प्रोग्राम एक बार में — तेज़ execution, सारी errors एक साथ), <b>Interpreter</b> (लाइन-दर-लाइन — धीमा, पहली error पर रुके), <b>Assembler</b> (assembly → machine)।<br>
<b>C एक middle-level भाषा है</b> (नोट्स में रेखांकित) — इसमें hardware को छूने की low-level ताक़त भी है।</div>
</div>

<div class="blk"><h3>2️⃣ C का ढाँचा — Tokens</h3>
<p><b>Token</b> = C प्रोग्राम की <b>सबसे छोटी इकाई</b>। जैसे वाक्य में शब्द, वैसे प्रोग्राम में token।</p>
<div style="overflow-x:auto"><table>
<tr><th>Token</th><th>क्या</th><th>मिसाल</th></tr>
<tr><td><b>Keyword</b></td><td>आरक्षित शब्द (predefined)</td><td>int, if, return</td></tr>
<tr><td><b>Identifier</b></td><td>user के दिए नाम</td><td>a, sum, main</td></tr>
<tr><td><b>Constant</b></td><td>न बदलने वाला मान</td><td>5, 3.14, 'A'</td></tr>
<tr><td><b>Operator</b></td><td>क्रिया का चिह्न</td><td>+, =, &&</td></tr>
<tr><td><b>Special char</b></td><td>विशेष चिह्न</td><td>; , { }</td></tr>
</table></div>
<div class="tk">🧠 उदाहरण <code>int a = 5;</code> में — int (keyword), a (identifier), 5 (constant), = (operator), ; (special char)।<br>
🧠 <b>C में कुल 32 keywords</b> (ANSI C): auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while।</div>
<div class="tk">🧠 <b>Identifier के नियम:</b> अक्षर/underscore से शुरू (अंक से नहीं), keyword नहीं, बीच में space नहीं, case-sensitive (Sum ≠ sum)।</div>
</div>

<div class="blk"><h3>3️⃣ Data Types — पूरा पेड़</h3>
<div class="viz">
<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
 <rect x="150" y="6" width="100" height="22" rx="5" fill="#ffc233" opacity=".2" stroke="#ffc233"/><text x="200" y="21" text-anchor="middle" fill="#eef3fa" font-size="9" font-weight="800">Data Types in C</text>
 <rect x="10" y="54" width="110" height="22" rx="5" fill="#22d3ee" opacity=".2" stroke="#22d3ee"/><text x="65" y="69" text-anchor="middle" fill="#eef3fa" font-size="8" font-weight="800">Primary/inbuilt</text>
 <rect x="145" y="54" width="110" height="22" rx="5" fill="#26d07c" opacity=".2" stroke="#26d07c"/><text x="200" y="69" text-anchor="middle" fill="#eef3fa" font-size="8" font-weight="800">Derived</text>
 <rect x="280" y="54" width="110" height="22" rx="5" fill="#a855f7" opacity=".2" stroke="#a855f7"/><text x="335" y="69" text-anchor="middle" fill="#eef3fa" font-size="8" font-weight="800">User-defined</text>
 <text x="65" y="94" text-anchor="middle" fill="#8298b6" font-size="8">int char float void</text>
 <text x="200" y="94" text-anchor="middle" fill="#8298b6" font-size="8">array pointer function</text>
 <text x="335" y="94" text-anchor="middle" fill="#8298b6" font-size="8">struct union enum typedef</text>
 <path d="M200 28 L65 52 M200 28 L200 52 M200 28 L335 52" stroke="#8298b6" stroke-width="1"/>
</svg>
</div>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>Types</th><th>आकार (आम)</th></tr>
<tr><td>पूर्णांक</td><td>short, int, long, long long (signed/unsigned)</td><td>2 / 4 / 4-8 / 8 byte</td></tr>
<tr><td><b>Real (floating)</b></td><td><b>float, double, long double</b></td><td>4 / 8 / 10-16 byte</td></tr>
<tr><td>अक्षर</td><td>char</td><td><b>हमेशा 1 byte</b></td></tr>
<tr><td>ख़ाली</td><td>void</td><td>0 (कोई मान नहीं)</td></tr>
</table></div>
<div class="tk">🧠 <b>Modifiers:</b> short, long, signed (धन+ऋण), unsigned (सिर्फ़ धन, दुगुनी रेंज)। <code>sizeof</code> operator आकार बताता है।</div>
<div class="tr">⚠️ <b>PYQ (Q69):</b> "C में real/floating types?" → <b>float, double, long double</b> (तीनों)। int/char शामिल नहीं।<br>
⚠️ <code>sizeof(char)</code> C में <b>हमेशा 1</b> — मशीन पर निर्भर नहीं।</div>
</div>

<div class="blk"><h3>4️⃣ Operators + प्राथमिकता (Precedence)</h3>
<div style="overflow-x:auto"><table>
<tr><th>श्रेणी</th><th>Operators</th></tr>
<tr><td>Arithmetic</td><td>+ − * / % (modulus = शेषफल)</td></tr>
<tr><td>Relational</td><td>&lt; &gt; &lt;= &gt;= == !=</td></tr>
<tr><td>Logical</td><td>&& (AND) || (OR) ! (NOT)</td></tr>
<tr><td>Assignment</td><td>= += −= *=</td></tr>
<tr><td>Increment/Decrement</td><td>++ −−</td></tr>
<tr><td>Bitwise</td><td>& | ^ ~ &lt;&lt; &gt;&gt;</td></tr>
<tr><td>Ternary</td><td>?: (शर्त ? सच : झूठ)</td></tr>
</table></div>
<div class="tk">🧠 <b>प्राथमिकता (ऊपर से नीचे):</b> () → ++/−− → * / % → + − → &lt; &gt; → == != → && → || → ?: → =<br>
<b>ट्रिक: "पहले कोष्ठक, फिर गुणा-भाग, फिर जोड़-घटाव, फिर तुलना, फिर तर्क, आख़िर में बराबर।"</b></div>
<div class="tk">🧠 <b>i++ बनाम ++i (सबसे ज़्यादा पूछा जाता है):</b><br>
<b>i++</b> (postfix) = "पहले <b>दे</b>, फिर <b>बढ़</b>" — पुरानी क़ीमत देता है।<br>
<b>++i</b> (prefix) = "पहले <b>बढ़</b>, फिर <b>दे</b>" — नई क़ीमत देता है।</div>
<div class="tr">⚠️ <b>गहरा ट्रैप:</b> एक ही statement में एक variable दो बार बदलना (जैसे <code>x++ + ++x</code>) C में <b>Undefined Behaviour</b> — परीक्षा में सही जवाब "Undefined"।</div>
</div>

<div class="blk"><h3>5️⃣ Control Flow — निर्णय व दोहराव</h3>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>Statement</th><th>कब</th></tr>
<tr><td>Decision</td><td>if, if-else, else-if, <b>switch</b></td><td>शर्त पर रास्ता चुनना</td></tr>
<tr><td>Loop (entry)</td><td><b>for, while</b></td><td>पहले शर्त जाँचो, फिर चलो</td></tr>
<tr><td>Loop (exit)</td><td><b>do-while</b></td><td>पहले एक बार चलो, फिर शर्त — <b>कम-से-कम 1 बार पक्का</b></td></tr>
<tr><td>Jump</td><td>break, continue, goto, return</td><td>प्रवाह तोड़ना/छोड़ना</td></tr>
</table></div>
<div class="tk">🧠 <b>break बनाम continue:</b> break पूरा loop <b>तोड़</b> दे; continue सिर्फ़ इस बार को <b>छोड़</b>कर अगली बार पर जाए।<br>
🧠 <b>switch</b> में हर case के बाद <b>break</b> ज़रूरी, वरना "fall-through" (नीचे के case भी चल जाते हैं)। switch सिर्फ़ int/char पर चलता है, float पर नहीं।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> <code>for(i=0;i&lt;5;i++);</code> — आगे <b>semicolon</b> = ख़ाली body; loop के बाद i = <b>5</b> (4 नहीं)। do-while कम-से-कम एक बार चलता ही है।</div>
</div>

<div class="blk"><h3>6️⃣ Functions + Storage Classes</h3>
<p><b>Function</b> = बार-बार इस्तेमाल होने वाले code का नाम-बद्ध टुकड़ा। हिस्से: return type, name, parameters, body। <code>main()</code> से हर C प्रोग्राम शुरू होता है।</p>
<div class="tk">🧠 <b>Call by Value बनाम Call by Reference:</b><br>
<b>Value</b> = मान की नक़ल भेजो — असली नहीं बदलता।<br>
<b>Reference</b> (pointer/&) = पता भेजो — असली बदल जाता है।</div>
<div style="overflow-x:auto"><table>
<tr><th>Storage class</th><th>जगह</th><th>जीवनकाल</th><th>default मान</th></tr>
<tr><td><b>auto</b></td><td>RAM</td><td>block तक</td><td>कचरा (garbage)</td></tr>
<tr><td><b>register</b></td><td>CPU register</td><td>block तक</td><td>कचरा</td></tr>
<tr><td><b>static</b></td><td>RAM</td><td>पूरे प्रोग्राम</td><td>0</td></tr>
<tr><td><b>extern</b></td><td>RAM</td><td>पूरे प्रोग्राम (global)</td><td>0</td></tr>
</table></div>
<div class="tk">🧠 <b>Recursion</b> = function ख़ुद को बुलाए (जैसे factorial)। इसे Stack संभालता है; बिना base condition के infinite → stack overflow।</div>
</div>

<div class="blk"><h3>7️⃣ Array & String</h3>
<p><b>Array</b> = एक ही प्रकार के कई मानों का समूह, एक नाम, क्रमांक (index) से पहुँच। <b>Index 0 से शुरू</b> होता है। 1D, 2D (matrix) होते हैं।</p>
<div class="tk">🧠 <code>int a[5];</code> = 5 पूर्णांक, a[0] से a[4] तक। a[5] छूना → out of bounds (कचरा/crash)।<br>
🧠 <b>String</b> = char का array जो <b>'\\0' (null)</b> पर ख़त्म होता है। "Hi" असल में {'H','i','\\0'} — 3 byte।<br>
🧠 <b>string.h के function:</b> strlen (लंबाई), strcpy (नक़ल), strcat (जोड़), strcmp (तुलना), strrev (उल्टा)।</div>
</div>

<div class="blk"><h3>8️⃣ Pointers (C/C++) — सबसे डरावना, सबसे आसान</h3>
<p><b>सरल भाषा में:</b> Pointer कोई जादू नहीं — वो <b>पते (address) को रखने वाला डिब्बा</b> है। दोस्त का घर नहीं, उसका <b>पता</b>।</p>
<div class="tk">🧠 <b>दो चिह्न:</b> <b>&amp;x</b> = "x का पता दो" (address-of)। <b>*p</b> = "इस पते पर जो है वो दो" (dereference)।<br>
🧠 <b>उपयोग:</b> dynamic memory (malloc/free), array/string, call-by-reference, data structures (linked list, tree)।</div>
<div class="tr">⚠️ <b>PYQ (Q37) — <code>*ptr++</code>:</b> यह <code>*(ptr++)</code> है। postfix ++ की प्राथमिकता ज़्यादा, पर <b>पहले पुरानी value मिलती है, फिर pointer आगे</b>।<br>
फ़र्क़: <code>(*p)++</code> = value बढ़ाओ। <code>*++p</code> = पहले आगे, फिर पढ़ो।</div>
</div>

<div class="blk"><h3>9️⃣ OOP — चार खंभे</h3>
<div class="viz">
<svg viewBox="0 0 400 110" xmlns="http://www.w3.org/2000/svg">
 <rect x="6" y="20" width="92" height="70" rx="7" fill="#22d3ee" opacity=".2" stroke="#22d3ee"/><text x="52" y="46" text-anchor="middle" fill="#eef3fa" font-size="11" font-weight="800">Encapsulation</text><text x="52" y="66" text-anchor="middle" fill="#8298b6" font-size="8">डेटा छिपाओ</text>
 <rect x="104" y="20" width="92" height="70" rx="7" fill="#ffc233" opacity=".2" stroke="#ffc233"/><text x="150" y="46" text-anchor="middle" fill="#eef3fa" font-size="11" font-weight="800">Abstraction</text><text x="150" y="66" text-anchor="middle" fill="#8298b6" font-size="8">ज़रूरी दिखाओ</text>
 <rect x="202" y="20" width="92" height="70" rx="7" fill="#26d07c" opacity=".2" stroke="#26d07c"/><text x="248" y="46" text-anchor="middle" fill="#eef3fa" font-size="11" font-weight="800">Inheritance</text><text x="248" y="66" text-anchor="middle" fill="#8298b6" font-size="8">गुण विरासत</text>
 <rect x="300" y="20" width="94" height="70" rx="7" fill="#a855f7" opacity=".2" stroke="#a855f7"/><text x="347" y="46" text-anchor="middle" fill="#eef3fa" font-size="11" font-weight="800">Polymorphism</text><text x="347" y="66" text-anchor="middle" fill="#8298b6" font-size="8">एक नाम कई रूप</text>
</svg>
</div>
<div class="tk">🧠 <b>मंत्र — "एब्स-एन-इन-पॉली"।</b> मिसालें: Encapsulation = दवा का कैप्सूल (private data + public method); Abstraction = कार का steering (इंजन छिपा); Inheritance = बच्चा माँ-बाप के गुण पाए; Polymorphism = "काटना" (पेड़/टिकट)।</div>
<div style="overflow-x:auto"><table>
<tr><th>Concept</th><th>क्या</th></tr>
<tr><td><b>Class</b></td><td>खाका/blueprint</td></tr>
<tr><td><b>Object</b></td><td>class का असली उदाहरण (instance)</td></tr>
<tr><td><b>Overloading</b></td><td>एक ही class में, नाम वही, parameters अलग — <b>compile-time</b></td></tr>
<tr><td><b>Overriding</b></td><td>parent-child, signature बिल्कुल वही — <b>run-time</b></td></tr>
</table></div>
<div class="tr">⚠️ <b>PYQ (Q84):</b> जिस class में एक भी <b>pure virtual function (= 0)</b> हो वो <b>abstract</b> — उसका <b>object नहीं बनता</b>।<br>
⚠️ Overloading = compile-time (static) polymorphism; Overriding = run-time (dynamic)। दोनों उलट देना आम ग़लती।</div>
</div>

<div class="blk"><h3>🔟 Code Output Predictor — trace देख के समझ</h3>
<p style="font-size:.8rem;color:var(--dim)">जवाब दे, फिर <b>लाइन-दर-लाइन trace</b> खुलेगा। यही असली तरीक़ा है।</p>
<div class="sqlLab">
  <div id="cdBody"></div>
  <div class="sqlBar">
    <button class="sqlBtn" onclick="codePrev()">← पिछला</button>
    <button class="sqlBtn go" onclick="codeNext()">अगला snippet →</button>
  </div>
</div>
</div>

<div class="blk"><h3>1️⃣1️⃣ C++ की ख़ास बातें</h3>
<div class="tk">🧠 C++ = C + OOP (Bjarne Stroustrup)। जोड़े गए: class/object, inheritance, function/operator overloading, virtual function, reference (&), new/delete, cin/cout (iostream)।<br>
🧠 <b>Constructor</b> (object बनते ही चले, नाम class जैसा) और <b>Destructor</b> (~, object ख़त्म होते ही)।<br>
🧠 <b>Inheritance के प्रकार:</b> Single, Multiple, Multilevel, Hierarchical, Hybrid। C++ में <b>multiple inheritance होती है</b> (Java में नहीं)।</div>
</div>

<div class="blk"><h3>1️⃣2️⃣ Java की ख़ास बातें</h3>
<div class="tk">🧠 <b>नारा:</b> "<b>Write Once, Run Anywhere</b>" — Java पहले <b>bytecode</b> बनाता है, जिसे हर मशीन का <b>JVM</b> चलाता है (platform independent)।<br>
<b>JDK</b> (बनाने का पूरा किट) ⊃ <b>JRE</b> (चलाने का माहौल) ⊃ <b>JVM</b> (असली इंजन)।</div>
<div class="tr">⚠️ <b>PYQ (Q100) — String:</b> <code>String s = "abc";</code> (literal → String Pool) और <code>new String("abc")</code> (heap में नया object) — <b>दोनों valid</b>। <code>s1==s2</code> literals पर <b>true</b>, new से <b>false</b>; सामग्री जाँच <code>.equals()</code>।<br>
⚠️ <b>PYQ (Q52) — Exception:</b> try के बाद catch/finally कम-से-कम एक; <b>finally हमेशा चलता है</b>; Checked (IOException — compile पर) बनाम Unchecked (NullPointer, ArrayIndexOutOfBounds — run-time)।</div>
<div class="tk">🧠 <b>Java में क्या नहीं:</b> ❌ Pointer ❌ class से Multiple inheritance (पर <b>interface</b> से हाँ) ❌ Destructor (Garbage Collector है) ❌ goto (आरक्षित, अप्रयुक्त)।</div>
</div>

<div class="blk"><h3>1️⃣3️⃣ Python की ख़ास बातें</h3>
<div class="tk">🧠 Indentation ही block है (कोई {} नहीं) • dynamically typed • <b>interpreted</b> • Guido van Rossum।<br>
<b>Declaration ट्रैप (Q83):</b> variable नाम अंक से शुरू नहीं (<code>1x</code> ❌), keyword नहीं (<code>class</code> ❌), पर <code>_x</code>, <code>x1</code> चलें।</div>
<div style="overflow-x:auto"><table>
<tr><th>Structure</th><th>चिह्न</th><th>Mutable?</th><th>Duplicate?</th></tr>
<tr><td><b>List</b></td><td>[ ]</td><td>✅</td><td>✅</td></tr>
<tr><td><b>Tuple</b></td><td>( )</td><td>❌ Immutable</td><td>✅</td></tr>
<tr><td><b>Set</b></td><td>{ }</td><td>✅</td><td>❌</td></tr>
<tr><td><b>Dict</b></td><td>{k:v}</td><td>✅</td><td>key unique</td></tr>
</table></div>
<div class="tk">🧠 "लिस्ट लचीली, टपल टाइट।" <b>Python 3:</b> <code>5/2 = 2.5</code> (हमेशा float), <code>5//2 = 2</code> (floor)। <code>y = x</code> copy नहीं — दोनों एक ही object।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🪜 Machine → Assembly → C (middle) → High-level | Compiler पूरा, Interpreter लाइन-दर-लाइन<br>
🔤 Token = सबसे छोटी इकाई | C में 32 keywords | data type: primary/derived/user-defined<br>
🔢 C real types = float, double, long double | sizeof(char)=1 हमेशा<br>
➕ i++ पहले दे फिर बढ़े | ++i पहले बढ़े | एक statement में 2 बार = Undefined<br>
🔁 entry loop (for/while) vs exit loop (do-while — कम-से-कम 1 बार) | switch में break<br>
👉 *p++ = पहले value फिर pointer आगे | & = पता, * = मान<br>
🧱 OOP = एब्स-एन-इन-पॉली | Overloading compile-time, Overriding run-time<br>
🚫 Abstract class (pure virtual=0) का object नहीं बनता<br>
☕ JDK ⊃ JRE ⊃ JVM | Java: no pointer/multiple-inh/destructor | finally हमेशा<br>
☕ literal==literal true, new false | .equals() से सामग्री<br>
🐍 Python: 5/2=2.5, 5//2=2 | List लचीली, Tuple टाइट | y=x copy नहीं
</div>
</div>
`;


CARDS.p2pf = [
  ['[रिकॉल] C में real (floating point) data types कौन-से हैं?', 'float, double और long double।', 'तीन असली'],
  ['[रिकॉल] OOP के चार खंभे कौन-से हैं?', 'Encapsulation, Abstraction, Inheritance, Polymorphism।', 'एब्स-एन-इन-पॉली'],
  ['[रिकॉल] Java का नारा क्या है और क्यों?', '"Write Once, Run Anywhere" — क्योंकि Java bytecode बनाता है जिसे हर मशीन का JVM चला लेता है।', 'एक बार लिखो'],
  ['[रिवर्स रिकॉल] "एक ही class में एक ही नाम के कई methods, पर parameters अलग" — यह क्या है?', 'Method Overloading (compile-time polymorphism)।', 'एक नाम, कई रूप'],
  ['[रिवर्स रिकॉल] "जिसमें pure virtual function हो और जिसका object कभी न बने" — कौन-सी class?', 'Abstract class।', 'सिर्फ़ नक़्शा'],
  ['[रिक्त स्थान] Java में ______ ⊃ ______ ⊃ ______ (बड़े से छोटे क्रम में)।', 'JDK ⊃ JRE ⊃ JVM', 'किट-माहौल-इंजन'],
  ['[रिक्त स्थान] Python 3 में 5/2 = ______ और 5//2 = ______।', '2.5 (float); 2 (floor division)', 'स्लैश float देता है'],
  ['[कथन आधारित] कथन: Java में multiple inheritance class के ज़रिए संभव है।', 'ग़लत। Java में class से multiple inheritance नहीं होती (diamond problem), पर interface के ज़रिए हो जाती है।', 'interface से हाँ'],
  ['[कथन आधारित] कथन: Java में finally block तभी चलता है जब exception आए।', 'ग़लत। finally हमेशा चलता है — exception आए या न आए, यहाँ तक कि return के बावजूद भी।', 'finally = हमेशा'],
  ['[मैच] मिलाओ: (a) Encapsulation (b) Abstraction (c) Inheritance (d) Polymorphism', '(a) दवा का कैप्सूल — डेटा छिपाना, (b) कार का steering — सिर्फ़ ज़रूरी दिखाना, (c) बच्चा गुण पाए, (d) एक नाम कई रूप।', 'चार खंभे'],
  ['[मैच] मिलाओ: (a) List (b) Tuple (c) Set (d) Dict', '(a) [ ] बदल सकती, (b) ( ) immutable, (c) { } duplicate नहीं, (d) {key:value}।', 'लिस्ट लचीली, टपल टाइट'],
  ['[मैच] मिलाओ: (a) Compiler (b) Interpreter (c) Assembler (d) JVM', '(a) पूरा प्रोग्राम एक बार में, (b) लाइन-दर-लाइन, (c) assembly→machine, (d) bytecode चलाने वाला इंजन।', 'अनुवादकों का परिवार'],
  ['[तुलना] Overloading और Overriding में फ़र्क़?', 'Overloading = एक ही class में, नाम वही पर parameters अलग, compile-time पर तय। Overriding = parent-child में, signature बिल्कुल वही, run-time पर तय।', 'लोड=एक घर, राइड=दो घर'],
  ['[तुलना] i++ और ++i में फ़र्क़?', 'i++ (postfix) पहले पुरानी क़ीमत देता है फिर बढ़ाता है। ++i (prefix) पहले बढ़ाता है फिर नई क़ीमत देता है।', 'पहले दे या पहले बढ़'],
  ['[तुलना] *p++, (*p)++ और *++p में फ़र्क़?', '*p++ = मौजूदा value पढ़ो, फिर pointer आगे। (*p)++ = value को बढ़ाओ। *++p = पहले pointer आगे, फिर पढ़ो।', 'कोष्ठक ही राजा'],
  ['[कालक्रम] भाषाओं का स्तर नीचे से ऊपर क्रम में लिखो।', 'Machine language → Assembly language → High-level language (C, Java, Python)।', 'सीढ़ी चढ़ो'],
  ['[Code Output] int i=0; System.out.println(i++ + ++i); — Java में क्या छपेगा?', '2। i++ पहले 0 देता है (i=1), फिर ++i i को 2 करके 2 देता है। 0+2 = 2।', 'शून्य जोड़ दो'],
  ['[Code Output] int i; for(i=0; i<5; i++); printf("%d", i); — क्या छपेगा?', '5। for के आगे semicolon है, इसलिए body ख़ाली। Loop तब रुका जब i=5 (शर्त टूटी)।', 'semicolon का चारा'],
  ['[Code Output] Python: x=[1,2,3]; y=x; y.append(4); print(len(x)) — क्या आएगा?', '4। y=x कोई copy नहीं बनाता — दोनों एक ही list की ओर इशारा करते हैं।', 'एक ही डिब्बा'],
  ['[True/False] C में sizeof(char) मशीन के हिसाब से बदलता है।', 'False। C में sizeof(char) हमेशा 1 होता है — यह परिभाषा से तय है।', 'char हमेशा 1'],
  ['[True/False] Java में destructor होता है।', 'False। Java में destructor नहीं — Garbage Collector अपने आप memory साफ़ करता है।', 'GC सफ़ाईवाला'],
  ['[ट्रैप कार्ड] Java: String s1="RSSB", s2="RSSB" — s1==s2 का नतीजा?', 'true! दोनों literals String Pool में एक ही object हैं। पर अगर new String("RSSB") होता तो false आता।', 'pool में एक ही'],
  ['[ट्रैप कार्ड] C: printf("%d %d", x++, ++x); — क्या छपेगा?', 'कुछ भी! यह Undefined Behaviour है — एक ही statement में एक variable दो बार बदला। परीक्षा में "Undefined" ही सही जवाब है।', 'अनिश्चित = सही'],
  ['[ट्रैप कार्ड] Python में 1x = 5 चलेगा?', 'नहीं। Python में variable का नाम अंक से शुरू नहीं हो सकता। _x और x1 चलेंगे, 1x नहीं।', 'अंक से शुरू नहीं']
];

QB.p2pf = [
  { q: 'C में real (floating point) data types कौन-से हैं?', o: ['int, float, char', 'float, double, long double', 'int, long, short', 'char, float, int'], a: 1, e: 'C में तीन floating point types हैं — float (4 byte), double (8 byte) और long double। int, char और long पूर्णांक/अक्षर प्रकार हैं।', trap: 'int या char को floating point में गिन लेना।', d: 2, tag: 'C Data Types', pyq: 'Paper-II Q69 — हूबहू' },
  { q: "'ptrdata' किसी data type का pointer है। C++ में expression *ptrdata++ का मूल्यांकन कैसे होगा?", o: ['पहले pointer आगे बढ़ेगा, फिर value पढ़ी जाएगी', 'पहले मौजूदा value पढ़ी जाएगी, फिर pointer आगे बढ़ेगा', 'जिस value पर pointer है, वह बढ़ जाएगी', 'Compile error आएगा'], a: 1, e: '*ptrdata++ का अर्थ है *(ptrdata++)। ++ postfix है, इसलिए वह पहले पुरानी क़ीमत लौटाता है — यानी मौजूदा जगह की value पढ़ी जाती है, उसके बाद pointer आगे खिसकता है।', trap: '(*ptr)++ से उलझ जाना — वो value को बढ़ाता है, pointer को नहीं।', d: 3, tag: 'Pointers', pyq: 'Paper-II Q37 — हूबहू' },
  { q: 'Abstract class के संबंध में कौन-सा कथन सही है?', o: ['उसका object सामान्य रूप से बनाया जा सकता है', 'जिसमें कम-से-कम एक pure virtual function हो, उसका object नहीं बनाया जा सकता', 'उसमें कोई भी function नहीं हो सकता', 'वह inherit नहीं की जा सकती'], a: 1, e: 'जिस class में एक भी pure virtual function (= 0) हो, वह abstract हो जाती है और उसका object कभी नहीं बन सकता — केवल pointer/reference बन सकता है। उसे inherit करके derived class में सारे pure virtual functions परिभाषित करने पड़ते हैं।', trap: '"inherit नहीं की जा सकती" चुन लेना — असल में वह बनी ही inherit होने के लिए है।', d: 3, tag: 'OOP', pyq: 'Paper-II Q84 — हूबहू' },
  { q: 'Java में String बनाने के कौन-से तरीक़े valid हैं?', o: ['केवल String s = "abc";', 'केवल String s = new String("abc");', 'दोनों — literal से और new keyword से', 'दोनों में से कोई नहीं'], a: 2, e: 'दोनों valid हैं। Literal ("abc") String Pool में जाता है, जबकि new String("abc") heap में नया object बनाता है। इसीलिए literal की तुलना == से true देती है, पर new वाली false।', trap: 'सिर्फ़ एक तरीक़े को सही मान लेना।', d: 2, tag: 'Java', pyq: 'Paper-II Q100 — हूबहू' },
  { q: 'Java में exception handling के संबंध में कौन-सा कथन सही है?', o: ['finally block केवल तभी चलता है जब exception आए', 'finally block हमेशा चलता है, चाहे exception आए या न आए', 'try के बाद catch लिखना अनिवार्य नहीं और finally भी नहीं', 'Checked exception run-time पर पकड़ी जाती है'], a: 1, e: 'finally block हमेशा execute होता है — exception आए, न आए, यहाँ तक कि try में return हो तब भी। try के बाद catch या finally में से कम-से-कम एक अनिवार्य है। Checked exceptions compile-time पर पकड़ी जाती हैं।', trap: '"केवल exception आने पर" चुन लेना — finally का पूरा मक़सद ही सफ़ाई (cleanup) है।', d: 2, tag: 'Java', pyq: 'Paper-II Q52 — हूबहू' },
  { q: 'Python में निम्न में से कौन-सा declaration ग़लत है?', o: ['_x = 5', 'x1 = 5', '1x = 5', 'x_1 = 5'], a: 2, e: 'Python में variable का नाम अंक से शुरू नहीं हो सकता। underscore या अक्षर से शुरू होकर उसमें अंक आ सकते हैं — इसलिए _x, x1 और x_1 तीनों सही हैं, पर 1x ग़लत है।', trap: '_x को ग़लत मान लेना — underscore से शुरुआत बिल्कुल valid है।', d: 2, tag: 'Python', pyq: 'Paper-II Q83 — हूबहू' },
  { q: 'a = 10, b = 5, c = 10 हो, तो निम्न C कोड का output क्या होगा?  printf("%d", a > b ? (a > c ? a : c) : b);', o: ['5', '10', '1', '0'], a: 1, e: 'a > b यानी 10 > 5 सही है, इसलिए भीतर वाला ternary चलेगा — a > c यानी 10 > 10 ग़लत है, इसलिए c मिलेगा = 10।', trap: '10 > 10 को सही मान लेना — यह > है, >= नहीं।', d: 3, tag: 'C Operators', pyq: 'Paper-II Q16 — हूबहू' },
  { q: 'Compile-time और Run-time polymorphism क्रमशः किससे प्राप्त होते हैं?', o: ['Overriding और Overloading', 'Overloading और Overriding', 'दोनों Overloading से', 'दोनों Inheritance से'], a: 1, e: 'Method Overloading (एक ही class में, parameters अलग) compile पर तय होता है — इसलिए compile-time/static polymorphism। Method Overriding (parent-child, वही signature) चलते समय तय होता है — run-time/dynamic polymorphism।', trap: 'दोनों को आपस में उलट देना — यही सबसे आम ग़लती है।', d: 2, tag: 'OOP', pyq: 'हर practice book में' },
  { q: 'निम्न Java कोड का output क्या होगा?  int i = 0; System.out.println(i++ + ++i);', o: ['0', '1', '2', '3'], a: 2, e: 'i++ पहले पुरानी क़ीमत 0 देता है और i को 1 कर देता है। फिर ++i पहले i को 2 करता है और 2 देता है। इसलिए 0 + 2 = 2।', trap: '1 + 1 = 2 सोचकर सही जवाब पर संयोग से पहुँचना — तरीक़ा समझना ज़रूरी है, वरना अगली बार चूकेगा।', d: 3, tag: 'Java', pyq: 'Paper-II Q51 पैटर्न' },
  { q: 'Python 3 में print(5/2) और print(5//2) का output क्रमशः क्या होगा?', o: ['2 और 2', '2.5 और 2', '2.5 और 2.5', '2 और 2.5'], a: 1, e: 'Python 3 में / हमेशा float देता है, इसलिए 5/2 = 2.5। // floor division है, इसलिए 5//2 = 2।', trap: 'Python 2 की आदत से 5/2 = 2 मान लेना।', d: 2, tag: 'Python', pyq: 'सामान्य' },
  { q: 'निम्न में से कौन-सा Java में उपलब्ध नहीं है?', o: ['Garbage Collector', 'Interface', 'Pointer', 'Exception Handling'], a: 2, e: 'Java में pointer नहीं होता (सुरक्षा कारणों से) — memory सीधे छेड़ी नहीं जा सकती। Garbage Collector, Interface और Exception Handling तीनों Java की ख़ासियतें हैं।', trap: 'Interface चुन लेना — वो तो Java का सबसे अहम feature है।', d: 1, tag: 'Java', pyq: 'सामान्य' },
  { q: 'C में निम्न कोड का output क्या होगा?  int i; for(i = 0; i < 5; i++); printf("%d", i);', o: ['4', '5', '0', 'अनंत loop'], a: 1, e: 'for के आगे semicolon लगा है, इसलिए loop की body ख़ाली है। Loop तब रुकता है जब i = 5 हो जाए (5 < 5 ग़लत)। इसलिए 5 छपेगा।', trap: '4 चुन लेना — loop आख़िरी बार i=4 पर चला ज़रूर, पर बाहर निकलते समय i=5 हो चुका है।', d: 3, tag: 'C Loops', pyq: 'क्लासिक चारा' },
  { q: 'Encapsulation का सबसे सही उदाहरण कौन-सा है?', o: ['एक class के private data को public methods (getter/setter) के ज़रिए ही छूना', 'एक class का दूसरी class से गुण पाना', 'एक ही नाम के कई methods बनाना', 'सिर्फ़ ज़रूरी विवरण दिखाना और बाक़ी छिपाना'], a: 0, e: 'Encapsulation = data और उस पर काम करने वाले methods को एक साथ बाँधना, और data को private रखकर सिर्फ़ public methods से छूने देना — बिल्कुल दवा के कैप्सूल की तरह।', trap: 'विकल्प (d) Abstraction की परिभाषा है — दोनों बहुत मिलते-जुलते लगते हैं। Encapsulation "कैसे छिपाया" है, Abstraction "क्या दिखाया" है।', d: 3, tag: 'OOP', pyq: 'वैचारिक — बार-बार' },
  { q: 'Python में List और Tuple के बीच मुख्य अंतर क्या है?', o: ['List immutable है, Tuple mutable', 'List mutable है, Tuple immutable', 'दोनों immutable हैं', 'Tuple में duplicate नहीं हो सकते'], a: 1, e: 'List [ ] बदली जा सकती है (mutable), जबकि Tuple ( ) एक बार बन जाने के बाद बदली नहीं जा सकती (immutable)। दोनों में duplicate चल जाते हैं — duplicate Set में नहीं चलते।', trap: 'दोनों को उलट देना, या "Tuple में duplicate नहीं" चुन लेना (वो Set का गुण है)।', d: 2, tag: 'Python', pyq: 'सामान्य' },
  { q: 'C में sizeof(char) का मान क्या होता है?', o: ['1', '2', '4', 'मशीन पर निर्भर'], a: 0, e: 'C standard के अनुसार sizeof(char) हमेशा 1 होता है — यह परिभाषा से तय है। int, float आदि का आकार मशीन पर निर्भर हो सकता है, पर char नहीं।', trap: '"मशीन पर निर्भर" चुन लेना — यह बाक़ी types के लिए सही है, char के लिए नहीं।', d: 2, tag: 'C Data Types', pyq: 'सामान्य' },
  { q: 'JDK, JRE और JVM के बीच सही संबंध क्या है?', o: ['JVM ⊃ JRE ⊃ JDK', 'JDK ⊃ JRE ⊃ JVM', 'JRE ⊃ JDK ⊃ JVM', 'तीनों एक ही हैं'], a: 1, e: 'JDK (Java Development Kit) सबसे बड़ा है — उसमें compiler समेत सब कुछ है। उसके अंदर JRE (चलाने का माहौल), और JRE के अंदर JVM (असली इंजन)।', trap: 'JVM को सबसे बड़ा मान लेना, क्योंकि वो सबसे ज़्यादा सुना हुआ नाम है।', d: 2, tag: 'Java', pyq: 'सामान्य' },
  { q: 'C में एक ही statement में एक ही variable को दो बार modify करने पर (जैसे printf("%d %d", x++, ++x);) क्या होता है?', o: ['हमेशा 5 6 छपता है', 'Compile error आता है', 'यह Undefined Behaviour है', 'हमेशा 6 7 छपता है'], a: 2, e: 'दो sequence points के बीच एक ही variable को एक से अधिक बार modify करना C standard में Undefined Behaviour है — compiler कुछ भी कर सकता है। इसलिए इसका कोई "सही" output नहीं होता।', trap: 'किसी ठोस संख्या को जवाब मान लेना — परीक्षा में "Undefined" ही सही है।', d: 3, tag: 'C Operators', pyq: 'गहरा — बार-बार' },
  { q: 'Java में multiple inheritance किसके ज़रिए संभव है?', o: ['Class', 'Interface', 'Package', 'Constructor'], a: 1, e: 'Java में class से multiple inheritance नहीं होती (diamond problem से बचने के लिए), पर एक class कई interfaces को एक साथ implement कर सकती है — इस तरह multiple inheritance मिल जाती है।', trap: 'Class चुन लेना — C++ में वो चलता है, Java में नहीं।', d: 2, tag: 'Java', pyq: 'सामान्य' },
  { q: 'निम्न में से कौन-सा unchecked exception है?', o: ['IOException', 'SQLException', 'NullPointerException', 'FileNotFoundException'], a: 2, e: 'NullPointerException, ArrayIndexOutOfBoundsException और ArithmeticException — ये unchecked (run-time) exceptions हैं। IOException, SQLException और FileNotFoundException checked हैं, यानी compile पर ही संभालनी पड़ती हैं।', trap: 'IOException चुन लेना — वो सबसे मशहूर checked exception है।', d: 3, tag: 'Java', pyq: 'गहरा' },
  { q: 'Assembly language को machine language में बदलने वाला program क्या कहलाता है?', o: ['Compiler', 'Interpreter', 'Assembler', 'Linker'], a: 2, e: 'Assembler का काम ही assembly language (MOV, ADD जैसे mnemonics) को machine code (0-1) में बदलना है। Compiler high-level भाषा को बदलता है।', trap: 'Compiler चुन लेना — वो C/Java जैसी high-level भाषाओं के लिए है।', d: 1, tag: 'Translators', pyq: 'आधारभूत' }
];

UNIT_INIT.p2pf = function () { codeRender(); };
