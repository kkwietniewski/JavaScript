const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const tasksNumber = document.querySelector("h1 span");
const input = document.querySelector("input");
const toDoElements = document.getElementsByClassName("task");

const renderList = ()=>{
  ul.textContent = "";
  toDoList.forEach((task,key)=>{
    task.dataset.key = key;
    ul.appendChild(task)
  });
}

const removeTask = (e)=>{
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  renderList();
  tasksNumber.textContent = `(${toDoElements.length})`;
}

const addTask = (e)=>{
  e.preventDefault();
  const taskTitle = input.value;

  if(taskTitle === "")return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = "<button>Usuń</button> " + taskTitle;

  toDoList.push(task);
  renderList();

  input.value = "";
  tasksNumber.textContent = `(${toDoElements.length})`;
  task.querySelector("button").addEventListener("click", removeTask);
}

const filterTasks = (e)=>{
  const searchPhraze = e.target.value.toLowerCase();
  if(searchPhraze === "")toDoList.forEach(task=>ul.appendChild(task));
  else{
    ul.textContent="";
    let tasks = toDoList;
    tasks = tasks.filter(task=>task.textContent.toLowerCase().includes(searchPhraze));
    tasks.forEach(task=>ul.appendChild(task));
  }
}

form.addEventListener("submit", addTask);
input.addEventListener("input", filterTasks);
