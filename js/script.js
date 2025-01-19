function openImage(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = imgElement.src; // Define a mesma imagem ampliada no modal
}

function closeImage() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}


/*texto animado*/
// Configuração do texto animado
const texts = ["Welcome to Create & Connect!", "Explore our services.", "Contact us!"];
const typingSpeed = 100; // Velocidade de digitação (ms)
const erasingSpeed = 50; // Velocidade de apagar (ms)
const delayBetweenTexts = 2000; // Tempo entre as frases (ms)

let textIndex = 0; // Índice do texto atual
let charIndex = 0; // Índice do caractere atual
const animatedTextElement = document.getElementById("animated-text");

function typeText() {
    if (charIndex < texts[textIndex].length) {
        animatedTextElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        animatedTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length; // Muda para o próximo texto
        setTimeout(typeText, typingSpeed);
    }
}

// Inicia a animação
document.addEventListener("DOMContentLoaded", () => {
    typeText();
});


