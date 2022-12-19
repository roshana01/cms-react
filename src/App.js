import React from 'react'
import './App.css'
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar";

export default function App() {
  return (
    <>
      <SideBar />
      <div className="main">
        <Header />
        
      </div>
    </>
  )
}
