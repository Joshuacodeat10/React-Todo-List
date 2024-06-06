import './todoitem.css'
import { useState } from 'react'

export default function TodoItem({itemNumber,itemTitle,  itemStatus, onDelete, editValue,submitEdit, changeEdit, onEdit, setValueTitle, checkBoxChange, title}){
    // state variable for setting the editDetails
    const [editDetails, setEditDetails] = useState('boool') ;
    // state variable for setting the isEditing variable
    const [isEditing, setIsEditing]=  useState(false);
    // Stores the status of the variable whether it is completed or not
    const [currentStatus, setCurrentStatus] = useState(true);
    // Toggles the check mark from checked to uncheck
    function setStatus(){
        setCurrentStatus(!currentStatus)
    }
    // Toggles the isEditing state between true or false
    function onEdit(){
        // setValueTitle();
        setIsEditing(!isEditing)
    }
    // Function that runs onSubmit of edit form
    function fullFunc(val,title){

        console.log(val)
        onEdit();
        submitEdit(val,title)
       
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
             <form className={`edit-form`} onSubmit={(event) =>{fullFunc(editDetails, title)}} >
                <textarea
                    value={editDetails} 
                    onChange={setTitle}
                />
                
                <button type='submit' >submit</button>
            </form>}

            {!isEditing && <div onClick={onEdit}><p className={`item-title ${currentStatus ? 'underline' : ''}`}>{itemTitle}</p></div>}
            {! isEditing && <button onClick={onEdit}>edit</button> }
            <button onClick={onDelete}>delete</button>
            {/* <article>{itemBody}</article> */}
        </div>
        
    )
}