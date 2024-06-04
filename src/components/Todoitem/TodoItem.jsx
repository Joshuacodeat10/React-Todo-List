import './todoitem.css'
import { useState } from 'react'

export default function TodoItem({itemNumber,itemTitle,  itemStatus, onDelete, editValue,submitEdit}){
    // const isEditing = useEditingState();
    // const onEdit = useEditingFunction();
   
    function Olpox(event){
        event.preventDefault();
    }
    function aLdenad(){
        alert('me')
    }
   
    function fullFunc(){
        console.log('obobo')
        submitEdit()
    }
    return(
        
        <div className="todo-item" >
            {/* gi */}
            
            <p>{itemNumber}</p>
             <input type='checkbox'  defaultChecked={itemStatus}/>
             {isEditing && <form onSubmit={fullFunc} ><input value={editValue} ></input><button type='submit' >submit</button></form>}
            {!isEditing && <h2>{itemTitle}</h2>}
            <button onClick={onEdit}>edit</button>
            <button onClick={onDelete}>delete</button>
            {/* <article>{itemBody}</article> */}
        </div>
        
    )
}