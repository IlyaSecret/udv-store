import React, { useEffect, useState } from "react";
import { RequestCard } from "../../ucoin-request-card/ucoin-request-card";
import "./accural-ucoins.css";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { getAllUsers } from "../../../../redux/user/all-users-reducer";

export const AccuralUcoinsPage = () => {
    const users = useSelector((state : RootStateOrAny) => state.users.users);
    const disppatch = useDispatch();
    useEffect(() => {
        disppatch(getAllUsers());
    }, [disppatch]);
    return (


        <div className="acc-ucoins">
        
            <div className="acc-ucioins__head">
                
                <div className="acc-ucoins__full-name">ФИО</div>
                <div className="acc-ucoins__mail">Почта</div>
                <div className="request-card__acc-ucoins yellow underline" style={{opacity: 0}}>Начислить UCoins</div>
            </div>
            <div className="acc-ucoins__requests">
                {users.map((user : any) => <RequestCard user={user}/>)}
            </div>
            
        </div>
    )
}