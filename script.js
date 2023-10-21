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
  return operator(firstNumber, secondNumber);
}

const displayScreen = document.querySelector("#calculator-screen");

const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    displayScreen.textContent += button.textContent;
    displayValue += button.textContent;
    console.log(displayValue);
  });
});
