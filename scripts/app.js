const input = document.getElementById('input_value');
const submit = document.getElementById('submit_button');
const list = document.getElementById('list');
const deleteButtons = document.getElementsByClassName('delete');

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
					for(i = 0; i < tasks.length; i++) {
						listItems[i].textContent = tasks[i];
						listItems[i].appendChild(toDoList.deleteTaskButton());
					}
				}
}

// Add task event handler
submit.addEventListener('click', () => {

	let listItems = list.children;
	let userInput = input.value;
	let tasks = toDoList.tasks;

	toDoList.addTask(userInput);

	toDoList.createListItem();
	
	toDoList.displayTasks(listItems, tasks);
	
// Remove task event handler
	for( i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener('click', (e) => {
			e.target.parentElement.style.display = 'none';
		});
}
})



















