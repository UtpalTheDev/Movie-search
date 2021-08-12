import { Link } from "react-router-dom";
import { useProvider } from "../context/Context";

export function Home() {
  const { data } = useProvider();
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2 justify-center items-center gap-3">
      {data &&
        data.map(movie => {
          return (
            <Link to={`/movie/${movie.imdbID}`}
            key={movie.imdbID}
            className="w-50 sm:w-60 flex flex-col  item-center h-full shadow-md">
              <div className="w-full h-full">
                <img src={movie.Poster} alt={movie.Title} className="w-full h-4/5 rounded-t-md" />
                <div className="pl-1">{movie.Title}</div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}