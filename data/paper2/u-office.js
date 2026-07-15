/*! MODULE: data/paper2/u-office.js — Paper-II Unit: Data Processing / MS Office (PYQ weight ≈ 10/100) */

CH.push({ id: 'p2dp', ic: '📊', t: 'Data Processing', s: 'MS Word • Excel • PowerPoint • Access', xp: 120, p: 2 });

/* ==================== LESSON ==================== */
LESSON.p2dp = `
<div class="blk"><h3>📊 Data Processing — MS Office</h3>
<p><b>सरल भाषा में:</b> तीन औज़ार, तीन अलग काम — और पेपर ठीक यही जाँचता है कि तुझे पता है कौन-सा औज़ार किस काम का।</p>
<div style="overflow-x:auto"><table>
<tr><th>औज़ार</th><th>असली काम</th><th>एक लाइन में</th></tr>
<tr><td>📝 <b>Word</b></td><td>Word Processing</td><td>"लिखने" की मशीन — चिट्ठी, रिपोर्ट</td></tr>
<tr><td>📈 <b>Excel</b></td><td>Spreadsheet</td><td>"गिनने" की मशीन — हिसाब, चार्ट</td></tr>
<tr><td>📽️ <b>PowerPoint</b></td><td>Presentation</td><td>"दिखाने" की मशीन — स्लाइड</td></tr>
<tr><td>🗄️ <b>Access</b></td><td>DBMS</td><td>"सँभालने" की मशीन — रिकॉर्ड</td></tr>
</table></div>
<div class="tk">💡 <b>यह concept बना ही क्यों?</b> पहले हर काम अलग-अलग सॉफ़्टवेयर से होता था और फ़ाइलें आपस में बात नहीं करती थीं। Microsoft ने इन्हें एक <b>सूट</b> में जोड़ा, एक जैसा <b>Ribbon</b> दिया, और <b>OLE</b> (Object Linking and Embedding) से Excel की टेबल सीधे Word में चिपकाना मुमकिन किया। इसीलिए तीनों का Ribbon एक जैसा दिखता है — एक बार सीखो, तीनों जगह चले।</div>
</div>

<div class="blk"><h3>🎀 Ribbon का ढाँचा — पहले नक़्शा, फिर रास्ता</h3>
<p><b>पहले concept:</b> Ribbon कोई बेतरतीब बटनों का ढेर नहीं। इसका ढाँचा तीन परतों का है — और यह समझ लिया तो "कौन-सा कमांड कहाँ है" कभी रटना नहीं पड़ेगा।</p>
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
<div class="tr">⚠️ <b>File tab अलग है</b> — इसे <b>Backstage View</b> कहते हैं (Save, Save As, Print, Options)। यह "दस्तावेज़ के बारे में" है, "दस्तावेज़ के अंदर" नहीं।</div>
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

<div class="blk"><h3>📝 MS Word — पकड़ने लायक बातें</h3>
<div style="overflow-x:auto"><table>
<tr><th>शब्द</th><th>असली मतलब</th><th>कहाँ</th></tr>
<tr><td><b>Gutter</b></td><td>Binding के लिए extra margin</td><td>Page Layout &gt; Margins</td></tr>
<tr><td><b>Margin</b></td><td>पन्ने के किनारे की खाली जगह</td><td>Page Layout</td></tr>
<tr><td><b>WordArt</b></td><td><b>सजावटी text</b></td><td>Insert &gt; Text</td></tr>
<tr><td><b>SmartArt</b></td><td>डायग्राम (flow, cycle)</td><td>Insert &gt; Illustrations</td></tr>
<tr><td><b>ClipArt</b></td><td>तैयार तस्वीरें</td><td>Insert &gt; Illustrations</td></tr>
<tr><td><b>Watermark</b></td><td>पीछे की धुँधली छाप</td><td>Page Layout &gt; Page Background</td></tr>
<tr><td><b>Mail Merge</b></td><td>एक letter → कई पते</td><td>Mailings</td></tr>
<tr><td><b>Orphan</b></td><td>पैराग्राफ की <b>पहली</b> लाइन अकेली नीचे छूट जाए</td><td>—</td></tr>
<tr><td><b>Widow</b></td><td>पैराग्राफ की <b>आख़िरी</b> लाइन अकेली ऊपर चली जाए</td><td>—</td></tr>
</table></div>
<div class="tk">🧠 <b>Orphan बनाम Widow:</b> "<b>Orphan (अनाथ) अकेला पीछे छूटता है</b> (पहली लाइन, नीचे); <b>Widow (विधवा) अकेली आगे बढ़ जाती है</b> (आख़िरी लाइन, ऊपर)।"</div>
<div class="tk">⌨️ <b>Word के ज़रूरी shortcuts:</b> Ctrl+B बोल्ड • Ctrl+I इटैलिक • Ctrl+U अंडरलाइन • Ctrl+S सेव • <b>F7 = Spelling &amp; Grammar</b> • Ctrl+F ढूँढो • Ctrl+H बदलो • Ctrl+Z वापस।</div>
</div>

<div class="blk"><h3>📈 Excel Formula Sandbox — चला के देख</h3>
<p style="font-size:.8rem;color:var(--dim)">नीचे असली शीट है। formula <b>=</b> से शुरू कर।</p>
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
<div class="tr">⚠️ <b>PYQ Q70:</b> <code>=LCM(5,7,35)</code> का output? → <b>35</b>। विकल्प में 70 और 1225 डालकर फँसाते हैं। ऊपर चला के देख ले।</div>
</div>

<div class="blk"><h3>📈 Excel — बाक़ी ज़रूरी बातें</h3>
<p><b>Cell Reference — सबसे ज़रूरी concept:</b></p>
<div style="overflow-x:auto"><table>
<tr><th>लिखावट</th><th>नाम</th><th>Copy करने पर</th></tr>
<tr><td><code>A1</code></td><td><b>Relative</b></td><td>दोनों बदलेंगे</td></tr>
<tr><td><code>$A$1</code></td><td><b>Absolute</b></td><td><b>कुछ नहीं बदलेगा</b></td></tr>
<tr><td><code>$A1</code></td><td>Mixed</td><td>column बँधा, row बदलेगा</td></tr>
<tr><td><code>A$1</code></td><td>Mixed</td><td>row बँधा, column बदलेगा</td></tr>
</table></div>
<div class="tk">🧠 <b>ट्रिक:</b> "<b>$ जिसके आगे, वो बँध गया।</b>" डॉलर = ताला 🔒। (शॉर्टकट: <b>F4</b> दबाते जाओ — A1 → $A$1 → A$1 → $A1)</div>
<p style="margin-top:.6rem"><b>What-If Analysis के तीन औज़ार</b> (Data tab में):</p>
<div style="overflow-x:auto"><table>
<tr><th>औज़ार</th><th>काम</th></tr>
<tr><td><b>Goal Seek</b></td><td>नतीजा तय है, input ढूँढो ("90 लाने के लिए कितने नंबर चाहिए?")</td></tr>
<tr><td><b>Scenario Manager</b></td><td>कई हालात सहेजकर तुलना</td></tr>
<tr><td><b>Data Table</b></td><td>एक-दो input बदलकर नतीजों की तालिका</td></tr>
</table></div>
<div class="tr">⚠️ <b>PYQ Q35 (odd one out):</b> Portrait / Scenario Manager / Data Table / Goal Seek → अलग है <b>Portrait</b>! बाक़ी तीनों <b>What-If Analysis</b> हैं; Portrait तो पन्ने की <b>orientation</b> है।</div>
<div class="tk">⌨️ <b>Excel:</b> Ctrl+; आज की तारीख़ • Alt+= AutoSum • F2 cell edit • Ctrl+Home → A1 • Freeze Panes = ऊपर की row चिपका दो।</div>
</div>

<div class="blk"><h3>📽️ MS PowerPoint — Views और Keys</h3>
<div style="overflow-x:auto"><table>
<tr><th>View</th><th>किस काम का</th></tr>
<tr><td><b>Normal</b></td><td>स्लाइड बनाना/लिखना (डिफ़ॉल्ट)</td></tr>
<tr><td><b>Slide Sorter</b></td><td>⭐ स्लाइड <b>का क्रम बदलना</b> / हटाना</td></tr>
<tr><td><b>Reading View</b></td><td>विंडो में चलाकर देखना</td></tr>
<tr><td><b>Slide Show</b></td><td>पूरे परदे पर प्रस्तुति</td></tr>
<tr><td><b>Notes Page</b></td><td>वक्ता के नोट्स</td></tr>
</table></div>
<div class="tr">⚠️ <b>PYQ Q30:</b> "स्लाइड <b>rearrange</b> करने के लिए सबसे उपयुक्त view?" → <b>Slide Sorter</b> (Normal नहीं)।</div>
<p style="margin-top:.6rem"><b>Master Views — सिर्फ़ तीन हैं:</b></p>
<div class="tk">✅ <b>Slide Master</b> • ✅ <b>Handout Master</b> • ✅ <b>Notes Master</b><br>
❌ <b>"Outline Master" नाम की कोई चीज़ नहीं होती!</b> (Outline एक <i>view</i> है, master नहीं।)</div>
<div class="tr">⚠️ <b>PYQ Q22:</b> "कौन-सा valid Master view <b>नहीं</b> है?" → <b>Outline Master</b>। यही पकड़ है।</div>
<div class="tk">⌨️ <b>PowerPoint की सबसे ज़रूरी keys:</b><br>
<b>F5</b> = slide show <b>शुरू से</b> (from beginning)<br>
<b>Shift+F5</b> = slide show <b>मौजूदा स्लाइड से</b> (from current)<br>
<b>F7</b> = Spelling check • <b>Esc</b> = show बंद • <b>B</b> = परदा काला</div>
<div class="tr">⚠️ <b>PYQ Q20 (हूबहू):</b> "from beginning ... and from current slide" → <b>F5, Shift+F5</b>। F7 वाला विकल्प चारा है।</div>
<div class="tk">🧠 <b>Animation बनाम Transition:</b> <b>Animation</b> = स्लाइड के <b>अंदर</b> की चीज़ हिले (text उड़कर आए)। <b>Transition</b> = एक स्लाइड <b>से दूसरी</b> पर जाते वक़्त का असर। <i>"अंदर = Animation, बीच = Transition।"</i></div>
</div>

<div class="blk"><h3>📝 MS Word — और गहराई से</h3>
<div style="overflow-x:auto"><table>
<tr><th>सुविधा</th><th>काम</th></tr>
<tr><td><b>Find & Replace</b></td><td>Ctrl+F ढूँढो, Ctrl+H बदलो</td></tr>
<tr><td><b>Track Changes</b></td><td>Review tab — किसने क्या बदला</td></tr>
<tr><td><b>Header/Footer</b></td><td>ऊपर/नीचे दोहराने वाला text (Insert)</td></tr>
<tr><td><b>Page Break</b></td><td>Ctrl+Enter — अगला पन्ना</td></tr>
<tr><td><b>Bullets/Numbering</b></td><td>सूची (Home &gt; Paragraph)</td></tr>
<tr><td><b>Styles</b></td><td>Heading 1/2 — एक जैसा format</td></tr>
<tr><td><b>Thesaurus</b></td><td>Shift+F7 — पर्यायवाची</td></tr>
</table></div>
<div class="tk">🧠 <b>Alignment shortcuts:</b> Ctrl+L (बाएँ), Ctrl+E (केंद्र), Ctrl+R (दाएँ), Ctrl+J (justify)। <b>Zoom/view:</b> Print Layout (डिफ़ॉल्ट), Web, Outline, Draft।<br>
🧠 <b>Word में 4 margin:</b> Top, Bottom, Left, Right — <b>"Middle" margin नहीं होता</b> (यह असली KVS ट्रैप है)।</div>
</div>

<div class="blk"><h3>📈 Excel — Functions, Charts, बाक़ी</h3>
<div style="overflow-x:auto"><table>
<tr><th>श्रेणी</th><th>Functions</th></tr>
<tr><td>Math</td><td>SUM, PRODUCT, LCM, GCD, MOD, POWER, SQRT, ROUND</td></tr>
<tr><td>Statistical</td><td>AVERAGE, COUNT, COUNTA, MAX, MIN, MEDIAN</td></tr>
<tr><td>Logical</td><td>IF, AND, OR, NOT, IFERROR</td></tr>
<tr><td>Text</td><td>LEN, LEFT, RIGHT, MID, CONCATENATE, UPPER</td></tr>
<tr><td>Lookup</td><td>VLOOKUP, HLOOKUP, INDEX, MATCH</td></tr>
<tr><td>Date</td><td>TODAY, NOW, DAY, MONTH</td></tr>
</table></div>
<div class="tk">🧠 <b>Chart प्रकार:</b> Column/Bar (तुलना), Line (रुझान/trend), Pie (हिस्सा/percentage), Scatter (सम्बन्ध)। <br>
🧠 <b>Freeze Panes</b> = ऊपर की row/column चिपका दो (scroll पर दिखती रहे)। <b>Sort & Filter</b> = क्रम व छँटाई। <b>Conditional Formatting</b> = शर्त पर रंग। <b>Pivot Table</b> = बड़े data का सारांश।<br>
🧠 COUNT (सिर्फ़ संख्या गिने) बनाम COUNTA (ख़ाली छोड़ सब गिने)।</div>
<div class="tr">⚠️ Cell = column+row (A1)। Range = A1:A10। Worksheet कई मिलकर Workbook। Excel file = .xlsx।</div>
</div>

<div class="blk"><h3>🗄️ MS Access — Database सुविधा</h3>
<p>MS Office का <b>DBMS</b> हिस्सा — रिकॉर्ड सँभालने के लिए (Word/Excel से अलग काम)।</p>
<div style="overflow-x:auto"><table>
<tr><th>Object</th><th>काम</th></tr>
<tr><td><b>Table</b></td><td>असली data (rows=records, columns=fields)</td></tr>
<tr><td><b>Query</b></td><td>data छाँटना/खोजना (SQL अंदर)</td></tr>
<tr><td><b>Form</b></td><td>data भरने का सुंदर पर्दा</td></tr>
<tr><td><b>Report</b></td><td>छपाई लायक सारांश</td></tr>
<tr><td><b>Macro</b></td><td>काम स्वचालित</td></tr>
</table></div>
<div class="tk">🧠 <b>Primary Key</b> = हर record की अनोखी पहचान (Access में key icon)। <b>Relationship</b> दो tables जोड़े (One-to-Many सबसे आम)। <b>Data types:</b> Text, Number, Date/Time, Currency, AutoNumber, Yes/No।<br>
🧠 Access file = <b>.accdb</b> (पुराना .mdb)।</div>
<div class="tr">⚠️ <b>ट्रैप:</b> Access में असली data सिर्फ़ <b>Table</b> में रहता है; Form/Report/Query उसी पर आधारित "view" हैं।</div>
</div>

<div class="blk"><h3>🖥️ Windows / File Formats — छोटे पर पक्के सवाल</h3>
<div style="overflow-x:auto"><table>
<tr><th>क़िस्म</th><th>Extensions</th></tr>
<tr><td>Word / Excel / PPT</td><td>.docx / .xlsx / .pptx (पुराने: .doc, .xls, .ppt)</td></tr>
<tr><td>Access</td><td>.accdb (पुराना .mdb)</td></tr>
<tr><td><b>Animation</b></td><td>QuickTime (.mov), MPEG (.mpg), Flic (.fli/.flc), GIF</td></tr>
<tr><td>Audio</td><td>.mp3, .wav, .wma, .aac</td></tr>
<tr><td>Image</td><td>.jpg, .png, .bmp, .gif, .tiff</td></tr>
</table></div>
<div class="tr">⚠️ <b>PYQ Q86:</b> "कौन-सा <b>animation</b> format नहीं है?" → QuickTime, MPEG, FLI/FLC तीनों animation हैं; <b>Amiga (SGI)</b> अलग है।</div>
<div class="tk">⌨️ <b>PYQ Q89:</b> स्क्रीन का <b>सिर्फ़ एक हिस्सा</b> कैप्चर करने के लिए Snipping → <b>Windows + Shift + S</b>। (पूरा स्क्रीन = PrtSc; सिर्फ़ विंडो = Alt+PrtSc)</div>
</div>

<div class="blk"><h3>⚡ 30-सेकंड रिवीज़न</h3>
<div class="tk" style="line-height:2">
📝 <b>Gutter → Margins</b> (binding की जगह)<br>
🎨 सजावटी text = <b>WordArt</b> | डायग्राम = SmartArt | तस्वीर = ClipArt<br>
💧 Watermark → Page Layout &gt; Page Background<br>
👨‍👩‍👦 <b>Orphan</b> = पहली लाइन नीचे छूटी | <b>Widow</b> = आख़िरी लाइन ऊपर गई<br>
🔒 <b>$A$1</b> = absolute (नहीं बदलेगा) | A1 = relative | <b>F4</b> से टॉगल<br>
🧮 <b>=LCM(5,7,35) → 35</b> (70/1225 चारा है)<br>
❓ What-If = <b>Goal Seek + Scenario Manager + Data Table</b> (Portrait नहीं!)<br>
📽️ स्लाइड rearrange = <b>Slide Sorter</b><br>
🎭 Master views सिर्फ़ 3: Slide, Handout, Notes — <b>Outline Master ❌</b><br>
▶️ <b>F5</b> = शुरू से | <b>Shift+F5</b> = मौजूदा स्लाइड से | <b>F7</b> = spelling<br>
✨ अंदर हिले = <b>Animation</b> | स्लाइड बदले = <b>Transition</b><br>
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
