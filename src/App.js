import React from 'react';
import  { Component } from 'react';
import Menu from "./components/MenuComponents";

import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
// import { render } from '@testing-library/react';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
    
  );
}
}

export default App;
