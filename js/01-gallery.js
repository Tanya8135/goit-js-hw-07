import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const createGalleryItem = ({ preview, original, description }) =>
    `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
         class="gallery__image"
         src="${preview}"
         data-source="${original}"
         alt="${description}"
       />
     </a>
   </li>`;

const galleryMarkup = galleryItems.map(item => createGalleryItem(item)).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const onGalleryClick = (evt) => {
    evt.preventDefault();

    const imageEl = evt.target.classList.contains('gallery__image');
    if (!imageEl) {
        return;
    }

    const originalSrc = evt.target.dataset.source;
    openModal(originalSrc);
};

const openModal = (src) => {
    const imgModal = basicLightbox.create(`
      <img src="${src}" width="340" height="1280">
    `);

    imgModal.show();

    const closeModal = () => {
        imgModal.close();
    };

    galleryList.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
            closeModal();
        }
    });

    imgModal.element().addEventListener('click', (evt) => {
        if (evt.target.nodeName !== 'IMG') {
            closeModal();
        }
    });
};

galleryList.addEventListener('click', onGalleryClick);

console.log(galleryItems);