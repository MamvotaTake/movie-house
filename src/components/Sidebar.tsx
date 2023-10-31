
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
            <div className='bg-red-600 py-2 px-4 mb-8 rounded cursor-pointer hover:bg-red-500 transition-all duration-300'>
                <span className='flex items-center gap-2 text-lg text-gray-100'>
                    <CiLogout className='text-xl fill-gray-100' /> Logout
                </span>
            </div>
        </div>
    );
}
