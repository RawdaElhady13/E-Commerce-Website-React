import React, { useContext } from "react";
import './cartItems.css';
import { ShopContext } from "../../context/shopcontext";
export default function CartItems(){
 const{all_product,cartItems,RemoveFromCart,getTotalCartAmount} =useContext(ShopContext);
    return(
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
     {all_product.map((e) => {
        if(cartItems[e.id]>0){
            return( <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon_product_icon"/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="carticon_quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className="cartitems-remove-icons"src={require('../Assets/cart_cross_icon.png')}alt="" onClick={()=>RemoveFromCart(e.id) }/>
            </div>
            <hr/>
        </div>)
         }
         return(null);
     })}
     <div className="cartitems-downs">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitem-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitem-total-item">
                    <p>Shipping Free</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitem-total-item">
                    <p>Total</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
            </div>
            <button>Proceed to checkout </button>

        </div>
     </div>
    
    </div>);
}