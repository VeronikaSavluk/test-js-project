import * as basicLightbox from 'basiclightbox';
import { refs } from './constants';
import createRequest from './createrequest';
import renderGenreMovieByName from './rendergenremoviebyname';
import { onBtnAddWatchedMovie, onBtnAddQueueMovie } from './addmovieintolocalstorige';

export default function onMovieCardClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  refs.movieId = e.target.dataset.id;
  createRequest().then((response) => response[1])
    .then(({ value }) => value.data)
    .then(data => {
      renderGenreMovieByName(data);
      const instance = basicLightbox.create(
  `<div class="modal">
    <button type="button" class="modal__button--close">
      <svg class="modal__button-icon--close" width="30" height="30">
        <use href="./images/icons.svg#close"></use>
      </svg>
        </button>
        <div class="modal__movie-card">
          <img src="https://image.tmdb.org/t/p/original${data.backdrop_path}" alt="" srcset=""></img>
          <div class="modal__movie-info">
            <h2 class="modal__movie-title">${data.title}</h2>
            <table class="modal__info-table">
                <tr>
                    <th>Vote / Votes</th>
                    <td><div class="modal__movie-vote"><p>${data.vote_average.toFixed(1)}</p></div> / ${data.vote_count}</td>
                </tr>
                <tr>
                    <th>Popularity</th>
                    <td>${data.popularity.toFixed(0)}</td>
                </tr>
                <tr>
                    <th>Original Title</th>
                    <td>${data.original_title}</td>
                </tr>
                <tr>
                    <th>Genre</th>
                    <td>${refs.movieGenre}</td>
                </tr>
            </table>
            <h3 class="modal__title-description">About</h3>
            <p class="modal__movie-description">${data.overview}</p>
            <ul class="modal__options list">
              <li class="modal__option">
                  <button type="submit" class="modal__option-btn watched-btn">Add to watched</button>
              </li>
              <li class="modal__option">
                  <button type="submit" class="modal__option-btn queue-btn">Add to queue</button>
              </li>
            </ul>
          </div>
        </div>
    </div>`
  , {
    onShow: (instance) => {
      const addWatchedMovie = instance.element().querySelector(".watched-btn");
      const addQueueMovie = instance.element().querySelector(".queue-btn");
      const modal = instance.element().querySelector(".modal");
      let features = {
        title: data.original_title,
        raiting: data.popularity.toFixed(0),
        path: data.poster_path,
        genres: refs.movieGenre,
        date: new Date(data.release_date).getFullYear(),
      }
      function onBtnAddWatchedMovie(e) {
        refs.watchedMovies.push(features);
}
      function onBtnAddQueueMovie(e) {
        refs.queueMovies.push(features);
}
      addWatchedMovie.addEventListener("click", onBtnAddWatchedMovie);
      addQueueMovie.addEventListener("click", onBtnAddQueueMovie);
      localStorage.setItem(`watchedMovie`, JSON.stringify(refs.watchedMovies));
      localStorage.setItem(`queueMovie`, JSON.stringify(refs.queueMovies));

      instance.element().querySelector('.modal').onclick = instance.close;
}
    });
      instance.show();
    });
};
