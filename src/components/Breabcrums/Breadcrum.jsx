import React from "react";
import './Breadcrum.css';
export default function Breadcrum(props){
    const{product} =props;
    return(
        <div className="breadcrum">
            HOME<img src={require("../Assets/breadcrum_arrow.png")} alt=""/> SHOP <img src={require("../Assets/breadcrum_arrow.png")} alt=""/>{product.category}<img src={require("../Assets/breadcrum_arrow.png")} alt=""/>{product.name}
        </div>
    );
}