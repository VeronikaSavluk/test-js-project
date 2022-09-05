import { refs } from './js/constants';
import renderHeaderPage from './js/renderheaderpage';
import createRequest from './js/createrequest';
import renderMoviesCards from './js/rendermoviescards';
import renderButtons from './js/renderbuttons';

renderHeaderPage();

refs.form.addEventListener("submit", onSearchBtnSubmit);
function onSearchBtnSubmit(e) {
    e.preventDefault();
    refs.gallery.innerHTML = "";
    refs.query = e.target.elements.searchQuery.value.trim();

    if (refs.query !== "") {
        createRequest().then((response) => response[2])
            .then(({ value }) => value.data).then(({ total_pages, results }) => {
                refs.totalPages = total_pages;
                refs.movies = results;
                if (refs.totalPages >= 1) {
                    renderButtons();
                    renderMoviesCards();
                } else {
                    refs.form.insertAdjacentHTML("afterend",
                        `<p class="incorrect-movie-name">Search result not successful.
                        Enter the correct movie name</p>`);
                }
            })
    }
    if (refs.query === "") {
        renderHeaderPage();
    }
}

refs.buttons.addEventListener("click", onButtonClick);
function onButtonClick(e) {
    refs.page = e.target.dataset.page;
};