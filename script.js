const displayInput = document.querySelector('#result');
const buttonsDiv = document.querySelector('.buttons');

buttonsDiv.addEventListener('click', event => {
  const target = event.target;
  const value = target.getAttribute('data-value');

  if (target.tagName === 'BUTTON' && value) {
    switch (value) {
      case 'C':
        displayInput.value = '';
        break;
      case '←':
        displayInput.value = displayInput.value.slice(0, -1);
        break;
      case '=':
        try {
          displayInput.value = eval(displayInput.value);
        } catch (error) {
          displayInput.value = 'Error';
        }
        break;
      default:
        displayInput.value += value;
    }
  }
});