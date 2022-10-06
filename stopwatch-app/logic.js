let count = document.getElementById("count");
let counter = document.getElementById("counter");
let btn = document.getElementById("start");
let minBtn =document.getElementById("oneMin");
let twoMinBtn = document.getElementById("twoMin");
let text = document.querySelector(".text")
let c = 0;

function countInSeconds(){
setInterval(() => {
    if(c < count.value){
        c++
        counter.innerText = `00:${c}`;
    }
    text.classList.add("hidden")
}, 1000);
}

function countMin(){
    let countOne = 60;
    setInterval(() => {
        if(c < countOne){
            c++
            counter.innerText = `00:${c}`;
        }
        text.classList.add("hidden")
    }, 1000);
}


function countTwoMin(){
    let countTwo = 120;
    setInterval(() => {
        if(c < countTwo){
            c++
            counter.innerText = `00:${c}`;
        }
        text.classList.add("hidden")
    }, 1000);
}

btn.addEventListener("click", countInSeconds);
minBtn.addEventListener("click",countMin);
twoMinBtn.addEventListener("click",countTwoMin);
