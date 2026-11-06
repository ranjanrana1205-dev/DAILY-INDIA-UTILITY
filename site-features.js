(() => {
  const themeKey = "daily-india-theme";
  const installButtons = [...document.querySelectorAll("[data-install-app]")];
  let installPrompt = null;

  function isHindi() {
    if (document.documentElement.lang === "hi") return true;
    try {
      return localStorage.getItem("daily-india-language") === "hi";
    } catch {
      return false;
    }
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = theme === "dark" ? "#151c18" : "#f7f8fb";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const nextTheme = theme === "dark" ? "light" : "dark";
      const label = nextTheme === "dark"
        ? (isHindi() ? "डार्क मोड चालू करें" : "Enable dark mode")
        : (isHindi() ? "लाइट मोड चालू करें" : "Enable light mode");
      button.setAttribute("aria-label", label);
      button.title = label;
      button.firstElementChild.textContent = theme === "dark" ? "☀" : "☾";
    });
  }

  try {
    applyTheme(localStorage.getItem(themeKey) === "dark" ? "dark" : "light");
  } catch {
    applyTheme("light");
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme-toggle]");
    if (!button) return;
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try {
      localStorage.setItem(themeKey, theme);
    } catch {
      button.title = isHindi()
        ? "रंग बदला, लेकिन पसंद सेव नहीं हो सकी।"
        : "Theme changed, but the preference could not be saved.";
    }
  });

  const languageObserver = new MutationObserver(() => applyTheme(document.documentElement.dataset.theme || "light"));
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installButtons.forEach((button) => { button.hidden = false; });
  });

  installButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      if (!installPrompt) return;
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      installButtons.forEach((installButton) => { installButton.hidden = true; });
    });
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    installButtons.forEach((button) => { button.hidden = true; });
  });

  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch((error) => {
        console.error("Could not register the offline app worker.", error);
      });
    });
  }
})();
