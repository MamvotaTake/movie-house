import {AiOutlineShareAlt} from "react-icons/ai";

interface ShareLinkProps {
    onClick: () => void;
}

export function ShareLink({onClick}: ShareLinkProps) {

    return (
        <span onClick={onClick} className='bg-gray-300 cursor-pointer hover:bg-gray-400 transition-all duration-500 py-1 px-1 rounded-full text-gray-900'>
            <AiOutlineShareAlt/>
        </span>
    );
}
