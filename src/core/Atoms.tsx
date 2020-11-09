import { atom } from 'recoil';
import { ItemInterface, ProductInterface } from './Interfaces';

export const itemsAtom = atom<ItemInterface[]>({
    key: "items",
    default: []
});

export const productsAtom = atom<ProductInterface[]>({
    key: "products",
    default: []
});