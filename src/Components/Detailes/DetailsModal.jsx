import React from 'react'
import './DetailsModal.css'

export default function DetailsModal({ closeBtn, children }) {
    return (
        <div className='modal-parent show-modal'>
            <div className='details-modal '>

                {children}

                <div className="details-modal-btns">
                    <button className="details-btn detail-close" onClick={closeBtn}>بستن</button>
                </div>
            </div>
        </div>
    )
}
