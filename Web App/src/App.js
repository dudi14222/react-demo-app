import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home/';
import About from './pages/About/';
import Products from './pages/Products/';
import ProductPage from './pages/ProductPage/';
import CartPage from './pages/CartPage/';
import LogInPage from './pages/LogInPage/';
import Contact from './pages/Contact/';
import OrderComplete from './pages/OrderComplete/';
import MyOrderPage from './pages/MyOrderPage/';
import authService from './services/authenticationService';


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'

let authServiceCheckIsLogedIn = function() {
    console.log('isLogedIn: ' + authService.isLogedIn());
    return authService.isLogedIn();
}

const authProvider = (WrappedComponent, isLogedIn) => {  
  return ({ match }) => (    
    authServiceCheckIsLogedIn() ? 
      <WrappedComponent {...this.props } match={match}/> : 
      <Redirect to="login" />
  )
}

class App extends Component {
  render() {   
    return (
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route render={({ match }) => <About />} path="/about" />
          <Route component={ProductPage} path="/products/:id" />
          <Route component={Contact} path="/contact" />                   
          <Route component={Products} path="/products" />
          <Route component={OrderComplete} path="/order-complete" />
          <Route component={authProvider(CartPage, true)} path="/cart" />
          <Route component={withRouter(authProvider(MyOrderPage, true))} path="/my-order" /> 
          {/* <Route component={MyOrderPage} path="/my-order" /> */}
          <Route component={LogInPage} path="/login" />
        </Switch>
      </Router>
    );
  }
}

export default App;