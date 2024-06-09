import React from "react";
import Trending from "../components/Trending";
import MovieSeries from "../components/MovieSeries";
import { AppContext } from "../App";
import SearchResults from "../layouts/SearchResults";
import { useSearchParams } from "react-router-dom"
import Slider from "../components/Slider";


export default function Home(){

    const {all,search} = React.useContext(AppContext)
    const [searchParams, setSearchParams] = useSearchParams()
    console.log("Home mounted")

    return(
        // searchParams.size === 0?
        // <div className="home">
        //     <div className="trending container">
        //         <h3 className="hd-lg feature">Trending</h3>
        //         <Slider>
        //             {all.map((movie,index)=>{
        //                 return (movie.isTrending===true ?
        //                 <Trending
        //                 key={movie.title}
        //                 index={index}
        //                 {...movie}
        //                 />
        //                 :
        //                 null)
        //             }
        //             )}
        //         </Slider>
        //     </div>

        //     <div className="recommended container">
        //         <h3 className="hd-lg feature">Recommended for you</h3>
        //         <div className="basic__display">
        //             {all.map((movie,index)=>{
        //                 return (!movie.isTrending ?
        //                 <MovieSeries
        //                 key={movie.title}
        //                 index={index}
        //                 {...movie}
        //                 />
        //                 :
        //                 null)
        //             }
        //             )}
        //         </div>
        //     </div>
        // </div>
        // :
        // <SearchResults>
        //     {all
        //             .map((movie,index)=>{
        //                 if (search.trim().toLowerCase() === ''){
        //                     return (
        //                         <MovieSeries
        //                             key={movie.title}
        //                             index={index}
        //                             {...movie}
        //                         />
        //                     )
        //                 }
        //                 else if(movie.title.toLowerCase().includes(search.trim())){
        //                     return (
        //                         <MovieSeries
        //                             key={movie.title}
        //                             index={index}
        //                             {...movie}
        //                         />
        //                     )
        //                 }
        //             })
        //         }
        // </SearchResults>
        <div>Home</div>
    )
}