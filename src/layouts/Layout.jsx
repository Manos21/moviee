import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

export default function Layout(){

    return(
        <div>
            <Header/>
            <SearchBox/>
            <Outlet/>
        </div>
    )
}