import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { clearCartItems } from "../../redux/cart/reducer";
import { CartItem } from "../cart-item/cart-item";
import "./cart-container.css";

export const CartContainer = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    const dispatch = useDispatch();

    const clearCart = () => { 
        dispatch(clearCartItems(cart));
    }
    return (<div className="cart-page__container">
    <div className="cart-page__container-title">
        <p>Ваша корзина</p>
        <div className="clear-cart" onClick={ clearCart }>
            <img src="/img/bin.png"></img>
            Очистить корзину
        </div>
    </div>
    <div className="cart-page__container-items">
        {cart.map((item:any) => <CartItem item={item} key={item.id}/>)} 
    </div>
</div>
)
    
}