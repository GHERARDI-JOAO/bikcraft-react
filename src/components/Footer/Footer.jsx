import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import bikcraft from "../../assets/img/bikcraft.svg";
import instagram from "../../assets/img/redes/instagram.svg";
import facebook from "../../assets/img/redes/facebook.svg";
import youtube from "../../assets/img/redes/youtube.svg";

function Footer() {
  return (
    <footer className="footer-bg">
      <div className="footer-container">
        <img src={bikcraft} alt="" />
        <div className="footer-contato">
          <h3 className="font-2-l-b cor-0">Contato</h3>
          <ul className="cor-5 font-2-m">
            <li>
              <a href="tel:+552199999"> +55 21 9999-9999</a>
            </li>
            <li>
              <a href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
            </li>
            <li>Rua Ali Perto, 42 - Atlético</li>
            <li>Belo Horizonte - MG</li>
          </ul>
          <div className="footer-redes">
            <a href="./">
              <img src={instagram} alt="" />
            </a>
            <a href="./">
              <img src={facebook} alt="" />
            </a>
            <a href="./">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-informacoes">
          <h3 className="font-2-l-b cor-0">Informações</h3>
          <nav>
            <ul className="font-1-m cor-5">
              <li>
                <Link to="/bicicletas">Bicicletas</Link>
              </li>
              <li>
                <Link to="/seguros">Seguros</Link>
              </li>
              <li>
                <Link to="/contato">Contatos</Link>
              </li>
              <li>
                <Link to="/termos">Termos e Concições</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="footer-copy font-2-m cor-6">
          Bikcraft © Alguns direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
