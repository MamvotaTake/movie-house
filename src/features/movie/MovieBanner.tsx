import {Button} from "../../components/Button.tsx";

export function MovieBanner() {

        return <div className='relative'>
                <img  className='h-96 w-full   object-cover' alt="Movie Banner" src="https://www.superherohype.com/wp-content/uploads/sites/4/2023/05/gotg-3-header.png"/>
                <div className='absolute top-0 bg-gradient-to-t from-gray-950  to-gray-950/70 w-full h-full'>
                    <div className='flex flex-col cursor-pointer absolute top-1/3 px-5 gap-2 left-2 text-white'>
                        <p className='text-xs font-semibold text-sky-500'>Science Fiction</p>
                        <h2 className='text-white text-3xl font-bold '>Guardians Of The Galaxy Vol. 3</h2>
                        <div className="flex w-6/12">
                            <p className='text-white text-sm font-normal '>Peter Quill is still trying to find a way to restore his memory after the events of Avengers: Endgame.
                                And when he's not trying to find a way to remember, he's trying to find a way to forget.
                            </p>
                        </div>
                        <div className='mt-7'>
                            <Button variant="tertiary" >Watch Now</Button>
                        </div>
                    </div>
                </div>
        </div>;
}
