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

const onGalleryClick = (evt) => { /* обробка кліку по елементу */
    evt.preventDefault();

    const imageEl = evt.target.classList.contains('gallery__image');
    if (!imageEl) {
        return;
    }

    const originalSrc = evt.target.dataset.source; /* використовується для відкриття модального вікна */
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

/* Попробовать переделать закрытие модалки с esc по уроку от 08.04.23 */