import React from "react";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { CatalogSort } from "../../components/catalog-sort/catalog-sort";
import "./catalog-page.css";

const requestURL = "https://625a6a7bcda73d132d1f181e.mockapi.io/products";

const products = [
    {
        image: '/img/product-photo/hat.JPG',
        title: "Шапка",
        price: 900,
        isAvailable: "В наличии",
        id: 0,
        quantityInCart: 0
    },
    {
        image: '/img/product-photo/pen.JPG',
        title: "Черно-Фиолетовая ручка",
        price: 4700,
        isAvailable: "В наличии",
        id: 1,
        quantityInCart: 0
    },
    {
        image: '/img/product-photo/pen.JPG',
        title: "Черно-Фиолетовая ручка",
        price: 4700,
        isAvailable: "В наличии",
        id: 2,
        quantityInCart: 0
    }
]
    
    



export const CatalogPage = () => {

    return (
        <div className="catalog">
            <CatalogSort />
            {products.map(product=> <CatalogItem product={product} key={product.id}/>)}
        </div>
    )
}