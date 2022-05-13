import React from 'react'
import './CompletedItems.css'
export default function CompletedItems(props) {
  return (
    <div className='completedContainer' >
      <input className='completedItem' type = "text" value={props.text} readOnly />
    </div>
  )
}
