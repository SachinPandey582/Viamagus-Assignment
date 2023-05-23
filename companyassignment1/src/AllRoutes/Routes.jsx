import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../pages/assignment1'
import Home from '../pages/home'
import ReactPlayer1 from '../pages/assignment2'
import Date from '../pages/assignment3'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/first' element={<Login/>}></Route>
      <Route path='/second' element={<ReactPlayer1/>}></Route>
      <Route path='/third' element={<Date/>}></Route>
      {/* <Route path='/second' element={<Login/>}></Route> */}
    </Routes>
  )
}

export default AllRoutes
