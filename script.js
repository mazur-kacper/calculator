function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNumber;
let secondNumber;
let operator;
let displayValue = "";

function operate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "add":
      return add(firstNumber, secondNumber);
    case "subtract":
      return subtract(firstNumber, secondNumber);
    case "multiply":
      return multiply(firstNumber, secondNumber);
    case "divide":
      return divide(firstNumber, secondNumber);
  }
}

const displayScreen = document.querySelector("#calculator-screen");

const numberButtons = document.querySelectorAll(".number-button");

const operatorButtons = document.querySelectorAll(".operator-button");

const equalsButton = document.querySelector("#equals-button");

function setupButtons() {
  numberButtons.forEach(function (button) {
    button.addEventListener("click", (event) => {
      displayScreen.textContent += button.textContent;
      displayValue += button.textContent;
      console.log(displayValue);
    });
  });
}

function getInput() {
  return Number(displayValue);
}
function utilizeOperator() {
  operatorButtons.forEach(function (button) {
    button.addEventListener("click", (event) => {
      firstNumber = getInput();
      console.log(firstNumber);
      operator = String(button.id);
      displayScreen.textContent = "";
      displayValue = "";
    });
  });
}

function calculate() {
  equalsButton.addEventListener("click", (event) => {
    displayScreen.textContent = "";
    secondNumber = getInput();
    result = String(operate(firstNumber, operator, secondNumber));
    displayScreen.textContent = "";

    displayScreen.textContent = result;
    displayValue = result;
    console.log(displayValue);
  });
}

function calculator() {
  setupButtons();
  utilizeOperator();
  calculate();
}

calculator();
