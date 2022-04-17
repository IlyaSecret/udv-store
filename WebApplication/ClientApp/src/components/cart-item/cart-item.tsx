import React from "react";
import "./cart-item.css";
import { ProductCover } from '../product-cover/product-cover';
import { CartCover } from '../cart-cover/cart-cover';

export const CartItem = ({item}:{item:any}) => {

    return (
        <div className="cart-item">
            <CartCover image={item.image} />
        </div>
    )
}