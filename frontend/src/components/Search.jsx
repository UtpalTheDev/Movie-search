import { useState, useEffect } from "react";
import { useProvider } from "../context/Context";
import axios from "axios"
export function Search({page}){

    const {setData, setCurrentSearch, currentSearch} = useProvider()
    const [input, setInput] = useState(currentSearch)
    console.log("page",page,currentSearch)
    function handleInput(value){
        setInput(value)
    }
    async function searchCall(){
        try{
            if(1){    
            let response = await axios.get(`https://www.omdbapi.com/?s=${currentSearch}&apikey=7089fccf&page=${page}`)
            
            console.log(response)
            if(response.status === 200)
            {   
                
                setData(response.data.Search)
            }
            }
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        searchCall()
    },[page])
    return(
        <form className="flex justify-center py-3" onSubmit={(e)=>{
            e.preventDefault()
            setCurrentSearch(e.target.value)
            searchCall()
        }}>
        <input type="text" className="border-2 border-gray-500" value={input} onChange={(e)=>{handleInput(e.target.value)}}/>
        <button className="bg-blue-300 px-1 text-white font-semibold" type="submit">Search</button>
        </form>
    )
}