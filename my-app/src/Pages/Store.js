import React from 'react'
import GridProduct from '../componentes/GridProduct';
import Header from '../componentes/Header';

const Store=()=>{
    return(
        
        <>
            <Header />
            <div className="row text-center pt-5">
                <h1 style={{fontSize: 45}}>STORE</h1>
                <p style={{fontSize: 20}} >This is the Store Page</p>
            </div>
            <GridProduct />
        </>
          
    );
}

export default Store