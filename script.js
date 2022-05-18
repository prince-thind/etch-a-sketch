const sizeForm = document.querySelector("#size-form");
const matrixDiv = document.querySelector("#matrix");
const resetButton = document.querySelector("#reset");
const colorInputForm = document.querySelector("#color-form");

sizeForm.addEventListener("submit", handelSizeFormSubmit);
resetButton.addEventListener("click", reset);
matrixDiv.addEventListener("mouseover", animate);
matrixDiv.addEventListener("click", animate);

setMatrixSize(8);

function handelSizeFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const size = formData.get("size");
  setMatrixSize(size);
}

function setMatrixSize(n) {
  matrixDiv.innerHTML = "";
  matrixDiv.style["grid-template-columns"] = `repeat(${n}, 1fr)`;
  matrixDiv.style["grid-template-rows"] = `repeat(${n}, 1fr)`;

  for (let i = 0; i < n * n; i++) {
    const matrixChild = document.createElement("div");
    matrixChild.classList.add("matrix-element");
    matrixDiv.appendChild(matrixChild);
  }
}

function animate(e) {
  const element=e.target;
  element.style.backgroundColor="black";
}


function reset(){
  setMatrixSize(8)
}