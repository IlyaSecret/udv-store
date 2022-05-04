import React from "react";
import { Link } from "react-router-dom";
import { AccuralUcoinsPage } from "../admin-pages/accural-ucoins/accural-ucoins";
import './admin-header.css';
import {useState} from 'react';
import { UserMenu } from "../../user-menu/user-menu";

export const AdminHeader = () => {
    const [isMenuVisible, setMenuVisible] = useState(false)
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
                        <Link to="accural-ucoins"><li className="nav__link green">Начисление UCoins</li></Link>
                    </ul>
                </div>

                <div className="header__right">
                    <div className="header__right--user-info">
                        <ul>
                            <li>Тимофей</li>
                        </ul>
                    </div>
                    <div className="header__right__user-img" onClick={() => setMenuVisible(!isMenuVisible)}>
                        <img src="/img/user.png" id="user-avatar"></img>
                    </div>
                    {isMenuVisible ? <UserMenu /> : null}
                </div>

                

            </div>
        </header>
    )
}