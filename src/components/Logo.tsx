import {Link} from "react-router-dom";
import {BiSolidCameraMovie} from "react-icons/bi";

export  default function Logo() {
    return <Link to="/" className="flex cursor-pointer items-center gap-2 text-2xl font-bold text-white transition-all duration-300 hover:text-gray-200"><BiSolidCameraMovie className="text-2xl text-red-500"/>Movie <span className="text-red-500">Co</span> <span
        className="text-2xl text-red-500">.</span></Link>;
}