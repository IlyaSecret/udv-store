import React from "react";
import { CartCover } from "../cart-cover/cart-cover";
import "./order-item.css";

export const OrderItem = ({order} : {order:any}) => {
    return (
        <div className="order-item">
            <div className="order-item__image">
                <CartCover image={order.img}/>
            </div>
            <div className="order-item__title">
                {order.productName}
            </div>
            <div className="order-item__price">
                Цена: {order.price} U
            </div>
        </div>
    )
}