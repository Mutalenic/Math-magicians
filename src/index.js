import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
