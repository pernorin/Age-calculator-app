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
  const formData = new FormData(dateForm); // ett value i FormData kan inte vara ett nummer

  const dateOfBirth = Object.fromEntries(formData);

  //call calculate age function
  console.log(parseInt(dateOfBirth.day));
  console.log(dateOfBirth);
  calculateAge(dateOfBirth);
}
console.log(new Date(now.getFullYear(), now.getMonth(), 0));

function calculateAge(dateOfBirth) {
  age.years = today.year - parseInt(dateOfBirth.year);
  age.months = today.month - parseInt(dateOfBirth.month);
  age.days = today.day - parseInt(dateOfBirth.day);
  console.log(age);
}
