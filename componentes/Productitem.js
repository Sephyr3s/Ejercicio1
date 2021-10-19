import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'



class Productitem extends React.Component{
    constructor(props){
     super(props);
    }

    render(){

        return(

            <div className="card">

                <div className="Container h-25 d-inline-block border " >
                </div>
                <div className="card-body">
                    <h4 className="card-title">{this.props.items.nombre}</h4>
                    <p>${this.props.items.precio}</p>
                    <ButtonGroup>            
                    <button type="button" class="btn btn-default">Details</button>           
                    <button type="button" class="btn btn-default">Add to cart</button>            
                    </ButtonGroup>  
                </div>
            </div>
        );
    }
}

export default Productitem
