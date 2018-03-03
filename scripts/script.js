//Dit is de Speed
var myVar = setInterval(myTimer, 50);
var counter = 200100;

function myTimer() {
    if (counter == 0) {
        counter = 200100;
    }
    counter--;
    var timer = document.getElementById("demo");
    timer.innerHTML = counter;
}
myTimer();
