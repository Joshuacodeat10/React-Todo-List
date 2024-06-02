import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/Todoitem/TodoItem'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'
export default function App() {
  
  const [todoList, setTodoList] = useState([{
    todoId:  1,
    todoTitle: 'nnn',
    todoBody:'nnnn', 
    todoStatus:true,
  },{
    todoId:  2,
    todoTitle: 'nnn',
    todoBody:'nnnn', 
    todoStatus:true,
  }])
  // let todoId = 1;
  // function addTodo(event){
    
  //   event.preventDefault();
  //   console.log()
  //   const newTodo = {
  //     todoId: todoId + 1,
  //     todoTitle: 'nnn',
  //     todoBody:'nnnn', 
  //     todoStatus:true,
  //   }
  //   console.log(todoList.todoId)
  //   setTodoList(c => [...c, newTodo])
    
  //   return newTodo;
    
  // }
 
  return (
    <>
      {/* <TodoInput onSubmit={addTodo}/> */}
      <TodoList list={todoList}  />
      <h1>{todoList.todoId}ssss</h1>
    
    </>
  )
}


