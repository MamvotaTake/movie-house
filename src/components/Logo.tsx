import {Link} from "react-router-dom";

export  default function Logo() {
    return <Link to="/" className="hover:text-gray-200 transition-all duration-300 cursor-pointer text-white font-bold text-2xl">Movie <span className="text-red-500">Co</span> <span
        className="text-red-500 text-2xl">.</span></Link>;
}