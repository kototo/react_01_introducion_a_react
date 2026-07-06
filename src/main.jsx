// Archivo principal de React.
// Aquí se cargan React, Bootstrap, Font Awesome y los estilos propios del proyecto.

import React from 'react';
import ReactDOM from 'react-dom/client';

// Estilos de Bootstrap para usar botones, cards, containers, etc.
import 'bootstrap/dist/css/bootstrap.min.css';

// Estilos de Font Awesome para usar iconos con clases como fa-solid fa-cart-shopping.
import '@fortawesome/fontawesome-free/css/all.min.css';

// Estilos personalizados del desafío.
import './assets/css/styles.css';

// Componente principal de la aplicación.
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
