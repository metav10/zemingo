//? remote components
import React from 'react';
//? local components
import AddItem from './components/AddItem/AddItem';
import Items from './components/Items/Items';


const InventoryView = () => {

    //? RENDER
    return (
        <div className="inventory">
            <h1>My Inventory</h1>
            <AddItem/>
            <Items/>
        </div>
    );
}
export default React.memo(InventoryView);