const sizeForm = document.querySelector("#size-form");
const matrixDiv = document.querySelector("#matrix");
const resetButton = document.querySelector("#reset");
const colorInputForm = document.querySelector("#color-form");

const state = {
  color: "#000",
  drawEnabled: false,
};

document.body.addEventListener("dragstart", preventDraging);

sizeForm.addEventListener("submit", handelSizeFormSubmit);
colorInputForm.addEventListener("change", updateColor);
resetButton.addEventListener("click", reset);
document.addEventListener("mousedown", enableDraw);
document.addEventListener("mouseup", disableDraw);
matrixDiv.addEventListener("mousemove", animate);
matrixDiv.addEventListener("click", animate);

setMatrixSize(8);

function enableDraw(e) {
  state.drawEnabled = true;
}

function disableDraw(e) {
  state.drawEnabled = false;
}

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
  if (state.drawEnabled == true || e.type === "click") {
    const element = e.target;
    element.style.backgroundColor = state.color;
  }
}

function reset() {
  setMatrixSize(8);
}

function preventDraging(e) {
  e.preventDefault();
}

function updateColor(e) {
  const color = e.target.value;
  state.color = color;
}
