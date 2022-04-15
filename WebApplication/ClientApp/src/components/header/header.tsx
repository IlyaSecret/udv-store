import React from "react";
import { Link } from "react-router-dom";
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">

                <Link to="/catalog">
                    <img src="/img/logo.png"></img>
                </Link>                

                <nav>
                    <span className="nav__link"><Link to="/orders">Заказы</Link></span>
                    <span className="nav__link yellow">Правила начисления UСoins</span>
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
                            <Link to="/cart"><img src="/img/cart.png" id="cart"></img></Link>
                            
                        
                    </div>

            </div>
        </header>
    )
}