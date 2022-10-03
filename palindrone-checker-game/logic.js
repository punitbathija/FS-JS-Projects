let result = document.querySelector("#result");

function checkPalindrone(str) {
  let splitStr = str.split("");
  let revStr = splitStr.reverse();
  let joinStr = revStr.join("");

  if (joinStr === str) {
    result.textContent = `${str} is a palindrone`;
  } else {
    result.textContent = `${str} is not a palindrone`;
  }
}

let str = prompt("Please Enter a String");

checkPalindrone(str);
