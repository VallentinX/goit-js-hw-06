const NAME_INPUT = document.getElementById("name-input"); // variable that stores the input#name-input.
const NAME_OUTPUT = document.getElementById("name-output"); // variable that stores the span#name-output.

NAME_INPUT.addEventListener("input", function () { // function aplied on input#name-input with an event listener.
  const INPUT_VALUE = NAME_INPUT.value; // variable stores the value of NAME_OUTPUT aka span#name-output.

  if (INPUT_VALUE === "") { // if ... else statement. 
    NAME_OUTPUT.textContent = "Anonymous"; // if the input#name-input is empty, then display "Anonymous" as the span#name-output content
  } else {
    NAME_OUTPUT.textContent = INPUT_VALUE; // else inside the span#name-output display the value inside input#name-input
  }
});
