import React from "react";
import update from "../utilities/update";
import { AppContext } from "../App"; 
import Hover from "../utilities/Hover";

export default function MovieSeries({category,isBookmarked,isTrending,rating,thumbnail,title,year,index}){
    
    const {setAll} = React.useContext(AppContext)
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [size,setSize] =  React.useState(()=>{
        if (windowWidth<768){
            return("small")
        }else if(windowWidth<1440){
            return("medium")
        }else{
            return("large")
        }
    })


    React.useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth<768){
            setSize("small")
        }else if(window.innerWidth<1440){
            setSize("medium")
        }else{
            setSize("large")
        }
        };
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const url = size === "small"
    ? thumbnail.regular.small
    : size ==="medium"
    ? thumbnail.regular.medium
    : thumbnail.regular.large


    console.log("Movie mounted")
    return(
        <div className="recommended__movie">
            <div className="image-box">
                <picture>
                    
                <img src={url} alt="show" />
                </picture>
                <span onClick={()=>update(index,setAll)} className="bookmark"><img src={isBookmarked?"src/assets/icon-bookmark-full.svg":"src/assets/icon-bookmark-empty.svg"} alt="" /></span>
                <Hover/>
            </div>
            <div className="descr bd-sm">
                <p className="year">{year}</p>
                <span>·</span>
                <span className="category-icon"><img src={category === "Movie" ? "src/assets/icon-category-movie.svg" : "src/assets/icon-category-tv.svg"} alt="" /></span>
                <p className="category">{category}</p>
                <span>·</span>
                <p className="rating">{rating}</p>
            </div>
            <div className="title hd-xs">{title}</div>
            
        </div>
    )
}