const navMenu = document.querySelector("#nav-menu");
const navList = document.querySelector("#nav-list");
const navMenuList = document.querySelector("i");

navMenu.addEventListener("click", () => {
    navList.classList.toggle("open");

    const isOpen = navList.classList.contains("open");
    navMenuList.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navList.addEventListener("click", () => {
    navList.classList.remove("open");
    navMenuList.setAttribute("class", "ri-menu-line");
});