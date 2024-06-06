import TodoItem from "../Todoitem/TodoItem";
import { useState, useEffect } from "react";

import './todolist.css'
export default function TodoList({list, key,itemTitle, itemBody, itemStatus, getId, submitEdit,changeEdit}){
    // function delete(){
    //     setCars(c => c.filter((_, i) => i !== index));
    // }
    let tod = 1;
    const [editDetails, setEditDetails] = useState() ;
    function deleteTodo(value){
        
        console.log('My' + value)
        getId(value)
      }
      function als(){
        alert('rock')
      }
      function submitEdit(val){
        alert(val)
      }
      list.map((item, index) =>{

      })
      function setTitle(event){
        setEditDetails(event.target.value)
      }
      
  return(
    <div className='todo-list'list={list} >
    {
    list.map((item, index) => 
    <div key={item.todoId}>
        
        <TodoItem 
            itemNumber={index + 1}  
            setValueTitle={()=>{setEditDetails(item.todoTitle)}}
            submitEdit={() =>{submitEdit(item.todoId)}} 
            changeEdit={setTitle}
            editValue={editDetails}
            itemTitle={item.todoTitle} 
            onDelete={()=>{deleteTodo(index)}} 
            onitemStatus={item.todoStatus}
        />
       
    </div>
    )

    }
    </div>
  )
}