import React, { useEffect, useState } from "react";
import { ModalWindow } from "../../../modal-window/modal-window";
import { RequestCard } from "../../ucoin-request-card/ucoin-request-card";
import "./accural-ucoins.css";

export const AccuralUcoinsPage = () => {
    
    const users = [
        {
            name: "Ilya",
            email: "ilyakosyakov1@yandex.ru"
        },
        {
            name: "Ktoto",
            email: "Ktoto@mail.ru"
        }
    ]
    return (


        <div className="acc-ucoins">
        
            <div className="acc-ucioins__head">
                
                <div className="acc-ucoins__full-name">ФИО</div>
                <div className="acc-ucoins__mail">Почта</div>
                <div className="request-card__acc-ucoins yellow underline" style={{opacity: 0}}>Начислить UCoins</div>
            </div>
            <div className="acc-ucoins__requests">
                {users.map(user => <RequestCard user={user}/>)}
            </div>
            
        </div>
    )
}