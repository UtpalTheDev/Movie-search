import { Search, MovieCard } from "../components";
import { useProvider } from "../context/Context";
import Error from "../assets/Error.svg"

export function Home() {
  const { data,page,setPage } = useProvider();
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
      <Search page={page}/>
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
          <div className="pt-8 w-full flex justify-center items-center flex-col">
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