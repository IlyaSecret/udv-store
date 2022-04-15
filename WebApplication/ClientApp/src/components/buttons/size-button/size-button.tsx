import React from "react";
import "./size-button.css";



export const SizeButtons = () => {

    const sizes = ["XS", "S", "M", "L", "XL"]

    return (
        <div className="size-buttons">
            {sizes.map(size=> {
                return <button className="size-button">{size}</button>
            })}
        </div>
    )
}