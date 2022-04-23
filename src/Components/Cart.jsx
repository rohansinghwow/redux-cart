import React from "react";
import { useSelector , useDispatch} from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../redux/features/cartSlice";


export default function Cart(){
    const dispatch = useDispatch()
    
    const {cartItems , total , amount} = useSelector((state)=>state.cart)

    

    return (
        <>
        <div className="heading">
            <h1 className="text-2xl">Cart </h1>
            <span className="py-2 px-5 bg-orange-700 text-white">Number of Items : {amount}</span>

        </div>

        <div className="card shadow-md p-5 ">
           {cartItems.map((item)=>{
                
                return <CartItem  {...item} />
            })}
        </div>
        <p className="amount py-3 px-2  bg-red-800 text-white">Total : {total.toFixed(2)}</p>
        <div className="clear-cart">
            <button className="py-3 px-5 bg-orange-500 mt-5 text-white font-bold" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        </div>
        </>
    )
}