import React from "react";
import "./login-page.css";

export const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-page__logo">
                <img src="/img/login-logo.png" alt="udv" />
            </div>
            <div className="inputs">
                <input id="login-input" placeholder="Логин"></input>
                <input id="password-input" placeholder="Пароль" type="password"></input>
            </div>

            <div className="login-page__button">
                <button className="login-button">ВХОД</button>
            </div>
        </div>
    )
}