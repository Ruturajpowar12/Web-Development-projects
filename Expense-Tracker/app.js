const inputExpense = document.getElementById("expense");
const totalExpense = document.getElementById("total");
const inputDesc = document.querySelector("#desc");
const btn = document.querySelector("#addbtn");
const expenseList = document.querySelector(".expense-list");

let expenses = [];
let total = 0;

function saveData() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function calculationTotal() {
  total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  totalExpense.innerText = total;
}

// Display expense
function displayExpense(expense) {
  const li = document.createElement("li");

  li.innerHTML = `${expense.description}<span>₹${expense.amount}</span>`;

  const delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  li.appendChild(delBtn);
  expenseList.appendChild(li);

  delBtn.addEventListener("click", () => {
    expenses = expenses.filter((item) => item.id !== expense.id);

    saveData();
    li.remove();
    calculationTotal();
  });
}

// Add expense
function getData() {
  if (inputExpense.value === "") {
    alert("please enter expense amount");
    return;
  }

  if (inputDesc.value === "") {
    alert("please enter expense description");
    return;
  }

  let amount = Number(inputExpense.value);
  let description = inputDesc.value;

  let expense = {
    id: Date.now(),
    amount: amount,
    description: description,
  };
  expenses.push(expense);
  saveData();

  displayExpense(expense);

  calculationTotal();

  inputExpense.value = "";
  inputDesc.value = "";
}
// Load data

function loadData() {
  const data = localStorage.getItem("expenses");

  if (data) {
    expenses = JSON.parse(data);
  }

  expenses.forEach((expense) => {
    displayExpense(expense);
  });

  calculationTotal();
}

btn.addEventListener("click", getData);

loadData();
