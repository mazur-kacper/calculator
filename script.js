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

numberButtons.forEach(function (button) {
  button.addEventListener("click", (event) => {
    displayScreen.textContent += button.textContent;
    displayValue += button.textContent;
  });
});

// operatorButtons.forEach(function (button) {
//   button.addEventListener("click", (event) => {
//     firstNumber = Number(displayValue);
//     operator = String(button.id);
//     button.style.cssText = "color: red;";
//     displayValue = "";
//   });
// });

// if (operator !== null) {
//   displayScreen.textContent = " ";
//   numberButtons.forEach(function (button) {
//     button.addEventListener("click", (event) => {
//       displayScreen.textContent += button.textContent;
//       displayValue += button.textContent;
//     });
//   });
// }

// equalsButton.addEventListener("click", (event) => {
//   displayScreen.textContent = "";
//   console.log(operate(firstNumber, operator, secondNumber));
// });
