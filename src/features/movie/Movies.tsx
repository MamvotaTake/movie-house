import {MovieItem} from "./MovieItem.tsx";
import {MovieBanner} from "./MovieBanner.tsx";
import  {getMovieList} from "../../service/tmdbApi.ts";
import {useLoaderData} from "react-router-dom";
import {Movie} from "../../types.ts";
import {FilterOperations} from "../../components/FilterOperations.tsx";


export function Movies() {
    const movies = useLoaderData() as Movie[];

    return (
        <div className='overflow-hidden mb-12'>
            <MovieBanner/>
            <div className='flex items-center justify-between '>
                <div className='text-sm flex items-center'>
                    <h2 className='px-6 py-6 text-lg font-semibold text-white'>Explore Movies</h2>
                    <FilterOperations/>
                </div>

            </div>
            <div className='relative grid grid-cols-2 gap-2 md:gap-4 py-1 md:grid-cols-5 md:px-6'>
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
