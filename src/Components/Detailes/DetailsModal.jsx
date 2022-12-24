import React from 'react'
import './DetailsModal.css'

export default function DetailsModal() {
    return (
        <div className='modal-parent show-modal'>
            <div className='details-modal '>
                <table className='cms-table'>

                    <tr>
                        <th>عکس </th>
                        <th>اسم</th>
                        <th>محبوبیت</th>

                    </tr>
                    <tr>
                        <td>لپتاپ</td>
                        <td>12.000.000</td>
                        <td>91</td>

                    </tr>
                </table>
                <div className="details-modal-btns">
                    <button className="details-btn detail-close">بستن</button>
                </div>
            </div>
        </div>
    )
}
