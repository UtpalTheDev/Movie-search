import { useEffect,useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
export function MovieDetails(){
  const [movieData, setMovieData] = useState(null)  
  const location = useLocation()  
  useEffect(()=>{
      (async()=>{
            let response = await axios.get()
      })()
  })
    return(
    <>
    {
        movieData.length>0
    }
    </>
    )
}