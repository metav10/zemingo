//? remote components
import React from 'react';
import { useRecoilState } from 'recoil';
//? styling
import './Item.scss';
//? interfaces
import { ItemInterface } from '../../../../core/Interfaces';
//? state
import { itemsAtom } from '../../../../core/Atoms';
//? fetch data
import { addItem as fetchAddItem } from '../../../../core/ServerRequests';


interface Props extends ItemInterface {
    index: number;
}

const Item = (props: Props) => {
    //? STATE
    const [items, setItems] = useRecoilState<ItemInterface[]>(itemsAtom);

    //? FUNCTOIONS
    const editItem = async () => {
        const newQuantity = prompt("Please enter new quantity", props.quantity.toString());
        if (newQuantity === null) {
            return;
        }

        const item = {
            name: props.name,
            quantity: parseInt(newQuantity)
        }
        const tempItems = [...items];
        tempItems[props.index] = item;
        const newItem: ItemInterface[] = await fetchAddItem(tempItems);

        if (newItem.length === 0) {
            return;
        }
        setItems(newItem);
    }

    //? RENDER
    return (
        <div className="item" onClick={editItem}>
            <span className="item-name">{props.name}</span>
            <span className="item-quantity">{props.quantity} units</span>
        </div>
    );
}
export default React.memo(Item);