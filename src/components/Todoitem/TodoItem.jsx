import './todoitem.css'
export default function TodoItem({itemNumber,itemTitle,  itemStatus, onClick, onEdit }){
    return(
        <div className="todo-item">
            {/* gi */}
            <p>{itemNumber}</p>
             <input type='checkbox'  defaultChecked={itemStatus}/>
            <h2>{itemTitle}</h2>
            <button onClick={onEdit}>edit</button>
            <button onClick={onClick}>delete</button>
            {/* <article>{itemBody}</article> */}
        </div>
        
    )
}