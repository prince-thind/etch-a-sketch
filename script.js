const userForm = document.querySelector('#user-form');
const matrixDiv = document.querySelector('#matrix');
const resetButton = document.querySelector('#reset');
const colorInputForm = document.querySelector('#color-input');

initialize();

function initialize() {
  createMatrixDivs(8);
  userForm.addEventListener('submit', main);
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
  const sat = 75;
  const lit = 75;
  element.setAttribute('data-hue', hue);
  element.setAttribute('data-sat', sat);
  element.setAttribute('data-lit', lit);
}

function main(e) {
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

  if (colorInput == 'colored') {
    const litDecrement = 10;
    const dataLit = element.getAttribute('data-lit') - litDecrement;
    const dataHue = element.getAttribute('data-hue');
    const dataSat = element.getAttribute('data-sat');

    element.setAttribute('data-lit', dataLit);
    const hsl = `hsl(${dataHue},${dataSat}%,${dataLit}%)`;
    element.style.backgroundColor = hsl;
  } else if (colorInput == 'black') {
    element.style.backgroundColor = 'black';
  } else {
    element.style.backgroundColor = 'white';
  }
}
