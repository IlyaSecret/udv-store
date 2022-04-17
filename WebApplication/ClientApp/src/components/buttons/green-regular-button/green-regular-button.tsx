import React from "react";
import "./green-regular-button.css";

interface IButton {
    value: string
    onClick?: any
}

export const GreenRegularButton = ({value} : IButton, onClick: IButton) => {
    return (
        <button className="button">{value}</button>
    )
}