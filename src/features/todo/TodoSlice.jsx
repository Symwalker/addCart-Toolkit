import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id:1, text : "Hello World"}]
}
console.log(initialState.todos);

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers :{
        addTodo : (state, action)=>{
            console.log(action.payload, " slice");
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);

        },
        
        removeTodo : (state, action)=>{

            state.todos = state.todos.filter((todo)=>{
                return todo.id !== action.payload
            }) 

        },
        updateTodo: (state, action) => {
            // Find the index of the todo with the specified ID
            console.log(action.payload);
            const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
          
            // If the todo with the specified ID is found, update its text
            if (todoIndex !== -1) {
              state.todos[todoIndex].text = action.payload.text;
            }
          }

    }
})


export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer
