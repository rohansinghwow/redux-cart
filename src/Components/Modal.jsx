import React from "react";
import { useDispatch } from "react-redux";
import { closeModal , clearCart} from "../redux/features/cartSlice";

export default function Modal(){
    const dispatch = useDispatch()
    
    return (
        <div className="bg-gray-300 opacity-95 absolute top-60 left-12  w-96 p-5">
            <h3>Are you sure you want to clear the cart ?</h3>
            <button className="bg-orange-500 mt-5 text-white mr-2" onClick={()=>dispatch(closeModal())}>Cancel</button>
            <button className="bg-red-500 mt-5 text-white ml-2" onClick={()=>{
                    dispatch(clearCart())
                    dispatch(closeModal())
            }
                
                }>Yes</button>
        </div>
    )
}