const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");
const addButton = document.querySelector("#addButton");
const substractButton = document.querySelector("#substract");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const dotButton = document.querySelector("#dot");
const equalsButton = document.querySelector("#equals");

const showSmall = document.querySelector(".showSmall");
const showBig = document.querySelector(".showBig");

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
  const result = a / b;
  return Math.round(result * 100) / 100;
}

let firstNumber = "";
let secondNumber = "";
let operation = "";

function operate(firstNumber, secondNumber, operation) {
  switch (operation) {
    case "+":
      console.log(add(firstNumber, secondNumber));
      break;
    case "-":
      console.log(substract(firstNumber, secondNumber));
      break;
    case "*":
      console.log(multiply(firstNumber, secondNumber));
      break;
    case "/":
      console.log(divide(firstNumber, secondNumber));
      break;
  }
}
