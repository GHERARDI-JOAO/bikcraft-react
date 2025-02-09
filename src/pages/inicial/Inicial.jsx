import React from "react";
import introducao from "../../assets/img/fotos/introducao.jpg";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import NavBar from "../../components/NavBar/NavBar";
import { PageTransition } from "../../components/pageTransition/PageTransition";
import Footer from "../../components/Footer/Footer";
import "./inicial.css";
import Magic from "../../assets/img/bicicletas/magic-home.jpg";
import Nimbus from "../../assets/img/bicicletas/nimbus-home.jpg";
import Nebula from "../../assets/img/bicicletas/nebula-home.jpg";
import Tecnologia from "../../assets/img/fotos/tecnologia.jpg";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";
import Caravan from "../../assets/img/parceiros/caravan.svg";
import Ranek from "../../assets/img/parceiros/ranek.svg";
import Handel from "../../assets/img/parceiros/handel.svg";
import Dogs from "../../assets/img/parceiros/dogs.svg";
import Lescone from "../../assets/img/parceiros/lescone.svg";
import Flexbox from "../../assets/img/parceiros/flexblog.svg";
import Wildbeast from "../../assets/img/parceiros/wildbeast.svg";
import Surfbot from "../../assets/img/parceiros/surfbot.svg";
import Depoimento from "../../assets/img/fotos/depoimento.jpg";

function Inicial() {
  // scroll progress for progress bar
  const { scrollYProgress } = useScroll();

  return (
    <PageTransition>
      <>
        <NavBar />

        {/* Progress bar */}
        <motion.div
          className="progress-bar"
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "var(--cor-p1)",
            transformOrigin: "0%",
            zIndex: 100,
          }}
        />
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
                Cada Bikcraft é única e possui a sua identidade. As medidas
                serão exatas para o seu corpo e altura, garantindo maior
                conforto e ergonomia na sua pedalada. Você pode também
                personalizar completamente as suas cores.
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
                    duração de até 120h. A bateria é recarregada com a sua
                    energia gasta ao pedalar.
                  </p>
                </div>

                <div>
                  <img src={Rastreador} alt="" />
                  <h3 className="font-1-m cor-0">Rastreador</h3>
                  <p className="font-2-s cor-5">
                    Sabemos o quão preciosa é a sua Bikcraft, por isso
                    adicionamos rastreadores e sistemas anti-furto para garantir
                    o seu sossego.
                  </p>
                </div>
              </div>
            </div>

            <div className="tecnologia-imagem">
              <img src={Tecnologia} alt="" />
            </div>
          </div>
        </article>

        <section className="parceiros" aria-label="Nossos Parceiros">
          <h2 className="h2-container font-1-xxl">
            nossos parceiros <span className="cor-p1">.</span>
          </h2>

          <ul>
            <li>
              <img src={Caravan} alt="" />
            </li>
            <li>
              {" "}
              <img src={Ranek} alt="" />{" "}
            </li>
            <li>
              {" "}
              <img src={Handel} alt="" />{" "}
            </li>
            <li>
              <img src={Dogs} alt="" />{" "}
            </li>
            <li>
              {" "}
              <img src={Lescone} alt="" />{" "}
            </li>
            <li>
              {" "}
              <img src={Flexbox} alt="" />
            </li>
            <li>
              {" "}
              <img src={Wildbeast} alt="" />
            </li>
            <li>
              {" "}
              <img src={Surfbot} alt="" />
            </li>
          </ul>
        </section>

        <section className="depoimento" aria-label="Depoimento">
          <div>
            <img
              src={Depoimento}
              alt="Pessoa pedalando uma bicicleta Bikcraft"
            />
          </div>
          <div className="depoimento-conteudo">
            <blockquote className="font-1-xl cor-p5">
              <p>
                Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft
                fez foi intensificar o meu amor por esta atividade. Recomendo à
                todos que amo.
              </p>
            </blockquote>
            <span class="font-1-m-b cor-p4">Ana Júlia</span>
          </div>
        </section>

        <article className="seguros-bg">
          <div className="seguros-container">
            <h2 className="font-1-xxl cor-0">
              Seguros
              <span className="cor-p1">.</span>
            </h2>
            <div className="seguros-item">
              <h3 className="font-1-xl cor-6">PRATA</h3>
              <span className="font-1-xl cor-0">
                R$ 199 <span className="font-1-xs cor-6">mensal</span>
              </span>
              <ul className="font-2-m cor-0">
                <li>Duas trocas por ano</li>
                <li>Assistência técnica</li>
                <li>Suporte 08h às 18h</li>
                <li>Cobertura estadual</li>
              </ul>
              <a className="Button secundario" href="./orcamento">
                Inscreva-se
              </a>
            </div>
            <div className="seguros-item">
              <h3 className="font-1-xl cor-p1">OURO</h3>
              <span className="font-1-xl cor-0">
                R$ 299 <span className="font-1-xs cor-6">mensal</span>
              </span>
              <ul className="font-2-m cor-0">
                <li>Cinco trocas por ano</li>
                <li>Assistência especial</li>
                <li>Suporte 24h</li>
                <li>Cobertura nacional</li>
                <li>Desconto em parceiros</li>
                <li>Acesso ao Clube Bikcraft</li>
              </ul>
              <a className="Button" href="./orcamento">
                Inscreva-se
              </a>
            </div>
          </div>
        </article>

        <Footer />
      </>
    </PageTransition>
  );
}

export default Inicial;
