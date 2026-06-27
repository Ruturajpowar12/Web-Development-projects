const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const palette = document.querySelector(".palette-container");
const copyColor = document.querySelector(".copyColor");

generateBtn.addEventListener("click", () => {
  generatePalette();
});

function generatePalette() {

  palette.innerHTML = "";
  copyColor.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();

    const colorBox = document.createElement("div");
    
    colorBox.style.backgroundColor = color;
    colorBox.textContent = color;
    colorBox.classList.add("color-box");
    palette.appendChild(colorBox);

    colorBox.addEventListener("click", () => {
      navigator.clipboard.writeText(color);

      copyColor.classList.add("copyColorDisplay");

      copyColor.textContent = `${color} copied successfully!`;

      copyColor.style.backgroundColor = color;
      copyColor.style.color = "white";

      setTimeout(() => {
        copyColor.classList.remove("copyColorDisplay");
        copyColor.textContent = "";
      }, 2000);
    });
  }
}

function getRandomColor() {
  const random = Math.floor(Math.random() * 16777215);
  const color = "#" + random.toString(16);
  return color;
}
