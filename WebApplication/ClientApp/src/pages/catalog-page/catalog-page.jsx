import React, { useEffect } from "react";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { CatalogSort } from "../../components/catalog-sort/catalog-sort";
import "./catalog-page.css";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchProducts } from "../../redux/products/reducer";
import { authUser } from "../../redux/user/reducer";



export const CatalogPage = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.productsList);
    useEffect(() => {
        dispatch(fetchProducts());
        let userInfo = {
            userPassword: user.pass,
            userEmail: user.email,
        }
        dispatch(authUser(userInfo))
        }, [dispatch])

    return (
        <div className="catalog">
            <CatalogSort />
            {products.map((product)=> <CatalogItem product={product} key={product.id}/>)}
        </div>
    )
}