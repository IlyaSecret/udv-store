import React from "react";
import { Link } from "react-router-dom";
import "./empty-cart.css";

export const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <div className="empty-cart__content">
                <div className="empty-cart__title">
                    <p className="empty-cart__title__text">Ваша корзина пуста</p>
                    <p className="empty-cart__title__redirect">Нажмите <Link to="/catalog"><span className="green underline">здесь</span></Link>, чтобы просмотреть каталог</p>
                </div>
                <div className="empty-cart__image">
                    <img src="/img/emptycart.png"></img>
                </div>
            </div>
        </div>
    )
}