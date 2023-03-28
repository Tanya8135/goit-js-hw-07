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
      <img src="${src}" width="600" height="800">
    `);

    imgModal.show();

    const handleImgClick = (evt) => {
        if (evt.code === 'Escape') {
            imgModal.close();
            document.removeEventListener('keydown', handleImgClick);
        }
    };

    document.addEventListener('keydown', handleImgClick);
};

galleryList.addEventListener('click', onGalleryClick);

console.log(galleryItems);