import {Link} from "react-router-dom";
import {RiBookmarkLine, RiBroadcastFill} from "react-icons/ri";
import {IoNotificationsOutline} from "react-icons/io5";

export default function MainLink() {
    return <div className="py-6 space-y-4">
        <p className="font-semibold text-gray-500">New Feed</p>
        <div className="flex flex-col space-y-6">
            <Link to="/movies"
                  className="link active">
                <RiBroadcastFill
                    className="fill-gray-100 text-2xl transition-all duration-500 hover:fill-gray-400"/>
                Browse
            </Link>
            <Link to="/movies"
                  className="link">
                            <span className="relative">
                                <RiBookmarkLine
                                    className="fill-gray-500 text-2xl transition-all duration-500 hover:fill-gray-400"/>
                                {/*<span className='absolute top-0 right-0 h-2 w-2 rounded bg-red-700'></span>*/}
                            </span>
                Watchlist
            </Link>
            <Link to="/movies"
                  className="link">
                            <span className="relative">
                                <IoNotificationsOutline
                                    className="fill-gray-500 text-2xl transition-all duration-500 hover:fill-gray-400"/>
                                <span className="absolute top-0 right-1 h-2 w-2 rounded bg-red-700"></span>
                            </span>
                Notifications
            </Link>
        </div>
    </div>;
}