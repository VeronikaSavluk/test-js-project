import { refs } from "./constants";
import renderGenreMovie from "./rendergenremoviebyid";

export default function renderMoviesCards() {
    const moviePost = refs.movies.map(movie => {
        renderGenreMovie(movie);

        const year = new Date(movie.release_date).getFullYear();

        return `<li class="gallery-item">
        <a href="" class="gallery-item__link link" data-modal-open>
        <div class="gallery-card">
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" loading="lazy" alt="${movie.title}" data-id="${movie.id}">
        <p class="gallery-card__title">${movie.original_title}</p>
        <p class="gallery-card__info">${refs.movieGenre} | <span class="gallery-card__date">${year}</span></p>
        </div></a></li>`
    }).join(" ");
    refs.gallery.innerHTML = "";
    refs.gallery.insertAdjacentHTML('beforeend', `${moviePost}`);
}