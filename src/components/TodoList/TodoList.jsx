import TodoItem from "../Todoitem/TodoItem"
export default function TodoList({list, key,itemTitle, itemBody, itemStatus}){
  return(
    <div list={list}>
    {
    list.map(() => 
    <div key={key}>
        <TodoItem itemTitle={itemTitle} itemBody={itemBody} itemStatus={itemStatus}/>
    </div>)
    }
    </div>
  )
}