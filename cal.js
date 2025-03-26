// Function to toggle between light and dark themes
function toggleTheme() {
  const button = document.getElementById('themeButton');
  const icon = button.querySelector('i');

  if (document.body.classList.toggle('dark-theme')) {
    icon.className = 'uil uil-sun';
    button.title = 'Switch to Light Theme';
  } else {
    icon.className = 'uil uil-moon';
    button.title = 'Switch to Dark Theme';
  }
}

// Function to update and display current date and time
function updateDateTime() {
  const output = document.getElementById('date');
  if (!output) return;

  const now = new Date();
  output.innerHTML = now
    .toLocaleString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    .replace(',', '<br>');
}

// Update datetime every second
setInterval(updateDateTime, 1000);

// Function to perform basic arithmetic operations
function calculator(op) {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const sign = document.getElementById('sign');
  const answer = document.getElementById('answer');

  sign.innerHTML = op;

  switch (op) {
    case '+':
      answer.textContent = n1 + n2;
      break;
    case '-':
      answer.textContent = n1 - n2;
      break;
    case '*':
      answer.textContent = n1 * n2;
      break;
    case '/':
      answer.textContent = n1 / n2;
      break;
    default:
      answer.textContent = 'Invalid operator!';
      break;
  }
  updateOutputColor('answer');
  updateInputColor('n1');
  updateInputColor('n2');
}

// Function to update input field text color based on value
function updateInputColor(id) {
  const input = document.getElementById(id);
  if (input) {
    input.style.color = input.value > 0 ? 'green' : 'red';
  }
}

// Function to update output text color based on value
function updateOutputColor(id) {
  const output = document.getElementById(id);
  if (output) {
    output.style.color = parseFloat(output.textContent) > 0 ? 'green' : 'red';
  }
}

// Function to display multiplication table
function multiply() {
  const n3 = parseFloat(document.getElementById('n3').value);
  const n4 = parseFloat(document.getElementById('n4').value);
  const n5 = parseFloat(document.getElementById('n5').value);
  const res = document.getElementById('res');

  if (n5 < n4) {
    res.innerHTML =
      'Error! Final multiple should not be less than initial multiple';
  } else {
    res.innerHTML = '';

    for (let i = n4; i <= n5; i++) {
      res.innerHTML += `${n3 * i}<br>`;
    }
  }
}

// Function to check if a number is prime or composite
function checkPrime() {
  const num = parseFloat(document.getElementById('prime').value);
  const output = document.getElementById('prime-or-composite');

  if (isNaN(num)) {
    output.innerHTML = 'Please enter a number';
    return;
  }

  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  if (num <= 1) {
    output.innerHTML = 'Enter a natural number greater than 1';
  } else if (count === 2) {
    output.innerHTML = 'Prime';
  } else {
    output.innerHTML = 'Composite';
  }
}

// Function to convert Fahrenheit to Celsius
function far_to_cel() {
  const f = parseFloat(document.getElementById('to_celsius').value);
  const output = document.getElementById('far_to_celsius');

  if (isNaN(f)) {
    output.innerHTML = 'Please enter a number';
    return;
  }

  const c = (5 / 9) * (f - 32);
  output.innerHTML = `${c.toFixed(2)} °C`;

  if (c <= 0) {
    output.style.color = '#4682B4';
  } else if (c > 30) {
    output.style.color = '#FF4500';
  } else {
    output.style.color = 'green';
  }
}

// Function to generate random number between two values
function random() {
  const min = parseInt(document.getElementById('rand1').value);
  const max = parseInt(document.getElementById('rand2').value);
  const output = document.getElementById('random');

  if (isNaN(min) || isNaN(max)) {
    output.innerHTML = 'Please enter tow number';
    return;
  }

  if (min >= max) {
    output.innerHTML = 'Minimum must be less than Maximum';
    return;
  }

  output.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
}
