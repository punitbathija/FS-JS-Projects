let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("comPassword");
let submit = document.getElementById("submit");

function validate() {
  let user = username.value;
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (re.test(user)) {
    alert("done");
    return true;
  } else {
    username.style.border = "red solid 3px";
    return false;
  }
}
validate();
