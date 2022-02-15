let startButton:HTMLButtonElement = document.getElementById("start") as HTMLButtonElement;
let stopButton:HTMLButtonElement = document.getElementById("stop") as HTMLButtonElement;
let resetButton:HTMLButtonElement = document.getElementById("reset") as HTMLButtonElement;
let appendSeconds: HTMLSpanElement = document.getElementById("seconds") as HTMLSpanElement
let appendTens: HTMLSpanElement = document.getElementById("tens") as HTMLSpanElement
let appendMinutes: HTMLSpanElement = document.getElementById("minutes") as HTMLSpanElement
let interval:number;
let tens:number = 0;
let seconds:number = 0;
let minutes:number = 0;

window.onload = function () {
  
   startButton.addEventListener("click", startTimer);
   stopButton.addEventListener("click", stopTimer);
   resetButton.addEventListener("click", resetTimer);
}

function startTimer(){
    clearInterval(interval);
    interval = setInterval(calcTimer, 10);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    minutes = 0;
    appendTens.innerHTML = "00";
    appendSeconds.innerHTML = "00";
    appendMinutes.innerHTML = "00";
}

function calcTimer(){
    tens++; 
      
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
      
    if (tens > 9){
        appendTens.innerHTML = tens.toString();
    } 
      
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
      
    if (seconds > 9){
        appendSeconds.innerHTML = seconds.toString();
    }

    if (seconds > 59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (minutes > 9){
        appendMinutes.innerHTML = minutes.toString();
    }
}