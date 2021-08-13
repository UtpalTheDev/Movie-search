import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import movieError from "../assets/movieError.svg"
export function MovieDetails(){
  const [movieData, setMovieData] = useState(null)  
  const [loading, setLoading] = useState("notLoading")
  const [gotError, setError] = useState("noError")
  const {id} = useParams()  
  useEffect(()=>{
      (async()=>{
          try{
            setLoading("loading")  
            let response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`)
            if(response.status===200 && !response.data.Error){
            setMovieData(response.data)
            }
            else{
                throw new Error(response.data.error)
            }
            setLoading("notLoading")

          }
          catch(error){
              setLoading("notLoading");
              setError("error")  
              console.log(error)
          }
      })()
  },[])
    return(
    <>
    {
        loading==="loading" &&
        <div className="fixed inset-1/2">
            Loding...
        </div>
    }
    {
        gotError==="error" &&
        <div className="pt-8 w-full flex justify-center items-center flex-col">
            <img src={movieError} className="w-full max-w-md"/>
            <div>We are not able to get movie details</div>
        </div>
    }
    {
        movieData?.Title &&
        <div className="min-h-screen h-screen flex flex-col sm:flex-row sm:justify-start pt-5 sm:mx-4">
            <div className="h-2/5 flex justify-center sm:justify-start">
                <img src={`${movieData.Poster}`} alt={`${movieData.Title}`} className="w-full h-full max-w-md rounded-lg sm:w-60 sm:mr-2"/> 
            </div>
            <div className="sm:flex-grow">   
                <div className="text-2xl p-2 sm:text-4xl sm:pt-0 font-bold">{movieData.Title}</div>
                <div className="flex pl-2">
                    {movieData.Genre.split(',').map((item,index)=>{
                        return(
                            <div key={item+index}class="px-2 bg-gray-300 text-black-500 max-w-max rounded-md mr-2">
                                {item}
                            </div>    
                        )
                    })}
                </div>
                <div className="px-2 py-5 text-sm text-gray-500">{movieData.Plot}</div>
                <hr/>
                <div className="text-lg font-semibold mt-2 pl-2">Ratings</div>
                <div className="flex flex-col sm:flex-row py-3 px-2">
                    
                    {movieData.Ratings.map((rate,index)=>{
                    return(
                        <div className="my-1 sm:mx-2 max-w-max px-2 py-1 rounded-md flex flex-col" key={rate+index}>
                            <div className="flex-grow" >{rate.Source}</div>
                            <hr/>
                            <div className="pt-1" >{rate.Value}</div>
                        </div>
                    )
                  })}
                </div>
                <div className="px-2 py-2">
                    <div className="font-semibold text-lg  text-red-500">Imdb Rating</div>
                    <div className="px-2 font-bold">{movieData.imdbRating}
                    </div>
                </div>
                <hr/>
                <div className="px-2 mt-2">
                    <div className="font-semibold text-lg pb-2 ">Actors</div>
                    <div className="px-2">
                        {
                            movieData.Actors.split(',').map((actor,index)=>{
                                return(
                                    <div key={actor+index} className="flex items-center py-1">
                                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uYOL9yHT3_FQyVRTCzhW8wHaHa%26pid%3DApi&f=1" className="rounded-full w-8"/>
                                        <div className="pl-1">{actor}</div>
                                    </div>   
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            

        </div>

    }
    </>
    )
}