//? remote components
import React from 'react';
import { useRecoilState } from 'recoil';
//? local components
import Product from '../Product/Product';
//? styling
import './Products.scss';
//? interfaces
import { ProductInterface } from '../../../../core/Interfaces';
//? state
import { productsAtom } from '../../../../core/Atoms';


const Products = () => {
    const [products, setProducts] = useRecoilState<ProductInterface[]>(productsAtom);

    //? RENDER
    return (
        <div className="all-products">
            <div className="all-products-header">
                <h4>all products</h4>
            </div>
            <div className="all-products-content">
                {
                    products.map(({ name }) =>
                        <Product key={name} name={name} />
                    )
                }
            </div>
        </div>
    );
}
export default React.memo(Products);