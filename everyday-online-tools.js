const onlineCopy = {
  en: {
    homeLink: "Home", studentsLink: "Students", travelLink: "Travel", financeLink: "Finance",
    governmentLink: "Government", onlineToolsLink: "Online Tools",
    eyebrow: "EVERYDAY DIGITAL TOOLKIT", titleFirst: "Useful tools,",
    titleSecond: "right in your browser.",
    intro: "Create, convert and keep everyday tasks simple. Your files stay on your device while these tools work.",
    privacyNote: "Files are processed in your browser. Currency conversion fetches public rates online; the amount you enter is not sent.",
    languageStorageError: "Language changed, but this browser could not save your preference.",
    toolsKicker: "TOOLS FOR EVERYDAY USE", toolsTitle: "Explore online tools",
    searchPlaceholder: "Search tools...", searchLabel: "Search everyday online tools",
    noResults: "No tools found. Try another search.", footerNote: "Little tools. A smoother day.",
    qrTitle: "QR Code Generator", qrIntro: "Make a QR code from text or a link.",
    qrContent: "Text or URL", generateQr: "Generate QR code", downloadPng: "Download PNG",
    qrEmpty: "Enter text or a URL first.", qrReady: "QR code generated.",
    qrUnavailable: "QR generator did not load. Check your connection and reload.",
    passwordTitle: "Password Generator", passwordIntro: "Generate a random password on this device.",
    passwordLength: "Length (8–64)", lowercase: "Lowercase", uppercase: "Uppercase",
    numbers: "Numbers", symbols: "Symbols", generatePassword: "Generate password",
    copy: "Copy", passwordOptions: "Select at least one character type.",
    secureUnavailable: "Secure password generation is not available in this browser.",
    passwordReady: "Secure random password generated.", copied: "Copied to clipboard.",
    copyFailed: "Could not copy. Select and copy the text manually.",
    caseTitle: "Text Case Converter", caseIntro: "Change capitalization in your text.",
    enterText: "Enter text", caseStyle: "Case style", caseUpper: "UPPERCASE",
    caseLower: "lowercase", caseTitleCase: "Title Case", caseSentence: "Sentence case",
    convert: "Convert", result: "Result", caseReady: "Text converted.",
    wordTitle: "Word Counter", wordIntro: "Count words, characters and lines.",
    words: "Words", characters: "Characters", lines: "Lines",
    compressTitle: "Image Compressor", imageIntro: "Compress an image locally in your browser.",
    chooseImage: "Choose image", quality: "JPEG quality", compressImage: "Compress & download",
    imageMissing: "Choose an image first.", imageReady: "Image downloaded.",
    imageFailed: "Could not process this image. Try another file.",
    resizeTitle: "Image Resizer", resizeIntro: "Resize an image while preserving its proportions.",
    widthPx: "Width (px)", heightPx: "Height (px)", resizeDownload: "Resize & download",
    resizeMissing: "Choose an image and enter a valid width or height.",
    mergeTitle: "PDF Merger", mergeIntro: "Combine PDFs in the selected order.",
    choosePdfs: "Choose PDF files", mergeDownload: "Merge & download",
    pdfMissing: "Choose at least two PDF files.", pdfReady: "PDF created and downloaded.",
    pdfUnavailable: "PDF tools did not load. Check your connection and reload.",
    pdfFailed: "Could not process the PDF. Make sure the file is valid and not password-protected.",
    splitTitle: "PDF Splitter", splitIntro: "Save selected pages to a new PDF.",
    choosePdf: "Choose PDF file", pageSelection: "Pages (e.g. 1, 3-5)",
    splitDownload: "Extract & download", pageSelectionError: "Enter valid page numbers or ranges.",
    pageOutOfRange: "A selected page is outside this PDF's page range.",
    pdfImageTitle: "PDF to Image", pdfImageIntro: "Render a PDF page as a PNG image.",
    pageNumber: "Page number", convertDownload: "Convert & download PNG",
    pdfImageReady: "PNG image downloaded.", pdfImageFailed: "Could not render this PDF page.",
    unitTitle: "Unit Converter", unitIntro: "Convert common length, weight and temperature units.",
    unitType: "Measurement", length: "Length", weight: "Weight",
    temperature: "Temperature", volume: "Volume", from: "From", to: "To",
    value: "Value", unitResult: "Result", invalidNumber: "Enter a valid number.",
    currencyTitle: "Currency Converter", currencyIntro: "Convert using the latest available reference rate.",
    amount: "Amount", currencyNote: "Rates are indicative, may be delayed, and are not transaction quotes. Currency codes are looked up online; your amount stays in this browser.",
    currencyLoading: "Loading reference rate…", currencyUnavailable: "Could not load a reference rate. Check your internet connection and try again.",
    currencyResult: "Reference result", rateAsOf: "Rate date",
    timezoneTitle: "Time Zone Converter", timezoneIntro: "Convert a local date and time between time zones.",
    dateTime: "Date and time", fromZone: "From time zone", toZone: "To time zone",
    timezoneInvalid: "Choose a valid date and time.", timezoneResult: "Converted time",
    stopwatchTitle: "Stopwatch", stopwatchIntro: "Measure elapsed time and record laps.",
    start: "Start", pause: "Pause", lap: "Lap", reset: "Reset", lapLabel: "Lap",
    timerTitle: "Timer", timerIntro: "Start a countdown for a chosen duration.",
    minutes: "Minutes", seconds: "Seconds", timerFinished: "Time is up!",
    timerInvalid: "Enter a duration greater than zero.",
    calendarTitle: "Calendar", calendarIntro: "View dates and weekdays for any month.",
    previousMonth: "Previous month", nextMonth: "Next month",
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    units: {
      length: [["Millimetre (mm)", 0.001], ["Centimetre (cm)", 0.01], ["Metre (m)", 1], ["Kilometre (km)", 1000], ["Inch (in)", 0.0254], ["Foot (ft)", 0.3048], ["Mile (mi)", 1609.344]],
      weight: [["Milligram (mg)", 0.000001], ["Gram (g)", 0.001], ["Kilogram (kg)", 1], ["Tonne (t)", 1000], ["Ounce (oz)", 0.028349523125], ["Pound (lb)", 0.45359237]],
      temperature: [["Celsius (°C)", "c"], ["Fahrenheit (°F)", "f"], ["Kelvin (K)", "k"]],
      volume: [["Millilitre (ml)", 0.001], ["Litre (L)", 1], ["US gallon (gal)", 3.785411784], ["Cup (US)", 0.2365882365]]
    }
  },
  hi: {
    homeLink: "होम", studentsLink: "छात्र", travelLink: "यात्रा", financeLink: "वित्त",
    governmentLink: "सरकार", onlineToolsLink: "ऑनलाइन टूल्स",
    eyebrow: "रोज़मर्रा के डिजिटल टूलकिट", titleFirst: "उपयोगी टूल,", titleSecond: "सीधे आपके ब्राउज़र में।",
    intro: "रोज़मर्रा के काम बनाएँ, बदलें और आसान करें। इन टूल्स में आपकी फ़ाइलें इसी डिवाइस पर रहती हैं।",
    privacyNote: "फ़ाइलें आपके ब्राउज़र में प्रोसेस होती हैं। मुद्रा दरें ऑनलाइन ली जाती हैं; आपकी दर्ज राशि नहीं भेजी जाती।",
    languageStorageError: "भाषा बदल गई, लेकिन ब्राउज़र आपकी पसंद सेव नहीं कर सका।",
    toolsKicker: "रोज़मर्रा के उपयोग के टूल", toolsTitle: "ऑनलाइन टूल देखें",
    searchPlaceholder: "टूल खोजें...", searchLabel: "रोज़मर्रा के ऑनलाइन टूल खोजें",
    noResults: "कोई टूल नहीं मिला। दूसरा शब्द खोजें।", footerNote: "छोटे टूल। दिन थोड़ा आसान।",
    qrTitle: "QR कोड जनरेटर", qrIntro: "टेक्स्ट या लिंक से QR कोड बनाएँ।",
    qrContent: "टेक्स्ट या URL", generateQr: "QR कोड बनाएँ", downloadPng: "PNG डाउनलोड करें",
    qrEmpty: "पहले टेक्स्ट या URL दर्ज करें।", qrReady: "QR कोड बन गया।",
    qrUnavailable: "QR जनरेटर लोड नहीं हुआ। कनेक्शन जाँचकर पेज फिर खोलें।",
    passwordTitle: "पासवर्ड जनरेटर", passwordIntro: "इस डिवाइस पर यादृच्छिक पासवर्ड बनाएँ।",
    passwordLength: "लंबाई (8–64)", lowercase: "छोटे अक्षर", uppercase: "बड़े अक्षर",
    numbers: "अंक", symbols: "चिह्न", generatePassword: "पासवर्ड बनाएँ",
    copy: "कॉपी करें", passwordOptions: "कम-से-कम एक अक्षर प्रकार चुनें।",
    secureUnavailable: "इस ब्राउज़र में सुरक्षित पासवर्ड बनाना उपलब्ध नहीं है।",
    passwordReady: "सुरक्षित यादृच्छिक पासवर्ड बना।", copied: "क्लिपबोर्ड पर कॉपी हुआ।",
    copyFailed: "कॉपी नहीं हो सका। टेक्स्ट चुनकर मैन्युअल रूप से कॉपी करें।",
    caseTitle: "टेक्स्ट केस कन्वर्टर", caseIntro: "टेक्स्ट के बड़े-छोटे अक्षर बदलें।",
    enterText: "टेक्स्ट दर्ज करें", caseStyle: "अक्षर शैली", caseUpper: "बड़े अक्षर",
    caseLower: "छोटे अक्षर", caseTitleCase: "हर शब्द का पहला अक्षर बड़ा",
    caseSentence: "वाक्य का पहला अक्षर बड़ा", convert: "बदलें", result: "नतीजा",
    caseReady: "टेक्स्ट बदल गया।", wordTitle: "वर्ड काउंटर",
    wordIntro: "शब्द, अक्षर और पंक्तियाँ गिनें।", words: "शब्द",
    characters: "अक्षर", lines: "पंक्तियाँ",
    compressTitle: "इमेज कंप्रेसर", imageIntro: "ब्राउज़र में ही इमेज को छोटा करें।",
    chooseImage: "इमेज चुनें", quality: "JPEG गुणवत्ता", compressImage: "कंप्रेस और डाउनलोड",
    imageMissing: "पहले इमेज चुनें।", imageReady: "इमेज डाउनलोड हुई।",
    imageFailed: "इमेज प्रोसेस नहीं हुई। दूसरी फ़ाइल आज़माएँ।",
    resizeTitle: "इमेज रिसाइज़र", resizeIntro: "अनुपात बनाए रखते हुए इमेज का आकार बदलें।",
    widthPx: "चौड़ाई (px)", heightPx: "ऊँचाई (px)", resizeDownload: "आकार बदलें और डाउनलोड करें",
    resizeMissing: "इमेज चुनें और मान्य चौड़ाई या ऊँचाई दर्ज करें।",
    mergeTitle: "PDF मर्जर", mergeIntro: "चुने गए क्रम में PDF जोड़ें।",
    choosePdfs: "PDF फ़ाइलें चुनें", mergeDownload: "मर्ज करके डाउनलोड करें",
    pdfMissing: "कम-से-कम दो PDF फ़ाइलें चुनें।", pdfReady: "PDF बनकर डाउनलोड हुई।",
    pdfUnavailable: "PDF टूल लोड नहीं हुए। कनेक्शन जाँचकर पेज फिर खोलें।",
    pdfFailed: "PDF प्रोसेस नहीं हुई। मान्य और बिना पासवर्ड वाली फ़ाइल जाँचें।",
    splitTitle: "PDF स्प्लिटर", splitIntro: "चुने हुए पेज नई PDF में सेव करें।",
    choosePdf: "PDF फ़ाइल चुनें", pageSelection: "पेज (जैसे 1, 3-5)",
    splitDownload: "निकालें और डाउनलोड करें", pageSelectionError: "मान्य पेज नंबर या रेंज दर्ज करें।",
    pageOutOfRange: "चुना गया पेज PDF की सीमा से बाहर है।",
    pdfImageTitle: "PDF से इमेज", pdfImageIntro: "PDF पेज को PNG इमेज में बदलें।",
    pageNumber: "पेज नंबर", convertDownload: "बदलें और PNG डाउनलोड करें",
    pdfImageReady: "PNG इमेज डाउनलोड हुई।", pdfImageFailed: "PDF पेज रेंडर नहीं हुआ।",
    unitTitle: "यूनिट कन्वर्टर", unitIntro: "लंबाई, वज़न और तापमान की आम इकाइयाँ बदलें।",
    unitType: "माप", length: "लंबाई", weight: "वज़न",
    temperature: "तापमान", volume: "आयतन", from: "से", to: "में",
    value: "मान", unitResult: "नतीजा", invalidNumber: "मान्य संख्या दर्ज करें।",
    currencyTitle: "मुद्रा कन्वर्टर", currencyIntro: "उपलब्ध नवीनतम संदर्भ दर से बदलें।",
    amount: "राशि", currencyNote: "दरें अनुमानित या विलंबित हो सकती हैं, लेन-देन का भाव नहीं। मुद्रा कोड ऑनलाइन देखे जाते हैं; आपकी राशि इसी ब्राउज़र में रहती है।",
    currencyLoading: "संदर्भ दर लोड हो रही है…", currencyUnavailable: "संदर्भ दर नहीं मिली। इंटरनेट जाँचकर फिर कोशिश करें।",
    currencyResult: "संदर्भ नतीजा", rateAsOf: "दर की तारीख",
    timezoneTitle: "टाइम ज़ोन कन्वर्टर", timezoneIntro: "एक समय क्षेत्र का स्थानीय समय दूसरे में बदलें।",
    dateTime: "तारीख और समय", fromZone: "शुरुआती टाइम ज़ोन", toZone: "लक्ष्य टाइम ज़ोन",
    timezoneInvalid: "मान्य तारीख और समय चुनें।", timezoneResult: "बदला हुआ समय",
    stopwatchTitle: "स्टॉपवॉच", stopwatchIntro: "बीता समय नापें और लैप रिकॉर्ड करें।",
    start: "शुरू", pause: "रोकें", lap: "लैप", reset: "रीसेट", lapLabel: "लैप",
    timerTitle: "टाइमर", timerIntro: "चुनी अवधि का काउंटडाउन शुरू करें।",
    minutes: "मिनट", seconds: "सेकंड", timerFinished: "समय पूरा हुआ!",
    timerInvalid: "शून्य से अधिक समय दर्ज करें।",
    calendarTitle: "कैलेंडर", calendarIntro: "किसी भी महीने की तारीखें और दिन देखें।",
    previousMonth: "पिछला महीना", nextMonth: "अगला महीना",
    months: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
    weekdays: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    units: {
      length: [["मिलीमीटर (mm)", 0.001], ["सेंटीमीटर (cm)", 0.01], ["मीटर (m)", 1], ["किलोमीटर (km)", 1000], ["इंच (in)", 0.0254], ["फ़ुट (ft)", 0.3048], ["मील (mi)", 1609.344]],
      weight: [["मिलीग्राम (mg)", 0.000001], ["ग्राम (g)", 0.001], ["किलोग्राम (kg)", 1], ["टन (t)", 1000], ["औंस (oz)", 0.028349523125], ["पाउंड (lb)", 0.45359237]],
      temperature: [["सेल्सियस (°C)", "c"], ["फ़ारेनहाइट (°F)", "f"], ["केल्विन (K)", "k"]],
      volume: [["मिलीलीटर (ml)", 0.001], ["लीटर (L)", 1], ["US गैलन (gal)", 3.785411784], ["कप (US)", 0.2365882365]]
    }
  }
};

const languageKey = "daily-india-language";
const currencyCodes = ["INR", "USD", "EUR", "GBP", "JPY", "AED", "CAD", "AUD"];
const timeZones = [
  "Asia/Kolkata", "Asia/Dubai", "Asia/Singapore", "Asia/Tokyo", "Europe/London",
  "Europe/Paris", "America/New_York", "America/Los_Angeles", "Australia/Sydney"
];
let language = "en";
let calendarDate = new Date();
let stopwatchStartedAt = 0;
let stopwatchElapsed = 0;
let stopwatchInterval = null;
let timerDeadline = 0;
let timerRemaining = 0;
let timerInterval = null;
const search = document.getElementById("onlineToolSearch");
const toolsGrid = document.getElementById("onlineToolsGrid");

function t(key) {
  return onlineCopy[language][key];
}

function formatNumber(value, maximumFractionDigits = 4) {
  return new Intl.NumberFormat(language === "hi" ? "hi-IN" : "en-IN", { maximumFractionDigits }).format(value);
}

function setStatus(id, message) {
  document.getElementById(id).textContent = message;
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.body.classList.toggle("lang-hi", language === "hi");
  document.querySelectorAll("[data-online-i18n]").forEach((element) => {
    const value = t(element.dataset.onlineI18n);
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-online-placeholder]").forEach((element) => {
    const value = t(element.dataset.onlinePlaceholder);
    if (value) element.placeholder = value;
  });
  document.getElementById("onlineToolSearch").setAttribute("aria-label", t("searchLabel"));
  document.getElementById("languageSwitch").setAttribute("aria-label", language === "en" ? "Switch to Hindi" : "Switch to English");
  document.getElementById("calendarPrevious").setAttribute("aria-label", t("previousMonth"));
  document.getElementById("calendarNext").setAttribute("aria-label", t("nextMonth"));
  document.getElementById("stopwatchStart").textContent = stopwatchInterval ? t("pause") : t("start");
  populateUnits();
  renderCalendar();
  filterTools();
}

function filterTools() {
  const query = search.value.trim().toLocaleLowerCase();
  let visible = 0;
  toolsGrid.querySelectorAll("[data-tool-card]").forEach((card) => {
    const matches = !query || card.textContent.toLocaleLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  });
  document.getElementById("onlineToolEmpty").hidden = visible > 0;
  document.getElementById("onlineToolCount").textContent = `${visible} ${language === "hi" ? "टूल" : "tools"}`;
}

function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function copyText(value, statusId) {
  try {
    await navigator.clipboard.writeText(value);
    setStatus(statusId, t("copied"));
  } catch {
    setStatus(statusId, t("copyFailed"));
  }
}

function secureIndex(max) {
  const range = 0x100000000;
  const limit = range - (range % max);
  const buffer = new Uint32Array(1);
  do {
    globalThis.crypto.getRandomValues(buffer);
  } while (buffer[0] >= limit);
  return buffer[0] % max;
}

document.getElementById("generateQr").addEventListener("click", async () => {
  const text = document.getElementById("qrText").value.trim();
  const canvas = document.getElementById("qrCanvas");
  if (!text) {
    setStatus("qrStatus", t("qrEmpty"));
    return;
  }
  if (!window.QRCode) {
    setStatus("qrStatus", t("qrUnavailable"));
    return;
  }
  try {
    await QRCode.toCanvas(canvas, text, { width: 256, margin: 2, errorCorrectionLevel: "M" });
    document.getElementById("qrOutput").hidden = false;
    setStatus("qrStatus", t("qrReady"));
  } catch {
    setStatus("qrStatus", t("qrUnavailable"));
  }
});

document.getElementById("downloadQr").addEventListener("click", () => {
  document.getElementById("qrCanvas").toBlob((blob) => {
    if (blob) download(blob, "daily-india-qr.png");
  }, "image/png");
});

document.getElementById("generatePassword").addEventListener("click", () => {
  const length = Number(document.getElementById("passwordLength").value);
  const groups = [
    ["abcdefghijklmnopqrstuvwxyz", "passwordLower"],
    ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "passwordUpper"],
    ["0123456789", "passwordNumbers"],
    ["!@#$%^&*()-_=+[]{};:,.?", "passwordSymbols"]
  ].filter(([, id]) => document.getElementById(id).checked).map(([chars]) => chars);
  if (!Number.isInteger(length) || length < 8 || length > 64 || groups.length === 0) {
    setStatus("passwordStatus", t("passwordOptions"));
    return;
  }
  if (!globalThis.crypto || !globalThis.crypto.getRandomValues) {
    setStatus("passwordStatus", t("secureUnavailable"));
    return;
  }
  const chars = groups.map((group) => group[secureIndex(group.length)]);
  const allChars = groups.join("");
  while (chars.length < length) chars.push(allChars[secureIndex(allChars.length)]);
  for (let index = chars.length - 1; index > 0; index -= 1) {
    const swapIndex = secureIndex(index + 1);
    [chars[index], chars[swapIndex]] = [chars[swapIndex], chars[index]];
  }
  document.getElementById("passwordOutput").textContent = chars.join("");
  setStatus("passwordStatus", t("passwordReady"));
});

document.getElementById("copyPassword").addEventListener("click", () => {
  const text = document.getElementById("passwordOutput").textContent;
  if (text) copyText(text, "passwordStatus");
});

document.getElementById("convertCase").addEventListener("click", () => {
  const input = document.getElementById("caseInput").value;
  const style = document.getElementById("caseStyle").value;
  let output = input;
  if (style === "upper") output = input.toLocaleUpperCase();
  if (style === "lower") output = input.toLocaleLowerCase();
  if (style === "title") output = input.toLocaleLowerCase().replace(/(^|[\s([{])([\p{L}\p{N}])/gu, (_, prefix, char) => prefix + char.toLocaleUpperCase());
  if (style === "sentence") output = input.toLocaleLowerCase().replace(/(^\s*|[.!?]\s+)([\p{L}\p{N}])/gu, (_, prefix, char) => prefix + char.toLocaleUpperCase());
  document.getElementById("caseOutput").value = output;
  setStatus("caseStatus", t("caseReady"));
});

document.getElementById("copyCase").addEventListener("click", () => {
  const text = document.getElementById("caseOutput").value;
  if (text) copyText(text, "caseStatus");
});

document.getElementById("wordInput").addEventListener("input", (event) => {
  const text = event.target.value;
  document.getElementById("wordCount").textContent = text.trim() ? text.trim().split(/\s+/u).length : 0;
  document.getElementById("characterCount").textContent = text.length;
  document.getElementById("lineCount").textContent = text ? text.split(/\r\n|\r|\n/u).length : 0;
});

document.getElementById("imageQuality").addEventListener("input", (event) => {
  document.getElementById("qualityValue").value = `${event.target.value}%`;
});

function loadImage(file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const url = URL.createObjectURL(file);
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Unsupported image"));
    };
    image.src = url;
  });
}

function imageBlob(canvas, quality = 0.9) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Image encoding failed")), "image/jpeg", quality);
  });
}

document.getElementById("compressImage").addEventListener("click", async () => {
  const file = document.getElementById("compressFile").files[0];
  if (!file) {
    setStatus("compressStatus", t("imageMissing"));
    return;
  }
  try {
    const image = await loadImage(file);
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    canvas.getContext("2d").drawImage(image, 0, 0);
    download(await imageBlob(canvas, Number(document.getElementById("imageQuality").value) / 100), "compressed-image.jpg");
    setStatus("compressStatus", t("imageReady"));
  } catch {
    setStatus("compressStatus", t("imageFailed"));
  }
});

let sourceImageSize = null;
document.getElementById("resizeFile").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const image = await loadImage(file);
    sourceImageSize = { width: image.naturalWidth, height: image.naturalHeight };
    document.getElementById("resizeWidth").value = image.naturalWidth;
    document.getElementById("resizeHeight").value = image.naturalHeight;
  } catch {
    setStatus("resizeStatus", t("imageFailed"));
  }
});

document.getElementById("resizeImage").addEventListener("click", async () => {
  const file = document.getElementById("resizeFile").files[0];
  const widthInput = document.getElementById("resizeWidth");
  const heightInput = document.getElementById("resizeHeight");
  const desiredWidth = Number(widthInput.value);
  const desiredHeight = Number(heightInput.value);
  if (!file || (!desiredWidth && !desiredHeight) || desiredWidth < 0 || desiredHeight < 0) {
    setStatus("resizeStatus", t("resizeMissing"));
    return;
  }
  try {
    const image = await loadImage(file);
    const width = desiredWidth;
    const height = desiredHeight;
    if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1 || width > 12000 || height > 12000) {
      setStatus("resizeStatus", t("resizeMissing"));
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(image, 0, 0, width, height);
    download(await imageBlob(canvas), "resized-image.jpg");
    setStatus("resizeStatus", t("imageReady"));
  } catch {
    setStatus("resizeStatus", t("imageFailed"));
  }
});

document.getElementById("resizeWidth").addEventListener("input", () => {
  const width = Number(document.getElementById("resizeWidth").value);
  if (sourceImageSize && width > 0) {
    document.getElementById("resizeHeight").value = Math.max(1, Math.round(width * sourceImageSize.height / sourceImageSize.width));
  }
});
document.getElementById("resizeHeight").addEventListener("input", () => {
  const height = Number(document.getElementById("resizeHeight").value);
  if (sourceImageSize && height > 0) {
    document.getElementById("resizeWidth").value = Math.max(1, Math.round(height * sourceImageSize.width / sourceImageSize.height));
  }
});

async function readPdf(file) {
  if (!window.PDFLib) throw new Error("PDF library unavailable");
  return PDFLib.PDFDocument.load(await file.arrayBuffer());
}

document.getElementById("mergePdfs").addEventListener("click", async () => {
  const files = Array.from(document.getElementById("mergeFiles").files);
  if (files.length < 2) {
    setStatus("mergeStatus", t("pdfMissing"));
    return;
  }
  if (!window.PDFLib) {
    setStatus("mergeStatus", t("pdfUnavailable"));
    return;
  }
  try {
    const merged = await PDFLib.PDFDocument.create();
    for (const file of files) {
      const source = await readPdf(file);
      const pages = await merged.copyPages(source, source.getPageIndices());
      pages.forEach((page) => merged.addPage(page));
    }
    download(new Blob([await merged.save()], { type: "application/pdf" }), "merged.pdf");
    setStatus("mergeStatus", t("pdfReady"));
  } catch {
    setStatus("mergeStatus", t("pdfFailed"));
  }
});

function parsePageSelection(value) {
  const pages = new Set();
  const parts = value.split(",").map((part) => part.trim());
  if (!value.trim() || parts.some((part) => !/^\d+(?:\s*-\s*\d+)?$/u.test(part))) return null;
  for (const part of parts) {
    const [start, end = start] = part.split("-").map((number) => Number(number.trim()));
    if (start < 1 || end < start || end - start > 1000) return null;
    for (let page = start; page <= end; page += 1) pages.add(page - 1);
  }
  return [...pages];
}

document.getElementById("splitPdf").addEventListener("click", async () => {
  const file = document.getElementById("splitFile").files[0];
  const selection = parsePageSelection(document.getElementById("splitPages").value);
  if (!file || !selection) {
    setStatus("splitStatus", file ? t("pageSelectionError") : t("pdfMissing"));
    return;
  }
  if (!window.PDFLib) {
    setStatus("splitStatus", t("pdfUnavailable"));
    return;
  }
  try {
    const source = await readPdf(file);
    if (selection.some((page) => page >= source.getPageCount())) {
      setStatus("splitStatus", t("pageOutOfRange"));
      return;
    }
    const extracted = await PDFLib.PDFDocument.create();
    const pages = await extracted.copyPages(source, selection);
    pages.forEach((page) => extracted.addPage(page));
    download(new Blob([await extracted.save()], { type: "application/pdf" }), "selected-pages.pdf");
    setStatus("splitStatus", t("pdfReady"));
  } catch {
    setStatus("splitStatus", t("pdfFailed"));
  }
});

document.getElementById("convertPdfImage").addEventListener("click", async () => {
  const file = document.getElementById("pdfImageFile").files[0];
  const pageNumber = Number(document.getElementById("pdfImagePage").value);
  if (!file || !Number.isInteger(pageNumber) || pageNumber < 1) {
    setStatus("pdfImageStatus", file ? t("pageSelectionError") : t("pdfMissing"));
    return;
  }
  if (!window.pdfjsLib) {
    setStatus("pdfImageStatus", t("pdfUnavailable"));
    return;
  }
  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
    const pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    if (pageNumber > pdf.numPages) {
      setStatus("pdfImageStatus", t("pageOutOfRange"));
      return;
    }
    const page = await pdf.getPage(pageNumber);
    const viewport = page.getViewport({ scale: 2 });
    const canvas = document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
    await new Promise((resolve, reject) => canvas.toBlob((blob) => {
      if (blob) {
        download(blob, `pdf-page-${pageNumber}.png`);
        resolve();
      } else reject(new Error("Could not encode page"));
    }, "image/png"));
    setStatus("pdfImageStatus", t("pdfImageReady"));
  } catch {
    setStatus("pdfImageStatus", t("pdfImageFailed"));
  }
});

function populateUnits() {
  const type = document.getElementById("unitType").value;
  const units = t("units")[type];
  const from = document.getElementById("unitFrom");
  const to = document.getElementById("unitTo");
  const previousFrom = from.value;
  const previousTo = to.value;
  from.replaceChildren();
  to.replaceChildren();
  units.forEach(([label, value], index) => {
    const fromOption = new Option(label, String(index));
    const toOption = new Option(label, String(index));
    from.add(fromOption);
    to.add(toOption);
  });
  from.value = [...from.options].some((option) => option.value === previousFrom)
    ? previousFrom : type === "temperature" ? "0" : type === "volume" ? "1" : "2";
  to.value = [...to.options].some((option) => option.value === previousTo)
    ? previousTo : type === "temperature" ? "1" : String(Math.min(3, units.length - 1));
}

function convertTemperature(value, from, to) {
  const celsius = from === "c" ? value : from === "f" ? (value - 32) * 5 / 9 : value - 273.15;
  return to === "c" ? celsius : to === "f" ? celsius * 9 / 5 + 32 : celsius + 273.15;
}

document.getElementById("unitType").addEventListener("change", populateUnits);
document.getElementById("convertUnit").addEventListener("click", () => {
  const value = Number(document.getElementById("unitValue").value);
  if (!Number.isFinite(value)) {
    setStatus("unitStatus", t("invalidNumber"));
    return;
  }
  const type = document.getElementById("unitType").value;
  const units = t("units")[type];
  const fromIndex = Number(document.getElementById("unitFrom").value);
  const toIndex = Number(document.getElementById("unitTo").value);
  const result = type === "temperature"
    ? convertTemperature(value, units[fromIndex][1], units[toIndex][1])
    : value * units[fromIndex][1] / units[toIndex][1];
  if (type === "temperature" && convertTemperature(value, units[fromIndex][1], "k") < 0) {
    setStatus("unitStatus", t("invalidNumber"));
    return;
  }
  setStatus("unitStatus", `${t("unitResult")}: ${formatNumber(result)} ${units[toIndex][0]}`);
});

function populateCurrencies() {
  ["currencyFrom", "currencyTo"].forEach((id) => {
    const select = document.getElementById(id);
    const previous = select.value;
    select.replaceChildren(...currencyCodes.map((code) => new Option(code, code)));
    if (currencyCodes.includes(previous)) select.value = previous;
  });
  document.getElementById("currencyFrom").value ||= "INR";
  document.getElementById("currencyTo").value ||= "USD";
}

document.getElementById("convertCurrency").addEventListener("click", async () => {
  const amount = Number(document.getElementById("currencyAmount").value);
  const from = document.getElementById("currencyFrom").value;
  const to = document.getElementById("currencyTo").value;
  if (!Number.isFinite(amount) || amount < 0) {
    setStatus("currencyStatus", t("invalidNumber"));
    return;
  }
  if (from === to) {
    setStatus("currencyStatus", `${t("currencyResult")}: ${formatNumber(amount, 2)} ${to}`);
    return;
  }
  const button = document.getElementById("convertCurrency");
  button.disabled = true;
  setStatus("currencyStatus", t("currencyLoading"));
  try {
    const response = await fetch(`https://api.frankfurter.app/latest?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`);
    if (!response.ok) throw new Error(`Rate service returned ${response.status}`);
    const data = await response.json();
    const rate = data.rates && data.rates[to];
    if (!Number.isFinite(rate)) throw new Error("Rate not available");
    setStatus("currencyStatus", `${t("currencyResult")}: ${formatNumber(amount * rate, 2)} ${to} · ${t("rateAsOf")}: ${data.date} (${formatNumber(rate, 6)} ${to}/${from})`);
  } catch {
    setStatus("currencyStatus", t("currencyUnavailable"));
  } finally {
    button.disabled = false;
  }
});

function zonedParts(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23"
  }).formatToParts(date);
  return Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, Number(part.value)]));
}

function localTimeInZone(value, timeZone) {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/u.exec(value);
  if (!match) return null;
  const wanted = match.slice(1).map(Number);
  const desiredUtc = Date.UTC(wanted[0], wanted[1] - 1, wanted[2], wanted[3], wanted[4]);
  let candidate = desiredUtc;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const parts = zonedParts(new Date(candidate), timeZone);
    const observedUtc = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute);
    const difference = desiredUtc - observedUtc;
    candidate += difference;
    if (difference === 0) break;
  }
  const finalParts = zonedParts(new Date(candidate), timeZone);
  if ([finalParts.year, finalParts.month, finalParts.day, finalParts.hour, finalParts.minute].some((part, index) => part !== wanted[index])) return null;
  return new Date(candidate);
}

function populateTimeZones() {
  const zoneNames = timeZones;
  ["timezoneFrom", "timezoneTo"].forEach((id) => {
    const select = document.getElementById(id);
    const previous = select.value;
    select.replaceChildren(...zoneNames.map((zone) => new Option(zone.replaceAll("_", " "), zone)));
    if (zoneNames.includes(previous)) select.value = previous;
  });
  document.getElementById("timezoneFrom").value ||= "Asia/Kolkata";
  document.getElementById("timezoneTo").value ||= "Europe/London";
}

document.getElementById("convertTimezone").addEventListener("click", () => {
  const value = document.getElementById("timezoneDate").value;
  const from = document.getElementById("timezoneFrom").value;
  const to = document.getElementById("timezoneTo").value;
  const instant = localTimeInZone(value, from);
  if (!instant) {
    setStatus("timezoneStatus", t("timezoneInvalid"));
    return;
  }
  const formatted = new Intl.DateTimeFormat(language === "hi" ? "hi-IN" : "en-IN", {
    timeZone: to, weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "numeric", minute: "2-digit", timeZoneName: "short"
  }).format(instant);
  setStatus("timezoneStatus", `${t("timezoneResult")}: ${formatted}`);
});

function formatStopwatch(milliseconds) {
  const hundredths = Math.floor(milliseconds / 10) % 100;
  const seconds = Math.floor(milliseconds / 1000) % 60;
  const minutes = Math.floor(milliseconds / 60000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(hundredths).padStart(2, "0")}`;
}

function updateStopwatch() {
  const elapsed = stopwatchElapsed + (stopwatchInterval ? performance.now() - stopwatchStartedAt : 0);
  document.getElementById("stopwatchDisplay").textContent = formatStopwatch(elapsed);
}

document.getElementById("stopwatchStart").addEventListener("click", (event) => {
  if (stopwatchInterval) {
    stopwatchElapsed += performance.now() - stopwatchStartedAt;
    window.clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  } else {
    stopwatchStartedAt = performance.now();
    stopwatchInterval = window.setInterval(updateStopwatch, 40);
  }
  event.currentTarget.textContent = stopwatchInterval ? t("pause") : t("start");
  updateStopwatch();
});

document.getElementById("stopwatchLap").addEventListener("click", () => {
  if (!stopwatchInterval) return;
  const lap = document.createElement("li");
  lap.textContent = `${t("lapLabel")} ${document.getElementById("stopwatchLaps").children.length + 1}: ${formatStopwatch(stopwatchElapsed + performance.now() - stopwatchStartedAt)}`;
  document.getElementById("stopwatchLaps").prepend(lap);
});

document.getElementById("stopwatchReset").addEventListener("click", () => {
  window.clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchElapsed = 0;
  document.getElementById("stopwatchStart").textContent = t("start");
  document.getElementById("stopwatchLaps").replaceChildren();
  updateStopwatch();
});

function displayTimer(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));
  document.getElementById("timerDisplay").textContent = `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

document.getElementById("timerStart").addEventListener("click", (event) => {
  if (timerInterval) {
    timerRemaining = Math.max(0, timerDeadline - Date.now());
    displayTimer(timerRemaining);
    window.clearInterval(timerInterval);
    timerInterval = null;
    event.currentTarget.textContent = t("start");
    return;
  }
  const duration = timerRemaining || ((Number(document.getElementById("timerMinutes").value) * 60 + Number(document.getElementById("timerSeconds").value)) * 1000);
  if (!Number.isFinite(duration) || duration <= 0) {
    setStatus("timerStatus", t("timerInvalid"));
    return;
  }
  timerDeadline = Date.now() + duration;
  timerInterval = window.setInterval(() => {
    timerRemaining = Math.max(0, timerDeadline - Date.now());
    displayTimer(timerRemaining);
    if (timerRemaining === 0) {
      window.clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById("timerStart").textContent = t("start");
      setStatus("timerStatus", t("timerFinished"));
    }
  }, 200);
  event.currentTarget.textContent = t("pause");
  setStatus("timerStatus", "");
});

document.getElementById("timerReset").addEventListener("click", () => {
  window.clearInterval(timerInterval);
  timerInterval = null;
  timerRemaining = 0;
  document.getElementById("timerStart").textContent = t("start");
  setStatus("timerStatus", "");
  const duration = (Number(document.getElementById("timerMinutes").value) * 60 + Number(document.getElementById("timerSeconds").value)) * 1000;
  displayTimer(Number.isFinite(duration) ? duration : 0);
});

["timerMinutes", "timerSeconds"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    if (!timerInterval && !timerRemaining) {
      const duration = (Number(document.getElementById("timerMinutes").value) * 60 + Number(document.getElementById("timerSeconds").value)) * 1000;
      displayTimer(Number.isFinite(duration) ? duration : 0);
    }
  });
});

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  document.getElementById("calendarMonth").textContent = `${t("months")[month]} ${year}`;
  const grid = document.getElementById("calendarGrid");
  grid.replaceChildren();
  t("weekdays").forEach((weekday) => {
    const heading = document.createElement("span");
    heading.className = "online-calendar-weekday";
    heading.textContent = weekday;
    grid.append(heading);
  });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  for (let blank = 0; blank < firstDay; blank += 1) {
    const cell = document.createElement("span");
    cell.className = "online-calendar-blank";
    grid.append(cell);
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const cell = document.createElement("span");
    cell.className = "online-calendar-day";
    if (year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate()) {
      cell.classList.add("online-calendar-today");
    }
    cell.textContent = String(day);
    grid.append(cell);
  }
}

document.getElementById("calendarPrevious").addEventListener("click", () => {
  calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1);
  renderCalendar();
});
document.getElementById("calendarNext").addEventListener("click", () => {
  calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1);
  renderCalendar();
});

search.addEventListener("input", filterTools);
document.getElementById("languageSwitch").addEventListener("click", () => {
  language = language === "en" ? "hi" : "en";
  let storageFailed = false;
  try {
    localStorage.setItem(languageKey, language);
  } catch {
    storageFailed = true;
  }
  applyLanguage();
  document.getElementById("languageStatus").textContent = storageFailed ? t("languageStorageError") : "";
});

try {
  language = localStorage.getItem(languageKey) === "hi" ? "hi" : "en";
} catch {
  language = "en";
}
populateCurrencies();
populateTimeZones();
populateUnits();
const now = new Date();
document.getElementById("timezoneDate").value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}T${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
document.getElementById("currentYear").textContent = now.getFullYear();
applyLanguage();
