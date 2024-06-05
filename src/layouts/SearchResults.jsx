import React from "react";
import { useSearchParams } from "react-router-dom"

export default function SearchResults({children}){

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(children.every(child=>child==null))
    
    return(
        <div className="results container">
            <h3 className="hd-lg feature">{children.every(child=>child==null)&&"No "}Results for '{searchParams.get('q')}'</h3>
            <div className="basic__display">
                {children}
            </div>
        </div>
    )
}