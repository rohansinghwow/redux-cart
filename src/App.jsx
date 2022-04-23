import React from "react";
import { useSelector  , useDispatch} from "react-redux";
import Cart from "./Components/Cart";
import { calculateTotals } from "./redux/features/cartSlice";
import { useEffect } from "react";

export default function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state)=> state.cart)
  useEffect(()=>{
    dispatch(calculateTotals())
} , [cartItems])



return (
  <>
    <h1>Welcome to Redux Cart Project</h1>
    
    <Cart/>
    
    
  </>
)
  
}
