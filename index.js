let currVal = 0;
const displayDiv = document.querySelector("#display");
const numBtns = [...document.querySelectorAll(".num-btn")];
numBtns.forEach(numBtn => numBtn.addEventListener("click", setValue));
const multiplyBtn = document.querySelector("#multiply-btn");
multiplyBtn.addEventListener()
const divideBtn = document.querySelector("#divide-btn");
const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");

function add(a, b) {
    return(a + b);
}

function substract(a, b) {
    return(a - b);
}

function multiply(a, b) {
    return(a * b);
}

function divide(a, b) {
    return(a / b);
}

function operate(a, b, operator) {
    return(operator(a, b));
}

function setValue(e) {
    if(currVal == 0) {
        currVal = parseInt(e.target.id);
    } else if(currVal != 0) {
        currVal = (currVal * 10) + parseInt(e.target.id);
    }
    displayDiv.textContent = currVal;
}