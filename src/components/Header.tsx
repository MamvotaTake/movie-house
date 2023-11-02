import {AiOutlineComment} from "react-icons/ai";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import take from "../assets/take.png";
import {Search} from "./Search.tsx";
import {useState} from "react";
import {UserMenu} from "../features/user/UserMenu.tsx";
import {Modal} from "./Modal.tsx";
import {Message} from "./Message.tsx";



function Header() {
    const [isOpen, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='flex justify-between items-center bg-[#151515] py-7 px-10'>
            <div>
                <span className='flex items-center gap-2 text-3xl text-gray-100 cursor-pointer active:fill-gray-400 '>
                    <MdKeyboardArrowLeft className=' fill-gray-500 iconHover'/>
                    <MdKeyboardArrowRight className='fill-gray-100 iconHover'/>
                </span>
            </div>
            <Search />
            <div className='relative flex items-center md:gap-5 cursor-pointer'>
                <Modal>
                    <Modal.Open opens="open">
                        <span className='relative flex items-center text-lg text-gray-100'>
                            <AiOutlineComment className='text-3xl fill-gray-100 iconHover'/>
                            <span className="top-0 right-1 rounded absolute w-2 h-2 bg-red-700"></span>
                        </span>
                    </Modal.Open>
                    <Modal.Window name="open">
                        <Message/>
                    </Modal.Window>
                </Modal>
                <span onClick={handleClick}
                    className='flex bg-gradient-to-r from-green-500 from-10% via-sky-950 via-30% to-emerald-300 to-90% rounded-full items-center gap-2 text-lg text-gray-100'>
                    {isOpen && <img className='w-10 h-10 px-1 py-1 rounded-full' src={take} alt="tk"/>}
                    <div className='absolute z-20 top-0 right-10 flex flex-col '>
                        {!isOpen && <UserMenu onClick={handleClick}/>}

                    </div>
                </span>



            </div>
        </div>
    );
}

export default Header;