// Initialize i18next with backend
i18next.use(i18nextHttpBackend).init(
  {
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    backend: { loadPath: "locales/{{lng}}/translation.json" },
  },
  (err) => {
    if (err) return console.error(err);
    updateTexts();
  }
);

// Update translated elements
function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = i18next.t(el.dataset.i18n);
  });

  // Update active button style
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === i18next.language);
  });
}

// Language switcher
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    if (lang !== i18next.language) {
      i18next.changeLanguage(lang, () => {
        localStorage.setItem("lang", lang);
        updateTexts();
      });
    }
  });
});
