const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-bar-container");
const ctaButton = document.getElementById("cta-btn");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Close all answers
    faqQuestions.forEach((otherBtn) => {
      if (otherBtn !== btn) {
        otherBtn.classList.remove("active");
      }
    });

    // Toggle current answer
    btn.classList.toggle("active");
  });
});

document
  .getElementById("get-started-btn")
  .addEventListener("click", function () {
    alert("🚧 This feature is still under development. Stay tuned!");
  });
ctaButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(
    "Investment dashboard in progress... subscribe for more information"
  );
});
