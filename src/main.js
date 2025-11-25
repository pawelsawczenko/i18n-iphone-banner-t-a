import "./style.css";
import { initI18n } from "./i18n";
import { initToolbar } from "./toolbar";

document.addEventListener("DOMContentLoaded", () => {
  initToolbar();
  initI18n();
});
