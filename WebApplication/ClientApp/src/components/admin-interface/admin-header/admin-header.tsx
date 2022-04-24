import React from "react";
import { Link } from "react-router-dom";
import { AccuralUcoinsPage } from "../admin-pages/accural-ucoins/accural-ucoins";
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
                        <li className="nav__link"><Link to="accural-ucoins">Заявки</Link></li>
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