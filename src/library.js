import { refs } from './js/constants-library';

let parsedObjectWathedfilmes = JSON.parse(localStorage.getItem("watchedMovie"));
let parsedObjectQueuefilmes = JSON.parse(localStorage.getItem("queueMovie"));

refs.watchedBtn.addEventListener("click", onWatchedBtn);
function onWatchedBtn(e) {
    e.preventDefault();
    // refs.libraryWatched.classList.toggle("is-hidden");
    // refs.libraryQueue.classList.toggle("is-hidden");
    if (!parsedObjectWathedfilmes) {
        return;
    } else {
        let libraryWatchedPost = parsedObjectWathedfilmes.map(film => {
            return `<li class="library__item library-watched__item">
        <a href="" class="library-watched__link link">
        <div class="library-watched-card">
        <img src="https://image.tmdb.org/t/p/original${film.path}" loading="lazy" alt="${film.title}">
        <p class="library-watched-card__title">${film.title}</p>
        <p class="library-watched-card__info">${film.genres} | <span class="gallery-card__date">${film.date} ${film.raiting}</span></p>
        </div></a></li>`}).join(" ");
    refs.libraryWatched.insertAdjacentHTML("beforeend", `${libraryWatchedPost}`);
    }
}
refs.QueueBtn.addEventListener("click", onQueueBtn);
function onQueueBtn(e) {
    e.preventDefault();
    // refs.libraryWatched.classList.toggle("is-hidden");
    // refs.libraryQueue.classList.toggle("is-hidden");
    console.log(libraryQueue);
    if (!parsedObjectQueuefilmes) {
        return;
    } else {
        let libraryQueuePost = parsedObjectQueuefilmes.map(film => {
            return `<li class="library__item library-queue__item">
        <a href="" class="library-queue__link link">
        <div class="library-queue__card">
        <img src="https://image.tmdb.org/t/p/original${film.path}" loading="lazy" alt="${film.title}">
        <p class="library-queue-card__title">${film.title}</p>
        <p class="library-queue-card__info">${film.genres} | <span class="gallery-card__date">${film.date} ${film.raiting}</span></p>
        </div></a></li>`}).join(" ");

        refs.libraryQueue.insertAdjacentHTML("beforeend", `${libraryQueuePost}`);
    }
}