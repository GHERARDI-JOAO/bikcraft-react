import React from "react";
import { Link } from "react-router-dom";
import bikcraft from "../../assets/img/bikcraft.svg";
import introducao from "../../assets/img/fotos/introducao.jpg";
import "./inicial.css";

function Inicial() {
  return (
    <>
      <header className="header-bg">
        <div className="header">
          <img src={bikcraft} alt="Bikcraft" />
          <nav aria-label="primaria">
            <ul className="header-menu">
              <li>
                <Link to="/bicicletas">Bicicletas</Link>
              </li>
              <li>
                <Link to="/seguros">Seguros</Link>
              </li>
              <li>
                <Link to="/contato">Contatos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="introducao-bg">
        <div className="introducao">
          <div className="introducao-conteudo">
            <h1>
              Bicicletas feitas sob medida<span>.</span>
            </h1>
            <p>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para você. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <a href="./bicicletas">Escolha a sua</a>
          </div>
          <div>
            <img src={introducao} alt="Bicicleta elétrica preta." />
          </div>
        </div>
      </main>
    </>
  );
}

export default Inicial;
