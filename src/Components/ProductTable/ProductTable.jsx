import React, { useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../Detailes/DetailsModal'
import './ProductTable.css'

export default function ProductTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)




    const cancelModalHandler = () => {
        console.log('مدال بسته شد');
        setIsShowDeleteModal(false)

    }
    const submitModalHandler = () => {
        console.log('مدال تایید شد');
        setIsShowDeleteModal(false)

    }

    const closeDetailsModal = () => {
        console.log('مدال بسته شد');
        setIsShowDetailsModal(false)
    }


    return (
        <>

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
                                <button className="product-table-btn" onClick={() => setIsShowDetailsModal(true)}>جزییات</button>
                                <button className="product-table-btn" onClick={() => setIsShowDeleteModal(true)}>حذف</button>
                                <button className="product-table-btn">ویرایش</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {isShowDeleteModal &&
                <DeleteModal
                    submitModal={submitModalHandler}
                    canselModal={cancelModalHandler}
                />
            }
            
            { isShowDetailsModal &&
                    <DetailsModal
                        closeBtn={closeDetailsModal} 
                    /> 
            }

        </>

    )
}
