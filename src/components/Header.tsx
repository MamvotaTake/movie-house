import {AiOutlineComment} from "react-icons/ai";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
import take from "../assets/take.png";
import {Search} from "./Search.tsx";
import {useState} from "react";
import {UserMenu} from "../features/user/UserMenu.tsx";
import {Modal} from "./Modal.tsx";
import {Message} from "../features/message/Message.tsx";



function Header() {
    const [isOpen, setIsOpen] = useState(true)

    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <div className='flex justify-between items-center bg-[#151515] py-7 px-10'>
            <div>
                <span className='flex cursor-pointer items-center gap-2 text-3xl text-gray-100 active:fill-gray-400'>
                    <MdKeyboardArrowLeft className='fill-gray-500 iconHover'/>
                    <MdKeyboardArrowRight className='fill-gray-100 iconHover'/>
                </span>
            </div>
            <Search />
            <div className='relative flex cursor-pointer items-center md:gap-5'>
                <Modal>
                    <Modal.Open opens="open">
                        <span className='relative flex items-center text-lg text-gray-100'>
                            <AiOutlineComment className='fill-gray-100 text-3xl iconHover'/>
                            <span className="absolute top-0 right-1 h-2 w-2 rounded bg-red-700"></span>
                        </span>
                    </Modal.Open>
                    <Modal.Window name="open">
                        <Message/>
                    </Modal.Window>
                </Modal>
                <span onClick={handleClick}
                    className='flex items-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-300 text-lg text-gray-100 from-10% via-sky-950 via-30% to-90%'>
                    {isOpen && <img className='h-10 w-10 rounded-full px-1 py-1' src={take} alt="tk"/>}
                    <div className='absolute top-0 right-10 z-20 flex flex-col'>
                        {!isOpen && <UserMenu onClick={handleClick}/>}

                    </div>
                </span>



            </div>
        </div>
    );
}

export default Header;