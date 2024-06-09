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
import Test from './components/Test';

const AppContext = React.createContext()
export {AppContext}

export default function App() {
  const [all,setAll] = React.useState(data)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    console.log('App component mounted');
    console.log('Data:', all);
    console.log('Home component:', Home);
  }, [all]);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{all,setAll,search,setSearch}}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="test" element={<Test />} />
            <Route path="movies" element={<Movies/>} />
            <Route path="series" element={<Series/>} />
            <Route path="bookmarked" element={<Bookmarked/>} />
          </Route>
          <Route path="login" element={<Login/>} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter> 
  )
}
