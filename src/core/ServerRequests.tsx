import { ProductInterface, ItemInterface } from "./Interfaces";

const URL = "http://34.238.153.187:8085";

//? get items
export const getItems = () => {
    return fetch(URL + '/inventory')
        .then(res => res.json())
        .then(res => res)
        .catch(e => new Error(e))
}

//? get products
export const getProducts = () => {
    return fetch(URL + '/product/all')
        .then(res => res.json())
        .then(res => res)
        .catch(e => new Error(e))
}

//? add product
export const addProduct = (product: ProductInterface) => {
    const body = JSON.stringify(product);
    return fetch(URL + '/product', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
        .then(res => res.json())
        .then(res => res)
        .catch(e => new Error(e))
}

//? add item
export const addItem = (items: ItemInterface[]) => {
    const body = JSON.stringify(items);
    return fetch(URL + '/inventory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    })
        .then(res => res.json())
        .then(res => res)
        .catch(e => new Error(e))
}

//? reset list
export const resetList = () => {
    return fetch(URL + '/inventory/reset', {
        method: 'POST',
    })
        .then(res => res.json())
        .then(res => res)
        .catch(e => new Error(e))
}