// varibales
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var time = `${hours}:${minutes}:${seconds}.${milliseconds}`;
var timerDisplay = document.getElementById("clockDisplay")
var ticker = 0

//This fumction updates the timer and displays it in the HTML document
function updateTimer() {
    milliseconds++
    if (milliseconds > 100) {
        milliseconds = 0
        seconds++
        if (seconds > 60) {
            seconds = 0
            minutes++
            if (minutes > 60) {
                minutes = 0
                hours++
            }
        }
    }
    time = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    clockDisplay.innerHTML = time
}

// A fucntion to be called when presing start. Starts the timer by running the start function every 10ms
function start() {
    ticker = setInterval(updateTimer, 10)
    return ticker
}

// Function fo stop button, clears the interval to stop the watch from counting
function stop() {
    clearInterval(ticker)
}


// Function for the clear button, intilizes the interface but continues couning
function reset() {
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    time = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    clockDisplay.innerHTML = time
}