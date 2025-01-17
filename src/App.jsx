import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Inicial />} />
        {/* Outras páginas */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
