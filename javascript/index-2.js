const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const INGREDIENT_LIST = document.getElementById("ingredients"); // the ul#ingredients element stored in a variable.

for (let i = 0; i < ingredients.length; i++) { // a for loop that:
  const LIST = document.createElement("li"); // store in a variable the creation of an li element.
  const INGRIDIENT = ingredients[i]; // a variable that stores the value of the ingredientes evry time it goes around.

  INGREDIENT_LIST.appendChild(LIST); // every time it goes around, create an li element inside ul#ingredients.
  LIST.classList.add("item"); // every time it goes around, add a class to the li that has ben created.
  LIST.textContent = INGRIDIENT; // every time it goes around, the content of the li is the value of ingredients.length.
}
