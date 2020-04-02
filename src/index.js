import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
