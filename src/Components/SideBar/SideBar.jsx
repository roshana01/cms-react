import React from 'react'
import './SideBar.css'
import { AiFillHome } from 'react-icons/ai'
import { BsFillCartCheckFill, BsBagCheckFill } from 'react-icons/bs'
import { MdInsertComment } from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { IoPricetags } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className="sideBar">
      <h1 className="sideBar-title">به داشبورد خوش آمدید!</h1>

      <ul className="sideBar-links">
        <li>
          <Link to='/products'>
            <AiFillHome />
            صفحه اصلی
          </Link>
        </li>
        <li className='active'>
          <Link to='/products'>
            <BsFillCartCheckFill />
            محصولات
          </Link>
        </li>

        <li>
          <Link to='/comments'>
            <MdInsertComment />
            کامنت ها
          </Link>
        </li>

        <li>
          <Link to='/users'>
            <HiUsers />
            کابران
          </Link>
        </li>

        <li >
          <Link to='/orders'>
            <BsBagCheckFill />
            سفارشات
          </Link>
        </li>

        <li>
          <Link to='/offs'>
            <IoPricetags />
            تخفیفات
          </Link>
        </li>


        <div className="underline"></div>

      </ul>
    </div>
  )
}
