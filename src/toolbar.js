import { TOOLBAR_LINKS } from "./constants";
import { setActiveOffer } from "./utils";

export const initToolbar = () => {
  const offersEl = document.querySelector("#offers");
  const offerYearlyBtn = offersEl.querySelector("#yearly");
  const offerWeeklyBtn = offersEl.querySelector("#weekly");
  const submitOfferBtn = document.querySelector("#submit-offer");

  offersEl.addEventListener("click", (e) => {
    if (
      e.target.closest("#weekly") &&
      offerYearlyBtn.classList.contains("btn-active")
    ) {
      setActiveOffer(
        offerWeeklyBtn,
        offerYearlyBtn,
        submitOfferBtn,
        TOOLBAR_LINKS.WEEKLY_ACCESS
      );
    }

    if (
      e.target.closest("#yearly") &&
      offerWeeklyBtn.classList.contains("btn-active")
    ) {
      setActiveOffer(
        offerYearlyBtn,
        offerWeeklyBtn,
        submitOfferBtn,
        TOOLBAR_LINKS.YEARLY_ACCESS
      );
    }
  });
};
