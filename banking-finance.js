const financeCopy = {
  en: {
    homeLink: "Home", studentsLink: "Students", travelLink: "Travel", governmentLink: "Government", onlineToolsLink: "Online Tools",
    financeEyebrow: "MONEY, MADE A LITTLE CLEARER",
    financeTitleFirst: "Plan your money,", financeTitleSecond: "with more confidence.",
    financeIntro: "Simple finance estimates, practical safety guidance and official banking resources for India.",
    ifscTitle: "IFSC Code Finder",
    ifscIntro: "Validate an IFSC format and look up a branch using your bank's official site.",
    ifscLabel: "IFSC code", findIfsc: "Check code", rbiIfscLink: "RBI IFSC / MICR information ↗",
    ifscValid: "This looks like a valid IFSC format. Confirm the branch and code with the bank.",
    ifscInvalid: "Enter an 11-character IFSC: 4 letters, 0, then 6 letters or digits.",
    ifscNote: "This page checks the code format only; confirm branch details with the bank or RBI.",
    holidayTitle: "Bank Holiday Calendar",
    holidayIntro: "View weekends for a month and check official state holiday lists.",
    selectMonth: "Select month", showCalendar: "Show calendar",
    rbiHolidayLink: "Check RBI holiday matrix ↗",
    holidayNote: "Calendar marks Sundays and 2nd/4th Saturdays only. State, city and bank-specific holidays may differ.",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    sunday: "Sunday", saturdayHoliday: "2nd / 4th Saturday",
    emiTitle: "EMI Calculator", emiIntro: "Estimate monthly instalment and total loan cost.",
    loanAmount: "Loan amount (₹)", annualRate: "Annual interest rate (%)",
    tenureYears: "Tenure (years)", calculate: "Calculate", estimate: "Estimate",
    monthlyEmi: "Estimated monthly EMI", totalInterest: "Total interest",
    totalPayment: "Total payment", eligibilityTitle: "Loan Eligibility Estimator",
    eligibilityIntro: "Estimate a possible loan amount from income and obligations.",
    monthlyIncome: "Monthly net income (₹)", existingEmis: "Existing monthly EMIs (₹)",
    foir: "Max EMI share of income (%)", eligibleEmi: "Estimated EMI capacity",
    eligibleLoan: "Indicative eligible loan amount",
    eligibilityNote: "Indicative estimate only. Lenders use their own criteria, credit checks and policies.",
    fdRdTitle: "FD / RD Calculator", fdRdIntro: "Estimate fixed deposit or recurring deposit maturity.",
    depositType: "Deposit type", fixedDeposit: "Fixed deposit (FD)",
    recurringDeposit: "Recurring deposit (RD)",
    principalDeposit: "FD principal / RD monthly deposit (₹)",
    maturity: "Estimated maturity amount", invested: "Total amount deposited",
    interestEarned: "Estimated interest earned",
    fdRdNote: "Estimate uses quarterly compounding; bank terms, tax and payout options vary.",
    sipTitle: "SIP Calculator", sipIntro: "Project a monthly investment's potential future value.",
    monthlyInvestment: "Monthly investment (₹)", expectedReturn: "Expected annual return (%)",
    investedAmount: "Total invested", futureValue: "Projected value",
    sipNote: "Market-linked returns are not guaranteed. Projection only, not investment advice.",
    savingsTitle: "Savings Goal Calculator",
    savingsIntro: "Find a monthly contribution to reach your target.",
    targetAmount: "Target amount (₹)", currentSavings: "Current savings (₹)",
    goalMonths: "Time to goal (months)", monthlySaving: "Monthly saving needed",
    remainingGoal: "Amount left to save", savingsReached: "Your current savings meet the goal.",
    budgetTitle: "Monthly Budget Planner",
    budgetIntro: "See how income compares with monthly spending.",
    housing: "Housing / rent (₹)", food: "Food (₹)", transport: "Transport (₹)",
    utilities: "Utilities (₹)", otherExpenses: "Other expenses (₹)",
    totalExpenses: "Total expenses", remaining: "Remaining after expenses",
    budgetDeficit: "Expenses exceed income by", budgetSurplus: "Available after expenses",
    upiTitle: "UPI Safety Guide", upiIntro: "Simple habits to help protect your payments.",
    upiTipOne: "Never share your UPI PIN or OTP—even with someone claiming to be your bank.",
    upiTipTwo: "A PIN is used to send money, not to receive it. Check the request before approving.",
    upiTipThree: "Verify the recipient name and amount. Don't scan unknown QR codes to receive money.",
    upiTipFour: "If a payment seems suspicious, contact your bank using its official app or number.",
    upiOfficialLink: "NPCI UPI safety information ↗",
    cyberReportLink: "Report cyber financial fraud ↗",
    accountTitle: "Bank Account Guide",
    accountIntro: "Learn about account choices and official consumer resources.",
    rbiFaqTitle: "RBI Consumer FAQs",
    rbiFaqDesc: "Official answers on banking services and customer rights ↗",
    dicgcTitle: "DICGC Deposit Insurance",
    dicgcDesc: "Learn about deposit insurance and coverage limits ↗",
    accountNote: "Compare fees, minimum balance, access and service terms; confirm current details with the bank.",
    footerNote: "Little tools. A smoother day."
  },
  hi: {
    homeLink: "होम", studentsLink: "छात्र", travelLink: "यात्रा", governmentLink: "सरकार", onlineToolsLink: "ऑनलाइन टूल्स",
    financeEyebrow: "पैसों की जानकारी, आसान भाषा में",
    financeTitleFirst: "पैसों की योजना,", financeTitleSecond: "आत्मविश्वास के साथ।",
    financeIntro: "भारत के लिए आसान वित्तीय अनुमान, सुरक्षा गाइड और आधिकारिक बैंकिंग संसाधन।",
    ifscTitle: "IFSC कोड खोजें",
    ifscIntro: "IFSC फ़ॉर्मैट जाँचें और बैंक की आधिकारिक साइट पर शाखा खोजें।",
    ifscLabel: "IFSC कोड", findIfsc: "कोड जाँचें", rbiIfscLink: "RBI IFSC / MICR जानकारी ↗",
    ifscValid: "यह IFSC का मान्य फ़ॉर्मैट लगता है। बैंक से शाखा और कोड की पुष्टि करें।",
    ifscInvalid: "11 अक्षर का IFSC दर्ज करें: 4 अक्षर, 0, फिर 6 अक्षर या अंक।",
    ifscNote: "यह पेज केवल कोड का फ़ॉर्मैट जाँचता है; शाखा की पुष्टि बैंक या RBI से करें।",
    holidayTitle: "बैंक छुट्टी कैलेंडर",
    holidayIntro: "महीने के सप्ताहांत देखें और राज्य की आधिकारिक छुट्टियाँ जाँचें।",
    selectMonth: "महीना चुनें", showCalendar: "कैलेंडर देखें",
    rbiHolidayLink: "RBI छुट्टी मैट्रिक्स देखें ↗",
    holidayNote: "कैलेंडर में केवल रविवार और दूसरे/चौथे शनिवार दिखते हैं। राज्य, शहर और बैंक की छुट्टियाँ अलग हो सकती हैं।",
    weekdays: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    sunday: "रविवार", saturdayHoliday: "दूसरा / चौथा शनिवार",
    emiTitle: "EMI कैलकुलेटर", emiIntro: "मासिक किस्त और कुल लोन खर्च का अनुमान लगाएँ।",
    loanAmount: "लोन राशि (₹)", annualRate: "वार्षिक ब्याज दर (%)",
    tenureYears: "अवधि (वर्ष)", calculate: "गणना करें", estimate: "अनुमान",
    monthlyEmi: "अनुमानित मासिक EMI", totalInterest: "कुल ब्याज",
    totalPayment: "कुल भुगतान", eligibilityTitle: "लोन पात्रता अनुमान",
    eligibilityIntro: "आय और मौजूदा देनदारियों से संभावित लोन राशि का अनुमान।",
    monthlyIncome: "मासिक शुद्ध आय (₹)", existingEmis: "मौजूदा मासिक EMI (₹)",
    foir: "आय का अधिकतम EMI हिस्सा (%)", eligibleEmi: "अनुमानित EMI क्षमता",
    eligibleLoan: "संकेतात्मक पात्र लोन राशि",
    eligibilityNote: "केवल संकेतात्मक अनुमान। ऋणदाता अपने मानदंड, क्रेडिट जाँच और नीतियाँ लागू करते हैं।",
    fdRdTitle: "FD / RD कैलकुलेटर", fdRdIntro: "FD या RD की मैच्योरिटी का अनुमान लगाएँ।",
    depositType: "जमा का प्रकार", fixedDeposit: "फिक्स्ड डिपॉज़िट (FD)",
    recurringDeposit: "रिकरिंग डिपॉज़िट (RD)",
    principalDeposit: "FD मूलधन / RD मासिक जमा (₹)",
    maturity: "अनुमानित मैच्योरिटी राशि", invested: "कुल जमा राशि",
    interestEarned: "अनुमानित ब्याज",
    fdRdNote: "अनुमान तिमाही चक्रवृद्धि पर आधारित है; बैंक की शर्तें, कर और भुगतान विकल्प अलग हो सकते हैं।",
    sipTitle: "SIP कैलकुलेटर", sipIntro: "मासिक निवेश की संभावित भविष्य राशि का अनुमान।",
    monthlyInvestment: "मासिक निवेश (₹)", expectedReturn: "अनुमानित वार्षिक रिटर्न (%)",
    investedAmount: "कुल निवेश", futureValue: "अनुमानित राशि",
    sipNote: "बाज़ार से जुड़े रिटर्न की गारंटी नहीं है। यह अनुमान है, निवेश सलाह नहीं।",
    savingsTitle: "बचत लक्ष्य कैलकुलेटर",
    savingsIntro: "लक्ष्य तक पहुँचने के लिए मासिक बचत जानें।",
    targetAmount: "लक्ष्य राशि (₹)", currentSavings: "मौजूदा बचत (₹)",
    goalMonths: "लक्ष्य तक समय (महीने)", monthlySaving: "ज़रूरी मासिक बचत",
    remainingGoal: "बचत की बाकी राशि", savingsReached: "आपकी मौजूदा बचत लक्ष्य पूरा करती है।",
    budgetTitle: "मासिक बजट प्लानर",
    budgetIntro: "मासिक आय और खर्च की तुलना करें।",
    housing: "घर / किराया (₹)", food: "खाना (₹)", transport: "यातायात (₹)",
    utilities: "बिजली-पानी (₹)", otherExpenses: "अन्य खर्च (₹)",
    totalExpenses: "कुल खर्च", remaining: "खर्च के बाद शेष",
    budgetDeficit: "आय से अधिक खर्च", budgetSurplus: "खर्च के बाद उपलब्ध राशि",
    upiTitle: "UPI सुरक्षा गाइड", upiIntro: "भुगतान सुरक्षित रखने की आसान आदतें।",
    upiTipOne: "अपना UPI PIN या OTP किसी से साझा न करें—बैंक बताने वाले से भी नहीं।",
    upiTipTwo: "PIN पैसे भेजने के लिए है, पाने के लिए नहीं। मंज़ूरी से पहले अनुरोध जाँचें।",
    upiTipThree: "प्राप्तकर्ता का नाम और राशि जाँचें। पैसे पाने के लिए अनजान QR स्कैन न करें।",
    upiTipFour: "भुगतान संदिग्ध लगे तो बैंक के आधिकारिक ऐप या नंबर से संपर्क करें।",
    upiOfficialLink: "NPCI UPI सुरक्षा जानकारी ↗",
    cyberReportLink: "साइबर वित्तीय धोखाधड़ी रिपोर्ट करें ↗",
    accountTitle: "बैंक खाता गाइड",
    accountIntro: "खाते के विकल्प और आधिकारिक उपभोक्ता संसाधन जानें।",
    rbiFaqTitle: "RBI उपभोक्ता FAQ",
    rbiFaqDesc: "बैंकिंग सेवाओं और ग्राहक अधिकारों पर आधिकारिक जवाब ↗",
    dicgcTitle: "DICGC जमा बीमा",
    dicgcDesc: "जमा बीमा और कवरेज सीमा की जानकारी ↗",
    accountNote: "शुल्क, न्यूनतम बैलेंस, पहुँच और सेवा शर्तों की तुलना करें; बैंक से वर्तमान जानकारी की पुष्टि करें।",
    footerNote: "छोटे टूल्स। आसान दिन।"
  }
};

const languageKey = "daily-india-language";
let language = localStorage.getItem(languageKey) === "hi" ? "hi" : "en";
const resultCache = {};
const messageResultCache = {};

function t(key) {
  return financeCopy[language][key];
}

function currency(value) {
  return new Intl.NumberFormat(language === "hi" ? "hi-IN" : "en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(value);
}

function number(value, digits = 2) {
  return new Intl.NumberFormat(language === "hi" ? "hi-IN" : "en-IN", {
    maximumFractionDigits: digits
  }).format(value);
}

function translatePage() {
  document.documentElement.lang = language;
  document.body.classList.toggle("lang-hi", language === "hi");
  document.querySelectorAll("[data-finance-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.financeI18n);
  });
  document.getElementById("languageSwitch").setAttribute(
    "aria-label",
    language === "en" ? "Switch to Hindi" : "Switch to English"
  );
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  renderCalendar();
  Object.entries(resultCache).forEach(([id, rows]) => displayOutputs(id, rows));
  Object.entries(messageResultCache).forEach(([id, key]) => {
    const message = document.createElement("p");
    message.className = "finance-result-message";
    message.textContent = t(key);
    document.getElementById(id).replaceChildren(message);
  });
  const ifscCode = document.querySelector("#ifscForm [name='ifsc']").value;
  if (/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
    document.getElementById("ifscResult").textContent = t("ifscValid");
  }
}

function addOutput(container, label, value, isCurrency = true) {
  const row = document.createElement("div");
  row.className = "finance-result-row";
  const name = document.createElement("span");
  name.textContent = label;
  const result = document.createElement("strong");
  result.textContent = isCurrency ? currency(value) : value;
  row.append(name, result);
  container.append(row);
}

function displayOutputs(id, rows) {
  resultCache[id] = rows;
  delete messageResultCache[id];
  const container = document.getElementById(id);
  container.replaceChildren();
  rows.forEach(([label, value, isCurrency]) => addOutput(container, t(label), value, isCurrency !== false));
}

function bindForm(id, callback) {
  document.getElementById(id).addEventListener("submit", (event) => {
    event.preventDefault();
    callback(new FormData(event.currentTarget));
  });
}

function emiFor(principal, annualRate, months) {
  const monthlyRate = annualRate / 1200;
  if (monthlyRate === 0) return principal / months;
  return principal * monthlyRate * (1 + monthlyRate) ** months /
    ((1 + monthlyRate) ** months - 1);
}

bindForm("ifscForm", (data) => {
  const input = document.querySelector("#ifscForm [name='ifsc']");
  const code = String(data.get("ifsc")).trim().toUpperCase();
  input.value = code;
  const valid = /^[A-Z]{4}0[A-Z0-9]{6}$/.test(code);
  input.setCustomValidity(valid ? "" : t("ifscInvalid"));
  if (!input.reportValidity()) return;
  document.getElementById("ifscResult").textContent = valid ? t("ifscValid") : "";
});
document.querySelector("#ifscForm [name='ifsc']").addEventListener("input", (event) => {
  event.currentTarget.setCustomValidity("");
  document.getElementById("ifscResult").textContent = "";
});

const holidayInput = document.querySelector("#holidayForm [name='month']");
const today = new Date();
holidayInput.value = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;

function renderCalendar() {
  const container = document.getElementById("holidayCalendar");
  container.replaceChildren();
  const value = holidayInput.value;
  if (!value) return;
  const [year, month] = value.split("-").map(Number);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const weekdays = document.createElement("div");
  weekdays.className = "bank-calendar-grid bank-calendar-weekdays";
  t("weekdays").forEach((day) => {
    const cell = document.createElement("span");
    cell.textContent = day;
    weekdays.append(cell);
  });
  const dates = document.createElement("div");
  dates.className = "bank-calendar-grid";
  for (let blank = 0; blank < firstDay; blank += 1) {
    const spacer = document.createElement("span");
    spacer.className = "bank-calendar-blank";
    dates.append(spacer);
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month - 1, day);
    const secondOrFourthSaturday = date.getDay() === 6 &&
      (Math.ceil(day / 7) === 2 || Math.ceil(day / 7) === 4);
    const isSunday = date.getDay() === 0;
    const cell = document.createElement("span");
    cell.className = `bank-calendar-day${isSunday || secondOrFourthSaturday ? " bank-calendar-closed" : ""}`;
    cell.textContent = String(day);
    if (isSunday || secondOrFourthSaturday) {
      cell.title = isSunday ? t("sunday") : t("saturdayHoliday");
      cell.setAttribute("aria-label", `${day}, ${cell.title}`);
    }
    dates.append(cell);
  }
  container.append(weekdays, dates);
}

bindForm("holidayForm", renderCalendar);

bindForm("emiForm", (data) => {
  const principal = Number(data.get("principal"));
  const months = Number(data.get("years")) * 12;
  const emi = emiFor(principal, Number(data.get("rate")), months);
  const total = emi * months;
  displayOutputs("emiResult", [
    ["monthlyEmi", emi], ["totalInterest", total - principal], ["totalPayment", total]
  ]);
});

bindForm("eligibilityForm", (data) => {
  const income = Number(data.get("income"));
  const obligations = Number(data.get("obligations"));
  const maxEmi = Math.max(0, income * Number(data.get("foir")) / 100 - obligations);
  const months = Number(data.get("years")) * 12;
  const monthlyRate = Number(data.get("rate")) / 1200;
  const loan = maxEmi === 0 ? 0 : monthlyRate === 0
    ? maxEmi * months
    : maxEmi * ((1 + monthlyRate) ** months - 1) /
      (monthlyRate * (1 + monthlyRate) ** months);
  displayOutputs("eligibilityResult", [
    ["eligibleEmi", maxEmi], ["eligibleLoan", loan]
  ]);
});

bindForm("fdRdForm", (data) => {
  const type = data.get("type");
  const amount = Number(data.get("amount"));
  const rate = Number(data.get("rate"));
  const years = Number(data.get("years"));
  const periods = years * 4;
  const quarterlyRate = rate / 400;
  let maturity;
  let invested;
  if (type === "rd") {
    const months = years * 12;
    const monthlyRate = (1 + quarterlyRate) ** (1 / 3) - 1;
    invested = amount * months;
    maturity = monthlyRate === 0
      ? invested
      : amount * ((1 + monthlyRate) ** months - 1) / monthlyRate;
  } else {
    invested = amount;
    maturity = amount * (1 + quarterlyRate) ** periods;
  }
  displayOutputs("fdRdResult", [
    ["maturity", maturity], ["invested", invested], ["interestEarned", maturity - invested]
  ]);
});

bindForm("sipForm", (data) => {
  const monthly = Number(data.get("monthly"));
  const months = Number(data.get("years")) * 12;
  const rate = Number(data.get("rate")) / 1200;
  const invested = monthly * months;
  const future = rate === 0
    ? invested
    : monthly * ((1 + rate) ** months - 1) / rate * (1 + rate);
  displayOutputs("sipResult", [
    ["investedAmount", invested], ["futureValue", future]
  ]);
});

bindForm("savingsForm", (data) => {
  const target = Number(data.get("target"));
  const current = Number(data.get("current"));
  const months = Number(data.get("months"));
  const monthlyRate = Number(data.get("rate")) / 1200;
  const futureSavings = current * (1 + monthlyRate) ** months;
  const remaining = Math.max(0, target - futureSavings);
  const monthly = remaining === 0 ? 0 : monthlyRate === 0
    ? remaining / months
    : remaining * monthlyRate / ((1 + monthlyRate) ** months - 1);
  if (remaining === 0) {
    const container = document.getElementById("savingsResult");
    delete resultCache.savingsResult;
    messageResultCache.savingsResult = "savingsReached";
    container.replaceChildren();
    const message = document.createElement("p");
    message.className = "finance-result-message";
    message.textContent = t("savingsReached");
    container.append(message);
    return;
  }
  displayOutputs("savingsResult", [["remainingGoal", remaining], ["monthlySaving", monthly]]);
});

bindForm("budgetForm", (data) => {
  const income = Number(data.get("income"));
  const expenses = ["housing", "food", "transport", "utilities", "other"]
    .reduce((sum, key) => sum + Number(data.get(key)), 0);
  const remaining = income - expenses;
  displayOutputs("budgetResult", [
    ["totalExpenses", expenses],
    [remaining < 0 ? "budgetDeficit" : "budgetSurplus", Math.abs(remaining)]
  ]);
});

document.getElementById("languageSwitch").addEventListener("click", () => {
  language = language === "en" ? "hi" : "en";
  localStorage.setItem(languageKey, language);
  translatePage();
});

document.getElementById("currentYear").textContent = new Date().getFullYear();
translatePage();
