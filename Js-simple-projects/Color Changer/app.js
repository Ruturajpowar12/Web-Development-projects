const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33A1",
  "#A133FF",
  "#33FFF0",
  "#FF8333",
  "#8DFF33",
  "#9B59B6"
];

const btn = document.querySelector("button")
let index = 0

btn.addEventListener("click",()=>{
       document.body.style.backgroundColor = colors[index];
       
       index++

       if(index >= colors.length)
       {
        index = 0
       }
})