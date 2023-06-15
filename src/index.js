// create title and top menu tabs

function createTitleAndTabs(tab) {
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Pizza-legiance";

    const tabs = document.createElement("div");
    tabs.classList.add("tabs");

    const home = document.createElement("a");
    const menu = document.createElement("a");
    const contact = document.createElement("a");

    home.classList.add("home");
    menu.classList.add("menu");
    contact.classList.add("contact");

    if (tab === "home") {
        home.classList.add("active");
    } else if (tab === "menu") {
        menu.classList.add("active");
    } else {
        contact.classList.add("active");
    }

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    home.href = "home.html";
    menu.href = "menu.html";
    contact.href = "contact.html";

    content.appendChild(title);
    content.appendChild(tabs);

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
};

export { createTitleAndTabs };