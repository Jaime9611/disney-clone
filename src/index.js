import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { MoviesContextProvider } from './context/store';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesContextProvider>
        <App />
      </MoviesContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
