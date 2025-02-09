import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import your pages
import Inicial from "./pages/inicial/Inicial";
import Termos from "./pages/Termos/Termos";
import Bicicletas from "./pages/Bicicletas/Bicicletas";
import Seguros from "./pages/Seguros/Seguros";
import Nimbus from "./pages/Nimbus/Nimbus";
import Nebula from "./pages/Nebula/Nebula";
import Magic from "./pages/Magic/Magic";

// Create a separate component for the routes to use useLocation
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
      </Routes>
    </AnimatePresence>
  );
};

// Main App component
const App = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
