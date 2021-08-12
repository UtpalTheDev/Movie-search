import { Link } from "react-router-dom";
import { Search } from "../components";
import { useProvider } from "../context/Context";
import { useState } from "react";
export function Home() {
  const { data } = useProvider();
  const [page, setPage] = useState(1)

  return (
    <div>
      <Search page={page}/>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2 justify-center items-center gap-3 py-3">
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
      <div>
        <button 
        className = "bg-red-500 text-white px-2"
        onClick = {()=>{setPage(prev=>{
          if(prev !== 1){
            return prev-1
          }
          return prev
          })}}>
          Prev
        </button>
        <button 
        className = "bg-green-500 px-2 text-white"
        onClick = {()=>{
          setPage(prev=>{
            return prev+1
          })
        }}>Next</button>
      </div>
    </div>
  );
}