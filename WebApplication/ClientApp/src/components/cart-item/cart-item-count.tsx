import React from "react";
import "./cart-item-count.css";

export const CartItemCount = () => {
    return (
        <div className="cart-count">
            <div className="count-minus counter">-</div>
            <div className="count">1</div>
            <div className="count-plus counter">+</div>
        </div>
    )
}