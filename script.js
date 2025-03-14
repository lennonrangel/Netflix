const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
const galeria = document.querySelector(".galeria");
const imagensGaleria = document.querySelector(".imagens-galeria");
const items = document.querySelectorAll(".item");
const maxItems = items.length;

let currentIndex = 0;

// Função para rolar o carrossel
function scrollCarousel() {
  // Rola suavemente para o item atual
  items[currentIndex].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

// Avançar 6 itens
setaDireita.addEventListener("click", () => {
  if (currentIndex + 6 < maxItems) {
    currentIndex += 6;
  } else {
    // Volta para o início se não houver 6 itens à frente
    currentIndex = 0;
  }
  scrollCarousel();
});

// Retroceder 6 itens
setaEsquerda.addEventListener("click", () => {
  if (currentIndex - 6 >= 0) {
    currentIndex -= 6;
  } else {
    // Vai para o final se não houver 6 itens para trás
    currentIndex = Math.max(maxItems - 6, 0);
  }
  scrollCarousel();
});