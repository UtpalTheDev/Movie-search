import { Search, MovieCard } from "../components";
import { useProvider } from "../context/Context";
import Error from "../assets/Error.svg"
import { useState } from "react";

export function Home() {
  const { data,page,setPage } = useProvider();
  const [loading, setLoading] = useState("notLoading")
  function prevClick(){
    setPage(prev=>{
      if(prev !== 1){
        return prev-1
      }
      return prev
      })
  }
  function nextClick(){
    setPage(prev=>{
      return prev+1
    })
  }
  return (
    <div className="sm:px-2">
      {loading === "loading" && 
       <div className = "fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-70 flex justify-center items-center">
        <div>Loading...</div>
       </div>
       }
      <Search page={page} setLoading={setLoading}/>
      <div className = "grid sm:grid-cols-3 lg:grid-cols-5 grid-cols-2 justify-center items-center gap-x-3 gap-y-3 py-3 w-full px-2 sm:gap-y-7">
        {data?.length>0 &&
          data.map(movie => {
            return (
             <MovieCard movie={movie}/>
            );
          })}
        
      </div>
      
      {
          !data?.length>0 && 
          <div className="pt-8 w-full flex justify-center items-center flex-col pb-4">
            <img src={Error} className="w-full max-w-md"/>
            <div> No Search Results </div>
          </div>
       }  
       { (page > 1 || data?.length > 0) && 
          <div className="flex justify-center pb-4 pt-2">
            <button 
            className = "bg-red-500 text-white px-2 mr-2 sm:px-3.5 sm:py-2.5"
            style={{cursor:page!==1 ? `pointer` : `not-allowed`}}
            onClick = {prevClick}>
              Prev
            </button>
            <button 
            className = "bg-green-500 px-2 text-white sm:px-3.5 sm:py-2.5"
            style={{cursor:data?.length ? `pointer` : `not-allowed`}}
            onClick = {nextClick}>Next</button>
          </div>
      }
    </div>
  );
}