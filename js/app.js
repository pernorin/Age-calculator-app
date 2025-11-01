const dateForm = document.getElementById('date-form');
const yearsOutput = document.getElementById('years-output');
const monthsOutput = document.getElementById('months-output');
const daysOutput = document.getElementById('days-output');

dateForm.addEventListener('submit', handleSubmit);

class Day {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const now = new Date(Date.now());
console.log(now.getDate(), now.getMonth() + 1, now.getFullYear(), typeof now);

const today = new Day(now.getDate(), now.getMonth() + 1, now.getFullYear());
console.log(today);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(dateForm);
  const res = Object.fromEntries(formData);

  const birthday = new Day(
    parseInt(res.day),
    parseInt(res.month),
    parseInt(res.year)
  );

  console.log(res);
  console.log(birthday);
}

/*
https://github.com/pernorin/frontend-assignment2/blob/master/index.html
https://github.com/pernorin/frontend-assignment2/blob/master/script.js

*/
