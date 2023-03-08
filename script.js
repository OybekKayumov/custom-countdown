const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24

// min date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateDOM() {
  const now = new Date().getTime();
  const distance = countdownValue - now;
  console.log(': ', distance);
}

// take values from input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(': ', countdownTitle, countdownDate);

  // get number version of current date
  countdownValue = new Date(countdownDate).getTime();
  console.log(': ', countdownValue);
  updateDOM();
}

countdownForm.addEventListener('submit', updateCountdown)