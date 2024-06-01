import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'
export default function App() {
  const [todoList, setTodoList] = useState([{todoTitle:'',todoBody:'', todoStatus:''}])
  function addTodo(event){
    event.preventDefault();
    const newTodo = {
      todoTitle:'nnn',
      todoBody:'nnnn',
      todoStatus:'nnnn',
    }
    setTodoList(c => [...c, newTodo])
  }
  return (
    <>
      <TodoInput onSubmit={addTodo}/>
      
    </>
  )
}


