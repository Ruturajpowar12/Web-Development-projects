const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let second = 0;
let interval;

function updateUi() {
  let hours = Math.floor(second / 3600);
  let minutes = Math.floor((second % 3600) / 60);
  let seconds = second % 60;

  sec.innerText = seconds.toString().padStart(2, "0");
  min.innerText = minutes.toString().padStart(2, "0");
  hour.innerText = hours.toString().padStart(2, "0");
}

start.addEventListener("click", () => {
  if (interval) return;

  interval = setInterval(() => {
    second++;
    updateUi();
  }, 1000);
});

pause.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  second = 0;
  interval = null;
  updateUi();
});

updateUi();
