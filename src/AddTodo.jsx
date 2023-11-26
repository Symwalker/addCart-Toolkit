import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todo/TodoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    console.log(input);
    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")    

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <button type='submit'>add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
