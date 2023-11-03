import axiosClient from "./axiosClient";
import {Movie} from "../types.ts";

export  async function getMovieList() : Promise<Movie[]> {
    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=57636314904ee0ef65b8fc20a3a80595&language=en-US&page=2';
    const response = await axiosClient.get(url);
    return response.data.results;
}

export async  function getMovie(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=57636314904ee0ef65b8fc20a3a80595&language=en-US`;
    const response = await  axiosClient.get(url);
    return response.data;
}
