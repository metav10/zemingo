//? remote components
import React from 'react';
//? local components
import AddProduct from './components/AddProduct/AddProduct';
import Products from './components/Products/Products';


const ProductsView = () => {

    //? RENDER
    return (
        <div className="products">
            <h1>Products</h1>
            <AddProduct />
            <Products />
        </div>
    );
}
export default React.memo(ProductsView);