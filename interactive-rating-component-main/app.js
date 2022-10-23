const mainContainer = document.querySelector(".container");
const thankYouContainer = document.querySelector(".thank-you");
const submitButton = document.querySelector("#submit");
const rateButton = document.querySelector("#rate-again");
const rating = document.querySelector("#rate");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thankYouContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateButton.addEventListener("click", () => {
  thankYouContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    // console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
  });
});
