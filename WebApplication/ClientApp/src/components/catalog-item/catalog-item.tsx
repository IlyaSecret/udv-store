import React from "react";
import { CatalogItemCover } from "../catalog-item-cover/catalog-item-cover";

import './catalog-item.css'
export const CatalogItem = ({product} : {product:any}) => {
    return (
        <div className="catalog-item">
            <CatalogItemCover image={product.image}/>
            <div className="catalog-item__details">
                <span className="catalog-item_title">{product.title}</span>
                <span className="catalog-item__isAvailable">{product.isAvailable}</span>
                <span className="catalog-item__price">{product.price} U</span>
            </div>
        </div>
    )
}