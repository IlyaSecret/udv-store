import React from "react";
import { Link } from "react-router-dom";
import './admin-header.css';

export const AdminHeader = () => {
    return (
            <header className="header">
            <div className="container">

                <Link to="/catalog">
                    <img src="/img/logo.png"></img>
                </Link>                

                <div className="navbar-wrap">
                    <ul>
                        <li className="nav__link">Заявки</li>
                        <li className="nav__link">Заказы</li>
                        <li className="nav__link">Мерч</li>
                        <li className="nav__link green">Начисление UCoins</li>
                    </ul>
                </div>

                <div className="header__right">
                    <div className="header__right--user-info">
                        <ul>
                            <li>Тимофей</li>
                        </ul>
                    </div>
                    <img src="/img/user.png" id="user-avatar"></img>
                </div>

                

            </div>
        </header>
    )
}