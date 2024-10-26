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

  // Round result to 12 significant digits, then convert to avoid trailing decimals
  currentOperand = parseFloat(computation.toPrecision(12)).toString();

  // If result exceeds 12 digits, convert to scientific notation
  if (currentOperand.replace(".", "").length > 12) {
    currentOperand = parseFloat(currentOperand).toExponential(5);
  }

  operation = undefined;
  previousOperand = "";
  updateScreen();
}

function percentage() {
  if (currentOperand === "") return;
  let computedPercentage = parseFloat(currentOperand.replace(/\s/g, "")) / 100;

  // Apply precision rounding and remove unnecessary decimals
  computedPercentage = parseFloat(computedPercentage.toPrecision(12));

  // Use scientific notation for very small values
  if (computedPercentage !== 0 && Math.abs(computedPercentage) < 1e-10) {
    currentOperand = computedPercentage.toExponential(5);
  } else {
    currentOperand = computedPercentage.toString();
  }

  updateScreen();
}

function toggleSign() {
  if (currentOperand === "") return;

  // Check if adding/removing "-" exceeds the 12-character limit
  if (currentOperand.startsWith("-")) {
    currentOperand = currentOperand.slice(1); // Remove "-" if it's already there
  } else if (currentOperand.replace(/\s/g, "").length < 12) {
    currentOperand = "-" + currentOperand; // Add "-" if within limit
  }

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
