import React from "react";
import "./cart-item-count.css";
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { decreaseCartItem, increaseCartItem } from "../../redux/cart/reducer";

export const CartItemCount = ({item} : {item:any}) => {
    const quantity = useSelector((state:RootStateOrAny) => state.cart.quantity);
    const itemIndex = quantity.findIndex((el:any) => el.id === item.id);
    const dispatch = useDispatch();


    const increaseHandleClick = () => {
        dispatch(increaseCartItem(item))
    }

    const decreaseHandleClick = () => {
        dispatch(decreaseCartItem(item));
    }
    return (
        <div className="cart-count">
            <div className="count-minus counter" onClick={ decreaseHandleClick }>-</div>
            <div className="count">{quantity[itemIndex].qantyt}</div>
            <div className="count-plus counter" onClick={ increaseHandleClick }>+</div>
        </div>
    )
}