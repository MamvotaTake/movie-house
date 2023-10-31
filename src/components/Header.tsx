import {AiOutlineComment, AiOutlineMenu} from "react-icons/ai";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import take from "../assets/take.png";
import {Search} from "./Search.tsx";



function Header() {
    return (
        <div className='flex justify-between items-center bg-[#151515] py-7 px-10'>
            <div>
                <span className='flex items-center gap-2 text-3xl text-gray-100 cursor-pointer active:fill-gray-400 '>
                    <MdKeyboardArrowLeft className=' fill-gray-500 iconHover'/>
                    <MdKeyboardArrowRight className='fill-gray-100 iconHover'/>
                </span>
            </div>
            <Search />
            <div className='flex items-center gap3 md:gap-5 cursor-pointer'>
                <span className='flex items-center gap-2 text-lg text-gray-100'>
                    <AiOutlineComment className='text-3xl fill-gray-100 iconHover'/>
                </span>
                <span
                    className='flex bg-gradient-to-r from-green-500 from-10% via-sky-950 via-30% to-emerald-300 to-90% rounded-full items-center gap-2 text-lg text-gray-100'>
                    <img className='w-10 h-10 px-1 py-1 rounded-full' src={take} alt="tk"/>
                </span>
                <span className='flex items-center gap-2 text-lg text-gray-100'>
                    <AiOutlineMenu className='text-3xl fill-gray-100 iconHover'/>
                </span>

            </div>
        </div>
    );
}

export default Header;