//? remote components
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
//? local components
//? styling
import './AddProduct.scss';
//? interfaces
import { ProductInterface } from '../../../../core/Interfaces';
//? state
import { productsAtom } from '../../../../core/Atoms';
//? fetch data
import { addProduct as fetchAddProduct } from '../../../../core/ServerRequests';


const AddProduct = () => {
    //? STATE
    const [products, setProducts] = useRecoilState<ProductInterface[]>(productsAtom);
    const [productName, setProductName] = useState<string>("");
    const [error, setError] = useState<string>("");

    //? FUNCTIONS
    const addProduct = async (e: any) => {
        e.preventDefault();
        setError("");

        const _productName = productName.trim();
        const newProducts: ProductInterface[] = await fetchAddProduct({ name: _productName });
        if (newProducts.length > 0) {
            setProducts(newProducts);
            setProductName("");
            return;
        }
        setError("Product already exist");
    };

    //? RENDER
    return (
        <div className="addProduct">
            <h4>Add new product</h4>
            <form onSubmit={addProduct}>
                <input required={true} type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <button>ADD</button>
                <span className="error">{error}</span>
            </form>
        </div>
    );
}
export default React.memo(AddProduct);