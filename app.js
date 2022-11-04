//Selectors
var seconds = 00;
var miliseconds = 00;
var displaySeconds = document.getElementById("seconds");
var displayMiliseconds = document.getElementById("miliseconds");
var startButton = document.getElementById("start");
var stopButton = document.querySelector(".stop");
var resetButton = document.querySelector(".reset");

var interval;

//The timer function
function realClock(){
    
    miliseconds++;
    if(miliseconds<10){
        displayMiliseconds.innerHTML = "0" + miliseconds
    } else{
        displayMiliseconds.innerHTML = miliseconds
    }

    if(miliseconds>1000){
        seconds++;
        displaySeconds.innerHTML = "0" + seconds
        miliseconds = 0;        
    }
    if(seconds>=10){
        displaySeconds.innerHTML = seconds
    }


}

function clickHundle(){
    interval = setInterval(realClock, 1000);
}
function OffclickHundle(){
    clearInterval(interval);
}
function resetclickHundle(){
    clearInterval(interval);
    seconds = "00";
    miliseconds = "00";
    displaySeconds.innerHTML = seconds
    displayMiliseconds.innerHTML = miliseconds
}