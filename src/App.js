import React from 'react'
import { useRoutes } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header';
import SideBar from "./Components/SideBar/SideBar";
import router from './routes';


export default function App() {

  const routes = useRoutes(router)
  return (
    <div className='app'>
      <SideBar />
      <div className="main">
        <Header />

        {routes}
      </div>
    </div>
  )
}
