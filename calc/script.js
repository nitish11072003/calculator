let currentInput = "";
let operator = "";
let resultDisplayed = false;

function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }

  if (buttonValue === "=") {
    calculateResult();
  } else if (buttonValue === "C") {
    clearDisplay();
  } else {
    currentInput += buttonValue;
    updateDisplay();
  }
}

function calculateResult() {
  const display = document.getElementById("display");

  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
    resultDisplayed = true;
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = currentInput;
}
