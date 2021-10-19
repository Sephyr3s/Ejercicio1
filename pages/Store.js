import React from 'react'
import GridProduct from './componentes./Gridproduct';


const Store=()=>{
    return(
        
        <h1>
        Store
            <h4>
            this is the Store Page
            </h4> 
            <div className = "row-md-4">
             <GridProduct/>
            </div>
                
            
        </h1>      
    );
}

export default Store