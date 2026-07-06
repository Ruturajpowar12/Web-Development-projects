const amount = document.getElementById("billAmount");
const percentage = document.getElementById("tipPercentage");
const calBtn = document.getElementById("calBtn");
const res = document.getElementById("res");

function calculateBill() {
  const billAmount = Number(amount.value);
  const tip = Number(percentage.value);

  const discount = billAmount * (tip / 100);
  const result = billAmount + discount;

  res.innerText = result;
}

calBtn.addEventListener("click", () => {
  calculateBill();
});
