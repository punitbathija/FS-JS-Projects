let board = document.getElementById("board");
let add = document.getElementById("add");
let list = document.getElementById("list");
let form = document.createElement("div");

function addTask() {
  form.classList.remove("hidden");
  form.innerHTML = `<h4>Please Enter Your Task</h4>
                       <input id="input"></input>
                       <button onclick="populate()">Add</button>`;
  board.append(form);
}

function populate() {
  form.classList.add("hidden");
  let input = document.querySelector("#input");
  let li = document.createElement("li");
  li.textContent = `${input.value}`;
  list.append(li);
  let del = document.createElement("button");
  del.innerText = "x";
  list.append(del);
}

add.addEventListener("click", addTask);
