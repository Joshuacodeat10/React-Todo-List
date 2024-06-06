import TodoItem from "../Todoitem/TodoItem";
import { useState, useEffect } from "react";

import './todolist.css'
export default function TodoList({list,getId, submitEdit, getEditValue}){
    
    // This function gets the todo Id so that todos can be deleted in the Home page
    function deleteTodo(value){
        console.log('My' + value)
        getId(value)
    }
    /* submitEdit function is for passing this values down to the Home page, 
    so that required state title updates can be made */
    function submitEdit(val, id){
        getEditValue(val, id)
    }

      
  return(
    <div className='todo-list'list={list} >
    {
    list.map((item, index) => {
        return(
    <div key={item.todoId}>
        
        <TodoItem 
            itemNumber={index + 1}   
            submitEdit={submitEdit}
            id={item.todoId}
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