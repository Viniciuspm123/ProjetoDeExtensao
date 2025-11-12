const tattooImages = [
    "css/Tatto01.jpeg",
    "css/Tatto02.jpeg",
    "css/Tatto03.jpeg",
    "css/Tatto04.jpeg",
    "css/Tatto05.jpeg",
    "css/Tatto06.jpeg",
    "css/Tatto07.jpeg",
    "css/Tatto08.jpeg",
    "css/Tatto09.jpeg",
    "css/Tatto10.jpeg",
    "css/Tatto11.jpeg",
    "css/Tatto12.jpeg"
];

function renderGallery() {
    const galleryContainer = document.getElementById('gallery-container');

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

window.onload = renderGallery;

