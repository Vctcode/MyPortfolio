const harmburger_menu = document.querySelector(".harm-menu");
const container = document.querySelector(".container");

harmburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
});

// main.addEventListener("click", () => {
//     main.classList.toggle("active");
// });