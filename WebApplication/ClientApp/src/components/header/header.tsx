import React from "react";
import { Link } from "react-router-dom";
import './header.css';
import {useState} from 'react';
import { UserMenu } from '../user-menu/user-menu';
import { RootStateOrAny, useSelector } from "react-redux";

export const Header = () => {
    const user = useSelector((state:RootStateOrAny) => state.user);
    const [isMenuVisible, setMenuVisible] = useState(false)
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
                            <li>{user.user.fio}</li>
                            <li className="yellow" id="small">{user.user.balance} U</li>
                        </ul>
                        
                    </div>
                    <div className="header__right__user-img" onClick={() => setMenuVisible(!isMenuVisible)}>
                        <img src="/img/user.png" id="user-avatar"></img>
                    </div>
                    {isMenuVisible ? <UserMenu /> : null}
                    
                    <div className="header_right--cart">
                            <Link to="/cart"><img src="/img/cart.png" id="cart"></img></Link>
                            
                        
                    </div>
                </div>

                

            </div>
        </header>
    )
}