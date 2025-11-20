const dateForm = document.getElementById('date-form');
const yearsOutput = document.getElementById('years-output');
const monthsOutput = document.getElementById('months-output');
const daysOutput = document.getElementById('days-output');

dateForm.addEventListener('submit', handleSubmit);
let age = {};
const now = new Date();
///////////////////////////////
const today = (() => {
  return {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
})();
console.log(today);
//////////////////////////////////////7
// const testDate = new Date(2000, 10, 60);
// console.log('test:', testDate.toLocaleDateString('sv-SE'));

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(dateForm);
  const dateOfBirth = Object.fromEntries(formData);

  console.log(dateOfBirth);
  validateDate(dateOfBirth);
  calculateAge(dateOfBirth);
  displayAge();

  //dateForm.reset();
}

function validateDate(dateOfBirth) {
  const day = dateOfBirth.day;
  const month = dateOfBirth.month - 1;
  const year = dateOfBirth.year;

  const testDate = new Date(year, month, day);

  if (year > now.getFullYear()) {
    console.log('FEL ÅR');
  }
  if (month > 11 || month < 0) {
    console.log('FEL MÅNAD');
  }
  if (testDate.getMonth() != month) {
    console.log('FEL DAGAR');
  }
  console.log(day, month, year);
  console.log(testDate, 'm:', month);

  // kanske return boolean?
}

function calculateAge(dateOfBirth) {
  age.years = today.year - parseInt(dateOfBirth.year);
  age.months = today.month - parseInt(dateOfBirth.month);
  age.days = today.day - parseInt(dateOfBirth.day);

  if (age.days < 0) {
    age.months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    age.days += prevMonth.getDate();
  }

  if (age.months < 0) {
    age.years--;
    age.months += 12;
  }

  console.log(age);
}
function displayAge() {
  yearsOutput.innerText = age.years;
  monthsOutput.innerText = age.months;
  daysOutput.innerText = age.days;
}
