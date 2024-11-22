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




// animação imagem

window.addEventListener('scroll', function() {
    const imagem = document.querySelector('#celular-insta');
    const position = imagem.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (position < windowHeight && position > 0) {
        imagem.style.right = '0px';
        imagem.style.opacity = '1';
    } else {
        // Se a imagem não estiver visível na tela
        imagem.style.right = '-100px';
        imagem.style.opacity = '0';
    }
});

// animação imagem

window.addEventListener('scroll', function() {
    const imagem = document.querySelector('#celular-insta2');
    const position = imagem.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (position < windowHeight && position > 0) {
        imagem.style.left = '0px';
        imagem.style.opacity = '1';
    } else {
        // Se a imagem não estiver visível na tela
        imagem.style.left = '-100px';
        imagem.style.opacity = '0';
    }
});

window.addEventListener('scroll', function() {
    const imagem = document.querySelector('#celular-insta2');
    const position = imagem.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (position < windowHeight && position > 0) {
        imagem.style.left = '0px';
        imagem.style.opacity = '1';
    } else {
        // Se a imagem não estiver visível na tela
        imagem.style.left = '-100px';
        imagem.style.opacity = '0';
    }
});