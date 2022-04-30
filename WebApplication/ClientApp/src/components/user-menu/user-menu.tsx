import React from "react";
import { Link } from "react-router-dom";
import "./user-menu.css";


export const UserMenu = () => {
    return (
        <div className="user-menu">
            <div className="user-menu__buttons">
                <button className="user-menu__logout"><Link to="/sign-in">Выход</Link></button>
            </div>
        </div>
    )
}