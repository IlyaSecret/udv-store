import React from "react";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { CatalogSort } from "../../components/catalog-sort/catalog-sort";
import "./catalog-page.css";

const products = [
    {
        image: '/img/product-photo/hat.JPG',
        title: "Шапка",
        price: 900,
        isAvailable: "В наличии",
        id: 0
    },
    {
        image: '/img/product-photo/hat.JPG',
        title: "Шапка",
        price: 900,
        isAvailable: "В наличии",
        id: 0
    },
    {
        image: '/img/product-photo/hat.JPG',
        title: "Шапка",
        price: 900,
        isAvailable: "В наличии",
        id: 0
    },
    {
        image: '/img/product-photo/hat.JPG',
        title: "Шапка",
        price: 900,
        isAvailable: "В наличии",
        id: 0
    },
    {
        image: '/img/product-photo/hat.JPG',
        title: "Шапка",
        price: 900,
        isAvailable: "В наличии",
        id: 0
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