document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = `${taskText} - ${taskTime}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(removeBtn);
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
    timeInput.value = '';
});
