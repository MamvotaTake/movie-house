import {AiFillCalendar, AiOutlineClose, AiOutlineComment, AiOutlineUser} from "react-icons/ai";
import {BiCurrentLocation, BiSupport} from "react-icons/bi";
import {MdOutlinePayment} from "react-icons/md";
import take from "../../assets/take.png";
import {UserMenuItem} from "./UserMenuItem.tsx";
import {Modal} from "../../components/Modal.tsx";



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
        type: 'yellow',
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
            className='fixed top-0 right-0 ml-5 h-screen w-80 max-w-full translate-x-64 px-3 py-6 transition-all duration-500 bg-gray-950 hover:translate-x-0'>
            <div className='flex space-x-2'>
                <img src={take} alt="tk"
                     className='h-12 w-12 rounded-full border bg-gradient-to-r from-green-500 to-emerald-300 from-10% via-sky-950 via-30% to-90%'/>
                <div className='relative flex items-center justify-between font-semibold'>
                <span className='flex flex-col text-lg text-gray-100'>
                        Takesure Mamvota
                    <span className='text-gray-400'>
                        @takesure
                    </span>
                </span>

                    <Modal>
                        <Modal.Open opens="take">
                            <span className='absolute top-7 -right-16 flex items-center text-lg text-gray-100'>
                    <AiOutlineComment className='fill-gray-100 text-3xl iconHover'/>
                    <span className="absolute top-0 right-1 h-2 w-2 rounded bg-red-700"></span>
                </span>
                        </Modal.Open>
                        <Modal.Window name="take">
                            <div>
                                <p>hello</p>
                            </div>
                        </Modal.Window>
                    </Modal>

                </div>
                <span onClick={onClick}
                      className='absolute top-0 right-0 flex cursor-pointer items-center justify-center px-4 py-2 text-sm text-gray-100'><AiOutlineClose
                    className='fill-gray-100 text-xl transition-all duration-500 hover:text-gray-400'/></span>
            </div>

            <div className='mb-8 flex flex-col justify-between space-y-8'>
                {userMenuItems.map((item) => (
                    <UserMenuItem key={item.name} item={item}/>
                ))}
            </div>

        </div>
    );
}
