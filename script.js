function addTask(){

const taskInput = document.getElementById("taskInput");
const priority = document.getElementById("priority").value;
const date = document.getElementById("date").value;
const taskList = document.getElementById("taskList");

const taskText = taskInput.value.trim();

if(taskText === ""){
alert("Please enter a task");
return;
}

const li = document.createElement("li");
li.className = "task";

li.innerHTML = `
<span>${taskText} | ${priority} | ${date}</span>
<button class="delete-btn" onclick="deleteTask(this)">Delete</button>
`;

taskList.appendChild(li);

taskInput.value = "";
}

function deleteTask(button){
button.parentElement.remove();
}