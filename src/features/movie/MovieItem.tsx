import {GiNetworkBars} from "react-icons/gi";
import {Link} from "react-router-dom";

interface MovieItemProps {
    movie: { director: string, imageUrl?: string, genre: string, rating: number, title: string, releaseYear: number }
}
export function MovieItem({movie}: MovieItemProps) {
    const {imageUrl, rating, title, releaseYear } = movie;
    return (
            <div className='relative cursor-pointer mb-20 object-contain'>
                <Link to={`/movie/${movie.title}`}>
                    <img alt={title} src={imageUrl} className='w-full h-96 object-cover hover:scale-105 hover:object-cover transition-all duration-500 rounded-t-lg overflow-hidden' />
                    <span className='absolute top-2 rounded-full bg-gray-950 right-2 clip-polygon-6 text-white font-bold flex items-center py-1 px-1'>
                        +16
                    </span>
                    <div className='absolute w-full bottom-0 flex flex-col bg-gray-800'>
                        <p className='flex justify-between items-center px-3 py-2 text-lg  text-gray-100'>
                            {releaseYear}
                            <span className={`flex items-center gap-2 ${rating >= 8 ? 'text-green-500' : 'text-red-500'}`}>
                                <GiNetworkBars className={`flex items-center text-xl ${rating >= 8 ? 'fill-green-500' : 'fill-red-500'}`}/> {rating}
                            </span>
                        </p>
                    </div>
                    <span className='absolute text-lg mt-2 text-white'> {title}</span>
                </Link>
            </div>
    );
}

