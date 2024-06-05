import React from "react";
import { AppContext } from "../App";
import MovieSeries from "../components/MovieSeries";
import SearchResults from "../layouts/SearchResults";
import { useSearchParams } from "react-router-dom"

export default function Movies(){

    const {all,search} = React.useContext(AppContext)
    const [searchParams, setSearchParams] = useSearchParams()

    return(
        searchParams.size === 0?
        <div className="container movies">
            <h3 className="hd-lg feature">Movies</h3>
            <div className="basic__display">
                {all
                    .map((movie,index)=>{
                        if (search.trim().toLowerCase() === ''){
                            return (movie.category==="Movie" ?
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
                            return (movie.category==="Movie" ?
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
            </div>
        </div>
        :
        <SearchResults>
            {all
                .map((movie,index)=>{
                    if (search.trim().toLowerCase() === ''){
                        return (movie.category==="Movie" ?
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
                        return (movie.category==="Movie" ?
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