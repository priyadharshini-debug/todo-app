function addTask() {

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskText;

    li.onclick = function(){
        li.style.textDecoration = "line-through";
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function(){
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}