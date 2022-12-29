import React, { useState, useEffect } from 'react'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import Error from '../../Components/Error/Error'
import Loader from '../../Components/Loader/Loader'
import './Comments.css'
export default function Comments() {

  const [allComments, setAllComments] = useState([])
  const [isInProgress, setIsInProgress] = useState(true)

  useEffect(() => {
    fetch("http://localhost:8000/api/comments/")
      .then(res => res.json())
      .then(commnt => {
        setAllComments(commnt)
        setIsInProgress(false)
      })
  }, []);


  return (
    <>
      <div className="comments-table">
        {
          isInProgress && <Loader />
        }
        {
          allComments.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th>نام کاربر</th>
                  <th>محصول</th>
                  <th> کامنت</th>
                  <th>تاریخ</th>
                  <th>ساعت</th>
                </tr>
              </thead>
              <tbody>

                {
                  allComments.map((item) => (

                    <tr>
                      <td>{item.userID}</td>
                      <td>{item.productID}</td>
                      <td><button className='btn-comments'>دیدن کامنت</button></td>
                      <td>{item.date}</td>
                      <td>{item.hour}</td>
                      <td>
                        <button className='btn-comments'>حذف</button>
                        <button className='btn-comments'>ویرایش</button>
                        <button className='btn-comments'>پاسخ</button>
                        <button className='btn-comments'>تایید</button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          ) : (

            <Error msg={'کامنتی یافت نشد!'} />
          )
        }
      </div>

    </>
  )
}
