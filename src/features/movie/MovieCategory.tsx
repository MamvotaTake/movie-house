import {Link} from "react-router-dom";

export default function MovieCategory() {
    return <div className="py-6 space-y-6">
        <p className="font-semibold text-gray-500">Categories</p>
        <div className="flex flex-col space-y-4">
            <Link to="/movies"
                  className="link">
                Actions
            </Link>
            <Link to="/movies"
                  className="link">
                Horror
            </Link>
            <Link to="/movies"
                  className="link">
                Adventure
            </Link>
            <Link to="/movies"
                  className="link">
                Crime
            </Link>
            <Link to="/movies"
                  className="link">
                War
            </Link>
            <Link to="/movies"
                  className="link">
                Cartoon
            </Link>
        </div>
    </div>;
}