import {AiOutlineShareAlt} from "react-icons/ai";


interface ShareLinkProps {
    onClick: () => void;
    isOpen: boolean;
}

export function ShareLink({onClick, isOpen}: ShareLinkProps) {

    if (isOpen) return null;
    return (
        <span onClick={onClick}  className='animate-pulse cursor-pointer rounded-full bg-gray-300 px-1 py-1 text-gray-900 transition-all duration-500 hover:animate-none hover:bg-gray-400'
              >
            <AiOutlineShareAlt/>
        </span>
    );
}
