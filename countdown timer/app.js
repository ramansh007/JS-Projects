const newYears = '01 Jan 2022';

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('second');

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const seconds = newYearsDate - currentDate;
  var days = Math.floor(seconds / (1000 * 60 * 60 * 24));
  var hours = Math.floor((seconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((seconds % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((seconds % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = second;

  //   console.log(days, hours, minutes, second);
}

countdown();
setInterval(countdown, 1000);
