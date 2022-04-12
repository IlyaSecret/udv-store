import React from "react";
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
                    <a href="#" className="yellow">Хочу Ucoins</a>
                </div>
                
            </div>
    );
}