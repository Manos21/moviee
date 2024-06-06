import React from "react";
import { AppContext } from "../App";
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

export default function SearchBox(){

    const [searchParams, setSearchParams] = useSearchParams()
    const {search,setSearch} = React.useContext(AppContext)
    const location = useLocation();
    if(location.pathname==="/"){
        var place = "movies or TV series"
    }
    else if(location.pathname==="/movies"){
        place = "movies"
    }
    else if(location.pathname==="/series"){
        place = "TV series"
    }
    else if(location.pathname==="/bookmarked"){
        place = "bookmarked shows"
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e)=>{
        setSearchParams(params=>{
            if (e.target.value === '') {
                console.log("empry")
                params.delete('q')
            } else {
                params.set("q", e.target.value)
            }
            return params
        })
        setSearch(e.target.value)
    }
    
    return(
        <div className="search-box container">
            <img src="src/assets/icon-search.svg" alt="search" />
            <form onSubmit={handleSubmit} >
                <input 
                    className="hd-md"
                    type="text"
                    value={search}
                    placeholder={`Search for ${place}`}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}