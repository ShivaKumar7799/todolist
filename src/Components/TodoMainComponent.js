import React, { useRef, useState } from 'react'
import CompletedTasks from './Completed Tasks/CompletedTasks'
import TodoTasks from './Todo Tasks/TodoTasks'
let arrItem = []
let arrIndex = []
export default function TodoMainComponent() {
  const [todosComponent,setTodosComponent] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [todoArr, setTodoArr] = useState([]);
  const [checkedItem, setCheckedItem] = useState();
  const [index,setIndex] = useState(0);
  const [markitems,setMarkItems] = useState([])
  const inputRef = useRef(null);
  const [checkeds,setCheckeds] = useState(false)
  
const addTodoItem = () => {
  
  if(todoText != ""){
    console.log("todotext", todoText);
    setTodoArr([...todoArr,todoText]);
    const newArr = [...todosComponent,index];
    console.log(newArr);
    setTodosComponent(newArr);
    setIndex((prev) => prev + 1)
  }
  
  setTodoText("");
  inputRef.current.value = "";
}

const deletetodo = (index) => {
   console.log("todo deleted", index);
  let afterDelelte =  todosComponent.filter((item) => item != index);
  console.log(afterDelelte);
  setTodosComponent(afterDelelte);

 let dumArr = todoArr.filter( (item,indexing) => indexing != index );
 console.log(dumArr, "dumarr");
 setTodoArr(dumArr);
}

const enterTodo = (event) => {
  let enteredTodo = event.target.value;
  console.log(enteredTodo)
  enteredTodo = enteredTodo.split(/\n/g);
  
  console.log(enteredTodo)
  if(enteredTodo.length > 1){
     addTodoItem()
    console.log("enter pressed")
  }
  setTodoText(event.target.value);
}

const checking = (item, index) => {
  console.log("item", "index", item, index);
  let afterChecked = todosComponent.filter((items) => items == index);
  arrItem.push(item);
  arrIndex.push(index);
}

const markComplete = (arrItem, arrIndex) => {
 
   console.log(arrIndex,"markindex");
   console.log(arrItem, "markitem");
   console.log(todosComponent,"todoComponent");
   console.log(todoArr, "todoArr");

  var markIndex = todosComponent.filter( function(n) { return !this.has(n) }, new Set(arrIndex) );
  console.log(markIndex);
  var markItem = todoArr.filter( function(n) { return !this.has(n) }, new Set(arrItem) );
  console.log(markItem);

  setTodosComponent(markIndex);
  setTodoArr(markItem)

  //  setTodosComponent(arrIndex);
  //  setTodoArr(arrItem);
   setMarkItems(arrItem);
}
 
 
  return (
    <>
    <h1> Add a Todo Task </h1>
       {/* <input ref={inputRef} onChange={enterTodo} type = "text" />  */}
       <textarea ref={inputRef} style = {{height : "15px"}} onChange = {enterTodo} value = {todoText} > </textarea>
       <button onClick={addTodoItem} > +</button>

       <div style={{display : "flex", flexDirection : "row", gap : "80px"}} >
         <div>
           <h1> Todo Tasks</h1>
          {todoArr.map((item,index) => {
            return <TodoTasks checking = {() =>checking(item, index)} key = {index} text={item} deletetodo = {() => deletetodo(index)} />
          })}

          {todoArr.length > 0 && <button onClick={() => {
             markComplete(arrItem,arrIndex)
           }} > Mark as Complete</button> }

         </div>
         <div>
           <h1> Completed Tasks</h1>
           {markitems.map((item, index) => <CompletedTasks text = {item} key={index} />)}
         </div>
       </div>
    </>
  )
}

