import {Button} from "../../components/Button.tsx";
import {BsBookmark, BsFillPlayFill} from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai";
import {TbBrandNetflix} from "react-icons/tb";
import {ShareLink} from "../../components/ShareLink.tsx";
import {SocialMediaLinks} from "../../components/SocialMediaLinks.tsx";
import {useState} from "react";
import {getMovie} from "../../service/tmdbApi.ts";
import {Movie as MovieType} from "../../types.ts";
import {ActionFunctionArgs, LoaderFunction, ParamParseKey, Params, useLoaderData} from "react-router-dom";
import {formatOverview, formatRating, getImageUrl} from "../../utils/helpers.ts";

export function Movie() {
    const [isOpen, setIsOpen] = useState(false);
    const movie = useLoaderData() as MovieType;
    const { original_title, production_companies, vote_average,  poster_path, overview, release_date, genres, homepage } = movie
    return (
        <div className='flex gap-10 px-9 py-8 text-white'>
            <div className='flex flex-col gap-4'>
                <div className='relative overflow-hidden transition-all duration-500'>
                    <img className='h-96 w-80 cursor-pointer rounded-lg object-cover' src={getImageUrl(poster_path)} alt={original_title} />
                    <div className='absolute top-0 bottom-0 flex w-full translate-y-80 cursor-pointer px-4 py-6 font-bold text-white transition-all duration-700 bg-gray-950/50 hover:translate-y-0'>
                        <div className='absolute flex justify-between gap-8 text-xs'>
                            <span className='flex gap-1 text-xs'>
                                <BsBookmark className='text-xl hover:fill-blue-500'/>
                            Add to Watchlist
                            </span>
                            <span className='items-center rounded-full px-1 py-1 bg-gray-950/50'> +16</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    className="h-6 w-6 cursor-pointer fill-yellow-500 stroke-yellow-300 transition-all duration-300"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>
                        </div>

                         <div className='absolute top-2/4 bottom-0 left-0 flex w-full flex-col px-4 py-3 bg-gray-950'>
                                <div className='mb-3 flex items-center gap-2'>
                                    <TbBrandNetflix className='rounded-sm bg-white fill-red-600 text-4xl'/>
                                    <span className='flex flex-col px-1 text-lg text-red-600'>
                                    Netflix
                                    <span className='text-xs font-light text-white'>
                                        Now Streaming on Netflix
                                    </span>

                                </span>

                                </div>
                             <div className='relative'>
                                 <iframe
                                     src={homepage}
                                     title={original_title}
                                     width="100%"
                                     height="500px"
                                 ></iframe>
                                 <span className='absolute top-1/2 left-1/2 mt-2 flex -translate-x-1/2 -translate-y-1/2 transform text-red-600'>
                                 <AiOutlineYoutube className='flex animate-pulse items-center rounded-full bg-white p-1 text-5xl transition-all duration-300 fill-red-950 hover:animate-none hover:fill-stone-900'/>
                             </span>
                            </div>
                         </div>

                    </div>
                </div>
                <Button>
                    <BsFillPlayFill className='animate-pulse text-xl hover:animate-none'/>
                    Watch
                </Button>
            </div>
            <div className='relative flex flex-col space-y-4'>
                <div>
                    <h1 className='mb-5 flex items-center justify-between text-4xl font-bold text-stone-300'>
                        {original_title}
                        <ShareLink isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
                    </h1>
                </div>
                {isOpen &&<SocialMediaLinks onClick={() => setIsOpen(!isOpen)}/>}
                <div className='flex cursor-pointer flex-wrap items-center gap-4 text-2xl'>
                    <span className='flex items-center rounded-lg bg-gray-300 px-1 py-1 text-sm text-gray-900 transition-all duration-500 hover:bg-gray-400'>{release_date}</span>
                    {genres.map((genre) => (

                            <span key={genre.id} className='flex items-center rounded-lg bg-gray-300 px-1 py-1 text-sm text-gray-900 transition-all duration-500 hover:bg-gray-400'>{genre.name}</span>

                    ))}
                    <span className='flex items-center rounded-lg bg-gray-300 px-1 py-1 text-sm text-gray-900 transition-all duration-500 hover:bg-gray-400'>1h 52m</span>
                    <span className='flex animate-pulse items-center rounded-lg bg-red-100 px-1 py-1 text-sm text-red-500 transition-all duration-500 hover:animate-none hover:bg-red-200'><BsFillPlayFill className='text-xl'/>Play Trailer</span>
                </div>
                <div className='flex items-center gap-4'>
                    <span className={`rounded-lg ${vote_average >= 5 ? 'bg-green-500' : 'bg-red-500'}  px-1 py-1 font-bold space-x-1`}>Rating: <span className='ml-1 text-lg font-bold text-stone-100'>{formatRating(vote_average)}</span><span className='text-xs text-white'>/10</span></span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            className="h-6 w-6 cursor-pointer fill-yellow-300 transition-all duration-300 hover:fill-yellow-500"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </span>

                </div>
                <div className="flex w-9/12 flex-col">
                    <h4 className='mt-7 mb-1 text-lg font-bold'>Overview</h4>
                    <p className='text-justify text-sm' >
                        { formatOverview(overview)} <span className='cursor-pointer text-blue-500 transition-all duration-300 hover:underline'>See more</span>
                    </p>

                    <div className='mt-8 flex flex-wrap gap-4'>
                    <span className='flex flex-col items-center gap-2 font-bold'>
                        Ali Atay
                        <span className='text-sm font-normal'>Director, Writer</span>
                    </span>
                        <span className='flex flex-col items-center gap-2 font-bold'>
                        Aziz Kedi
                        <span className='text-sm font-normal'>Writer</span>
                    </span>
                        <span className='flex flex-col items-center gap-2 font-bold'>
                        Feyyaz Yiğit
                        <span className='text-sm font-normal'>Writer</span>
                    </span>
                    </div>
                    <div className='mt-5 border-b border-gray-700 divide-y-2'/>

                    <div className='mt-7 flex flex-wrap justify-between'>
                        { production_companies.map((company) => (
                            <span key={company.id} className='flex flex-col items-center gap-2 text-sm font-bold'>
                        <img
                            src={company.logo_path ? getImageUrl(company.logo_path) : 'https://fakeimg.pl/600x400/e82c2c/ffffff?text=Take&font=museo'}
                            alt="" className='h-12 w-12 rounded-full object-cover'/>
                                {company.name}
                        <span className='text-sm font-normal'>{company.origin_country}</span>
                    </span>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    );
};

const Paths = {
    movieDetail: "/movie/:movieId",
} as const;
interface MovieLoaderArgs extends ActionFunctionArgs {
    params: Params<ParamParseKey<typeof Paths.movieDetail>>;
}

export const loader: LoaderFunction = async ({ params }: MovieLoaderArgs) => {
    return await getMovie(parseInt(params.movieId as string));
};
