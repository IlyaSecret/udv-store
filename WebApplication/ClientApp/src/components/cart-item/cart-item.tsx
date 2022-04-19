import React from "react";
import "./cart-item.css";
import { CartCover } from '../cart-cover/cart-cover';
import { CartItemCount } from "./cart-item-count";
import { deleteProductFromCart } from "../../redux/cart/reducer";
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';

export const CartItem = ({item}:{item:any}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    const deleteItem = () => {
        dispatch(deleteProductFromCart(item.id))
    }

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
                <div className="delete-item" onClick={ deleteItem }>
                    <img src="/img/x.png" id="cart-cross"></img>
                </div>
            </div>
            
        </div>
    )
}