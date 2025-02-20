import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/pageTransition/PageTransition";
import instagramP from "../../assets/img/redes/instagram-p.svg";
import facebookP from "../../assets/img/redes/facebook-p.svg";
import youtubeP from "../../assets/img/redes/youtube-p.svg";
import mapa from "../../assets/img/lojas/rj.jpg";
import mapaSP from "../../assets/img/lojas/sp.jpg";
import horario from "../../assets/img/icones/horario.svg";
import "./Contato.css";

function Contato() {
  return (
    <PageTransition>
      <>
        <NavBar />
        <main className="">
          <div className="titulo-bg">
            <div className="titulo-container">
              <p className="font-2-l-b cor-5">Respostas em até 24h</p>
              <h1 className="font-1-xxl cor-0">
                nosso contato <span className="cor-p1">.</span>
              </h1>
            </div>
          </div>

          <div className="contato-container">
            <section className="contato-dados" aria-label="Endereço">
              <h2 className="font-1-m cor-0">Loja Online</h2>
              <div className="contato-endereco font-2-s cor-4">
                <p>Rua Ali Perto, 35</p>
                <p>Belo Horizonte - MG</p>
                <p>Brasil - Terra - Vita Láctea</p>
              </div>
              <address className="contato-meios font-2-s cor-4">
                <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                <a href="mailto:assistencia@bikcraft.com">
                  assistencia@bikcraft.com
                </a>
                <a href="tel:+55219999999">+55 21 9999-9999</a>
              </address>

              <div className="contato-redes">
                <a href="./">
                  <img src={instagramP} alt="" />
                </a>
                <a href="./">
                  <img src={facebookP} alt="" />
                </a>
                <a href="./">
                  <img src={youtubeP} alt="" />
                </a>
              </div>
            </section>

            <section className="contato-formulario" aria-label="Formulário">
              <form className="form" action="./contato">
                <div>
                  <label for="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label for="telefone">Telefone</label>
                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    placeholder="(21) 9999-9999"
                  />
                </div>

                <div className="col-2">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="contato@email.com"
                  />
                </div>

                <div className="col-2">
                  <label for="mensagem">Mensagem</label>
                  <textarea
                    rows="5"
                    id="mensagem"
                    name="mensagem"
                    placeholder="o que você precisa?"
                  />
                </div>

                <button className="Button col-2">Enviar Mensagem</button>
              </form>
            </section>
          </div>
        </main>

        <article className="lojas-container">
          <h2 className="font-1-xxl">
            lojas locais <span className="cor-p1">.</span>
          </h2>
          <div className="lojas-item">
            <img
              src={mapa}
              alt="Mapa marcando o endereço em Rua Ali Perto 25 Rio de Janeiro RJ"
            />
            <div className="lojas-conteudo">
              <h3 className="font-1-xl">Rio de Janeiro</h3>
              <div className="lojas-dados font-2-s cor-8">
                <p>Rua Ali Perto, 25</p>
                <p>Rio de Janeiro</p>
              </div>

              <div className="lojas-dados font-2-s cor-8">
                <a href="mailto:rj@bikcraft.com">rj@bikcraft.com</a>
                <a href="tel:+55219999999">+55 21 9999-9999</a>
              </div>
              <p className="lojas-tempo font-1-s">
                {" "}
                <img src={horario} alt="" /> 08-18h de seg à dom
              </p>
            </div>
          </div>

          <div className="lojas-item">
            <img
              src={mapaSP}
              alt="Mapa marcando o endereço em Rua Ali Perto 25 São Paulo - SP"
            />
            <div className="lojas-conteudo">
              <h3 className="font-1-xl">São Paulo</h3>
              <div className="lojas-dados font-2-s cor8">
                <p>Rua Ali Perto, 25</p>
                <p>São Paulo</p>
              </div>

              <div className="lojas-dados font-2-s cor-8">
                <a href="mailto:sp@bikcraft.com">sp@bikcraft.com</a>
                <a href="tel:+55119999999">+55 11 9999-9999</a>
              </div>
              <p className="lojas-tempo font-1-s">
                {" "}
                <img src={horario} alt="" /> 08-18h de seg à dom
              </p>
            </div>
          </div>
        </article>

        <Footer />
      </>
    </PageTransition>
  );
}

export default Contato;
