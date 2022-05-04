import React from "react";
import "./green-regular-button.css";

interface IButton {
    value: string
    color: string
    onClick?: any
}

export const GreenRegularButton = ({value, color} : IButton, onClick: IButton) => {
    return (
        <button className="button" style={{backgroundColor: `${color}`}}>{value}</button>
    )
}