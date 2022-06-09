import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
    <a class="gallery__link" href='${original}'>
        <img class="gallery__image" src='${preview}' alt='${description}' captions='${description}'/>
    </a>
</li>`).join("");
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryRef.addEventListener('click',onItemClick);

function onItemClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: '250',
    });
    gallery.on('show.simplelightbox', function (e) {
	// do something…
        console.log("Вывели крупную картинку галереи");
        console.log(e);
});

    gallery.on('error.simplelightbox', function (e) {
        console.log(e); // some usefull information
    });    
}