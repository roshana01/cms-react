import React from 'react'
import ReactDOM from 'react-dom'
import './DeleteModal.css'


export default function DeleteModal({submitModal, canselModal , title}) {
    return ReactDOM.createPortal(
        <div className='modal-parent show-modal'>
            <div className="delete-modal">
                <h1>{title}</h1>
                <div className='delete-modal-btns'>
                    <button className='delete-btn delete-modal-accept-btn' onClick={ submitModal}>بله</button>
                    <button className='delete-btn delete-modal-reject-btn' onClick={canselModal}>خیر</button>
                </div>
            </div>
        </div>
        , document.getElementById('modals-parent')
    )
}
