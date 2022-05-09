import React from 'react'
import TodoItems from './Todo Items/TodoItems'

export default function TodoTasks(props) {
  return (
    <>
     <TodoItems checkeds= {props.checkeds} checking = {props.checking} text = {props.text} deletetodo = {props.deletetodo} />
    
    </> 
  )
}
