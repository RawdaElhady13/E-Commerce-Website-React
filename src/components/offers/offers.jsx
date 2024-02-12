import React from "react";
import './offers.css';
export default function Offers(){
    return(
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>check now</button>
        </div>
        <div className="offers-right">
            <img src={require('../Assets/exclusive_image.png')} alt=""/>
        </div>
       
    </div>);
}