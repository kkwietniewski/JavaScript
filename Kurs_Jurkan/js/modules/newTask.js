function addNewTask(title){
	var taskLi = document.createElement('li');
	
	taskLi.classList.add('simple-task');
	taskLi.innerHTML = prepareTaskHTML(title);
	//Events - toggle complete and delete
	var toggleTaskCompleteBtn = taskLi.querySelector('span .toggle-complete-btn');
	var toggleTaskDeleteBtn = taskLi.querySelector('span .toggle-delete-btn');
	
	toggleTaskCompleteBtn.addEventListener('click', function(){
		toggleComplete(this);
	});
	
	toggleTaskDeleteBtn.addEventListener('click', function(){
		deleteTask(this);
	});
	//Add task to DOM
	tasksContainer.appendChild(taskLi);
}

function prepareTaskHTML(title)
{
	return '<div class="input-group">' +
					'<span class="input-group-btn">' +
							'<button class="btn btn-default toggle-complete-btn">' +
								'<i class="fa fa-check"></i>' +
							'</button>' +
						'</span>' +
						'<input type="text" class="form-control"  placeholder="Quest title" value="'+title+'">' +
						'<span class="input-group-btn">'+
							'<button class="btn btn-danger toggle-delete-btn">'+
								'<i class="fa fa-times"></i>'+
							'</button>'+
						'</span>'+
					'</div>';
}


//Add new task

function bindAddTaskEvents(){
	//OnSubmit
	newTaskForm.addEventListener('submit', function(event){
		event.preventDefault();
		//console.log(this);
		var title = this.querySelector('input').value;
		console.log(titleValidation(title));
		if(titleValidation(title) == true){
			console.log('dsdad');
		}
		else{
			addNewTask(title);		
		}
	});
}