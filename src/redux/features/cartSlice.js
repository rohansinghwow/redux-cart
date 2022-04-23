import  { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
    cartItems : cartItems,
    amount : 0,
    isModalOpen : false,
    total : 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addOne (state,action){
            const cartSingle = state.cartItems.find((item)=>item.id===action.payload)
            cartSingle.amount = cartSingle.amount + 1
            // cartSingle.price = cartSingle.price * cartSingle.amount
        },
        removeOne (state,action){
            const cartSingle = state.cartItems.find((item)=>item.id===action.payload)
            cartSingle.amount = cartSingle.amount - 1
            
        },
        clearCart(state){
            state.cartItems = []
        },
        deleteItem(state,action){
            state.cartItems = state.cartItems.filter((item)=>item.id !== action.payload)

        },
        calculateTotals(state){
            let total = 0
            let amount = 0
            state.cartItems.forEach((item)=>{
                amount += item.amount
                total += item.amount * item.price
            })
            state.total = total
            state.amount = amount
        },
        openModal(state){
            state.isModalOpen = true;
        },
        closeModal(state){
            state.isModalOpen = false
        },
    }
})

const { actions, reducer } = cartSlice
export const { addOne , removeOne , clearCart, deleteItem ,closeModal ,calculateTotals , openModal} = actions
export default reducer
