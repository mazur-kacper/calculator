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
    console.log("lol");
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
const comaButton = document.querySelector("#coma-button");

function digitButtons() {
  numberButtons.forEach(function (button) {
    button.addEventListener("click", (event) => {
      if (operator && firstNumber != "") {
        displayScreen.textContent = "";
      }
      if (displayScreen.textContent === "0") {
        displayScreen.textContent = button.textContent;
      } else {
        displayScreen.textContent += button.textContent;
      }
      displayValue += button.textContent;
      console.log(displayValue);
    });
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
      displayScreen.textContent += " " + button.textContent;

      if (storedNumbers.length === 0) {
        operator = button.id;

        firstNumber = getInput();
        storedNumbers.push(firstNumber);
        displayValue = "";
      } else if (operator === "") {
        operator = button.id;
      } else if (storedNumbers.length === 1) {
        secondNumber = getInput();
        console.log(firstNumber, operator, secondNumber);

        res = operate(firstNumber, operator, secondNumber);
        console.log(firstNumber, operator, secondNumber);
        console.log("--");
        console.log(res);
        storedNumbers = [];
        storedNumbers[0] = res;
        firstNumber = storedNumbers[0];
        operator = button.id;
        console.log(storedNumbers);
        displayScreen.textContent = res + " " + button.textContent;
        secondNumber = "";
        displayValue = "";
      }
    });
  });
}

function coma() {
  comaButton.addEventListener("click", (event) => {
    if (displayValue.includes(".")) {
    } else {
      displayValue = displayValue + ".";
      displayScreen.textContent += ".";
    }
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
    console.log(storedNumbers);
    if (
      storedNumbers[0] === undefined ||
      (storedNumbers[1] === undefined && operator === "")
    ) {
    } else if (storedNumbers.length === 1) {
      secondNumber = getInput();
      storedNumbers.push(secondNumber);
      console.log(storedNumbers);
      console.log(firstNumber, operator, secondNumber);
      result = operate(storedNumbers[0], operator, storedNumbers[1]);
      if (result === "ERROR") {
        displayScreen.textContent = "ERROR";
      } else {
        result = parseFloat(
          operate(storedNumbers[0], operator, storedNumbers[1]).toString()
        );
        fixedResult = result.toFixed(8);
        fixedResult = fixedResult.toString();
        fixedResult = parseFloat(fixedResult);
        displayScreen.textContent = fixedResult.toString();
        console.log(storedNumbers);
        storedNumbers = [];
        storedNumbers.push(Number(result));
        console.log(storedNumbers);
        operator = "";
        number = "";
        displayValue = "";
      }
    }
  });
}

function calculator() {
  clear();
  digitButtons();
  utilizeOperator();
  calculate();
  backspace();
  coma();
}

calculator();

// w event listenerze operatora

// if (storedNumbers.length === 0) {
//   number = getInput();
//   operator = String(button.id);
//   storedNumbers.push(number);
//   number = "";
//   displayScreen.textContent += " " + button.textContent;
// } else if (storedNumbers.length === 1 && number.length > 0) {
//   number = getInput();
//   storedNumbers.push(Number(number));
//   result = String(operate(storedNumbers[0], operator, storedNumbers[1]));
//   displayScreen.textContent = `${result} `;
//   storedNumbers = [];
//   storedNumbers.push(Number(result));
//   operator = String(button.id);
//   number = "";
//   console.log(storedNumbers);
//   displayScreen.textContent += button.textContent;
//   hasBeenPerformed = true;
// } else {
// }
// displayValue = "";
// number = "";
// hasBeenPerformed = true;
// console.log(storedNumbers);
