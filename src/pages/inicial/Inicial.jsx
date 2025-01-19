import React from "react";
import introducao from "../../assets/img/fotos/introducao.jpg";
import NavBar from "../../components/NavBar/NavBar";
import "./inicial.css";

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
    </>
  );
}

export default Inicial;
