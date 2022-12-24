import React, { useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../Detailes/DetailsModal'
import './ProductTable.css'

export default function ProductTable() {
    const [isShowModal, setIsShowModal] = useState(false)




    const cancelModalHandler = () => {
        console.log('مدال بسته شد');
        setIsShowModal(false)

    }
    const submitModalHandler = () => {
        console.log('مدال تایید شد');
        setIsShowModal(false)

    }



    return (
        <>
            <DetailsModal />
            <div className="products-table">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope='col'>عکس</th>
                            <th scope='col'>اسم</th>
                            <th scope='col'>قیمت</th>
                            <th scope='col'>موجودی</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">
                                <img src="/img/goshi3.jpg" alt="" className='product-table-img' />
                            </td>
                            <td>گوشی ایفون 13 پرو مکس</td>
                            <td>55.000.000</td>
                            <td>85</td>
                            <td>
                                <button className="product-table-btn" >جزییات</button>
                                <button className="product-table-btn" onClick={() => setIsShowModal(true)}>حذف</button>
                                <button className="product-table-btn">ویرایش</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            {/* console.log( {isShowModal && <DeleteModal />});  */}
            {isShowModal &&
                <DeleteModal
                submitModal={submitModalHandler}
                canselModal={cancelModalHandler}
         />}
         
        </>

    )
}
