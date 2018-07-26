const menuButton = document.getElementById("menu-btn");
const mainMenu = document.getElementById("main-menu");
const row1 = document.querySelector(".row1");
const row2 = document.querySelector(".row2");
const menuContainer = document.getElementById("menu-container");
let menuState = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!menuState) {
    menuButton.classList.remove("openMenu");
    menuButton.classList.add("closeMenu");
    mainMenu.style.visibility = "visible";
    row1.classList.add("show");
    row2.classList.add("show");
    menuContainer.classList.add("show");
    menuState = true;
  } else {
    menuButton.classList.remove("closeMenu");
    menuButton.classList.add("openMenu");
    menuContainer.classList.remove("show");
    row1.classList.remove("show");
    row2.classList.remove("show");
    mainMenu.style.visibility = "hidden";
    menuState = false;
  }
}
