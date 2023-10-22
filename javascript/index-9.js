function getRandomHexColor() { // Creates a random code
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`; // Creates a random number, convert into a string(...)
// (...) then it takes the index from 0 to 6.
}

const BODY = document.getElementsByTagName("body")[0]; // variable that sores "body" tag.
const COLOR_SPAN = document.querySelector('.color'); // variable that stores span.color
const CHANGE_COLOR_BUTTON = document.querySelector('.change-color'); // variable that stores button.chnage-color

CHANGE_COLOR_BUTTON.addEventListener('click', function () { // function with an event listener on the button
  const RANDOM_COLOR = getRandomHexColor(); // color chnage function!

  BODY.style.backgroundColor = RANDOM_COLOR; // color change function aplied on BODY Style
  COLOR_SPAN.textContent = RANDOM_COLOR; // color change function aplied on SPAN content
});