import {AiOutlineClose, AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {CiFacebook, CiTwitter} from "react-icons/ci";

interface  SocialMediaLinksProps {
    onClick: () => void;
}
export function SocialMediaLinks({onClick}: SocialMediaLinksProps) {
    return (
        <div className="absolute right-0 flex animate-pulse rounded-lg bg-white px-4 py-2.5 hover:animate-none">
            <div className='flex cursor-pointer flex-wrap gap-2'>
                <span className='flex flex-col items-center text-xs text-gray-800'>
                <AiOutlineWhatsApp className="fill-green-600 text-xl"/>
                WhatsApp
            </span>
                <span className='flex flex-col items-center text-xs text-gray-800'>
                <CiFacebook className="fill-blue-600 text-xl"/>
                Facebook
            </span>
                <span className='flex flex-col items-center text-xs text-gray-800'>
                <CiTwitter className="fill-blue-700 text-xl"/>
                Twitter
            </span>
                <span className='flex flex-col items-center text-xs text-gray-800'>
                <AiOutlineMail className="fill-gray-600 text-xl"/>
                Email
            </span>
            </div>
            <span className='relative -top-1 -right-2 cursor-pointer'>
                <AiOutlineClose onClick={onClick} className="fill-gray-500 text-lg transition-all duration-300 hover:fill-red-600"/>
            </span>
        </div>
    );
}
