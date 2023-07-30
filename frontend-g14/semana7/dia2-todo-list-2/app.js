const taskInput = document.querySelector(".task__input");
const taskList = document.querySelector(".task__list");

let tasks = [];

taskInput.addEventListener("keypress", function(event) {

    if (event.key == "Enter") {
        
        const value = event.target.value;
        const newTask = {
            title : value,
            isDone : false
        } 
        tasks.push(newTask);

        taskInput.value = "";
        renderTask();
    }
});

function checkTask(event, index) {

    event.target.parentElement.classList.toggle("isChecked");
    const taskSelected = tasks[index];
    taskSelected.donde = !taskSelected.donde;
}

function removeTask(event, index) {

    event.target.parentElement.remove();
    const newTasks = tasks.filter((task, newIndex) => newIndex !== index);
    tasks = newTasks;
}

function renderTask() {

    let lista = "";
    tasks.forEach(function(task, index) {
    lista = lista + `
        <li>
            <input
                type="checkbox"
                onchange="checkTask(event, ${index})"
                ${task.donde ? "checked" : ""} 
                />
            <span>${task.title}</span>
            <button onclick="removeTask(event, ${index})">eliminar</button>
        </li>
        `
    });

    taskList.innerHTML = lista;
}