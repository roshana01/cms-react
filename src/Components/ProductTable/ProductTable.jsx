import React from 'react'
import './ProductTable.css'

export default function ProductTable() {
    return (
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
                            <button className="product-table-btn">جزییات</button>
                            <button className="product-table-btn">حذف</button>
                            <button className="product-table-btn">ویرایش</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {/* <table className='products-table'>
            <tr className="products-table-heading-tr">
                <th>عکس</th>
                <th>اسم</th>
                <th>قیمت</th>
                <th>موجودی</th>

            </tr>
            <tr className='products-table-tr'>
                <td>
                    <img src="/img/goshi3.jpg" alt="" className='product-table-img' />
                </td>
                <td>گوشی ایفون 13 پرو مکس</td>
                <td>55.000.000</td>
                <td>85</td>
                <td>
                    <button className="product-table-btn">جزییات</button>
                    <button className="product-table-btn">حذف</button>
                    <button className="product-table-btn"></button>
                </td>
            </tr>
    </table> */}
        </div>
    )
}
