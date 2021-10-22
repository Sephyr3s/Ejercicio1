import React from 'react';
import Productitem from './Productitem';


const GridProduct=()=>{
       const items=[
            {id: 1, nombre: "Buffalo - Striploin",precio: 39.11 },
            {id: 2,nombre: "Bacardi Breezer - Tropical",precio: 257.92},
            {id: 3,nombre: "Wine - Gato negro Cabernet",precio: 51.01},  
            {id: 4,nombre: "Cabbage - Nappa", precio: 250.90},
            {id: 5,nombre: "Sping Loaded Cup Dispenser",   precio: 175.85},
            {id: 6,nombre: "Bread - Malt",  precio: 82.61},
            {id: 7,nombre: "Glass Clear 8 Oz", precio: 201.10},
            {id: 8,nombre: "Sour Puss Raspberry", precio: 134.99},
            {id: 9,nombre: "Pork - Chop, Frenched", precio: 199.16}
        ]
        return(
            <div className="container -fluid"> 
            <div className="row justify-content-between px-3">
                <div className="col -md-offset-4">
                 <p className="pt-5">10 Products</p> 
                </div>
                <div className="col-md-4 ">
                    <form className="">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    </form>
                </div>
            </div>
                <div className="container d-flex justify-content-center align-items-center h-100">
                        <div className="row  ">     
                        {
                            items.map(c=>(
                                <div className="col-md-4" key={c.id}>
                                <Productitem item={c}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
export default GridProduct