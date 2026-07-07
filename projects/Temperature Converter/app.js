const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

function formatValue(value) {
  return parseFloat(value.toFixed(2));
}

celsiusInput.addEventListener("input", () => {
  const c = parseFloat(celsiusInput.value);
  if (isNaN(c)) {
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    return;
  }
  fahrenheitInput.value = formatValue((c * 9) / 5 + 32);
  kelvinInput.value = formatValue(c + 273.15);
});

fahrenheitInput.addEventListener("input", () => {
  const f = parseFloat(fahrenheitInput.value);
  if (isNaN(f)) {
    celsiusInput.value = "";
    kelvinInput.value = "";
    return;
  }
  celsiusInput.value = formatValue(((f - 32) * 5) / 9);
  kelvinInput.value = formatValue(((f - 32) * 5) / 9 + 273.15);
});

kelvinInput.addEventListener("input", () => {
  const k = parseFloat(kelvinInput.value);
  if (isNaN(k)) {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    return;
  }
  celsiusInput.value = formatValue(k - 273.15);
  fahrenheitInput.value = formatValue(((k - 273.15) * 9) / 5 + 32);
});
