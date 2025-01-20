import React from "react";
import introducao from "../../assets/img/fotos/introducao.jpg";
import NavBar from "../../components/NavBar/NavBar";
import "./inicial.css";
import Magic from "../../assets/img/bicicletas/magic-home.jpg";
import Nimbus from "../../assets/img/bicicletas/nimbus-home.jpg";
import Nebula from "../../assets/img/bicicletas/nebula-home.jpg";
import Tecnologia from "../../assets/img/fotos/tecnologia.jpg";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";

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

      <article className="tecnologia-bg">
        <div className="tecnologia-container">
          <div className="tecnologia-conteudo">
            <span className="font-2-l-b cor-5">Tecnologia Avançada</span>
            <h2 className="font-1-xxl cor-0">
              você escolhe as suas cores e componentes
              <span className="cor-p1">.</span>
            </h2>
            <p className="font-2-l cor-5">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <a className="linkzin" href="./bicicletas">
              Escolha um modelo
            </a>
            <div className="tecnologia-vantagens">
              <div>
                <img src={Eletrica} alt="" />
                <h3 className="font-1-m cor-0">Motor Elétrico</h3>
                <p className="font-2-s cor-5">
                  Toda Bikcraft é equipada com um motor elétrico que possui
                  duração de até 120h. A bateria é recarregada com a sua energia
                  gasta ao pedalar.
                </p>
              </div>

              <div>
                <img src={Rastreador} alt="" />
                <h3 className="font-1-m cor-0">Rastreador</h3>
                <p className="font-2-s cor-5">
                  Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                  rastreadores e sistemas anti-furto para garantir o seu
                  sossego.
                </p>
              </div>
            </div>
          </div>

          <div className="tecnologia-imagem">
            <img src={Tecnologia} alt="" />
          </div>
        </div>
      </article>
    </>
  );
}

export default Inicial;
