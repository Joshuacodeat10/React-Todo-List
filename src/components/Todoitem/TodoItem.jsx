import './todoitem.css'
import { useState } from 'react'

export default function TodoItem({itemNumber,itemTitle,  itemStatus, onDelete, editValue,submitEdit, changeEdit, onEdit, setValueTitle}){

    const [isEditing, setIsEditing]=  useState(false);
    
    function Olpox(event){
        event.preventDefault();
    }
    function onEdit(){
        setValueTitle();
        setIsEditing(!isEditing)
    }
 
    function fullFunc(val){
        onEdit();
        submitEdit()
        
    }
    return(
        
        <div className="todo-item" >
            {/* gi */}
            
            <p className='number'>{itemNumber}</p>
             <input 
             type='checkbox'  
             defaultChecked={itemStatus}
             />
             {isEditing && 
             <form className='edit-form'onSubmit={() =>{fullFunc()}} >
                <textarea
                    value={editValue} 
                    onChange={changeEdit}
                />
                
                <button type='submit' >submit</button>
            </form>}

            {!isEditing && <div onClick={onEdit}><p className='item-title'>{itemTitle}</p></div>}
            {! isEditing && <button onClick={onEdit}>edit</button> }
            <button onClick={onDelete}>delete</button>
            {/* <article>{itemBody}</article> */}
        </div>
        
    )
}