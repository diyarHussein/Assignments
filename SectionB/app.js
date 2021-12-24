const input = document.querySelector("#addTask");
const form = document.querySelector("#taskArea");
const taskList = document.querySelector("#taskList");
const tasks = document.querySelectorAll(".task");
const removeAll = document.querySelector("#removAll")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const task =input.value;
    const createTask = document.createElement("li");
    const removeTask = document.createElement("span");
    createTask.setAttribute("class", "task");
    removeTask.setAttribute("class", "remove");
    createTask.innerText = task;
    removeTask.innerText = "x";
    createTask.append(removeTask)
    taskList.append(createTask);
    input.value = "";
});

taskList.addEventListener("click",(e) =>{
    if(e.target.nodeName === "LI"){
        e.target.style.backgroundColor = "green";
        e.target.style.textDecorationLine = "line-through";
        e.target.firstElementChild.style.visibility  =  "hidden";
    }
    else if(e.target.nodeName === "SPAN"){
        e.target.parentNode.remove();
    }  
});

taskList.addEventListener("dblclick",(e) =>{
    if(e.target.nodeName === "LI"){
        e.target.style.backgroundColor = "rgb(243, 236, 236)";
        e.target.style.textDecorationLine = "none";
        e.target.firstElementChild.style.visibility  =  "visible";
    }
    else if(e.target.nodeName === "SPAN"){
        e.target.parentNode.remove();
    }  
});


removeAll.addEventListener("click", () =>{
    taskList.innerHTML = "";
});



