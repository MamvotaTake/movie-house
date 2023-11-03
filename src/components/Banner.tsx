import imageCover from '../assets/image-cover.png';
import {BsBookmarkCheck, BsPlayCircle} from "react-icons/bs";
import {BiDownload} from "react-icons/bi";
import {AiOutlineLike, AiOutlineShareAlt} from "react-icons/ai";
import {Button} from "./Button.tsx";
export function Banner() {
    return (
        <div className='relative'>
            <img src={imageCover} className="w-screen rounded" alt="banner"/>
            <div className='absolute top-0 h-full w-full cursor-pointer bg-gradient-to-t from-gray-900 to-gray-950/50'/>

            <div className="absolute top-1/3 left-2 z-10 flex flex-col px-5 text-white">
                <div>
                    <span className="flex max-w-fit items-center gap-2 rounded-full bg-black px-2">Serial</span>
                </div>
                <h1 className="flex text-3xl font-bold text-gray-400">The Last Of Us Season 1</h1>
                <p className="flex gap-2 py-1 text-xl font-extrabold">
                    <span className='mt-2 flex items-center text-sm font-light'>9 Episodes</span> .
                    <span className='mt-2 flex items-center text-sm font-light'>2022</span>.
                    <span className='mt-2 flex items-center text-sm font-light'>Fantasy</span> .
                    <span className='mt-2 flex items-center text-sm font-light'>Actions</span> .
                </p>
                <div className='relative mt-3 mb-8 flex justify-between' >
                    <div className='flex gap-4'>
                        <Button variant='primary'>
                            <BsPlayCircle className='text-2xl'/>
                            Continue Watching
                        </Button>
                        <Button variant='tertiary' >
                            <BsBookmarkCheck className='text-2xl'/>
                            Add Watchlist
                        </Button>
                    </div>

                    <div className='flex gap-4 fle'>
                        <Button variant="secondary">
                            <BiDownload className='text-2xl'/>
                            Download
                        </Button>
                        <Button variant="secondary">
                            <AiOutlineShareAlt className='text-2xl'/>
                            Share
                        </Button>
                        <Button variant="secondary">
                            <AiOutlineLike className='text-2xl'/>
                            Share
                        </Button>
                    </div>
                </div>
                <div className='z-10 flex flex-col text-teal-50 space-y-4'>
                    <h5 className='text-3xl font-bold'>Story Line</h5>
                    <p className='text-lg'>
                        The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO.
                        Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a
                        mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal),
                        a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States
                    </p>
                </div>
            </div>

        </div>
    );
}
