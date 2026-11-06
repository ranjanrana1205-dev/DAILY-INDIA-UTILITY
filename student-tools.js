const studentCopy = {
  en: {
    homeLink: "Home", calculatorsLink: "Calculators", travelLink: "Travel", financeLink: "Finance", governmentLink: "Government", onlineToolsLink: "Online Tools",
    studentEyebrow: "YOUR STUDY SIDEKICK", studentTitleFirst: "Study smarter,",
    studentTitleSecond: "one tool at a time.",
    studentIntro: "Handy tools for marks, classes, exams and the next step in your journey.",
    marksTitle: "Marks Percentage Calculator", marksIntro: "Convert your marks into a percentage.",
    marksScored: "Marks scored", totalMarks: "Total marks", calculate: "Calculate",
    marksOutput: "Percentage", cgpaTitle: "CGPA Calculator",
    cgpaIntro: "Estimate percentage using the CBSE conversion factor.",
    cgpaLabel: "CGPA (out of 10)",
    cgpaNote: "Estimate: CGPA × 9.5. Check your board's official conversion rules.",
    attendanceTitle: "Attendance Calculator",
    attendanceIntro: "Check your attendance and classes needed.",
    classesAttended: "Classes attended", totalClasses: "Total classes",
    requiredAttendance: "Required attendance (%)", attendanceOutput: "Current attendance",
    attendanceNeed: "More classes to attend consecutively",
    attendanceImpossible: "A 100% target cannot be reached after any missed classes.",
    attendanceCanMiss: "Classes you can miss and stay eligible",
    attendanceShort: "Attendance is below the required percentage.",
    attendanceMet: "You meet the attendance requirement.",
    ageTitle: "Age Calculator", ageIntro: "Find your exact age in years, months and days.",
    birthDate: "Date of birth", ageOutput: "Your age",
    timetableTitle: "Study Timetable Maker",
    timetableIntro: "Add study sessions and keep them on this device.",
    subject: "Subject / task", day: "Day", startTime: "Start time",
    endTime: "End time", addSession: "Add session", removeSession: "Remove",
    noSessions: "No study sessions added yet.", invalidTime: "End time must be after start time.",
    timetableStorageError: "Could not save your timetable in this browser.",
    countdownTitle: "Exam Countdown", countdownIntro: "See how many days are left until exam day.",
    examName: "Exam name", examDate: "Exam date", countdownButton: "Start countdown",
    countdownDays: "days to go", countdownToday: "Your exam is today.",
    countdownPast: "That exam date has passed.",
    wordTitle: "Word Counter", wordIntro: "Count words and characters as you write.",
    pasteText: "Write or paste your text", wordCount: "words",
    characterCount: "characters", charactersNoSpaces: "characters (excluding spaces)",
    pdfTitle: "PDF Tools",
    pdfIntro: "Select a PDF to preview or print from your browser.",
    choosePdf: "Choose a PDF file", pdfNoFile: "No PDF selected.",
    pdfReady: "Selected", pdfNote: "Files stay on your device. Printing and saving options depend on your browser; editing and merging are not provided here.",
    pdfInvalid: "Please choose a PDF file.",
    openPdf: "Open PDF preview",
    grammarTitle: "English Grammar Checker", grammarIntro: "Get a few basic writing suggestions.",
    pasteEnglish: "Write or paste English text", checkGrammar: "Check text",
    grammarNote: "Basic offline checks only; review suggestions before using them.",
    grammarEmpty: "Enter some text to check.",
    grammarNoSuggestions: "No basic issues found. This is not a full grammar review.",
    grammarSuggestions: "Suggestions", grammarCorrection: "Consider changing",
    scholarshipTitle: "Scholarship Information",
    scholarshipIntro: "Explore official scholarship information and application portals.",
    nspTitle: "National Scholarship Portal",
    nspDescription: "Government scholarship applications and updates ↗",
    educationTitle: "Ministry of Education",
    educationDescription: "Scholarship and education loan information ↗",
    collegeTitle: "College Finder",
    collegeIntro: "Browse official college and accreditation resources.",
    studyInterest: "Course or area of interest (optional)",
    nirfLink: "Browse NIRF rankings ↗", aicteLink: "Visit AICTE ↗",
    collegeNote: "Verify courses, approvals, fees and admission dates with each institution.",
    careerTitle: "Career Guidance",
    careerIntro: "Explore official career information and job resources.",
    ncsTitle: "National Career Service",
    ncsDescription: "Career services, counselling and job search ↗",
    skillTitle: "Skill India Digital Hub",
    skillDescription: "Explore skills, training and learning resources ↗",
    footerNote: "Little tools. A smoother day.",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  hi: {
    homeLink: "होम", calculatorsLink: "कैलकुलेटर", travelLink: "यात्रा", financeLink: "वित्त", governmentLink: "सरकार", onlineToolsLink: "ऑनलाइन टूल्स",
    studentEyebrow: "पढ़ाई में आपका साथी", studentTitleFirst: "समझदारी से पढ़ें,",
    studentTitleSecond: "एक बार में एक टूल।",
    studentIntro: "अंक, कक्षाओं, परीक्षाओं और आगे के सफ़र के लिए उपयोगी टूल।",
    marksTitle: "अंक प्रतिशत कैलकुलेटर", marksIntro: "अंकों को प्रतिशत में बदलें।",
    marksScored: "प्राप्त अंक", totalMarks: "कुल अंक", calculate: "गणना करें",
    marksOutput: "प्रतिशत", cgpaTitle: "CGPA कैलकुलेटर",
    cgpaIntro: "CBSE रूपांतरण गुणांक से प्रतिशत का अनुमान।",
    cgpaLabel: "CGPA (10 में से)",
    cgpaNote: "अनुमान: CGPA × 9.5। अपने बोर्ड के आधिकारिक नियम जाँचें।",
    attendanceTitle: "उपस्थिति कैलकुलेटर",
    attendanceIntro: "उपस्थिति और आवश्यक कक्षाओं की गणना करें।",
    classesAttended: "उपस्थित कक्षाएँ", totalClasses: "कुल कक्षाएँ",
    requiredAttendance: "आवश्यक उपस्थिति (%)", attendanceOutput: "वर्तमान उपस्थिति",
    attendanceNeed: "लगातार उपस्थित होने वाली कक्षाएँ",
    attendanceImpossible: "कक्षा छूटने के बाद 100% उपस्थिति पाना संभव नहीं है।",
    attendanceCanMiss: "पात्र बने रहने के लिए छोड़ सकने वाली कक्षाएँ",
    attendanceShort: "उपस्थिति आवश्यक प्रतिशत से कम है।",
    attendanceMet: "आपकी उपस्थिति आवश्यक सीमा में है।",
    ageTitle: "उम्र कैलकुलेटर", ageIntro: "साल, महीने और दिनों में अपनी सटीक उम्र जानें।",
    birthDate: "जन्म तिथि", ageOutput: "आपकी उम्र",
    timetableTitle: "पढ़ाई का टाइमटेबल",
    timetableIntro: "पढ़ाई के सत्र जोड़ें; वे इसी डिवाइस पर सेव होंगे।",
    subject: "विषय / काम", day: "दिन", startTime: "शुरू होने का समय",
    endTime: "समाप्ति का समय", addSession: "सत्र जोड़ें", removeSession: "हटाएँ",
    noSessions: "अभी कोई पढ़ाई सत्र नहीं जोड़ा गया।",
    invalidTime: "समाप्ति का समय शुरू होने के बाद होना चाहिए।",
    timetableStorageError: "इस ब्राउज़र में टाइमटेबल सेव नहीं हो सका।",
    countdownTitle: "परीक्षा काउंटडाउन", countdownIntro: "परीक्षा तक बचे दिनों की संख्या देखें।",
    examName: "परीक्षा का नाम", examDate: "परीक्षा की तारीख",
    countdownButton: "काउंटडाउन शुरू करें", countdownDays: "दिन बाकी",
    countdownToday: "आपकी परीक्षा आज है।", countdownPast: "परीक्षा की तारीख बीत चुकी है।",
    wordTitle: "शब्द काउंटर", wordIntro: "लिखते समय शब्द और अक्षर गिनें।",
    pasteText: "टेक्स्ट लिखें या पेस्ट करें", wordCount: "शब्द",
    characterCount: "अक्षर", charactersNoSpaces: "अक्षर (स्पेस के बिना)",
    pdfTitle: "PDF टूल्स", pdfIntro: "ब्राउज़र में देखने या प्रिंट करने के लिए PDF चुनें।",
    choosePdf: "PDF फ़ाइल चुनें", pdfNoFile: "कोई PDF नहीं चुनी गई।",
    pdfReady: "चुनी गई", pdfNote: "फ़ाइलें आपके डिवाइस पर रहती हैं। प्रिंट और सेव विकल्प ब्राउज़र पर निर्भर हैं; यहाँ संपादन और मर्ज उपलब्ध नहीं हैं।",
    pdfInvalid: "कृपया PDF फ़ाइल चुनें।",
    openPdf: "PDF प्रीव्यू खोलें",
    grammarTitle: "अंग्रेज़ी व्याकरण जाँच", grammarIntro: "लेखन के लिए कुछ बुनियादी सुझाव पाएँ।",
    pasteEnglish: "अंग्रेज़ी टेक्स्ट लिखें या पेस्ट करें", checkGrammar: "टेक्स्ट जाँचें",
    grammarNote: "केवल बुनियादी ऑफ़लाइन जाँच; सुझावों को उपयोग से पहले परखें।",
    grammarEmpty: "जाँच के लिए कुछ टेक्स्ट लिखें।",
    grammarNoSuggestions: "कोई बुनियादी समस्या नहीं मिली। यह पूरी व्याकरण जाँच नहीं है।",
    grammarSuggestions: "सुझाव", grammarCorrection: "बदलने पर विचार करें",
    scholarshipTitle: "छात्रवृत्ति जानकारी",
    scholarshipIntro: "आधिकारिक छात्रवृत्ति जानकारी और आवेदन पोर्टल देखें।",
    nspTitle: "राष्ट्रीय छात्रवृत्ति पोर्टल",
    nspDescription: "सरकारी छात्रवृत्ति आवेदन और अपडेट ↗",
    educationTitle: "शिक्षा मंत्रालय",
    educationDescription: "छात्रवृत्ति और शिक्षा ऋण की जानकारी ↗",
    collegeTitle: "कॉलेज खोजें",
    collegeIntro: "आधिकारिक कॉलेज और मान्यता संसाधन देखें।",
    studyInterest: "पाठ्यक्रम या रुचि का क्षेत्र (वैकल्पिक)",
    nirfLink: "NIRF रैंकिंग देखें ↗", aicteLink: "AICTE पर जाएँ ↗",
    collegeNote: "पाठ्यक्रम, मान्यता, फीस और प्रवेश तिथियों की पुष्टि संस्थान से करें।",
    careerTitle: "करियर मार्गदर्शन",
    careerIntro: "आधिकारिक करियर जानकारी और नौकरी संसाधन देखें।",
    ncsTitle: "राष्ट्रीय करियर सेवा",
    ncsDescription: "करियर सेवा, परामर्श और नौकरी खोज ↗",
    skillTitle: "स्किल इंडिया डिजिटल हब",
    skillDescription: "कौशल, प्रशिक्षण और सीखने के संसाधन देखें ↗",
    footerNote: "छोटे टूल्स। आसान दिन।",
    days: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"]
  }
};

const languageKey = "daily-india-language";
let language = localStorage.getItem(languageKey) === "hi" ? "hi" : "en";
let timetableLoadFailed = false;
let timetable = loadTimetable();
let pdfUrl = null;
let lastCountdown = null;
let lastGrammar = null;
let lastAttendance = null;
let lastAgeDate = null;

function text(key) {
  return studentCopy[language][key];
}

function setResult(id, message) {
  document.getElementById(id).textContent = message;
}

function formatPercent(value) {
  return new Intl.NumberFormat(language === "hi" ? "hi-IN" : "en-IN", {
    maximumFractionDigits: 2
  }).format(value);
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.body.classList.toggle("lang-hi", language === "hi");
  document.querySelectorAll("[data-student-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.studentI18n);
  });
  document.getElementById("languageSwitch").setAttribute(
    "aria-label",
    language === "en" ? "Switch to Hindi" : "Switch to English"
  );
  const daySelect = document.getElementById("timetableDay");
  const selectedDay = Number(daySelect.value || new Date().getDay());
  daySelect.replaceChildren();
  text("days").forEach((day, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = day;
    option.selected = selectedDay === index;
    daySelect.append(option);
  });
  renderTimetable();
  renderWordCount();
  if (lastAttendance) renderAttendanceResult(lastAttendance);
  if (lastAgeDate) renderAgeResult(lastAgeDate);
  if (lastCountdown) renderCountdownResult(lastCountdown);
  if (lastGrammar) renderGrammarResult(lastGrammar);
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

function loadTimetable() {
  try {
    const saved = JSON.parse(localStorage.getItem("daily-india-study-timetable") || "[]");
    return Array.isArray(saved) ? saved.filter((item) =>
      item && typeof item.id === "string" && typeof item.subject === "string" &&
      Number.isInteger(item.day) && item.day >= 0 && item.day <= 6 &&
      typeof item.start === "string" && typeof item.end === "string"
    ) : [];
  } catch {
    timetableLoadFailed = true;
    return [];
  }
}

function renderTimetable() {
  const list = document.getElementById("timetableList");
  list.replaceChildren();
  document.getElementById("timetableStatus").textContent = timetableLoadFailed ? text("timetableStorageError") : "";
  if (!timetable.length) {
    const empty = document.createElement("li");
    empty.className = "student-note";
    empty.textContent = text("noSessions");
    list.append(empty);
    return;
  }
  timetable.slice().sort((a, b) => a.day - b.day || a.start.localeCompare(b.start)).forEach((session) => {
    const item = document.createElement("li");
    item.className = "timetable-item";
    const details = document.createElement("span");
    details.textContent = `${text("days")[session.day]} · ${session.start}–${session.end} · ${session.subject}`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.dataset.removeSession = session.id;
    remove.textContent = text("removeSession");
    item.append(details, remove);
    list.append(item);
  });
}

document.getElementById("languageSwitch").addEventListener("click", () => {
  language = language === "en" ? "hi" : "en";
  localStorage.setItem(languageKey, language);
  applyLanguage();
});

document.getElementById("marksForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const scored = Number(event.currentTarget.elements.scored.value);
  const total = Number(event.currentTarget.elements.total.value);
  const scoredInput = event.currentTarget.elements.scored;
  scoredInput.setCustomValidity("");
  if (scored > total) {
    scoredInput.setCustomValidity(language === "hi" ? "प्राप्त अंक कुल अंकों से अधिक नहीं हो सकते।" : "Marks scored cannot exceed total marks.");
    scoredInput.reportValidity();
    return;
  }
  setResult("marksResult", `${text("marksOutput")}: ${formatPercent(scored / total * 100)}%`);
});
document.getElementById("marksForm").elements.scored.addEventListener("input", (event) => event.currentTarget.setCustomValidity(""));

document.getElementById("cgpaForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const cgpa = Number(event.currentTarget.elements.cgpa.value);
  setResult("cgpaResult", `${text("marksOutput")}: ${formatPercent(cgpa * 9.5)}%`);
});

function renderAttendanceResult({ attended, total, required }) {
  const percentage = total ? attended / total * 100 : 0;
  const met = percentage >= required;
  const additional = met ? 0 : required === 100
    ? null
    : Math.ceil((required * total - 100 * attended) / (100 - required));
  const canMiss = met ? Math.floor((100 * attended - required * total) / required) : 0;
  const summary = `${text("attendanceOutput")}: ${formatPercent(percentage)}%. ${met
    ? `${text("attendanceMet")} ${text("attendanceCanMiss")}: ${canMiss}.`
    : additional === null
      ? `${text("attendanceShort")} ${text("attendanceImpossible")}`
      : `${text("attendanceShort")} ${text("attendanceNeed")}: ${additional}.`}`;
  setResult("attendanceResult", summary);
}

document.getElementById("attendanceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const attended = Number(form.elements.attended.value);
  const total = Number(form.elements.total.value);
  const required = Number(form.elements.required.value);
  const attendedInput = form.elements.attended;
  attendedInput.setCustomValidity("");
  if (attended > total) {
    attendedInput.setCustomValidity(language === "hi" ? "उपस्थित कक्षाएँ कुल कक्षाओं से अधिक नहीं हो सकतीं।" : "Attended classes cannot exceed total classes.");
    attendedInput.reportValidity();
    return;
  }
  lastAttendance = { attended, total, required };
  renderAttendanceResult(lastAttendance);
});
document.getElementById("attendanceForm").elements.attended.addEventListener("input", (event) => event.currentTarget.setCustomValidity(""));

function renderAgeResult(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const birth = new Date(year, month - 1, day);
  const today = new Date();
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();
  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const ageText = language === "hi"
    ? `${years} साल, ${months} महीने, ${days} दिन`
    : `${years} years, ${months} months, ${days} days`;
  setResult("ageResult", `${text("ageOutput")}: ${ageText}`);
}

document.getElementById("ageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const dateInput = event.currentTarget.elements.birthDate;
  const birth = new Date(`${dateInput.value}T00:00:00`);
  dateInput.setCustomValidity("");
  if (!dateInput.value || Number.isNaN(birth.getTime()) || birth > new Date()) {
    dateInput.setCustomValidity(language === "hi" ? "कृपया पिछली मान्य तारीख दर्ज करें।" : "Enter a valid date in the past.");
    dateInput.reportValidity();
    return;
  }
  lastAgeDate = dateInput.value;
  renderAgeResult(lastAgeDate);
});
document.getElementById("ageForm").elements.birthDate.addEventListener("input", (event) => event.currentTarget.setCustomValidity(""));

document.getElementById("timetableForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const start = form.elements.start.value;
  const end = form.elements.end.value;
  if (end <= start) {
    form.elements.end.setCustomValidity(text("invalidTime"));
    form.elements.end.reportValidity();
    return;
  }
  form.elements.end.setCustomValidity("");
  const entry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    subject: form.elements.subject.value.trim(),
    day: Number(form.elements.day.value),
    start,
    end
  };
  timetable.push(entry);
  try {
    localStorage.setItem("daily-india-study-timetable", JSON.stringify(timetable));
  } catch {
    timetable.pop();
    timetableLoadFailed = true;
    document.getElementById("timetableStatus").textContent = text("timetableStorageError");
    return;
  }
  renderTimetable();
  form.elements.subject.value = "";
});
document.getElementById("timetableForm").elements.end.addEventListener("input", (event) => event.currentTarget.setCustomValidity(""));

document.getElementById("timetableList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-session]");
  if (!button) return;
  const previous = timetable;
  timetable = timetable.filter((session) => session.id !== button.dataset.removeSession);
  try {
    localStorage.setItem("daily-india-study-timetable", JSON.stringify(timetable));
    renderTimetable();
  } catch {
    timetable = previous;
    renderTimetable();
    timetableLoadFailed = true;
    document.getElementById("timetableStatus").textContent = text("timetableStorageError");
  }
});

function renderCountdownResult({ name, date }) {
  const examDay = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const daysLeft = Math.ceil((examDay - today) / 86400000);
  const message = daysLeft < 0
    ? text("countdownPast")
    : daysLeft === 0
      ? `${name}: ${text("countdownToday")}`
      : `${name}: ${new Intl.NumberFormat(language === "hi" ? "hi-IN" : "en-IN").format(daysLeft)} ${text("countdownDays")}`;
  setResult("countdownResult", message);
}

document.getElementById("countdownForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  lastCountdown = { name: form.elements.name.value.trim(), date: form.elements.date.value };
  renderCountdownResult(lastCountdown);
});

function renderWordCount() {
  const content = document.getElementById("wordText").value;
  const words = content.trim() ? content.trim().split(/\s+/u).length : 0;
  const characters = content.length;
  const noSpaces = content.replace(/\s/gu, "").length;
  setResult("wordResult", `${words} ${text("wordCount")} · ${characters} ${text("characterCount")} · ${noSpaces} ${text("charactersNoSpaces")}`);
}

document.getElementById("wordText").addEventListener("input", renderWordCount);

document.getElementById("pdfFile").addEventListener("change", (event) => {
  const file = event.currentTarget.files[0];
  const openLink = document.getElementById("pdfOpen");
  if (pdfUrl) URL.revokeObjectURL(pdfUrl);
  pdfUrl = null;
  openLink.hidden = true;
  if (!file) {
    setResult("pdfResult", text("pdfNoFile"));
    return;
  }
  if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
    event.currentTarget.value = "";
    setResult("pdfResult", text("pdfInvalid"));
    return;
  }
  pdfUrl = URL.createObjectURL(file);
  openLink.href = pdfUrl;
  openLink.hidden = false;
  setResult("pdfResult", `${text("pdfReady")}: ${file.name}`);
});

const basicGrammarRules = [
  { pattern: /\btheir is\b/gi, replacement: "there is" },
  { pattern: /\bthere are a\b/gi, replacement: "there is a / there are" },
  { pattern: /\byour welcome\b/gi, replacement: "you're welcome" },
  { pattern: /\bi\b/g, replacement: "I" },
  { pattern: / {2,}/g, replacement: "a single space" }
];

function renderGrammarResult(suggestions) {
  const list = document.getElementById("grammarResult");
  list.replaceChildren();
  if (!suggestions.length) {
    const item = document.createElement("li");
    item.textContent = text("grammarNoSuggestions");
    list.append(item);
    return;
  }
  suggestions.forEach((suggestion) => {
    const item = document.createElement("li");
    item.textContent = `${text("grammarCorrection")}: “${suggestion.match}” → ${suggestion.replacement}`;
    list.append(item);
  });
}

document.getElementById("grammarButton").addEventListener("click", () => {
  const content = document.getElementById("grammarText").value;
  if (!content.trim()) {
    lastGrammar = [];
    renderGrammarResult(lastGrammar);
    document.getElementById("grammarResult").firstElementChild.textContent = text("grammarEmpty");
    return;
  }
  lastGrammar = basicGrammarRules.flatMap((rule) =>
    Array.from(content.matchAll(rule.pattern), (match) => ({
      match: match[0],
      replacement: rule.replacement
    }))
  );
  renderGrammarResult(lastGrammar);
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
applyLanguage();
renderWordCount();
window.addEventListener("beforeunload", () => {
  if (pdfUrl) URL.revokeObjectURL(pdfUrl);
});
