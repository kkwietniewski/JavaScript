class List{
  constructor(toDoList, input){
    const task = new Task(input);

    const _toDoList = toDoList;

    this.getTaskList = () => _toDoList;

    this.addToTaskList = () => {
      let newTask = task.createTask();
      _toDoList.push(newTask);
      newTask.querySelector("button").addEventListener("click", this.removeTaskFromList);
    }
    this.removeTaskFromList = (e) => {
      _toDoList.splice(task.removeTask(e), 1);
      Render.renderTaskList(app.taskList, app.list.getTaskList());
      app.taskNumber.textContent = `(${app.toDoElements.length})`;
    }
  }
}