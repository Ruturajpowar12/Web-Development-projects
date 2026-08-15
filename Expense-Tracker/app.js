const inputExpense = document.getElementById("expense");
const totalExpense = document.getElementById("total");
const inputDesc = document.querySelector("#desc");
const btn = document.querySelector("#addbtn");
const expenseList = document.querySelector(".expense-list");
let total = 0;

function getData() {
  //input field requred
  if (inputExpense === "") {
    alert("please enter your expense amount");
    return;
  }
  if (inputDesc === "") {
    alert("please enter your expense description");
    return;
  }

  // getting input values
  const expenseAmount = Number(inputExpense.value);
  const description = inputDesc.value;

  //create a  expense list
  const li = document.createElement("li");
  li.innerHTML = `${expenseAmount}<span>${description}</span>`;

  //create delete button
  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  //adding btn into list
  li.appendChild(delBtn);
  expenseList.appendChild(li);

  //calculate total
  total += expenseAmount;
  totalExpense.innerText = total;

  //delete amount and expense in list
  delBtn.addEventListener("click", () => {
    total -= expenseAmount;
    totalExpense.innerText = total;
    li.remove();
  });

  inputExpense.value = "";
  inputDesc.value = "";
}

btn.addEventListener("click", () => {
  getData();
});
