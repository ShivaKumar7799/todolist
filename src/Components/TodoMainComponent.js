import React, { useEffect, useRef, useState } from 'react'
import CompletedTasks from './Completed Tasks/CompletedTasks'
import TodoTasks from './Todo Tasks/TodoTasks'
import './TodoMainComponent.css'

let arrItem = []
let arrIndex = []
let arrCheck = []

export default function TodoMainComponent() {
  const [todosComponent,setTodosComponent] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [index,setIndex] = useState(0);
  
  const [markitems,setMarkItems] = useState([])
  const inputRef = useRef(null);
  const [checkeds,setCheckeds] = useState(null);
  const [displayMark,setDisplayMark] = useState(false)
  
const addTodoItem = () => {
  
  if(todoText != ""){
    setTodoArr([...todoArr,todoText]);
    const newArr = [...todosComponent,index];
    setTodosComponent(newArr);
    setIndex((prev) => prev + 1)
  }
  setTodoText("");
  inputRef.current.value = "";
}

const deletetodo = (index) => {
  let afterDelelte =  todosComponent.filter((item) => item != index);
  setTodosComponent(afterDelelte);
 let dumArr = todoArr.filter( (item,indexing) => indexing != index );
 setTodoArr(dumArr);
}

const enterTodo = (event) => {
  let enteredTodo = event.target.value;
  enteredTodo = enteredTodo.split(/\n/g);
  if(enteredTodo.length > 1){
     addTodoItem()
  }
  setTodoText(event.target.value);
}

const checking = (event,item, index) => {
  setCheckeds(null)
  if(event.target.checked){
    setDisplayMark(true)
    arrItem.push(item);
    arrIndex.push(index);
    arrCheck.push(false)
  } else{
    arrItem = arrItem.filter((element) => element != item);
    arrIndex = arrIndex.filter((element) => element != index);
    arrCheck = arrItem.filter((element) => element != item)
  }
}

const markComplete = (arrItem, arrIndex, arrCheck) => {
 
  var markIndex = todosComponent.filter( function(n) { return !this.has(n) }, new Set(arrIndex) );
  var markItem = todoArr.filter( function(n) { return !this.has(n) }, new Set(arrItem) );
   setTodosComponent(markIndex);
   setTodoArr(markItem);
   arrItem = [...new Set(arrItem)]; 
   setMarkItems(arrItem);
   setCheckeds((prev) => false)
   setDisplayMark(false)
}
const toggleBoolean = () => {
  setCheckeds()
}
useEffect(toggleBoolean,[markitems])

  return (
    <div className='todoContainer' >
       <div className='todo__header' >
          <h1> Add a Todo Task </h1>
          {/* <input ref={inputRef} onChange={enterTodo} type = "text" />  */}
          <div className='todo__input' >
          <textarea ref={inputRef} style = {{height : "15px"}} onChange = {enterTodo} value = {todoText} > </textarea>
          <button className='addBtn' onClick={addTodoItem} > +</button>
          </div>
       </div>

       <div className='todo__Tasks' >
         <div className='todo__pending'>
           {todoArr.length == 0 ? <h2 style={{color:"red"}} >No Pending Todo's</h2> : todoArr.length == 1 ? <h2 style={{color:"red"}} >  Pending Todo</h2> : <h2 style={{color:"red"}} > Pending Todo's</h2> }
          {todoArr.map((item,index) => {
            return <TodoTasks changetext = {item} checkeds ={checkeds} checking = {(event) =>{checking(event,item,index)}} key = {index} text={item} deletetodo = {() => deletetodo(index)} />
          })}

          {displayMark && <button className='displayMarkItems' onClick={() => {
             markComplete(arrItem,arrIndex,arrCheck)
           }} > Mark as Complete</button> }

          </div>

          <div className='todo__completed' >
           {markitems.length == 0 ?  <h2 style={{color:"green"}} > No Todo's Completed</h2> :markitems.length == 1 ?  <h2 style={{color:"green"}} > Completed Todo</h2> :<h2 style={{color:"green"}}>   Completed Todo's</h2>}
            {markitems.map((item, index) => <CompletedTasks text = {item} key={index} />)}
          </div>

       </div>
    </div>
  )
}

