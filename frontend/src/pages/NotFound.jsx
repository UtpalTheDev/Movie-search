import pageNotFound from "../assets/pageNotFound.svg"
export function NotFound(){

    return(
        <div className="pt-8 w-full flex justify-center items-center flex-col">
            <img src={pageNotFound}/>
        </div>
    )
}