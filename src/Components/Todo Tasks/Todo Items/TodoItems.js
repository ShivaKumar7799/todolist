import React from 'react'

export default function TodoItems(props) {
  return (
    <div>
        <input checked = {props.checkeds}  onChange={props.checking} type= "checkbox" />
        <input type = "text" value={props.text} readOnly />
        <button onClick={props.deletetodo} > X </button>
    </div>
  )
}
