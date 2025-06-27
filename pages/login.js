const myForm = document.getElementById("my-form");
const userName = document.getElementById("username");
const passWord = document.getElementById("password");
const userNameErrorEl = document.getElementById("username-error");
const passWordErrorEl = document.getElementById("password-error");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const username = userName.value.trim();
  const password = passWord.value.trim();

  if (!username) {
    userNameErrorEl.textContent = "Username can't be blank";
    isValid = false;
  }

  if (!password) {
    passWordErrorEl.textContent = `Please enter your password.`;
    isValid = false;
  }

  if (isValid) {
    // console.log("username:", username);
    // console.log("password:", password);
    alert(username);
  }
});

userName.addEventListener("input", function () {
  document.getElementById("username-error").textContent = "";
});

passWord.addEventListener("input", function () {
  document.getElementById("password-error").textContent = "";
});
