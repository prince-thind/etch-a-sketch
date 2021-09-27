const userForm = document.querySelector('#user-form');
const matrixDiv = document.querySelector('#matrix');
const resetButton = document.querySelector('#reset');
const colorInputForm = document.querySelector('#color-input');

initialize();

function initialize() {
  createMatrixDivs(8);
  userForm.addEventListener('submit', handleInput);
  resetButton.addEventListener('click', reset);
}

function createMatrixDivs(n) {
  matrixDiv.style['grid-template-columns'] = `repeat(${n}, 1fr)`;
  matrixDiv.style['grid-template-rows'] = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n * n; i++) {
    const matrixChild = document.createElement('div');
    matrixChild.classList.add('matrix-element');
    matrixChild.addEventListener('mouseover', animation);
    matrixChild.addEventListener('click', animation);
    addColorAttrubute(matrixChild);
    matrixDiv.appendChild(matrixChild);
  }
}

function addColorAttrubute(element) {
  const hue = Math.random() * 361;
  element.setAttribute('data-hue', hue);
}

function handleInput(e) {
  e.preventDefault();
  reset('soft');
  input = +userForm.gridSize.value;
  createMatrixDivs(input);
}

function reset(flag) {
  matrixDiv.innerHTML = '';
  matrixDiv.style = '';
  if (flag == 'soft') return;
  createMatrixDivs(8);
}

function animation(e) {
  const element = e.target;
  const colorInput = colorInputForm.color.value;

  switch (colorInput) {
    case 'colored':
      const sat = getNumberBetween(25, 75);
      const lit = getNumberBetween(25, 75);
      const hue = element.getAttribute('data-hue');
      const hsl = `hsl(${hue},${sat}%,${lit}%)`;
      element.style.backgroundColor = hsl;
      break;
    case 'black':
      element.style.backgroundColor = 'black';
      break;
    case 'white':
      element.style.backgroundColor = 'white';
      break;
  }
}
function getNumberBetween(a, b) {
  return Math.trunc(Math.random() * (b - a) + a);
}
