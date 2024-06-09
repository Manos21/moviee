import React from "react";
import update from "../utilities/update";
import { AppContext } from "../App";
import Hover from "../utilities/Hover";

export default function Trending({category,isBookmarked,isTrending,rating,thumbnail,title,year,index}){

    // const {setAll} = React.useContext(AppContext)
    // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    // const [size,setSize] =  React.useState(()=>{
    //     if (windowWidth<=768){
    //         return("small")
    //     }else{
    //         return("large")
    //     }
    // })

    // React.useEffect(() => {
    //     const handleResize = () => {
    //     setWindowWidth(window.innerWidth);
    //     if (window.innerWidth<=768){
    //         setSize("small")
    //     }else{
    //         setSize("large")
    //     }
    //     };
    //     window.addEventListener('resize', handleResize);

    //     // Cleanup function to remove event listener when component unmounts
    //     return () => {
    //     window.removeEventListener('resize', handleResize);
    //     };
    // }, []); // Empty dependency array to run effect only once on component mount


    console.log("Trending mounted")
    return(
        // <div className="trending__movie">
        //     <img src={size === "large"?thumbnail.trending.large:thumbnail.trending.small} alt="trending" />
        //     <span onClick={()=>update(index,setAll)} className="bookmark"><img src={isBookmarked?"src/assets/icon-bookmark-full.svg":"src/assets/icon-bookmark-empty.svg"} alt="" /></span>
        //     <div className="descr bd-sm">
        //         <p className="year">{year}</p>
        //         <span>·</span>
        //         <span className="category-icon"><img src={category === "Movie" ? "src/assets/icon-category-movie.svg" : "src/assets/icon-category-tv.svg"} alt="" /></span>
        //         <p className="category">{category}</p>
        //         <span>·</span>
        //         <p className="rating">{rating}</p>
        //     </div>
        //     <div className="title hd-xs">{title}</div>
        //     <Hover/>
        // </div>
        <div>trending movie</div>
    )
}