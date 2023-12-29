console.log("test ....");

// Getting required elements from DOM
const showDays = document.getElementById("showdays");
const showHours = document.getElementById("showhours");
const showMins = document.getElementById("showmins");
const showSec = document.getElementById("showsecs");

// Getting Current DateTime and next coming year
const today = new Date();
const currentYear = today.getFullYear();
const newYearDate = new Date(`${currentYear + 1}-01-01`);

// Function to return time as double digit
function setProperTime(time) {
  return time > 9 ? time : `0${time}`;
}

// Countdown clock
function getSec() {
  // Calculating Days, Hours, Minutes and Seconds left
  let today = new Date();
  const daysLeft = Math.floor((newYearDate - today) / 1000 / 3600 / 24);
  const hoursLeft = Math.floor(24 - today.getHours());
  const minsLeft = Math.floor(60 - today.getMinutes());
  const secsLeft = Math.floor(60 - today.getSeconds());

  // Setting Days, Hours, Minutes and Seconds left in HTML
  showDays.textContent = setProperTime(daysLeft);
  showHours.textContent = setProperTime(hoursLeft);
  showMins.textContent = setProperTime(minsLeft);
  showSec.textContent = setProperTime(secsLeft);

  console.log(
    setProperTime(daysLeft) +
      ":" +
      setProperTime(hoursLeft) +
      ":" +
      setProperTime(minsLeft) +
      ":" +
      setProperTime(secsLeft)
  );
}
setInterval(getSec, 1000);
