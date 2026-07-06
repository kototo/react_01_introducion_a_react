// Navbar.jsx contiene el menú de navegación de la pizzería.
// El desafío solicita usar las variables total y token dentro del componente.

// Importamos React para que JSX pueda ser interpretado correctamente.
import React from "react";

import { formatoMoneda } from '../utils/formatoMoneda.js';

const Navbar = () => {
  // Total fijo solicitado para simular el monto del carrito.
  const total = 25000;

  // Token falso para simular que el usuario NO está logueado.
  // Cambia a true para probar los botones Profile y Logout.
  const token = false;


  return (
    <nav className="navbar-mamma">
      <div className="navbar-brand-area">
        <span className="navbar-title">Pizzería Mamma Mía!</span>
      </div>

      <div className="navbar-actions">
        {/* Home siempre se muestra */}
        <button className="btn btn-outline-light btn-sm" type="button">
          <i className="fa-solid fa-pizza-slice me-1"></i>
          Home
        </button>

        {/* Si token es true, se muestran Profile y Logout */}
        {token ? (
            <>
                <button className="btn btn-outline-light btn-sm" type="button">
                    <i className="fa-solid fa-unlock me-1"></i>
                    Profile
                </button>

                <button className="btn btn-outline-light btn-sm" type="button">
                    <i className="fa-solid fa-lock me-1"></i>
                    Logout
                </button>
            </>
        ) : (
            <>
                {/* Si token es false, se muestran Login y Register */}
                <button className="btn btn-outline-light btn-sm" type="button">
                    <i className="fa-solid fa-lock me-1"></i>
                    Login
                </button>

                <button className="btn btn-outline-light btn-sm" type="button">
                    <i className="fa-solid fa-user-plus me-1"></i>
                    Register
                </button>
            </>
        )}

        {/* Total siempre se muestra */}
        <button className="btn btn-outline-info btn-sm" type="button">
          <i className="fa-solid fa-cart-shopping me-1"></i>
          Total: ${formatoMoneda(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
