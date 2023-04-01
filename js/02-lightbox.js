import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery'); /* клас галереї */


const galleryMarkup = galleryItems.map(({ original, preview, description }) => { /* створення масиву, додавання розмітки, перетворення в строку */
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
      </a>
    </li>`;
  }).join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup); /* добавляем список <li> в <ul> */

const lightboxOption = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'title', /* от куда брать название */
    captionDelay: 250, /* задержка */
    captionsPosiyion: 'bottom', /* размещение внизу */
}); /* работа с опцией из библиотеки */


document.addEventListener('keydown', function (evt) { /* закрытие "модалки" с Escape */
  if (evt.code === 'Escape') { /* (code) - повертає фізичну клавішу */
    lightboxOption.close();
  }
});

function onGalleryClick(evt) {
  evt.preventDefault(); /* сброс браузерных настроек */
}

galleryList.addEventListener('click', onGalleryClick); /* додавання слухача */



console.log(galleryItems);