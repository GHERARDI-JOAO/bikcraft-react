import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Termos from "./pages/Termos/Termos";
import Bicicletas from "./pages/Bicicletas/Bicicletas";
import Seguros from "./pages/Seguros/Seguros";
import Nimbus from "./pages/Nimbus/Nimbus";
import Nebula from "./pages/Nebula/Nebula";
import Magic from "./pages/Magic/Magic";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Inicial />} />
        {/* Outras páginas */}
        <Route path="/termos" element={<Termos />} />
        <Route path="/bicicletas" element={<Bicicletas />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/nimbus" element={<Nimbus />} />
        <Route path="/nebula" element={<Nebula />} />
        <Route path="/magic" element={<Magic />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
