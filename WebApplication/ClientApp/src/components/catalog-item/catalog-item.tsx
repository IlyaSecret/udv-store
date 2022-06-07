import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { CatalogItemCover } from "../catalog-item-cover/catalog-item-cover";
import { URLS } from "../../utils/URLS";
import './catalog-item.css'
import { setCurrentProduct } from "../../redux/products/reducer";
import { PRODUCTS_TITLES } from "../../utils/products-titles";


export const CatalogItem = ({product}:{product : any}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const title = product.productname;

    const handleClick = () => {
        dispatch(setCurrentProduct({product}))
        navigate(`/catalog/${product.productname}`);
    }
    

    const isAvalable = () => {
        return product.inexistance ? "В наличии" : "Нет в наличии";
    }
    return (
        <div className="catalog-item" onClick={ handleClick }>
            <CatalogItemCover image={product.img}/>
            <div className="catalog-item__details" >
                <span className="catalog-item_title">{PRODUCTS_TITLES[title]}</span>
                <span className="catalog-item__isAvailable">{isAvalable()}</span>
                <span className="catalog-item__price">{product.price} U</span>
            </div>
        </div>
    )
}