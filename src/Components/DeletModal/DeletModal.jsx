import React from 'react'
import './DeletModal.css'
import ReactDOM from 'react-dom'
export default function DeletModal() {
    return ReactDOM.createPortal(

        <div className="delete-modal">
            <h1>ایا از حذف اطمینان دارید</h1>
            <div className="delete-modal-btns">
                <button className="delete-btn delete-modal-accept-btn">بله</button>
                <button className="delete-btn delete-modal-accept-btn">خیر</button>
            </div>
        </div>

    ), document.getElementById('modals-parent ')
}
