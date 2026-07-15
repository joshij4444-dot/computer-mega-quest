/*! MODULE: data/paper2/u-sad.js — Paper-II Unit: System Analysis & Design (PYQ ≈ 8/100) */

CH.push({ id: 'p2sad', ic: '📐', t: 'System Analysis', s: 'SDLC • DFD • Testing • Models', xp: 120, p: 2 });

LESSON.p2sad = `
<div class="blk"><h3>📐 System Analysis & Design (SAD)</h3>
<p><b>सरल भाषा में:</b> कोई भी बड़ा software सीधे नहीं बन जाता — जैसे मकान बनाने से पहले नक़्शा, नींव, फिर दीवारें। SAD वही अनुशासन है: <b>पहले समझो क्या चाहिए, फिर design करो, फिर बनाओ, फिर जाँचो</b>।</p>
<div class="tk">💡 <b>यह विषय बना ही क्यों?</b> बिना योजना के बना software देर से, महँगा और बग्गी बनता है। एक सर्वे कहता है — <b>ग़लती जितनी देर से पकड़ो, ठीक करना उतना महँगा</b>। requirement में पकड़ी गई ग़लती ₹1 की, production में वही ₹100 की। इसीलिए क्रमबद्ध प्रक्रिया (SDLC) चाहिए।</div>
</div>

<div class="blk"><h3>🔄 SDLC — Software Development Life Cycle</h3>
<div class="viz">
<svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
 ${['Planning', 'Analysis', 'Design', 'Coding', 'Testing', 'Maintenance'].map((s, i) =>
    `<rect x="${4 + i * 66}" y="18" width="60" height="26" rx="6" fill="#22d3ee" opacity="${0.14 + i * 0.03}" stroke="#22d3ee"/>
     <text x="${34 + i * 66}" y="35" text-anchor="middle" fill="#eef3fa" font-size="8" font-weight="800">${s}</text>` +
    (i < 5 ? `<path d="M${64 + i * 66} 31 L${70 + i * 66} 31" stroke="#8298b6" stroke-width="1.2"/>` : '')).join('')}
</svg>
</div>
<div class="tk">🧠 <b>पहला क़दम = System Study / Preliminary Investigation</b> (समस्या समझना)। फिर requirement gathering, design, coding, testing, maintenance।<br>
<b>Fact-gathering तकनीक:</b> Interview, Questionnaire, Observation, Record review।</div>
<div class="tr">⚠️ <b>PYQ (Q26):</b> "system study project का पहला क़दम?" → <b>problem/requirement को पहचानना (preliminary investigation)</b>।<br>
⚠️ <b>PYQ (Q31):</b> ranking scale questions respondents से चीज़ों को <b>क्रम/वरीयता</b> में रखवाते हैं।</div>
</div>

<div class="blk"><h3>🏗️ Process Models — कब कौन-सा</h3>
<div style="overflow-x:auto"><table>
<tr><th>Model</th><th>ख़ासियत</th><th>कब</th></tr>
<tr><td><b>Waterfall</b></td><td>एक-के-बाद-एक, पीछे नहीं</td><td>requirement साफ़ व स्थिर हों</td></tr>
<tr><td><b>Prototype</b></td><td>पहले नमूना बनाओ, feedback लो</td><td>requirement धुँधली हों</td></tr>
<tr><td><b>Spiral</b></td><td>चक्रों में + <b>risk analysis</b></td><td>बड़े, जोखिम भरे project</td></tr>
<tr><td><b>Agile / Iterative</b></td><td>छोटे-छोटे टुकड़ों में, लगातार delivery</td><td>बदलती requirement</td></tr>
<tr><td><b>V-Model</b></td><td>हर विकास-चरण के सामने एक testing चरण</td><td>verification ज़रूरी हो</td></tr>
</table></div>
<div class="tk">🧠 <b>Spiral का दिल = Risk Analysis</b> (यही उसे बाक़ियों से अलग करता है)। Waterfall का दोष = पीछे लौटना कठिन।</div>
<div class="tr">⚠️ <b>PYQ (Q48):</b> "कौन-सा software process model <b>नहीं</b> है?" → कोई बाहरी नाम (जैसे "Cascade model" — असली Waterfall है, "Cascade" नहीं)।</div>
</div>

<div class="blk"><h3>🔍 Feasibility Study + Requirement Analysis</h3>
<div class="tk">🧠 <b>Feasibility के 4 प्रकार — "TELO":</b> <b>Technical</b> (तकनीक है?), <b>Economic</b> (पैसा वसूल? — cost-benefit), <b>Legal</b> (कानूनी अड़चन?), <b>Operational</b> (लोग इस्तेमाल करेंगे?)। Schedule feasibility भी जोड़ी जाती है।<br>
🧠 <b>SRS</b> (Software Requirement Specification) = सारी requirements का लिखित दस्तावेज़ — developer और client के बीच "अनुबंध"।<br>
🧠 <b>Functional</b> requirement (system क्या करे) बनाम <b>Non-functional</b> (कैसा हो — तेज़, सुरक्षित, भरोसेमंद)।</div>
</div>

<div class="blk"><h3>🔵 DFD — Data Flow Diagram</h3>
<div style="overflow-x:auto"><table>
<tr><th>चिह्न</th><th>मतलब</th></tr>
<tr><td>◯ / गोल-आयत</td><td><b>Process</b> (data बदले)</td></tr>
<tr><td>→ तीर</td><td><b>Data Flow</b></td></tr>
<tr><td>▭ (खुला आयत)</td><td><b>Data Store</b> (रखा data)</td></tr>
<tr><td>▢ वर्ग</td><td><b>External Entity</b> (source/sink)</td></tr>
</table></div>
<div class="tk">🧠 <b>Level 0 = Context Diagram</b> — पूरा system एक ही गोले में, बाहरी entities के साथ। फिर Level 1, 2... में तोड़ते जाते हैं।</div>
<div class="tr">⚠️ <b>PYQ (Q93) — Black Hole:</b> ऐसा process जिसमें data <b>आए पर निकले नहीं</b> (input है, output नहीं) — यह DFD की ग़लती है। उल्टा "Miracle/Grey hole" = बिना input के output निकले। <br>
⚠️ <b>PYQ (Q72):</b> decision table का left-lower quadrant = <b>Condition entries</b> (ऊपर conditions, नीचे actions; बाएँ stub, दाएँ entries)।</div>
</div>

<div class="blk"><h3>🧪 Testing — स्तर और प्रकार</h3>
<div class="tk">🧠 <b>Testing के स्तर (नीचे से ऊपर क्रम — पक्का सवाल):</b><br>
<b>Unit</b> (एक module) → <b>Integration</b> (modules जोड़कर) → <b>System</b> (पूरा system) → <b>Acceptance</b> (ग्राहक की मंज़ूरी)।</div>
<div style="overflow-x:auto"><table>
<tr><th>Black Box</th><th>White Box</th></tr>
<tr><td>अंदर की कोडिंग नहीं देखते</td><td>अंदर का code देखते हैं</td></tr>
<tr><td>input→output जाँचो</td><td>हर रास्ता/loop जाँचो</td></tr>
<tr><td>tester = user जैसा</td><td>tester = programmer जैसा</td></tr>
</table></div>
<div class="tr">⚠️ <b>PYQ (Q49):</b> एक ही module की गहन जाँच = <b>Unit testing</b>। <b>PYQ (Q71):</b> testing स्तरों का क्रम = Unit → Integration → System → Acceptance।<br>
⚠️ <b>PYQ (Q74):</b> software complexity का माप = <b>Cyclomatic Complexity</b> (McCabe) — control-flow के स्वतंत्र रास्तों की गिनती।</div>
</div>

<div class="blk"><h3>💰 Cost Estimation + Maintenance + CASE</h3>
<div class="tk">🧠 <b>Estimation:</b> <b>LOC</b> (Lines of Code — सरल size माप), <b>Function Point</b> (कार्यक्षमता आधारित), <b>COCOMO</b> (Boehm — Constructive Cost Model; Organic/Semi-detached/Embedded तीन प्रकार)।<br>
🧠 <b>Maintenance के 4 प्रकार:</b> <b>Corrective</b> (bug ठीक), <b>Adaptive</b> (नए माहौल में ढालना), <b>Perfective</b> (सुधार/नई सुविधा), <b>Preventive</b> (आगे की दिक़्क़त रोकना)। Maintenance अक्सर सबसे लंबा व महँगा चरण।<br>
🧠 <b>CASE tools</b> (Computer-Aided Software Engineering) = SAD के काम स्वचालित (diagram, code gen)।</div>
</div>

<div class="blk"><h3>📐 ER & UML Diagrams</h3>
<div class="tk">🧠 <b>ER Diagram</b> = data का model (Entity=आयत, Relationship=हीरा, Attribute=दीर्घवृत्त) — यही आगे tables बनते हैं।<br>
🧠 <b>UML</b> (Unified Modeling Language) = OOP design के 9+ diagram। दो श्रेणियाँ:<br>
• <b>Structural</b> (ढाँचा): Class, Object, Component, Deployment।<br>
• <b>Behavioural</b> (व्यवहार): <b>Use Case</b> (actor + काम), Sequence, Activity, State।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Use Case diagram में "actor" छड़ी-आकृति (stick figure) से। Class diagram = structural, Use Case = behavioural।</div>
</div>

<div class="blk"><h3>📊 अन्य ज़रूरी औज़ार</h3>
<div class="tk">🧠 <b>Cohesion बनाम Coupling (अच्छे design का नियम):</b><br>
<b>Cohesion ऊँची हो</b> (एक module एक ही काम करे — अच्छा)।<br>
<b>Coupling नीची हो</b> (modules एक-दूसरे पर कम निर्भर — अच्छा)।<br>
<i>मंत्र: "High Cohesion, Low Coupling।"</i></div>
<div class="tk">🧠 <b>LOC</b> (Lines of Code) = सबसे सरल size माप (comments/blank छोड़कर)। <b>Function Point</b> = कार्यक्षमता आधारित माप। <b>Gantt chart</b> = समय-सारणी। <b>PERT/CPM</b> = project scheduling।</div>
<div class="tr">⚠️ <b>PYQ (Q72):</b> decision table चार खंडों में — Condition Stub (ऊपर-बाएँ), Condition Entry (ऊपर-दाएँ), Action Stub (नीचे-बाएँ), Action Entry (नीचे-दाएँ)।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🔄 SDLC: Planning→Analysis→Design→Coding→Testing→Maintenance<br>
👣 पहला क़दम = <b>Preliminary Investigation / System Study</b><br>
🏗️ <b>Spiral = Risk Analysis</b> | Waterfall = पीछे नहीं लौट सकते | Prototype = धुँधली requirement<br>
🔵 DFD: गोल=Process, →=Flow, खुला आयत=Data Store, वर्ग=External Entity<br>
🕳️ <b>Black Hole</b> = input आए output न निकले (DFD ग़लती)<br>
🧪 Testing क्रम: <b>Unit → Integration → System → Acceptance</b><br>
🔬 एक module गहन जाँच = <b>Unit testing</b> | Black box (बाहर) vs White box (अंदर)<br>
📏 Software complexity = <b>Cyclomatic Complexity</b> | size = LOC<br>
🧩 अच्छा design = <b>High Cohesion, Low Coupling</b><br>
📋 Decision table: 4 quadrants (condition ऊपर, action नीचे; stub बाएँ, entry दाएँ)
</div>
</div>
`;

CARDS.p2sad = [
  ['[रिकॉल] System study project का पहला क़दम क्या होता है?', 'Preliminary investigation / problem को पहचानना (System Study)।', 'पहले समझो'],
  ['[रिकॉल] एक ही module की गहन जाँच किस testing में होती है?', 'Unit testing।', 'इकाई जाँच'],
  ['[रिकॉल] Software complexity मापने का प्रमुख तरीक़ा कौन-सा है?', 'Cyclomatic Complexity (McCabe) — control flow के स्वतंत्र रास्तों की गिनती।', 'रास्ते गिनो'],
  ['[रिवर्स रिकॉल] "जिस process में data आए पर निकले नहीं" — DFD में इसे क्या कहते हैं?', 'Black Hole।', 'निगल गया'],
  ['[रिवर्स रिकॉल] "जो process model risk analysis पर ज़ोर देता है" — कौन-सा?', 'Spiral model।', 'चक्र में जोखिम'],
  ['[रिक्त स्थान] Testing के चार स्तर क्रम में: ______ → Integration → ______ → Acceptance।', 'Unit; System', 'इकाई से स्वीकृति'],
  ['[रिक्त स्थान] अच्छे design में cohesion ______ और coupling ______ होनी चाहिए।', 'ऊँची (high); नीची (low)', 'हाई कोहेशन लो कपलिंग'],
  ['[कथन आधारित] कथन: Waterfall model में किसी भी चरण से आसानी से पीछे लौटा जा सकता है।', 'ग़लत। Waterfall में पीछे लौटना कठिन है — यही उसका बड़ा दोष है। इसीलिए बदलती requirement के लिए Agile/Prototype बेहतर।', 'झरना नीचे ही बहे'],
  ['[कथन आधारित] कथन: White box testing में tester अंदर के code को नहीं देखता।', 'ग़लत। White box में code देखते हैं (हर रास्ता जाँचते हैं)। Black box में code नहीं देखते।', 'सफ़ेद = अंदर दिखे'],
  ['[मैच] मिलाओ DFD चिह्न: (a) गोल (b) तीर (c) खुला आयत (d) वर्ग', '(a) Process, (b) Data Flow, (c) Data Store, (d) External Entity।', 'चार चिह्न'],
  ['[मैच] मिलाओ model: (a) Waterfall (b) Prototype (c) Spiral (d) Agile', '(a) क्रमिक, पीछे नहीं; (b) नमूना पहले; (c) risk analysis; (d) छोटे iteration।', 'चार मॉडल'],
  ['[मैच] मिलाओ testing: (a) Unit (b) Integration (c) System (d) Acceptance', '(a) एक module, (b) modules जोड़कर, (c) पूरा system, (d) ग्राहक मंज़ूरी।', 'चार स्तर'],
  ['[तुलना] Black box और White box testing में फ़र्क़?', 'Black box = अंदर का code नहीं देखते, सिर्फ़ input→output जाँचते हैं (user नज़रिया)। White box = अंदर का code देखकर हर path/loop जाँचते हैं (programmer नज़रिया)।', 'बाहर बनाम अंदर'],
  ['[तुलना] Cohesion और Coupling में फ़र्क़, और अच्छा design क्या चाहता है?', 'Cohesion = एक module अपने अंदर कितना एकजुट (एक ही काम)। Coupling = modules आपस में कितने निर्भर। अच्छा design: High Cohesion, Low Coupling।', 'अंदर जुड़े, बाहर आज़ाद'],
  ['[तुलना] Verification और Validation में फ़र्क़?', 'Verification = "क्या हम इसे सही बना रहे हैं?" (नियम/spec के अनुसार)। Validation = "क्या हमने सही चीज़ बनाई?" (ग्राहक की असली ज़रूरत)।', 'सही से बना बनाम सही चीज़'],
  ['[कालक्रम] SDLC के मुख्य चरण क्रम में लिखो।', 'Planning → Analysis → Design → Coding → Testing → Maintenance।', 'योजना से रखरखाव'],
  ['[कालक्रम] Testing के चार स्तर सही क्रम में?', 'Unit → Integration → System → Acceptance।', 'नीचे से ऊपर'],
  ['[Code Output] एक DFD process में 2 input arrow हैं पर 0 output arrow — यह कौन-सी ग़लती है?', 'Black Hole — data अंदर जाता है पर बाहर नहीं आता।', 'निगलने वाला'],
  ['[Code Output] Decision table का left-lower quadrant क्या रखता है?', 'Action Stub (नीचे-बाएँ)। ऊपर conditions, नीचे actions; बाएँ stub (नाम), दाएँ entries।', 'नीचे-बाएँ = action'],
  ['[True/False] Spiral model की सबसे बड़ी ख़ासियत risk analysis है।', 'True। हर चक्र में risk का मूल्यांकन Spiral को बाक़ी models से अलग करता है।', 'चक्र + जोखिम'],
  ['[True/False] LOC (Lines of Code) software का सबसे परिष्कृत complexity माप है।', 'False। LOC सबसे सरल size माप है। Complexity के लिए Cyclomatic Complexity बेहतर है।', 'LOC = सरल size'],
  ['[ट्रैप कार्ड] DFD में बिना input के output देने वाला process क्या कहलाता है — Black Hole?', 'नहीं! वह "Miracle" (या Grey hole) है। Black Hole = input आए output न निकले। दोनों उल्टे हैं।', 'चमत्कार बनाम ब्लैकहोल'],
  ['[ट्रैप कार्ड] Integration testing एक ही अकेले module को जाँचता है?', 'नहीं! एक module = Unit testing। Integration = कई modules को जोड़कर उनके बीच का interface जाँचना।', 'जोड़ = Integration']
];

QB.p2sad = [
  { q: 'System study project का पहला क़दम क्या होता है?', o: ['Coding शुरू करना', 'समस्या/आवश्यकता की पहचान (Preliminary Investigation)', 'Testing करना', 'Maintenance'], a: 1, e: 'किसी भी system study का पहला क़दम है समस्या को समझना और यह तय करना कि project व्यवहार्य (feasible) है या नहीं — इसे preliminary investigation या system study कहते हैं।', trap: 'सीधे Coding या Design चुन लेना — वे बाद के चरण हैं।', d: 2, tag: 'SDLC', pyq: 'Paper-II Q26 — हूबहू' },
  { q: 'किसी एक विशेष module की गहन (भारी) जाँच किस testing में होती है?', o: ['System testing', 'Integration testing', 'Unit testing', 'Acceptance testing'], a: 2, e: 'Unit testing में हर एक module/component को अलग से, गहराई से जाँचा जाता है। बाक़ी स्तर modules को जोड़कर या पूरे system पर काम करते हैं।', trap: 'Integration चुन लेना — वो कई modules के बीच का interface जाँचता है, एक module नहीं।', d: 2, tag: 'Testing', pyq: 'Paper-II Q49 — हूबहू' },
  { q: 'Testing के स्तर किस क्रम में किए जाते हैं?', o: ['System → Unit → Integration → Acceptance', 'Unit → Integration → System → Acceptance', 'Acceptance → System → Integration → Unit', 'Integration → Unit → System → Acceptance'], a: 1, e: 'सही क्रम है — पहले Unit (हर module अलग), फिर Integration (modules जोड़कर), फिर System (पूरा system), और अंत में Acceptance (ग्राहक की मंज़ूरी)।', trap: 'System को पहले रख देना — वो तो लगभग आख़िर में आता है।', d: 2, tag: 'Testing', pyq: 'Paper-II Q71 — हूबहू' },
  { q: 'DFD में ऐसा process जिसमें data आता तो है पर बाहर नहीं निकलता, क्या कहलाता है?', o: ['Miracle', 'Black Hole', 'Grey Hole', 'Data Store'], a: 1, e: 'Black Hole = ऐसा process जिसमें input तो हो पर कोई output न हो — यह DFD की तार्किक ग़लती है। इसका उल्टा (बिना input के output) Miracle कहलाता है।', trap: 'Miracle चुन लेना — वो बिल्कुल उल्टी ग़लती है।', d: 2, tag: 'DFD', pyq: 'Paper-II Q93 — हूबहू' },
  { q: 'निम्न में से कौन-सा software process model नहीं है?', o: ['Waterfall model', 'Spiral model', 'Prototype model', 'Cascade model'], a: 3, e: 'मान्य models हैं — Waterfall, Spiral, Prototype, Agile, V-model आदि। "Cascade model" नाम का कोई मानक model नहीं (हालाँकि Waterfall को कभी-कभी cascade-जैसा कहा जाता है, यह औपचारिक नाम नहीं)।', trap: 'Spiral या Prototype को अनजाना समझकर ग़लत मान लेना।', d: 2, tag: 'Process Models', pyq: 'Paper-II Q48 — हूबहू पैटर्न' },
  { q: 'Decision table का left-lower quadrant क्या कहलाता है?', o: ['Condition Stub', 'Condition Entry', 'Action Stub', 'Action Entry'], a: 2, e: 'Decision table चार खंडों में बँटी होती है — ऊपर conditions, नीचे actions; बाएँ stub (नाम), दाएँ entries। इसलिए left-lower = Action Stub।', trap: 'Condition Stub चुन लेना — वो left-UPPER है।', d: 3, tag: 'Design Tools', pyq: 'Paper-II Q72 — हूबहू' },
  { q: 'Software complexity मापने का प्रमुख तरीक़ा कौन-सा है?', o: ['Lines of Code', 'Cyclomatic Complexity', 'Function Point', 'Gantt Chart'], a: 1, e: 'Cyclomatic Complexity (McCabe) program के control-flow graph में स्वतंत्र रास्तों की संख्या गिनकर जटिलता मापता है। LOC सिर्फ़ आकार मापता है, complexity नहीं।', trap: 'LOC चुन लेना — वो size है, complexity नहीं।', d: 3, tag: 'Metrics', pyq: 'Paper-II Q74 — हूबहू' },
  { q: 'Information gathering में ranking scale questions respondents से क्या करवाते हैं?', o: ['हाँ/नहीं में जवाब', 'चीज़ों को वरीयता/क्रम में रखवाना', 'खुला वर्णन लिखवाना', 'संख्या भरवाना'], a: 1, e: 'Ranking scale में respondent कई विकल्पों को अपनी पसंद/महत्व के क्रम में रखता है (जैसे 1 सबसे ज़रूरी, 5 सबसे कम)।', trap: 'हाँ/नहीं (वो dichotomous है) चुन लेना।', d: 2, tag: 'Fact Finding', pyq: 'Paper-II Q31 — हूबहू' },
  { q: 'Spiral model की सबसे विशिष्ट विशेषता क्या है?', o: ['सबसे तेज़ delivery', 'हर चक्र में Risk Analysis', 'कोई documentation नहीं', 'एक ही बार में पूरा'], a: 1, e: 'Spiral model हर चक्र (spiral) में risk analysis करता है — यही उसे बड़े व जोखिम भरे projects के लिए उपयुक्त और बाक़ी models से अलग बनाता है।', trap: '"सबसे तेज़" चुन लेना — Spiral तेज़ नहीं, सुरक्षित है।', d: 2, tag: 'Process Models', pyq: 'बार-बार' },
  { q: 'अच्छे software design का सिद्धांत क्या है?', o: ['High cohesion, high coupling', 'Low cohesion, low coupling', 'High cohesion, low coupling', 'Low cohesion, high coupling'], a: 2, e: 'अच्छा design चाहता है — High Cohesion (हर module अपने अंदर एकजुट, एक ही काम) और Low Coupling (modules एक-दूसरे पर कम निर्भर, ताकि एक बदले तो बाक़ी न टूटें)।', trap: 'Coupling को भी "high अच्छा" मान लेना — coupling जितनी कम, उतना अच्छा।', d: 3, tag: 'Design', pyq: 'बार-बार' },
  { q: 'Black box testing की मुख्य विशेषता क्या है?', o: ['अंदर के code की पूरी जानकारी के साथ testing', 'code देखे बिना, केवल input-output के आधार पर testing', 'सिर्फ़ programmer द्वारा testing', 'केवल एक module की testing'], a: 1, e: 'Black box testing में tester अंदर की कोडिंग नहीं देखता — वह बस input देकर output की जाँच करता है (user के नज़रिए से)। White box में code देखा जाता है।', trap: 'White box की परिभाषा से उलझ जाना।', d: 2, tag: 'Testing', pyq: 'बार-बार' },
  { q: 'DFD में external entity (source/sink) किस चिह्न से दर्शाई जाती है?', o: ['गोल/वृत्त', 'तीर', 'वर्ग (square/rectangle)', 'खुला आयत'], a: 2, e: 'External entity (जो system को data दे या ले) वर्ग से दिखाई जाती है। गोल = process, तीर = data flow, खुला आयत = data store।', trap: 'गोल (process) चुन लेना।', d: 2, tag: 'DFD', pyq: 'बार-बार' },
  { q: 'DFD का Level 0 diagram किस नाम से जाना जाता है?', o: ['Context Diagram', 'Detailed Diagram', 'ER Diagram', 'Use Case Diagram'], a: 0, e: 'Level 0 DFD = Context Diagram — इसमें पूरा system एक ही process (गोले) के रूप में दिखता है, जो बाहरी entities से जुड़ा होता है। फिर Level 1, 2 में तोड़ते हैं।', trap: 'ER Diagram से उलझ जाना — वो data model है, DFD नहीं।', d: 2, tag: 'DFD', pyq: 'बार-बार' },
  { q: 'किसी विकास-चरण के समानांतर testing चरण किस model में होते हैं?', o: ['Waterfall', 'V-Model', 'Big Bang', 'Prototype'], a: 1, e: 'V-Model में बाईं ओर हर development चरण के ठीक सामने (दाईं ओर) एक testing चरण होता है — इसलिए इसे Verification & Validation model भी कहते हैं।', trap: 'Waterfall चुन लेना — उसमें testing एक ही चरण के रूप में अंत की ओर होता है।', d: 3, tag: 'Process Models', pyq: 'गहरा' },
  { q: 'Verification और Validation में मुख्य अंतर क्या है?', o: ['दोनों एक ही हैं', 'Verification = "सही तरीक़े से बना रहे?", Validation = "सही चीज़ बनाई?"', 'Validation कोड जाँचता है, Verification नहीं', 'Verification सिर्फ़ ग्राहक करता है'], a: 1, e: 'Verification जाँचता है कि हम spec के अनुसार सही तरीक़े से बना रहे हैं (are we building it right?)। Validation जाँचता है कि हमने ग्राहक की असली ज़रूरत की सही चीज़ बनाई (are we building the right thing?)।', trap: 'दोनों को एक मान लेना या परिभाषाएँ उलट देना।', d: 3, tag: 'Testing', pyq: 'गहरा' },
  { q: 'SDLC में सबसे लंबा और सबसे महँगा चरण आमतौर पर कौन-सा होता है?', o: ['Design', 'Coding', 'Testing', 'Maintenance'], a: 3, e: 'Maintenance — software release के बाद वर्षों तक चलता है (bug fix, सुधार, नई ज़रूरतें), इसलिए कुल लागत का सबसे बड़ा हिस्सा अक्सर यहीं जाता है।', trap: 'Coding चुन लेना — वह दिखता ज़रूर बड़ा है, पर maintenance उससे लंबा चलता है।', d: 3, tag: 'SDLC', pyq: 'गहरा' },
  { q: 'Prototype model किस स्थिति में सबसे उपयुक्त है?', o: ['जब requirement बिल्कुल साफ़ व स्थिर हों', 'जब requirement अस्पष्ट/धुँधली हों', 'जब project बहुत छोटा हो', 'जब कोई user न हो'], a: 1, e: 'Prototype model तब उपयोगी है जब requirement शुरू में साफ़ न हों — पहले एक नमूना बनाकर user को दिखाया जाता है, feedback लेकर सुधारा जाता है।', trap: '"साफ़ requirement" चुन लेना — वहाँ तो Waterfall बेहतर है।', d: 2, tag: 'Process Models', pyq: 'बार-बार' },
  { q: 'Cohesion का क्या अर्थ है?', o: ['दो modules के बीच निर्भरता', 'एक module के अंदर तत्वों का आपसी जुड़ाव (एक ही काम पर केंद्रित होना)', 'code की कुल लाइनें', 'testing का स्तर'], a: 1, e: 'Cohesion = एक ही module के भीतर के तत्व कितने आपस में जुड़े और एक ही उद्देश्य पर केंद्रित हैं। High cohesion अच्छा माना जाता है। (Coupling modules के बीच की निर्भरता है।)', trap: 'Cohesion और Coupling की परिभाषाएँ आपस में बदल देना।', d: 3, tag: 'Design', pyq: 'गहरा' },
  { q: 'Gantt chart मुख्यतः किसके लिए प्रयोग होता है?', o: ['Data flow दिखाने के लिए', 'Project की समय-सारणी (scheduling) दिखाने के लिए', 'Database design के लिए', 'Code लिखने के लिए'], a: 1, e: 'Gantt chart एक bar chart है जो project के कार्यों को समय के विरुद्ध दिखाता है — कौन-सा काम कब शुरू व ख़त्म होगा। यह scheduling/planning का औज़ार है।', trap: 'DFD (data flow) से उलझ जाना।', d: 2, tag: 'Project Mgmt', pyq: 'बार-बार' },
  { q: 'Waterfall model की सबसे बड़ी सीमा (drawback) क्या है?', o: ['बहुत महँगा है', 'एक चरण पूरा होने के बाद पीछे लौटकर बदलाव करना कठिन है', 'इसमें testing नहीं होती', 'यह सिर्फ़ छोटे project के लिए है'], a: 1, e: 'Waterfall में हर चरण एक-के-बाद-एक होता है और पिछले चरण में लौटना कठिन/महँगा है — इसलिए यदि requirement बीच में बदल जाए तो बड़ी दिक़्क़त। इसी कमी को दूर करने के लिए Agile/Iterative आए।', trap: '"testing नहीं होती" चुन लेना — testing तो होती है, बस अंत की ओर।', d: 2, tag: 'Process Models', pyq: 'बार-बार' }
];
