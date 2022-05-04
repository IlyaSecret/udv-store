import React from "react";
import './cart-cover.css';

export const CartCover = ({image = ""} ) => {
    return (
        <div className="cart-cover" style={{backgroundImage: `url(${image})`}}>

        </div>
    );
}