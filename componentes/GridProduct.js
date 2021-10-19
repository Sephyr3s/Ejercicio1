import react from 'react';
import React from 'react'
import Productitem from './Productitem'

class Gridproduct extends react.Component{
    constructor(props){
        super(props)
        this.state={items:[
            {id:'1',nombre:'Buffalo-Striploin',precio:'39.11'},
            {id:'2',nombre:'Bacardi Breezer-tropical ',precio:'257.92'},
            {id:'3',nombre:'Wine- Gato Negro Cabernet',precio:'51.01'},
            {id:'4',nombre:'Cabbage-Nappa',precio:'250.90'},
            {id:'5',nombre:'Sping Loaded Cup Dispenser',precio:'175.85'},
            {id:'6',nombre:'Bread-Malt',precio:'82.61'},
            {id:'7',nombre:'Glass Clear 8 Oz',precio:'201.10'},
            {id:'8',nombre:'Sour Puss Raspberry',precio:'134.99'},
            {id:'9',nombre:'Pork-Chop Frenched',precio:'199.16'} 
        ]};
    }
    render(){
        const products = this.state.products;
        return(
            <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row-md-4 ">
            { products.items.map(c=>(
                    <div className="col-md-4" key={products.items.id}>
                    < Productitem items={c}/>
                    </div>
                ))
            }  
            </div>
        </div>
        );
    }
    
}
export default Gridproduct