import {AiOutlineClose, AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai";
import {CiFacebook, CiTwitter} from "react-icons/ci";

interface  SocialMediaLinksProps {
    onClick: () => void;
}
export function SocialMediaLinks({onClick}: SocialMediaLinksProps) {
    return (
        <div className="absolute  right-0 top-10 flex  bg-white  px-2 py-2 rounded-lg">
            <div className='flex gap-2 flex-wrap py-6 cursor-pointer'>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <AiOutlineWhatsApp className="text-4xl fill-green-600"/>
                WhatsApp
            </span>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <CiFacebook className="text-4xl fill-blue-600"/>
                Facebook
            </span>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <CiTwitter className="text-4xl fill-blue-700"/>
                Twitter
            </span>
                <span className='flex flex-col text-xs text-gray-800 items-center'>
                <AiOutlineMail className="text-4xl fill-gray-600"/>
                Email
            </span>
            </div>
            <span className='relative  top-0 right-0 cursor-pointer '>
                <AiOutlineClose onClick={onClick} className="text-xl fill-gray-500 hover:fill-red-600 transition-all duration-300"/>
            </span>
        </div>
    );
}
