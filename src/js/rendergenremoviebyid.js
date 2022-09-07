import { refs } from "./constants";
import { genres } from "./genres";

export default function renderGenreMovie(movie) {
    const genreNames = [];
    movie.genre_ids.map(id => {
        for (const g of genres) {
            if (id === g.id) {
                return genreNames.push(g.name);
            };
        };
    });
    if (genreNames.length >= 3) {
        refs.movieGenre = `${genreNames[0]}, ${genreNames[1]}, Others`
    } else {
        refs.movieGenre = genreNames.join(", ")
    };
}