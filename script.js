const userInput = document.querySelector(".input");
const generateButton = document.querySelector(".action-button");
const matrixDiv = document.querySelector(".matrix");
const resetButton = document.querySelector(".reset");

initialize();

function initialize() {
  createMatrixDivs(8);
  generateButton.addEventListener("click", main);
  resetButton.addEventListener("click", reset);
}
function createMatrixDivs(n) {
  if (n < 2 || n > 60) {
    n = 8;
    alert("please enter the number in the range of 2-60");
  }
  n = n || 8;

  matrixDiv.style["grid-template-columns"] = `repeat(${n}, 1fr)`;
  matrixDiv.style["grid-template-rows"] = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n * n; i++) {
    const matrixElementDiv = document.createElement("div");
    matrixElementDiv.classList.add("matrix-element");
    matrixElementDiv.addEventListener("mouseover", animation);
    addColorAttrubute(matrixElementDiv);
    matrixDiv.appendChild(matrixElementDiv);
  }
}

function addColorAttrubute(element) {
  const hue = Math.random() * 361;
  const sat = 75;
  const lit = 75;
  element.setAttribute("data-hue", hue);
  element.setAttribute("data-sat", sat);
  element.setAttribute("data-lit", lit);
}
function main() {
  reset();
  input = +userInput.value;
  createMatrixDivs(input);
}
function reset() {
  matrixDiv.innerHTML = "";
  matrixDiv.style = "";
  createMatrixDivs(8);
}

function animation(e) {
  const element = e.target;
  element.setAttribute("data-lit", element.getAttribute("data-lit") - 25);
  const hsl = `hsl(${element.getAttribute("data-hue")},${element.getAttribute(
    "data-sat"
  )}%,${element.getAttribute("data-lit")}%)`;
  element.style.backgroundColor = hsl;
}
