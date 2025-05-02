document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav.menu-mobile");

    // Função para fechar o menu
    const closeMenu = () => {
        navMenu.classList.remove("show");
    };

    // Função para verificar se o clique foi fora do menu
    const handleClickOutside = (e) => {
        if (!navMenu.contains(e.target) && !toggleButton.contains(e.target)) {
            closeMenu();
        }
    };

    // Alternar menu ao clicar no botão
    toggleButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede que o evento borbulhe
        navMenu.classList.toggle("show");
        
        // Adiciona/remove o listener de clique fora conforme o estado do menu
        if (navMenu.classList.contains("show")) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }
    });

    // Fechar menu ao clicar em links (opcional)
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });
});