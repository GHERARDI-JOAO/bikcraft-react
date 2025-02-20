import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../../components/pageTransition/PageTransition";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Nimbus1 from "../../assets/img/bicicleta/nimbus1.jpg";
import Nimbus2 from "../../assets/img/bicicleta/nimbus2.jpg";
import Nimbus3 from "../../assets/img/bicicleta/nimbus3.jpg";
import Entrega from "../../assets/img/icones/entrega.svg";
import Estoque from "../../assets/img/icones/estoque.svg";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Carbono from "../../assets/img/icones/carbono.svg";
import Velocidade from "../../assets/img/icones/velocidade.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";
import Nimbus from "../../assets/img/bicicletas/nimbus.jpg";
import Nebula from "../../assets/img/bicicletas/nebula.jpg";
import Seguro from "../../assets/img/fotos/seguros.jpg";
import "../Nimbus/Nimbus.css";

function Magic() {
  return (
    <PageTransition>
      <>
        <NavBar />
        <main className="titulo-bg">
          <div>
            <div className="titulo-container">
              <p className="maiusculaP font-2-xl cor-5">R$2499</p>
              <h1 className="font-1-xxl cor-0">
                Magic Might<span className="cor-p1">.</span>
              </h1>
            </div>
          </div>

          <div className="nimbus-container">
            <div className="nimbus-imagens">
              <img src={Nimbus2} alt="" />
              <img src={Nimbus3} alt="" />
              <img src={Nimbus1} alt="" />
            </div>

            <div className="nimbus-conteudo">
              <p className="font-2-l cor-5">
                A Magic Might é a melhor Bikcraft já criada pela nossa equipe.
                Ela vem equipada com os melhores acessórios, o que garante maior
                velocidade.
              </p>

              <div className="nimbus-comprar">
                <Link className="Button" to="/orcamento">
                  Comprar Agora
                </Link>
                <span className="font-1-xs cor-6">
                  {" "}
                  <img src={Entrega} alt="" />
                  Entrega em 5 dias
                </span>

                <span className="font-1-xs cor-6">
                  {" "}
                  <img src={Estoque} alt="" />
                  18 em estoque
                </span>
              </div>
              <h2 className="font-1-xs cor-0">Informações</h2>
              <ul className="nimbus-informacoes">
                <li>
                  {" "}
                  <img src={Eletrica} alt="" />
                  <h3 className="font-1-m cor-0">Motor Elétrico</h3>
                  <p className="font-2-xs cor-5">
                    Permite você viajar distâncias inimaginaveis com a sua bike.
                  </p>
                </li>
                s
                <li>
                  <img src={Velocidade} alt="" />
                  <h3 className="font-1-m cor-0">40 km/h</h3>
                  <p className="font-2-xs cor-5">
                    A mais rápida bicicleta elétrica disponível hoje no mercado.
                  </p>
                </li>
                <li>
                  <img src={Rastreador} alt="" />
                  <h3 className="font-1-m cor-0">Rastreador</h3>
                  <p className="font-2-xs cor-5">
                    Rastreador e sistema anti-furto para garantir o seu sossego.
                  </p>
                </li>
                <li>
                  <img src={Carbono} alt="" />
                  <h3 className="font-1-m cor-0">Fibra de Carbono</h3>
                  <p className="font-2-xs cor-5">
                    Maior proteção possível para a sua Bikcraft com fibra de
                    carbono.
                  </p>
                </li>
              </ul>
              <h2 className="font-1-xs cor-0">Ficha Técnica</h2>
              <ul className="nimbus-ficha font-2-s cor-4">
                <li>
                  Peso <span>9 kg</span>
                </li>
                <li>
                  Altura <span>60 cm</span>
                </li>
                <li>
                  Largura <span>120 cm</span>
                </li>
                <li>
                  Profundidade <span>10 cm</span>
                </li>
                <li>
                  Marchas <span>16</span>
                </li>
                <li>
                  Roda <span>29</span>
                </li>
              </ul>
            </div>
          </div>
        </main>

        <article className="nimbus-lista">
          <h2 className="font-1-xxl">
            escolha a sua <span className="cor-p1">.</span>
          </h2>

          <ul>
            <li>
              <Link to="/nimbus">
                <img src={Nimbus} alt="Bicicleta preta" />
                <h3 className="font-1-xl">Nimbus Stark</h3>
                <span className="font-2-m cor-8">R$ 4999</span>
              </Link>
            </li>
            <li>
              <Link to="nebula">
                <img src={Nebula} alt="Bicicleta preta" />
                <h3 className="font-1-xl">Nebula Cosmic</h3>
                <span className="font-2-m cor-8">R$ 3999</span>
              </Link>
            </li>
          </ul>
        </article>

        <article className="seguro-bg">
          <div className="seguro-container">
            <div className="seguro-imagem">
              <img src={Seguro} alt="pessoa parada em cima de uma bicicleta" />
            </div>
            <div className="seguro-conteudo">
              <h2 className="font-1-xxl cor-0">
                Pedale mais tranquilo com o nosso{" "}
                <span className="cor-p1">seguro.</span>
              </h2>
              <p className="font-2-l cor-5">
                Inscreva-se em um dos planos do nosso seguro Bikcraft e
                aproveite diversos benefícios.
              </p>

              <Link className="Button" to="/seguros">
                Conheça Mais
              </Link>
            </div>
          </div>
        </article>

        <Footer />
      </>
    </PageTransition>
  );
}

export default Magic;
