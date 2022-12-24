import React from 'react'
import './EditModal.css'
export default function EditModal({ children, onClose, onSubmit }) {
  return (
    <div className='modal-parent active'>
      <form className='edit-modal-form'>
        <h1>اطلاعات جدید را وارد نمایید </h1>


        {children}

        <div className='edit-modal-btns'>
          <button className='edit-btn edit-modal-confirm-btn' onClick={(e) => onSubmit(e)}>ثبت</button>
          <button className='edit-btn edit-modal-reject-btn' onClick={(e) => onClose(e)}>بستن</button>
        </div>
      </form>
    </div>
  )
}
