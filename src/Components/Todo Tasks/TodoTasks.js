import React from 'react'
import TodoItems from './Todo Items/TodoItems'
import './TodoTasks.css'

export default function TodoTasks(props) {
  return (
    <div className='todo__tasks' >
     <TodoItems changeCheck = {props.changeCheck} changetext = {props.changetext} checkeds= {props.checkeds} checking = {props.checking} text = {props.text} deletetodo = {props.deletetodo} />
    </div> 
  )
}
