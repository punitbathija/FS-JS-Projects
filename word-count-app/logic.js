const input = document.querySelector("#input");
const output = document.querySelector("#output");
 
function counter(){
    let text = input.value;
    output.textContent =`The length of the input is ${text.length}`;
}

input.addEventListener("keyup", counter)

