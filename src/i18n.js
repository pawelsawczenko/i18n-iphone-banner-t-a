import { PRICES } from "./constants";
import { setUrlLanguage, updateElementI18n } from "./utils";

export function initI18n() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLangParam = urlParams.get("lang");

  if (!urlLangParam) {
    const primaryLang = navigator.language.slice(0, 2);
    setUrlLanguage(primaryLang, urlParams);
  } else {
    setUrlLanguage(urlLangParam, urlParams);
  }

  document.documentElement.lang = urlParams.get("lang");

  fetch(`i18n/${urlParams.get("lang")}.json`)
    .then((response) => response.json())
    .then((data) => {
      const lang = urlParams.get("lang");

      Object.entries(data).forEach(([key, value]) => {
        if (key === "{{price}} <br>per week") {
          const elements = document.querySelectorAll(
            `[data-i18n-key="${key}"]`
          );

          updateElementI18n(
            elements[0],
            value.replace("{{price}}", PRICES.YEARLY_ACCESS.PER_WEEK),
            lang
          );

          updateElementI18n(
            elements[1],
            value.replace("{{price}}", PRICES.WEEKLY_ACCESS.PER_WEEK),
            lang
          );
        } else {
          const element = document.querySelector(`[data-i18n-key="${key}"]`);
          const textContent =
            key === "Just {{price}} per year"
              ? value.replace("{{price}}", PRICES.YEARLY_ACCESS.PER_YEAR)
              : value;

          updateElementI18n(element, textContent, lang);
        }
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}
