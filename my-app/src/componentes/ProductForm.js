import React,{useState} from "react";




export default function ItemForm(props){

    const estadoIncialForm = {
        nombre:'',
        precio:''
    };

    const [estadoForm, cambiarEstadoForm] = useState(estadoIncialForm);

    const gestionarCamposForm = event => {
        const {name,value} = event.target;
        cambiarEstadoForm({...estadoForm,[name]:value});
    }

    const onSubmitForm = ev =>{
        ev.preventDefault();
        console.log(estadoForm);
        props.agregar(estadoForm);

        cambiarEstadoForm(estadoIncialForm);

    }

    return (
        <form onSubmit={onSubmitForm}>
           <div className="mb-3">
                <label htmlFor="ProductName" className="form-label">Nombre del producto</label>
                <input type="text" name="nombre" className="form-control" id="ProductName" value={estadoForm.nombre} onChange={gestionarCamposForm}/>
            </div>

            <div className="mb-3">
                <label htmlFor="Precio" className="form-label">precio</label>
                <input type="text" name="precio" className="form-control" id="Precio" value={estadoForm.precio}  onChange={gestionarCamposForm}/>
            </div>
            
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Agregar Producto</button>
            </div>
        </form>
    );
}