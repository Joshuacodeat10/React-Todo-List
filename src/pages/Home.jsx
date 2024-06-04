import { useState } from 'react'

import TodoItem from '../components/Todoitem/TodoItem'

import TodoInput from '../components/TodoInput/TodoInput'
import TodoList from '../components/TodoList/TodoList'
import EditingProvider from '../contexts/isEditingContext'
import { useEditingFunction, useEditingState } from '../contexts/isEditingContext'
export default function Home() {
    const value = useEditingValue();
   
    // Assign context variable from the isEditing context
    const editFunction = useEditingFunction();

    const [todoList, setTodoList] = useState([])
    const [todoTitle, setTodoTitle] = useState('box');
  //Function for setting the todo title state to the value of the input
    function setTitle(event){
        setTodoTitle(event.target.value)

        console.log(todoTitle)
    }
  // Function for adding  a new todo
  function addTodo(event){
    
    event.preventDefault();
    let todoId=0;
    /* This helps to check whether at least one task as been added, then , begin to start the 
    numbering system by getting the index of the particular object */
    if(todoList[0] !== undefined){
      console.log('yeah')
      todoId = todoList.length;
      console.log(todoId)
    }
   // Created a todo array so that the new values of the new todo can be added.
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
        <h1>{todoList.todoId}ssss{value}</h1>
     
    </>
  )
}


