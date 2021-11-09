import React, { useContext, useEffect, useState } from "react";
import ProductForm from "../componentes/ProductForm";
import Productitem from "../componentes/Productitem";
import { GlobalContext } from "../context/GlobalContext";
import HeaderTest from "../componentes/headerTest";

const AddProduct = () => {
  const { changeProductName, changePrice, price, productName,  } = useContext(GlobalContext);
  
  const [product, setProduct] = useState({name: "", price: 0 })
  useEffect(() => {

    setProduct({...product, ["name"]: productName})
  }, [productName])
  useEffect(() => {
    setProduct({...product, ["price"]: price})

  }, [price])

  useEffect(() => {
    changeProductName("")
    changePrice(0)
  }, [])

  return (
    <>
      <HeaderTest />
      <div className="row text-center py-5 w-100" style={{ marginTop: '1.5rem' }}>
        <h1 style={{ fontSize: 35 }}>Add product</h1>
        <p style={{ fontSize: 20 }}>
          Complete el formulario para agregar un nuevo producto
        </p>
      </div>
      <div className="row d-flex w-100 justify-content-around">
        <div className="col-md-4 mt-5">
          <ProductForm type={"crear"} />
        </div>
        <div className="col-md-4">
          <Productitem functionalButtons={false} product={product} />
        </div>
      </div>
    </>
  );
};

export default AddProduct;