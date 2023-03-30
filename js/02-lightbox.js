import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery'); /* клас галереї */

// new SimpleLightbox('.some-element a', { captionsData });
const lightbox = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'title', /* от куда брать название */
  captionDelay: 250, /* задержка */
  captionPosition: 'bottom', /* размещение внизу */
}); /* работа с библиотекой */

const galleryMarkup = galleryItems.map(item => /* створення масиву, додавання розмітки, перетворення в строку */
  `<li class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
</li>`).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup); /* добавляем список <li> в <ul> */

document.addEventListener('keydown', function (event) { /* закрытие "модалки" с Escape */
  if (event.code === 'Escape') { /* (code) - повертає фізичну клавішу */
    lightbox.close();
  }
});

function onGalleryClick(evt) {
  evt.preventDefault(); /* сброс браузерных настроек */
}

galleryList.addEventListener('click', onGalleryClick); /* додавання слухача */

console.log(galleryItems);