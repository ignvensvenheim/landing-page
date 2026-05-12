const toolCards = [
  {
    href: "https://svenheim.atlassian.net/servicedesk/customer/portal/6",
    iconClasses: "fas fa-tools",
    titleKey: "imos-pagalba",
    descriptionKey: "imos-pagalba-desc",
  },
  {
    href: "https://svenheim.atlassian.net/wiki/x/DoD3C",
    iconClasses: "fas fa-book",
    titleKey: "imos-confluence",
    descriptionKey: "imos-confluence-desc",
  },
  {
    href: "https://jira-atnaujinimai-pakeitimai.vercel.app/",
    iconClasses: "fas fa-sync-alt",
    titleKey: "imos-news",
    descriptionKey: "imos-news-desc",
  },
  {
    href: "https://my.svenheim.no/CCG/",
    iconClasses: "fas fa-code",
    titleKey: "code-gen",
    descriptionKey: "code-gen-desc",
  },
  {
    href: "https://remontas.svenheim.lt/",
    iconClasses: "fas fa-wrench",
    titleKey: "mech-jira",
    descriptionKey: "mech-jira-desc",
  },
  {
    href: "https://mech-jira-next.vercel.app/",
    iconClasses: "fa-solid fa-file-excel",
    titleKey: "mech-jira-filter",
    descriptionKey: "mech-jira-filter-desc",
  },
  {
    href: "https://planner.cloud.microsoft/svenheim.lt/",
    iconClasses: "fa-brands fa-windows",
    titleKey: "planner",
    descriptionKey: "planner-desc",
  },
  {
    href: "https://svenheim.atlassian.net/servicedesk/customer/portal/106",
    iconClasses: "fa-solid fa-truck-medical",
    titleKey: "it-pagalba",
    descriptionKey: "it-pagalba-desc",
  },
  {
    href: "https://my.svenheim.no/",
    iconClasses: "fas fa-shop",
    titleKey: "webshop",
    descriptionKey: "webshop-desc",
  },
  // Uncomment this card when the test webshop should be visible again.
  // {
  //   href: "https://my.svenheim.no:8008/shop/products/webshop",
  //   iconClasses: "fa-solid fa-vial",
  //   titleKey: "test-webshop",
  //   descriptionKey: "test-webshop-desc",
  // },
  {
    href: "https://svenheimuab.sharepoint.com/sites/SUAB/default.aspx?CID=b005381f%2D8b10%2D44d5%2D87d5%2D7930e28c42e9",
    iconClasses: "fa-solid fa-file-lines",
    titleKey: "document-center",
    descriptionKey: "sharepoint-desc",
  },
];

const featuresGrid = document.getElementById("features-grid");
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));

function renderCards() {
  featuresGrid.innerHTML = toolCards
    .map(
      ({ href, iconClasses, titleKey, descriptionKey }) => `
        <a
          href="${href}"
          target="_blank"
          rel="noopener noreferrer"
          class="feature-card"
        >
          <div class="feature-card__icon"><i class="${iconClasses}"></i></div>
          <div class="feature-card__content">
            <h3 class="feature-card__title" data-i18n="${titleKey}"></h3>
            <p
              class="feature-card__description"
              data-i18n="${descriptionKey}"
            ></p>
          </div>
        </a>
      `
    )
    .join("");
}

function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = i18next.t(el.dataset.i18n);
  });

  document.title = i18next.t("page-title");
  document.documentElement.lang = i18next.language;

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === i18next.language);
  });
}

renderCards();

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

langButtons.forEach((btn) => {
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
