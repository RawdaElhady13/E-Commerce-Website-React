import React from "react";
import './Hero.css';
export default function Hero(){
    return(<div className="hero">
        <div className="hero-left">
           <h2>NEW ARRIVALS ONLY</h2>
             <div>
               <div className="hero-hand-icon">
                <p>new</p>
                <img src={require('../Assets/hand_icon.png')} alt="hand_icon"/>
               </div>
               <p>collections</p>
               <p>for everyone</p>
             </div>
             <div className="hero-latest-btn">
                <div>Latesd Collection</div>
                <img src={require("../Assets/arrow.png")} alt="arrow_icon"/>
             </div>
             </div>
      <div className="hero-right">
     <img src={require('../Assets/hero_image.png')} alt="hero_image"/>
     </div>
       </div>);
}