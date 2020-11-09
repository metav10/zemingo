//? remote components
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilState } from 'recoil';
//? local components
import Header from './core/components/Header/Header';
import Inventory from './pages/Inventory';
import Products from './pages/Products';
//? styling
import './styles/_global.scss';
//? interfaces
import { ItemInterface, ProductInterface } from './core/Interfaces';
//? state
import { itemsAtom, productsAtom } from './core/Atoms';
//? fetch data
import { getItems, getProducts } from './core/ServerRequests';


const App = () => {
    //? STATE
    const [products, setProducts] = useRecoilState<ProductInterface[]>(productsAtom);
    const [items, setItems] = useRecoilState<ItemInterface[]>(itemsAtom);

    useEffect(() => {
        asyncFetchItems();
        asyncFetchProducts();
    }, []);


    //? FUNCTIONS
    const asyncFetchItems = async () => {
        //? get inventory items
        const fetchItems: ItemInterface[] = await getItems();
        if (fetchItems.length > 0) {
            setItems(fetchItems);
        }
    };

    const asyncFetchProducts = async () => {
        //? get products
        const fetchProducts: ProductInterface[] = await getProducts();
        if (fetchProducts.length > 0) {
            setProducts(fetchProducts);
        }
    };

    //? RENDER
    return (
        <>
            <Header />
            <div id="content">
                <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/inventory">
                        <Inventory />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/inventory" /> :
                    </Route>
                </Switch>
            </div>
        </>
    );
}
export default App;