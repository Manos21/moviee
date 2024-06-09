import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import Home from "../pages/Home";


export default function Layout(){

    return(
        <div>
            <Header/>
            <SearchBox/>
            {/* <Outlet/> */}
            <Home/>
        </div>
    )
}