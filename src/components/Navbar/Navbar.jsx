import React, { useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
export default function Navbar(){
    const{getTotalCartItems} =useContext(ShopContext);
    const [menu,setMenu]=useState("shop");
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={require('../Assets/logo.png') } alt=" logo" />
                <p>SHOPPER</p>
            </div>
                <ul className="nav-menu">
                <li onClick={() => setMenu("shop")}><Link style={{textDecoration:"none"}}to='/'>Shop</Link> {menu === "shop" ? <hr/> :<></>}</li>
                <li onClick={() => setMenu("mens")}><Link style={{textDecoration:"none"}} to='/mens'>men</Link>  {menu === "mens" ? <hr/> :<></>}</li>
                <li onClick={() => setMenu("womens")} ><Link  style={{textDecoration:"none"}}to='/womens'>women</Link>  {menu === "womens" ? <hr/> :<></>}</li>
                <li onClick={() => setMenu("kids")}><Link  style={{textDecoration:"none"}} to='/kids'>kids</Link>  {menu === "kids" ? <hr/> :<></>}</li>
                </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={require("../Assets/cart_icon.png")} alt="cart_icon"/></Link>
            <div className="nav-cart-counter">{getTotalCartItems()}</div>
        </div>

        </div>
    );
}