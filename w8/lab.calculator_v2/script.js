let currentOperand = "";
let previousOperand = "";
let operation = undefined;

function clearAll() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  updateScreen();
}

function clearEntry() {
  currentOperand = "";
  updateScreen();
}

function appendNumber(number) {
  if (currentOperand.replace(/\s/g, "").length >= 12) return;

  if (number === "." && currentOperand.includes(".")) return;
  currentOperand += number;

  updateScreen();
}

function setOperation(op) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    calculate();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = "";
}

function calculate() {
  let computation;
  const prev = parseFloat(previousOperand.replace(/\s/g, ""));
  const current = parseFloat(currentOperand.replace(/\s/g, ""));
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "−":
      computation = prev - current;
      break;
    case "×":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = parseFloat(computation.toPrecision(12)).toString();

  if (currentOperand.length > 12) {
    currentOperand = parseFloat(currentOperand).toExponential(5);
  }

  operation = undefined;
  previousOperand = "";
  updateScreen();
}

function percentage() {
  if (currentOperand === "") return;
  currentOperand = (
    parseFloat(currentOperand.replace(/\s/g, "")) / 100
  ).toString();
  updateScreen();
}

function toggleSign() {
  if (currentOperand === "") return;
  currentOperand = (
    parseFloat(currentOperand.replace(/\s/g, "")) * -1
  ).toString();
  updateScreen();
}

function formatNumber(number) {
  const [integer, decimal] = number.split(".");
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
}

function updateScreen() {
  document.getElementById("result").innerText =
    formatNumber(currentOperand) || "0";
  document.getElementById("operation").innerText = operation
    ? `${formatNumber(previousOperand)} ${operation}`
    : "";
}
