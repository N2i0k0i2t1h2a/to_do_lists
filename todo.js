document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskText = document.getElementById('new-task').value;
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    taskList.appendChild(li);
    document.getElementById('todo-form').reset();
});