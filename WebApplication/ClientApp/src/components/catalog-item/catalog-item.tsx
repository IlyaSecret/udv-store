import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { CatalogItemCover } from "../catalog-item-cover/catalog-item-cover";
import { URLS } from "../../utils/URLS";
import './catalog-item.css'
import { setCurrentProduct } from "../../redux/products/reducer";

export const CatalogItem = ({product} : {product:any}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setCurrentProduct({product}))
        navigate(`/catalog/${product.title}`);
    }

    return (
        <div className="catalog-item" onClick={ handleClick }>
            <CatalogItemCover image={product.image}/>
            <div className="catalog-item__details" >
                <span className="catalog-item_title">{product.title}</span>
                <span className="catalog-item__isAvailable">{product.inExistance}</span>
                <span className="catalog-item__price">{product.price} U</span>
            </div>
        </div>
    )
}