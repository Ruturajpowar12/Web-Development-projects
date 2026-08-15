const inputExpense = document.getElementById("expense");
const totalExpense = document.getElementById("total");
const inputDesc = document.querySelector("#desc");
const btn = document.querySelector("#addbtn");
const expenseList = document.querySelector(".expense-list");
let total = 0;

function getData() {
  //input field requred
  if (inputExpense.value === "") {
    alert("Please enter expense amount");
    return;
  }
  if (inputDesc.value === "") {
    alert("Please Enter Expense Description");
  }

  //get input values
  const amount = Number(inputExpense.value);
  const description = inputDesc.value;

  //create list
  const li = document.createElement("li");

  li.innerHTML = `<li>${description}<span>&#8377;${amount}</span>`;

  const delbtn = document.createElement("button");
  delbtn.innerText = "Delete";

  li.appendChild(delbtn);

  expenseList.appendChild(li);
  //print total
  total += amount;
  totalExpense.innerText = total;

  delbtn.addEventListener("click", () => {
    total -= amount;
    totalExpense.innerText = total;
    li.remove();
  });

  inputExpense.value = "";
  inputDesc.value = "";
}

btn.addEventListener("click", () => {
  getData();
});
