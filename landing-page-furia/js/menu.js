document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav.menu-mobile");

    toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
