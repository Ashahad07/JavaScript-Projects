const formOpenbtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const pwShowHide = document.querySelectorAll(".pw_hide");

// function validatePasswords() {
//   const createPassword = document.getElementById("CreatePassword").value;
//   const confirmPassword = document.getElementById("ConfirmPassword").value;
//   const errorMessage = document.getElementsByClassName("error-message");

//   if (createPassword !== confirmPassword) {
//     errorMessage.textContent = "Passwords not match ";
//     alert("password not match");
//   } else {
//     errorMessage.textContent = "";
//   }
// }
function validatePasswords() {
  const createPassword = document.getElementById("CreatePassword").value;
  const confirmPassword = document.getElementById("ConfirmPassword").value;
  const errorMessage = document.getElementById("error-message");

  if (createPassword !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
  } else {
    errorMessage.textContent = ""; // Clear the error message
    alert("Passwords match! You can submit the form."); // You can remove this alert and add your own logic
  }
}
formOpenbtn.addEventListener("click", () => {
  console.log("formOpenbtn clicked");
  if (home) {
    home.classList.add("show");
  }
});

formCloseBtn.addEventListener("click", () => {
  console.log("formCloseBtn clicked");
  if (home) {
    home.classList.remove("show");
  }
});

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type == "password") {
      getPwInput.type = "text";
      icon.classList.replace("ri-eye-off-line", "ri-eye-line");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("ri-eye-line", "ri-eye-off-line");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  console.log("signupBtn clicked");
  e.preventDefault();
  if (formContainer) {
    console.log("Adding 'active' class");
    formContainer.classList.add("active");
    console.log(formContainer);
  }
});

loginBtn.addEventListener("click", (e) => {
  console.log("loginBtn clicked");
  e.preventDefault();
  if (formContainer) {
    formContainer.classList.remove("active");
  }
});

// signupBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.add("active");
// });

// loginBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   formContainer.classList.remove("active");
// });
