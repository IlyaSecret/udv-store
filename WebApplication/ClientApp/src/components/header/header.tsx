import React from "react";
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">

                <a className="logo">
                    <img src="/img/logo.png"></img>
                </a>

                <nav>
                    <a href="#" className="nav__link">Заказы</a>
                    <a href="#" className="nav__link yellow">Правила начисления UСoins</a>
                </nav>

                <div className="header__right">
                    <div className="header__right--user-info">
                        <ul>
                            <li>Тимофей</li>
                            <li className="yellow" id="small">3 700 U</li>
                        </ul>
                        
                    </div>
                    <img src="/img/user.png" id="user-avatar"></img>
                </div>

                <div className="header_right--cart">
                        <a href="#">
                            <img src="/img/cart.png" id="cart"></img>
                        </a>
                    </div>

            </div>
        </header>
    )
}