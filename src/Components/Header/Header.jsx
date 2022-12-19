import React from 'react'
import {IoMdNotifications} from 'react-icons/io'
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import './Header.css'
export default function Header() {
  return (
    <div className="header">
        <div className="admin-profile">
            <img src="/img/profilee.jpg" alt=""/>
            <div>
                <h2>روشنک روشنی</h2>
                <h3>برنامه نویس فرانت اند</h3>
            </div>
        </div>

        <div className="header-left-section">
            <div className="search-Box">
                <input type="text" placeholder='جستجو بکنید...' />
                <button className=''> جست و جو</button>
            </div>
            <button className='header-left-icon'><IoMdNotifications/></button>
            <button className='header-left-icon'><BsFillBrightnessHighFill /></button>

        </div>
    </div>
  )
}
