import React from "react";
import './header.css';
import { BsCart } from 'react-icons/bs'

export const Header = () => {
    return (
        <header>
            <div className="header__logo">
                <img src="/img/logo.png" width={240} height={50}/>
            </div>
            <div className="header__navigation">
                    <p className="header__p">Заказы</p>
                    <p className="yellow">Правила начисления UCoins</p>
            </div>
            <div className="header__right">
                <div className="header__user-info">
                    <ul>
                        <li>Тимофей</li>
                        <li id="balance" className="yellow">3 700 U</li>
                    </ul>
                </div>
                <img src="/img/user.png" width={48} height={46}/>
                <div className="header__cart">
                    <img src="/img/cart.png" width={38} height={36}/>
                </div>
            </div>
        </header>
    )
}