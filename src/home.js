import { createTitleAndTabs } from './index.js';

// attach to content div to create rest of content via js
const content = document.getElementById("content");

createTitleAndTabs("home");

// create homeContent text boxes and image
const homeContent = document.createElement("div");
homeContent.classList.add("homeContent");

const topText = document.createElement("div");
const upperText = document.createElement("div");
const middleText = document.createElement("div");
const lowerText = document.createElement("div");

const pizzaChef = document.createElement("div");
const pizzaImage = document.createElement("img");

pizzaChef.appendChild(pizzaImage);

const bottomText = document.createElement("a");

topText.classList.add("topText")
upperText.classList.add("upperText")
middleText.classList.add("middleText")
lowerText.classList.add("lowerText")
pizzaChef.classList.add("pizzaChef")
bottomText.classList.add("bottomText")

topText.textContent = "DID YOU KNOW?"
upperText.textContent = "Pizza was born on March 14, 1592"
middleText.textContent = "300 years later to the day, we pledged our allegiance to the Pizza"
lowerText.textContent = "We've been saucin' it up ever since March 14, 1892"
bottomText.textContent = "Ready to order? Give us a call!"

pizzaImage.src = "./images/pizza.jpg";
bottomText.href = "contact.html";

content.appendChild(homeContent);

homeContent.appendChild(topText);
homeContent.appendChild(upperText);
homeContent.appendChild(middleText);
homeContent.appendChild(lowerText);
homeContent.appendChild(pizzaChef);
homeContent.appendChild(bottomText);