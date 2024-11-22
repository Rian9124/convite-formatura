// Animação de transição entre seções
window.addEventListener("load", () => {
    const introSection = document.querySelector(".section-animação");
    const contentSection = document.querySelector(".section-conteudo");
    const logoContainer = document.querySelector(".logo-container");

    // Função para iniciar a animação de saída
    function startExitAnimation() {
        logoContainer.classList.add("exit"); // Adiciona classe para saída (opcional)
        setTimeout(() => {
            introSection.classList.add("hidden"); // Oculta a primeira seção
            contentSection.classList.remove("hidden"); // Mostra a segunda seção
            document.body.style.overflow = "auto"; // Permite scroll na nova seção
        }, 1500); // Tempo da animação de saída
    }

    // Inicia a animação de saída após 2 segundos
    setTimeout(startExitAnimation, 2000);
});
