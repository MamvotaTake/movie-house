import {AiOutlineShareAlt} from "react-icons/ai";


interface ShareLinkProps {
    onClick: () => void;
    isOpen: boolean;
}

export function ShareLink({onClick, isOpen}: ShareLinkProps) {

    if (isOpen) return null;
    return (
        <span onClick={onClick}  className='bg-gray-300 cursor-pointer animate-pulse hover:animate-none hover:bg-gray-400 transition-all duration-500 py-1 px-1 rounded-full text-gray-900'
              >
            <AiOutlineShareAlt/>
        </span>
    );
}
