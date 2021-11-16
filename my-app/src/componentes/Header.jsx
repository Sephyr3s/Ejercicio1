import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

const Header =() => {
  const { totalItems } = useContext(GlobalContext) 
  
    return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Store</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item">
           {totalItems !== 0 ? (<Link className="nav-link" to="/Cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart ({ totalItems })*</Link>)
           : (<Link className="nav-link" to="/Cart"> <img alt="carrito" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/> Cart ({ totalItems })</Link>)}          </li>
         
          <li className="nav-item">
           <Link className="nav-link" to="/Pages/vistaProductos">Administrar productos </Link>
          </li>
        </ul>
      );      
};
export default Header;