import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/pageTransition/PageTransition";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Carbono from "../../assets/img/icones/carbono.svg";
import Velocidade from "../../assets/img/icones/velocidade.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";
import Magic from "../../assets/img/bicicletas/magic.jpg";
import Nebula from "../../assets/img/bicicletas/nebula.jpg";
import Nimbus from "../../assets/img/bicicletas/nimbus.jpg";

import "./Orcamento.css";

const Orcamento = () => {
  return (
    <PageTransition>
      <>
        <NavBar />
        <main className="Orcamentoo">
          <div className="titulo-bg">
            <div className="titulo-container">
              <p className="font-2-l-b cor-5">Cotações no seu email</p>
              <h1 className="font-1-xxl cor-0">
                solicite um orçamento<span className="cor-p1">.</span>
              </h1>
            </div>
          </div>

          <form className="orcamento" action="./orcamento.html">
            <div className="orcamento-produto">
              <h2 className="font-1-xs cor-5">Bikcraft ou Seguro?</h2>

              <input type="radio" name="tipo" value="bikcraft" id="bikcraft" />
              <label htmlFor="bikcraft">Bikcraft</label>

              <input type="radio" name="tipo" value="seguro" id="seguro" />
              <label htmlFor="seguro">Seguro</label>

              <div className="orcamento-conteudo" id="orcamento-bikcraft">
                <h2 className="font-1-xs cor-5">Escolha a sua</h2>

                <input type="radio" name="produto" value="nimbus" id="nimbus" />
                <label htmlFor="nimbus">
                  Nimbus Stark <span>R$ 4999</span>
                </label>
                <div className="orcamento-detalhes">
                  <ul className="font-1-xs cor-8">
                    <li>
                      <img src={Eletrica} alt="" /> Motor Elétrico
                    </li>
                    <li>
                      <img src={Carbono} alt="" /> Fibra de Carbono
                    </li>
                    <li>
                      <img src={Velocidade} alt="" /> 50 km/h
                    </li>
                    <li>
                      <img src={Rastreador} alt="" /> Rastreador
                    </li>
                  </ul>
                  <img src={Nimbus} alt="Bicicleta preta" />
                </div>

                <input type="radio" name="produto" value="magic" id="magic" />
                <label htmlFor="magic">
                  Magic Might <span>R$ 2499</span>
                </label>
                <div className="orcamento-detalhes">
                  <ul className="font-1-xs cor-8">
                    <li>
                      <img src={Eletrica} alt="" /> Motor Elétrico
                    </li>
                    <li>
                      <img src={Carbono} alt="" /> Fibra de Carbono
                    </li>
                    <li>
                      <img src={Velocidade} alt="" /> 45 km/h
                    </li>
                    <li>
                      <img src={Rastreador} alt="" /> Rastreador
                    </li>
                  </ul>
                  <img src={Magic} alt="Bicicleta preta" />
                </div>

                <input type="radio" name="produto" value="nebula" id="nebula" />
                <label htmlFor="nebula">
                  Nebula Cosmic <span>R$ 3999</span>
                </label>
                <div className="orcamento-detalhes">
                  <ul className="font-1-xs cor-8">
                    <li>
                      <img src="./img/icones/eletrica.svg" alt="" /> Motor
                      Elétrico
                    </li>
                    <li>
                      <img src={Carbono} alt="" /> Fibra de Carbono
                    </li>
                    <li>
                      <img src={Velocidade} alt="" /> 40 km/h
                    </li>
                    <li>
                      <img src={Rastreador} alt="" /> Rastreador
                    </li>
                  </ul>
                  <img src={Nebula} alt="Bicicleta branca" />
                </div>
              </div>

              <div className="orcamento-conteudo" id="orcamento-seguro">
                <h2 className="font-1-xs cor-5">Escolha o plano</h2>

                <input type="radio" name="produto" value="prata" id="prata" />
                <label htmlFor="prata">
                  Prata <span>R$ 199</span>
                </label>

                <input type="radio" name="produto" value="ouro" id="ouro" />
                <label htmlFor="ouro">
                  Ouro <span>R$ 299</span>
                </label>
              </div>
            </div>
            <div className="orcamento-dados form">
              <h2 className="font-1-xs cor-9 col-2">dados pessoais</h2>
              <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" />
              </div>
              <div>
                <label htmlFor="sobrenome">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" />
              </div>
              <div className="col-2">
                <label htmlFor="cpf">CPF</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  placeholder="000.000.000-00"
                />
              </div>
              <div className="col-2">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <h2 className="font-1-xs cor-9 col-2">entrega</h2>
              <div>
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" name="cep" />
              </div>
              <div>
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" name="numero" />
              </div>
              <div>
                <label htmlFor="logradouro">Logradouro</label>
                <input type="text" id="logradouro" name="logradouro" />
              </div>
              <div>
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" name="bairro" />
              </div>
              <div>
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" name="cidade" />
              </div>
              <div>
                <label htmlFor="estado">Estado</label>
                <input type="text" id="estado" name="estado" />
              </div>
              <button className="Button col-2">Solicitar Orçamento</button>
            </div>
          </form>
        </main>
        <Footer />
      </>
    </PageTransition>
  );
};

export default Orcamento;
