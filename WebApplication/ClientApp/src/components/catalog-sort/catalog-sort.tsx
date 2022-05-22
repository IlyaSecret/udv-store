import React from "react";
import { Link } from "react-router-dom";
import { GetUcoinsPage } from "../../pages/get-ucoins-page/get-ucoins-page";
import './catalog-sort.css';

export const CatalogSort = () => {

    return (
        <div className="catalog__sort">
                <div className="catalog__select">
                    <select>
                        <option value="" selected>По убыванию</option>
                        <option value="">По возрастанию</option>
                    </select>
                    
                </div>
                <div className="catalog__ucoins">
                    <Link to="/get-ucoins"><span className="yellow">Хочу Ucoins</span></Link>
                </div>
                
            </div>
    );
}