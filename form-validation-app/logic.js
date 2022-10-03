let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("comPassword");
let submit = document.getElementById("submit");
let inputU = document.querySelector(".inputU");
let inputE = document.querySelector(".inputE");
let inputP = document.querySelector(".inputP");
let inputCp = document.querySelector(".inputCp");
let card = document.querySelector(".card");
let validname = false;
let validemail = false;
let validpassword = false;
let validconpassword = false;

username.addEventListener("blur", () => {
  let regex = /^[a-zA-Z0-9]([a-zA-Z0-9]){2,12}/;
  let validName = username.value;
  if (regex.test(validName)) {
    inputU.style.border = "5px solid darkGreen";
    validname = true;
  } else {
    inputU.style.border = "5px solid red";
    validname = false;
  }
});

email.addEventListener("blur", () => {
  let regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
  let validEmail = email.value;
  if (regex.test(validEmail)) {
    inputE.style.border = "5px solid darkGreen";
    validemail = true;
  } else {
    inputE.style.border = "5px solid red";
    validemail = false;
  }
});

password.addEventListener("blur", () => {
  let regex = /^[a-zA-Z0-9\`\@\!\#\$\%\^\&\*\(\)\-\+]{3,14}$/;
  let validPassword = password.value;
  if (regex.test(validPassword)) {
    inputP.style.border = "5px solid darkGreen";
    validpassword = true;
  } else {
    inputP.style.border = "5px solid red";
    validpassword = false;
  }
});

confirmPassword.addEventListener("blur", () => {
  let conPw = confirmPassword.value;
  let pw = password.value;
  if (conPw === pw) {
    inputCp.style.border = "5px solid darkGreen";
    validconpassword = true;
  } else {
    inputCp.style.border = "5px solid red";
    validconpassword = false;
  }
});

submit.addEventListener("click", () => {
  if (
    validname === true &&
    validemail === true &&
    validpassword === true &&
    validconpassword === true
  ) {
    alert("Form Submitted");
  } else {
    alert("Form Data is Invalid");
  }
});
