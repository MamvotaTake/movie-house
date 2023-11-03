
import MovieCategory from "../features/movie/MovieCategory.tsx";
import Logo from "./Logo.tsx";
import MainLink from "./MainLink.tsx";
import {CiLogout} from "react-icons/ci";




/**
 * Renders the sidebar component.
 *
 * @returns The sidebar component.
 */
export function Sidebar() {
    return (
        <div className='flex flex-col px-6 justify-between items-left bg-[#151515] py-12'>
            <Logo/>
            <MainLink/>
            <MovieCategory/>
            <div className='mb-8 cursor-pointer rounded bg-red-600 px-4 py-2 transition-all duration-300 hover:bg-red-500'>
                <span className='flex items-center gap-2 text-lg text-gray-100'>
                    <CiLogout className='fill-gray-100 text-xl' /> Logout
                </span>
            </div>
        </div>
    );
}
