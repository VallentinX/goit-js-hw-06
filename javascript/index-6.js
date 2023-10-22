const VALIDATION_INPUT = document.getElementById('validation-input'); // variable that stores the input.#validation-input

VALIDATION_INPUT.addEventListener('blur', function () { // function aplied on an input with a BLUR event listener.
  const INPUT_VALUE = VALIDATION_INPUT.value; // variable that stores the value of the input.
  const INPUT_LENGTH = parseInt(VALIDATION_INPUT.getAttribute('data-length')); // variable that stores an attribute of the input. / ChatGPT idea to use pareInt

  if (INPUT_VALUE.length === INPUT_LENGTH) { // if ... else statement.
    VALIDATION_INPUT.classList.remove('invalid'); // if the condition is true, removes the class "invalid" from the input.
    VALIDATION_INPUT.classList.add('valid'); // if the condition is true, adds the class "valid" on the input.
  } else {
    VALIDATION_INPUT.classList.add('invalid'); // else the condition ain't true, adds the class "invalid" on input.
    VALIDATION_INPUT.classList.remove('valid'); // else the condition ain't true, removes the class "valid" from the input.
  }
});