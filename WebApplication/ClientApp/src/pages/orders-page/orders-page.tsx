import React from "react";
import { OrderCard } from "../../components/order-card/order-card";
import "./orders-page.css";

export const OrdersPage = () => {
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
        }
    ]
    return (
        <div className="orders-page">
        
        </div>
    )
}