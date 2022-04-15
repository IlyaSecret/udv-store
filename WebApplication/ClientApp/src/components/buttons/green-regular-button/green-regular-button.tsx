import React from "react";
import "./green-regular-button.css";

interface IButton {
    value: string
}

export const GreenRegularButton = ({value} : IButton) => {
    return (
        <button className="button">{value}</button>
    )
}