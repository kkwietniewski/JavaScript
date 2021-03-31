class App{
  constructor(){
    this.input = document.querySelector(".form form input");
    this.list = new List([], this.input);

    this.taskList = document.querySelector(".taskList");
    this.taskNumber = document.querySelector(".title h1 span");
    this.toDoElements = document.getElementsByClassName("task");

    document.querySelector(".form form").addEventListener("submit", this.addTask.bind(this));
    this.input.addEventListener("input", this.filterTasks.bind(this));
  }
  addTask(e){
    e.preventDefault();

    if(this.input.value === "")alert("Wprowadź zadanie!")
    else{
      this.list.addToTaskList();
      Render.renderTaskList(this.taskList, this.list.getTaskList());
      Render.renderNumberOfTasks(this.taskNumber, this.toDoElements);
    }
  }
  filterTasks(e){
    const searchPhraze = e.target.value.toLowerCase();
    if(searchPhraze === ""){
      Render.renderTaskList(this.taskList, this.list.getTaskList());
      Render.renderNumberOfTasks(this.taskNumber, this.toDoElements);
    }
    else{
      this.taskList.textContent = "";
      let tasks = this.list.getTaskList().filter(task=>task.textContent.toLowerCase().includes(searchPhraze));
      let isFiltered = true;
      Render.renderTaskList(this.taskList, tasks, isFiltered);
      Render.renderNumberOfTasks(this.taskNumber, this.toDoElements);
    }
  }
}