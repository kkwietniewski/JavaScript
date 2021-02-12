
const endTime = new Date('2021-02-12 20:00:00').getTime();
const spanDays = document.querySelector("span.d");
const spanHours = document.querySelector("span.h");
const spanMinutes = document.querySelector("span.m");
const spanSeconds = document.querySelector("span.s");

setInterval(() => {
  const nowTime = new Date().getTime();
  let days = Math.floor((endTime/(1000*60*60*24)) - nowTime/(1000*60*60*24));
  days = days < 10 ? `0${days}` : days;
  let hours = Math.floor((endTime/(1000*60*60) - nowTime/(1000*60*60))%24);
  hours = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((endTime/(1000*60) - nowTime/(1000*60))%60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((endTime/1000 - nowTime/1000)%60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  spanDays.textContent = days;
  spanHours.textContent = hours;
  spanMinutes.textContent = minutes;
  spanSeconds.textContent = seconds;
}, 1000);