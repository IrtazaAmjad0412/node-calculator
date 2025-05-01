const rs = require("readline-sync");

function checkOperationInput() {
  const operationInput = rs.question("What operation would you like to perform? ");
  const operationSymbols = ["/", "*", "-", "+", "%"];
  if (!operationSymbols.includes(operationInput)) {
    console.log("That is not a valid operation.");
    return checkOperationInput();
  }
  return operationInput;
}

function checkNumberInput() {
  const firstNumberInput = rs.questionInt("What is the first number? ");
  const secondNumberInput = rs.questionInt("What is the second number? ");
  return [firstNumberInput, secondNumberInput];
}

function resultForOperation(operationSymbol, numbers) {
  const operations = {
    "/": (num1, num2) => num1 / num2,
    "*": (num1, num2) => num1 * num2,
    "-": (num1, num2) => num1 - num2,
    "+": (num1, num2) => num1 + num2,
    "%": (num1, num2) => num1 % num2,
  };
  const result = operations[operationSymbol](numbers[0], numbers[1]);
  console.log(`The result is: ${result}`);
}

const operationSymbol = checkOperationInput();
const numbers = checkNumberInput();

resultForOperation(operationSymbol, numbers);

// checking git commands
