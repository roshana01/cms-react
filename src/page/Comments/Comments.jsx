import React from 'react'
import DeletModal from '../../Components/DeletModal/DeletModal'
import Error from '../../Components/Error/Error'

export default function Comments() {
  return (
    <div>
      <Error msg={'هیچ کامنتی یافت نشد...'} />
      <DeletModal />
    </div>
  )
}
