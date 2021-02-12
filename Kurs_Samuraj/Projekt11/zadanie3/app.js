const timeDiv = document.querySelector(".time div");
const btnStart = document.querySelector(".start");
const btnReset = document.querySelector(".reset");

let time = 0;
let working = false;
let timeId = 0;

const updateTimer = ()=>{
  if(!working){
    working = !working;
    btnStart.textContent = "Stop";
    timeId = setInterval(startTimer, 10);
  }
  else{
    working = !working;
    btnStart.textContent = "Start";
    clearInterval(timeId);
  }
}

const startTimer = ()=>{
  time += 1;
  timeDiv.textContent = (time/100).toFixed(2);
}

const reset = ()=>{
  time = 0;
  working = false;
  timeDiv.textContent = "---";
  working = false;
  btnStart.textContent = "Start";
  clearInterval(timeId);
}

btnStart.addEventListener("click", updateTimer);
btnReset.addEventListener("click", reset);