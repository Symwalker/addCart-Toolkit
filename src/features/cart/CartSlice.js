import { createSlice, nanoid } from "@reduxjs/toolkit";
import books from "./books";
const initialState = {
    books : books,
    cart : [],
    totalPrice : 0,

}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
       addToCart : (state, action)=>{
            const isContain=  state.cart.findIndex((item)=>{
                return item.id === action.payload.id
            })
            
            if (isContain === -1) {
                state.cart.push(action.payload)
            }
            else{
                state.cart[isContain].quantity +=1;
                state.cart[isContain].price += state.cart[isContain].price; 
                
            }
            
            state.totalPrice += (action.payload.price / action.payload.quantity)
       },
       
       removeToCart : (state, action)=>{
        const indexToRemove = state.cart.findIndex(item => item.id === action.payload.id);
        console.log(indexToRemove);
        if (indexToRemove !== -1) {
            state.cart.splice(indexToRemove, 1);
        }
        state.totalPrice -= action.payload.price
        // state.totalPrice =  state.cart.reduce((prev, curr)=>{
        //     return prev.price += curr.price
        // })
    },
    //    totalPrice : (state, action)=>{
    //     // state.totalPrice =  state.cart.reduce((prev, curr)=>{
    //     //     return prev.price + curr.price
    //     // })
    // },
    }
})


export const {addToCart, removeToCart} = cartSlice.actions

export default cartSlice.reducer