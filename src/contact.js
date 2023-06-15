import { createTitleAndTabs } from './index.js';

// attach to content div to create rest of content via js
const content = document.getElementById("content");

createTitleAndTabs("contact");

// create contactContent text boxes and image
const contactContent = document.createElement("div");
contactContent.classList.add("contactContent");

content.appendChild(contactContent);

const phone = document.createElement("div");
const address = document.createElement("div");
const locationImg = document.createElement("img");
const pledge = document.createElement("div");
const pledgeAuthor = document.createElement("div");

phone.classList.add("phone");
address.classList.add("address");
locationImg.classList.add("locationImg");
pledge.classList.add("pledge");
pledgeAuthor.classList.add("pledgeAuthor");

phone.textContent = "📞 (986) 697-4992 || 📞 (yum) my-pizza";
address.textContent = "🏠 1 Times Square, New York, NY 10036";
pledge.textContent = "\"I Pledge Allegiance to the Pizza and for the taste that is has, one circle, under sauce, with cheese and pepperoni for all.\"";
pledgeAuthor.textContent = "- Late Night Pizza Afficionado";

locationImg.src = "./images/location.png";
locationImg.alt = "NYC-Location";

contactContent.appendChild(phone);
contactContent.appendChild(address);
contactContent.appendChild(locationImg);
contactContent.appendChild(pledge);
contactContent.appendChild(pledgeAuthor);
