import React from "react";
import "./login-page.css";
import { Link } from "react-router-dom";
import { GreenRegularButton } from "../../components/buttons/green-regular-button/green-regular-button";

export const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-page__content">
                <div className="login-page__logo">
                    <img src="/img/login-logo.png" alt="udv" />
                </div>
                <div className="inputs">
                    <input id="login-input" placeholder="Логин"></input>
                    <input id="password-input" placeholder="Пароль" type="password"></input>
                </div>

                <div className="login-page__button">
                    <Link to="/admin/accural-ucoins"><GreenRegularButton value="ВХОД" color="#00D29D"/></Link>
                </div>
            </div>
            
        </div>
    )
}