function showTasks(){
	tasks.forEach(function(title){
		addNewTask(title);
	});
}

//Toggle tasks

//Toggle done button
function toggleComplete(task){
	task.classList.toggle('btn-success');
}

//Delete button
function deleteTask(task){
	var liToDelete = task.closest('li');
	
	task.closest('ul').removeChild(liToDelete);
	//rodzic.removeChild();
}

//Title validation
function titleValidation(title){
	var inputsValue = document.querySelectorAll('.simple-task .input-group input');
	//console.log(inputsValue[0].value);
	inputsValue.forEach(function(existingTitle){
		if(existingTitle.value == title){
			//console.log('This title exists!');
			return true;
		}
		//console.log(existingTitle.value, title);
	})
}