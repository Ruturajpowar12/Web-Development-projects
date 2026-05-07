const birthDateInput = document.getElementById("birthdate");
const calculateBtn = document.getElementById("calculate-btn");

const ageText = document.getElementById("age");
const monthsText = document.getElementById("months");
const daysText = document.getElementById("days");

// Set max date to today
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    const maxDate = `${year}-${month}-${day}`;
    birthDateInput.setAttribute("max", maxDate);
});

// Validate future date
function validateDate() {
    const birthDate = new Date(birthDateInput.value);
    const today = new Date();

    if (birthDate > today) {
        alert("Birthdate cannot be in the future.");
        birthDateInput.value = "";
    }
}

birthDateInput.addEventListener("change", validateDate);

// Calculate age
calculateBtn.addEventListener("click", () => {
    if (birthDateInput.value === "") {
        alert("Please select your birthdate.");
        return;
    }

    const birthDate = new Date(birthDateInput.value);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust days
    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonth;
    }

    // Adjust months
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display result
    ageText.textContent = years;
    monthsText.textContent = months;
    daysText.textContent = days;
});