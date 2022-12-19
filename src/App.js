import React from 'react'
import './App.css'
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar";

export default function App() {
  return (
    <div className='app'>
      <SideBar />
      <div className="main">
        <Header />
        
      </div>
    </div>
  )
}
