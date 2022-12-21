import React from 'react'
import DeleteModal from '../../Components/DeleteModal/DeleteModal'
import Error from '../../Components/Error/Error'

export default function Comments() {
  return (
    <div>
      <Error msg={'هیچ کامنتی یافت نشد...'} />
      <DeleteModal />
    </div>
  )
}
