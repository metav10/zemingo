//? remote components
import React from 'react';
//? local components
import InventoryView from '../module/inventory/inventory';

const Inventory = () => {

    return (
        <>
            <InventoryView />
        </>
    );
}
export default React.memo(Inventory);