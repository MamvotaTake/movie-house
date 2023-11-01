import {AiFillCalendar, AiOutlineClose, AiOutlineComment, AiOutlineUser} from "react-icons/ai";
import {BiCurrentLocation, BiSupport} from "react-icons/bi";
import {MdOutlinePayment} from "react-icons/md";
import take from "../../assets/take.png";
import {UserMenuItem} from "./UserMenuItem.tsx";


type UserMenuProps = {
    onClick: () => void,
}

const userMenuItems = [
    {
        name: "Calendar",
        icon: <AiFillCalendar/>,
        onClick: () => {
            console.log("Calendar")
        },
        count: 2,
        type: 'blue',
    },
    {
        name: "Rewards",
        icon: <AiOutlineUser/>,
        onClick: () => {
            console.log("Rewards")
        },
        count: 2,
        type: 'red',
    },
    {
        name: "Address",
        icon: <BiCurrentLocation/>,
        onClick: () => {
            console.log("Address")
        },
    },
    {
        name: "Payment Methods",
        icon: <MdOutlinePayment/>,
        onClick: () => {
            console.log("Payment")
        },
    },
    {
        name: "Offers",
        icon: <AiOutlineUser/>,
        onClick: () => {
            console.log("Offers")
        },
        count: 3,
        type: 'green',
    },
    {
        name: "Refer a friend",
        icon: <AiOutlineComment/>,
        onClick: () => {
            console.log("Refer a friend")
        }
    },
    {
        name: "Support",
        icon: <BiSupport/>,
        onClick: () => {
            console.log("Support")
        },

    }
]



export function UserMenu({onClick}: UserMenuProps) {

    return (
        <div
            className='fixed px-3 py-6 translate-x-64 hover:translate-x-0 ml-5 transition-all duration-500  top-0 right-0 bg-gray-950 max-w-full w-80 h-screen '>
            <div className='flex space-x-2'>
                <img src={take} alt="tk"
                     className='w-12 h-12 bg-gradient-to-r from-green-500 from-10% via-sky-950 via-30% to-emerald-300 to-90%   border rounded-full'/>
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
                <span onClick={onClick}
                      className=' absolute top-0 right-0 flex justify-center items-center  cursor-pointer px-4 py-2 text-sm text-gray-100'><AiOutlineClose
                    className='text-xl hover:text-gray-400 transition-all duration-500 fill-gray-100'/></span>
            </div>

            <div className='flex flex-col justify-between space-y-8 mb-8'>
                {userMenuItems.map((item) => (
                    <UserMenuItem key={item.name} item={item}/>
                ))}
            </div>

        </div>
    );
}
