const input = document.getElementById('input_value');
const submit = document.getElementById('submit_button');
const list = document.getElementById('list');
const error = document.getElementById('error');
const sortButton = document.getElementById('sort_button');
const deleteButtons = document.getElementsByClassName('delete');
const li = document.getElementsByTagName('li');

// toDoList object

var toDoList = {
	tasks: [],
	addTask: function(task) {
				this.tasks.push(task);
				},
	createListItem: function() {
						const newItem = document.createElement('li');
						list.appendChild(newItem);
					},
	deleteTaskButton: function() {
						const deleteBttn = document.createElement('input');
						deleteBttn.setAttribute('type', 'button');
						deleteBttn.setAttribute('class', 'delete');
						deleteBttn.setAttribute('value', 'Delete');
						return deleteBttn;
					},
	displayTasks: function(listItems, tasks) {
					for(var i = 0; i < tasks.length; i++) {
						listItems[i].textContent = tasks[i];
						listItems[i].appendChild(toDoList.deleteTaskButton());
					}
				},
	removeTask: function() {
					for(var i = 0; i < deleteButtons.length; i++) {
						deleteButtons[i].addEventListener('click', (e) => {
						e.target.parentElement.style.display = 'none';
						// deleteTask();
					})
				}
			}
};

// Error Message Controls

function errorMessage() {
	error.style.display = 'block';
	input.className = 'error';
}

function removeErrorMessage() {
	error.style.display = 'none';
	input.className = '';
}

// function deleteTask() {
// 	for(i = 0; i < toDoList.tasks; i++) {
// 		var array = toDoList.tasks;
// 		array.splice(i, array[i]);
// 	}
// }

// Add task event handler
submit.addEventListener('click', () => {

	let listItems = list.children;
	let userInput = input.value;
	let tasks = toDoList.tasks;

	if(userInput === '') {
		errorMessage();
	}

	else {
		removeErrorMessage();
		toDoList.addTask(userInput);
		toDoList.createListItem();
		toDoList.displayTasks(listItems, tasks);
		toDoList.removeTask();
	}

});

// Remove task event handler
// function removeTask() {
// 		for(var i = 0; i < deleteButtons.length; i++) {
// 		deleteButtons[i].addEventListener('click', (e) => {
// 		e.target.parentElement.style.display = 'none';
// 		});
// 	}
// }

sortButton.addEventListener('click', (e) => { 
	let sortHeading = document.getElementById('sort-heading');
	let listItems = list.children;
	let tasks = toDoList.tasks;
	
	li.reverse();
	
	// toDoList.tasks.reverse();
	// toDoList.displayTasks(listItems, tasks);
	// toDoList.removeTask();

	if(sortHeading.textContent == 'First to Last') {
		sortHeading.textContent = 'Last to First';
	}
	else {
		sortHeading.textContent = 'First to Last'
	}
});






















