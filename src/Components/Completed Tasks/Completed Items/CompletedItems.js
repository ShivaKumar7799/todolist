import React from 'react'

export default function CompletedItems(props) {
  return (
    <div>
      <input type = "text" value={props.text} readOnly />
    </div>
  )
}
