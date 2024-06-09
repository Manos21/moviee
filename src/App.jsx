import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, json} from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Series from "./pages/Series"
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Bookmarked from './pages/Bookmarked';
import data from './data/data.json'

const AppContext = React.createContext()
export {AppContext}

export default function App() {
  const [all,setAll] = React.useState(data)
  const [search, setSearch] = React.useState('')
  console.log(all)
  console.log(Home)

  return (
    <BrowserRouter>
      {/* <AppContext.Provider value={{all,setAll,search,setSearch}}> */}
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            {/* <Route path="movies" element={<Movies/>} />
            <Route path="series" element={<Series/>} />
            <Route path="bookmarked" element={<Bookmarked/>} /> */}
          </Route>
          <Route path="login" element={<Login/>} />
        </Routes>
      {/* </AppContext.Provider> */}
    </BrowserRouter> 
  )
}
