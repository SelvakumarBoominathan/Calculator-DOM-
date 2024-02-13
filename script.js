// container creation
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

// display creation
const displayInput = document.createElement('input');
displayInput.setAttribute('type', 'text');
displayInput.classList.add('display');
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
  ['0', '00', '=']
];


buttonValues.forEach(rowvalue => {
  const row = document.createElement('div');
  row.classList.add('row-Data');
  rowvalue.forEach(value => {
    const buttons = document.createElement('button');
    buttons.textContent = value;
    buttons.setAttribute('data-value', value);
    row.appendChild(buttons);
  });
  buttonsDiv.appendChild(row);
});






