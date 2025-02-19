import React from "react";
import PageTransition from "../../components/pageTransition/PageTransition";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Seguros.css";
import Eletrica from "../../assets/img/icones/eletrica.svg";
import Carbono from "../../assets/img/icones/carbono.svg";
import Sustentavel from "../../assets/img/icones/sustentavel.svg";
import Rastreador from "../../assets/img/icones/rastreador.svg";
import Seguro from "../../assets/img/icones/seguro.svg";
import Velocidade from "../../assets/img/icones/velocidade.svg";

function Seguros() {
  return (
    <PageTransition>
      <>
        <NavBar />
        <main className="seguros-bg">
          <div className="titulo-bg">
            <div className="titulo-container">
              <p className="font-2-l-b cor-5">Escolha o seguro</p>
              <h1 className="font-1-xxl cor-0">
                você seguro <span className="cor-p1">.</span>
              </h1>
            </div>
          </div>
          <div className="seguros-containerPAGE">
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
        </main>

        <article className="vantagens-bg">
          <div className="vantagens-container">
            <h2 className="font-1-">
              vantagens <span className="color-p1">.</span>
            </h2>
            <ul>
              <li>
                <img src={Eletrica} alt="" />
                <h3 className="font-1-l cor-0">Reparo Elétrico</h3>
                <p className="font-2-s cor-5">
                  Garantimos o reparo completo do seu motor em caso de falhas.
                  Sabemos que falhas são raras, mas estamos aqui para caso
                  ocorra.
                </p>
              </li>
              <li>
                <img src={Carbono} alt="" />
                <h3 className="font-1-l cor-0">Carbono</h3>
                <p className="font-2-s cor-5">
                  Nossos quadros são feitos para durar para sempre. Mas caso
                  algo ocorra, ficamos felizes em reparar.
                </p>
              </li>
              <li>
                <img src={Sustentavel} alt="" />
                <h3 className="font-1-l cor-0">Sustentável</h3>
                <p className="font-2-s cor-5">
                  Trabalhamos com a filosofia de desperdício zero. Qualquer
                  parte defeituosa é reciclada e reutilizada em outro projeto.
                </p>
              </li>
              <li>
                <img src={Rastreador} alt="" />
                <h3 className="font-1-l cor-0">Rastreador</h3>
                <p className="font-2-s cor-5">
                  Utilizamos o GPS da sua Bikcraft em conjunto com especialistas
                  em segurança para efetuarmos a recuperação.
                </p>
              </li>
              <li>
                <img src={Seguro} alt="" />
                <h3 className="font-1-l cor-0">Segurança</h3>
                <p className="font-2-s cor-5">
                  Com o seguro Bikcraft você pode ficar tranquilo em saber que o
                  seu dinheiro não será perdido em casos de roubo.
                </p>
              </li>
              <li>
                <img src={Velocidade} alt="" />
                <h3 className="font-1-l cor-0">Rapidez</h3>
                <p className="font-2-s cor-5">
                  A sua Bikcraft ficará pronta para uso no mesmo dia, caso você
                  traga ela para ser reparada em uma das filiais.
                </p>
              </li>
            </ul>
          </div>
        </article>

        <article className="perguntas ">
          <h2 className="font-1-xxl">
            perguntas frequentes<span className="cor-p1">.</span>
          </h2>

          <dl>
            <div>
              <dt className="font-1-m-b">
                Qual forma de pagamento vocês aceitam?
              </dt>
              <dd className="font-2-s cor-9">
                Aceitamos pagamentos parcelados em todos os cartões de crédito.
                Para pagamentos à vista também aceitarmos PIX e Boleto através
                do PagSeguro.
              </dd>
            </div>
            <div>
              <dt className="font-1-m-b">Como posso entrar em contato?</dt>
              <dd className="font-2-s cor-9">
                Aceitamos pagamentos parcelados em todos os cartões de crédito.
                Para pagamentos à vista também aceitarmos PIX e Boleto através
                do PagSeguro.
              </dd>
            </div>
            <div>
              <dt className="font-1-m-b">Vocês possuem algum desconto?</dt>
              <dd className="font-2-s cor-9">
                Aceitamos pagamentos parcelados em todos os cartões de crédito.
                Para pagamentos à vista também aceitarmos PIX e Boleto através
                do PagSeguro.
              </dd>
            </div>
            <div>
              <dt className="font-1-m-b">Qual a garantia que possuo?</dt>
              <dd className="font-2-s cor-9">
                Aceitamos pagamentos parcelados em todos os cartões de crédito.
                Para pagamentos à vista também aceitarmos PIX e Boleto através
                do PagSeguro.
              </dd>
            </div>
            <div>
              <dt className="font-1-m-b">Posso parcelar no boleto?</dt>
              <dd className="font-2-s cor-9">
                Aceitamos pagamentos parcelados em todos os cartões de crédito.
                Para pagamentos à vista também aceitarmos PIX e Boleto através
                do PagSeguro.
              </dd>
            </div>
            <div>
              <dt className="font-1-m-b">Quantas trocas posso fazer ao ano?</dt>
              <dd className="font-2-s cor-9">
                Aceitamos pagamentos parcelados em todos os cartões de crédito.
                Para pagamentos à vista também aceitarmos PIX e Boleto através
                do PagSeguro.
              </dd>
            </div>
          </dl>
        </article>

        <Footer />
      </>
    </PageTransition>
  );
}

export default Seguros;
