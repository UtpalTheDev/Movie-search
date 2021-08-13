import { useState, useEffect } from "react";
import { useProvider } from "../context/Context";
import axios from "axios"
export function Search({page}){

    const {setData, setCurrentSearch, currentSearch, setPage} = useProvider()
    const [input, setInput] = useState(currentSearch)
    console.log("page",page,currentSearch)
    function handleInput(value){
        setInput(value)
    }
    async function searchCall(value){
        try{
            if(input.length>2){    
               
            let response = await axios.get(`https://www.omdbapi.com/?s=${value}&apikey=7089fccf&page=${page}`)
            
            console.log(response)
            if(response.status === 200)
            {   
                setCurrentSearch(input)
                setData(response.data.Search)
            }
            }
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        searchCall(currentSearch)
    },[page])

    return(
        <>
        <form className="flex justify-center py-3 px-3" onSubmit={(e)=>{
            e.preventDefault()
            setPage(prev=>1) 
            searchCall(input)
        }}>
        <input type="text" className="border border-gray-200 px-2 w-full max-w-xs py-1 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-300 focus:border-transparent" value={input} onChange={(e)=>{handleInput(e.target.value)}}
        placeholder = "Search..."
        />
        <button className="bg-blue-300 px-2 text-white font-semibold" type="submit">Search</button>
        </form>
        { input.length<3 && <div className="text-xs text-red-500 text-center">Enter atleast 2 letter to search </div>
        }
        
        </>
    )
}