import { refs } from "./constants";

export default function renderGenreMovieByName(data) {
    const genreNames = [];
    data.genres.map(genre => {
    return genreNames.push(genre.name);
});
    refs.movieGenre = genreNames.join(", ")
};