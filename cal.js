function toggleTheme() {
  const button = document.getElementById('themeButton');
  const icon = button.querySelector('i');

  if (document.body.classList.toggle('dark-theme')) {
    icon.className = 'uil uil-sun';
    button.title = 'تغییر به تم روشن';
  } else {
    icon.className = 'uil uil-moon';
    button.title = 'تغییر به تم تاریک';
  }
}

const updateElementColor = (id, color) => {
  document.getElementById(id)?.style &&
    (document.getElementById(id).style.color = color);
};


function updateDateTime() {
  const output = document.getElementById('date');
  if (!output) return;

  const now = new Date();
  output.innerHTML = now.toLocaleString('fa-IR', {
    numberingSystem: 'latn',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).replace(',', '<br>');
}

// Update every second instead of every frame
setInterval(updateDateTime, 1000);

function calculator(op) {
  const n1 = parseFloat(document.getElementById('n1').value);
  const n2 = parseFloat(document.getElementById('n2').value);
  const sign = document.getElementById('sign');
  const javab = document.getElementById('javab');

  sign.innerHTML = op;

  switch (op) {
    case '+':
      javab.textContent = n1 + n2;
      break;
    case '-':
      javab.textContent = n1 - n2;
      break;
    case '*':
      javab.textContent = n1 * n2;
      break;
    case '/':
      javab.textContent = n1 / n2;
      break;
    default:
      javab.textContent = '!عملگر نامعتبر!';
      break;
  }
  changeColor();
}

function changeColor() {
  ['n1', 'n2', 'n3', 'n4', 'n5'].forEach((id) => updateInputColor(id));
  ['javab', 'res'].forEach((id) => updateOutputColor(id));
}

function updateInputColor(id) {
  const input = document.getElementById(id);
  if (input) {
    input.style.color = input.value > 0 ? 'green' : 'red';
  }
}

function updateOutputColor(id) {
  const output = document.getElementById(id);
  if (output) {
    output.style.color = parseFloat(output.textContent) > 0 ? 'green' : 'red';
  }
}

function mazrab() {
  const n3 = parseFloat(document.getElementById('n3').value);
  const n4 = parseFloat(document.getElementById('n4').value);
  const n5 = parseFloat(document.getElementById('n5').value);
  const res = document.getElementById('res');
  const result = document.getElementById('result');

  if (n5 < n4) {
    res.innerHTML = 'خطا ! مضرب نهایی نباید از مضرب اولیه کوچک تر باشد';
  } else {
    res.innerHTML = '';
    for (let i = n4; i <= n5; i++) {
      res.innerHTML += `<br>${n3 * i}`;
    }
    result.innerHTML = 'done ! ';
  }
  changeColor();
}

function aval() {
  const aval = parseFloat(document.getElementById('aval').value);
  const output = document.getElementById('aval-or-morkab');

  if (isNaN(aval)) {
    output.innerHTML = 'لطفاً یک عدد وارد کنید';
    return;
  }

  let count = 0;
  for (let i = 1; i <= aval; i++) {
    if (aval % i === 0) count++;
  }
  if (aval <= 1) {
    output.innerHTML = 'فقط اعداد طبیعی بزرگ تر از ۱';
  } else if (count === 2) {
    output.innerHTML = 'اول است';
  } else {
    output.innerHTML = 'مرکب است';
  }
}

function far_to_cel() {
  const f = parseFloat(document.getElementById('to_celsius').value);
  const output = document.getElementById('far_to_celsius');

  if (isNaN(f)) {
    output.innerHTML = 'لطفاً یک عدد وارد کنید';
    return;
  }

  const c = (5 / 9) * (f - 32);
  output.innerHTML = `${c.toFixed(2)} °C`;

  if (c <= 0) {
    output.style.color = '#4682B4';
  } else if (c > 30) {
    output.style.color = '#FF4500';
  } else {
    output.style.color = 'black';
  }
}

function random() {
  const min = parseInt(document.getElementById('rand1').value);
  const max = parseInt(document.getElementById('rand2').value);
  const output = document.getElementById('random');

  if (isNaN(min) || isNaN(max)) {
    output.innerHTML = 'لطفاً دو عدد وارد کنید';
    return;
  }

  if (min >= max) {
    output.innerHTML = 'حداقل باید کمتر از حداکثر باشد';
    return;
  }

  output.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;
}
