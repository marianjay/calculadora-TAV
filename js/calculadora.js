
function calculate() {

var hr = parseInt(document.getElementById('hours').value, 10);
var min = parseInt(document.getElementById('minutes').value, 10);
var sec = parseInt(document.getElementById('seconds').value, 10);

if (hr > 0) {
  var hoursToMinutes = hr *60;
} else {
  var hoursToMinutes = 0;
}

if (min > 0) {
  var totalMinutes = min;
} else {
  var totalMinutes = 0;
}

if (sec > 0) {
  var totalSeconds = sec /60;
} else {
  var totalSeconds = 0;
}

var finalMinutes = hoursToMinutes + totalMinutes + totalSeconds;

document.getElementById("result").value = finalMinutes;

console.log(finalMinutes);
};

document.getElementById('calc').addEventListener('click', calculate);

