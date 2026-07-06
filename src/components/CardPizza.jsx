// CardPizza.jsx recibe información por props y la muestra en una tarjeta.
// Props usadas: name, price, ingredients e img.

// Importamos React para que JSX pueda ser interpretado correctamente.
import React from "react";

import { formatoMoneda } from '../utils/formatoMoneda.js';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <article className="card pizza-card">
      {/* Imagen de la pizza */}
      <img src={img} className="card-img-top pizza-img" alt={`Pizza ${name}`} />

      <div className="card-body pizza-card-body">
        {/* Nombre de la pizza */}
        <h2 className="pizza-title">Pizza {name}</h2>

        <hr />

        {/* Ingredientes */}
        <div className="ingredients-box">
          <p className="ingredients-title">Ingredientes:</p>

          <p className="ingredients-list">
            <i className="fa-solid fa-pizza-slice me-1"></i>
            {ingredients.join(', ')}
          </p>
        </div>

        <hr />

        {/* Precio formateado con separador de miles */}
        <p className="pizza-price">Precio: ${formatoMoneda(price)}</p>

        {/* Botones sin funcionalidad por ahora */}
        <div className="pizza-buttons">
          <button className="btn btn-outline-dark btn-sm" type="button">
            Ver más
            <i className="fa-regular fa-eye ms-1"></i>
          </button>

          <button className="btn btn-dark btn-sm" type="button">
            Añadir
            <i className="fa-solid fa-cart-shopping ms-1"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardPizza;
