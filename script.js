// Show the current year in the footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Show a message when the button is clicked
const greetBtn = document.getElementById("greetBtn");
const greetMsg = document.getElementById("greetMsg");

if (greetBtn && greetMsg) {
  greetBtn.addEventListener("click", function () {
    greetMsg.textContent = "Thanks for visiting! This site is live on the cloud.";
  });
}
