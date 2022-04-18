import React from "react";
import "./cart-page.css";
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { CartContainer } from "../../components/cart-container/cart-container";
import { GreenRegularButton } from "../../components/buttons/green-regular-button/green-regular-button";


export const CartPage = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    const totalCost = cart.reduce((acc:number, item:any) => acc = acc + item.price, 0)

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

                <div className="cart-page__info__button">
                    <GreenRegularButton value="Оплатить" />
                </div>
            </div>

        </div>
    );
}