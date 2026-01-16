let firstNumber = "";
let secondNumber = "";
let operation = "";
let isResultShown = false;

const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", () => handleNumber("1"));
const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", () => handleNumber("2"));
const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", () => handleNumber("3"));
const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", () => handleNumber("4"));
const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", () => handleNumber("5"));
const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", () => handleNumber("6"));
const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", () => handleNumber("7"));
const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", () => handleNumber("8"));
const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", () => handleNumber("9"));
const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", () => handleNumber("0"));
const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", () => handleOperation("+"));
const substractButton = document.querySelector("#substract");
substractButton.addEventListener("click", () => handleOperation("-"));
const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", () => handleOperation("/"));
const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", () => handleOperation("*"));
const dotButton = document.querySelector("#dot");
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", calculate);
const showSmall = document.querySelector("#showSmall");
const showBig = document.querySelector("#showBig");
clearButton.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  isResultShown = false;
  showSmall.textContent = "";
  showBig.textContent = "0";
});
function handleNumber(num) {
  if (operation === "") {
    if (isResultShown) {
      firstNumber = num;
      isResultShown = false;
    } else {
      firstNumber += num;
    }
    showBig.textContent = firstNumber;
  } else {
    secondNumber += num;
    showBig.textContent = secondNumber;
  }
}
function handleOperation(op) {
  if (firstNumber === "") return;
  if (secondNumber !== "") {
    calculate();
  }
  operation = op;
  showSmall.textContent = `${firstNumber} ${operation}`;
}
function calculate() {
  if (firstNumber === "" || secondNumber === "" || operation === "") return;
  const a = Number(firstNumber);
  const b = Number(secondNumber);
  const result = operate(a, b, operation);

  showBig.textContent = result;
  if (typeof result === "string") {
    firstNumber = "";
  } else {
    firstNumber = result.toString();
  }
  secondNumber = "";
  operation = "";
  isResultShown = true;
}
function add(a, b) {
  const result = a + b;
  return Math.round(result * 100) / 100;
}

function substract(a, b) {
  const result = a - b;
  return Math.round(result * 100) / 100;
}

function multiply(a, b) {
  const result = a * b;
  return Math.round(result * 100) / 100;
}

function divide(a, b) {
  if (b === 0) return "nope";
  const result = a / b;
  return Math.round(result * 100) / 100;
}

function operate(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return substract(firstNumber, secondNumber);

    case "*":
      return multiply(firstNumber, secondNumber);

    case "/":
      return divide(firstNumber, secondNumber);
  }
}
