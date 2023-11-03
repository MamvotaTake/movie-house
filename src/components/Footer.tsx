import {AiOutlineFacebook, AiOutlineWhatsApp} from "react-icons/ai";
import {BsDiscord} from "react-icons/bs";
import {ImVk} from "react-icons/im";

export function Footer() {
    return (
        <div className='fixed bottom-0 mt-10 w-full bg-stone-900 text-stone-500'>
            <div className='relative flex items-center gap-8 p-2'>
                Best Movie App © 2023
                <div className='flex cursor-pointer items-center justify-between gap-2 hover:text-gray-400'>
                    <span className='flex gap-8'><AiOutlineWhatsApp className="iconHover"/> <AiOutlineFacebook className="iconHover"/> <BsDiscord className="iconHover"/> <AiOutlineFacebook className="iconHover"/> <ImVk/> </span>
                </div>
            </div>
        </div>
    );
}
