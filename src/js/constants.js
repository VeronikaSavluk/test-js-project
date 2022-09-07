export const refs = {
    form: document.querySelector("#search-form"),
    gallery: document.querySelector(".gallery-items"),
    movieCards: document.querySelectorAll(".gallery-card"),
    buttons: document.querySelector(".pages"),
    API_key: `4acb7b5ad40671c4d36a93ebc82fda39`,
    BASE_URL: `https:api.themoviedb.org/3`,
    query: "",
    page: 1,
    totalPages: 0,
    movies: null,
    movieGenre: null,
    movieId: null,
}