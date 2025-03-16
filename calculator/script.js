let currentInput = "";

function appendValue(value) {
  if (currentInput.length < 20) {
    currentInput += value;
    updateResult();
  }
}

function clearResult() {
  currentInput = "";
  updateResult();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateResult();
}

function calculateResult() {
  try {
    // Check for valid input using basic validation
    if (currentInput) {
      const operators = ["+", "-", "*", "/"];
      let validInput = true;

      // Validate that the input doesn't end with an operator
      if (operators.includes(currentInput.slice(-1))) {
        validInput = false;
      }

      if (validInput) {
        const result = eval(currentInput); // Calculate result
        currentInput = result.toString();
        updateResult();
      } else {
        alert("Invalid input! Please correct the expression.");
      }
    }
  } catch {
    alert("Error in calculation!");
    clearResult();
  }
}

function updateResult() {
  document.getElementById("result").value = currentInput;
}