import { configureStore } from '@reduxjs/toolkit'
// this is creating a store
import todoReducer from "../features/todo/TodoSlice"
import cartReducer from "../features/cart/CartSlice"


export const store = configureStore({
    reducer : {
        // todos :  todoReducer,
        cart: cartReducer
    }
});