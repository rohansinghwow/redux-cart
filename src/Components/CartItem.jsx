import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOne , deleteItem, removeOne} from "../redux/features/cartSlice";

export default function CartItem(props){

   const {id,title,price,img,amount}  = props
   const dispatch = useDispatch()

    return (
        <div className="cart-items rounded-md px-2 sm:w-full py-5 mb-5 flex flex-col shadow-md justify-around items-center">
            <img src={img} alt={title} className="p-3" style={{"width":"200px"}} />
            <p className="title">{title}</p>
            <p>Price : {price}</p>
            <div className="amount-div">
                <button className="px-4 py-2 mx-2 font-bold text-lg text-white bg-blue-600 shadow-md rounded-full" onClick={()=>dispatch(addOne(id))}>+</button>
                     <span className="px-5 py-2 shadow-md rounded-md">{amount}</span>
                <button className="px-4 py-2 mx-2 font-bold text-lg text-white bg-red-600 shadow-md rounded-full" onClick={()=>{
                    if(amount===1){
                        dispatch(deleteItem(id))
                        return
                    }
                    dispatch(removeOne(id)) 
                    
                }}>-</button>

            </div>
            <button className="px-4 py-2 mx-2 font-bold text-lg text-white bg-red-600 shadow-md rounded-full" onClick={()=>dispatch(deleteItem(id))}>Delete Item</button>
        </div>
    )
}