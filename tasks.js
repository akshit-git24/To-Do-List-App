document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task");
    const todoList = document.querySelector(".todo-list");
    const clearAllBtn = document.getElementById("clear-all");

  
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("div");
        taskItem.classList.add("todo-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const label = document.createElement("label");
        label.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

       
        checkbox.addEventListener("change", () => {
            taskItem.classList.toggle("completed", checkbox.checked);
        });

       
        deleteBtn.addEventListener("click", () => {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteBtn);

        todoList.appendChild(taskItem);
        taskInput.value = "";
    }

   
    function clearAllTasks() {
        todoList.innerHTML = "";
    }

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
    clearAllBtn.addEventListener("click", clearAllTasks);
});
