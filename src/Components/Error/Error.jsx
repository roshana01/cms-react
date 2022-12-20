import React from 'react'
import './Error.css'
export default function Error({msg}) {
  return (
    <div className='cms-empty-error'>
        <h2>{msg}</h2>
    
    </div>
  )
}
