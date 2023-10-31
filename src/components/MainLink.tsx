import {Link} from "react-router-dom";
import {RiBookmarkLine, RiBroadcastFill} from "react-icons/ri";
import {IoNotificationsOutline} from "react-icons/io5";

export default function MainLink() {
    return <div className="py-6 space-y-4">
        <p className="text-gray-500 font-semibold">New Feed</p>
        <div className="flex flex-col space-y-6">
            <Link to="/movies"
                  className="link active">
                <RiBroadcastFill
                    className="fill-gray-100 text-2xl hover:fill-gray-400 transition-all duration-500"/>
                Browse
            </Link>
            <Link to="/movies"
                  className="link">
                            <span className="relative">
                                <RiBookmarkLine
                                    className="fill-gray-500 text-2xl hover:fill-gray-400 transition-all duration-500"/>
                                {/*<span className='top-0 right-0 rounded absolute w-2 h-2 bg-red-700'></span>*/}
                            </span>
                Watchlist
            </Link>
            <Link to="/movies"
                  className="link">
                            <span className="relative">
                                <IoNotificationsOutline
                                    className="fill-gray-500 text-2xl hover:fill-gray-400 transition-all duration-500"/>
                                <span className="top-0 right-1 rounded absolute w-2 h-2 bg-red-700"></span>
                            </span>
                Notifications
            </Link>
        </div>
    </div>;
}