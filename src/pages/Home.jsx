import { useState } from 'react'

import TodoItem from '../components/Todoitem/TodoItem'

import TodoInput from '../components/TodoInput/TodoInput'
import TodoList from '../components/TodoList/TodoList'
export default function Home() {
    const [todoList, setTodoList] = useState([])
    const [todoTitle, setTodoTitle] = useState('');
  //Function for setting the todo title state to the value of the input
    function setTitle(event){
        setTodoTitle(event.target.value)

        console.log(todoTitle)
    }
  // Function for adding  a new todo
//   const userObj = {
//     username = "Maria",
//     email: "maria@mail.com"
//   }
  
//   localStorage.setItem('user', JSON.stringify(userObj))
  function addTodo(event){
    
    event.preventDefault();
    let todoId=0;
    // Checks if input is empty
    if(todoTitle === '' ){
        alert('Please input value')
    }
    else{
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
        setTodoList(c => [...c, newTodo])
    }
  }
  // gets Id and deletes todo
  function getId(id){
    setTodoList(d => d.filter((element, a) => a !== id))
  }
  // gets id and title, then updates title based on which todo the id belongs to
  function getEditValue(val,title){
    let newTodo = todoList.map(p => p.todoId === val ? {...p, todoTitle: title} : p)
    setTodoList(newTodo)
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
        getId={getId} 
        getEditValue={getEditValue}
        />
     
    </>
  )
}


