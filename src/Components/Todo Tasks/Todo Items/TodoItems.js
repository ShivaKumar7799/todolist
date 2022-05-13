import React from 'react'
import './TodoItem.css'

export default function TodoItems(props) {

  return (
    <div className='todoItemContainer' >
        <input className='checkBox' checked={props.checkeds} onChange={(event) => {props.checking(event)}} type= "checkbox" />
        <input className='pendingTodo' type = "text" value={props.text} readOnly />
        <button className='delBtn' onClick={props.deletetodo} > X </button>
    </div>
  )
}
