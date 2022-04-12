import React from "react";
import './catalog-item-cover.css';

export const CatalogItemCover = ({image = ""}) => {
    return (
        <div className="item-cover" style={{backgroundImage: `url(${image})`}}>

        </div>
    );
}