const display = document.getElementById('display');

       
function appendValue(value) {
        display.value += value;
}

  
function clearDisplay() {
        display.value = '';
}


function backspace() {
        display.value = display.value.slice(0, -1);
}

        
function calculate() {

if (display.value) {
     display.value = Function('"use strict";return (' + display.value + ')')();
 }
       
}