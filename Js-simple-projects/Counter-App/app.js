const num = document.querySelector("h2")
const Increment = document.querySelector("#Increment")
const Reset = document.querySelector("#Reset")
const Decrement = document.querySelector("#Decrement")

function updateButtonState() {
    const currentVal = Number(num.innerText)
    if (currentVal <= 0) {
        Decrement.classList.add("off")
    } else {
        Decrement.classList.remove("off")
    }
}


Increment.addEventListener("click", () => {
    num.innerText++;
    updateButtonState();
})


Reset.addEventListener("click", () => {
    num.innerText = 0;
    updateButtonState();
})

Decrement.addEventListener("click", () => {
    let currentVal = Number(num.innerText)
    if (currentVal > 0) {
        num.innerText--
    }
    updateButtonState()
})

updateButtonState()