import {MovieItem} from "./MovieItem.tsx";
import {MovieBanner} from "./MovieBanner.tsx";
import  {getMovieList} from "../../service/tmdbApi.ts";
import {useLoaderData} from "react-router-dom";
import {Movie} from "../../types.ts";


export function Movies() {
    const movies = useLoaderData() as Movie[];

    return (
        <div className='overflow-y-scroll'>
            <MovieBanner/>
            <h2 className='px-6 py-4 text-xl font-bold text-white'>Popular Movies For You</h2>
            <div className='relative grid grid-cols-2 gap-2 md:gap-4 py-4 md:grid-cols-5 md:px-6'>
                {movies.map((movie, index) => (
                    <MovieItem key={index} movie={movie}/>
                ))}
            </div>
        </div>

    );
}


export async function loader() {
    const movies = await getMovieList();
    return movies;
}
