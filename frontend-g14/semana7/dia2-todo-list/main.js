const taskInput = document.querySelector(".task__input");
const taskButton = document.querySelector(".task__button");
const taskList = document.querySelector(".task__list");
const task = document.querySelector(".task");

taskButton.addEventListener("click", function(event) {

    if(taskInput.value === "") {

        alert("Debe ingresar una tarea");
        return;
    } else {

        const li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type","checkbox");
        li.appendChild(checkbox);

        let span = document.createElement("span");
        span.innerText = taskInput.value
        li.appendChild(span);

        let button = document.createElement("button");
        button.innerText = "delete";
        li.appendChild(button);
    
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function(event){

    console.log(event);
    const target = event.target;
    if (target.tagName === "INPUT" && target.type === "checkbox") {

        target.classList.toggle("checked");

    }
    
    if (target.tagName === "BUTTON") {

        target.parentElement.remove();
    }
});
