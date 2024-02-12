import React from "react";
import './NewCollections.css';
import data from "../Assets/new_collections"
import Item from "../item/item";
export default function NewCollections(){
    return(
    <div className="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="new-collection-item">
       {data.map((item,index) => <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)}
       </div>
    </div>);
}