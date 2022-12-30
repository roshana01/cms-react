import React from 'react'
import ReactDOM from 'react-dom'
import './CommentTextModal.css'
export default function CommentTextModal({ cloesCommentModal,commentUser }) {
    return ReactDOM.createPortal(
        <div className='modal-parent show-modal'>
            <div className="text-modal">
                <p>{commentUser}</p>
                <div className="text-modal-btns">
                    <button className="text-btn text-close" onClick={() => cloesCommentModal()}>بستن</button>
                </div>
            </div>
        </div>, document.getElementById('modals-parent')
    )
}
