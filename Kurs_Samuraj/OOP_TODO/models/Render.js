class Render{
  static renderTaskList(taskList, toDoList, isFiltered=false){
    taskList.textContent = "";
    toDoList.forEach((task, key) => {
      if(isFiltered === false){
        task.dataset.key = key;
      }
        taskList.appendChild(task);
    });
  }
  static renderNumberOfTasks(taskNumber, toDoElements){
    taskNumber.textContent = `(${toDoElements.length})`;
  }
}