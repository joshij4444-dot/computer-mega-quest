/*! MODULE: data/paper2/u-office.js — Paper-II Unit: Data Processing / MS Office (PYQ weight ≈ 10/100) */

CH.push({ id: 'p2dp', ic: '📊', t: 'Data Processing', s: 'MS Word • Excel • PowerPoint • Access', xp: 120, p: 2 });

/* ==================== LESSON ==================== */
LESSON.p2dp = `
<div class="blk"><h3>📊 Data Processing — MS Office का परिचय</h3>
<p><b>सरल भाषा में:</b> चार औज़ार, चार अलग काम — और पेपर ठीक यही जाँचता है कि तुझे पता है कौन-सा औज़ार किस काम का, और उसके अंदर कौन-सी सुविधा कहाँ बैठी है।</p>
<div style="overflow-x:auto"><table>
<tr><th>औज़ार</th><th>असली काम</th><th>एक लाइन में</th></tr>
<tr><td>📝 <b>Word</b></td><td>Word Processing</td><td>"लिखने" की मशीन — चिट्ठी, रिपोर्ट</td></tr>
<tr><td>📈 <b>Excel</b></td><td>Spreadsheet</td><td>"गिनने" की मशीन — हिसाब, चार्ट</td></tr>
<tr><td>📽️ <b>PowerPoint</b></td><td>Presentation</td><td>"दिखाने" की मशीन — स्लाइड</td></tr>
<tr><td>🗄️ <b>Access</b></td><td>DBMS</td><td>"सँभालने" की मशीन — रिकॉर्ड</td></tr>
</table></div>
<div class="tk">💡 <b>यह चारों एक साथ क्यों बनाए गए?</b> पहले हर काम के लिए अलग-अलग सॉफ़्टवेयर चलाना पड़ता था, और उनकी फ़ाइलें आपस में बात नहीं करती थीं — Excel का चार्ट Word में चिपकाना झंझट था। Microsoft ने इन्हें एक <b>सूट (Office)</b> में जोड़ा, चारों को एक जैसा दिखने वाला <b>Ribbon</b> दिया, और <b>OLE</b> (Object Linking and Embedding) नाम की तकनीक से Excel की टेबल को सीधे Word में "ज़िंदा" चिपकाना मुमकिन किया (यानी Excel में बदलाव करो तो Word में भी अपने आप बदल जाए)। इसीलिए चारों का Ribbon एक जैसा दिखता है — एक बार सीखो, चारों जगह चले।</div>
</div>

<div class="blk"><h3>🎀 Ribbon का ढाँचा — पहले नक़्शा, फिर रास्ता</h3>
<p><b>पहले concept:</b> Ribbon कोई बेतरतीब बटनों का ढेर नहीं। इसका ढाँचा तीन परतों का है — और यह समझ लिया तो "कौन-सा कमांड कहाँ है" कभी रटना नहीं पड़ेगा, ख़ुद ढूँढ पाएगा।</p>
<div class="viz">
<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg">
 <rect x="8" y="10" width="384" height="26" rx="5" fill="#22d3ee" opacity=".18" stroke="#22d3ee"/>
 <text x="200" y="27" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">TAB — बड़ा काम (Insert, Page Layout, Review…)</text>
 <text x="200" y="50" text-anchor="middle" fill="#8298b6" font-size="10">↓ हर tab के अंदर</text>
 <rect x="8" y="56" width="384" height="26" rx="5" fill="#ffc233" opacity=".18" stroke="#ffc233"/>
 <text x="200" y="73" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">GROUP — काम की श्रेणी (Font, Paragraph, Page Setup…)</text>
 <text x="200" y="96" text-anchor="middle" fill="#8298b6" font-size="10">↓ हर group के अंदर</text>
 <rect x="8" y="102" width="384" height="24" rx="5" fill="#26d07c" opacity=".18" stroke="#26d07c"/>
 <text x="200" y="118" text-anchor="middle" fill="#eef3fa" font-size="12" font-weight="800">COMMAND — असली बटन (Bold, Watermark, WordArt…)</text>
</svg>
</div>
<div class="tk">🧠 <b>सोचने का तरीका (रटने का नहीं):</b> ख़ुद से पूछ — <i>"यह काम पन्ने के साथ हो रहा है या पन्ने के अंदर?"</i><br>
• पन्ने में <b>कुछ नया डालना</b> है (तस्वीर, टेबल, WordArt, Header) → <b>Insert</b><br>
• पूरे <b>पन्ने की शक्ल</b> बदलनी है (margin, watermark, orientation) → <b>Page Layout</b><br>
• <b>दूसरों का काम</b> जाँचना है (spelling, comment, track changes) → <b>Review</b><br>
• <b>देखने का तरीका</b> बदलना है (zoom, split, ruler) → <b>View</b></div>
<div class="tr">⚠️ <b>File tab अलग है</b> — इसे <b>Backstage View</b> कहते हैं (Save, Save As, Print, Options)। यह "दस्तावेज़ के बारे में" है, "दस्तावेज़ के अंदर" नहीं — इसलिए यह Ribbon के बाक़ी tabs जैसा नहीं दिखता, पूरा पर्दा भर देता है।</div>
</div>

<div class="blk"><h3>🎯 Ribbon Simulator — कमांड का घर ढूँढ</h3>
<p style="font-size:.8rem;color:var(--dim)">पेपर में आधे सवाल यही हैं — "Gutter कहाँ है?", "WordArt कहाँ है?"। रट के नहीं, <b>ढूँढ के</b> याद होगा।</p>
<div class="ribLab">
  <div class="ribHead">
    <div id="ribAsk" class="ribAsk">👇 नीचे tabs पर घूम — हर कमांड का घर देख। फिर "चैलेंज" दबा।</div>
    <div class="ribBar">
      <button class="sqlBtn go" onclick="ribQuiz()">🎯 चैलेंज दे</button>
      <button class="sqlBtn" onclick="ribSkip()">🤷 जवाब दिखा</button>
      <span id="ribScore" class="ribScore">स्कोर: 0</span>
    </div>
    <div id="ribFb" class="ribFb"></div>
  </div>
  <div id="ribBody"></div>
</div>
<div class="tr">⚠️ <b>PYQ Q91:</b> "MS-Word में <b>Gutter</b> किससे संबंधित है?" → <b>Margins</b>। Gutter = binding (सिलाई) के लिए छोड़ी गई अतिरिक्त जगह।<br>
⚠️ <b>PYQ Q99:</b> "Word में <b>सजावटी text</b> को क्या कहते हैं?" → <b>WordArt</b> (ClipArt/SmartArt/Bookmark नहीं)।</div>
</div>

<div class="blk"><h3>📐 MS Word — पन्ने की बनावट: Margin, Gutter, Orphan/Widow</h3>
<p>किसी भी छपे दस्तावेज़ की पहली शर्त है — पन्ना सही दिखे, ठीक से कटे-छँटे। इसके लिए Word कई नियंत्रण देता है, और परीक्षा इन्हीं शब्दों की सटीक परिभाषा जाँचती है।</p>
<div style="overflow-x:auto"><table>
<tr><th>शब्द</th><th>असली मतलब</th><th>कहाँ मिलेगा</th></tr>
<tr><td><b>Margin</b></td><td>पन्ने के चारों किनारों की खाली जगह (Top, Bottom, Left, Right — <b>सिर्फ़ ये चार</b>)</td><td>Page Layout</td></tr>
<tr><td><b>Gutter</b></td><td>किताब की <b>binding/सिलाई</b> के लिए Margin में जोड़ी गई <b>अतिरिक्त</b> जगह</td><td>Page Layout &gt; Margins</td></tr>
<tr><td><b>Orphan</b></td><td>पैराग्राफ़ की <b>पहली</b> लाइन अकेली पन्ने के <b>नीचे</b> छूट जाना</td><td>—</td></tr>
<tr><td><b>Widow</b></td><td>पैराग्राफ़ की <b>आख़िरी</b> लाइन अकेली अगले पन्ने के <b>ऊपर</b> चली जाना</td><td>—</td></tr>
</table></div>
<div class="tk">🧠 <b>Gutter क्यों ज़रूरी है?</b> जब किताब को सिलाई/spiral bind करके बाँधा जाता है, तो बाईं ओर की कुछ जगह सिलाई में "खा" जाती है। बिना Gutter के, वह हिस्सा पढ़ने में मुश्किल कर देता — इसलिए Gutter, सामान्य Margin के ऊपर, एक <b>अलग से जोड़ी गई</b> जगह है, ख़ासकर binding वाली तरफ़।</div>
<div class="tk">🧠 <b>Orphan-Widow क्यों मायने रखता है?</b> पेशेवर दिखने वाला दस्तावेज़ कभी किसी पैराग्राफ़ की सिर्फ़ एक लाइन को अकेला नहीं छोड़ता — यह पढ़ने में भद्दा लगता है। Word में "Widow/Orphan control" नाम की सुविधा (Paragraph settings में) अपने-आप ऐसा होने से रोकती है।<br>
🧠 <b>याद रखने की तरकीब:</b> <b>"Orphan (अनाथ) पीछे छूटता है</b> (सबसे पहली लाइन, पुराने पन्ने पर <b>नीचे</b> रह गई)<b>; Widow (विधवा) आगे बढ़ जाती है</b> (सबसे आख़िरी लाइन, नए पन्ने पर <b>ऊपर</b> चली गई)"।</div>
<div class="tr">⚠️ <b>ट्रैप (असली KVS पैटर्न):</b> "Word में कितने Margin होते हैं?" → <b>4</b> (Top, Bottom, Left, Right)। <b>"Middle" नाम का कोई margin नहीं होता</b> — यह विकल्पों में चारे के तौर पर घुसाया जाता है।</div>
</div>

<div class="blk"><h3>🎨 MS Word — चित्र और सजावट का परिवार (WordArt, ClipArt, SmartArt)</h3>
<p>Word में तीन अलग-अलग "चित्र जैसी" सुविधाएँ हैं, और उनके नाम एक-जैसे लगने की वजह से इन्हें उलझाना सबसे आसान ग़लती है — पर तीनों का मक़सद बिल्कुल अलग है।</p>
<div style="overflow-x:auto"><table>
<tr><th>सुविधा</th><th>असली मक़सद</th><th>कहाँ</th></tr>
<tr><td><b>WordArt</b></td><td><b>सजावटी text</b> बनाना — जैसे किसी पोस्टर की बड़ी, रंगीन, घुमावदार heading</td><td>Insert &gt; Text</td></tr>
<tr><td><b>SmartArt</b></td><td>विचारों को <b>डायग्राम</b> में दिखाना — flow, cycle, hierarchy, list जैसे तैयार ढाँचे</td><td>Insert &gt; Illustrations</td></tr>
<tr><td><b>ClipArt</b></td><td><b>तैयार तस्वीरें/चिह्न</b> डालना, जो ख़ुद नहीं बनाई</td><td>Insert &gt; Illustrations</td></tr>
</table></div>
<div class="tk">🧠 <b>फ़र्क़ याद रखने की तरकीब:</b> अगर तुझे <b>अक्षरों</b> को सजाना है → WordArt। अगर तुझे कोई <b>विचार/प्रक्रिया</b> (जैसे "step 1 → step 2 → step 3") दिखाना है → SmartArt। अगर तुझे बस एक <b>तस्वीर</b> चाहिए जो तूने ख़ुद नहीं बनाई → ClipArt। तीनों "Insert" tab में हैं क्योंकि तीनों "पन्ने में कुछ नया डालना" के काम हैं (ऊपर वाला सोचने का तरीका याद है?)।</div>
<div class="tr">⚠️ <b>PYQ Q99 (हूबहू):</b> "दस्तावेज़ में सजावटी text को क्या कहते हैं?" → <b>WordArt</b>। ClipArt और SmartArt विकल्पों में चारे के तौर पर रखे जाते हैं।</div>
</div>

<div class="blk"><h3>✉️ MS Word — Mail Merge: एक चिट्ठी, हज़ार पते</h3>
<p><b>समस्या:</b> मान ले किसी स्कूल को 500 छात्रों के अभिभावकों को एक जैसा notice भेजना है, पर हर एक पर अलग नाम-पता लिखना है। हाथ से 500 अलग चिट्ठियाँ लिखना असंभव है। <b>Mail Merge</b> इसी समस्या का हल है।</p>
<div class="tk">🧠 <b>यह काम कैसे करता है — तीन हिस्से:</b><br>
1️⃣ <b>Main Document</b> — वह चिट्ठी जो सबको जानी है, जिसमें नाम/पते की जगह ख़ाली "field" (जैसे &lt;&lt;Name&gt;&gt;) छोड़े गए हैं।<br>
2️⃣ <b>Data Source</b> — नामों-पतों की सूची (अक्सर Excel की एक शीट या Access की एक table)।<br>
3️⃣ <b>Merge</b> — Word दोनों को जोड़कर हर व्यक्ति के लिए एक अलग, पूरी तरह भरी हुई चिट्ठी बना देता है — 500 अलग outputs, एक ही बार में।</div>
<div class="tk">🧠 यह सुविधा <b>Mailings</b> tab में है — और यही वजह है कि "Mailings" Ribbon का अपना अलग tab है, किसी और के अंदर नहीं छिपा।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Mail Merge के लिए data source हमेशा किसी <b>बाहरी सूची</b> से आता है (Excel/Access/Outlook contacts) — Word ख़ुद नामों की सूची नहीं बनाता।</div>
</div>

<div class="blk"><h3>✍️ MS Word — Review और संपादन के औज़ार</h3>
<p>जब कोई दस्तावेज़ कई लोगों के बीच घूमता है (जैसे कोई रिपोर्ट पहले draft, फिर सुधार, फिर मंज़ूरी), तो यह जानना ज़रूरी होता है कि <b>किसने क्या बदला</b>। इसके लिए Review tab के औज़ार हैं।</p>
<div style="overflow-x:auto"><table>
<tr><th>सुविधा</th><th>काम</th><th>Shortcut</th></tr>
<tr><td><b>Track Changes</b></td><td>हर बदलाव को रंग से चिह्नित कर के दिखाए (किसने क्या जोड़ा/हटाया)</td><td>—</td></tr>
<tr><td><b>Hyperlink</b></td><td>किसी text/तस्वीर पर <b>क्लिक करने लायक कड़ी</b> लगाना — जो वेबसाइट, दूसरी फ़ाइल, ईमेल या इसी दस्तावेज़ की किसी जगह (bookmark) पर ले जाए</td><td><b>Ctrl + K</b> (Insert &gt; Links)</td></tr>
<tr><td><b>Comments</b></td><td>बिना असली text बदले, बगल में टिप्पणी लिखना</td><td>—</td></tr>
<tr><td><b>Spelling & Grammar</b></td><td>अक्षर व वाक्य-रचना की ग़लतियाँ पकड़े</td><td><b>F7</b></td></tr>
<tr><td><b>Thesaurus</b></td><td>किसी शब्द का पर्यायवाची (synonym) ढूँढना</td><td>Shift+F7</td></tr>
<tr><td><b>Find & Replace</b></td><td>कोई शब्द ढूँढना / बदलना</td><td>Ctrl+F / Ctrl+H</td></tr>
</table></div>
<div class="tk">🧠 इन सारी सुविधाओं का साझा सूत्र — ये सब <b>"दूसरों का काम जाँचने/सुधारने"</b> से जुड़ी हैं, इसीलिए सब <b>Review</b> tab में इकट्ठी हैं (ऊपर बताया सोचने का तरीका फिर काम आया)।<br>
🧠 <b>बाक़ी ज़रूरी shortcuts:</b> Ctrl+B बोल्ड • Ctrl+I इटैलिक • Ctrl+U अंडरलाइन • Ctrl+S सेव • Ctrl+Z वापस • Ctrl+Enter = Page Break • Alignment: Ctrl+L (बाएँ), Ctrl+E (केंद्र), Ctrl+R (दाएँ), Ctrl+J (justify)।<br>
🧠 <b>Styles</b> (Heading 1, Heading 2...) — एक साथ पूरे दस्तावेज़ का format बदलने का तरीक़ा; अगर हर heading को "Heading 1" style दी जाए, तो एक जगह style बदलने पर सारी headings ख़ुद बदल जाती हैं।</div>
</div>

<div class="blk"><h3>🔢 MS Excel — Cell Reference: Relative, Absolute, Mixed</h3>
<p><b>यह समस्या क्यों पैदा हुई?</b> मान ले एक formula है <code>=A1*B1</code>, और उसे नीचे की 100 rows में copy करना है — Excel चाहता है कि हर row में यह ख़ुद-ब-ख़ुद A2*B2, A3*B3... बन जाए। यह "अपने आप बदलना" तभी ठीक है जब वाक़ई हर row का अपना डेटा हो। पर कभी-कभी एक <b>तय, स्थिर सेल</b> (जैसे tax-rate) को हर बार छूना है, बिना बदले — इसके लिए तीन तरह के reference बनाए गए।</p>
<div style="overflow-x:auto"><table>
<tr><th>लिखावट</th><th>नाम</th><th>Copy करने पर क्या हो</th></tr>
<tr><td><code>A1</code></td><td><b>Relative</b></td><td>column और row <b>दोनों बदलेंगे</b> (डिफ़ॉल्ट व्यवहार)</td></tr>
<tr><td><code>$A$1</code></td><td><b>Absolute</b></td><td><b>कुछ भी नहीं बदलेगा</b> — हर जगह वही सेल</td></tr>
<tr><td><code>$A1</code></td><td>Mixed</td><td>column बँधा ($ से), row आज़ाद (बदलेगा)</td></tr>
<tr><td><code>A$1</code></td><td>Mixed</td><td>row बँधा ($ से), column आज़ाद (बदलेगा)</td></tr>
</table></div>
<div class="tk">🧠 <b>ट्रिक:</b> "<b>$ जिसके ठीक आगे लगे, वही हिस्सा बँध जाता है, बदलता नहीं।</b>" डॉलर = ताला 🔒। इसे हाथ से टाइप करने की ज़रूरत नहीं — सेल चुनकर <b>F4</b> दबाते जाओ, यह चारों रूपों में घूम जाता है: A1 → $A$1 → A$1 → $A1 → वापस A1।</div>
<div class="tr">⚠️ <b>असली मिसाल जो पेपर पूछता है:</b> C1 में सूत्र <code>=$A$1+B1</code> लिखकर C2 में copy करने पर सूत्र <code>=$A$1+B2</code> बनता है — $A$1 बँधा रहा, B1 (relative) खिसककर B2 हो गया।</div>
</div>

<div class="blk"><h3>📈 Excel Formula Sandbox — चला के देख</h3>
<p style="font-size:.8rem;color:var(--dim)">नीचे असली शीट है। formula <b>=</b> से शुरू कर — यह पहली शर्त है, बिना = के Excel इसे सिर्फ़ text मानेगा, formula नहीं।</p>
<div class="sqlLab">
  <div id="xlGrid"></div>
  <textarea id="xlIn" class="sqlIn" rows="1" spellcheck="false">=LCM(5,7,35)</textarea>
  <div class="sqlBar">
    <button class="sqlBtn go" onclick="xlRun()">▶ चलाओ</button>
    <button class="sqlBtn" onclick="xlReset()">🔄 रीसेट</button>
  </div>
  <div class="sqlChips">
    <button class="sqlChip" onclick="xlDemo('=LCM(5,7,35)')">=LCM(5,7,35) — असली PYQ</button>
    <button class="sqlChip" onclick="xlDemo('=SUM(A1:A4)')">=SUM(A1:A4)</button>
    <button class="sqlChip" onclick="xlDemo('=AVERAGE(C1:C4)')">=AVERAGE(C1:C4)</button>
    <button class="sqlChip" onclick="xlDemo('=MAX(A1:C4)')">=MAX(A1:C4)</button>
    <button class="sqlChip" onclick="xlDemo('=GCD(10,20,30)')">=GCD(10,20,30)</button>
    <button class="sqlChip" onclick="xlDemo('=$A$1+B2')">=$A$1+B2 — absolute vs relative</button>
    <button class="sqlChip danger" onclick="xlDemo('SUM(A1:A4)')">बिना = लगाए ⚠️</button>
  </div>
  <div id="xlOut" class="sqlOut"></div>
</div>
<div class="tr">⚠️ <b>PYQ Q70 (हूबहू):</b> <code>=LCM(5,7,35)</code> का output? → <b>35</b> — पहले 5,7 का LCM निकलता है (35), फिर 35 और 35 का LCM भी 35 ही रहता है। विकल्पों में 70 और 1225 (=35×35) चारे की तरह डाले जाते हैं। ऊपर ख़ुद चला के पूरा तरीक़ा देख ले।</div>
</div>

<div class="blk"><h3>🧮 Excel — Functions: श्रेणी के हिसाब से याद कर</h3>
<p>Excel में सैकड़ों functions हैं, पर उन्हें अगर <b>काम के हिसाब से 5 परिवारों</b> में बाँट दो, तो कोई भी नया function देखते ही अंदाज़ा लग जाता है कि वह किस परिवार का है।</p>
<div style="overflow-x:auto"><table>
<tr><th>परिवार</th><th>Functions</th><th>क्या पूछे</th></tr>
<tr><td><b>Math</b></td><td>SUM, PRODUCT, LCM, GCD, MOD, POWER, SQRT, ROUND</td><td>गणना</td></tr>
<tr><td><b>Statistical</b></td><td>AVERAGE, COUNT, COUNTA, MAX, MIN, MEDIAN</td><td>आँकड़ों का सार</td></tr>
<tr><td><b>Logical</b></td><td>IF, AND, OR, NOT, IFERROR</td><td>शर्त — सच/झूठ</td></tr>
<tr><td><b>Text</b></td><td>LEN, LEFT, RIGHT, MID, CONCATENATE, UPPER</td><td>अक्षरों से काम</td></tr>
<tr><td><b>Lookup</b></td><td>VLOOKUP, HLOOKUP, INDEX, MATCH</td><td>किसी table में ढूँढना</td></tr>
</table></div>
<div class="tk">🧠 <b>COUNT बनाम COUNTA:</b> <b>COUNT</b> सिर्फ़ वे सेल गिनता है जिनमें <b>संख्या</b> हो; <b>COUNTA</b> हर वह सेल गिनता है जो <b>ख़ाली नहीं</b> है (text, संख्या, कुछ भी)। यह फ़र्क़ अक्सर ग़लत समझा जाता है।<br>
🧠 <b>VLOOKUP का असली इस्तेमाल:</b> मान ले एक बड़ी table में Roll Number से Name ढूँढना है — VLOOKUP कहता है "इस Roll Number को पहली column में ढूँढो, मिल जाए तो बगल की किसी column से value दे दो"। यही असली दुनिया में सबसे ज़्यादा इस्तेमाल होने वाला Excel function है।</div>
</div>

<div class="blk"><h3>📊 Excel — Charts और Data Tools</h3>
<p>सिर्फ़ संख्याएँ देखकर पैटर्न समझना कठिन है — इसीलिए Excel में visualize करने और डेटा व्यवस्थित करने के कई औज़ार हैं।</p>
<div style="overflow-x:auto"><table>
<tr><th>Chart/Tool</th><th>कब इस्तेमाल करें</th></tr>
<tr><td><b>Column/Bar Chart</b></td><td>कई चीज़ों की आपस में <b>तुलना</b></td></tr>
<tr><td><b>Line Chart</b></td><td>समय के साथ <b>रुझान/trend</b> (जैसे महीने-दर-महीने बिक्री)</td></tr>
<tr><td><b>Pie Chart</b></td><td>पूरे का <b>हिस्सा/percentage</b> दिखाना</td></tr>
<tr><td><b>Scatter Chart</b></td><td>दो चीज़ों के बीच <b>सम्बन्ध</b> (correlation)</td></tr>
<tr><td><b>Pivot Table</b></td><td>बड़े कच्चे data से <b>सारांश</b> तालिका बनाना</td></tr>
<tr><td><b>Conditional Formatting</b></td><td>किसी शर्त पर सेल का रंग/शक्ल बदलना (जैसे fail वालों को लाल)</td></tr>
<tr><td><b>Freeze Panes</b></td><td>ऊपर की row/पहला column <b>चिपकाकर</b> रखना, ताकि scroll करने पर भी दिखता रहे</td></tr>
<tr><td><b>Sort & Filter</b></td><td>Data को क्रम में लगाना / सिर्फ़ ज़रूरी rows दिखाना</td></tr>
</table></div>
<div class="tr">⚠️ याद रख: Cell = एक column+row का जोड़ (जैसे A1)। Range = कई सेल का समूह (A1:A10)। कई Worksheets मिलकर एक Workbook बनती हैं। Excel की फ़ाइल <b>.xlsx</b> कहलाती है।</div>
</div>

<div class="blk"><h3>❓ Excel — What-If Analysis: अगर-मगर के सवाल</h3>
<p><b>यह क्यों बना?</b> कभी-कभी सवाल उल्टा होता है — "मुझे नतीजा 90% चाहिए, इसके लिए input क्या होना चाहिए?" सामान्य formula सिर्फ़ input→output की दिशा में सोचता है; What-If Analysis इसे उल्टा भी कर सकता है।</p>
<div style="overflow-x:auto"><table>
<tr><th>औज़ार</th><th>काम</th></tr>
<tr><td><b>Goal Seek</b></td><td>नतीजा पहले से तय है, उस तक पहुँचने के लिए ज़रूरी input ढूँढो ("90 अंक लाने के लिए किस विषय में कितने चाहिए?")</td></tr>
<tr><td><b>Scenario Manager</b></td><td>कई अलग-अलग हालात ("best case", "worst case") सहेजकर एक साथ तुलना करना</td></tr>
<tr><td><b>Data Table</b></td><td>एक-दो input की अलग-अलग values आज़माकर नतीजों की पूरी तालिका बना देना</td></tr>
</table></div>
<div class="tk">🧠 तीनों <b>Data tab</b> में हैं, और तीनों का साझा मक़सद है — <b>"अगर यह बदले, तो नतीजा क्या होगा?"</b> जाँचना।</div>
<div class="tr">⚠️ <b>PYQ Q35 (odd one out — हूबहू):</b> Portrait / Scenario Manager / Data Table / Goal Seek → अलग है <b>Portrait</b>! बाक़ी तीनों What-If Analysis के औज़ार हैं; Portrait तो पन्ने की <b>orientation</b> (Page Layout में) है, इसका What-If से कोई लेना-देना नहीं।</div>
</div>

<div class="blk"><h3>📽️ MS PowerPoint — Views: एक ही स्लाइड, कई नज़रिए</h3>
<p>PowerPoint एक ही presentation को कई अलग "नज़रिए" (views) से दिखा सकता है — हर view किसी ख़ास काम के लिए बनाया गया है।</p>
<div style="overflow-x:auto"><table>
<tr><th>View</th><th>किस काम का</th></tr>
<tr><td><b>Normal</b></td><td>स्लाइड बनाना/लिखना (डिफ़ॉल्ट, रोज़मर्रा का काम)</td></tr>
<tr><td><b>Slide Sorter</b></td><td>⭐ सारी स्लाइड thumbnails की तरह — <b>क्रम बदलना/हटाना</b> सबसे आसान यहाँ</td></tr>
<tr><td><b>Reading View</b></td><td>अपनी विंडो के अंदर ही चलाकर देखना (पूरा स्क्रीन नहीं लेता)</td></tr>
<tr><td><b>Slide Show</b></td><td>पूरे परदे पर असली प्रस्तुति</td></tr>
<tr><td><b>Notes Page</b></td><td>वक्ता के निजी नोट्स लिखने/देखने के लिए</td></tr>
</table></div>
<div class="tk">🧠 <b>Slide Sorter सबसे उपयुक्त क्यों है क्रम बदलने के लिए?</b> Normal view में एक बार में सिर्फ़ एक स्लाइड दिखती है — क्रम बदलने के लिए बार-बार आगे-पीछे जाना पड़ेगा। Slide Sorter में <b>सारी स्लाइड एक साथ छोटे thumbnails</b> में दिखती हैं, इसलिए drag करके क्रम बदलना एक ही नज़र में हो जाता है — जैसे मेज़ पर बिछे फ़ोटो कार्ड को फिर से सजाना।</div>
<div class="tr">⚠️ <b>PYQ Q30 (हूबहू):</b> "स्लाइड rearrange करने के लिए सबसे उपयुक्त view?" → <b>Slide Sorter</b> (Normal नहीं)।</div>
</div>

<div class="blk"><h3>🎭 MS PowerPoint — Master Views: सिर्फ़ तीन हैं</h3>
<p><b>Master View क्यों?</b> मान ले 50 स्लाइड की presentation में हर स्लाइड पर एक जैसा logo और font चाहिए — हर स्लाइड में अलग-अलग जाकर बदलना बेकार मेहनत है। <b>Master</b> एक "मूल टेम्पलेट" है — उसमें एक बार बदलाव करो, वह सभी संबंधित स्लाइडों पर अपने आप लागू हो जाता है।</p>
<div class="tk">✅ <b>Slide Master</b> — असली स्लाइडों का टेम्पलेट (font, रंग, logo की जगह)<br>
✅ <b>Handout Master</b> — छपे हुए handout (कई स्लाइड एक पन्ने पर) का टेम्पलेट<br>
✅ <b>Notes Master</b> — वक्ता के नोट्स वाले पन्ने का टेम्पलेट<br>
❌ <b>"Outline Master" नाम की कोई चीज़ नहीं होती!</b> <b>Outline</b> तो एक सामान्य <i>view</i> है (सिर्फ़ text की सूची दिखाता है), वह "master" श्रेणी में नहीं आता।</div>
<div class="tr">⚠️ <b>PYQ Q22 (हूबहू):</b> "कौन-सा valid Master view <b>नहीं</b> है?" → <b>Outline Master</b>। यही सबसे बड़ी पकड़ है — Outline नाम जाना-पहचाना लगता है, इसलिए ग़लती से "valid" मान लिया जाता है।</div>
</div>

<div class="blk"><h3>✨ MS PowerPoint — Animation, Transition और ज़रूरी Keys</h3>
<div class="tk">🧠 <b>Animation बनाम Transition (सबसे ज़्यादा उलझाया जाने वाला जोड़ा):</b><br>
<b>Animation</b> = एक ही स्लाइड के <b>अंदर</b> की किसी चीज़ (text, तस्वीर) का हिलना-डुलना (जैसे text उड़कर आए)।<br>
<b>Transition</b> = एक स्लाइड <b>से दूसरी स्लाइड पर जाते वक़्त</b> का असर (जैसे fade, wipe)।<br>
<i>"अंदर की हरकत = Animation; बीच का पुल = Transition।"</i></div>
<div class="tk">⌨️ <b>PowerPoint की सबसे ज़रूरी keys:</b><br>
<b>F5</b> = slide show <b>शुरुआत से</b> (from beginning)<br>
<b>Shift+F5</b> = slide show <b>मौजूदा स्लाइड से</b> (from current slide)<br>
<b>F7</b> = Spelling check (Word जैसा ही) • <b>Esc</b> = show बंद करना • <b>B</b> दबाने पर परदा काला हो जाए (जनता का ध्यान वक्ता पर लाने के लिए)</div>
<div class="tr">⚠️ <b>PYQ Q20 (हूबहू):</b> "from beginning ... and from current slide" के लिए keys → <b>F5, Shift+F5</b>। F7 जैसे विकल्प चारे के तौर पर रखे जाते हैं — F7 का काम spelling check है, slide show नहीं।</div>
</div>

<div class="blk"><h3>🗄️ MS Access — Office का Database औज़ार</h3>
<p><b>Access क्यों अलग है Excel से?</b> Excel भी टेबल जैसा दिखता है, पर वह हिसाब-किताब (calculation) के लिए बना है। जब data बहुत बड़ा हो, कई अलग "विषयों" (जैसे Students, Courses, Fees) में बँटा हो, और उनके बीच <b>संबंध (relationship)</b> बनाना हो — तब चाहिए एक असली <b>DBMS</b>। Access, MS Office का वही हिस्सा है — देखो DBMS यूनिट में यही सिद्धांत गहराई से पढ़ाए गए हैं।</p>
<div style="overflow-x:auto"><table>
<tr><th>Object</th><th>काम</th></tr>
<tr><td><b>Table</b></td><td>असली data (rows = records, columns = fields) — <b>यही एक जगह है जहाँ data भौतिक रूप से रहता है</b></td></tr>
<tr><td><b>Query</b></td><td>data छाँटना/खोजना (अंदर असल में SQL चलता है)</td></tr>
<tr><td><b>Form</b></td><td>data भरने के लिए सुंदर, user-friendly पर्दा</td></tr>
<tr><td><b>Report</b></td><td>छपाई लायक, सजा-धजा सारांश</td></tr>
<tr><td><b>Macro</b></td><td>दोहराए जाने वाले काम को स्वचालित करना</td></tr>
</table></div>
<div class="tk">🧠 <b>Primary Key</b> = हर record की अनोखी पहचान (Access में एक चाबी 🔑 आइकन से दिखती है)। <b>Relationship</b> दो tables को जोड़ता है (सबसे आम — One-to-Many, जैसे एक Student के कई Marks)। <b>Data Types:</b> Text, Number, Date/Time, Currency, AutoNumber, Yes/No।<br>
🧠 Access की फ़ाइल <b>.accdb</b> कहलाती है (पुराना रूप .mdb)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Form, Report और Query — तीनों असल में Table पर टिके "नज़ारे (views)" हैं, ख़ुद अपना कोई अलग data नहीं रखते। असली data हमेशा सिर्फ़ <b>Table</b> में बैठा होता है — Table मिटा दो तो बाक़ी सब बेकार हो जाते हैं।</div>
</div>

<div class="blk"><h3>🖥️ Windows / File Formats — छोटे पर पक्के सवाल</h3>
<div style="overflow-x:auto"><table>
<tr><th>क़िस्म</th><th>Extensions</th></tr>
<tr><td>Word / Excel / PPT</td><td>.docx / .xlsx / .pptx (पुराने रूप: .doc, .xls, .ppt)</td></tr>
<tr><td>Access</td><td>.accdb (पुराना .mdb)</td></tr>
<tr><td><b>Animation</b></td><td>QuickTime (.mov), MPEG (.mpg), Flic (.fli/.flc), GIF</td></tr>
<tr><td>Audio</td><td>.mp3, .wav, .wma, .aac</td></tr>
<tr><td>Image</td><td>.jpg, .png, .bmp, .gif, .tiff</td></tr>
</table></div>
<div class="tr">⚠️ <b>PYQ Q86 (हूबहू):</b> "कौन-सा animation format नहीं है?" → QuickTime, MPEG, FLI/FLC — तीनों असली animation/video formats हैं; <b>Amiga (SGI)</b> इस श्रेणी में नहीं है, वही सही जवाब है।</div>
<div class="tk">⌨️ <b>PYQ Q89 (हूबहू):</b> स्क्रीन का <b>सिर्फ़ एक हिस्सा</b> कैप्चर करने के लिए Snipping शॉर्टकट → <b>Windows + Shift + S</b>। (पूरी स्क्रीन के लिए सिर्फ़ PrtSc; सिर्फ़ सक्रिय विंडो के लिए Alt+PrtSc — तीनों में फ़र्क़ याद रख।)</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
📝 <b>Gutter → Margins</b> (binding की जगह) | Margin सिर्फ़ 4: Top/Bottom/Left/Right<br>
🎨 सजावटी text = <b>WordArt</b> | डायग्राम = SmartArt | तस्वीर = ClipArt<br>
👨‍👩‍👦 <b>Orphan</b> = पहली लाइन नीचे छूटी | <b>Widow</b> = आख़िरी लाइन ऊपर गई<br>
✉️ Mail Merge = Main Document + Data Source → कई personalised चिट्ठियाँ<br>
🔒 <b>$A$1</b> = absolute (नहीं बदलेगा) | A1 = relative | <b>F4</b> से टॉगल<br>
🧮 <b>=LCM(5,7,35) → 35</b> (70/1225 चारा है) | COUNT=संख्या, COUNTA=ख़ाली-नहीं-सब<br>
❓ What-If = <b>Goal Seek + Scenario Manager + Data Table</b> (Portrait नहीं!)<br>
📽️ स्लाइड rearrange = <b>Slide Sorter</b> | Master सिर्फ़ 3: Slide, Handout, Notes (<b>Outline Master ❌</b>)<br>
▶️ <b>F5</b> = शुरू से | <b>Shift+F5</b> = मौजूदा स्लाइड से | <b>F7</b> = spelling<br>
✨ अंदर हिले = <b>Animation</b> | स्लाइड बदले = <b>Transition</b><br>
🗄️ Access में असली data सिर्फ़ <b>Table</b> में; Form/Report/Query = views<br>
✂️ हिस्सा कैप्चर = <b>Win + Shift + S</b>
</div>
</div>
`;

/* ==================== FLASHCARDS ==================== */
CARDS.p2dp = [
  ['[रिकॉल] MS-Word में "Gutter" किससे संबंधित है?', 'Margins से। Gutter = binding/सिलाई के लिए छोड़ी गई अतिरिक्त जगह।', 'गटर = सिलाई की जगह'],
  ['[रिकॉल] PowerPoint में स्लाइड का क्रम बदलने के लिए सबसे उपयुक्त view?', 'Slide Sorter view।', 'sorter = क्रम'],
  ['[रिकॉल] स्क्रीन का सिर्फ़ एक हिस्सा कैप्चर करने की shortcut?', 'Windows + Shift + S (Snipping)।', 'Shift+S = हिस्सा'],
  ['[रिवर्स रिकॉल] "दस्तावेज़ में सजावटी text" — इसे क्या कहते हैं और कहाँ मिलेगा?', 'WordArt — Insert > Text ग्रुप में।', 'सजावट = WordArt'],
  ['[रिवर्स रिकॉल] "Goal Seek, Scenario Manager, Data Table" — ये तीनों किस चीज़ के औज़ार हैं?', 'What-If Analysis (Excel के Data tab में)।', 'क्या-अगर'],
  ['[रिक्त स्थान] PowerPoint में slide show शुरू से चलाने के लिए ______ और मौजूदा स्लाइड से चलाने के लिए ______ key।', 'F5; Shift+F5', 'F5 शुरू, Shift+F5 यहीं से'],
  ['[रिक्त स्थान] Excel में ______ reference copy करने पर नहीं बदलता, उसे ______ चिह्न से बनाते हैं।', 'Absolute; $ (जैसे $A$1)', '$ = ताला'],
  ['[कथन आधारित] कथन: PowerPoint में "Outline Master" एक valid master view है। सही या ग़लत?', 'ग़लत। सिर्फ़ तीन master views हैं — Slide Master, Handout Master, Notes Master। Outline एक view है, master नहीं।', 'तीन ही master'],
  ['[कथन आधारित] कथन: Watermark, Insert tab में मिलता है।', 'ग़लत। Watermark → Page Layout > Page Background में है।', 'पन्ने की शक्ल = Page Layout'],
  ['[मैच] मिलाओ: (a) WordArt (b) SmartArt (c) ClipArt (d) Watermark', '(a) सजावटी text, (b) डायग्राम, (c) तैयार तस्वीरें, (d) पीछे की धुँधली छाप।', 'Art के तीन भाई'],
  ['[मैच] मिलाओ tab से: (a) Track Changes (b) Mail Merge (c) Table of Contents (d) Split', '(a) Review, (b) Mailings, (c) References, (d) View।', 'काम पूछो, tab मिलेगा'],
  ['[मैच] मिलाओ: (a) F5 (b) F7 (c) F4 (d) Alt+=', '(a) Slide show शुरू से, (b) Spelling & Grammar, (c) Excel में reference टॉगल, (d) AutoSum।', 'F-keys का परिवार'],
  ['[तुलना] Animation और Transition में फ़र्क़?', 'Animation = स्लाइड के अंदर की चीज़ों का असर (text उड़कर आना)। Transition = एक स्लाइड से दूसरी पर जाते समय का असर।', 'अंदर = Animation, बीच = Transition'],
  ['[तुलना] Orphan और Widow में फ़र्क़?', 'Orphan = पैराग्राफ़ की पहली लाइन अकेली नीचे छूट जाए। Widow = आख़िरी लाइन अकेली अगले पन्ने पर ऊपर चली जाए।', 'अनाथ पीछे, विधवा आगे'],
  ['[तुलना] $A$1, $A1 और A$1 में फ़र्क़?', '$A$1 = दोनों बँधे। $A1 = column बँधा, row आज़ाद। A$1 = row बँधा, column आज़ाद।', '$ जिसके आगे, वो बँधा'],
  ['[कालक्रम] Ribbon का ढाँचा ऊपर से नीचे लिखो।', 'Tab → Group → Command। (जैसे: Page Layout → Page Setup → Margins)', 'टैब-ग्रुप-कमांड'],
  ['[Code Output] Excel में =LCM(5, 7, 35) का नतीजा?', '35। पहले 5,7 का LCM = 35; फिर 35 और 35 का LCM = 35।', '35 ही 35'],
  ['[Code Output] Excel में =SUM(A1:A4) जहाँ A कॉलम = 10,20,30,40 — नतीजा?', '100।', 'जोड़ दो'],
  ['[Code Output] अगर C1 में =$A$1+B1 लिखकर उसे C2 में copy करें, तो C2 में क्या बनेगा?', '=$A$1+B2। $A$1 बँधा रहा (absolute), B1 खिसककर B2 हो गया (relative)।', 'ताला लगा वो नहीं हिला'],
  ['[True/False] MS-Excel में Portrait भी एक What-If Analysis औज़ार है।', 'False। Portrait पन्ने की orientation है। What-If = Goal Seek, Scenario Manager, Data Table।', 'Portrait घुसपैठिया'],
  ['[True/False] F7 दबाने से PowerPoint में slide show शुरू हो जाता है।', 'False। F7 = Spelling & Grammar। Slide show = F5।', 'F5 चलाए, F7 जाँचे'],
  ['[True/False] File tab को Backstage View कहते हैं।', 'True। Save, Save As, Print, Options — सब यहीं।', 'परदे के पीछे'],
  ['[ट्रैप कार्ड] Gutter — क्या यह Equation या Font से जुड़ा है?', 'नहीं! Gutter का रिश्ता सिर्फ़ Margins से है। असली PYQ में Equation/Font विकल्प चारे के तौर पर दिए जाते हैं।', 'गटर = margin'],
  ['[ट्रैप कार्ड] Word में सजावटी text = ClipArt?', 'नहीं! सजावटी text = WordArt। ClipArt तो तैयार तस्वीरें हैं। SmartArt डायग्राम है।', 'Word का Art = WordArt'],
  ['[ट्रैप कार्ड] Excel 2016 में G और H के बीच 3 कॉलम डालने हैं — क्या करोगे?', 'H से शुरू करके 3 कॉलम चुनो (H, I, J), फिर right-click > Insert। जितने कॉलम चुनोगे, उतने ही डलेंगे — चुनाव के बाईं ओर।', 'जितने चुनो, उतने डलें']
];

/* ==================== MCQs ==================== */
QB.p2dp = [
  { q: 'MS-Word में "Gutter" किससे संबंधित है?', o: ['Margins', 'Equation', 'Font', 'Table'], a: 0, e: 'Gutter वह अतिरिक्त जगह है जो binding (सिलाई/जिल्द) के लिए margin में जोड़ी जाती है। यह Page Layout > Margins में सेट होती है।', trap: 'Equation या Font चुन लेना — दोनों चारे के तौर पर रखे जाते हैं।', d: 1, tag: 'MS Word', pyq: 'Paper-II Q91 — हूबहू' },
  { q: 'MS-Word दस्तावेज़ में सजावटी (decorative) text को क्या कहते हैं?', o: ['Bookmark', 'SmartArt', 'ClipArt', 'WordArt'], a: 3, e: 'WordArt = सजावटी text (Insert > Text)। SmartArt डायग्राम बनाता है, ClipArt तैयार तस्वीरें देता है, और Bookmark सिर्फ़ एक निशान है।', trap: 'ClipArt और SmartArt दोनों में "Art" है — यहीं फिसलते हैं।', d: 1, tag: 'MS Word', pyq: 'Paper-II Q99 — हूबहू' },
  { q: 'MS-PowerPoint में slide show को शुरुआत से और मौजूदा स्लाइड से चलाने की keys क्रमशः हैं —', o: ['F5, F7', 'F7, Shift+F7', 'F5, Shift+F5', 'F6, F8'], a: 2, e: 'F5 = show from beginning। Shift+F5 = show from current slide। F7 का काम Spelling & Grammar है।', trap: 'F7 वाले विकल्प — F7 spelling है, slide show नहीं।', d: 2, tag: 'MS PowerPoint', pyq: 'Paper-II Q20 — हूबहू' },
  { q: 'निम्न में से कौन-सा MS-PowerPoint का valid Master view नहीं है?', o: ['Outline Master', 'Notes Master', 'Slide Master', 'Handout Master'], a: 0, e: 'PowerPoint में सिर्फ़ तीन master views हैं — Slide Master, Handout Master और Notes Master। "Outline Master" नाम की कोई चीज़ होती ही नहीं; Outline एक सामान्य view है।', trap: 'Outline शब्द जाना-पहचाना लगता है, इसलिए वही सही लगने लगता है।', d: 2, tag: 'MS PowerPoint', pyq: 'Paper-II Q22 — हूबहू' },
  { q: 'MS-PowerPoint में स्लाइडों का क्रम बदलने (rearrange) के लिए सबसे उपयुक्त view कौन-सा है?', o: ['Normal', 'Slide Show', 'Slide Sorter', 'Notes Page'], a: 2, e: 'Slide Sorter में सारी स्लाइडें thumbnails की तरह दिखती हैं, इसलिए drag करके क्रम बदलना सबसे आसान होता है।', trap: 'Normal चुन लेना — उसमें एक बार में एक ही स्लाइड पर काम होता है।', d: 1, tag: 'MS PowerPoint', pyq: 'Paper-II Q30 — हूबहू' },
  { q: 'MS-Excel के संदर्भ में विषम (odd one out) चुनिए —', o: ['Portrait', 'Scenario Manager', 'Data Table', 'Goal Seek'], a: 0, e: 'Scenario Manager, Data Table और Goal Seek — तीनों What-If Analysis के औज़ार हैं। Portrait तो पन्ने की orientation (Page Layout) है।', trap: 'तीन तकनीकी नाम देखकर घबरा जाना और Goal Seek चुन लेना।', d: 2, tag: 'MS Excel', pyq: 'Paper-II Q35 — हूबहू' },
  { q: 'MS-Excel में =LCM(5, 7, 35) का output क्या होगा?', o: ['70', '35', '12', '1225'], a: 1, e: 'LCM = लघुत्तम समापवर्त्य। 5 और 7 का LCM = 35। अब 35 और 35 का LCM = 35। इसलिए उत्तर 35।', trap: '1225 (=35×35) गुणा करके निकाला गया चारा है; 70 भी सिर्फ़ भ्रम है।', d: 2, tag: 'MS Excel', pyq: 'Paper-II Q70 — हूबहू' },
  { q: 'Excel 2016 में Column G और H के बीच 3 नए कॉलम डालने के लिए क्या करेंगे?', o: ['G कॉलम पर right-click करके 3 बार Insert दबाएँ', 'H से शुरू करके 3 कॉलम (H, I, J) चुनें, फिर right-click > Insert', 'कोई भी 1 कॉलम चुनकर Insert में 3 लिखें', 'यह संभव नहीं है'], a: 1, e: 'Excel जितने कॉलम आप चुनते हैं, उतने ही नए कॉलम डालता है — और वे चुनाव के बाईं ओर आते हैं। इसलिए H, I, J चुनकर Insert करने पर 3 नए कॉलम G और H के बीच आ जाएँगे।', trap: '"Insert में संख्या लिखो" जैसा कोई विकल्प Excel में होता ही नहीं।', d: 3, tag: 'MS Excel', pyq: 'Paper-II Q60 — हूबहू' },
  { q: 'निम्न में से कौन-सा animation का format नहीं है?', o: ['QuickTime (.mov)', 'MPEG (.mpg)', 'Flic (.fli/.flc)', 'Amiga (SGI)'], a: 3, e: 'QuickTime, MPEG और Flic — तीनों प्रचलित animation/video formats हैं। Amiga (SGI) इस श्रेणी में नहीं आता।', trap: 'Flic (FLI/FLC) कम सुना हुआ नाम है, इसलिए वही "ग़लत" लगने लगता है।', d: 3, tag: 'File Formats', pyq: 'Paper-II Q86 — हूबहू' },
  { q: 'स्क्रीन के केवल एक हिस्से का screenshot लेने के लिए Snipping की shortcut है —', o: ['Windows + Alt + X', 'Windows + Ctrl + S', 'Windows + Shift + S', 'Ctrl + Shift + K'], a: 2, e: 'Windows + Shift + S से Snip & Sketch खुलता है और आप स्क्रीन का चुना हुआ हिस्सा कैप्चर कर सकते हैं। पूरी स्क्रीन के लिए PrtSc, सिर्फ़ सक्रिय विंडो के लिए Alt+PrtSc।', trap: 'Windows+Ctrl+S असल में voice/dictation से जुड़ा भ्रम है।', d: 2, tag: 'Windows', pyq: 'Paper-II Q89 — हूबहू' },
  { q: 'MS-Excel में सेल C1 में सूत्र =$A$1+B1 लिखकर उसे C2 में copy किया जाए, तो C2 में सूत्र क्या बनेगा?', o: ['=$A$1+B1', '=$A$1+B2', '=$A$2+B2', '=A2+B2'], a: 1, e: '$A$1 absolute reference है — copy करने पर बिल्कुल नहीं बदलता। B1 relative है — एक row नीचे जाने पर B2 हो जाता है।', trap: '$A$1 को भी खिसका देना — डॉलर का मतलब ही "ताला" है।', d: 3, tag: 'MS Excel', pyq: 'हर practice book में' },
  { q: 'MS-Word में Watermark किस tab में मिलता है?', o: ['Insert', 'Page Layout', 'Review', 'View'], a: 1, e: 'Watermark → Page Layout > Page Background ग्रुप में (Page Color और Page Borders के साथ)। यह पूरे पन्ने की शक्ल से जुड़ा है, इसलिए Page Layout में है।', trap: 'Insert चुन लेना — क्योंकि लगता है कि "कुछ डाल रहे हैं"। पर यह पन्ने का background है।', d: 2, tag: 'MS Word', pyq: 'Ribbon आधारित — बार-बार' },
  { q: 'PowerPoint में Animation और Transition में मूल अंतर क्या है?', o: ['दोनों एक ही हैं', 'Animation स्लाइड के अंदर की वस्तुओं पर लगता है, Transition एक स्लाइड से दूसरी पर जाते समय लगता है', 'Animation सिर्फ़ text पर, Transition सिर्फ़ तस्वीर पर', 'Transition स्लाइड के अंदर, Animation स्लाइडों के बीच'], a: 1, e: 'Animation = स्लाइड के भीतर की वस्तुओं (text, image) का असर। Transition = एक स्लाइड से अगली स्लाइड पर जाते समय का असर।', trap: 'विकल्प (d) में दोनों की परिभाषाएँ उलट दी गई हैं — जल्दबाज़ी में यही चुना जाता है।', d: 2, tag: 'MS PowerPoint', pyq: 'KVS/LT Grade में सामान्य' },
  { q: 'MS-Word में Spelling और Grammar जाँचने की shortcut key है —', o: ['F5', 'F7', 'F12', 'Ctrl+S'], a: 1, e: 'F7 = Spelling & Grammar (Word और PowerPoint दोनों में)। F5 slide show / Go To है, F12 Save As है।', trap: 'F5 चुन लेना — वो PowerPoint में slide show है।', d: 1, tag: 'Shortcuts', pyq: 'LT Grade Q77 — हूबहू' },
  { q: 'किसी पैराग्राफ़ की अंतिम पंक्ति अकेली अगले पृष्ठ के शीर्ष पर चली जाए — इसे क्या कहते हैं?', o: ['Orphan', 'Widow', 'Gutter', 'Drop Cap'], a: 1, e: 'Widow = पैराग्राफ़ की आख़िरी लाइन अकेली अगले पन्ने पर ऊपर। Orphan = पहली लाइन अकेली पिछले पन्ने के नीचे छूट जाए।', trap: 'Orphan और Widow आपस में उलट देना — यही सबसे आम ग़लती है।', d: 3, tag: 'MS Word', pyq: 'Practice books में सामान्य' },
  { q: 'MS-Office में File tab को और किस नाम से जाना जाता है?', o: ['Backstage View', 'Quick Access Toolbar', 'Status Bar', 'Ribbon Group'], a: 0, e: 'File tab पर क्लिक करने से Backstage View खुलता है — जहाँ Save, Save As, Open, Print, Info और Options मिलते हैं। यह दस्तावेज़ "के बारे में" है, उसके "अंदर" नहीं।', trap: 'Quick Access Toolbar चुन लेना — वो तो ऊपर बाईं ओर की छोटी पट्टी है।', d: 2, tag: 'MS Office', pyq: 'Ribbon आधारित' },
  { q: 'एक ही पत्र को सैकड़ों अलग-अलग पतों पर भेजने के लिए Word की कौन-सी सुविधा प्रयोग होती है?', o: ['Hyperlink', 'Mail Merge', 'Track Changes', 'Cross-reference'], a: 1, e: 'Mail Merge एक मुख्य दस्तावेज़ (letter) को एक data source (नाम-पतों की सूची) से जोड़कर सैकड़ों व्यक्तिगत चिट्ठियाँ बना देता है। यह Mailings tab में है।', trap: 'Data Sourcing जैसा कोई विकल्प दिखे तो वह बनावटी होता है।', d: 1, tag: 'MS Word', pyq: 'KVS में हूबहू' },
  { q: 'MS-Excel में AutoSum की shortcut key क्या है?', o: ['Ctrl + =', 'Alt + =', 'Ctrl + Shift + S', 'F9'], a: 1, e: 'Alt + = चुने हुए range के नीचे/दाईं ओर SUM का सूत्र अपने आप लगा देता है।', trap: 'Ctrl + = असल में Excel में formatting/insert से जुड़ा है, AutoSum नहीं।', d: 3, tag: 'Shortcuts', pyq: 'LT Grade आधारित' },
  { q: 'Ribbon की सही संरचना (ऊपर से नीचे) क्या है?', o: ['Group → Tab → Command', 'Tab → Group → Command', 'Command → Tab → Group', 'Tab → Command → Group'], a: 1, e: 'Tab (जैसे Page Layout) के अंदर Groups (जैसे Page Setup) होते हैं, और हर Group के अंदर असली Commands (जैसे Margins)।', trap: 'Group और Tab को उलट देना।', d: 1, tag: 'MS Office', pyq: 'वैचारिक — आधार' },
  { q: 'Excel में किसी सेल reference को $A$1 → A$1 → $A1 → A1 के बीच बदलने के लिए कौन-सी key दबाई जाती है?', o: ['F2', 'F4', 'F9', 'F11'], a: 1, e: 'F4 दबाते जाने पर reference absolute, mixed और relative के बीच घूमता रहता है। F2 सेल edit करता है, F9 recalculate करता है।', trap: 'F2 चुन लेना — वो सिर्फ़ cell को edit mode में डालता है।', d: 3, tag: 'MS Excel', pyq: 'व्यावहारिक — बार-बार' }
];

/* ==================== LAB INIT ==================== */
/* lesson HTML is injected via innerHTML; sheet.js calls this once it's in the DOM */
UNIT_INIT.p2dp = function () { ribRender(); xlReset(); };
