import React from 'react';
import './App.css';
import GridProduct from './componentes/GridProduct';
import Header from './componentes/Header';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Store from './Pages/Store';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (   
    <Route>
    <div className="Container -fluid">
      <Header/>
        <div class="p-4 p-md-12 text-white rounded bg-dark text-center">
          <div class="col-md-12 px-0">
            <h2 class="display-4 fst-italic">Store</h2>
          </div>
        </div>
      <Switch>
        <Route path="/" exact
         component={Store} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
      </Switch>
      
      <GridProduct/>

    </div>
    </Route>
  );
}

export default App;