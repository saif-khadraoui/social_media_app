import React from 'react'
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Sidebar from './Sidebar';
import "../styling/Dashboard.css"

function Dashboard() {
  return (
    <div className='dashboard'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Dashboard