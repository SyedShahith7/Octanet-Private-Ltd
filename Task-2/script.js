document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', manageTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} 
                <button class="completeBtn"><i class="fas fa-check"></i></button> 
                <button class="deleteBtn"><i class="fas fa-trash"></i></button>`;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function manageTask(e) {
        if (e.target.classList.contains('completeBtn') || e.target.parentElement.classList.contains('completeBtn')) {
            e.target.closest('li').classList.toggle('completed');
        } else if (e.target.classList.contains('deleteBtn') || e.target.parentElement.classList.contains('deleteBtn')) {
            e.target.closest('li').remove();
        }
    }
});
