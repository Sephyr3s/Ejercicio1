import React from 'react';
import './App.css';
import Productitem from './componentes/Productitem';
import GridProduct from './componentes/GridProduct';
import Header from './componentes/Header';
import Cart from './pages/Cart';
import About from './pages/About';
import Store from './pages/Store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (   
    <div className Container>
      <Header/>
      <GridProduct/>
      <Productitem/>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/">
            <Store />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
