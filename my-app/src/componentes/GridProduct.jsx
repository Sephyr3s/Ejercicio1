import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from '../context/GlobalContext';
import Productitem from "./Productitem";

const GridProduct=()=>{
    const [busqueda, setBusqueda] = useState(false)
    const [match, setMatch] = useState("")
    const { products, productsFilter, updateProductList } = useContext(GlobalContext)
    const [ProductosListar, setProductsToList] = useState([])
  
    const handleChange = e => {
      setMatch(e.target.value)
      updateProductList(e.target.value)
      setBusqueda(e.target.value !== "")
    }
  
    useEffect(() => {
      setProductsToList(productsFilter)      
    }, [products, productsFilter])
    
    useEffect(() => {
      setProductsToList(products)      
    }, [])
  
    function ResultadoBusqueda() {
      console.log(busqueda);
      if (busqueda && productsFilter.length === 0) {
        return <p className="pt-3">Resultados busqueda: {productsFilter.length} </p>;
      }
      else if (busqueda && productsFilter.length !== 0) {
        return <p className="pt-3">Resultados busqueda: {productsFilter.length} </p>;
  
      }
      else {
        return <p className="pt-3">{products.length} productos disponibles </p>;
      }
    }
  
        return(
            <div className="container -fluid"> 
                <div className="row justify-content-between px-3">
                    <div className="col-md-4">
                        {ResultadoBusqueda()}
                    </div>
                    <div className="col-md-4">
                    <p className="pt-3">{products.length} Products</p>
                    </div>
                    <div className="col-md-4 ">
                    <form className="">
                <input
                className="form-control me-sm-2" type="text" placeholder="Search" onChange={handleChange} value={match}
                />
                 </form>
                    </div>
             </div>
                    <div className="container d-flex justify-content-center align-items-center h-100">
                            <div className="row  ">     
                            {
                                ProductosListar.map((c,i)=>(
                                    <div   key={i} className="col-md-4">
                                    <Productitem functionalButtons={true} product={c}/>
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>
        )
    }
export default GridProduct