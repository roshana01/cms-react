import React, { useState, useEffect } from 'react'
import CommentTextModal from '../../Components/CommentTextModal/CommentTextModal'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import EditModal from '../../Components/EditModal/EditModal'
import Error from '../../Components/Error/Error'
import Loader from '../../Components/Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineDollar } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import './Comments.css'


export default function Comments() {

  const [allComments, setAllComments] = useState([])
  const [isInProgress, setIsInProgress] = useState(true)
  const [isShowCommentModal, setIsShowCommentModal] = useState(false)
  const [mainComment, setMainComment] = useState('')
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [commentID, setCommentID] = useState(null)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [commentNewText, setCommentNewText] = useState('')


  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setIsInProgress(true)
    fetch("http://localhost:8000/api/comments/")
      .then(res => res.json())
      .then(commnt => {
        setAllComments(commnt)
        setIsInProgress(false)
      })
  }

  // comment text modal actions

  const cloesCommentModal = () => {
    setIsShowCommentModal(false)
  }

  // delete comment actions
  const deleteModalConfirmAction = () => {
    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: 'DELETE'
    }).then(res => {
      console.log(res)
      getData()
      successNotify('کامنت با موفقیت حذف شد')
    }).catch(err => {
      errorNotify('حذف کامنت موفقیت آمیز نبود')
    })
    setIsShowDeleteModal(false)
  }

  const deleteModalCalncelAction = () => {
    setIsShowDeleteModal(false)
  }

  // edit modal action
  const updateCommentText = (e) => {
    e.preventDefault()
    let newCommentText = {
      body: commentNewText
    }

    fetch(`http://localhost:8000/api/comments/${commentID}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newCommentText)
    }).then(res => {
      console.log(res)
      getData()
      successNotify('متن کامنت با موفقیت تغییر کرد')
      setIsShowEditModal(false)
    }).catch(err => {
      errorNotify('تغییر متن کامنت موفقیت آمیز نبود')
    })

    setCommentNewText('')
  }
  const editModalCalncelAction = () => {
    setIsShowEditModal(false)
  }

  //* notify toast
  const successNotify = (toastMessage) => toast.success(toastMessage, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const errorNotify = (toastMessage) => toast.error(toastMessage, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })
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
                      <td><button
                        className='btn-comments'
                        onClick={() => {
                          setIsShowCommentModal(true)
                          setMainComment(item.body)
                        }}
                      >دیدن کامنت</button></td>
                      <td>{item.date}</td>
                      <td>{item.hour}</td>
                      <td>
                        <button className='btn-comments' onClick={() => {
                          setCommentID(item.id)
                          setIsShowDeleteModal(true)
                        }}>حذف</button>
                        <button className='btn-comments' onClick={() => {
                          setCommentID(item.id)
                          setIsShowEditModal(true)
                        }}>ویرایش</button>
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
      {
        isShowCommentModal && (
          <CommentTextModal
            cloesCommentModal={cloesCommentModal}
            commentUser={mainComment} />

        )

      }
      {
        isShowDeleteModal && (
          <DeleteModal
            submitModal={deleteModalConfirmAction}
            canselModal={deleteModalCalncelAction} />
        )
      }
      {
        isShowEditModal && (
          <EditModal onSubmit={updateCommentText} onClose={editModalCalncelAction}>
            <div className="edit--product--form_grop">
              <span>
                <AiOutlineDollar />
              </span>
              <input type="text"
                placeholder='متن جدید را وارد کنید'
                className="edit--product_input"
                value={commentNewText}
                onChange={(e) => setCommentNewText(e.target.value)}
              />
            </div>
          </EditModal>
        )
      }

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
