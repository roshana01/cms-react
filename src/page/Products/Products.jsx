import React, { useEffect, useState } from 'react'
import AddNewProduct from '../../Components/AddNewProduct/AddNewProduct'
import Error from '../../Components/Error/Error'
import ProductTable from '../../Components/ProductTable/ProductTable'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Products() {
  const [allProducts, setAllProduct] = useState([])
  const [isInProgress, setIsInProgress] = useState(true)


  useEffect(() => {
    getAllProducts()
  }, []);

  const getAllProducts = () => {

    setIsInProgress(true)
    fetch('http://localhost:8000/api/products/')
      .then((res) => res.json())
      .then((prodauct) => {
        setAllProduct(prodauct.reverse())
        setIsInProgress(false)

      })
  }

  //* notify toast
  const successNotify = (toastMessage) => toast.success(toastMessage, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;
  const errorNotify = (toastMessage) => toast.error(toastMessage, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;
  return (
    <>
      <AddNewProduct
        getAllProducts={getAllProducts}
        successNotify={successNotify}
        errorNotify={errorNotify}
      />
      <ProductTable
        allProducts={allProducts}
        isInProgress={isInProgress}
        getAllProducts={getAllProducts}
        successNotify={successNotify}
        errorNotify={errorNotify}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
