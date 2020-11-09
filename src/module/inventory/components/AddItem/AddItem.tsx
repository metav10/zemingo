//? remote components
import React, { useState } from 'react';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';
//? styling
import './AddItem.scss';
//? interfaces
import { ItemInterface, ProductInterface } from '../../../../core/Interfaces';
//? state
import { itemsAtom, productsAtom } from '../../../../core/Atoms';
//? fetch data
import { addItem as fetchAddItem } from '../../../../core/ServerRequests';


const AddItem = () => {
    //? STATE
    const [products, setProducts] = useRecoilState<ProductInterface[]>(productsAtom);
    const [items, setItems] = useRecoilState<ItemInterface[]>(itemsAtom);
    const [selectedProducts, setSelectedProducts] = useState<string>("");
    const [quantity, setQuantity] = useState<string>("");
    const [error, setError] = useState<string>("");

    //? FUNCTIONS
    const addItem = async (e: any) => {
        e.preventDefault();
        setError("");

        if (quantity === undefined || quantity === null || selectedProducts === "") {
            setError("All fields must be filled");
            return;
        }
        if (items.findIndex((item) => item.name === selectedProducts) > -1) {
            setError("Product already exist on your inventory list");
            return;
        }

        const item = {
            name: selectedProducts,
            quantity: parseInt(quantity),
        }
        const tempItems = [...items];
        tempItems.push(item);
        const newItem: ItemInterface[] = await fetchAddItem(tempItems);

        setSelectedProducts("");
        setQuantity("");
        if (newItem.length === 0) {
            setError("Error has been occurred, please try again later")
            return;
        }

        setItems(newItem);
    };

    //? RENDER
    return (
        <div className="addItem">
            <h4>Add an item to inventory</h4>
            <form onSubmit={addItem}>
                <select required={true} className={classnames({ "placeholder": selectedProducts === "" })} value={selectedProducts} onChange={(e) => setSelectedProducts(e.target.value)}>
                    <option value="">Select Product</option>
                    {
                        products.map(({ name }) =>
                            <option key={name} value={name}>{name}</option>
                        )
                    }
                </select>
                <input required={true} type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                <button>ADD</button>
                <span className="error">{error}</span>
            </form>
        </div>
    );
}
export default React.memo(AddItem);