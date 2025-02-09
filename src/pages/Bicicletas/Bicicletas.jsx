import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "../../components/pageTransition/PageTransition";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Bicicletas.css";
import Nimbus from "../../assets/img/bicicletas/nimbus.jpg";
import Magic from "../../assets/img/bicicletas/magic.jpg";
import Nebula from "../../assets/img/bicicletas/nebula.jpg";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Carbono from "../../assets/img/icones/carbono.svg";
import Velocidade from "../../assets/img/icones/velocidade.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";

function Bicicletas() {
  return (
    <PageTransition>
      <>
        <NavBar />
        <main className="">
          <div className="titulo-bg">
            <div className="titulo-container">
              <p className="font-2-l-b cor-5">Escolha a melhor pra você</p>
              <h1 className="font-1-xxl cor-0">
                Nossas Bicicletas <span className="cor-p1">.</span>
              </h1>
            </div>
          </div>

          <div className="bicicletas-container">
            <div className="bicicletas-imagem">
              <img src={Nimbus} alt="Bicicleta Preta" />
              <span className="font-2-n cor-0">r$4999</span>
            </div>
            <div className="bicicletas-conteudo">
              <h2 className="font-1-xl">Nimbus Stark</h2>
              <p className="font-2-s cor-8">
                A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
                Ela vem equipada com os melhores acessórios, o que garante maior
                velocidade
              </p>
              <ul font-1-m cor-8>
                <li>
                  <img src={Eletrica} alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src={Carbono} alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src={Velocidade} alt="" />
                  50 km/h
                </li>
                <li>
                  <img src={Rastreador} alt="" />
                  Rastreador
                </li>
              </ul>
              <Link className="Button seta" to="/nimbus">
                MAIS SOBRE
              </Link>
            </div>
          </div>

          <div className="bicicletas-bg">
            <div className="bicicletas-container">
              <div className="bicicletas-imagem">
                <img src={Magic} alt="Bicicleta Preta" />
                <span className="font-2-n cor-0">r$2499</span>
              </div>
              <div className="bicicletas-conteudo">
                <h2 className="font-1-xl cor-0">Magic Might</h2>
                <p className="font-2-s cor-5">
                  A Magic Might é a melhor Bikcraft já criada pela nossa equipe.
                  Ela vem equipada com os melhores acessórios, o que garante
                  maior velocidade
                </p>
                <ul className="font-1-m cor-5">
                  <li>
                    <img src={Eletrica} alt="" />
                    Motor Elétrico
                  </li>
                  <li>
                    <img src={Carbono} alt="" />
                    Fibra de Carbono
                  </li>
                  <li>
                    <img src={Velocidade} alt="" />
                    45 km/h
                  </li>
                  <li>
                    <img src={Rastreador} alt="" />
                    Rastreador
                  </li>
                </ul>
                <Link className="Button seta" to="/magic">
                  MAIS SOBRE
                </Link>
              </div>
            </div>
          </div>

          <div className="bicicletas-container">
            <div className="bicicletas-imagem">
              <img src={Nebula} alt="Bicicleta Preta" />
              <span className="font-2-n cor-0">r$3999</span>
            </div>
            <div className="bicicletas-conteudo">
              <h2 className="font-1-xl">Nebula Cosmic</h2>
              <p className="font-2-s cor-8">
                A Nebula é a melhor Bikcraft já criada pela nossa equipe. Ela
                vem equipada com os melhores acessórios, o que garante maior
                velocidade
              </p>
              <ul font-1-m cor-8>
                <li>
                  <img src={Eletrica} alt="" />
                  Motor Elétrico
                </li>
                <li>
                  <img src={Carbono} alt="" />
                  Fibra de Carbono
                </li>
                <li>
                  <img src={Velocidade} alt="" />
                  50 km/h
                </li>
                <li>
                  <img src={Rastreador} alt="" />
                  Rastreador
                </li>
              </ul>
              <Link className="Button seta" to="/nebula">
                MAIS SOBRE
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    </PageTransition>
  );
}

export default Bicicletas;
