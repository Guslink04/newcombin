
import {
    Link
} from "react-router-dom";

export const Header = () => {
    return <div className="sticky top-0 w-full px-16 py-8 drop-shadow-sm border-0 bg-blue-500 text-white">
        <div className="flex justify-around ">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/other-page" className="hover:underline">Other Page</Link>
        </div>
    </div>
}

export default Header;