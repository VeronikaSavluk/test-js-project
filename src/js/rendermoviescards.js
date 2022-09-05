import { refs } from "./constants";
import renderGenreMovie from "./rendergenremovie";

export default function renderMoviesCards() {
    const moviePost = refs.movies.map(movie => {
        renderGenreMovie(movie);

        const year = new Date(movie.release_date).getFullYear();

        return `<li class="gallery-item">
        <div class="gallery-card">
        <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="${movie.title}">
        <p class="gallery-card__title">${movie.original_title}</p>
        <p class="gallery-card__info">${refs.movieGenre} | <span class="gallery-card__date">${year}</span></p>
        </div></li>`
    }).join(" ");
    refs.gallery.innerHTML = "";
    refs.gallery.insertAdjacentHTML('beforeend', `${moviePost}`);
}