const dateForm = document.getElementById('date-form');
const yearsOutput = document.getElementById('years-output');
const monthsOutput = document.getElementById('months-output');
const daysOutput = document.getElementById('days-output');

dateForm.addEventListener('submit', handleSubmit);

const now = new Date();
console.log(now.getDate(), now.getMonth() + 1, now.getFullYear());

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(dateForm);
  const res = Object.fromEntries(formData);
  console.log(res);
}
