import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import CalculadoraTMB from "./pages/CalculadoraTMB";
import CalculadoraIMC from "./pages/CalculadoraIMC";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<CalculadoraTMB />} />
          <Route path="imc" element={<CalculadoraIMC />} />
        </Route>
      </Routes>
    </Router>
  );
}
