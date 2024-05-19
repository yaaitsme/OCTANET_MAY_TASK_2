document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const dueDateInput = document.getElementById('dueDate');
    const prioritySelect = document.getElementById('priority');
    const categorySelect = document.getElementById('category');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;
        const category = categorySelect.value;

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.className = 'task';

        const taskContent = document.createElement('div');
        taskContent.className = 'task-content';
        taskContent.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-details">[Due: ${dueDate}] [Priority: ${priority}] [Category: ${category}]</span>
        `;

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';
        taskButtons.innerHTML = `
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        `;

        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskButtons);
        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
        categorySelect.value = 'work';

        taskButtons.querySelector('.complete-button').addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        taskButtons.querySelector('.delete-button').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});
