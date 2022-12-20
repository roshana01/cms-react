import React from 'react'

export default function () {
    return (
        <div className="product-main">
            <h1 className="products-title">افزودن محصولات جدید</h1>
            <form action="#" className="add-product-form">

                <div className="add-products-from-wrap">
                    <div className="add-products-from-group">
                        <input type="text" className="add-products-input" placeholder='اسم محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                        <input type="text" className="add-products-input" placeholder='قیمت محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                        <input type="text" className="add-products-input" placeholder='موجودی محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                        <input type="text" className="add-products-input" placeholder='ادرس عکس محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                        <input type="text" className="add-products-input" placeholder='میزان محبوبیت محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                        <input type="text" className="add-products-input" placeholder='میزان فروش محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                        <input type="text" className="add-products-input" placeholder='تعداد رنگ بندی محصول را بنویسید' />
                    </div>

                </div>

            </form>
        </div>
    )
}
