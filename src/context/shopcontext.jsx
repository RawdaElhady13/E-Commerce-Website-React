import React, { createContext, useState } from "react"
import all_product from "../components/Assets/all_product";
export const ShopContext =createContext(null);
const getDefaultCart = ()=> {
    let cart ={};
    for (let index = 0; index < all_product.length+1; index++) {
       cart[index]=0;  
    }
    return cart;
}
export default function ShopContextProvider(props){
    const [cartItems ,setCartItems] =useState(getDefaultCart());
    
   const AddToCart  =(itemId)=>{
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
   }
   const RemoveFromCart  =(itemId)=>{
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
   }
   const getTotalCartAmount = () =>{
    let TotalAmount = 0;
    for (const item in cartItems)
    {
        if(cartItems[item] > 0)
        {
            let itemInfo =all_product.find((product) => product.id===Number(item))
            TotalAmount += itemInfo.new_price * cartItems[item];  
            
        }  
    }
    return TotalAmount;
   }
   const getTotalCartItems=()=>{
    let totalItem =0;
    for(const item in cartItems){
        if(cartItems[item] > 0){
            totalItem += cartItems[item];
        }
    }
    return totalItem;
   }

   const ContextValue ={all_product,cartItems,AddToCart,RemoveFromCart,getTotalCartAmount,getTotalCartItems};
    return(
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}