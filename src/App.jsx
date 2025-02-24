import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Importando as páginas
import Inicial from "./pages/inicial/Inicial";
import Termos from "./pages/Termos/Termos";
import Bicicletas from "./pages/Bicicletas/Bicicletas";
import Seguros from "./pages/Seguros/Seguros";
import Nimbus from "./pages/Nimbus/Nimbus";
import Nebula from "./pages/Nebula/Nebula";
import Magic from "./pages/Magic/Magic";
import Contato from "./pages/Contato/Contato";
import Orcamento from "./pages/Orcamento/Orcamento";

// Componente separado para usar useLocation corretamente
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Inicial />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/bicicletas" element={<Bicicletas />} />
        <Route path="/seguros" element={<Seguros />} />
        <Route path="/nimbus" element={<Nimbus />} />
        <Route path="/nebula" element={<Nebula />} />
        <Route path="/magic" element={<Magic />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/orcamento" element={<Orcamento />} />
      </Routes>
    </AnimatePresence>
  );
};

// Componente principal do App
const App = () => {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
};

export default App;
