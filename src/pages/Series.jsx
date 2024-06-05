import React from "react";
import { AppContext } from "../App";
import MovieSeries from "../components/MovieSeries";
import SearchResults from "../layouts/SearchResults";
import { useSearchParams } from "react-router-dom"

export default function Series(){

    const {all,search} = React.useContext(AppContext)
    const [searchParams, setSearchParams] = useSearchParams()

    return(
        searchParams.size === 0?
        <div className="container series">
            <h3 className="hd-lg feature">TV Series</h3>
            <div className="basic__display">
            {all
                    .map((movie,index)=>{
                        if (search.toLowerCase() === ''){
                            return (movie.category==="TV Series" ?
                                <MovieSeries
                                    key={movie.title}
                                    index={index}
                                    {...movie}
                                />
                                :
                                null
                            )
                        }
                        else if(movie.title.toLowerCase().includes(search)){
                            return (movie.category==="TV Series" ?
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
                        return (movie.category==="TV Series" ?
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
                        return (movie.category==="TV Series" ?
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