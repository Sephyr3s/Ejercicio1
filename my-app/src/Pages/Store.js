import React from 'react';
import Header from '../componentes/Header';
import Products from '../componentes/Products';

const Store = () => {
    return (
        <>  <Header />
            <div className="container">
                <div className="row text-center" style={{ paddingTop: '4rem' }} >
                 
                    <p style={{fontSize: 20}} >Catalogo de productos </p>
                </div>
                <Products />
            </div>
        </>
    )
}

export default Store;