import React from "react";
import {PRODUCTS} from "../products";

export const Shop = () => {
    return(
        <div> className="shop"
            <div className="shopTitle">
                <h1> Paris Perfume Outlet</h1>
                
            </div>
                <div className="products"> {PRODUCTS.map((product) =>
                    <Product /> ) }
                </div>
        </div>
        );
};