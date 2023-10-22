const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const GALLERY = document.querySelector(".gallery");

// my code - is working
for (let i = 0; i < images.length; i++) { // a for loop that:
  const LIST = document.createElement("li"); // stores in a variable the creation of a li element.
  const IMAGE = document.createElement("img"); // stores in a variable the creation the creation of an img element.

  const IMAGE_LIST = GALLERY.appendChild(LIST); // every time it goes around, add a li element to ul.gallery.
                                                // store the action in a variable.
  IMAGE_LIST.appendChild(IMAGE); // evry time it goes around create an img element inside the li element just has been created.

  const COUNTER_URL = images[i].url; // store in a variable the url object of the time loop inside images.length.
  const COUNTER_ALT = images[i].alt; // store in a variable the alt object of the time loop inside images.length.
  IMAGE.setAttribute("src", COUNTER_URL); // for the img element just add an atribute url which's equal with the COUNTER_URL.
  IMAGE.setAttribute("alt", COUNTER_ALT); // for the img element just add an atribute alt which's equal with the COUNTER_ALT.
}
// for some reason, the code doesn't work. Ask Sergiu! - Problem solved.

/**
 * Ioana's code. Unexplained!
 */

// const galleryContent = images.map((image) => `
//  <li class="gallery-item">
//    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
//  </li>
// `).join('');

// GALLERY.insertAdjacentHTML('beforeend', galleryContent);