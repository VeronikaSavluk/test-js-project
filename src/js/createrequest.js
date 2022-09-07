import axios from "axios";
import { refs } from "./constants";
let page = 1;

export default async function createRequest() {
  try {
    const primaryURL = `/trending/movie/day?api_key=${refs.API_key}`;
    let individualURL = `/movie/${refs.movieId}?api_key=${refs.API_key}`;
    let URLBySearch = `/search/movie?api_key=${refs.API_key}&language=en-US&query=${refs.query}&page=${page}&include_adult=false`;
    const URLs = [
      primaryURL,
      individualURL,
      URLBySearch
    ];

    const arrayofPromises = URLs.map(async (URLs) => {
      return await axios.get(`${refs.BASE_URL}${URLs}`);
    });

    const promise = await Promise.allSettled(arrayofPromises);
    return promise;
  } catch (error) {
    console.error(error);
  }
}
