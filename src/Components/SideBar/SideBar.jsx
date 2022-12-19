import React from 'react'
import './SideBar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { BiCommentDetail } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import { IoBagCheckOutline } from 'react-icons/io5'
import { AiOutlineDollar } from 'react-icons/ai'

export default function SideBar() {
  return (
    <div className="sideBar">
      <h1 className="sideBar-title">به داشبورد خوش آمدید!</h1>

      <ul className="sideBar-links">
        <li>
          <a href="#">
            <AiOutlineHome />
            صفحه اصلی</a>
        </li>
        <li >
          <a href="#">
            <MdProductionQuantityLimits />
            محصولات</a>
        </li>

        <li className='active'>
          <a href="#">
            <IoBagCheckOutline />
            سفارشات</a>
        </li>
        <li>
          <a href="#">
            <BiCommentDetail />
            کامنت ها</a>
        </li>
        <li>
          <a href="#">
            <AiOutlineDollar />
            تخفیفات</a>
        </li>

        <li>
          <a href="#">
            <FiUsers />
            کابران</a>
        </li>
        <div className="underline"></div>

      </ul>
    </div>
  )
}
