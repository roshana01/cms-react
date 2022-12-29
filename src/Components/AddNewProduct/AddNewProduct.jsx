import React, { useState } from 'react'
import './AddNewProduct.css'
import { AiOutlineDollar } from 'react-icons/ai'
import { BsCursorText, BsBag } from 'react-icons/bs'
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2'
import { TfiWrite } from 'react-icons/tfi'
import { VscSymbolColor } from 'react-icons/vsc'
import { IoImageOutline } from 'react-icons/io5'




export default function ({ getAllProducts, errorNotify,successNotify  }) {

    const [newProudctTitle, setNewProductTitle] = useState("")
    const [newProudctPrice, setNewProductPrice] = useState("")
    const [newProudctCount, setNewProductCount] = useState("")
    const [newProudctImg, setNewProductImg] = useState("")
    const [newProudctPopularity, setNewProductPopularity] = useState("")
    const [newProudctSale, setNewProductSale] = useState("")
    const [newProudctColors, setNewProductColors] = useState("")


    const addNewProduct = (e) => {
        e.preventDefault()
        const newProduct = {
            title: newProudctTitle,
            price: newProudctPrice,
            count: newProudctCount,
            img: newProudctImg,
            popularity: newProudctPopularity,
            sale: newProudctSale,
            colors: newProudctColors,
        }


        fetch('http://localhost:8000/api/products/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then(res => {
            getAllProducts()
            emptyInput()
            successNotify("ثبت محصول موفقیت امیز بود")
        }).catch(err =>{
            errorNotify("ثبت محصول موفقیت امیز نبود")
        })
    }

    const emptyInput = () => {
        setNewProductTitle("")
        setNewProductPrice("")
        setNewProductCount("")
        setNewProductImg("")
        setNewProductPopularity("")
        setNewProductSale("")
    }

    return (
        <div className="product-main">
            <h1 className="products-title">افزودن محصولات جدید</h1>
            <form action="#" className="add-product-form">

                <div className="add-products-from-wrap">
                    <div className="add-products-from-group">
                        <BsCursorText />
                        <input type="text"
                            className="add-products-input"
                            placeholder='اسم محصول را بنویسید'
                            value={newProudctTitle}
                            onChange={(e) => setNewProductTitle(e.target.value)}
                        />
                    </div>
                    <div className="add-products-from-group">
                        <AiOutlineDollar />
                        <input type="text"
                            className="add-products-input"
                            placeholder='قیمت محصول را بنویسید'
                            value={newProudctPrice}
                            onChange={(e) => setNewProductPrice(e.target.value)}
                        />
                    </div>
                    <div className="add-products-from-group">
                        <BsBag />
                        <input type="text"
                            className="add-products-input"
                            placeholder='موجودی محصول را بنویسید'
                            value={newProudctCount}
                            onChange={(e) => setNewProductCount(e.target.value)}
                        />
                    </div>
                    <div className="add-products-from-group">
                        <IoImageOutline />
                        <input type="text"
                            className="add-products-input"
                            placeholder='ادرس عکس محصول را بنویسید'
                            value={newProudctImg}
                            onChange={(e) => setNewProductImg(e.target.value)}
                        />
                    </div>
                    <div className="add-products-from-group">
                        <TfiWrite />
                        <input type="text"
                            className="add-products-input"
                            placeholder='میزان محبوبیت محصول را بنویسید'
                            value={newProudctPopularity}
                            onChange={(e) => setNewProductPopularity(e.target.value)}
                        />
                    </div>
                    <div className="add-products-from-group">

                        <HiOutlineArrowTrendingUp />
                        <input type="text"
                            className="add-products-input"
                            placeholder='میزان فروش محصول را بنویسید'
                            value={newProudctSale}
                            onChange={(e) => setNewProductSale(e.target.value)}
                        />
                    </div>
                    <div className="add-products-from-group">
                        <VscSymbolColor />
                        <input type="text"
                            className="add-products-input"
                            placeholder='تعداد رنگ بندی محصول را بنویسید'
                            value={newProudctColors}
                            onChange={(e) => setNewProductColors(e.target.value)}
                        />
                    </div>

                </div>
                <button className='add-products-btn' onClick={(e) => addNewProduct(e)}>ثبت محصول</button>
            </form>
        </div>
    )
}
