document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const addBtn = document.querySelector("#addBtn");
  const tasklist = document.querySelector("#taskList");
  const taskBox = document.getElementById("taskB");

  taskBox.style.display = "none";

  window.userTaskList = function () {
    const task = input.value.trim();

    if (task === "") {
      alert("enter something task!");
    } else {
      const li = document.createElement("li");
      const delBtn = document.createElement("button");
      li.innerText = task;
      delBtn.innerText = "delete";

      li.appendChild(delBtn);
      tasklist.appendChild(li);

      delBtn.addEventListener("click", () => {
        li.remove();
        localStorage.removeItem("data");
      });

      li.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
      });
      taskBox.style.display = "flex";

      localStorage.setItem("data", input.value);

      input.value = "";
    }
  };
  addBtn.addEventListener("click", () => {
    userTaskList();
  });
});
