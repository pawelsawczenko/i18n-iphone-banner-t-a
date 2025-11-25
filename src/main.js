import "./style.css";

const offersEl = document.querySelector("#offers");
const offerYearlyBtn = offersEl.querySelector("#yearly");
const offerWeeklyBtn = offersEl.querySelector("#weekly");
const submitOfferBtn = document.querySelector("#submit-offer");

offersEl.addEventListener("click", (e) => {
  if (
    e.target.closest("#weekly") &&
    offerYearlyBtn.classList.contains("btn-active")
  ) {
    offerYearlyBtn.classList.remove("btn-active");
    offerWeeklyBtn.classList.add("btn-active");
    submitOfferBtn.setAttribute("href", "https://google.com/");
  }

  if (
    e.target.closest("#yearly") &&
    offerWeeklyBtn.classList.contains("btn-active")
  ) {
    offerYearlyBtn.classList.add("btn-active");
    offerWeeklyBtn.classList.remove("btn-active");
    submitOfferBtn.setAttribute("href", "https://apple.com/");
  }
});
