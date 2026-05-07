
document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById("task-input");
    const listContainer = document.getElementById("list-container");

    // Define the function inside or attach it to the window object
    window.addTask = function () {
        if (!inputBox) {
            console.error("Input box not found in the DOM");
            return;
        }

        if (inputBox.value === '') {
            alert("You must write something!");
        } else {

            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
        inputBox.value = ''; // Clear input after adding
    };
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.targret.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);