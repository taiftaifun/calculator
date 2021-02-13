let currVal = 0;
let currValLen = 0;
let storedVal = 0;
let selectedOperator = "";
let clickedOperator = false;
let inputtingDecimal = false;
let decimalCounter = 0;
const displayDiv = document.querySelector("#display");
const numBtns = [...document.querySelectorAll(".num-btn")];
numBtns.forEach(numBtn => numBtn.addEventListener("click", setValue));
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const substractBtn = document.querySelector("#substract");
const addBtn = document.querySelector("#add");
const operatorBtns = [...document.querySelectorAll(".operator-btn")];
operatorBtns.forEach(operatorBtn => operatorBtn.addEventListener("click", selectOperator));
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearAll);
const equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", operate);
const decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener("click", setToDecimal);
const changesignBtn = document.querySelector("#changesign");
changesignBtn.addEventListener("click", changeSign);
const backBtn = document.querySelector("#back");
backBtn.addEventListener("click", back);


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

function operate() {
    if(clickedOperator === true) {
        let result = 0;
        switch(selectedOperator) {
            case "add":
                result = add(storedVal, currVal);
                break;
            case "substract":
                result = substract(storedVal, currVal);
                break;
            case "multiply":
                result = multiply(storedVal, currVal);
                break;
            case "divide":
                result = divide(storedVal, currVal);
                break;
        }
        if(result % 1 != 0) {
            result = roundFloat(result);
        }
        displayDiv.textContent = result;
        currVal = result;
        storedVal = 0;
        clickedOperator = false;
    } else {
        return null;
    }
}

function selectOperator(e) {
    selectedOperator = e.target.id;
    storedVal = currVal;
    currValLen = 0;
    currVal = 0;
    clickedOperator = true;
    inputtingDecimal = false;
}

function setValue(e) {
    if(currValLen < 12) {
        if(inputtingDecimal === false) {
            if(currVal == 0) {
                currVal = parseInt(e.target.id);
            } else if(currVal != 0) {
                currVal = (currVal * 10) + parseInt(e.target.id);
            }
        } else if(inputtingDecimal === true) {
            currVal = (currVal + parseInt(e.target.id)/(Math.pow(10, decimalCounter)));
            currVal = parseFloat(currVal.toFixed(decimalCounter));
            decimalCounter ++;
        }
        currValLen++;
    }
    displayDiv.textContent = currVal;
}

function clearAll() {
    currVal = 0;
    storedVal = 0;
    displayDiv.textContent = currVal;
    inputtingDecimal = false;
}

function setToDecimal() {
    if(inputtingDecimal === false) {
        inputtingDecimal = true;
        decimalCounter = 1;
    } else if(inputtingDecimal === true) {
        inputtingDecimal = false;
    }
}

function roundFloat(someFloat) {
    return Number(someFloat.toFixed(3));
}

function changeSign() {
    currVal = currVal*-1;
    displayDiv.textContent = currVal;
}

function back() {
    currValArr = currVal.toString().split("");
    if(currValArr[currValArr.length - 2] == ".") {
        currValArr.pop();
        currValArr.pop();
        inputtingDecimal = false;
    } else {
        currValArr.pop();
        if(inputtingDecimal == true) {
            decimalCounter --;
        }
    }
    currVal = Number(currValArr.join(""));
    displayDiv.textContent = currVal;
}