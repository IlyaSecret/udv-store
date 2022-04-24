import React from "react";
import { Link } from "react-router-dom";
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">

                <Link to="/catalog">
                    <img src="/img/logo.png"></img>
                </Link>                

                <div className="navbar-wrap">
                    <ul>
                        <li className="nav__link">Заказы</li>
                        <li className="nav__link yellow">Правила начисления UСoins</li>
                    </ul>
                </div>

                <div className="header__right">
                    <div className="header__right--user-info">
                        <ul>
                            <li>Тимофей</li>
                            <li className="yellow" id="small">3 700 U</li>
                        </ul>
                        
                    </div>
                    <img src="/img/user.png" id="user-avatar"></img>
                    <div className="header_right--cart">
                            <Link to="/cart"><img src="/img/cart.png" id="cart"></img></Link>
                            
                        
                    </div>
                </div>

                

            </div>
        </header>
    )
}