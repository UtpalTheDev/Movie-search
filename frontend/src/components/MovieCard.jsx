import {Link} from "react-router-dom";

export function MovieCard({movie}){

    return(
        <div  className = "sm:flex sm:justify-center w-full h-full "> 
        <Link to = {`/movie/${movie.imdbID}`}
        className="block w-50 sm:w-60 flex flex-col items-center h-full shadow-md" >
          <div className="w-full h-full">
            <img loading="lazy" src={ movie.Poster === 'N/A' ? `https://via.placeholder.com/300/fff` : movie.Poster} alt = {movie.Title} className="w-full h-4/5 rounded-t-md" />
            <div className="pl-1 pt-1 sm:text-lg max-h-14 overflow-hidden">{movie.Title}</div>
          </div>
        </Link>
       </div> 
    )
}