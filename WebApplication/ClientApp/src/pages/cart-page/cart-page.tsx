import React from "react";
import "./cart-page.css";
import { useSelector, RootStateOrAny } from 'react-redux';
import { CartItem } from "../../components/cart-item/cart-item";

export const CartPage = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    return (
        <div className="cart-page">
            {cart.map((item:any) => <CartItem item={item} key={item.id}/>)}
        </div>
    );
}