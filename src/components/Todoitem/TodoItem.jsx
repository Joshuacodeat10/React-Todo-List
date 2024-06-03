import './todoitem.css'
import { useState } from 'react'
import { useEditingFunction, useEditingState } from '../../contexts/isEditingContext';
export default function TodoItem({itemNumber,itemTitle,  itemStatus, onDelete, editValue,submitEdit}){
    const isEditing = useEditingState();
    const onEdit = useEditingFunction();
    return(
        <div className="todo-item">
            {/* gi */}
            
            <p>{itemNumber}</p>
             <input type='checkbox'  defaultChecked={itemStatus}/>
             {isEditing && <form onSubmit={submitEdit}><input value={editValue} ></input><input type='submit' ></input></form>}
            {!isEditing && <h2>{itemTitle}</h2>}
            <button onClick={onEdit}>edit</button>
            <button onClick={onDelete}>delete</button>
            {/* <article>{itemBody}</article> */}
        </div>
        
    )
}