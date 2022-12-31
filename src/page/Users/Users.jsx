import React, { useEffect, useState } from 'react'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import Error from '../../Components/Error/Error'
import Loader from '../../Components/Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Users.css'

export default function Users() {

  const [user, setUser] = useState([])
  const [isInProgress, setIsInProgress] = useState([])
  const [isShowdeleteUserModal, setIsShowDeleteUserModal] = useState(false)
  const [userID, setUserID] = useState(null)
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setIsInProgress(true)

    fetch('http://localhost:8000/api/users/')
      .then(res => res.json())
      .then(users => {
        console.log(users);
        setUser(users)
        setIsInProgress(false)
      })

  }

  // delet user
  const deletUserModalCalncelAction = () => setIsShowDeleteUserModal(false)
  const deletUserModalConfirmAction = () => {


    fetch(`http://localhost:8000/api/users/${userID}`, {
      method: 'DELETE'
    }).then(res => {
      console.log(res)
      getData()
      successNotify('کاربر با موفقیت حذف شد')
      setIsShowDeleteUserModal(false)
    }).catch(err => {
      errorNotify('حذف کاربر موفقیت آمیز نبود')
    })
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

      <h1 className='user-title'>لیست کاربران</h1>
      <div className="users-table">
        {
          isInProgress && <Loader />
        }
        {
          user.length ? (
            <table className="table">
              <thead>
                <tr>
                  <th>نام و نام خانواگی</th>
                  <th>یوزر نیم</th>
                  <th>رمز عبور</th>
                  <th>شماره تماس</th>
                  <th>ایمیل</th>
                </tr>
              </thead>
              <tbody>
                {
                  user.map((user) => (

                    <tr key={user.id}>
                      <td>{user.firsname} {user.lastname}</td>
                      <td>{user.username}</td>
                      <td>{user.password}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>
                        <button className="btn-users" onClick={() => {
                          setIsShowDeleteUserModal(true)
                          setUserID(user.id)
                        }} >حذف</button>
                        <button className="btn-users">ویرایش</button>
                        <button className="btn-users">جزییات</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>

            </table>
          ) : (

            <Error msg={'هیچ کاربری یافت نشد...'} />
          )
        }
      </div>


      {
        isShowdeleteUserModal && (

          < DeleteModal
            title={'ایا از حذف کاربر اطمینان دارید؟'}
            submitModal={deletUserModalConfirmAction}
            canselModal={deletUserModalCalncelAction}
          />
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
