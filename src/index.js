import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './App.scss'
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //   BrowserRouter -  только для хостинга - для локального просммотра - нет
  <HashRouter>
    <App />
  </HashRouter>


 
 );

 