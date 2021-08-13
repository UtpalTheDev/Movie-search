import pageNotFound from "../assets/pageNotFound.svg"
import {Link} from "react-router-dom"
export function NotFound(){

    return(
        <div className="pt-8 w-full flex justify-center items-center flex-col">
            <img src={pageNotFound} className="w-full max-w-md"/>
            <div>Page Not Found, Move to <Link to="/" className="bg-black text-white px-2 py-1 rounded-md">Home page</Link></div>
        </div>
    )
}