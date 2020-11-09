//? remote components
import React from 'react';
import { NavLink } from 'react-router-dom';
//? local components

//? styling
import './Header.scss';
//? interfaces


const Header = () => {
   
   //? RENDER
   return (
       <div className="header">
           <NavLink to="/inventory" activeClassName="link-active" className="link">My Inventory</NavLink>
           <NavLink to="/products" activeClassName="link-active" className="link">Products</NavLink>
       </div>
       );
}
export default React.memo(Header);