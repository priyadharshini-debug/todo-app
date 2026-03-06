let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}


function render(){

let list = document.getElementById("taskList");

list.innerHTML="";

let completed = 0;

tasks.forEach((task,index)=>{

let li = document.createElement("li");

li.classList.add("priority"+task.priority);

if(task.completed){

li.classList.add("completed");

completed++;

}

li.innerHTML=`

<div onclick="toggle(${index})">

<strong>${task.text}</strong>

<br>

<small>Priority: ${task.priority} | Due: ${task.date}</small>

</div>

<button class="deleteBtn" onclick="removeTask(${index})">Delete</button>

`;

list.appendChild(li);

});


let percent = tasks.length ? (completed/tasks.length)*100 : 0;

document.getElementById("progressBar").style.width = percent+"%";

document.getElementById("taskStats").innerText =
`Completed ${completed} of ${tasks.length} tasks`;

save();

}


function addTask(){

let text = document.getElementById("taskInput").value;

let priority = document.getElementById("priority").value;

let date = document.getElementById("dueDate").value;

if(text===""){

alert("Enter a task");

return;

}

tasks.push({

text:text,
priority:priority,
date:date,
completed:false

});

document.getElementById("taskInput").value="";

render();

}


function toggle(index){

tasks[index].completed = !tasks[index].completed;

render();

}


function removeTask(index){

tasks.splice(index,1);

render();

}


function searchTask(){

let input = document.getElementById("searchInput").value.toLowerCase();

let items = document.querySelectorAll("li");

items.forEach(task=>{

let text = task.innerText.toLowerCase();

task.style.display = text.includes(input) ? "flex" : "none";

});

}


/* DARK MODE */

let toggleBtn = document.getElementById("themeToggle");

toggleBtn.onclick = function(){

document.body.classList.toggle("dark");

};


render();