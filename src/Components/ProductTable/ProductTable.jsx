import React, { Children, useState, useEffect } from 'react'
import { AiOutlineDollar } from 'react-icons/ai'
import DeleteModal from '../DeleteModal/DeleteModal'
import DetailsModal from '../Detailes/DetailsModal'
import EditModal from '../EditModal/EditModal'
import Error from '../Error/Error'
import './ProductTable.css'

export default function ProductTable() {
    const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
    const [isShowDetailsModal, setIsShowDetailsModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [allProducts, setAllProduct] = useState([])
    const [isInProgress, setIsInProgress] = useState(true)
    const [mainProductInfo, setMainProductInfo] = useState({})
    const [productID, setproductID] = useState(null)

    const [proudctNewTitle, setproductNewTitle] = useState("")
    const [proudctNewPrice, setproductNewPrice] = useState("")
    const [proudctNewCount, setproductNewCount] = useState("")
    const [proudctNewImg, setproductNewImg] = useState("")
    const [proudctNewPopularity, setproductNewPopularity] = useState("")
    const [proudctNewSale, setproductNewSale] = useState("")
    const [proudctNewColors, setproductNewColors] = useState("")

    useEffect(() => {
        getAllProducts()
    }, []);

    const getAllProducts = () => {

        setIsInProgress(true)
        fetch('http://localhost:8000/api/products/')
            .then((res) => res.json())
            .then((prodauct) => {
                setAllProduct(prodauct)
                setIsInProgress(false)

            })
    }

    //* Delete Modal Actions
    const deleteModalCalncelAction = () => {
        setIsShowDeleteModal(false)
    }

    const deleteModalConfirmAction = () => {
        // delete product with API
        console.log(productID);
        fetch(`http://localhost:8000/api/products/${productID}`, {
            method: 'DELETE'
        }).then((res) => res.json())
            .then((result) => {
                setIsShowDeleteModal(false)
                getAllProducts()
            })
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

        <div className="products-table">
            {
                isInProgress ? (
                    <div className='loader-container'>
                        <span class="loader"></span>
                    </div>
                ) : (
                    <>
                        {
                            allProducts.length ? (
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
                                        {
                                            allProducts.map((item) => (
                                                <tr key={item.id}>
                                                    <td scope="row">
                                                        <img src={item.img} alt="" className='product-table-img' />
                                                    </td>
                                                    <td>{item.title}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.count}</td>
                                                    <td>
                                                        <button className="product-table-btn" onClick={() => {
                                                            setIsShowDetailsModal(true)
                                                            setMainProductInfo(item)
                                                        }}>جزییات</button>
                                                        <button className="product-table-btn" onClick={() => {
                                                            setIsShowDeleteModal(true)
                                                            setproductID(item.id)
                                                        }}>حذف</button>
                                                        <button className="product-table-btn" onClick={() => {
                                                            setIsShowEditModal(true)
                                                            setproductNewTitle(item.title)
                                                            setproductNewPrice(item.price)
                                                            setproductNewCount(item.count)
                                                            setproductNewImg(item.img)
                                                            setproductNewPopularity(item.popularity)
                                                            setproductNewSale(item.sale)
                                                            setproductNewColors(item.colors)
                                                        }}>ویرایش</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }


                                    </tbody>
                                </table>
                            ) : (
                                <Error msg={'هیچ پیامی یافت نشد...'} />
                            )
                        }

                        {isShowDeleteModal &&
                            <DeleteModal
                                submitModal={deleteModalConfirmAction}
                                canselModal={deleteModalCalncelAction}
                            />
                        }

                        {isShowDetailsModal && (
                            <DetailsModal closeBtn={detailsModalClose}>
                                <table className='cms-table'>
                                    <thead>
                                        <tr>
                                            <th>محبوبیت</th>
                                            <th>فروش</th>
                                            <th>رنگ بندی</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{mainProductInfo.popularity}</td>
                                            <td>{mainProductInfo.sale}</td>
                                            <td>{mainProductInfo.colors}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DetailsModal>
                        )}
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
                                    <input type="text"
                                        placeholder='عنوان جدید را وارد کنید'
                                        className="edit--product_input" 
                                        value={proudctNewTitle}
                                        />
                                </div>
                                <div className="edit--product--form_grop">
                                    <span>
                                        <AiOutlineDollar />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder='قیمت جدید را وارد کنید'
                                        className="edit--product_input"
                                        value={proudctNewPrice}
                                        />
                                </div>
                                <div className="edit--product--form_grop">
                                    <span>
                                        <AiOutlineDollar />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder='موجودی جدید را وارد کنید'
                                        className="edit--product_input" 
                                        value={proudctNewCount}
                                        />
                                </div>
                                <div className="edit--product--form_grop">
                                    <span>
                                        <AiOutlineDollar />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder='ادرس عکس را وارد کنید'
                                        className="edit--product_input" 
                                        value={proudctNewImg}
                                        />
                                </div>
                                <div className="edit--product--form_grop">
                                    <span>
                                        <AiOutlineDollar />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder='محبوبیت جدید را وارد کنید'
                                        className="edit--product_input" 
                                        value={proudctNewPopularity}
                                        />
                                </div>
                                <div className="edit--product--form_grop">
                                    <span>
                                        <AiOutlineDollar />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder='فروش جدید را وارد کنید'
                                        className="edit--product_input" 
                                        value={proudctNewSale}
                                        />
                                </div>
                                <div className="edit--product--form_grop">
                                    <span>
                                        <AiOutlineDollar />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder='رنگبندی جدید را وارد کنید'
                                        className="edit--product_input" 
                                        value={proudctNewColors}
                                        />
                                </div>
                            </EditModal>
                        }
                    </>
                )
            }
        </div>
    )
}
