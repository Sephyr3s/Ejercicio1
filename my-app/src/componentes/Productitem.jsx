import ButtonGroup from 'react-bootstrap/ButtonGroup'
import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../context/GlobalContext'

const Productitem = ({product,functionalButtons}) => {  
    const { carrito, addProductToCarrito, updateQuantityProductInCarrito } = useContext(GlobalContext)
    const [activeButtons, setActiveButtons] = useState("")

    useEffect(() => {
        functionalButtons ? setActiveButtons("button-enable") : setActiveButtons("button-disable")
    }, [])
    
    const AddedToCart = () => {
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
        <div className="card-header">{product.nombre}</div>
            <div className="card-body">
            <h2 className="modal-title">$ {product.precio}</h2>
            <div className="modal-footer border-0"> 
           <ButtonGroup> 
               {AddedToCart() ? 
                <button type="button" class="btn btn-dark border"onClick={handleClick} id="add" name={activeButtons} >  Add to car</button>
                :
                <button type="button" className="btn btn-Light border"onClick={handleClick} id="increment" name={activeButtons} >  Add more </button>
                } 
                </ButtonGroup>
               </div> 
            </div>
                
        </div>
    )
}
export default Productitem

