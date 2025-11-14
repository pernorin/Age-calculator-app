const dateForm = document.getElementById('date-form');
const yearsOutput = document.getElementById('years-output');
const monthsOutput = document.getElementById('months-output');
const daysOutput = document.getElementById('days-output');

dateForm.addEventListener('submit', handleSubmit);
let age = {};
const now = new Date();
const today = (() => {
  return {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  };
})();
console.log(today);

function handleSubmit(event) {
  event.preventDefault();
  //https://developer.mozilla.org/en-US/docs/Web/API/FormData
  const formData = new FormData(dateForm);

  const dateOfBirth = Object.fromEntries(formData);

  console.log(dateOfBirth);
  calculateAge(dateOfBirth);
}

function calculateAge(dateOfBirth) {
  age.years = today.year - parseInt(dateOfBirth.year);
  age.months = today.month - parseInt(dateOfBirth.month);
  age.days = today.day - parseInt(dateOfBirth.day);

  if (age.months < 0) {
    age.years--;
    age.months += 12;
  }

  if (age.days < 0) {
    age.months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    age.days += prevMonth.getDate();
  }

  console.log(age);
}
