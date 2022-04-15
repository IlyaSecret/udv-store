import React from "react";
import './product-cover.css';

export const ProductCover = ({image = ""}) => {
    return (
        <div className="product-cover" style={{backgroundImage: `url(${image})`}}>

        </div>
    );
}