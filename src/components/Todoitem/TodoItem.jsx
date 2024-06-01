export default function TodoItem({itemTitle, itemBody, itemStatus }){
    return(
        <div>
            <h2>{itemTitle}</h2>
            <article>{itemBody}</article> 
            <input type='checkbox' checked={itemStatus}/>
        </div>
        
    )
}