import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';

import About from './Pages/About';
import Cart from './Pages/Cart';
import Store from './Pages/Store';
import AddProduct from './Pages/addProducts';
import vistaProductos from './Pages/vistaProductos';

import 'bootstrap/dist/css/bootstrap.css';
import { ContextProvider } from './context/GlobalContext'
import NotFound from './Pages/NotFound';


function App() {
  return (   
    <ContextProvider>
    <Router>
    <div class="p-4 p-md-12 text-white rounded bg-dark   text-center">
                    <div class="col-md-12 px-0">
                    <h1 class="display-5 fst-italic">Store</h1>
                    </div>
           </div>
           <Switch>
          <Redirect exact from="/" to="/products" />
          <Route path="/products" component={Store} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin/view-products" component={vistaProductos} />
          <Route path="/admin/add-product" component={AddProduct} />
          <Route component={NotFound} />
        </Switch>
    </Router>
  </ContextProvider>
 
  );
}
  
export default App;