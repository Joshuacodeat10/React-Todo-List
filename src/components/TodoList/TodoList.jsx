import TodoItem from "../Todoitem/TodoItem"
export default function TodoList({list, key,itemTitle, itemBody, itemStatus}){
  return(
    <div list={list} >
    {
    list.map((item) => 
    <div key={item.todoId}>
        <TodoItem itemNumber={item.todoId} itemTitle={item.todoTitle} itemStatus={item.todoStatus}/>
    </div>)
    }
    </div>
  )
}