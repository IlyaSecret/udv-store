import React from "react";
import "./cart-item.css";
import { CartCover } from '../cart-cover/cart-cover';
import { CartItemCount } from "./cart-item-count";

export const CartItem = ({item}:{item:any}) => {

    return (
        <div className="cart-item">

            <div className="cart-item__details">
                <div className="cart-item__image">
                    <CartCover image={item.image} />
                </div>
                
                <div className="cart-item__title">
                    {item.title}
                </div>
                
                <CartItemCount />

                <div className="cart-item__price">
                    {item.price}
                </div>
                <div className="delete-item">
                    <img src="/img/x.png" id="cart-cross"></img>
                </div>
            </div>
            
        </div>
    )
}