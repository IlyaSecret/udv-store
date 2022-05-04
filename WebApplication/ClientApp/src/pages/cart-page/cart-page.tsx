import React from "react";
import "./cart-page.css";
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { CartContainer } from "../../components/cart-container/cart-container";
import { GreenRegularButton } from "../../components/buttons/green-regular-button/green-regular-button";
import { EmptyCart } from "../../components/empty-cart/empty-cart";
import { NotEmptyCart } from "../../components/not-empty-cart/not-empty-cart";


export const CartPage = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);

    const isCartEmpty = cart.length === 0 ? true : false;
    
    if (!isCartEmpty) {
        return <NotEmptyCart />
    }
    else{
        return <EmptyCart />
    }
}