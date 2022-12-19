import React from 'react'
import './SideBar.css'
export default function SideBar() {
  return (
    <div className="sideBar">
      <h1 className="sideBar-title">به داشبورد خوش آمدید!</h1>

      <ul className="sideBar-links">
        <li>
          <a href="#">صفحه اصلی</a>
        </li>
        <li className='active'>
          <a href="#">محصولات</a>
        </li>

        <li>
          <a href="#">سفارشات</a>
        </li>
        <li>
          <a href="#">کامنت ها</a>
        </li>
        <li>
          <a href="#">تخفیفات</a>
        </li>

        <li>
          <a href="#">کابران</a>
        </li>
      </ul>
    </div>
  )
}
