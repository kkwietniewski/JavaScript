class Task{
  constructor(input){
    this._input = input;
  }
  createTask(){
    const taskTitle = this._input.value;

    if(taskTitle === "") return;
    const task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `<p>${taskTitle}</p>` + "<button>Usuń</button> ";
    this._input.value = "";
    return task;
  }
  removeTask(e){
    const index = e.target.parentNode.dataset.key;
    return index;
  }
}