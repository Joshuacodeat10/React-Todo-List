import TodoItem from "../Todoitem/TodoItem";
import './todolist.css'
export default function TodoList({list, key,itemTitle, itemBody, itemStatus}){
  return(
    <div className='todo-list'list={list} >
    {
    list.map((item) => 
    <div key={item.todoId}>
        <TodoItem itemNumber={item.todoId} itemTitle={item.todoTitle} itemStatus={item.todoStatus}/>
    </div>)
    }
    </div>
  )
}