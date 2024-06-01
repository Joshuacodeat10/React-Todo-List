import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/Todoitem/TodoItem'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'
export default function App() {
  
  const [todoList, setTodoList] = useState([])
  let todoId = 1;
  function addTodo(event){
    
    event.preventDefault();
    console.log()
    const newTodo = {
      todoId: todoId + 1,
      todoTitle: 'nnn',
      todoBody:'nnnn',
      todoStatus:'nnnn',
    }
    console.log('boaou')
    setTodoList(c => [...c, newTodo])
  }
  return (
    <>
      <TodoInput onSubmit={addTodo}/>
      <TodoList list={todoList} key={todoId}/>
      <h1>{todoId}ssss</h1>
    </>
  )
}


