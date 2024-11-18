// gallery.js

// Array de URLs das imagens de tatuagens (com caminho para a pasta 'img')
const tattooImages = [
    "img/Tatto01.jpeg",
    "img/Tatto02.jpeg",
    "img/Tatto03.jpeg",
    "img/Tatto04.jpeg",
    "img/Tatto05.jpeg",
    "img/Tatto06.jpeg",
    "img/Tatto07.jpeg",
    "img/Tatto08.jpeg",
    "img/Tatto09.jpeg",
    "img/Tatto10.jpeg",
    "img/Tatto11.jpeg",
    "img/Tatto12.jpeg"
];

// Função para renderizar a galeria
function renderGallery() {
    const galleryContainer = document.getElementById('gallery-container');

    // Criar um item da galeria para cada imagem
    tattooImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Tattoo ${index + 1}`;

        galleryItem.appendChild(imgElement);
        galleryContainer.appendChild(galleryItem);
    });
}

// Chamar a função para renderizar a galeria assim que a página carregar
window.onload = renderGallery;
