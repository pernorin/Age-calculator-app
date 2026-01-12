const dateForm = document.getElementById('date-form');
const yearsOutput = document.getElementById('years-output');
const monthsOutput = document.getElementById('months-output');
const daysOutput = document.getElementById('days-output');

dateForm.addEventListener('submit', handleSubmit);
let age = {};
const now = new Date();
///////////////////////////////
// const today = (() => {
//   return {
//     day: now.getDate(),
//     month: now.getMonth() + 1,
//     year: now.getFullYear(),
//   };
// })();
// console.log(today);
//////////////////////////////////////7
// const testDate = new Date(2000, 10, 60);
// console.log('test:', testDate.toLocaleDateString('sv-SE'));

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(dateForm);
  const dateOfBirth = Object.fromEntries(formData);

  console.log(dateOfBirth);
  const validationError = validateDate(dateOfBirth);

  if (!validationError) {
    calculateAge(dateOfBirth);
    dateForm.classList.remove('error');
    // dateForm.reset(); // Ska inte rensas!
  } else {
    dateForm.classList.add('error');
  }
  displayAge(validationError);
}
function displayError(inputElement, message) {
  const errorOutput = document.createElement('span');
  errorOutput.classList.add('errorOutput');
  errorOutput.innerText = message;

  dateForm[inputElement].insertAdjacentElement('afterend', errorOutput);
}
function removeErrors() {
  const errorElements = document.getElementsByClassName('errorOutput');

  while (errorElements[0]) {
    errorElements[0].remove();
  }
}

function validateDate(dateOfBirth) {
  const day = dateOfBirth.day;
  const month = dateOfBirth.month - 1;
  const year = dateOfBirth.year;

  const testDate = new Date(year, month, day);

  removeErrors();
  let hasError = false;

  if (year === '') {
    displayError('year', 'This field is required');
    hasError = true;
  } else if (year > now.getFullYear()) {
    displayError('year', 'Must be in the past');
    hasError = true;
  }

  if (dateOfBirth.month === '') {
    displayError('month', 'This field is required');
    hasError = true;
  } else if (month > 11 || month < 0) {
    displayError('month', 'Must be a valid month');
    hasError = true;
  }

  if (day === '') {
    displayError('day', 'This field is required');
    hasError = true;
  } else if (day > 31) {
    displayError('day', 'Must be a valid day');
    hasError = true;
  } else if (testDate.getMonth() != month && month < 12) {
    displayError('day', 'Must be a valid date');
    hasError = true;
  }
  console.log(day, month, year);
  console.log(testDate);

  return hasError;
}

function calculateAge(dateOfBirth) {
  // age.years = today.year - parseInt(dateOfBirth.year);
  // age.months = today.month - parseInt(dateOfBirth.month);
  // age.days = today.day - parseInt(dateOfBirth.day);
  age.years = now.getFullYear() - parseInt(dateOfBirth.year);
  age.months = now.getMonth() + 1 - parseInt(dateOfBirth.month);
  age.days = now.getDate() - parseInt(dateOfBirth.day);

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

function animateNumber(output, period) {
  let initialValue = 0;
  if (age[period] > 0) {
    let counter = setInterval(function () {
      output.innerText = ++initialValue;
      if (initialValue === age[period]) {
        clearInterval(counter);
      }
    }, 10);
  } else {
    output.innerText = 0;
  }
}

function displayAge(validationError) {
  if (validationError) {
    yearsOutput.innerText = '--';
    monthsOutput.innerText = '--';
    daysOutput.innerText = '--';
  } else {
    animateNumber(yearsOutput, 'years');
    animateNumber(monthsOutput, 'months');
    animateNumber(daysOutput, 'days');
    /*
    yearsOutput.innerText = age.years;
    monthsOutput.innerText = age.months;
    daysOutput.innerText = age.days;
    */
  }
}
