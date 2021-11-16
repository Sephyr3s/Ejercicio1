import React, { useState, useEffect, useContext } from "react";

import { GlobalContext } from '../context/GlobalContext'

const Productitem = ({product, functionalButtons}) => {  
    
    const { carrito, addProductToCarrito, updateQuantityProductInCarrito } = useContext(GlobalContext)
    const [activeButtons, setActiveButtons] = useState("")

    useEffect(() => {
        functionalButtons ? setActiveButtons("button-enable") : setActiveButtons("button-disable")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const  wasAddedToCart = () => {
        return carrito.find(p => p.id === product.id) != null ? false : true
    }

    const handleClick = (e) => {
        if (e.target.name === "button-enable") {
            if (e.target.id === "add") {
                addProductToCarrito(product)
            }
            if (e.target.id === "increment") {
                updateQuantityProductInCarrito(product.id, "incrementar")
            }
        }
    }

    return (
       <div className="card">
         <div className="Container h-25 d-inline-block border">  </div>
            <div className="modal-header pb-0 border-0"> 
                 <p>{product.nombre || "Nombre"}</p> 
             </div>
            <div className="card-body">
                 <h2 className="modal-title">$ {product.precio || "0000"}</h2>
                <div className="modal-footer border-0"> 

               { wasAddedToCart() ? 
                <button style={{ border: '3px solid black'}}  onClick={handleClick} type="button" id="add" name={activeButtons} className="btn btn-secondary"> <img src="https://img.icons8.com/windows/32/000000/shopping-cart.png" alt="carrito" /> Add to car</button>
                :
                <button style={{ border: '3px dotted black'}} onClick={handleClick} type="button" id="increment" name={activeButtons} className="btn btn-secondary"> <img src="https://img.icons8.com/material-rounded/24/000000/add-shopping-cart.png" alt="carrito" /> Add more</button>
               }
               </div> 
            </div>
                
        </div>
    )
}
export default Productitem

