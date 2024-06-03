import { useState } from 'react'

import TodoItem from '../components/Todoitem/TodoItem'

import TodoInput from '../components/TodoInput/TodoInput'
import TodoList from '../components/TodoList/TodoList'
import EditingProvider from '../contexts/isEditingContext'
import { useEditingFunction, useEditingState } from '../contexts/isEditingContext'
export default function Home() {
  const editFunction = useEditingFunction();

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
  // const [isEditing, setIsEditing] = useState(false)
  //   function onEdit(){
  //       setIsEditing(!isEditing)
  //   }
  
  function getId(id){
    alert(id + 'removed') 
    setTodoList(d => d.filter((element, a) => a !== id))
    console.log(todoList)
  }
  function editTodoItem(event){
    event.preventDefault();
    console.log('mei')
    editFunction();
  }
  return (
    <>
        <TodoInput 
          onChange={setTitle} 
          value={todoTitle} 
          onSubmit={addTodo}
        /> 
        <TodoList 
        list={todoList}
        submitEdit={editTodoItem} 
        getId={getId} 
        />
        <button onClick={editFunction}>My name</button>
        <h1>{todoList.todoId}ssss</h1>
     
    </>
  )
}


