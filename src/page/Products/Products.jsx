import React from 'react'
import AddNewProduct from '../../Components/AddNewProduct/AddNewProduct'
import Error from '../../Components/Error/Error'
import ProductTable from '../../Components/ProductTable/ProductTable'

export default function Products() {
  return (
    <>
      <AddNewProduct />
      <Error msg={'هیچ پیامی یافت نشد...'} />
      <ProductTable />
    </>
  )
}
