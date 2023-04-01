const inputEl = document.querySelector(".timer_input");
const buttonEl = document.querySelector(".button");
const timerEl = document.querySelector(".timer");
let timeMinut;
let timer;
let inputValue
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

inputEl.oninput = function () {
  if (this.value.length > 16) {
    this.value = this.value.slice(0,0);
  }
  inputValue = this.value;
};

buttonEl.onclick = ()=> {
  inputValue = inputEl.value;
  inputNumber = parseInt(inputValue);
  clearInterval(timer);
  runTimer(inputNumber);
}


function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

function runTimer(value) {
  if (value && value >= 1) {
    timer = setInterval(function () {
      seconds = value % 60; // SECONDS
      minutes = (value / 60) % 60; // MINUTES
      hour = (value / 360) % 60; // HOURS
  
      if (value <= 0) {
        clearInterval(timer);
        timerEl.innerHTML = "00:00:00";
      } else {
        let currentTimer = `${
          Math.trunc(hour) == 0 || Math.trunc(hour) < 10 ? "0" : ""
        }${Math.trunc(hour)}:${
          Math.trunc(minutes) == 0 || Math.trunc(minutes) < 10 ? "0" : ""
        }${Math.trunc(minutes)}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
  
        timerEl.innerHTML = currentTimer;
      }
      --value;
    }, 1000);
  }
}


