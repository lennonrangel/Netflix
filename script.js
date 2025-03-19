let setaEsquerda = document.querySelector(".seta-esquerda");
let setaDireita = document.querySelector(".seta-direita");
let galeria = document.querySelector(".galeria");
let imagensGaleria = document.querySelector(".imagens-galeria");
let item = document.querySelectorAll(".item");
let maxItem = item.length;

let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let info = document.querySelector(".info")
let audio = document.querySelector(".audio")

let currentIndex = 0;

// Função para rolar o carrossel
function Carousel() {
  // Rola suavemente para o item atual
  item[currentIndex].scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
}

// Avançar 6 itens
setaDireita.addEventListener("click", () => {
  if (currentIndex + 6 < maxItem) {
    currentIndex += 6;
  } else {
    // Volta para o início se não houver 6 itens à frente
    currentIndex = 0;
  }
  Carousel();
});

// Retroceder 6 itens
setaEsquerda.addEventListener("click", () => {
  if (currentIndex - 6 >= 0) {
    currentIndex -= 6;
  } else {
    // Vai para o final se não houver 6 itens para trás
    currentIndex = Math.max(maxItem - 6, 0);
  }
  Carousel();
});

// Mais informações
botao.addEventListener("click", mostrarInfo)
info.addEventListener("click", esconderInfo)

function mostrarInfo(){
    info.style.display = "block"
}

function esconderInfo(){
    info.style.display = "none"
}