const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-button');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24

// min date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log(': ', distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    console.log(': ', days, hours, minutes, seconds);

   // hide input
   inputContainer.hidden = true;

   // if countdown has ended, show complete
   if (distance < 0) {
    completeEl.hidden = true;
    clearInterval(countdownActive);
    completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
    completeEl.hidden = false;
   } else {     
     // populate countdown
     countdownElTitle.textContent = `${countdownTitle}`;
     timeElements[0].textContent = `${days}`;
     timeElements[1].textContent = `${hours}`;
     timeElements[2].textContent = `${minutes}`;
     timeElements[3].textContent = `${seconds}`;
     completeEl.hidden = true;
     countdownEl.hidden = false;
   }
  }, second);
}

// take values from input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(': ', countdownTitle, countdownDate);

  // chek for valid date
  if (countdownDate === '') {
    alert("Please select a date for the countdown...")
  } else {
    // get number version of current date
    countdownValue = new Date(countdownDate).getTime();
    console.log(': ', countdownValue);
    updateDOM();
  }
}

function reset() {
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;

  // stop countdown
  clearInterval(countdownActive);

  // reset values
  countdownTitle = '';
  countdownDate = '';

}

// event listeners
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);