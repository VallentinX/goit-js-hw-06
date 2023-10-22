const INPUT_CONTROLER = document.getElementById("font-size-control"); // input#font-size-control stored in a variable.
const TEXT_SPAN = document.getElementById("text"); // span#text stored in a variable.

INPUT_CONTROLER.addEventListener("input", function () { // annoying function with an event listener applied on the input#font-size-control.
  const FONT_SIZE = INPUT_CONTROLER.value + "px"; // input#font-size-control concatinated with "px" and stored in a variable. (help from ChatGPT)
  TEXT_SPAN.style.fontSize = FONT_SIZE; // span#text control over font-size.
});