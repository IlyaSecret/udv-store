import React from "react";
import { GreenRegularButton } from "../../components/buttons/green-regular-button/green-regular-button";
import "./product-page.css";
import { SizeButtons } from '../../components/buttons/size-button/size-button';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { ProductCover } from "../../components/product-cover/product-cover";
import {setProductInCart, deleteProductFromCart} from "../../redux/cart/reducer";
import { PRODUCTS_TITLES } from "../../utils/products-titles";

 
export const ProductPage = () => {

    const cart = useSelector((state: RootStateOrAny) => state.cart.itemsInCart);
    const dispatch = useDispatch();
    const products = useSelector((state : RootStateOrAny)=> state.products.currentProduct.product)
    const title = products.productName;

    const handleClick = () => {
        dispatch(setProductInCart(products))
    }
    let size;
    if (products.haveSize) {
        size = <SizeButtons></SizeButtons>
    }

    return (
        <div className="product-page">
            <div className="product-page__head">

                <div className="product-page__image">
                    <ProductCover image={products.img}></ProductCover>
                </div>

                <div className="product-page__info">
                
                    <div className="product-page__details">
                        <p className="details__title">{PRODUCTS_TITLES[title]}</p>
                        <p className="details__desc">черная, мужская</p>
                    </div>
                    <div className="product-page__price">
                        {products.price} U
                    </div>
                    <div className="product-page__sizes">
                        {size}
                    </div>
                    <div className="product-page__inCartButton" onClick={ handleClick }>
                        <GreenRegularButton value="Добавить в корзину" color="#00D29D"></GreenRegularButton>
                    </div>
                </div>
            
            </div>
            
            <div className="product-page__description">
                <div className="desc_title">Описание:</div>
                <div className="product-page__description-text">
                Здесь вот такое красивое описание толстовки. Наверное, можно сказать,
                     что ее удобно носить в теплую погоду или зимой под курткой. Материал отменный, приятный к телу, ко
                     жа дышит. Цвет нейтральный, поэтому ко всему подойдет.
                </div>
            </div>
        </div>
    )
}