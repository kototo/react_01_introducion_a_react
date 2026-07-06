// App.jsx es el componente principal.
// Según el requerimiento del desafío, aquí se muestran Navbar, Home y Footer.

// Importamos React para que JSX pueda ser interpretado correctamente.
import React from "react";

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-container">
      {/* Menú de navegación superior */}
      <Navbar />

      {/* Contenido principal de la página */}
      <Home />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
