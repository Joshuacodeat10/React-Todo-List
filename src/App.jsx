import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoItem from './components/Todoitem/TodoItem'
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'
import EditingProvider from './contexts/isEditingContext'
export default function App() {
  
  const [todoList, setTodoList] = useState([])
  const [todoTitle, setTodoTitle] = useState('box')
  function setTitle(event){
    setTodoTitle(event.target.value)

    console.log(todoTitle)
  }
  function addTodo(event){
    
    event.preventDefault();
    let todoId=0;
    if(todoList[0] !== undefined){
      console.log('yeah')
    // console.log(Object.keys(todoList[0]))

    todoId = todoList.length;
    console.log(todoId)
    }
    // console.log()
    const newTodo = {
      todoId:todoId + 1,
      todoTitle:todoTitle,
      todoStatus:true,
    }
    console.log(todoList.todoId)
    
    setTodoList(c => [...c, newTodo])
  }
  const [isEditing, setIsEditing] = useState(false)
    function onEdit(){
        setIsEditing(!isEditing)
    }
  
  function getId(id){
    alert(id + 'removed')
    setTodoList(d => d.filter((element, a) => a !== id))
    console.log(todoList)
  }
  return (
    <>
      <EditingProvider>
        <TodoInput 
          onChange={setTitle} 
          value={todoTitle} 
          onSubmit={addTodo}
        />
        <TodoList 
        list={todoList} 
        getId={getId} 
        />
        <h1>{todoList.todoId}ssss</h1>
      </EditingProvider>
    </>
  )
}


