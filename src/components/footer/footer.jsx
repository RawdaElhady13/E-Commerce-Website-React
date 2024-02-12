import React from "react";
import './footer.css';
export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={require('../Assets/logo_big.png')} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <img src={require('../Assets/instagram_icon.png')} alt=""/>
                <img src={require('../Assets/pintester_icon.png')} alt=""/>
                <img src={require('../Assets/whatsapp_icon.png')} alt=""/>
            </div>


        </div>
    );
}