console.log("home.js is linked");

// attach to content div to create rest of content via js
const content = document.getElementById("content");
console.log(content);
content.innerHTML = "PIZZA";

// create title and top menu tabs
const title = document.createElement("div");
title.classList.add("title");
title.textContent = "Pizza-legiance";
content.appendChild(title);

const tabs = document.createElement("div");
tabs.classList.add("tabs");
content.appendChild(tabs);

const home = document.createElement("div");
const menu = document.createElement("div");
const contact = document.createElement("div");

home.classList.add("home");
menu.classList.add("menu");
contact.classList.add("contact");

home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contact";

tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);

const homeLink = document.createElement("a");
const menuLink = document.createElement("a");
const contactLink = document.createElement("a");

homeLink.href = "home.html";
menuLink.href = "menu.html";
contactLink.href = "contact.html";

home.appendChild(homeLink);
menu.appendChild(menuLink);
contact.appendChild(contactLink);













