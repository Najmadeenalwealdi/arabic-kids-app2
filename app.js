const numbers = [
  {symbol:"١",name:"واحد",emoji:"🐠",description:"سمكة واحدة تسبح في البحر",tip:"ارفع إصبعًا واحدًا وقل: واحد!"},
  {symbol:"٢",name:"اثنان",emoji:"🦋",description:"فراشتان تطيران في الحديقة",tip:"عدّ الفراشتين: واحد، اثنان!"},
  {symbol:"٣",name:"ثلاثة",emoji:"🍎",description:"ثلاث تفاحات حمراء",tip:"هل تستطيع عدّ التفاحات الثلاث؟"},
  {symbol:"٤",name:"أربعة",emoji:"🚗",description:"أربع سيارات ملوّنة",tip:"أربع سيارات جاهزة للسباق!"},
  {symbol:"٥",name:"خمسة",emoji:"⭐",description:"خمس نجوم لامعة في السماء",tip:"افتح كفّك وعدّ خمسة أصابع."},
  {symbol:"٦",name:"ستة",emoji:"🐥",description:"ستة كتاكيت صغيرة",tip:"أصغِ لصوت الكتاكيت وعدّها."},
  {symbol:"٧",name:"سبعة",emoji:"🎈",description:"سبعة بالونات تطير عاليًا",tip:"تخيّل سبعة بالونات بألوان مختلفة."},
  {symbol:"٨",name:"ثمانية",emoji:"🐙",description:"أخطبوط لطيف له ثمانية أذرع",tip:"هل تعرف أن للأخطبوط ثمانية أذرع؟"},
  {symbol:"٩",name:"تسعة",emoji:"🍓",description:"تسع حبات فراولة لذيذة",tip:"عدّ حبات الفراولة واحدة واحدة."},
  {symbol:"١٠",name:"عشرة",emoji:"🧸",description:"عشرة دببة صغيرة في نزهة",tip:"رائع! وصلت إلى الرقم عشرة."}
];
const letters = [
  {symbol:"أ",name:"ألف",emoji:"🦁",word:"أسد",description:"أسد شجاع يبدأ اسمه بحرف الألف"},
  {symbol:"ب",name:"باء",emoji:"🦆",word:"بطة",description:"بطة جميلة تبدأ بحرف الباء"},
  {symbol:"ت",name:"تاء",emoji:"🍎",word:"تفاحة",description:"تفاحة لذيذة تبدأ بحرف التاء"},
  {symbol:"ث",name:"ثاء",emoji:"🦊",word:"ثعلب",description:"ثعلب ذكي يبدأ بحرف الثاء"},
  {symbol:"ج",name:"جيم",emoji:"🐪",word:"جمل",description:"جمل صبور يبدأ بحرف الجيم"},
  {symbol:"ح",name:"حاء",emoji:"🐎",word:"حصان",description:"حصان سريع يبدأ بحرف الحاء"},
  {symbol:"خ",name:"خاء",emoji:"🥒",word:"خيار",description:"خيار أخضر يبدأ بحرف الخاء"},
  {symbol:"د",name:"دال",emoji:"🐻",word:"دب",description:"دب لطيف يبدأ بحرف الدال"},
  {symbol:"ذ",name:"ذال",emoji:"🌽",word:"ذرة",description:"ذرة لذيذة تبدأ بحرف الذال"},
  {symbol:"ر",name:"راء",emoji:"🦌",word:"ريم",description:"ريم رشيقة يبدأ اسمها بحرف الراء"},
  {symbol:"ز",name:"زاي",emoji:"🌼",word:"زهرة",description:"زهرة جميلة تبدأ بحرف الزاي"},
  {symbol:"س",name:"سين",emoji:"🐟",word:"سمكة",description:"سمكة تسبح وتبدأ بحرف السين"},
  {symbol:"ش",name:"شين",emoji:"☀️",word:"شمس",description:"شمس مشرقة تبدأ بحرف الشين"},
  {symbol:"ص",name:"صاد",emoji:"🐤",word:"صوص",description:"صوص صغير يبدأ بحرف الصاد"},
  {symbol:"ض",name:"ضاد",emoji:"🐸",word:"ضفدع",description:"ضفدع يقفز ويبدأ بحرف الضاد"},
  {symbol:"ط",name:"طاء",emoji:"✈️",word:"طائرة",description:"طائرة تطير في السماء وتبدأ بحرف الطاء"},
  {symbol:"ظ",name:"ظاء",emoji:"🦌",word:"ظبي",description:"ظبي جميل يبدأ بحرف الظاء"},
  {symbol:"ع",name:"عين",emoji:"🍇",word:"عنب",description:"عنب لذيذ يبدأ بحرف العين"},
  {symbol:"غ",name:"غين",emoji:"☁️",word:"غيمة",description:"غيمة بيضاء تبدأ بحرف الغين"},
  {symbol:"ف",name:"فاء",emoji:"🦋",word:"فراشة",description:"فراشة ملوّنة تبدأ بحرف الفاء"},
  {symbol:"ق",name:"قاف",emoji:"🌙",word:"قمر",description:"قمر منير يبدأ بحرف القاف"},
  {symbol:"ك",name:"كاف",emoji:"🐕",word:"كلب",description:"كلب وفيّ يبدأ بحرف الكاف"},
  {symbol:"ل",name:"لام",emoji:"🍋",word:"ليمون",description:"ليمونة صفراء تبدأ بحرف اللام"},
  {symbol:"م",name:"ميم",emoji:"🍌",word:"موز",description:"موزة لذيذة تبدأ بحرف الميم"},
  {symbol:"ن",name:"نون",emoji:"🐝",word:"نحلة",description:"نحلة نشيطة تبدأ بحرف النون"},
  {symbol:"هـ",name:"هاء",emoji:"🎁",word:"هدية",description:"هدية جميلة تبدأ بحرف الهاء"},
  {symbol:"و",name:"واو",emoji:"🌹",word:"وردة",description:"وردة حمراء تبدأ بحرف الواو"},
  {symbol:"ي",name:"ياء",emoji:"🖐️",word:"يد",description:"يد صغيرة تبدأ بحرف الياء"}
];

const $ = (id) => document.getElementById(id);
let mode = "numbers";
let currentIndex = 0;
let stars = 0;
let soundEnabled = true;
let questionIndex = -1;
let toastTimer;
let voices = [];

function currentItems() { return mode === "letters" ? letters : numbers; }
function safeLoadStars() {
  try { const saved = Number(localStorage.getItem("arabicAdventureStars")); return Number.isFinite(saved) && saved > 0 ? saved : 0; }
  catch (_) { return 0; }
}
function saveStars() {
  try { localStorage.setItem("arabicAdventureStars", String(stars)); } catch (_) {}
}
function updateStats() {
  $("starCount").textContent = stars;
  $("levelName").textContent = stars >= 20 ? "بطل المعرفة" : stars >= 10 ? "مستكشف خبير" : stars >= 5 ? "مستكشف نشيط" : "مستكشف صغير";
}
function showToast(message) {
  const el = $("toast"); el.textContent = message; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2300);
}
function getArabicVoice() {
  if (!("speechSynthesis" in window)) return null;
  voices = window.speechSynthesis.getVoices();
  return voices.find(v => /^ar([-_]|$)/i.test(v.lang)) || voices.find(v => /arabic|عربي/i.test(v.name + " " + v.lang)) || null;
}
function speak(text) {
  if (!soundEnabled) { showToast("الصوت متوقف. اضغط زر الصوت لتشغيله."); return; }
  if (!("speechSynthesis" in window)) { showToast("ميزة الصوت غير مدعومة في هذا المتصفح."); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ar-SA"; utterance.rate = 0.78; utterance.pitch = 1.08;
  const voice = getArabicVoice(); if (voice) utterance.voice = voice;
  utterance.onerror = () => showToast("تعذّر تشغيل الصوت. تأكد من وجود صوت عربي في جهازك.");
  window.speechSynthesis.speak(utterance);
}
function setMode(nextMode) {
  mode = nextMode; currentIndex = 0;
  document.querySelectorAll(".mode-tab").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  const quizMode = mode === "quiz";
  $("learnPanel").hidden = quizMode; $("quizPanel").hidden = !quizMode;
  $("welcomeCard").hidden = quizMode;
  if (mode === "numbers") {
    $("sectionTitle").textContent = "أهلًا يا بطل! مستعد لمغامرة الأرقام؟";
    $("sectionDescription").textContent = "اضغط على أي بطاقة، تعرّف عليها، واستمع إلى نطقها باللغة العربية.";
    $("gridTitle").textContent = "اختر رقمًا";
    renderCards(); showItem(0);
  } else if (mode === "letters") {
    $("sectionTitle").textContent = "مرحبًا بك في غابة الحروف! 🌳";
    $("sectionDescription").textContent = "اكتشف الحروف العربية، وتعرّف على كلمات وصور تبدأ بكل حرف.";
    $("gridTitle").textContent = "اختر حرفًا";
    renderCards(); showItem(0);
  } else {
    makeQuestion();
  }
}
function renderCards() {
  const grid = $("learningGrid"); grid.innerHTML = "";
  currentItems().forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button"; button.className = "learn-card"; button.dataset.index = index;
    button.innerHTML = `<span class="card-symbol"></span><span class="card-emoji"></span><span class="card-name"></span>`;
    button.querySelector(".card-symbol").textContent = item.symbol;
    button.querySelector(".card-emoji").textContent = item.emoji;
    button.querySelector(".card-name").textContent = item.name;
    button.setAttribute("aria-label", `${item.symbol}، ${item.name}`);
    button.addEventListener("click", () => showItem(index));
    grid.appendChild(button);
  });
}
function showItem(index) {
  const items = currentItems(); currentIndex = (index + items.length) % items.length;
  const item = items[currentIndex];
  $("detailEmoji").textContent = item.emoji;
  $("detailTitle").textContent = mode === "letters" ? `حرف ${item.symbol} — ${item.name}` : `الرقم ${item.symbol} — ${item.name}`;
  $("detailText").textContent = item.description;
  $("detailEyebrow").textContent = mode === "letters" ? `كلمة اليوم: ${item.word}` : "مغامرة جديدة";
  $("detailTip").textContent = mode === "letters" ? `💡 قل: ${item.symbol} مثل ${item.word}.` : `💡 ${item.tip}`;
  document.querySelectorAll(".learn-card").forEach((card, i) => {
    const selected = i === currentIndex; card.classList.toggle("selected", selected); card.setAttribute("aria-pressed", String(selected));
  });
}
function speakCurrent() {
  const item = currentItems()[currentIndex];
  const text = mode === "letters" ? `حرف ${item.name}. ${item.word}. ${item.description}` : `الرقم ${item.name}. ${item.description}`;
  speak(text);
}
function nextItem() { showItem(currentIndex + 1); }
function makeQuestion() {
  const items = currentItems();
  let next = Math.floor(Math.random() * items.length);
  if (items.length > 1 && next === questionIndex) next = (next + 1) % items.length;
  questionIndex = next;
  const target = items[questionIndex];
  $("questionEmoji").textContent = target.emoji;
  $("questionText").textContent = mode === "letters" ? `اختر حرف ${target.symbol}` : `أين الرقم ${target.symbol}؟`;
  $("quizFeedback").textContent = "اختر الإجابة التي تراها صحيحة!";
  $("quizFeedback").style.color = "var(--muted)";
  $("quizOptions").innerHTML = "";
  const indexes = [questionIndex];
  while (indexes.length < 3) {
    const random = Math.floor(Math.random() * items.length);
    if (!indexes.includes(random)) indexes.push(random);
  }
  indexes.sort(() => Math.random() - 0.5).forEach(index => {
    const item = items[index];
    const button = document.createElement("button");
    button.type = "button"; button.className = "quiz-option";
    button.textContent = item.symbol;
    button.setAttribute("aria-label", item.symbol);
    button.addEventListener("click", () => checkAnswer(index, button));
    $("quizOptions").appendChild(button);
  });
  if (soundEnabled) speak(mode === "letters" ? `أين حرف ${target.name}؟` : `أين الرقم ${target.name}؟`);
}
function checkAnswer(index, chosenButton) {
  const target = currentItems()[questionIndex];
  const buttons = [...$("quizOptions").querySelectorAll("button")];
  if (index === questionIndex) {
    stars += 1; saveStars(); updateStats();
    $("quizFeedback").textContent = "أحسنت! إجابة صحيحة، حصلت على نجمة ⭐";
    $("quizFeedback").style.color = "#13845e";
    buttons.forEach(button => { button.disabled = true; });
    showToast("رائع! نجمة جديدة تضاف إلى مجموعتك ⭐");
    speak("أحسنت! إجابة صحيحة!");
  } else {
    $("quizFeedback").textContent = "محاولة جميلة! جرّب مرة أخرى 💪";
    $("quizFeedback").style.color = "#c04c70";
    chosenButton.disabled = true;
    speak("حاول مرة أخرى. أنت تستطيع!");
  }
}
document.querySelectorAll(".mode-tab").forEach(button => button.addEventListener("click", () => setMode(button.dataset.mode)));
$("speakButton").addEventListener("click", speakCurrent);
$("nextButton").addEventListener("click", nextItem);
$("newQuestionButton").addEventListener("click", makeQuestion);
$("soundToggle").addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  if (!soundEnabled && "speechSynthesis" in window) window.speechSynthesis.cancel();
  $("soundToggle").textContent = soundEnabled ? "🔊 الصوت يعمل" : "🔇 الصوت متوقف";
  $("soundToggle").setAttribute("aria-pressed", String(soundEnabled));
  showToast(soundEnabled ? "تم تشغيل الصوت" : "تم إيقاف الصوت");
});
if ("speechSynthesis" in window) window.speechSynthesis.onvoiceschanged = () => { voices = window.speechSynthesis.getVoices(); };
stars = safeLoadStars(); updateStats(); renderCards(); showItem(0);

// تسجيل Service Worker للعمل بدون إنترنت
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('تم تسجيل التطبيق للعمل بدون إنترنت ✅'))
      .catch(err => console.log('فشل التسجيل:', err));
  });
}
