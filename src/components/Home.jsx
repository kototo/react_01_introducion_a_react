// Home.jsx contiene el Header y las tarjetas de pizzas.
// El desafío solicita llamar a tres componentes CardPizza desde este archivo.

// Importamos React para que JSX pueda ser interpretado correctamente.
import React from "react";

import Header from './Header.jsx';
import CardPizza from './CardPizza.jsx';

// Importamos las imágenes desde la carpeta assets/img.
import pizzaNapolitana from "../assets/img/pizza_napolitana.jpeg";
import pizzaEspanola from "../assets/img/pizza_espanola.jpeg";
import pizzaPeperoni from "../assets/img/pizza_peperoni.jpg";

const Home = () => {
  return (
    <main className="main-content">
      {/* Header solicitado por el desafío */}
      <Header />

      <section className="container pizza-section">
        <div className="cards-container">
          <CardPizza
            name="Napolitana"
            price={5950}
            ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
            img={pizzaNapolitana}
          />

          <CardPizza
            name="Española"
            price={6950}
            ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
            img={pizzaEspanola}
          />

          <CardPizza
            name="Pepperoni"
            price={6950}
            ingredients={["mozzarella", "pepperoni", "orégano"]}
            img={pizzaPeperoni}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
