import React from 'react';
import './App.css';
import GridProduct from './componentes/GridProduct';
import Header from './componentes/Header';
import {BrowserRouter as Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Cart from './pages/Cart';
import Store from './pages/Store';

function App() {
  return (   
    <Route>
    <div className="Container">
      <Header/>
      <Switch>
        <Route exact path= "/" component={Store}/>
        <Route exact path= "/Cart" component={Cart}/>
        <Route exact path= "/About" component={About}/>
        </Switch>
      <GridProduct/>
    </div>
    </Route>
  );
}

export default App;