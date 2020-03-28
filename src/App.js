import React from 'react';
import  { Component } from 'react';

import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import { render } from '@testing-library/react';

class App extends Component {
  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
    
  );
}
}

export default App;
