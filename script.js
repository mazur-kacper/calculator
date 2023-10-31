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
  if (b === 0) {
    return (displayScreen.textContent = "ERROR");
  } else {
    return a / b;
  }
}

let firstNumber;
let secondNumber;
let operator;
let displayValue = "";
let storedNumbers = [];
let hasBeenPerformed;

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
const clearButton = document.querySelector("#ac-button");
const backSpaceButton = document.querySelector("#backspace-button");

function digitButtons() {
  numberButtons.forEach(function (button) {
    button.addEventListener("click", (event) => {
      if (hasBeenPerformed) {
        displayScreen.textContent = "";
      }
      if (displayScreen.textContent === "0") {
        displayScreen.textContent = button.textContent;
      } else {
        displayScreen.textContent += button.textContent;
      }
      displayValue += button.textContent;
    });
    hasBeenPerformed = false;
  });
}

function getInput() {
  return Number(displayValue);
}

function backspace() {
  backSpaceButton.addEventListener("click", (event) => {
    if (displayScreen.textContent.length === 1) {
      if (displayScreen.textContent === "0") {
      } else {
        displayScreen.textContent = "0";
      }
    } else {
      displayScreen.textContent = displayScreen.textContent.slice(0, -1);
    }
  });
}

function utilizeOperator() {
  operatorButtons.forEach(function (button) {
    button.addEventListener("click", (event) => {
      hasBeenPerformed = true;
      if (storedNumbers.length === 0) {
        number = getInput();
        operator = String(button.id);
        storedNumbers.push(number);
        number = "";
        console.log(storedNumbers);
      } else if (storedNumbers.length === 1) {
        number = getInput();
        storedNumbers.push(Number(number));
        result = String(operate(storedNumbers[0], operator, storedNumbers[1]));
        displayScreen.textContent = `${result} `;
        storedNumbers = [];
        storedNumbers.push(Number(result));
        operator = String(button.id);
        number = "";
        console.log(storedNumbers);
      }
      displayValue = "";
      number = "";
    });
  });
}

function clear() {
  clearButton.addEventListener("click", (event) => {
    storedNumbers = [];
    displayScreen.textContent = "0";
    operator = "";
    displayValue = "";
  });
}

function calculate() {
  equalsButton.addEventListener("click", (event) => {
    number = getInput();
    storedNumbers.push(number);
    result = String(operate(storedNumbers[0], operator, storedNumbers[1]));
    displayScreen.textContent = `${result} `;
    storedNumbers = [];
    storedNumbers.push(Number(result));
    number = "";
    displayValue = "";
    console.log(storedNumbers);

    //   .toFixed(7)
    //   .replace(/\.?0+$/, "");
    // displayValue = Number(result)
    //   .toFixed(7)
    //   .replace(/\.?0+$/, "");
  });
}

function calculator() {
  clear();
  digitButtons();
  utilizeOperator();
  calculate();
  backspace();
}

calculator();
