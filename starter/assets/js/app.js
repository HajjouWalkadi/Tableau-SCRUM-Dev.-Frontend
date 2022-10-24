
let todotasks = document.getElementById("to-do-tasks");
let doingtasks = document.getElementById("in-progress-tasks");
let donetasks = document.getElementById("done-tasks");

function AjouterTask() {
    let form = document.forms["addTask"];

    let task = {
        id: tasks[tasks.length - 1].id + 1,
        title: form.title.value,
        type: form.type.value,
        priority: form.priority.value,
        status: form.status.value,
        date: form.date.value,
        description: form.description.value,
    }
    tasks.push(task);
    console.log(task)
    Afficher();
}

function cleanForm() {
    document.getElementById("input_recipient_name").value = ""
    document.getElementById("message-text").value = ""
    document.getElementById("status").value = ""
    document.getElementById("priority").value = ""
    document.getElementById("date").value = ""
    document.getElementById("btnUpdate").setAttribute('class', 'btn btn-primary d-none')
    document.getElementById("btnSave").setAttribute('class', 'btn btn-primary')
}

function Afficher() {
    todotasks.innerText = "";
    doingtasks.innerText = "";
    donetasks.innerText = "";
    let counter_to_do = 0;
    let counter_in_progress = 0;
    let counter_done = 0;
    let todoNum = document.getElementById('to-do-tasks-count');
    let inprogressNum = document.getElementById('in-progress-tasks-count');
    let doneNum = document.getElementById('done-tasks-count');
    let description;

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status == "To Do") {
            counter_to_do++;

            if (tasks[i].description.length > 50) {
                description = tasks[i].description.substring(0, 50);
            } else {
                description = tasks[i].description;
            }
            todotasks.innerHTML += `<button id="${tasks[i]["id"]}" class="d-flex button border  w-100 p-1">
                <div class="col-md-1">
                    <i class="bi bi-question-circle text-success"></i> 
                </div>
                <div class="text-start col-md-11 ">
                    <div class="fw-bold">${tasks[i]["title"]}</div>
                    <div class="">
                        <div class="text-gray">#${tasks[i]["id"]} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${description}...</div>
                    </div>
                    <div class="">
                        <span class="col-md-auto btn btn-primary text-white ">${tasks[i]["priority"]}</span>
                        <span class="col-md-auto btn btn-gray text-dark">${tasks[i]["type"]}</span>
                        <span><i onclick='deleteTask(${tasks[i]["id"]})' class="bi bi-trash p-3"></i></span>
                        <span><i data-bs-toggle="modal" data-bs-target="#add-task" onclick="saveTask(event)" data='${tasks[i]["id"]};${tasks[i]["title"]};${tasks[i]["date"]};${tasks[i]["description"]};${tasks[i]["priority"]};${tasks[i]["type"]};${tasks[i]["status"]}' class="bi bi-pencil-square"></i></span>                    </div>
                </div>
            </button>`;
        }
        else if (tasks[i].status == "In Progress") {
            counter_in_progress++;
            if (tasks[i].description.length > 50) {
                description = tasks[i].description.substring(0, 50);
            } else {
                description = tasks[i].description;
            }
            doingtasks.innerHTML +=
                `<button id="${tasks[i]["id"]}" class="d-flex button border  w-100 p-1 call">
                <div class="col-md-1">
                    <i class="bi bi-question-circle text-success"></i> 
                </div>
                <div class="text-start col-md-11 ">
                    <div class="fw-bold">${tasks[i]["title"]}</div>
                    <div class="">
                        <div class="text-gray">#${tasks[i]["id"]} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${description}...</div>
                    </div>
                    <div class="">
                        <span class="col-md-auto btn btn-primary text-white ">${tasks[i]["priority"]}</span>
                        <span class="col-md-auto btn btn-gray text-dark">${tasks[i]["type"]}</span>
                        <span><i onclick='deleteTask(${tasks[i]["id"]})' class="bi bi-trash p-3"></i></span>
                        <span><i data-bs-toggle="modal" data-bs-target="#add-task" onclick="saveTask(event)" data='${tasks[i]["id"]};${tasks[i]["title"]};${tasks[i]["date"]};${tasks[i]["description"]};${tasks[i]["priority"]};${tasks[i]["type"]};${tasks[i]["status"]}' class="bi bi-pencil-square"></i></span>
                    </div>
                </div>
            </button>`;

        }
        else if (tasks[i].status == "Done") {
            counter_done++;
            if (tasks[i].description.length > 50) {
                description = tasks[i].description.substring(0, 55);
            } else {
                description = tasks[i].description;
            }
            donetasks.innerHTML += `<button id="${tasks[i]["id"]}" class="d-flex button border  w-100 p-1 call">
                <div class="col-md-1">
                    <i class="bi bi-question-circle text-success"></i> 
                </div>
                <div class="text-start col-md-11 ">
                    <div class="fw-bold">${tasks[i]["title"]}</div>
                    <div class="">
                        <div class="text-gray">#${tasks[i]["id"]} created in ${tasks[i]["date"]}</div>
                        <div class="" title="${tasks[i]["description"]}">${description}...</div>
                    </div>
                    <div class="">
                        <span class="col-md-auto btn btn-primary text-white ">${tasks[i]["priority"]}</span>
                        <span class="col-md-auto btn btn-gray text-dark">${tasks[i]["type"]}</span>
                        <span><i onclick='deleteTask(${tasks[i]["id"]})' class="bi bi-trash p-3"></i></span>
                        <span><i data-bs-toggle="modal" data-bs-target="#add-task" onclick="saveTask(event)" data='${tasks[i]["id"]};${tasks[i]["title"]};${tasks[i]["date"]};${tasks[i]["description"]};${tasks[i]["priority"]};${tasks[i]["type"]};${tasks[i]["status"]}' class="bi bi-pencil-square"></i></span>
                    </div>
                </div>
            </button>`;
        }
        todoNum.innerText = counter_to_do;
        inprogressNum.innerText = counter_in_progress;
        doneNum.innerText = counter_done;

    }
}

Afficher();

function deleteTask(id) {
    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1)
        }
    }
    Afficher();

}

function saveTask(event) {

    document.getElementById("btnSave").setAttribute('class', 'btn btn-primary d-none')
    document.getElementById("btnUpdate").setAttribute('class', 'btn btn-primary')

    let data = event.target.getAttribute('data');
    let dataArray = data.split(';');

    let task = {
        id: dataArray[0],
        title: dataArray[1],
        date: dataArray[2],
        desription: dataArray[3],
        priority: dataArray[4],
        type: dataArray[5],
        status: dataArray[6]
    }

    let form = document.forms["addTask"];

    form.title.value = task.title;
    if (task.type == "Bug") {
        document.getElementById('input_bug_id').checked = true;
    }
    if (task.type == "Feature") {
        document.getElementById('input_feature_id').checked = true;
    }

    form.priority.value = task.priority;
    form.status.value = task.status;
    form.date.value = task.date;
    form.description.value = task.desription;
    form.id.value = task.id;
    form.type.value = task.type;
}

function saveChanges() {
    let form = document.forms['addTask']
    let task = {
        title: form.title.value,
        priority: form.priority.value,
        status: form.status.value,
        date: form.date.value,
        description: form.description.value,
        id: form.id.value,
        type: form.type.value
    }



    for (i = 0; i < tasks.length; i++) {
        if (tasks[i].id == task.id) {
            tasks[i] = task;
        }
    }

    form.reset();

    Afficher();
}
