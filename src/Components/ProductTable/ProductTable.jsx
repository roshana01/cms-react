import React from 'react'
import './ProductTable.css'

export default function ProductTable() {
    return (
        <table className='products-table'>
            <tr className="products-table-heading-tr">
                <th>عکس</th>
                <th>اسم</th>
                <th>قیمت</th>
                <th>موجودی</th>

            </tr>
            <tr>
                <td>
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
        </table>
    )
}
