import React, { useEffect } from "react";
import { CatalogItem } from "../../components/catalog-item/catalog-item";
import { CatalogSort } from "../../components/catalog-sort/catalog-sort";
import "./catalog-page.css";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { fetchProducts } from "../../redux/products/reducer";


    
    



export const CatalogPage = () => {


    const dispatch = useDispatch()
    const products = useSelector((state: RootStateOrAny) => state.products.productsList);
    useEffect(() => {
        dispatch(fetchProducts())
        }, [dispatch])

    return (
        <div className="catalog">
            <CatalogSort />
            {products.map((product: any)=> <CatalogItem product={product} key={product.id}/>)}
        </div>
    )
}