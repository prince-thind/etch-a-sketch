const userInput = document.querySelector(".input");
const generateButton = document.querySelector(".action-button");
const matrixDiv = document.querySelector(".matrix");
const resetButton = document.querySelector(".reset");

initialize();

function initialize()
{
    createMatrixDivs(8);
    generateButton.addEventListener('click', main);
    resetButton.addEventListener('click', reset);

}
function createMatrixDivs(n)
{
   
    if(n<2||n>60)
    {
        n=8;
        alert("please enter the number in the range of 2-60");
    }
    n=n||8;
    
    matrixDiv.style["grid-template-columns"] = `repeat(${n}, 1fr)`;
    matrixDiv.style["grid-template-rows"] = `repeat(${n}, 1fr)`;
    for (let i = 0; i < n * n; i++)
    {
        const matrixElementDiv = document.createElement("div");
        matrixElementDiv.classList.add("matrix-element");
        matrixElementDiv.addEventListener('mouseover', animation);
        matrixDiv.appendChild(matrixElementDiv);
    }
}
function main()
{
    reset();
    input = +userInput.value;
    createMatrixDivs(input);
}
function reset()
{
    matrixDiv.innerHTML = '';
    matrixDiv.style='';
    createMatrixDivs(8);
}

function animation(e)
{
    e.target.classList.add("animation");
}