import {AiOutlineClose, AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {CiFacebook, CiTwitter} from "react-icons/ci";

interface  SocialMediaLinksProps {
    onClick: () => void;
}
export function SocialMediaLinks({onClick}: SocialMediaLinksProps) {
    return (
        <div className="absolute right-10 flex   animate-pulse rounded-lg bg-white px-4 py-6 hover:animate-none">
            <div className='flex flex-col cursor-pointer items-center flex-wrap gap-2'>
                <span className='flex flex-col  text-xs text-gray-800'>
                <AiOutlineWhatsApp className="fill-green-600 text-xl"/>
            </span>
                <span className='flex flex-col items-center text-xs text-gray-800'>
                <CiFacebook className="fill-blue-600 text-xl"/>
            </span>
                <span className='flex flex-col items-center text-xs text-gray-800'>
                <CiTwitter className="fill-blue-700 text-xl"/>
            </span>
                <span className='flex flex-col items-center text-xs text-gray-800'>
                <AiOutlineMail className="fill-gray-600 text-xl"/>

            </span>
            </div>
            <span className='relative -top-4 -right-2 cursor-pointer'>
                <AiOutlineClose onClick={onClick} className="fill-gray-500 text-sm transition-all duration-300 hover:fill-red-600"/>
            </span>
        </div>
    );
}
