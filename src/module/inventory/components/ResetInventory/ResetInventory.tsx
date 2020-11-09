//? remote components
import React from 'react';
import { useRecoilState } from 'recoil';
//? styling
import './ResetInventory.scss';
//? interfaces
import { ItemInterface } from '../../../../core/Interfaces';
//? state
import { itemsAtom } from '../../../../core/Atoms';
//? fetch data
import { resetList as resetListFetch } from '../../../../core/ServerRequests';


const ResetInventory = () => {
    const [items, setItems] = useRecoilState<ItemInterface[]>(itemsAtom);

    const resetList = async () => {
        const reset: ItemInterface[] = await resetListFetch();
        setItems(reset);
    }

    //? RENDER
    return (
            <button className="resetInventory" onClick={resetList}>RESET</button>
    );
}
export default React.memo(ResetInventory);