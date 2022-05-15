import React from "react";
import { Link } from "react-router-dom";
import "./user-menu.css";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { logoutUser } from "../../redux/user/reducer";
import { clearCartItems } from "../../redux/cart/reducer";



export const UserMenu = () => {
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    const user = useSelector((state:RootStateOrAny) => state.user);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser(user))
        dispatch(clearCartItems(cart));
    }
    return (
        <div className="user-menu">
            <div className="user-menu__buttons">
                <button className="user-menu__logout" onClick={logout}><Link to="/sign-in">Выход</Link></button>
            </div>
        </div>
    )
}