// container creation
const container = document.createElement('div');
container.classList.add('container');

// display creation
const displayInput = document.createElement('input');
displayInput.setAttribute('type', 'text');
displayInput.classList.add('display');
container.appendChild(displayInput);

//Create buttons div
const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');
container.appendChild(buttonsDiv);


