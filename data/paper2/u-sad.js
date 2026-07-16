/*! MODULE: data/paper2/u-sad.js — Paper-II Unit: System Analysis & Design (PYQ ≈ 8/100) */

CH.push({ id: 'p2sad', ic: '📐', t: 'System Analysis', s: 'SDLC • DFD • Testing • Models', xp: 120, p: 2 });

LESSON.p2sad = `
<div class="blk"><h3>📐 System Analysis & Design (SAD) — परिचय</h3>
<p><b>सरल भाषा में:</b> कोई भी बड़ा software सीधे नहीं बन जाता — जैसे मकान बनाने से पहले नक़्शा, नींव, फिर दीवारें चाहिए। SAD वही अनुशासन है: <b>पहले समझो क्या चाहिए (Analysis), फिर design करो, फिर बनाओ (coding), फिर जाँचो (testing)</b> — एक तय क्रम में, बिना किसी क़दम को छोड़े।</p>
<div class="tk">💡 <b>यह विषय बना ही क्यों?</b> बिना योजना के बना software देर से, महँगा और bug-भरा बनता है। सॉफ़्टवेयर इंजीनियरिंग का एक जाना-माना सिद्धांत कहता है — <b>ग़लती जितनी देर से पकड़ी जाए, ठीक करना उतना महँगा होता जाता है</b>। requirement-चरण में पकड़ी गई ग़लती को ठीक करना मान लो ₹1 का काम है, तो वही ग़लती अगर production (ग्राहक के हाथ में जाने) के बाद पकड़ में आए, तो उसे ठीक करना ₹100 का काम बन जाता है। इसीलिए एक क्रमबद्ध प्रक्रिया — <b>SDLC</b> — अपनाई जाती है।</div>
</div>

<div class="blk"><h3>🔄 SDLC — Software Development Life Cycle</h3>
<p>SDLC किसी भी software को बनाने का <b>चरण-दर-चरण नक़्शा</b> है। हर चरण पिछले चरण के नतीजे पर टिका होता है — इसलिए क्रम बहुत मायने रखता है।</p>
<div class="viz">
<svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
 ${['Planning', 'Analysis', 'Design', 'Coding', 'Testing', 'Maintenance'].map((s, i) =>
    `<rect x="${4 + i * 66}" y="18" width="60" height="26" rx="6" fill="#22d3ee" opacity="${0.14 + i * 0.03}" stroke="#22d3ee"/>
     <text x="${34 + i * 66}" y="35" text-anchor="middle" fill="#eef3fa" font-size="8" font-weight="800">${s}</text>` +
    (i < 5 ? `<path d="M${64 + i * 66} 31 L${70 + i * 66} 31" stroke="#8298b6" stroke-width="1.2"/>` : '')).join('')}
</svg>
</div>
<p><b>पहला क़दम — System Study / Preliminary Investigation:</b> इससे पहले कि कोई एक लाइन design या code लिखी जाए, यह जानना ज़रूरी है — असली समस्या क्या है, और क्या इसे हल करना व्यावहारिक (feasible) भी है। इसी चरण में सूचना इकट्ठा (fact-finding) की जाती है।</p>
<div style="overflow-x:auto"><table>
<tr><th>Fact-finding तकनीक</th><th>कैसे</th></tr>
<tr><td><b>Interview</b></td><td>सीधे बात करके गहरी, लचीली जानकारी लेना</td></tr>
<tr><td><b>Questionnaire</b></td><td>लिखित फ़ॉर्म — कई लोगों से एक साथ, कम समय में</td></tr>
<tr><td><b>Observation</b></td><td>असली काम को होते हुए ख़ुद देखना — लोग जो <i>करते</i> हैं, वही सच है, जो वो <i>बताते</i> हैं वह नहीं</td></tr>
<tr><td><b>Record Review</b></td><td>पुराने दस्तावेज़/रिपोर्ट पढ़ना</td></tr>
</table></div>
<div class="tk">🧠 <b>Ranking Scale Questions</b> (Questionnaire का एक प्रकार) — respondent से कहा जाता है कि कई विकल्पों को <b>वरीयता के क्रम</b> में रखे (जैसे "इन 5 सुविधाओं को अहमियत के हिसाब से 1-5 नंबर दो"), न कि सिर्फ़ हाँ/नहीं।</div>
<div class="tr">⚠️ <b>PYQ (Q26):</b> "system study project का पहला क़दम?" → <b>problem/requirement को पहचानना (preliminary investigation)</b>, सीधे design या coding नहीं।<br>
⚠️ <b>PYQ (Q31):</b> ranking scale questions respondents से चीज़ों को <b>क्रम/वरीयता</b> में रखवाते हैं (हाँ/नहीं नहीं)।</div>
</div>

<div class="blk"><h3>🏗️ Process Models — बनाने के अलग-अलग तरीक़े</h3>
<p>SDLC सिर्फ़ चरणों की सूची है — पर उन चरणों को <b>कैसे व्यवस्थित</b> किया जाए (एक बार सीधी लाइन में, या बार-बार चक्रों में, या टुकड़ों में), इसके लिए अलग-अलग <b>Process Model</b> बने हैं। हर model किसी ख़ास स्थिति के लिए बनाया गया — इसलिए "कब कौन-सा इस्तेमाल करें" ही असली सवाल है।</p>
<div style="overflow-x:auto"><table>
<tr><th>Model</th><th>कैसे काम करे</th><th>कब उपयुक्त</th></tr>
<tr><td><b>Waterfall</b></td><td>हर चरण एक-के-बाद-एक, पीछे लौटना कठिन</td><td>requirement बिल्कुल साफ़ व स्थिर हों</td></tr>
<tr><td><b>Prototype</b></td><td>पहले एक झलक/नमूना बनाओ, user से feedback लो, फिर सुधारो</td><td>requirement शुरू में धुँधली हों</td></tr>
<tr><td><b>Spiral</b></td><td>चक्रों (spirals) में आगे बढ़े, हर चक्र में <b>Risk Analysis</b></td><td>बड़े, जोखिम-भरे projects</td></tr>
<tr><td><b>Agile / Iterative</b></td><td>छोटे-छोटे टुकड़ों (sprints) में, हर टुकड़े के बाद असली delivery</td><td>बदलती रहने वाली requirement</td></tr>
<tr><td><b>V-Model</b></td><td>हर development चरण के "सामने" एक ठीक वैसा testing चरण</td><td>verification बहुत ज़रूरी हो (जैसे safety-critical software)</td></tr>
</table></div>
<div class="tk">🧠 <b>Spiral का दिल = Risk Analysis।</b> यही एक गुण उसे बाक़ी सभी models से अलग करता है — हर चक्र शुरू होने से पहले पूछा जाता है "इस बार क्या ग़लत हो सकता है?" और उसका जवाब खोजा जाता है, इसके बाद ही आगे बढ़ते हैं।<br>
🧠 <b>Waterfall का दोष:</b> अगर coding के दौरान पता चले कि design में कोई ग़लती थी, तो पीछे लौटकर design बदलना बहुत महँगा और मुश्किल है — पूरी "झरने" की तरह बहती प्रक्रिया को उलटा चलाना पड़ता है।</div>
<div class="tr">⚠️ <b>PYQ (Q48):</b> "कौन-सा software process model <b>नहीं</b> है?" → कोई बनावटी/नक़ली नाम पूछा जाता है (जैसे "Cascade model" — यह असल में मौजूद नहीं, असली नाम Waterfall है)। असली models याद रख: Waterfall, Prototype, Spiral, Agile/Iterative, V-Model, Big Bang।</div>
</div>

<div class="blk"><h3>🔍 Feasibility Study — क्या यह project करने लायक है?</h3>
<p>कोई भी project शुरू करने से पहले चार दिशाओं से जाँचा जाता है कि क्या यह वाक़ई करने लायक (feasible) है — कहीं ऐसा न हो कि आधा project बनने के बाद पता चले कि यह असंभव था।</p>
<div class="tk">🧠 <b>Feasibility के 4 (+1) प्रकार — "TELO":</b><br>
<b>T</b>echnical — क्या हमारे पास ज़रूरी तकनीक/हार्डवेयर/skill है?<br>
<b>E</b>conomic — क्या फ़ायदा लागत से ज़्यादा है (cost-benefit analysis)?<br>
<b>L</b>egal — कहीं कोई कानूनी अड़चन (जैसे copyright, data-privacy क़ानून) तो नहीं?<br>
<b>O</b>perational — क्या असली users इसे अपनाएँगे और चला पाएँगे?<br>
(पाँचवाँ, अक्सर जोड़ा जाने वाला: <b>Schedule</b> feasibility — क्या तय समय में बन सकता है?)</div>
<div class="tk">🧠 <b>SRS</b> (Software Requirement Specification) — feasibility के बाद, जो भी requirement तय हुई, उसे एक लिखित दस्तावेज़ में बाँधा जाता है। यह दस्तावेज़ developer और client के बीच एक तरह का <b>अनुबंध (contract)</b> बन जाता है — आगे कोई विवाद हो तो SRS ही आख़िरी सच माना जाता है।<br>
🧠 <b>Functional</b> requirement = system <b>क्या</b> करे (जैसे "login होना चाहिए")। <b>Non-functional</b> requirement = system <b>कैसा</b> हो (जैसे "response 2 सेकंड से कम हो", "सुरक्षित हो")।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> "तेज़ी" और "सुरक्षा" जैसी माँगों को Functional requirement समझ लेना — ये असल में <b>Non-functional</b> हैं, क्योंकि ये "क्या काम करे" नहीं बल्कि "कैसे काम करे" बताती हैं।</div>
</div>

<div class="blk"><h3>🔵 DFD — Data Flow Diagram</h3>
<p><b>DFD क्यों?</b> Design शुरू करने से पहले, यह समझना ज़रूरी है कि system में <b>data कहाँ से आता है, कहाँ जाता है, कहाँ बदलता है, और कहाँ रुकता है</b>। DFD इसी यात्रा को चित्र में उतारता है — कोई भी technical जानकारी (programming भाषा, hardware) बिना, सिर्फ़ data के प्रवाह पर ध्यान देकर।</p>
<div style="overflow-x:auto"><table>
<tr><th>चिह्न</th><th>मतलब</th><th>पहचान</th></tr>
<tr><td>◯ / गोल-आयत</td><td><b>Process</b></td><td>data को कुछ करे/बदले</td></tr>
<tr><td>→ तीर</td><td><b>Data Flow</b></td><td>data की दिशा</td></tr>
<tr><td>▭ (खुला आयत, दो रेखाएँ)</td><td><b>Data Store</b></td><td>data जहाँ रुका/रखा हो (जैसे कोई फ़ाइल/table)</td></tr>
<tr><td>▢ वर्ग</td><td><b>External Entity</b></td><td>system के बाहर का source या sink (जैसे "Customer")</td></tr>
</table></div>
<div class="tk">🧠 <b>DFD के स्तर (Levels):</b> <b>Level 0</b> (जिसे <b>Context Diagram</b> कहते हैं) में पूरा system सिर्फ़ <b>एक ही गोले</b> से दिखाया जाता है, बाहरी entities के साथ जुड़ा — यह सबसे ज़्यादा zoomed-out नज़ारा है। फिर Level 1 में उस एक गोले को कई छोटे processes में तोड़ा जाता है, Level 2 में उन्हें और तोड़ा जाता है — जैसे नक़्शे को ज़ूम करते जाना।</div>
<div class="tr">⚠️ <b>PYQ (Q93) — Black Hole ट्रैप:</b> ऐसा process जिसमें data <b>अंदर आए पर बाहर कभी न निकले</b> (input arrow हैं, output arrow नहीं) — यह DFD बनाने की एक तार्किक ग़लती मानी जाती है। इसका बिल्कुल उल्टा — <b>Miracle</b> (या Grey Hole) — वह process है जिसमें <b>बिना किसी input के output निकल आए</b>। दोनों नाम आसानी से उलझते हैं, इसलिए ध्यान रखो: "Black Hole निगलता है (input खाता है), Miracle बिना मेहनत के देता है (output बनाता है)"।</div>
</div>

<div class="blk"><h3>📋 Decision Table — शर्तों को तालिका में बाँधना</h3>
<p>जब किसी काम के नियम बहुत सारी शर्तों (conditions) पर निर्भर करें (जैसे "अगर उम्र 18 से ऊपर हो <b>और</b> ID हो, तो प्रवेश दो"), तो शब्दों में लिखना उलझाने लगता है। <b>Decision Table</b> इन शर्तों और उनके नतीजों को एक साफ़ तालिका में व्यवस्थित करती है — जिसमें हर संभव combination अपने-आप दिख जाता है, कोई स्थिति छूटती नहीं।</p>
<div class="tk">🧠 <b>Decision Table के चार खंड (हमेशा इसी क्रम में):</b><br>
<b>ऊपर-बाएँ (Condition Stub)</b> — सारी शर्तों के <b>नाम</b> लिखे होते हैं।<br>
<b>ऊपर-दाएँ (Condition Entry)</b> — हर combination में हर शर्त सच/झूठ (Y/N) है, यह लिखा होता है।<br>
<b>नीचे-बाएँ (Action Stub)</b> — सारी संभव <b>क्रियाओं</b> के नाम।<br>
<b>नीचे-दाएँ (Action Entry)</b> — किस combination पर कौन-सी क्रिया चलेगी।<br>
<i>मंत्र: "ऊपर शर्त, नीचे क्रिया; बाएँ नाम, दाएँ मान।"</i></div>
<div class="tr">⚠️ <b>PYQ (Q72):</b> "Decision table का left-lower quadrant क्या कहलाता है?" → <b>Action Stub</b> (नीचे-बाएँ = क्रियाओं के नाम, Condition Stub नहीं — वह ऊपर-बाएँ है)।</div>
</div>

<div class="blk"><h3>🧪 Testing — स्तर और प्रकार</h3>
<p><b>Testing क्यों ज़रूरी?</b> "मुझे लगता है यह ठीक काम करेगा" पर्याप्त नहीं — हर हिस्से को व्यवस्थित रूप से परखना पड़ता है, ताकि ग्राहक तक पहुँचने से पहले ग़लतियाँ पकड़ी जा सकें। Testing कई "स्तरों" में होती है — छोटे हिस्से से शुरू करके, धीरे-धीरे पूरे system तक।</p>
<div class="tk">🧠 <b>Testing के 4 स्तर (नीचे से ऊपर क्रम — पक्का सवाल):</b><br>
<b>Unit Testing</b> — एक अकेला module/function, अलग से, गहराई से जाँचो।<br>
<b>Integration Testing</b> — कई modules को जोड़कर, उनके बीच का "interface" जाँचो (कहीं data ग़लत हस्तांतरित तो नहीं हो रहा)।<br>
<b>System Testing</b> — पूरा system, एक इकाई की तरह, end-to-end जाँचो।<br>
<b>Acceptance Testing</b> — ग्राहक/user ख़ुद इस्तेमाल करके मंज़ूरी दे।</div>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Black Box Testing</th><th>White Box Testing</th></tr>
<tr><td>अंदर का code</td><td>नहीं देखते</td><td>देखते हैं</td></tr>
<tr><td>ध्यान किस पर</td><td>Input → Output सही मिला या नहीं</td><td>हर रास्ता/loop/शाखा जाँचना</td></tr>
<tr><td>Tester कैसा हो</td><td>user जैसा (काम से मतलब)</td><td>programmer जैसा (code से मतलब)</td></tr>
</table></div>
<div class="tk">🧠 <b>दो और ज़रूरी प्रकार:</b><br>
<b>Regression Testing</b> — जब code में कोई सुधार/नई सुविधा जोड़ी जाए, तो <b>पुराना चल रहा हिस्सा दोबारा जाँचना</b> — कहीं नए बदलाव ने पुरानी काम करती चीज़ तोड़ तो नहीं दी। (नाम का मतलब ही "पीछे लौटना" — यानी पुराना बिगड़ जाना।) मिसाल: app में नया button जोड़ा और login टूट गया — यही regression पकड़ता है।<br>
<b>Stress/Load Testing</b> — system पर जान-बूझकर बहुत ज़्यादा बोझ डालकर देखना कि कब और कैसे टूटता है।</div>
<div class="tk">🧠 <b>Verification बनाम Validation (गहरी समझ का सवाल):</b> <b>Verification</b> पूछता है — "क्या हम इसे <b>सही तरीक़े से</b> बना रहे हैं?" (क्या design/spec का पालन हो रहा है)। <b>Validation</b> पूछता है — "क्या हमने <b>सही चीज़</b> बनाई है?" (क्या यह असली ज़रूरत पूरी करता है)। दोनों अलग सवाल हैं — कोई चीज़ spec के मुताबिक़ बिल्कुल सही (verified) बन सकती है, फिर भी ग्राहक की असली ज़रूरत पूरी न करे (invalidated)।</div>
<p style="margin-top:.6rem"><b>Acceptance Testing के दो चरण — Alpha और Beta:</b> ग्राहक की मंज़ूरी वाला चरण असल में दो हिस्सों में होता है, और इनका फ़र्क़ पक्का पूछा जाता है।</p>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Alpha Testing</th><th>Beta Testing</th></tr>
<tr><td>कहाँ होता है</td><td><b>बनाने वाले के दफ़्तर</b> में (in-house)</td><td><b>ग्राहक के असली माहौल</b> में</td></tr>
<tr><td>कौन करता है</td><td>अंदरूनी tester / चुने हुए user, developer के सामने</td><td><b>असली end-user</b>, बिना developer के</td></tr>
<tr><td>माहौल</td><td>नियंत्रित (controlled)</td><td>असली, अनियंत्रित दुनिया</td></tr>
<tr><td>क्रम</td><td><b>पहले</b></td><td><b>बाद में</b> (alpha के बाद)</td></tr>
</table></div>
<div class="tk">🧠 <b>याद रखने की तरकीब:</b> <b>A</b>lpha = <b>A</b>ndar (अंदर, कंपनी में) • <b>B</b>eta = <b>B</b>ahar (बाहर, ग्राहक के पास)। और वर्णमाला का क्रम ही चरणों का क्रम है — A पहले, B बाद में। जब कोई app "beta version" कहकर निकालता है, इसका मतलब असली users से आख़िरी जाँच करवाई जा रही है।</div>
<div class="tr">⚠️ <b>PYQ (Q49):</b> एक ही module की गहन जाँच = <b>Unit testing</b>। <b>PYQ (Q71):</b> testing स्तरों का क्रम = Unit → Integration → System → Acceptance (यह क्रम कभी नहीं बदलता)।<br>
⚠️ <b>PYQ (Q74):</b> software की जटिलता (complexity) मापने का तरीक़ा = <b>Cyclomatic Complexity</b> (McCabe द्वारा दिया गया) — program के control-flow graph में स्वतंत्र रास्तों (independent paths) की गिनती करता है। यह LOC से अलग है — LOC सिर्फ़ आकार बताता है, जटिलता नहीं।</div>
</div>

<div class="blk"><h3>💰 Cost Estimation — प्रोजेक्ट का ख़र्च पहले से जानना</h3>
<p>Project शुरू करने से पहले (और चलते-चलते भी) यह जानना ज़रूरी है — इसमें कितना समय, कितने लोग, कितना पैसा लगेगा। इसके लिए तीन मुख्य तरीक़े हैं, हर एक अलग चीज़ मापता है।</p>
<div style="overflow-x:auto"><table>
<tr><th>तरीक़ा</th><th>क्या मापे</th><th>ख़ासियत</th></tr>
<tr><td><b>LOC</b> (Lines of Code)</td><td>Size</td><td>सबसे सरल — comments/blank lines छोड़कर सिर्फ़ code-lines गिनो</td></tr>
<tr><td><b>Function Point</b></td><td>Functionality</td><td>यह गिनता है system <b>कितना काम करता है</b>, कितनी लाइनों में नहीं — इसलिए भाषा-निरपेक्ष (language-independent) है</td></tr>
<tr><td><b>COCOMO</b> (Boehm)</td><td>Effort/Cost</td><td>Constructive Cost Model — project को Organic (छोटा, सरल), Semi-detached (मध्यम), Embedded (बड़ा, जटिल/कड़े constraint वाला) — इन तीन श्रेणियों में बाँटकर गणितीय फ़ॉर्मूले से effort निकालता है</td></tr>
</table></div>
<div class="tk">🧠 <b>LOC की सीमा:</b> दो programmers एक ही काम कर सकते हैं — एक 50 लाइन में, दूसरा 200 लाइन में (कम कुशल कोडिंग की वजह से) — LOC यहाँ धोखा देता है, क्योंकि ज़्यादा लाइनें = ज़्यादा "काम" नहीं दिखाती, बल्कि ज़्यादा गुंजाइश दिखाती हैं। इसीलिए Function Point को अक्सर बेहतर माप माना जाता है।</div>
</div>

<div class="blk"><h3>📅 Project Scheduling — Gantt, PERT और CPM</h3>
<p><b>समस्या (Why):</b> Project में दर्जनों काम होते हैं — कुछ साथ-साथ हो सकते हैं, कुछ तभी शुरू होंगे जब पिछला ख़त्म हो (जैसे दीवार बने बिना छत नहीं डलती)। Manager को दिखना चाहिए: <b>कौन-सा काम कब, कितनी देर, और किस पर टिका है</b>। इसी के लिए तीन औज़ार बने।</p>
<div class="tk">📊 <b>1) Gantt Chart</b> (Henry Gantt) — एक <b>bar chart</b>: बाईं ओर कामों की सूची, ऊपर समय। हर काम एक <b>पट्टी (bar)</b> — पट्टी की लंबाई = उसमें लगने वाला समय, जगह = कब शुरू/ख़त्म।<br>
<b>ताक़त:</b> देखने में सबसे आसान — एक नज़र में पता चले कौन-सा काम कब चलेगा और कितना हो चुका (progress)।<br>
<b>कमज़ोरी:</b> यह <b>निर्भरता (dependency)</b> ठीक से नहीं दिखाता — "कौन-सा काम किस पर टिका है" यह साफ़ नहीं होता।</div>
<div class="tk">🕸️ <b>2) PERT</b> (Program Evaluation and Review Technique) — यह <b>network diagram</b> है (bar chart नहीं): कामों को तीरों/नोड से जोड़कर दिखाता है कि किसके बाद क्या।<br>
<b>ख़ास बात:</b> यह मानता है कि समय <b>अनिश्चित</b> है, इसलिए हर काम के <b>तीन अनुमान</b> लेता है — <b>Optimistic</b> (सबसे अच्छा), <b>Most Likely</b> (सामान्य), <b>Pessimistic</b> (सबसे बुरा) — और इनसे अपेक्षित समय निकालता है।<br>
<b>कब:</b> नए/अनुसंधान वाले project जहाँ समय का पक्का पता न हो (यह <b>event/probability</b> केंद्रित है)।</div>
<div class="tk">🛣️ <b>3) CPM</b> (Critical Path Method) — यह भी network diagram है, पर मानता है कि समय <b>पक्का (deterministic)</b> पता है।<br>
<b>Critical Path</b> = शुरू से अंत तक का वह <b>सबसे लंबा</b> रास्ता। यही project की <b>न्यूनतम कुल अवधि</b> तय करता है।<br>
<b>सबसे ज़रूरी समझ:</b> critical path पर पड़ा कोई भी काम <b>एक दिन भी लेट हुआ तो पूरा project लेट</b> — क्योंकि उसके पास कोई ढील (<b>slack/float = 0</b>) नहीं। बाक़ी रास्तों के कामों में थोड़ी ढील होती है।<br>
<b>कब:</b> जाने-पहचाने project (जैसे निर्माण कार्य) जहाँ हर काम का समय अनुभव से पता है — यह <b>activity/time</b> केंद्रित है।</div>
<div style="overflow-x:auto"><table>
<tr><th> </th><th>Gantt</th><th>PERT</th><th>CPM</th></tr>
<tr><td>रूप</td><td>Bar chart</td><td>Network diagram</td><td>Network diagram</td></tr>
<tr><td>समय का अनुमान</td><td>तय</td><td><b>अनिश्चित</b> (3 अनुमान)</td><td><b>निश्चित</b> (1 अनुमान)</td></tr>
<tr><td>केंद्र</td><td>समय-सारणी दिखाना</td><td>Event / probability</td><td>Activity / time व लागत</td></tr>
<tr><td>निर्भरता दिखे?</td><td>ठीक से नहीं</td><td>हाँ</td><td>हाँ</td></tr>
<tr><td>कब</td><td>प्रगति दिखाने</td><td>नया/अनिश्चित project</td><td>जाना-पहचाना project</td></tr>
</table></div>
<div class="tr">⚠️ <b>RSSB Trap:</b> "Gantt chart किसके लिए?" → <b>project की समय-सारणी (scheduling/progress)</b> — इसे DFD (data flow) से मत उलझा। <b>PERT = अनिश्चित समय, 3 अनुमान</b>; <b>CPM = निश्चित समय, critical path</b> — इन दोनों को उलट देना सबसे आम ग़लती है। और याद रख: <b>Critical path सबसे लंबा रास्ता होता है</b> (सबसे छोटा नहीं!) क्योंकि वही न्यूनतम अवधि तय करता है।</div>
</div>

<div class="blk"><h3>🔧 Maintenance — release के बाद की ज़िंदगी</h3>
<p>Software बनकर ग्राहक तक पहुँचने का मतलब यात्रा ख़त्म नहीं — असल में सबसे <b>लंबा</b> चरण अब शुरू होता है। Maintenance चार तरह की होती है, हर एक अलग वजह से।</p>
<div style="overflow-x:auto"><table>
<tr><th>प्रकार</th><th>कब/क्यों</th></tr>
<tr><td><b>Corrective</b></td><td>कोई bug मिला — उसे ठीक करना</td></tr>
<tr><td><b>Adaptive</b></td><td>बाहरी माहौल बदला (नया OS, नया hardware) — उसके साथ ढालना</td></tr>
<tr><td><b>Perfective</b></td><td>ग्राहक को नई सुविधा चाहिए, या मौजूदा सुविधा सुधारनी है</td></tr>
<tr><td><b>Preventive</b></td><td>आगे कोई समस्या न आए, इसलिए पहले से ठीक करना (जैसे code को साफ़-सुथरा बनाना)</td></tr>
</table></div>
<div class="tk">🧠 <b>CASE Tools</b> (Computer-Aided Software Engineering) — SAD के भारी काम (diagram बनाना, code का ढाँचा generate करना, दस्तावेज़ बनाना) को स्वचालित करने वाले सॉफ़्टवेयर औज़ार। ये पूरी SDLC में मदद कर सकते हैं, सिर्फ़ maintenance में नहीं।</div>
</div>

<div class="blk"><h3>📐 ER Diagram और UML — डिज़ाइन के दो भाषा-तंत्र</h3>
<p>Analysis पूरी होने के बाद, असली सिस्टम को <b>चित्रों की एक साझा भाषा</b> में design किया जाता है — ताकि हर developer एक ही बात समझे।</p>
<div class="tk">🧠 <b>ER Diagram</b> — <i>data</i> का नक़्शा। Entity (आयत), Relationship (हीरा), Attribute (दीर्घवृत्त) — यही डिज़ाइन बाद में असली database की tables बनती है (देखो DBMS यूनिट)।</p>
<b>UML</b> (Unified Modeling Language) — सिर्फ़ data नहीं, बल्कि पूरे <i>system के व्यवहार और ढाँचे</i> को चित्रित करने की भाषा, ख़ासकर Object-Oriented design में। इसके 9+ diagram दो बड़े परिवारों में बँटते हैं:</div>
<div style="overflow-x:auto"><table>
<tr><th>श्रेणी</th><th>Diagram</th><th>क्या दिखाए</th></tr>
<tr><td rowspan="2"><b>Structural</b> (ढाँचा — क्या है)</td><td>Class Diagram</td><td>classes, उनके attributes/methods, आपसी संबंध</td></tr>
<tr><td>Component/Deployment</td><td>system के भौतिक हिस्से कैसे बँटे हैं</td></tr>
<tr><td rowspan="3"><b>Behavioural</b> (व्यवहार — क्या करे)</td><td>Use Case Diagram</td><td>Actor (छड़ी-आकृति, stick figure) और वे system से क्या-क्या काम करा सकते हैं</td></tr>
<tr><td>Sequence Diagram</td><td>समय के साथ objects के बीच message का क्रम</td></tr>
<tr><td>Activity/State Diagram</td><td>किसी process/object की चाल-ढाल, अवस्थाएँ</td></tr>
</table></div>
<div class="tr">⚠️ <b>ट्रैप:</b> Class Diagram = <b>Structural</b> (ढाँचा दिखाता है)। Use Case Diagram = <b>Behavioural</b> (व्यवहार दिखाता है) — इन दोनों की श्रेणी को उलट देना आम ग़लती है।</div>
</div>

<div class="blk"><h3>🧩 Cohesion और Coupling — अच्छे Design की पहचान</h3>
<p>Design की गुणवत्ता मापने के दो सबसे बुनियादी पैमाने हैं — और दोनों इस बात से जुड़े हैं कि modules आपस में कैसे बुने गए हैं।</p>
<div class="tk">🧠 <b>Cohesion</b> — एक <b>module के अंदर</b> के हिस्से आपस में कितने जुड़े/एक-मक़सद वाले हैं। जैसे एक "Calculator" module में सिर्फ़ जोड़-घटाव-गुणा-भाग हों — यह <b>High Cohesion</b> है (अच्छा)।<br>
<b>Coupling</b> — <b>दो अलग modules</b> एक-दूसरे पर कितने निर्भर हैं। अगर एक module बदलने से दूसरा भी टूट जाए, तो यह <b>High Coupling</b> है (बुरा) — modules जितने आज़ाद/स्वतंत्र हों, उतना अच्छा (<b>Low Coupling</b>)।</p>
<i>मंत्र: <b>"High Cohesion, Low Coupling"</b> — अंदर से जुड़े, बाहर से आज़ाद।</i></div>
<div class="tk">🧠 <b>असली मिसाल:</b> एक अच्छी टीम में हर सदस्य अपने काम में माहिर है (high cohesion) और किसी दूसरे सदस्य की ग़ैर-मौजूदगी में भी अपना काम चला सकता है (low coupling)। अगर हर काम के लिए हर सदस्य को एक-दूसरे की ज़रूरत पड़े, तो एक के बीमार होने पर पूरी टीम रुक जाएगी — यही high coupling की समस्या है।</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
🔄 SDLC: Planning→Analysis→Design→Coding→Testing→Maintenance<br>
👣 पहला क़दम = <b>Preliminary Investigation / System Study</b><br>
🏗️ <b>Spiral = Risk Analysis</b> | Waterfall = पीछे नहीं लौट सकते | Prototype = धुँधली requirement<br>
🔍 Feasibility = <b>TELO</b> (Technical, Economic, Legal, Operational) + Schedule<br>
🔵 DFD: गोल=Process, →=Flow, खुला आयत=Data Store, वर्ग=External Entity<br>
🕳️ <b>Black Hole</b> = input आए output न निकले | Miracle = बिना input output निकले<br>
📋 Decision table: ऊपर-बाएँ Condition Stub, नीचे-बाएँ <b>Action Stub</b><br>
🧪 Testing क्रम: <b>Unit → Integration → System → Acceptance</b><br>
🔬 एक module गहन जाँच = <b>Unit testing</b> | Black box (बाहर) vs White box (अंदर)<br>
✅ Verification = सही तरीक़े से बना? | Validation = सही चीज़ बनी?<br>
📏 Complexity = <b>Cyclomatic Complexity</b> | Size = LOC | Functionality = Function Point<br>
🔧 Maintenance: Corrective, Adaptive, Perfective, Preventive<br>
📐 Class Diagram = Structural | Use Case Diagram = Behavioural<br>
🧩 अच्छा design = <b>High Cohesion, Low Coupling</b>
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
