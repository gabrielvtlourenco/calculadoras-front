import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 flex gap-6 text-lg font-semibold">
        <Link to="/" className="hover:text-blue-400">Calculadora TMB</Link>
        <Link to="/imc" className="hover:text-blue-400">Calculadora IMC</Link>
      </nav>

      <main className="p-6">
        <Outlet /> {/* Aqui será carregado o conteúdo da rota */}
      </main>
    </div>
  );
}
