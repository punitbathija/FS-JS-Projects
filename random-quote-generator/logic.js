let quote = document.querySelector("#quote");
let by = document.querySelector("#by");
let btn = document.querySelector("#btn");


async function generateQuote(){
    const res = await fetch("https://api.quotable.io/random")
    const data = await res.json();
    if(res.ok){
        quote.textContent = `❝${data.content}❞`;
        by.textContent = `--${data.author}`;
    }   
}
generateQuote();

btn.addEventListener("click", generateQuote)