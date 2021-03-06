import React from "react";
import { useSelector , useDispatch} from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/features/cartSlice";
import { openModal } from "../redux/features/cartSlice";
import Modal from './Modal'

export default function Cart(){
    const dispatch = useDispatch()
    
    const {cartItems , total , amount , isModalOpen} = useSelector((state)=>state.cart)

    

    return (
        <div className="p-5 mx-auto  w-3/5">
        <div className="heading">
            <h1 className="text-2xl">Cart </h1>
            <span className="py-2 px-3 w-full bg-orange-700 text-white">Number of Items : {amount}</span>

        </div>

        <div className="w-5/6 ">
           {cartItems.map((item)=>{
                
                return <CartItem  {...item} />
            })}
        </div>
        <p className="amount py-3 px-2  bg-red-800 text-white">Total : {total.toFixed(2)}</p>
        <div className="clear-cart">
            
                <button className="py-3 px-5 bg-orange-500 mt-5 text-white font-bold" onClick={()=>dispatch(openModal())}>Clear Cart</button>
            
            
            {isModalOpen && <Modal/>}
        </div>
        </div>
    )
}