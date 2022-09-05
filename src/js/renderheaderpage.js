import { refs } from "./constants";
import createRequest from "./createrequest";
import renderButtons from "./renderbuttons";
import renderMoviesCards from "./rendermoviescards";

export default function renderHeaderPage() {
    createRequest().then((response) => response[0]
    ).then(({ value }) => value.data).then(({ total_pages, results }) => {
        refs.totalPages = total_pages;
        refs.movies = results;
        renderButtons();
        renderMoviesCards();
    });
}