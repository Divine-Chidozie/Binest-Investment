const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-bar-container");

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
