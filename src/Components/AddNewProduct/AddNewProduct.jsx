import React from 'react'
import './AddNewProduct.css'
import { AiOutlineDollar} from 'react-icons/ai'
import { BsCursorText ,BsBag} from 'react-icons/bs'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { TfiWrite} from 'react-icons/tfi'
import { VscSymbolColor} from 'react-icons/vsc'
import { IoImageOutline} from 'react-icons/io5'

export default function () {
    return (
        <div className="product-main">
            <h1 className="products-title">افزودن محصولات جدید</h1>
            <form action="#" className="add-product-form">

                <div className="add-products-from-wrap">
                    <div className="add-products-from-group">
                        <BsCursorText />
                        <input type="text" className="add-products-input" placeholder='اسم محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                        <AiOutlineDollar/>
                        <input type="text" className="add-products-input" placeholder='قیمت محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                    <BsBag />
                        <input type="text" className="add-products-input" placeholder='موجودی محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                    <IoImageOutline />
                        <input type="text" className="add-products-input" placeholder='ادرس عکس محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                    <TfiWrite/>
                        <input type="text" className="add-products-input" placeholder='میزان محبوبیت محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                    
                    <HiOutlineArrowTrendingUp  />
                        <input type="text" className="add-products-input" placeholder='میزان فروش محصول را بنویسید' />
                    </div>
                    <div className="add-products-from-group">
                    <VscSymbolColor />
                        <input type="text" className="add-products-input" placeholder='تعداد رنگ بندی محصول را بنویسید' />
                    </div>

                </div>
                <button className='add-products-btn'>ثبت محصول</button>
            </form>
        </div>
    )
}
