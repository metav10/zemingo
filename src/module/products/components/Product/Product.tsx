//? remote components
import React from 'react';
//? styling
import './Product.scss';
//? interfaces
import { ProductInterface } from '../../../../core/Interfaces';


const Product = (props: ProductInterface) => {

    //? RENDER
    return (
        <div className="product">
            <span className="product-name">{props.name}</span>
        </div>
    );
}
export default React.memo(Product);