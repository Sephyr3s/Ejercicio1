export const getTotalItems = (carro) => {
    return carro.reduce((total, product) => total + product.quantity, 0);
}

export const getTotalPagar = (carro) => {
    return carro.reduce((total, product) => total + product.price * product.quantity, 0);
}

export function appReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case "ADD_PRODUCT":
            let product = {...action.payload.product, id: state.products.length+1 }
            console.log(product)
            return {
                ...state, products: [ ...state.products, product ]
            }
        
        case "DELETE_PRODUCT":
            return {
                ...state, products: state.products.filter(p => p.id !== action.payload.productId)
            }
        
        case "CHANGE_NAME":
            return {...state, productName: action.payload.productName}

        case "CHANGE_PRICE":
            return {...state, price: action.payload.price}
        
        case "SET_PRODUCT_EDIT":
            return {...state, productEdit: action.payload.product}

        case "UPDATE_PRODUCT":
            let indiceElemento = state.products.findIndex(p => p.id === state.productEdit.id)
            let products = [...state.products]
            products[indiceElemento] = { id: state.productEdit.id, name: state.productName, image: state.image, price: state.price}
            console.log(products)
            return { ...state, products: products }
        
        case "ADD_PRODUCT_TO_CARRO":
            if (!state.carro.find(item => item.id === action.payload.product.id)) {
                state.carro.push({
                    ...action.payload.product, quantity: 1
                });
            }
            return { 
                ...state, 
                carro: [ ...state.carro ],
                totalPagar: getTotalPagar(state.carro),
                totalItems: getTotalItems(state.carro)
            }
        
        case "DELETE_PRODUCT_TO_CARRO":
            let partialState = state.carro.filter(item => item.id !== action.payload.productId)
            return { 
                ...state,
                carro: [ ...state.carro.filter(item => item.id !== action.payload.productId) ],
                totalPagar: getTotalPagar(partialState),
                totalItems: getTotalItems(partialState)
            }
        
        case "UPDATE_QUANTITY_PRODUCT_IN_CARRO":
            if (action.payload.operacion === "incrementar") {
                let partialState = {
                    ...state,
                    carro: state.carro.map(item => {
                        if (item.id === action.payload.productId) {
                            return {...item, quantity: item.quantity + 1}
                        }
                        else {
                            return item
                        }
                    })
                }
                return { 
                    ...partialState,
                    totalPagar: getTotalPagar(partialState.carro),
                    totalItems: getTotalItems(partialState.carro)
                }
            }
            if (action.payload.operacion === "decrementar") {
                let partialState = {
                    ...state,
                    carro: state.carro.map(item => {
                        if (item.id === action.payload.productId) {
                            return {...item, quantity: item.quantity - 1}
                        }
                        else {
                            return item
                        }
                    })
                }           
                return { 
                    ...partialState,
                    totalPagar: getTotalPagar(partialState.carro),
                    totalItems: getTotalItems(partialState.carro)
                }
        
            }
            break

        default:
            return state
    }

}