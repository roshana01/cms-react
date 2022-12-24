import React, { Children, useState } from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../Detailes/DetailsModal'
import EditModal from '../EditModal/EditModal'
import './ProductTable.css'

export default function ProductTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)




    //* Delete Modal Actions
    const deleteModalCalncelAction = () => {
        setIsShowDeleteModal(false)
    }
    const deleteModalConfirmAction = () => {
        // delete product with API
        setIsShowDeleteModal(false)
    }

    //* Details Modal Actions
    const detailsModalClose = () => {
        setIsShowDetailsModal(false)
    }

    //* Edit Modal Actions
    const updateProductInfos = (e) => {
        // update product infos with API
        e.preventDefault()
        setIsShowEditModal(false)
    }
    const editModalClose = (e) => {
        e.preventDefault()
        setIsShowEditModal(false)
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
                                <button className="product-table-btn" onClick={() => setIsShowEditModal(true)}>ویرایش</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

            {isShowDeleteModal &&
                <DeleteModal
                    submitModal={deleteModalConfirmAction}
                    canselModal={deleteModalCalncelAction}
                />
            }

            {isShowDetailsModal &&
                <DetailsModal
                    closeBtn={detailsModalClose}
                />
            }
            {
                isShowEditModal &&
                <EditModal
                    onClose={editModalClose}
                    onSubmit={updateProductInfos}
                >
                    {/*Children*/}
                    <div className="edit--product--form_grop">
                        <span>
                            <AiOutlineDollar />
                        </span>
                        <input type="text" placeholder='عنوان جدید را وارد کنید' className="edit--product_input" />
                    </div>
                    <div className="edit--product--form_grop">
                        <span>
                            <AiOutlineDollar />
                        </span>
                        <input type="text" placeholder='عنوان جدید را وارد کنید' className="edit--product_input" />
                    </div>
                    <div className="edit--product--form_grop">
                        <span>
                            <AiOutlineDollar />
                        </span>
                        <input type="text" placeholder='عنوان جدید را وارد کنید' className="edit--product_input" />
                    </div>
                    <div className="edit--product--form_grop">
                        <span>
                            <AiOutlineDollar />
                        </span>
                        <input type="text" placeholder='عنوان جدید را وارد کنید' className="edit--product_input" />
                    </div>
                </EditModal>
            }
        </>

    )
}
