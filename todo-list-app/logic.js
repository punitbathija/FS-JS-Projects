let input = document.querySelector("#form");
let add = document.querySelector("#add");
let list = document.querySelector("#list");

function addTask() {
  list.innerHTML += `<div class = "task">
                      <span class = "taskname">
                         ${input.value}
                        </span>
                        <button class = "delete">
                          X
                        </button>
                      </div>`;

  let tasks = document.querySelectorAll(".delete");
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}
add.addEventListener("click", addTask);
