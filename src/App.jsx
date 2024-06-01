import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/Todoitem/TodoItem'
import TodoInput from './components/TodoInput/TodoInput'
export default function App() {
  
  const [todoList, setTodoList] = useState([])
  function addTodo(event){
    let TodoNumber = 1;
    event.preventDefault();
    console.log()
    const newTodo = {
      todoTitle: TodoNumber + 1,
      todoBody:'nnnn',
      todoStatus:'nnnn',
    }
    console.log('boaou')
    setTodoList(c => [...c, newTodo])
  }
  return (
    <>
      <TodoInput onSubmit={addTodo}/>
      
    </>
  )
}


