function getRandomHexColor() {
  // Creates a random code
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`; // Creates a random number, convert into a string(...)
  // (...) then it takes the index from 0 to 6.
}
