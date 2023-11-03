import {Button} from "../../components/Button.tsx";
import {useFetcher} from "react-router-dom";
import {useEffect} from "react";
import {getImageUrl} from "../../utils/helpers.ts";
import {Movie} from "../../types.ts";

export function MovieBanner() {
    const fetcher = useFetcher();

    useEffect(function(){
        if (!fetcher.data && fetcher.state === 'idle') return fetcher.load("/movies");
    },[fetcher]);

   const movieData =  fetcher.data?.find((movie: Movie) => {
       if( movie.vote_average === 7.8 || movie.vote_average === 8.8 || movie.vote_average === 9.8 ){
           return movie
       }
   });

   console.log(movieData)

    const { name,backdrop_path, overview } = movieData ?? {}




        return <div className='relative'>
                <img  className='h-96 w-full object-cover' alt={name} src={getImageUrl(backdrop_path)}/>
                <div className='absolute top-0 h-full w-full bg-gradient-to-t from-gray-950 to-gray-950/70'>
                    <div className='absolute top-1/3 left-2 flex cursor-pointer flex-col gap-2 px-5 text-white'>
                        <p className='text-xs font-semibold text-sky-500'>Science Fiction</p>
                        <h2 className='text-5xl font-bold text-white'>{name}</h2>
                        <div className="flex w-8/12">
                            <p className='text-2xl font-normal text-white'>{overview}</p>
                        </div>
                        <div className='mt-3 mb-8'>
                            <Button variant="tertiary" >Watch Now</Button>
                        </div>
                    </div>
                </div>
        </div>;
}
