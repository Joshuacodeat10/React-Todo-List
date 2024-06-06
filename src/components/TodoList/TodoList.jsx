import TodoItem from "../Todoitem/TodoItem";
import { useState, useEffect } from "react";

import './todolist.css'
export default function TodoList({list, key,itemTitle, itemBody, itemStatus, getId, submitEdit,changeEdit, getEditValue}){
    
    // const [currentStatus, setCurrentStatus] = useState(true);
    // function setStatus(){
    //     setCurrentStatus(!currentStatus)
    // }
    function deleteTodo(value){
        console.log('My' + value)
        getId(value)
    }
    // Function that collects the id and title of the current todo
    function submitEdit(val, title){
        getEditValue(val, title)
    }
    // updates the edit details, which will be submitted
    function setTitle(event){
    setEditDetails(event.target.value)
    }

      
  return(
    <div className='todo-list'list={list} >
    {
    list.map((item, index) => {
        return(
    <div key={item.todoId}>
        
        <TodoItem 
            itemNumber={index + 1}  
            // setValueTitle={()=>{setEditDetails(item.todoTitle)}}
            // submitEdit={() =>{submitEdit(item.todoId,editDetails)}} 
               submitEdit={''}
            // changeEdit={setTitle}
            // editValue={(event) => {event.target.value}}
            itemTitle={item.todoTitle} 
            onDelete={()=>{deleteTodo(index)}} 
            onitemStatus={item.todoStatus}
        />
       
    </div>)}
    )

    }
    </div>
  )
}