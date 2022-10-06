let screen = document.getElementById("screen");
let keys = document.querySelectorAll("#keys");
let equals = document.getElementById("equals");
let add = document.getElementById("add");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let clear = document.getElementById("clear");
let input = "";

function addToScreen(num) {
  input = input + num;
  screen.value = input;
}
