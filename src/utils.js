import { I18N_OPTIONS } from "./constants";

export const setUrlLanguage = (lang, urlParams) => {
  const chosenLang = I18N_OPTIONS.includes(lang) ? lang : "en";

  urlParams.set("lang", chosenLang);

  const newUrl =
    window.location.pathname +
    "?" +
    urlParams.toString() +
    window.location.hash;

  window.history.replaceState(null, "", newUrl);
};

export const updateElementI18n = (element, textContent, lang) => {
  element.innerHTML = textContent;
  element.setAttribute("lang", lang);
};
