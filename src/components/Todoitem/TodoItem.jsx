import './todoitem.css'
import { useState } from 'react'
export default function TodoItem({itemNumber,itemTitle,  itemStatus, onClick, editValue}){
    const [isEditing, setIsEditing] = useState(false)
    function onEdit(){
        setIsEditing(!isEditing)
    }
    return(
        <div className="todo-item">
            {/* gi */}
            
            <p>{itemNumber}</p>
             <input type='checkbox'  defaultChecked={itemStatus}/>
             {isEditing && <input value={editValue} autoFucos></input>}
            {!isEditing && <h2>{itemTitle}</h2>}
            <button onClick={onEdit}>edit</button>
            <button onClick={onClick}>delete</button>
            {/* <article>{itemBody}</article> */}
        </div>
        
    )
}