import React from "react";
import { Link } from "react-router-dom";
import bikcraft from "../../assets/img/bikcraft.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="header-bg">
      <div className="header">
        <Link to="/">
          <img src={bikcraft} alt="Bikcraft" />
        </Link>
        <nav aria-label="primaria">
          <ul className="header-menu">
            <li>
              <Link to="/bicicletas">Bicicletas</Link>
            </li>
            <li>
              <Link to="/seguros">Seguros</Link>
            </li>
            <li>
              <Link to="/contato">Contatos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
