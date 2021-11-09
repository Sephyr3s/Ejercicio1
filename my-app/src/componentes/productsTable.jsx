import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext"
import ModalEditar from './ModalEditar.jsx'

const ProductsTable = () => {
  const { products, deleteProduct, setProductEdit } = useContext(GlobalContext);

  return (
    <>
      <div className="container" style={{ padding: "0 5rem" }}>
        <div className="row py-3 d-flex justify-content-between">
          <div className="col-3 p-0">Hay {products.length} productos en inventario</div>
          <div className="col-3 p-0">
            <Link to="/admin/addProduc">
              <button type="button" class="btn btn-success"> Agregar  </button>
            </Link>
          </div>
        </div>
        <table class="table table-hover table-bordered table-sm w-100">
          <thead
            style={{
              background: "#161616",
              color: "white",
              border: "1px solid white",
            }}
          >
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <th scope="row">{p.id}</th>
                <td>{p.nombre || "Nombre"}</td>
                <td>$ {p.precio}</td>
                <td>
                  <button onClick={() => setProductEdit(p)} name="editar" data-toggle="modal" data-target="#myModal" type="button" className="btn btn-warning btn-sm m-1">
                    Edit
                  </button>
                  <button onClick={() => deleteProduct(p.id)} name="eliminar" type="button" className="btn btn-danger btn-sm m-1">
                    Producto eliminado con exito
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalEditar />
    </>
  );
};

export default ProductsTable;