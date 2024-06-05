import React from "react";
import { AppContext } from "../App";
import MovieSeries from "../components/MovieSeries";
import SearchResults from "../layouts/SearchResults";
import { useSearchParams } from "react-router-dom"

export default function Bookmarked(){

    const {all,search} = React.useContext(AppContext)
    const [searchParams, setSearchParams] = useSearchParams()

    return(
        searchParams.size === 0?
        <div className="container bookmarked">
            <h3 className="hd-lg feature">Bookmarked Movies</h3>
            <div className="basic__display">
                {all.some(movie => movie.isBookmarked && movie.category==="Movie")?
                all.map((movie,index)=>{
                    return (movie.isBookmarked && movie.category==="Movie" ?
                    <MovieSeries
                    key={movie.title}
                    index={index}
                    {...movie}
                    />
                    :
                    null)
                })
                :
                <div className="bd-md empty">No movies bookmarked</div>
                }                
            </div>
            <h3 className="hd-lg feature">Bookmarked Series</h3>
            <div className="basic__display">
                {all.some(movie => movie.isBookmarked && movie.category==="TV Series")?
                all.map((movie,index)=>{
                    return (movie.isBookmarked && movie.category==="TV Series" ?
                    <MovieSeries
                    key={movie.title}
                    index={index}
                    {...movie}
                    />
                    :
                    null)
                })
                :
                <div className="bd-md empty">No TV Series bookmarked</div>
                }                
            </div>
        </div>
        :
        <SearchResults>
            {all
                .map((movie,index)=>{
                    if (search.trim().toLowerCase() === ''){
                        return (movie.isBookmarked===true ?
                            <MovieSeries
                                key={movie.title}
                                index={index}
                                {...movie}
                            />
                            :
                            null
                        )
                    }
                    else if(movie.title.toLowerCase().includes(search.trim())){
                        return (movie.isBookmarked===true ?
                            <MovieSeries
                                key={movie.title}
                                index={index}
                                {...movie}
                            />
                            :
                            null
                        )
                    }
                })
            }
        </SearchResults>
    )
}