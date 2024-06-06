import './todoitem.css'
import { useState } from 'react'

export default function TodoItem({itemNumber,itemTitle,  itemStatus, onDelete, editValue,submitEdit, changeEdit, onEdit, setValueTitle, checkBoxChange}){
    const [editDetails, setEditDetails] = useState('boool') ;
    const [isEditing, setIsEditing]=  useState(false);
    const [currentStatus, setCurrentStatus] = useState(true);
    function setStatus(){
        setCurrentStatus(!currentStatus)
    }
    
    function Olpox(event){
        event.preventDefault();
    }
    function onEdit(){
        // setValueTitle();
        setIsEditing(!isEditing)
    }
 
    function fullFunc(val){
        onEdit();
        submitEdit()
        
    }
    function changeStatus(){
       
    }
    function setTitle(event){
        setEditDetails(event.target.value)
        }
    
    return(
        
        <div className="todo-item" >
            {/* gi */}
            
            <p className='number'>{itemNumber}</p>
             <input 
             type='checkbox'  
             defaultChecked={currentStatus}
             onClick={setStatus}
             />
             {isEditing && 
             <form className='edit-form'onSubmit={() =>{fullFunc()}} >
                <textarea
                    value={editDetails} 
                    onChange={setTitle}
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