const inputs = document.querySelectorAll(".input");

inputs.forEach((input, index) => {
  input.addEventListener("input", function(e) {
    // Get the value entered
    const value = e.target.value;

    // Check if it's a number and only 1 digit
    if (isNaN(value) || value === "") {
      e.target.value = "";
      return;
    }

    // Keep only the last digit
    e.target.value = value[value.length - 1];

    // Move focus to next input if available
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", function(e) {
    // Check if Backspace or Delete is pressed
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();

      // Clear current field
      e.target.value = "";

      // Move focus to previous input if available
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
