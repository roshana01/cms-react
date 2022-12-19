import React from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BsBrightnessHigh} from 'react-icons/bs'
export default function Header() {
  return (
    <div className="header">
        <div className="admin-profile">
            <img src="/img/profile.jpg" alt="" />
            <div>
                <h2>روشنک روشنی</h2>
                <h3>برنامه نویس فرانت اند</h3>
            </div>
        </div>

        <div className="header-left-section">
            <div className="searchBox">
                <input type="text" placeholder='جستجو بکنید...' />
                <button className=''> جست و جو</button>
            </div>
            <button className='header-left-icon'><IoMdNotificationsOutline/></button>
            <button className='header-left-icon'><BsBrightnessHigh /></button>

        </div>
    </div>
  )
}
