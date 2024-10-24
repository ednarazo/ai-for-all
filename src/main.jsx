// main.jsx
import React from 'react';  // Asegúrate de tener esta línea
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './index.css';  // Estilo opcional

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
