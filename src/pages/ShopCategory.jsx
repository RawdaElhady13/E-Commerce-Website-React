import React, { useContext } from "react";
import './css/shopcategory.css';
import { ShopContext } from "../context/shopcontext";
import Item from "../components/item/item";
export default function ShopCategory(props){
   const {all_product} = useContext(ShopContext)
    return(
    <div className="shopcategory">
       <img className="shopcategory-banner" src={props.banner} alt=""/>
       <div className="shopcategory-indexsort">
        <p>
            <span>showing 1-12</span> out of 54 products
        </p>
        <div className="shopcategory-sort">
           sort by <img src={require('../components/Assets/dropdown_icon.png')} alt=""/>
       </div>
       </div>
     
    <div className="shopcategory-products">
        { all_product.map((item,index) => { 
            if(props.category === item.category){
       return( <Item key={index} id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />)
        }
        else
        return(null);
    })}
    </div>
    <div className="shopcategory-laodmore">
        Explore More
    </div>
    </div>);
}