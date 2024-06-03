import TodoItem from "../Todoitem/TodoItem";
import './todolist.css'
export default function TodoList({list, key,itemTitle, itemBody, itemStatus, getId}){
    // function delete(){
    //     setCars(c => c.filter((_, i) => i !== index));
    // }
    let tod = 1;
    function deleteTodo(value){
        
        console.log('My' + value)
        getId(value)
      }
  return(
    <div className='todo-list'list={list} >
    {
    list.map((item) => 
    <div key={item.todoId}>
        
        <TodoItem itemNumber={item.todoId} itemTitle={item.todoTitle} onDelete={()=>{deleteTodo(item.todoId)}} onitemStatus={item.todoStatus}/>
    </div>)
    }
    </div>
  )
}