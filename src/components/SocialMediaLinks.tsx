import {AiOutlineClose, AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {CiFacebook, CiTwitter} from "react-icons/ci";

interface  SocialMediaLinksProps {
    onClick: () => void;
}
export function SocialMediaLinks({onClick}: SocialMediaLinksProps) {
    return (
        <div className="absolute flex right-0  bg-white animate-pulse hover:animate-none px-4 py-2.5 rounded-lg">
            <div className='flex gap-2 flex-wrap cursor-pointer'>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <AiOutlineWhatsApp className="text-xl fill-green-600"/>
                WhatsApp
            </span>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <CiFacebook className="text-xl fill-blue-600"/>
                Facebook
            </span>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <CiTwitter className="text-xl fill-blue-700"/>
                Twitter
            </span>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <AiOutlineMail className="text-xl fill-gray-600"/>
                Email
            </span>
            </div>
            <span className='relative  -top-1 -right-2 cursor-pointer '>
                <AiOutlineClose onClick={onClick} className="text-lg fill-gray-500 hover:fill-red-600 transition-all duration-300"/>
            </span>
        </div>
    );
}
