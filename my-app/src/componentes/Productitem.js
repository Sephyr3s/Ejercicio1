import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
const Productitem = ({item}) => {  
    return (
       <div className="card">
     <div className="Container h-25 d-inline-block border">  </div>
        <div className="card-header">{item.nombre}</div>
            <div className="card-body">
            <h2 className="modal-title">$ {item.precio}</h2>
            <div className="modal-footer border-0"> 
            <ButtonGroup>
                    <button type="button" className="btn btn-Light border">Details</button>
                    <button type="button" class="btn btn-dark border">Add to card</button>
                </ButtonGroup>
            </div> 
            </div>
                
        </div>
        
      
                
            

    )
}
export default Productitem

