function dark() {
  document.body.style.backgroundColor = '#353535';
  document.body.style.color = '#ffffff';
  updateElementColor('result', '#ffffff');
  updateElementColor('00', '#ffffff');
}

function white() {
  document.body.style.backgroundColor = '';
  document.body.style.color = '';
  updateElementColor('result', '');
  updateElementColor('00', '');
}

function updateElementColor(id, color) {
  var element = document.getElementById(id);
  if (element) {
    element.style.color = color;
  }
}

function calculator(op) {
  var n1 = parseFloat(document.getElementById('n1').value);
  var n2 = parseFloat(document.getElementById('n2').value);
  var sign = document.getElementById('sign');
  var javab = document.getElementById('javab');

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
  updateInputColor('n1');
  updateInputColor('n2');
  updateInputColor('n3');
  updateInputColor('n4');
  updateInputColor('n5');
  updateOutputColor('javab');
  updateOutputColor('res');
}

function updateInputColor(id) {
  var input = document.getElementById(id);
  if (input) {
    input.style.color = input.value > 0 ? 'green' : 'red';
  }
}

function updateOutputColor(id) {
  var output = document.getElementById(id);
  if (output) {
    output.style.color = parseFloat(output.textContent) > 0 ? 'green' : 'red';
  }
}

function mazrab() {
  var n3 = parseFloat(document.getElementById('n3').value);
  var n4 = parseFloat(document.getElementById('n4').value);
  var n5 = parseFloat(document.getElementById('n5').value);
  var res = document.getElementById('res');
  var result = document.getElementById('result');

  if (n5 < n4) {
    res.innerHTML = 'خطا ! مضرب نهایی نباید از مضرب اولیه کوچک تر باشد';
  } else {
    res.innerHTML = '';
    for (var i = n4; i <= n5; i++) {
      res.innerHTML += '<br>' + n3 * i;
    }
    result.innerHTML = 'done ! ';
  }

  changeColor();
}

function aval() {
  var aval = parseFloat(document.getElementById('aval').value);
  var output = document.getElementById('aval-or-morkab');

  if (isNaN(aval)) {
    output.innerHTML = 'لطفاً یک عدد وارد کنید';
    return;
  }

  var count = 0;
  for (var i = 1; i <= aval; i++) {
    if (aval % i == 0) {
      count++;
    }
  }
  if (aval <= 1) {
    output.innerHTML = 'فقط اعداد طبیعی بزرگ تر از ۱';
  } else if (count == 2) {
    output.innerHTML = 'اول است';
  } else {
    output.innerHTML = 'مرکب است';
  }
}

function far_to_cel() {
  let f = parseFloat(document.getElementById('to_celsius').value);
  var output = document.getElementById('far_to_celsius');

  if (isNaN(f)) {
    output.innerHTML = 'لطفاً یک عدد وارد کنید.';
    return;
  }

  let c = (5 / 9) * (f - 32);
  output.innerHTML = `${c.toFixed(2)} °C`;

  if (c <= 0) {
    output.style.color = '#4682B4';
  } else if (c > 30) {
    output.style.color = '#FF4500';
  } else {
    output.style.color = 'black';
  }
}
