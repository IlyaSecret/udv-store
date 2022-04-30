import React from "react";
import "./ucoin-request-card.css";
import {useState} from 'react';
import { ModalWindow } from "../../modal-window/modal-window";
import { GreenRegularButton } from "../../buttons/green-regular-button/green-regular-button";

export const RequestCard = ({user}:any) => {
    
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className="request-card">
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <div className="modal">
                    <div className="modal__content">
                        <div className="modal__title yellow">
                            Начисление UCoins
                        </div>
                        <div className="modal__user-info">
                            <div className="modal_full-name">
                                <p className="modal_user-info_title name">ФИО</p>
                                <p className="modal_user-info_value">{user.name}</p>
                            </div>
                            <div className="modal__email">
                                <p className="modal_user-info_title email">Почта</p>
                                <p className="modal_user-info_value">{user.email}</p>
                                
                            </div>
                        </div>
                        
                        <div className="modal__select">
                            <select className="modal-select">
                                <option value="">Что-то</option>
                                <option value="">Где-то</option>
                                <option value="">Когда-то</option>
                                <option value="">Зачем-то</option>
                            </select>
                        </div>
                        <div className="modal__number">
                            <input type="text" placeholder="Введите число" style={{color:"white"}}></input>U
                        </div>
                        <div className="modal__button">
                            <div className="modal__button__content yellow">Начислить</div>
                        </div>
                    </div>
                </div>
            </ModalWindow>
            <div className="request-card__name">{user.name}</div>
            <div className="request-card__email">{user.email}</div>
            <div className="request-card__acc-ucoins yellow underline" onClick={() => setModalActive(true)}>Начислить UCoins</div>
        </div>
    )
}