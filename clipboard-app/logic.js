let input = document.querySelector("#input");
let btn = document.querySelector("#btn");

async function copyToClipboard() {
  await navigator.clipboard.writeText(input.value);
  alert("Copied to Clipboard");
}

btn.addEventListener("click", copyToClipboard);
