import {GiNetworkBars} from "react-icons/gi";
import {Link} from "react-router-dom";

import {formatRating, formatYear, getImageUrl} from "../../utils/helpers.ts";
import {Movie} from "../../types.ts";

interface MovieItemProps {
    movie: Movie
}
export function MovieItem({movie}: MovieItemProps) {
    const {id, name, title,poster_path, release_date, vote_average, adult } = movie;
    return (
            <div className='relative mb-20 cursor-pointer object-contain'>
                <Link to={`/movie/${id}`}>
                    <img alt={title} src={getImageUrl(poster_path)} className='h-96 w-full overflow-hidden rounded-t-lg object-cover transition-all duration-500 hover:scale-105 hover:object-cover' />
                    <span className='absolute top-2 right-2 flex items-center rounded-full px-1 py-1 font-bold text-white bg-gray-950 clip-polygon-6'>
                        {!adult ? '18+' : '+13'}
                    </span>
                    <div className='absolute bottom-0 flex w-full flex-col bg-gray-800'>
                        <p className='flex items-center justify-between px-3 py-2 text-lg text-gray-100'>
                            {release_date ? formatYear(release_date) : 'N/A'}
                            <span className={`flex items-center gap-2 ${vote_average >= 5 ? 'text-green-500' : 'text-red-500'}`}>
                                <GiNetworkBars className={`flex items-center text-xl ${vote_average >= 5 ? 'fill-green-500' : 'fill-red-500'}`}/> {formatRating(vote_average)}
                            </span>
                        </p>
                    </div>
                    <span className='absolute mt-2 text-lg text-white'> {title}  {name}</span>
                </Link>
            </div>
    );
}

