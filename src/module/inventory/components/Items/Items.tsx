//? remote components
import React from 'react';
import { useRecoilState } from 'recoil';
//? local components
import ResetInventory from '../ResetInventory/ResetInventory';
import Item from '../Item/Item';
//? styling
import './Items.scss';
//? interfaces
import { ItemInterface } from '../../../../core/Interfaces';
//? state
import { itemsAtom } from '../../../../core/Atoms';


const Items = () => {
    //? STATE
    const [items, setItems] = useRecoilState<ItemInterface[]>(itemsAtom);

    //? RENDER
    return (
        <div className="items">
            <div className="items-header">
                <h4>My Items</h4>
                <ResetInventory />
            </div>
            <div className="items-content">
                {
                    items.map(({ name, quantity }, i) =>
                        <Item key={name} name={name} quantity={quantity} index={i} />
                    )
                }
            </div>
        </div>
    );
}
export default React.memo(Items);