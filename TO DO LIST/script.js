let taskList = [];

// * retriving taskList from localstorage
if(localStorage.getItem("taskList")){
    taskList = JSON.parse(localStorage.getItem("taskList"));
    
    if(taskList.length != 0)
        showTasks();
}

function addTaskToArray(taskTitle){
    taskList.unshift(taskTitle);
    showTasks();
}

function addTaskForm(e){
    e.preventDefault();

    let taskTitle = document.getElementById("task-input");
    // avoid blank task
    if(taskTitle.value == ""){
        return false;
    }
    
    addTaskToArray(taskTitle.value.trim());

    taskTitle.value = "";
}

function showTasks(){
    let tasksElements = "";

    for(let i=0;i<taskList.length;i++){
        let taskElement = `
        <div class="to-do-task">
            <input id="task${i}" type="text" placeholder="${taskList[i]}" readonly/>
            <button class="edit-button" onclick="editTask(this,${i},task${i})">Edit</button>
            <button class="delete-button" onclick="deleteTask(${i})">Delete</button>
        </div>   
        `;

        tasksElements += taskElement;
    }
    tasks.innerHTML = tasksElements;

    // * saving tasklist to localstorage
    localStorage.setItem("taskList",JSON.stringify(taskList));
}

// edit task
function editTask(editBtn,taskIdx, editEle){
    if(editBtn.innerHTML == "Edit"){
        editEle.readOnly = false;
    
        // change button view
        editBtn.innerHTML = "Save";

        editEle.value = editEle.placeholder;
    }
    else{
        editEle.readOnly = true;
    
        // change button view
        editBtn.innerHTML = "Edit";

        // updating the task in tasklist
        taskList[taskIdx] = editEle.value;

        // update in DOM
        showTasks();
    }

    

    

}

// delete task
function deleteTask(taskIdx){
    let newTaskList = [];
    for(let i=0;i<taskList.length;i++){
        if(i == taskIdx){
            continue;
        }
        newTaskList.push(taskList[i]);
    }
    taskList = newTaskList;
    showTasks();
}