const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function time() {
  setInterval(() => {
    const date = new Date();
    let hours = date.getHours();

    hours = hours % 12;
    hours = hours ? hours : 12;

    hour.innerText = hours.toLocaleString().padStart(2, "0");
    min.innerText = date.getMinutes().toLocaleString().padStart(2, "0");
    sec.innerText = date.getSeconds().toLocaleString().padStart(2, "0");
  }, 1000);
}

time();
