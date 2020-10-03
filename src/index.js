import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//DOM renderiza no ./public/index.html na div com id root toda a página
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
