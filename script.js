//title creation
const title = document.createElement('h1');
title.id = 'title';
title.textContent = "CALCULATOR";
document.body.appendChild(title);

//description content
const description = document.createElement('p');
description.id = 'description';
description.innerText = 'This is a calculator that performs basic arithmatic operations!';
document.body.appendChild(description);

// container creation
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// display creation
const displayInput = document.createElement('input');
displayInput.setAttribute('type', 'text');
displayInput.id = 'result';
container.appendChild(displayInput);

//Create buttons div
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');
container.appendChild(buttonsDiv);

const buttonValues = [
  ['C', '←', '.', '*'],
  ['7', '8', '9', '/'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '00', '=', '🐼']
];


buttonValues.forEach(rowvalue => {
  const row = document.createElement('div');
  row.classList.add('row-Data');
  rowvalue.forEach(value => {
    const buttons = document.createElement('button');
    buttons.textContent = value;
    buttons.setAttribute('data-value', value);
    buttons.classList.add('button');

    switch (value) {
      case 'C':
        buttons.id = 'clear';
        break;
      case '=':
        buttons.id = 'equal';
        break;
      case '←':
        buttons.id = 'back';
        break;
      case '+':
        buttons.id = 'add';
        break;
      case '-':
        buttons.id = 'subtract';
        break;
      case '/':
        buttons.id = 'divide';
        break;
      case '*':
        buttons.id = 'multiply';
        break;
      default:
        buttons.id = value;
    }

    row.appendChild(buttons);
  });
  buttonsDiv.appendChild(row);
});




// EVENT LISTENERS

buttonsDiv.addEventListener('click', event => {
  const target = event.target;
  const value = target.getAttribute('data-value');

  // to Check if the clicked element is a button
  if (target.tagName === 'BUTTON' && value) {
    // to Handle button click based on its value
    switch (value) {
      case 'C':
        // to Clear the display
        displayInput.value = '';
        break;
      case '←':
        // To Remove the last character from the display
        displayInput.value = displayInput.value.slice(0, -1);
        break;
      case '=':
        // To Evaluate the expression and display the result
        try {
          displayInput.value = eval(displayInput.value);
        } catch (error) {
          // To Handle any errors
          displayInput.value = 'Error';
        }
        break;
      default:
        // To Append the clicked button value to the display
        displayInput.value += value;
    }
  }
});


// setting ID
document.getElementById('C').id = 'clear';
document.getElementById('←').id = 'back';
document.getElementById('=').id = 'equal';
document.getElementById('+').id = 'add';
document.getElementById('-').id = 'subtract';
document.getElementById('*').id = 'multiply';
document.getElementById('/').id = 'divide';


