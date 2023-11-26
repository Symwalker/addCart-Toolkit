import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from './features/todo/TodoSlice';

const Todo = () => {
    const todos = useSelector(state => state.todos.todos)
    const dispatch =  useDispatch()
    const handleDelete = (id)=>{
      console.log(id);
      dispatch(removeTodo(id))
    }
    
    const handleUpdate = (id)=>{
     const text =  prompt('enter you updated value')
      dispatch(updateTodo({id, text}))
    }

  return (
    <div>
   
       {todos.map((todo)=>{
        return (
          <li key={todo.id}>{todo.text}
            <button onClick={()=>{handleDelete(todo.id)}}>X delete</button>
            <button onClick={()=>{handleUpdate(todo.id)}}>edit </button>
          </li>
        )
       })}
    </div>
  )
}

export default Todo
