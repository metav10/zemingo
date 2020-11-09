//? remote components
import React from 'react';
//? local components
import ProductsView from '../module/products/products';

const Products = () => {

    return (
        <>
            <ProductsView />
        </>
    );
}
export default React.memo(Products);