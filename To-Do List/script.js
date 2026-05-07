const inputBox = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

// Add Task
function addTask() {

    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        saveData();
    }

    inputBox.value = '';
}

// Check and Delete Task
listContainer.addEventListener("click", function (e) {

    // check task
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    // delete task
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// Save Data
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show Saved Tasks
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();