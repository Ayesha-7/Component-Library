const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu-wrapper");
const documentBody = document.querySelector(".body-content-wrapper");

let menuToggle = false;

menuButton.addEventListener("click", () => {
  menuToggle = !menuToggle;
  menuToggle ? (menu.style.display = "block") : (menu.style.display = "none");
  menuToggle
    ? (documentBody.style.display = "none")
    : (documentBody.style.display = "block");
});

menu.addEventListener("click", () => {
  documentBody.style.display = "block";
  menu.style.display = "none";
});
