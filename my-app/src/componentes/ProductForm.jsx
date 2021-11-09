import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ProductForm = ({ type }) => {

  const { addProduct, changePrice, changeProductName, price, productName } = useContext(GlobalContext);

  const handleChange = (e) => {
    if (e.target.name === "productName") {
        changeProductName(e.target.value)
    }
    if (e.target.name === "price") {
        changePrice(parseInt(e.target.value))
    }
  };

  const handleClick = (e) => {
    addProduct({ nombre: productName, precio: price });
    changeProductName("Nombre")
    changePrice(0)
    toast.info('Ha agredado un producto al carrito', {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
  };

  return (
    <form className="m-2">
      <div className="form-group mb-3">
        <label htmlFor="productName">Nombre</label>
        <input onChange={handleChange} type="text" className="form-control" id="productName"  name="productName" placeholder="Product name" 
        value={productName}
        />
     
      </div>
      <div className="form-group mb-3">
        <label htmlFor="price">Precio</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input onChange={handleChange} id="price" name="price" type="number" className="form-control" value={price}/>
        </div>
      </div>

      {type === "crear" && <Link to="/vistaProductos">
        <button onClick={handleClick} className="btn btn-info mb-3" style={{ width: "100%" }}> Añadir producto </button>
      </Link>}
    </form>
  );
};

export default ProductForm;