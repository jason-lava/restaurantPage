import { createTitleAndTabs } from './index.js';

// attach to content div to create rest of content via js
const content = document.getElementById("content");

createTitleAndTabs("menu");

// create menuContent text boxes and image
const menuContent = document.createElement("div");
menuContent.classList.add("menuContent");

content.appendChild(menuContent);

function pizzaFactory(pizza, description) {

    const myPizza = document.createElement("div");
    myPizza.classList.add(`${pizza}`);

    const pizzaImg = document.createElement("img");
    pizzaImg.src = `./images/${pizza}.png`;

    const pizzaItems = document.createElement("div");
    pizzaItems.classList.add(`${pizza}Items`);
    pizzaItems.textContent = `${pizza}`;
    pizzaItems.style.textTransform = "uppercase";

    const pizzaPara = document.createElement("p"); 
    pizzaPara.textContent = description;
    pizzaPara.style.textTransform = "capitalize";

    myPizza.appendChild(pizzaImg);
    myPizza.appendChild(pizzaItems);
    pizzaItems.appendChild(pizzaPara);

    menuContent.appendChild(myPizza);

    return myPizza;
};

pizzaFactory("cheese", "Cheese 3 ways: American, Mozarella, Cheddar");
pizzaFactory("pepperoni", "Shredded cheese, pepperoni, onions, black olives, basil");
pizzaFactory("margherita", "Tomatoes, mozarella, basil");
pizzaFactory("meat", "Meat 3 ways: Bacon, Salami, Pepperoni, tomatoes");
pizzaFactory("mushroom", "Mushrooms, tomatoes, arugula");
pizzaFactory("seafood", "Shrimp, tomatoes, arugula, black olives");
pizzaFactory("hawaiian", "Pineapple, cheese, basil");
pizzaFactory("pepper", "Red and Orange bell peppers, basil, onions");

const orderNow = document.createElement("a");
orderNow.classList.add("orderNow");
orderNow.href = "contact.html"
orderNow.textContent = "Ready to order? Give us a call!"

content.appendChild(orderNow);
