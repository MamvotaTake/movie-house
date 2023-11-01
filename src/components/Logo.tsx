import {Link} from "react-router-dom";
import {BiSolidCameraMovie} from "react-icons/bi";

export  default function Logo() {
    return <Link to="/" className="flex items-center gap-2 hover:text-gray-200 transition-all duration-300 cursor-pointer text-white font-bold text-2xl"><BiSolidCameraMovie className="text-red-500 text-2xl"/>Movie <span className="text-red-500">Co</span> <span
        className="text-red-500 text-2xl">.</span></Link>;
}