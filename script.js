document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get the task from the input field
        const newTask = newTaskInput.value.trim();

        if (newTask) {
            // Create a new list item
            const listItem = document.createElement('li');
            listItem.textContent = newTask;

            // Create the complete button
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', function() {
                listItem.classList.toggle('completed');
            });

            // Create the delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });

            // Append buttons to the list item
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            // Append the list item to the to-do list
            todoList.appendChild(listItem);

            // Clear the input field
            newTaskInput.value = '';
        }
    });
});