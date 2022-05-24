import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { useAddOrderMutation } from "../../redux/orders/ordersApi";
import { GreenRegularButton } from "../buttons/green-regular-button/green-regular-button";
import { CartContainer } from "../cart-container/cart-container";
import "./not-empty-cart.css";

export const NotEmptyCart = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    const quantity = useSelector((state:RootStateOrAny) => state.cart.quantity);
    let [addOrder] = useAddOrderMutation()
    const totalCost = quantity.reduce((acc:number, item:any) => acc = acc + item.cost , 0);
    return (
            
                    <div className="cart-page">
                    <div className="cart-page-container">
                <CartContainer />
            </div>
            

            <div className="cart-page__info">
                <div className="cart-page__info__title">
                    Ваш Заказ
                </div>
                <div className="cart-page__info__balance">
                    <p className="clear-cart">ваш баланс:</p>
                    <p>3700</p>
                </div>
                <div className="line"></div>

                <div className="cart-page__info__result">
                    <p className="total_cost_title">Итого</p>
                    <p>{totalCost}</p>
                </div>

                <div className="cart-page__info__button" >
                    <GreenRegularButton value="Оплатить" color="#00D29D"/>
                </div>
            </div>

        </div>
    );
}