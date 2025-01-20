import React from "react";
import introducao from "../../assets/img/fotos/introducao.jpg";
import NavBar from "../../components/NavBar/NavBar";
import "./inicial.css";
import Magic from "../../assets/img/bicicletas/magic-home.jpg";
import Nimbus from "../../assets/img/bicicletas/nimbus-home.jpg";
import Nebula from "../../assets/img/bicicletas/nebula-home.jpg";

function Inicial() {
  return (
    <>
      <NavBar />
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
            <a className="Button" href="./bicicletas">
              Escolha a sua
            </a>
          </div>
          <div>
            <img src={introducao} alt="Bicicleta elétrica preta." />
          </div>
        </div>
      </main>

      <article className="bicicletas-lista">
        <h2 className="font-1-xxl">
          escolha a sua <span className="cor-p1">.</span>
        </h2>

        <ul>
          <li>
            <a href="./bicicletas/magic">
              <img src={Magic} alt="Bicicleta preta" />
              <h3 className="font-1-xl">Magic Might</h3>
              <span className="font-2-m cor-8">R$ 2499</span>
            </a>
          </li>
          <li>
            <a href="./bicicletas/magic">
              <img src={Nimbus} alt="Bicicleta preta" />
              <h3 className="font-1-xl">Nimbus Stark</h3>
              <span className="font-2-m cor-8">R$ 4999</span>
            </a>
          </li>
          <li>
            <a href="./bicicletas/magic">
              <img src={Nebula} alt="Bicicleta preta" />
              <h3 className="font-1-xl">Nebula Cosmic</h3>
              <span className="font-2-m cor-8">R$ 3999</span>
            </a>
          </li>
        </ul>
      </article>
    </>
  );
}

export default Inicial;
