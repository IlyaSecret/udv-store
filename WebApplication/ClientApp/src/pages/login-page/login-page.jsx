import React, { useState } from "react";
import "./login-page.css";
import { useNavigate } from "react-router-dom";
import { GreenRegularButton } from "../../components/buttons/green-regular-button/green-regular-button";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authUser } from "../../redux/user/reducer";

export const LoginPage = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (user.status == "succes") {
            navigate("/catalog")
        }
        else {
            console.log("Нет");
        }
    }, [user.status])
    return (
        <div className="login-page">
            <div className="login-page__content">
                <div className="login-page__logo">
                    <img src="/img/login-logo.png" alt="udv" />
                </div>
                <div className="inputs">
                    <input id="login-input" placeholder="Логин" onChange={(e) => setEmail(e.target.value)}></input>
                    <input id="password-input" placeholder="Пароль" type="password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>

                <div className="login-page__button"  onClick={() => {
                    let userInfo = {
                        userPassword: password,
                        userEmail: email,
                    }
                    dispatch(authUser(userInfo));
                }}>
                    <GreenRegularButton value="ВХОД" color="#00D29D"/>
                </div>
            </div>
            
        </div>
    )
}