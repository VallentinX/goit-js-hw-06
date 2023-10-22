const CATEGORIES_LIST = document.getElementById("categories"); // ul#categories stored in a variable.
const CATEGORIES_ITEMS = CATEGORIES_LIST.querySelectorAll("li.item"); // li.items stored inside teh CATEGORIES_LIST variable.
const COUNTER = CATEGORIES_ITEMS.length; // CATEGORIES_ITEMS is an array, so this variable stores how many li.items the ul#categories has.

console.log(`Number of categories: ${COUNTER}`);
/**
 * Helped by Ramona.
 * She explained forEach method (...)
 */
CATEGORIES_ITEMS.forEach((x) => { // (...) for each element inside ul#categories aply this function:
  const CATEGORIES_NAME = x.querySelector("h2").textContent; // store the content of h2 for each li.items element.
  console.log(`Categories: ${CATEGORIES_NAME}`); // console.log for each li.item, their category name concatinated.

  const CATEGORY_ITEMS_COUNT = x.querySelectorAll("li").length; // store the length of li from each category.
  console.log(`Numbers of elements: ${CATEGORY_ITEMS_COUNT}`); // console.log the length of each category concatinated.
});
/**
 * U got this! 😎🚀
 */