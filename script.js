const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const calculationDisplay = display.firstElementChild;

const VALID_OPERATORS = ["*", "-", "+", "/"];

buttons.forEach((button) => {
  if (button.textContent !== "=") {
    button.addEventListener("click", () => {
      if (button.textContent === "C") {
        calculationDisplay.textContent = null;
      } else if (button.textContent === "Backspace") {
        deleteLast();
      } else if (button.textContent === "=") {
        calculationDisplay.textContent = null;
      } else {
        calculationDisplay.textContent += button.textContent;
      }
    });
  }
});

function deleteLast() {
    let newString = calculationDisplay.textContent.slice(0, -1);
    calculationDisplay.textContent = newString;
}

function safeEval(inputString, VALID_OPERATORS) {
    const containsValidOperator = VALID_OPERATORS.some(char => inputString.includes(char));
    if (!containsValidOperator) {
        throw new Error ("Input string is invalid");
    }
    return calculationDisplay.textContent = eval(inputString);
}

function calculate() {
    const result = safeEval(calculationDisplay.textContent, VALID_OPERATORS);
    calculationDisplay.textContent = result;
}
