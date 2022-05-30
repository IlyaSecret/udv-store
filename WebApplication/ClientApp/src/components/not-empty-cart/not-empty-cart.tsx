import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useAddOrderMutation } from "../../redux/ucoin-req/ucoinRequestApi";
import { GreenRegularButton } from "../buttons/green-regular-button/green-regular-button";
import { CartContainer } from "../cart-container/cart-container";
import { ModalWindow } from "../modal-window/modal-window";
import "./not-empty-cart.css";
import {useState} from 'react';

export const NotEmptyCart = () => {
    const [modalActive, setModalActive] = useState(false)
    const [secondModalActive, setSecondModalActive] = useState(false)
    const user = useSelector((state : RootStateOrAny) => state.user.user);
    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    const quantity = useSelector((state:RootStateOrAny) => state.cart.quantity);
    let [addOrder] = useAddOrderMutation()
    const totalCost = quantity.reduce((acc:number, item:any) => acc = acc + item.cost , 0);
    const itemsCart = cart?.map((el:any) => el.id)
    
    const handleClick = async () => {
        if (user.balance < totalCost) {
            setSecondModalActive(true);
        }
        else {
            await addOrder(itemsCart);
            setModalActive(true)
        }
        
    }

      
    return (
            
                    <div className="cart-page">
                        <ModalWindow active={modalActive} setActive={setModalActive}>
                            <img src="/img/tic.png"></img> <br></br>
                            Заказ успешно добавлен
                        </ModalWindow>
                        <ModalWindow active={secondModalActive} setActive={setSecondModalActive}>
                            <img src="/img/x.png"></img> <br></br>
                            Не достаточно Юкоинов
                        </ModalWindow>
                    <div className="cart-page-container">
                <CartContainer />
            </div>
            

            <div className="cart-page__info">
                <div className="cart-page__info__title">
                    Ваш Заказ
                </div>
                <div className="cart-page__info__balance">
                    <p className="clear-cart">ваш баланс:</p>
                    <p>{user.balance}</p>
                </div>
                <div className="line"></div>

                <div className="cart-page__info__result">
                    <p className="total_cost_title">Итого</p>
                    <p>{totalCost}</p>
                </div>

                <div className="cart-page__info__button" onClick={() => handleClick()}>
                    <GreenRegularButton value="Оплатить" color="#00D29D"/>
                </div>
            </div>

        </div>
    );
}