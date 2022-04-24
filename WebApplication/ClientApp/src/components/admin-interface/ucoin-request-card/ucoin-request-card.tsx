import React from "react";
import "./ucoin-request-card.css";

export const RequestCard = ({user} : {user:any}) => {
    return (
        <div className="request-card">
            <div className="request-card__name">{user.name}</div>
            <div className="request-card__email">{user.email}</div>
            <div className="request-card__acc-ucoins yellow underline">Начислить UCoins</div>
        </div>
    )
}