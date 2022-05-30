import React from "react";
import { Link } from "react-router-dom";
import { AccuralUcoinsPage } from "../admin-pages/accural-ucoins/accural-ucoins";
import './admin-header.css';
import {useState} from 'react';
import { UserMenu } from "../../user-menu/user-menu";
import { useSelector, RootStateOrAny } from 'react-redux';

export const AdminHeader = () => {
    const [isMenuVisible, setMenuVisible] = useState(false)
    const user = useSelector((state : RootStateOrAny) => state.user.user);
    return (
            <header className="header">
            <div className="container">

                <Link to="/admin/ucoin-requests">
                    <img src="/img/logo.png"></img>
                </Link>                

                <div className="navbar-wrap">
                    <ul>
                        <Link to="ucoin-requests"><li className="nav__link">Заявки</li></Link>
                        <Link to="admin-orders"><li className="nav__link">Заказы</li></Link>
                        <Link to="admin-merch"><li className="nav__link">Мерч</li></Link>
                        <Link to="accural-ucoins"><li className="nav__link green">Начисление UCoins</li></Link>
                    </ul>
                </div>

                <div className="header__right">
                    <div className="header__right--user-info">
                        <ul>
                            <li>{user.fio}</li>
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