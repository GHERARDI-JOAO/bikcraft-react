import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Termos.css";

function Termos() {
  return (
    <>
      <NavBar />
      <main className="">
        <div className="titulo-bg">
          <div className="titulo-container">
            <p className="font-2-l-b cor-5">Termos de Uso</p>
            <h1 className="font-1-xxl cor-0">
              Termos e Condições <span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className="termos-container font-2-s cor-10">
          <h2 className="font-1-l cor-11">1. Política de Estorno</h2>
          <p>
            1.1 Aceitamos pagamentos parcelados em todos os cartões de crédito.
            Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos
            pagamentos parcelados em todos os cartões de crédito. Para
            pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <p>
            1.2 Aceitamos pagamentos parcelados em todos os cartões de crédito.
            Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos
            pagamentos parcelados em todos os cartões de crédito. Para
            pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <p>
            1.3 Aceitamos pagamentos parcelados em todos os cartões de crédito.
            Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos
            pagamentos parcelados em todos os cartões de crédito. Para
            pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <h2 className="font-1-l cor-11">2. Conta do Usuário</h2>
          <p>
            2.1 Aceitamos pagamentos parcelados em todos os cartões de crédito.
            Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos
            pagamentos parcelados em todos os cartões de crédito. Para
            pagamentos à vista também aceitamos PIX e Boleto.
          </p>
          <h2 className="font-1-l cor-11">3. Seguro Bikcraft</h2>
          <p>
            3.1 Aceitamos pagamentos parcelados em todos os cartões de crédito.
            Para pagamentos à vista também aceitamos PIX e Boleto. Aceitamos
            pagamentos parcelados em todos os cartões de crédito. Para
            pagamentos à vista também aceitamos PIX e Boleto.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Termos;
