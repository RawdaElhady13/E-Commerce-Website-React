import React, { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breabcrums/Breadcrum";
import ProductDisplay from "../components/productdisplay/productdisplay";
import DescriptionBox from "../components/descriptionbox/descriptionbox";
export default function Products(){
    const {all_product} =useContext(ShopContext);
    const {productId} =useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return(
    <div >
         <Breadcrum product={product}/>
         <ProductDisplay product={product}/>
         <DescriptionBox/>
    </div>);
}