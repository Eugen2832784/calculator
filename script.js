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

let firstNumber;
let secondNumber;
let operation;

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
