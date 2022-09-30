let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("comPassword");
let submit = document.getElementById("submit");

username.addEventListener("blur", () => {
    let regex = /^[a-zA-Z0-9]([a-zA-Z0-9]){}/;
    let validName = username.value;
    if(regex.test(validName)){
        console.log("Regex Matched")
    }
    else{
        console.log("Regex Mismatched")
    }
})   

email.addEventListener("blur", () => {
    let regex = /^([a-zA-Z0-9]+)@([a-zA-Z0-9_]+)\.(a-zA-Z)$/;
    let validEmail = email.value;
    if(regex.test(validEmail)){
        console.log("Regex Matched")
    }
    else{
        console.log("Regex Mismatched")
    }
})

password.addEventListener("blur", () => {
    console.log("password is blurred")
})

confirmPassword.addEventListener("blur", () => {
    console.log("confirm-password is blurred")
})
