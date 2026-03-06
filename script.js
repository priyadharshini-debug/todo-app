function addTask(){

let taskInput=document.getElementById("taskInput");
let priority=document.getElementById("priority").value;

let taskText=taskInput.value;

if(taskText===""){
alert("Enter a task");
return;
}

let li=document.createElement("li");

li.className="task "+priority;

li.innerHTML=
`
<span>${taskText}</span>
<button class="delete" onclick="this.parentElement.remove()">Delete</button>
`;

document.getElementById("taskList").appendChild(li);

taskInput.value="";
}