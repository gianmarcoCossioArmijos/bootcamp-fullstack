const taskInput = document.querySelector(".task__input");
const taskList = document.querySelector(".task__list");
const taskFormat = document.querySelector(".task__format");

// localStorage.setItem("saludo", "Hola, amigos");
// console.log(localStorage.getItem("nombre"));

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

taskFormat.addEventListener("click", function(event) {

    const newTasks = tasks.filter(task => task.isDone === false);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    tasks = newTasks;
    renderTask();
});

taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        
        const value = event.target.value;
        const newTask = {
            title : value,
            isDone : false
        };
        
        tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        taskInput.value = "";
        renderTask();
    }
});

function checkTask(event, index) {

    event.target.parentElement.classList.toggle("isChecked");
    const taskSelected = tasks[index];
    taskSelected.isDone = !taskSelected.isDone;
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(event, index) {

    event.target.parentElement.remove();
    const newTasks = tasks.filter((task, newIndex) => newIndex !== index);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    tasks = newTasks;
}

function renderTask() {

    let lista = "";
    tasks.forEach(function(task, index) {
    lista = lista + `
        <li class = "list-group-item d-flex justify-content-between w-100">
            <input
                type="checkbox"
                onchange="checkTask(event, ${index})"
                ${task.donde ? "checked" : ""}
                class="text-start"
                />
            <span>${task.title}</span>
            <button
                onclick="removeTask(event, ${index})"
                class="btn btn-primary btn-sm my-1"
                >eliminar</button>
        </li>
        `
    });

    taskList.innerHTML = lista;
}

renderTask();