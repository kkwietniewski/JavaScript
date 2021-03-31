const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
const itemsList = document.getElementsByClassName("task");
const input = document.querySelector("input");

const renderList = ()=>{
  ul.textContent = "";
  toDoList.forEach((task, key)=>{
    task.dataset.key = key;
    ul.appendChild(task)
  });
}

const deleteTask = (e)=>{
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index,1);
  taskNumber.textContent = itemsList.length;
  renderList();
}

const addTask = (e)=>{
  e.preventDefault();
  const taskTitle = input.value;
  
  if(taskTitle === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = taskTitle + "<button>Usuń</button>";
  
  toDoList.push(task);
  renderList();

  input.value = "";

  taskNumber.textContent = itemsList.length;

  task.querySelector("button").addEventListener("click", deleteTask);
}
form.addEventListener("submit", addTask);