let counterValue = 0;

const DECREMENT_BUTTON = document.querySelector('[data-action="decrement"]'); // variable that stores the decrement button.
const INCREMENT_BUTTON = document.querySelector('[data-action="increment"]'); // variable that stores the increment button.
const COUNTER_SPAN = document.getElementById("value"); // variable that stores the span
/**
 * idea about arrow function taken from ChatGPT.
 */
DECREMENT_BUTTON.addEventListener("click", () => { // an arrow function aplied on the decrement button that has an event listener.
  counterValue--; // counter values decrease.
  COUNTER_SPAN.textContent = counterValue; // on click, the span's content changes with the value of counterValue.
});

INCREMENT_BUTTON.addEventListener("click", () => { // an arrow function aplied on the increment button that has an event listener.
  counterValue++; // counter values increase.
  COUNTER_SPAN.textContent = counterValue; // on click, the span's content changes with the value of counterValue.
});
