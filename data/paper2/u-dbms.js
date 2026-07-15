/*! MODULE: data/paper2/u-dbms.js — Paper-II Unit: DBMS (highest PYQ weight ≈ 13/100) */
/* Registers into the EXISTING engine: CH (grid) + LESSON + CARDS + QB. No engine changes needed. */

CH.push({ id: 'p2db', ic: '🗄️', t: 'DBMS', s: 'ER • Keys • SQL • Normalization • ACID', xp: 130, p: 2 });

/* ==================== LESSON ==================== */
LESSON.p2db = `
<div class="blk"><h3>🗄️ DBMS — डेटाबेस मैनेजमेंट सिस्टम</h3>
<p><b>सरल भाषा में:</b> सोच, तेरे स्कूल के सारे बच्चों का रिकॉर्ड एक <b>रजिस्टर</b> में है। कोई पूछे "9वीं के कितने बच्चे हैं?" — तू पूरा रजिस्टर पलटेगा। अब वही रिकॉर्ड एक <b>स्मार्ट रजिस्टर</b> में हो जो खुद गिन के बता दे, दो जगह अलग-अलग नाम न लिखने दे, और दो टीचर एक साथ लिखें तो झगड़ा न हो — वही <b>DBMS</b> है।</p>
<p><b>गहराई से:</b> DBMS एक <b>software layer</b> है जो user और physical data के बीच खड़ी रहती है। यह data को <b>store, retrieve, update</b> करने का व्यवस्थित तरीका देती है और साथ में <b>security, integrity, concurrency, recovery</b> संभालती है।</p>
<div class="tk">💡 <b>यह concept बना ही क्यों?</b> पहले सब कुछ <b>File System</b> में था। उसकी 4 बीमारियाँ थीं — <b>Data Redundancy</b> (एक ही डेटा कई जगह), <b>Inconsistency</b> (एक जगह बदला, दूसरी जगह नहीं), <b>Data Isolation</b> (डेटा अलग-अलग फ़ॉर्मैट में बिखरा), और <b>कोई concurrency/recovery नहीं</b>। DBMS इन चारों की दवा है।</p></div>
</div>

<div class="blk"><h3>📁 File System बनाम DBMS + फ़ायदे</h3>
<div style="overflow-x:auto"><table>
<tr><th>File System</th><th>DBMS</th></tr>
<tr><td>Redundancy ज़्यादा (डेटा दोहराव)</td><td>Redundancy नियंत्रित</td></tr>
<tr><td>Inconsistency का ख़तरा</td><td>Consistency बनी रहती है</td></tr>
<tr><td>कोई concurrency नहीं</td><td>कई user एक साथ (concurrency control)</td></tr>
<tr><td>कमज़ोर security/recovery</td><td>मज़बूत security, backup व recovery</td></tr>
<tr><td>कोई query भाषा नहीं</td><td>SQL से आसान query</td></tr>
</table></div>
<div class="tk">🧠 <b>DBMS के मुख्य फ़ायदे:</b> redundancy घटे, consistency बढ़े, data sharing, integrity constraints, security, backup-recovery, और <b>data independence</b>।<br>
🧠 <b>Data Abstraction के 3 स्तर:</b> Physical (कैसे स्टोर) → Logical (क्या स्टोर) → View (user क्या देखे)।</div>
</div>

<div class="blk"><h3>👥 Database Users</h3>
<div style="overflow-x:auto"><table>
<tr><th>User</th><th>काम</th></tr>
<tr><td><b>DBA</b> (Database Administrator)</td><td>सबसे ताक़तवर — schema बनाना, अनुमति (GRANT/REVOKE), backup, tuning</td></tr>
<tr><td><b>Database Designer</b></td><td>ER model व schema डिज़ाइन करे</td></tr>
<tr><td><b>Application Programmer</b></td><td>application बनाए (embedded SQL)</td></tr>
<tr><td><b>End User</b></td><td>naive (form भरे) या sophisticated (ख़ुद query लिखे)</td></tr>
</table></div>
<div class="tk">🧠 <b>DBA</b> सबसे अहम — वही access control (GRANT/REVOKE = DCL) संभालता है। Data Dictionary (metadata = "data about data") भी DBA का हथियार।</div>
</div>

<div class="blk"><h3>🏛️ आर्किटेक्चर — ANSI/SPARC तीन-स्तरीय स्कीमा</h3>
<div class="viz">
<svg viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg">
 <rect x="60" y="8"  width="280" height="34" rx="7" fill="#a855f7" opacity=".22" stroke="#a855f7"/>
 <text x="200" y="30" text-anchor="middle" fill="#eef3fa" font-size="13" font-weight="700">External / View Level (कई views)</text>
 <text x="200" y="56" text-anchor="middle" fill="#22d3ee" font-size="10">↕ Logical Data Independence</text>
 <rect x="60" y="64" width="280" height="34" rx="7" fill="#22d3ee" opacity=".22" stroke="#22d3ee"/>
 <text x="200" y="86" text-anchor="middle" fill="#eef3fa" font-size="13" font-weight="700">Conceptual / Logical Level (एक)</text>
 <text x="200" y="112" text-anchor="middle" fill="#26d07c" font-size="10">↕ Physical Data Independence</text>
 <rect x="60" y="120" width="280" height="34" rx="7" fill="#26d07c" opacity=".22" stroke="#26d07c"/>
 <text x="200" y="142" text-anchor="middle" fill="#eef3fa" font-size="13" font-weight="700">Internal / Physical Level (एक)</text>
 <text x="200" y="174" text-anchor="middle" fill="#8298b6" font-size="10">💾 असली डिस्क — files, blocks, indexes</text>
</svg>
</div>
<p><b>असली ज़िंदगी की मिसाल:</b> एक <b>बैंक</b> सोच — <b>cashier</b> को सिर्फ़ balance दिखता है (External), <b>manager</b> को पूरी टेबल दिखती है (Conceptual), और असली डेटा डिस्क पर B+ tree में बैठा है (Internal)। तीनों एक ही डेटा के तीन नज़ारे हैं।</p>
<div class="tk">🧠 <b>Data Independence — याद रखने का तरीका:</b><br>
<b>Physical</b> independence = नीचे (disk/index) बदलो, <b>ऊपर कुछ न बदले</b> → आसान, अक्सर मिलती है।<br>
<b>Logical</b> independence = बीच (table structure) बदलो, <b>views न बदलें</b> → मुश्किल, कम मिलती है।<br>
<b>मंत्र: "Physical आसान, Logical कठिन।"</b></div>
<div class="tr">⚠️ <b>ट्रैप:</b> पेपर पूछता है "कौन-सी data independence हासिल करना ज़्यादा <b>कठिन</b> है?" → जवाब <b>Logical</b>। ज़्यादातर बच्चे Physical लिख आते हैं।</div>
</div>

<div class="blk"><h3>🧩 ER Model — डेटाबेस का नक्शा</h3>
<p>असली दुनिया को डायग्राम में उतारने का तरीका। पेपर में <b>shape पहचानना</b> लगभग पक्का सवाल है।</p>
<div style="overflow-x:auto"><table>
<tr><th>आकृति</th><th>मतलब</th><th>उदाहरण</th></tr>
<tr><td>▭ आयत (Rectangle)</td><td><b>Entity</b></td><td>STUDENT</td></tr>
<tr><td>▭▭ दोहरा आयत</td><td><b>Weak Entity</b> (अपनी key नहीं)</td><td>DEPENDENT</td></tr>
<tr><td>◇ हीरा (Diamond)</td><td><b>Relationship</b></td><td>ENROLLS</td></tr>
<tr><td>◇◇ दोहरा हीरा</td><td>Identifying relationship</td><td>weak entity से जुड़ा</td></tr>
<tr><td>⬭ दीर्घवृत्त (Ellipse)</td><td><b>Attribute</b></td><td>name</td></tr>
<tr><td>⬭ रेखांकित</td><td><b>Key attribute</b></td><td><u>roll_no</u></td></tr>
<tr><td>⬭ दोहरा</td><td>Multivalued attribute</td><td>phone</td></tr>
<tr><td>⬭ बिंदुदार</td><td>Derived attribute</td><td>age (DOB से)</td></tr>
<tr><td>═ दोहरी रेखा</td><td><b>Total participation</b></td><td>हर employee किसी dept में</td></tr>
<tr><td>─ एकहरी रेखा</td><td>Partial participation</td><td>हर employee manager नहीं</td></tr>
</table></div>
<div class="tk">🧠 <b>मेमोरी ट्रिक — "आ-हे-दी" (आयत–हीरा–दीर्घवृत्त):</b> <b>आ</b>यत=Entity, <b>हे</b>रा=Relationship, <b>दी</b>र्घवृत्त=Attribute। और <b>"दोहरा = कमज़ोर/पूरा"</b> — दोहरा आयत=weak, दोहरी रेखा=total.</div>
<div class="tr">⚠️ <b>ट्रैप:</b> "double line in ER diagram indicates?" → <b>Total participation</b> (weak entity नहीं!)। Weak entity = <b>double rectangle</b>। दोनों में "double" है — यहीं गच्चा खाते हैं।</div>
</div>

<div class="blk"><h3>🔑 Keys — पूरा परिवार (सबसे ज़्यादा पूछा जाने वाला टॉपिक)</h3>
<div class="viz">
<svg viewBox="0 0 380 150" xmlns="http://www.w3.org/2000/svg">
 <ellipse cx="190" cy="75" rx="180" ry="70" fill="#ff4d5e" opacity=".13" stroke="#ff4d5e"/>
 <text x="190" y="26" text-anchor="middle" fill="#ff4d5e" font-size="12" font-weight="800">Super Key (कोई भी अनोखा सेट)</text>
 <ellipse cx="190" cy="86" rx="130" ry="48" fill="#ffc233" opacity=".16" stroke="#ffc233"/>
 <text x="190" y="60" text-anchor="middle" fill="#ffc233" font-size="12" font-weight="800">Candidate Key (minimal super key)</text>
 <ellipse cx="190" cy="100" rx="72" ry="27" fill="#26d07c" opacity=".22" stroke="#26d07c"/>
 <text x="190" y="105" text-anchor="middle" fill="#26d07c" font-size="12" font-weight="800">Primary Key (चुनी हुई एक)</text>
</svg>
</div>
<div style="overflow-x:auto"><table>
<tr><th>Key</th><th>परिभाषा</th><th>पकड़ने की बात</th></tr>
<tr><td><b>Super Key</b></td><td>कोई भी attribute-set जो tuple को <b>अनोखा</b> पहचाने</td><td>इसमें फालतू attribute हो सकते हैं</td></tr>
<tr><td><b>Candidate Key</b></td><td><b>Minimal</b> super key — एक भी attribute हटाओ तो uniqueness टूटे</td><td>"minimal super key" = candidate key</td></tr>
<tr><td><b>Primary Key</b></td><td>candidate keys में से चुनी हुई <b>एक</b></td><td><b>NULL नहीं</b>, duplicate नहीं</td></tr>
<tr><td><b>Alternate Key</b></td><td>बची हुई candidate keys</td><td>PK के अलावा</td></tr>
<tr><td><b>Composite Key</b></td><td>एक से ज़्यादा attribute वाली key</td><td>—</td></tr>
<tr><td><b>Foreign Key</b></td><td>दूसरी टेबल की PK की ओर इशारा</td><td><b>NULL हो सकती है</b>; referential integrity</td></tr>
</table></div>
<div class="tk">🧠 <b>ट्रिक — "सब कैंडिडेट प्राइमरी":</b> <b>स</b>ुपर ⊇ <b>कै</b>ंडिडेट ⊇ <b>प्रा</b>इमरी। हर candidate key एक super key है, पर हर super key candidate नहीं। PK बस एक चुना हुआ candidate है।</div>
<div class="tr">⚠️ <b>PYQ ट्रैप (असली Paper-II Q40):</b> "minimal super key is known as?" → <b>Candidate Key</b>। लोग "Primary key" लिख आते हैं — पर primary तो candidate में से <b>चुनी</b> जाती है, वो खुद परिभाषा नहीं।</div>
<div class="tr">⚠️ <b>दूसरा ट्रैप:</b> Primary key में NULL <b>कभी नहीं</b>; Foreign key में NULL <b>चल जाती है</b> (जैसे जिस employee का कोई manager नहीं)।</div>
</div>

<div class="blk"><h3>🧪 SQL Playground — खुद चला के देख</h3>
<p style="font-size:.8rem;color:var(--dim)">नीचे असली SQL चलेगा। EMPLOYEE(eid, name, dept, salary, mgr) और DEPT(dname, city) मौजूद हैं। पढ़ने से नहीं — <b>चला के</b> याद होगा।</p>
<div class="sqlLab">
  <textarea id="sqlIn" class="sqlIn" rows="2" spellcheck="false">SELECT * FROM EMPLOYEE</textarea>
  <div class="sqlBar">
    <button class="sqlBtn go" onclick="sqlRun()">▶ चलाओ</button>
    <button class="sqlBtn" onclick="sqlReset()">🔄 रीसेट</button>
  </div>
  <div class="sqlChips">
    <button class="sqlChip" onclick="sqlDemo('SELECT dept, COUNT(*), AVG(salary) FROM EMPLOYEE GROUP BY dept')">GROUP BY + aggregate</button>
    <button class="sqlChip" onclick="sqlDemo('SELECT DISTINCT dept FROM EMPLOYEE')">DISTINCT (π)</button>
    <button class="sqlChip" onclick="sqlDemo('SELECT name, salary FROM EMPLOYEE WHERE salary &gt; 50000 ORDER BY salary DESC')">WHERE + ORDER BY</button>
    <button class="sqlChip" onclick="sqlDemo('SELECT COUNT(*), COUNT(mgr) FROM EMPLOYEE')">COUNT(*) vs COUNT(col) — NULL ट्रैप</button>
    <button class="sqlChip danger" onclick="sqlDemo('DELETE FROM EMPLOYEE')">DELETE FROM EMPLOYEE ⚠️</button>
    <button class="sqlChip danger" onclick="sqlDemo('DROP TABLE EMPLOYEE')">DROP TABLE ⚠️</button>
  </div>
  <div id="sqlOut" class="sqlOut"><div class="sqlNote">👆 कोई query चला, या ऊपर का कोई चिप दबा।</div></div>
</div>
<div class="tr">⚠️ <b>असली Paper-II Q32:</b> <code>DELETE FROM EMPLOYEE;</code> चलाने के बाद क्या बचता है? → <b>सारे tuples हट जाते हैं, पर relation (schema) ज़िंदा रहता है</b>। ऊपर दोनों बटन दबा के फ़र्क़ खुद देख ले — यही चीज़ पेपर में आती है।</div>
</div>

<div class="blk"><h3>📜 SQL के 4 परिवार — DDL, DML, DCL, TCL</h3>
<div style="overflow-x:auto"><table>
<tr><th>परिवार</th><th>पूरा नाम</th><th>कमांड</th><th>काम</th></tr>
<tr><td><b>DDL</b></td><td>Data <b>Definition</b> Language</td><td>CREATE, ALTER, DROP, TRUNCATE, RENAME</td><td><b>ढाँचा</b> बनाना/बदलना</td></tr>
<tr><td><b>DML</b></td><td>Data <b>Manipulation</b> Language</td><td>SELECT, INSERT, UPDATE, DELETE</td><td><b>डेटा</b> छेड़ना</td></tr>
<tr><td><b>DCL</b></td><td>Data <b>Control</b> Language</td><td>GRANT, REVOKE</td><td><b>अनुमति</b></td></tr>
<tr><td><b>TCL</b></td><td>Transaction <b>Control</b></td><td>COMMIT, ROLLBACK, SAVEPOINT</td><td><b>लेन-देन</b></td></tr>
</table></div>
<div class="tk">🧠 <b>मेमोरी ट्रिक:</b> <b>"CAD-T"</b> = <b>C</b>reate, <b>A</b>lter, <b>D</b>rop, <b>T</b>runcate → चारों <b>DDL</b>। बाक़ी SELECT/INSERT/UPDATE/DELETE = <b>DML</b> ("SIUD" — सी-यूड)।</div>
<div class="tr">⚠️ <b>क्लासिक ट्रैप — DELETE vs TRUNCATE vs DROP:</b><br>
<b>DELETE</b> = DML, rows हटे, <b>rollback हो सकता है</b>, WHERE लग सकती है।<br>
<b>TRUNCATE</b> = DDL, सारी rows, <b>rollback नहीं</b>, WHERE नहीं।<br>
<b>DROP</b> = DDL, <b>टेबल ही ख़त्म</b> (schema समेत)।<br>
<b>मंत्र: "DELETE माफ़ी देता है, TRUNCATE नहीं, DROP तो घर ही गिरा देता है।"</b></div>
</div>

<div class="blk"><h3>🧩 Extended ER — Generalization, Specialization, Aggregation</h3>
<div style="overflow-x:auto"><table>
<tr><th>अवधारणा</th><th>दिशा</th><th>मिसाल</th></tr>
<tr><td><b>Generalization</b></td><td>नीचे→ऊपर (कई entities से एक सामान्य)</td><td>Car + Bike → Vehicle</td></tr>
<tr><td><b>Specialization</b></td><td>ऊपर→नीचे (एक से कई विशिष्ट)</td><td>Employee → Manager, Engineer</td></tr>
<tr><td><b>Aggregation</b></td><td>relationship को ही entity मानना</td><td>(Employee works-on Project) को एक इकाई मानना</td></tr>
</table></div>
<div class="tk">🧠 <b>Generalization = bottom-up</b> (छोटों से बड़ा बनाओ — "IS-A" relationship)। <b>Specialization = top-down</b> (बड़े को तोड़ो)। दोनों उल्टे हैं — यही पूछा जाता है।<br>
🧠 <b>Cardinality (mapping):</b> One-to-One, One-to-Many, Many-to-One, Many-to-Many। <b>Degree</b> = relationship में कितनी entities (unary/binary/ternary)।</div>
</div>

<div class="blk"><h3>➗ Relational Algebra — SQL की जड़</h3>
<div style="overflow-x:auto"><table>
<tr><th>ऑपरेशन</th><th>चिह्न</th><th>Unary/Binary</th><th>काम</th></tr>
<tr><td><b>Select</b></td><td>σ (sigma)</td><td><b>Unary</b></td><td><b>rows</b> छाँटे (WHERE)</td></tr>
<tr><td><b>Project</b></td><td>π (pi)</td><td><b>Unary</b></td><td><b>columns</b> छाँटे; duplicates हटाए</td></tr>
<tr><td><b>Rename</b></td><td>ρ (rho)</td><td><b>Unary</b></td><td>नाम बदले</td></tr>
<tr><td>Union</td><td>∪</td><td>Binary</td><td>जोड़</td></tr>
<tr><td>Set Difference</td><td>−</td><td>Binary</td><td>घटाव</td></tr>
<tr><td>Cartesian Product</td><td>×</td><td>Binary</td><td>हर row से हर row</td></tr>
<tr><td>Join</td><td>⋈</td><td>Binary</td><td>शर्त पर जोड़</td></tr>
</table></div>
<div class="tk">🧠 <b>ट्रिक — "SPR अकेला, बाक़ी जोड़ी में":</b> <b>S</b>elect, <b>P</b>roject, <b>R</b>ename = <b>Unary</b> (एक ही टेबल)। Union/Difference/Product/Join = <b>Binary</b> (दो टेबल)।</div>
<div class="tr">⚠️ <b>असली Paper-II Q73:</b> "कौन-से unary operators हैं?" विकल्प थे Select, Project, Union, Product → जवाब <b>सिर्फ़ Select और Project</b>। Union/Product को unary मान लेना सबसे आम ग़लती है।</div>
<div class="tr">⚠️ <b>गहरा ट्रैप:</b> <b>5 basic/primitive operations</b> = σ, π, ∪, −, × । Join, Intersection, Division <b>derived</b> हैं (इन्हीं पाँच से बनते हैं)।</div>
</div>

<div class="blk"><h3>🔗 Functional Dependency + Joins</h3>
<p><b>Functional Dependency (FD)</b> A → B का मतलब — "A जान लो तो B पक्का पता चल जाए" (A से B निर्भर)। जैसे roll_no → name। यही normalization की बुनियाद है।</p>
<div class="tk">🧠 <b>FD के प्रकार:</b> Trivial (B, A का हिस्सा), Non-trivial, Partial (composite key के हिस्से पर निर्भर — 2NF तोड़े), Transitive (non-key से non-key — 3NF तोड़े)।<br>
🧠 <b>Armstrong के नियम:</b> Reflexivity, Augmentation, Transitivity।</div>
<div style="overflow-x:auto"><table>
<tr><th>Join</th><th>क्या देता है</th></tr>
<tr><td><b>Inner Join</b></td><td>दोनों tables में मेल खाती rows</td></tr>
<tr><td><b>Left Outer</b></td><td>बाईं table की सारी + दाईं की मेल वाली</td></tr>
<tr><td><b>Right Outer</b></td><td>दाईं की सारी + बाईं की मेल वाली</td></tr>
<tr><td><b>Full Outer</b></td><td>दोनों की सारी rows</td></tr>
<tr><td><b>Natural Join</b></td><td>समान नाम वाले column पर अपने आप</td></tr>
<tr><td><b>Cross Join</b></td><td>Cartesian product (हर × हर)</td></tr>
</table></div>
<div class="tr">⚠️ <b>ट्रैप:</b> Cross join = m×n rows (कोई शर्त नहीं)। Natural join duplicate column हटा देता है, cross नहीं।</div>
</div>

<div class="blk"><h3>🧬 Normalization — डेटा की सफ़ाई</h3>
<p><b>क्यों?</b> बिना normalization के तीन बीमारियाँ लगती हैं — <b>Insertion, Deletion, Update anomaly</b>। मिसाल: अगर student और उसका course एक ही टेबल में हों, तो जिस course में कोई student नहीं, वो course <b>डाला ही नहीं जा सकता</b> (insertion anomaly)।</p>
<div class="viz">
<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg">
 <rect x="6"  y="40" width="70" height="40" rx="6" fill="#ff4d5e" opacity=".2" stroke="#ff4d5e"/><text x="41" y="58" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">1NF</text><text x="41" y="72" text-anchor="middle" fill="#8298b6" font-size="8">atomic</text>
 <rect x="86" y="40" width="70" height="40" rx="6" fill="#ff8c1a" opacity=".2" stroke="#ff8c1a"/><text x="121" y="58" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">2NF</text><text x="121" y="72" text-anchor="middle" fill="#8298b6" font-size="8">no partial</text>
 <rect x="166" y="40" width="70" height="40" rx="6" fill="#ffc233" opacity=".2" stroke="#ffc233"/><text x="201" y="58" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">3NF</text><text x="201" y="72" text-anchor="middle" fill="#8298b6" font-size="8">no transitive</text>
 <rect x="246" y="40" width="70" height="40" rx="6" fill="#26d07c" opacity=".2" stroke="#26d07c"/><text x="281" y="58" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">BCNF</text><text x="281" y="72" text-anchor="middle" fill="#8298b6" font-size="8">LHS = superkey</text>
 <rect x="326" y="40" width="68" height="40" rx="6" fill="#a855f7" opacity=".2" stroke="#a855f7"/><text x="360" y="58" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">4NF</text><text x="360" y="72" text-anchor="middle" fill="#8298b6" font-size="8">no MVD</text>
 <path d="M76 60 L86 60 M156 60 L166 60 M236 60 L246 60 M316 60 L326 60" stroke="#8298b6" stroke-width="1.5" marker-end="url(#a)"/>
</svg>
</div>
<div style="overflow-x:auto"><table>
<tr><th>Form</th><th>शर्त</th><th>एक लाइन में</th></tr>
<tr><td><b>1NF</b></td><td>हर cell <b>atomic</b> (multivalued नहीं)</td><td>"एक खाने में एक ही चीज़"</td></tr>
<tr><td><b>2NF</b></td><td>1NF + कोई <b>partial dependency</b> नहीं</td><td>हर non-key attribute <b>पूरी</b> key पर निर्भर</td></tr>
<tr><td><b>3NF</b></td><td>2NF + कोई <b>transitive dependency</b> नहीं</td><td>non-key, non-key पर निर्भर न हो</td></tr>
<tr><td><b>BCNF</b></td><td>हर FD का LHS <b>super key</b> हो</td><td>3NF का सख़्त रूप</td></tr>
</table></div>
<div class="tk">🧠 <b>अमर मंत्र (हर टॉपर यही रटता है):</b><br>
<i>"The key (1NF), the whole key (2NF), and nothing but the key (3NF) — so help me Codd."</i><br>
<b>2NF = partial हटाओ, 3NF = transitive हटाओ।</b> Partial सिर्फ़ <b>composite key</b> के साथ हो सकती है — इसलिए अगर PK single attribute है और table 1NF में है, तो वो <b>अपने आप 2NF</b> में है!</div>
<div class="tr">⚠️ <b>असली Paper-II Q79:</b> "हर non-key attribute <b>fully functionally dependent</b> हो primary key पर" → यह <b>2NF</b> की परिभाषा है। लोग 3NF लिख आते हैं।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> practical design के लिए <b>3NF</b> को "adequate/पर्याप्त" माना जाता है — 5NF नहीं।</div>
</div>

<div class="blk"><h3>💳 Transactions — ACID</h3>
<div style="overflow-x:auto"><table>
<tr><th>अक्षर</th><th>गुण</th><th>मतलब</th><th>ATM की मिसाल</th></tr>
<tr><td><b>A</b></td><td>Atomicity</td><td>या तो <b>सब</b>, या <b>कुछ नहीं</b></td><td>पैसे कटे पर मिले नहीं → पूरा rollback</td></tr>
<tr><td><b>C</b></td><td>Consistency</td><td>नियम हमेशा बने रहें</td><td>कुल पैसा वही रहे</td></tr>
<tr><td><b>I</b></td><td>Isolation</td><td>एक-दूसरे को बीच में न देखें</td><td>दो withdrawal टकराएँ नहीं</td></tr>
<tr><td><b>D</b></td><td>Durability</td><td>COMMIT के बाद <b>पक्का</b></td><td>बिजली जाए तब भी पैसा कटा रहे</td></tr>
</table></div>
<div class="tk">🧠 <b>ट्रिक:</b> <b>ACID</b> — "तेज़ाब जैसा पक्का"। Durability का रखवाला = <b>Recovery Manager + Log</b>। Isolation का रखवाला = <b>Concurrency Control (locks / 2PL)</b>।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> <b>Checkpoint</b> क्या करता है? → recovery का समय <b>घटाता</b> है (log को एक बिंदु तक निपटा देता है)। "पूरा डेटा बैकअप" नहीं।</div>
</div>

<div class="blk"><h3>🔐 Concurrency Control + Recovery</h3>
<p>जब कई transactions एक साथ चलें, तो टकराव (lost update, dirty read) रोकने के लिए <b>concurrency control</b> चाहिए।</p>
<div class="tk">🧠 <b>Lock:</b> <b>Shared lock</b> (S — कई पढ़ सकें), <b>Exclusive lock</b> (X — एक ही लिखे)। <b>2PL (Two-Phase Locking)</b> = पहले सारे lock लो (growing), फिर सारे छोड़ो (shrinking) — serializability की गारंटी।<br>
🧠 <b>Schedule:</b> Serial (एक के बाद एक) बनाम Concurrent। <b>Serializable</b> schedule = concurrent पर नतीजा serial जैसा।<br>
🧠 <b>Recovery:</b> <b>Log</b> (हर बदलाव का रिकॉर्ड) + <b>Checkpoint</b> (recovery का समय घटाए)। तकनीक: deferred update, immediate update।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Checkpoint बैकअप नहीं लेता — सिर्फ़ recovery तेज़ करता है। Deadlock यहाँ भी हो सकता है (दो transactions एक-दूसरे के lock का इंतज़ार)।</div>
</div>

<div class="blk"><h3>🌲 Indexing + File Organization</h3>
<div class="tk">🧠 <b>Index</b> = किताब की अनुक्रमणिका — खोज तेज़ करता है (पूरा table scan नहीं)। पर index अपने आप में जगह लेता है और insert/update धीमा करता है।<br>
🧠 <b>प्रकार:</b> Primary index (ordered key पर), Secondary index (non-key पर), Clustered (डेटा भौतिक रूप से sorted — सिर्फ़ एक), Dense (हर record) vs Sparse (कुछ)।<br>
🧠 <b>B+ Tree</b> DBMS में सबसे प्रचलित — कम ऊँचाई, ज़्यादा children, इसलिए <b>कम disk access</b> (यही सबसे बड़ा फ़ायदा)। Hashing = सीधे बराबरी की खोज तेज़।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> एक table में <b>clustered index सिर्फ़ एक</b> हो सकता है (क्योंकि भौतिक क्रम एक ही होगा), non-clustered कई।</div>
</div>

<div class="blk"><h3>👁️ Views & Materialized Views</h3>
<p><b>View</b> = एक <b>virtual table</b> — इसकी definition (query) स्टोर होती है, <b>डेटा नहीं</b>। जब भी view को छुओ, अंदर की query दोबारा चलती है।<br>
<b>Materialized View</b> = इसका <b>नतीजा असल में डिस्क पर स्टोर</b> होता है — इसलिए तेज़, पर <b>बासी</b> हो सकता है, इसीलिए इसे समय-समय पर <b>REFRESH</b> करना पड़ता है।</p>
<div class="tr">⚠️ <b>असली Paper-II Q44:</b> "कौन-सा database object <b>physically exist नहीं करता</b>?" → <b>View</b>।<br>
⚠️ <b>Q29:</b> "materialized view को maintain कैसे करते हैं?" → <b>REFRESH</b> करके।</div>
</div>

<div class="blk"><h3>🗃️ NoSQL — चार क़िस्में</h3>
<div style="overflow-x:auto"><table>
<tr><th>क़िस्म</th><th>मिसाल</th><th>कैसा दिखता है</th></tr>
<tr><td><b>Key-Value</b></td><td>Redis, DynamoDB</td><td>चाबी → कीमत</td></tr>
<tr><td><b>Document</b></td><td>MongoDB, CouchDB</td><td>JSON दस्तावेज़</td></tr>
<tr><td><b>Column-family</b></td><td>Cassandra, HBase</td><td>कॉलम के गुच्छे</td></tr>
<tr><td><b>Graph</b></td><td>Neo4j</td><td>नोड + एज</td></tr>
</table></div>
<div class="tr">⚠️ <b>असली Paper-II Q67:</b> "कौन-सा NoSQL का प्रकार <b>नहीं</b> है?" → विकल्प में अक्सर <b>"Relational"/"Hierarchical"/"Tabular"</b> घुसा देते हैं। चार असली प्रकार ऊपर वाले ही हैं।</div>
<div class="tk">🧠 <b>ट्रिक — "की-डॉ-कॉ-ग्रा"</b>: <b>Key</b>-value, <b>Doc</b>ument, <b>Col</b>umn, <b>Gra</b>ph।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🔑 minimal super key = <b>Candidate key</b><br>
🚫 PK में NULL नहीं; FK में NULL चलेगी<br>
▭ Entity=आयत, ◇ Relationship=हीरा, ⬭ Attribute=दीर्घवृत्त<br>
═ दोहरी रेखा = <b>Total participation</b>; ▭▭ दोहरा आयत = <b>Weak entity</b><br>
🗑️ DELETE=rows जाएँ, schema रहे | DROP=टेबल ही जाए | TRUNCATE=सब rows, no rollback<br>
➗ Unary = σ Select, π Project, ρ Rename | Basic 5 = σ π ∪ − ×<br>
🧬 2NF=partial हटाओ | 3NF=transitive हटाओ | BCNF=हर LHS superkey<br>
👁️ View = physically exist नहीं करता | Materialized view = REFRESH<br>
💳 ACID = Atomicity, Consistency, Isolation, Durability<br>
🗃️ NoSQL = Key-value, Document, Column, Graph
</div>
</div>
`;

/* ==================== FLASHCARDS (10 प्रकार) ==================== */
CARDS.p2db = [
  ['[रिकॉल] Minimal super key को क्या कहते हैं?', 'Candidate Key।', 'सुपर ⊇ कैंडिडेट ⊇ प्राइमरी'],
  ['[रिकॉल] ER diagram में weak entity किससे दर्शाते हैं?', 'दोहरे आयत (double rectangle) से।', 'दोहरा = कमज़ोर'],
  ['[रिवर्स रिकॉल] "यह database object physically exist नहीं करता, सिर्फ़ query स्टोर रहती है" — कौन?', 'View (virtual table)।', 'view = आभासी'],
  ['[रिवर्स रिकॉल] "σ, π, ρ" — ये तीनों किस श्रेणी के operators हैं?', 'Unary operators (एक ही relation पर चलते हैं)।', 'SPR अकेला'],
  ['[रिक्त स्थान] Relational algebra के ______ basic operations हैं: σ, π, ∪, −, ×', '5 (पाँच)। Join/Intersection/Division derived हैं।', 'पाँच जड़ें'],
  ['[रिक्त स्थान] हर non-key attribute primary key पर fully functionally dependent हो — यह ______ है।', '2NF (Second Normal Form)।', 'पूरी चाबी'],
  ['[कथन आधारित] कथन: Primary key में NULL डाल सकते हैं। सही या ग़लत?', 'ग़लत। PK में NULL कभी नहीं। हाँ, Foreign key में NULL चल जाती है।', 'PK सख़्त, FK नरम'],
  ['[कथन आधारित] कथन: DELETE FROM EMPLOYEE; चलाने पर relation भी मिट जाता है।', 'ग़लत। सारे tuples हटते हैं पर relation/schema बना रहता है। schema मिटाने को DROP चाहिए।', 'DELETE ≠ DROP'],
  ['[तुलना] DELETE बनाम TRUNCATE — दो मुख्य फ़र्क़?', '(1) DELETE=DML, rollback हो सकता है; TRUNCATE=DDL, rollback नहीं। (2) DELETE में WHERE लग सकती है, TRUNCATE में नहीं।', 'DELETE माफ़ी देता है'],
  ['[तुलना] View बनाम Materialized View?', 'View सिर्फ़ query स्टोर करता है (डेटा नहीं), हर बार दोबारा चलती है। Materialized view नतीजा डिस्क पर रखता है — तेज़ पर बासी, इसलिए REFRESH चाहिए।', 'असली बनाम आभासी'],
  ['[तुलना] Physical बनाम Logical data independence — कौन कठिन?', 'Logical कठिन है। Physical (नीचे की storage बदलना) आसान है।', 'Physical आसान, Logical कठिन'],
  ['[कालक्रम] Normalization का सही क्रम लिखो।', '1NF → 2NF → 3NF → BCNF → 4NF → 5NF।', 'चढ़ती सीढ़ी'],
  ['[कालक्रम] ANSI/SPARC के तीन स्तर ऊपर से नीचे?', 'External (View) → Conceptual (Logical) → Internal (Physical)।', 'ऊपर view, नीचे disk'],
  ['[मैच] मिलाओ: (a) ▭ (b) ◇ (c) ⬭ (d) ═', '(a) Entity, (b) Relationship, (c) Attribute, (d) Total participation।', 'आ-हे-दी'],
  ['[मैच] मिलाओ: (a) CREATE (b) SELECT (c) GRANT (d) COMMIT', '(a) DDL, (b) DML, (c) DCL, (d) TCL।', 'CAD-T = DDL'],
  ['[मैच] मिलाओ: (a) Redis (b) MongoDB (c) Cassandra (d) Neo4j', '(a) Key-Value, (b) Document, (c) Column-family, (d) Graph।', 'की-डॉ-कॉ-ग्रा'],
  ['[Code Output] SELECT COUNT(*), COUNT(mgr) FROM EMPLOYEE; — 7 rows हैं, 1 का mgr NULL है। नतीजा?', '7 और 6। COUNT(*) हर row गिनता है; COUNT(col) NULL छोड़ देता है।', 'तारा सबको गिने'],
  ['[Code Output] SELECT dept, COUNT(*) FROM EMPLOYEE GROUP BY dept; — क्या लौटेगा?', 'हर dept के लिए एक row, साथ में उस group की गिनती। Aggregate पूरे group पर चलता है, एक tuple पर नहीं।', 'group = एक row'],
  ['[True/False] हर super key एक candidate key होती है।', 'False। उल्टा सही है — हर candidate key एक super key है, पर हर super key minimal नहीं होती।', 'दिशा उल्टी मत कर'],
  ['[True/False] 3NF को practical design के लिए पर्याप्त माना जाता है।', 'True। इसीलिए ज़्यादातर डिज़ाइन 3NF तक ही जाते हैं।', '3 पर रुको'],
  ['[True/False] Checkpoint पूरा डेटाबेस बैकअप लेता है।', 'False। Checkpoint recovery का समय घटाता है — बैकअप नहीं लेता।', 'checkpoint = शॉर्टकट'],
  ['[ट्रैप कार्ड] ER diagram में double line किसे दर्शाती है — weak entity या total participation?', 'Total participation! Weak entity = double RECTANGLE। दोनों में "double" है, यहीं फँसाते हैं।', 'रेखा=participation, आयत=weak'],
  ['[ट्रैप कार्ड] Union और Cartesian product — क्या ये unary operators हैं?', 'नहीं! दोनों BINARY हैं। Unary सिर्फ़ σ (Select), π (Project), ρ (Rename)।', 'जोड़ी वाले binary'],
  ['[ट्रैप कार्ड] अगर primary key single attribute है और table 1NF में है — तो क्या वो 2NF में है?', 'हाँ, अपने आप। Partial dependency सिर्फ़ composite key के साथ हो सकती है।', 'अकेली key = कोई partial नहीं']
];

/* ==================== MCQs ==================== */
/* schema: q, o[4], a, e, trap, d (1=आसान 2=मध्यम 3=कठिन), tag, pyq */
QB.p2db = [
  { q: 'रिलेशनल डेटाबेस में minimal super key को किस नाम से जाना जाता है?', o: ['Primary key', 'Candidate key', 'Foreign key', 'Alternate key'], a: 1, e: 'Minimal super key की परिभाषा ही Candidate key है — एक भी attribute हटाओ तो uniqueness टूट जाए। Primary key इन्हीं candidate keys में से चुनी हुई एक होती है।', trap: 'Primary key चुन लेना सबसे आम ग़लती — वो चुनाव है, परिभाषा नहीं।', d: 2, tag: 'Keys', pyq: 'Paper-II Q40 — हूबहू' },
  { q: 'SQL कमांड DELETE FROM EMPLOYEE; चलाने के बाद EMPLOYEE relation की स्थिति क्या होगी (मान लो उसमें 7 tuples थे)?', o: ['Relation पूरी तरह मिट जाएगा', 'सारे tuples हट जाएँगे पर relation/schema बना रहेगा', 'सिर्फ़ पहला tuple हटेगा', 'Error आएगा क्योंकि WHERE नहीं है'], a: 1, e: 'DELETE एक DML कमांड है — यह सिर्फ़ tuples हटाती है। Relation का ढाँचा (schema) ज़िंदा रहता है, इसलिए बाद में भी INSERT किया जा सकता है। Schema मिटाने के लिए DROP TABLE चाहिए।', trap: 'DELETE और DROP को एक समझ लेना। DROP schema समेत टेबल उड़ा देता है।', d: 2, tag: 'SQL/DML', pyq: 'Paper-II Q32 — हूबहू' },
  { q: 'Relational Algebra के संदर्भ में निम्न में से कौन-से unary operators हैं? 1. Select 2. Project 3. Union 4. Cartesian Product', o: ['केवल 1 और 2', 'केवल 1, 2 और 3', 'केवल 3 और 4', 'सभी चारों'], a: 0, e: 'Unary operators एक ही relation पर चलते हैं — Select (σ), Project (π) और Rename (ρ)। Union और Cartesian Product दो relations लेते हैं, इसलिए binary हैं।', trap: 'Union को unary मान लेना — नाम में "uni" सुनाई देता है पर वो binary है।', d: 2, tag: 'Relational Algebra', pyq: 'Paper-II Q73 — हूबहू' },
  { q: 'निम्न में से कौन-सा database object भौतिक रूप से (physically) मौजूद नहीं होता?', o: ['Table', 'Index', 'View', 'Materialized View'], a: 2, e: 'View एक virtual table है — सिर्फ़ उसकी परिभाषा (query) स्टोर होती है, डेटा नहीं। हर बार view को access करने पर underlying query दोबारा चलती है।', trap: 'Materialized view चुन लेना — वो तो physically स्टोर होता ही है, यही उसकी ख़ासियत है।', d: 2, tag: 'Views', pyq: 'Paper-II Q44 — हूबहू' },
  { q: 'एक relation में हर non-key attribute primary key पर fully functionally dependent है। यह relation किस normal form में है?', o: ['1NF', '2NF', '3NF', 'BCNF'], a: 1, e: '"Fully functionally dependent on the primary key" यानी कोई partial dependency नहीं — यही 2NF की परिभाषा है। 3NF में इससे आगे transitive dependency भी हटानी पड़ती है।', trap: '3NF लिख आना। याद रख — 2NF=partial हटाओ, 3NF=transitive हटाओ।', d: 2, tag: 'Normalization', pyq: 'Paper-II Q79 — हूबहू' },
  { q: 'ER diagram में दोहरी रेखा (double line) क्या दर्शाती है?', o: ['Weak entity', 'Total participation', 'Multivalued attribute', 'Identifying relationship'], a: 1, e: 'दोहरी रेखा total participation दिखाती है — यानी entity set का हर सदस्य उस relationship में भाग लेता ही है। Weak entity दोहरे आयत (double rectangle) से दिखती है।', trap: 'दोनों में "double" शब्द है — रेखा = participation, आयत = weak entity। यही घुमाकर पूछा जाता है।', d: 2, tag: 'ER Model', pyq: 'LT Grade / KVS में बार-बार' },
  { q: 'निम्न में से कौन-सा NoSQL डेटाबेस का प्रकार नहीं है?', o: ['Key-Value', 'Document', 'Relational', 'Graph'], a: 2, e: 'NoSQL के चार मुख्य प्रकार हैं — Key-Value (Redis), Document (MongoDB), Column-family (Cassandra), और Graph (Neo4j)। Relational तो ठीक इसका उल्टा है — वही SQL/RDBMS है।', trap: 'Column-family को अनजाना समझकर उसे "ग़लत" चुन लेना।', d: 1, tag: 'NoSQL', pyq: 'Paper-II Q67 — हूबहू' },
  { q: 'EMPLOYEE में 7 tuples हैं, जिनमें से 1 का mgr कॉलम NULL है। SELECT COUNT(*), COUNT(mgr) FROM EMPLOYEE; का नतीजा?', o: ['7, 7', '7, 6', '6, 6', '6, 7'], a: 1, e: 'COUNT(*) हर row गिनता है चाहे उसमें NULL हो — इसलिए 7। COUNT(column) उस column के NULL वाले rows छोड़ देता है — इसलिए 6।', trap: 'दोनों को बराबर मान लेना। NULL की वजह से ही ये सवाल बनता है।', d: 3, tag: 'SQL/Aggregate', pyq: 'Paper-II Q38 का विस्तार' },
  { q: 'निम्न में से कौन-सा युग्म सही सुमेलित नहीं है?', o: ['CREATE — DDL', 'UPDATE — DML', 'GRANT — DCL', 'ROLLBACK — DDL'], a: 3, e: 'ROLLBACK एक TCL (Transaction Control Language) कमांड है, DDL नहीं। TCL में COMMIT, ROLLBACK और SAVEPOINT आते हैं।', trap: 'ROLLBACK को DDL या DML में डाल देना।', d: 2, tag: 'SQL/Commands', pyq: 'LT Grade में सामान्य' },
  { q: 'TRUNCATE और DELETE के बीच सही अंतर कौन-सा है?', o: ['दोनों DML हैं और दोनों rollback हो सकते हैं', 'TRUNCATE DDL है और सामान्यतः rollback नहीं होता, जबकि DELETE DML है और rollback हो सकता है', 'DELETE पूरी टेबल का ढाँचा हटा देता है', 'TRUNCATE में WHERE clause लगाई जा सकती है'], a: 1, e: 'TRUNCATE = DDL, सारी rows एक साथ, WHERE नहीं लगती, सामान्यतः rollback नहीं। DELETE = DML, WHERE लग सकती है, rollback हो सकता है।', trap: 'TRUNCATE में WHERE लगा देना — वो होता ही नहीं।', d: 2, tag: 'SQL/DDL-DML', pyq: 'हर practice book में' },
  { q: 'Relational Algebra के basic (primitive) operations कितने हैं?', o: ['3', '5', '7', '8'], a: 1, e: 'पाँच — Select (σ), Project (π), Union (∪), Set Difference (−), और Cartesian Product (×)। Join, Intersection और Division इन्हीं से derive होते हैं।', trap: 'Join को basic मान लेना — वो derived है (σ और × से बनता है)।', d: 3, tag: 'Relational Algebra', pyq: 'Paper-II Q80 से मिलता-जुलता' },
  { q: 'ACID में "D" किसका रखवाला है और वह किससे लागू होता है?', o: ['Durability — Recovery Manager व Log द्वारा', 'Distribution — Query Optimizer द्वारा', 'Durability — Query Processor द्वारा', 'Dependency — Integrity Checker द्वारा'], a: 0, e: 'Durability का मतलब — COMMIT हो जाने के बाद बदलाव पक्का, बिजली जाए तब भी। इसे Recovery Manager, log और checkpoint मिलकर लागू करते हैं।', trap: 'Isolation और Durability के रखवाले उलट देना — Isolation को concurrency control (locks) संभालता है।', d: 3, tag: 'Transactions', pyq: 'Silberschatz आधारित' },
  { q: 'एक relation में attributes V, W, X, Y, Z हैं और VWX एक candidate key है। निम्न में से कौन-सा super key नहीं है?', o: ['VWX', 'VWXY', 'VWXYZ', 'WXY'], a: 3, e: 'Candidate key VWX है, इसलिए VWX और उसका कोई भी superset (VWXY, VWXYZ) super key होगा। WXY में V ही नहीं है, इसलिए वह tuple को uniquely पहचान नहीं सकता।', trap: 'Superset वाली बात भूल जाना — key में extra attribute जोड़ने से वो super key ही रहती है, टूटती नहीं।', d: 3, tag: 'Keys', pyq: 'Paper-II Q46 — हूबहू पैटर्न' },
  { q: 'Materialized view को up-to-date रखने के लिए क्या किया जाता है?', o: ['उसे हर बार DROP करके दोबारा CREATE करना पड़ता है', 'REFRESH किया जाता है', 'कुछ नहीं — वह अपने आप हमेशा ताज़ा रहता है', 'सिर्फ़ COMMIT करना होता है'], a: 1, e: 'Materialized view का नतीजा डिस्क पर स्टोर रहता है, इसलिए base table बदलने पर वह बासी हो जाता है। उसे REFRESH (on-commit या on-demand) करके ताज़ा किया जाता है।', trap: '"अपने आप ताज़ा रहता है" चुन लेना — वो तो सामान्य view करता है, materialized नहीं।', d: 3, tag: 'Views', pyq: 'Paper-II Q29 — हूबहू' },
  { q: 'ER diagram में entity, relationship और attribute क्रमशः किन आकृतियों से दर्शाए जाते हैं?', o: ['हीरा, आयत, दीर्घवृत्त', 'आयत, हीरा, दीर्घवृत्त', 'दीर्घवृत्त, आयत, हीरा', 'आयत, दीर्घवृत्त, हीरा'], a: 1, e: 'आयत (Rectangle) = Entity, हीरा (Diamond) = Relationship, दीर्घवृत्त (Ellipse) = Attribute। Key attribute को रेखांकित किया जाता है।', trap: 'हीरा और आयत उलट देना — याद रख "आ-हे-दी"।', d: 1, tag: 'ER Model', pyq: '1000 MCQs / KVS में बार-बार' },
  { q: 'निम्न में से कौन-सा कथन Foreign key के बारे में सही है?', o: ['Foreign key में NULL कभी नहीं हो सकती', 'Foreign key दूसरी table की primary key की ओर इशारा करती है और उसमें NULL हो सकती है', 'हर table में foreign key होना अनिवार्य है', 'Foreign key हमेशा unique होती है'], a: 1, e: 'Foreign key referential integrity लागू करती है — वह किसी दूसरी (या उसी) table की primary key को refer करती है। उसमें NULL हो सकती है (जैसे जिस employee का कोई manager नहीं) और वह unique होना ज़रूरी नहीं।', trap: 'FK पर primary key वाले नियम (NOT NULL + UNIQUE) थोप देना।', d: 2, tag: 'Keys', pyq: 'Paper-II Q77 पैटर्न' },
  { q: 'यदि किसी relation की primary key एक ही attribute की है और relation 1NF में है, तो वह —', o: ['निश्चित रूप से 2NF में भी है', '2NF में नहीं हो सकता', 'BCNF में ज़रूर होगा', 'इसका normal form से कोई संबंध नहीं'], a: 0, e: 'Partial dependency तभी बन सकती है जब key composite हो (यानी non-key attribute key के एक हिस्से पर निर्भर हो)। Single-attribute key के साथ "हिस्सा" होता ही नहीं, इसलिए 1NF relation अपने आप 2NF में आ जाता है।', trap: 'यह सोचना कि 2NF के लिए अलग से कुछ करना ही पड़ेगा।', d: 3, tag: 'Normalization', pyq: 'गहरी समझ वाला सवाल' },
  { q: 'DBMS में checkpoint का मुख्य उद्देश्य क्या है?', o: ['पूरे डेटाबेस का बैकअप लेना', 'Recovery में लगने वाला समय घटाना', 'सभी users को logout करना', 'Index दोबारा बनाना'], a: 1, e: 'Checkpoint log में एक निशान लगाता है — उससे पहले के सारे committed बदलाव डिस्क पर लिखे जा चुके होते हैं। इससे crash के बाद recovery manager को पूरा log नहीं पढ़ना पड़ता, सिर्फ़ checkpoint के बाद वाला हिस्सा।', trap: 'Checkpoint को backup समझ लेना — दोनों बिल्कुल अलग चीज़ें हैं।', d: 3, tag: 'Recovery', pyq: 'LT Grade Q98 आधारित' },
  { q: 'Tuple relational calculus में P1 ⇒ P2 किसके समतुल्य है?', o: ['P1 ∧ P2', '¬P1 ∨ P2', 'P1 ∨ ¬P2', '¬P1 ∧ ¬P2'], a: 1, e: 'यह शुद्ध logic है — "P1 implies P2" का मतलब है "या तो P1 झूठा हो, या P2 सच्चा हो", यानी ¬P1 ∨ P2।', trap: 'P1 ∨ ¬P2 चुन लेना — negation ग़लत जगह लगा देना।', d: 3, tag: 'Relational Calculus', pyq: 'Paper-II Q36 — हूबहू' },
  { q: 'ANSI/SPARC आर्किटेक्चर में कौन-सी data independence हासिल करना अधिक कठिन है और क्यों?', o: ['Physical — क्योंकि disk बदलना महँगा है', 'Logical — क्योंकि conceptual schema बदलने पर सभी external views/applications प्रभावित होते हैं', 'दोनों बराबर कठिन हैं', 'कोई भी कठिन नहीं'], a: 1, e: 'Physical independence में सिर्फ़ storage/index बदलता है, ऊपर कुछ नहीं टूटता। Logical independence में table का ढाँचा बदलता है, और उस पर टिके सारे views व applications को बचाए रखना पड़ता है — इसलिए कठिन।', trap: '"Physical कठिन" चुन लेना। मंत्र — Physical आसान, Logical कठिन।', d: 3, tag: 'Architecture', pyq: 'वैचारिक — बार-बार' }
];
