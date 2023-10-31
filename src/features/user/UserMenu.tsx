import {AiFillCalendar, AiOutlineClose, AiOutlineComment, AiOutlineUser} from "react-icons/ai";
import {PiMedalBold} from "react-icons/pi";
import {BiCurrentLocation, BiSupport} from "react-icons/bi";
import {MdOutlinePayment} from "react-icons/md";
import take from "../../assets/take.png";


type UserMenuProps = {

    onClick: () => void,
}

export function UserMenu({onClick}: UserMenuProps) {

    return (
        <div className='relative px-4 py-7  -translate-y-8 hover:translate-x-0 ml-5 transition-all duration-500  top-0 -right-20 bg-gray-950 max-w-full w-80 h-screen '>
        <div className='flex space-x-2'>
            <img src={take} alt="tk" className='w-12 h-12 bg-gradient-to-r from-green-500 from-10% via-sky-950 via-30% to-emerald-300 to-90%   border rounded-full'/>
            <p className=' relative flex items-center justify-between font-semibold'>
                <span className='flex flex-col text-lg text-gray-100'>
                        Takesure Mamvota
                    <span className=' text-gray-400'>
                        @takesure
                    </span>
                </span>
                <span className='absolute top-7 -right-16 flex items-center text-lg text-gray-100'>
                    <AiOutlineComment className='text-3xl fill-gray-100 iconHover'/>
                    <span className="top-0 right-1 rounded absolute w-2 h-2 bg-red-700"></span>
                </span>

            </p>
            <span onClick={onClick} className=' absolute top-0 right-0 flex justify-center items-center  cursor-pointer px-4 py-2 text-sm text-gray-100'><AiOutlineClose className='text-xl hover:text-gray-400 transition-all duration-500 fill-gray-100'/></span>
        </div>

            <div className='flex flex-col justify-between space-y-10 mb-8'>
                <div className='flex items-center justify-between mt-7 px-4 py-2 rounded-lg  hover:bg-gray-500 transition-all duration-700'>
                    <span className='flex items-center text-lg gap-3'><AiFillCalendar className='text-2xl fill-gray-100 '/> Calendar</span>
                    <span className="bg-blue-300 text-lg font-semibold px-2 text-gray-900 rounded">2</span>
                </div>

                <div className='flex items-center justify-between mt-7 px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-700'>
                    <span className='flex items-center text-lg  gap-3'><PiMedalBold className='text-2xl fill-gray-100 '/> Rewards</span>
                    <span className="bg-red-300 text-lg font-semibold px-2 text-red-900 rounded">2</span>
                </div>

                <div className='flex items-center justify-between mt-7 px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-700'>
                    <span className='flex items-center text-lg gap-3'><BiCurrentLocation className='text-2xl fill-gray-100 '/> Address</span>
                </div>

                <div className='flex items-center justify-between mt-7 px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-700'>
                    <span className='flex items-center text-lg  gap-3'><MdOutlinePayment className='text-2xl fill-gray-100 '/> Payment Methods</span>
                </div>

                <div className='flex items-center justify-between mt-7 px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-700'>
                    <span className='flex items-center text-lg gap-3'><AiOutlineUser className='text-2xl fill-gray-100 '/> Offers</span>
                    <span className="bg-green-300 text-lg px-2 text-gray-900 rounded">2</span>
                </div>

                <div className='flex items-center justify-between mt-7 px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-700'>
                    <span className='flex items-center text-lg gap-3'><AiFillCalendar className='text-2xl fill-gray-100 '/> Refer a friend</span>
                </div>

                <div className='flex items-center justify-between mt-7 px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-700'>
                    <span className='flex items-center text-lg gap-3'><BiSupport className='text-2xl fill-gray-100 '/> Support</span>
                </div>
            </div>

        </div>
    );
}
