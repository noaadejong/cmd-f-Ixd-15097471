var val = 1;
var meter = document.getElementById("tank");
var text = document.getElementById("level");

window.setInterval(function(){

  if (meter.classList.contains("danger")) {
    meter.classList.remove("danger");
    meter.classList.add("full");
    level.innerHTML = "1.000.000";
    return;
  }

  if (meter.classList.contains("half")) {
    meter.classList.remove("half");
    meter.classList.add("danger");
    level.innerHTML = "50.000";
    return;
  }

  if (meter.classList.contains("full")) {
    meter.classList.remove("full");
    meter.classList.add("half");
    level.innerHTML = "500.000";
    return;
  }

}, 1000);
