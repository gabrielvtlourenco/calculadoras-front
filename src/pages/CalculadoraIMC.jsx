import { useState } from "react";
export default function CalculadoraIMC() {
    const [form, setForm] = useState({
        peso: "",
        altura: "",
    });
    const [resultado, setResultado] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { peso, altura } = form;

        if (!peso || !altura) {
            alert("Preencha todos os campos corretamente!");
            return;
        }

        if (peso <= 0 || altura <= 0) {
            alert("Idade, peso e altura devem ser maiores que zero.");
            return;
        }

        const payload = {
            peso: parseFloat(form.peso),
            altura: parseFloat(form.altura),
        };

        try {
            const res = await fetch("http://localhost:5096/api/imc/calcular", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Erro ao calcular");

            const data = await res.json();
            setResultado(data.imc);
        } catch (err) {
            console.error(err);
            alert("Erro ao conectar com a API");
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold mb-6">Calculadora de TMB</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 p-6 rounded-lg w-full max-w-md space-y-4"
            >
                <div>
                    <label className="block mb-1">Peso (kg)</label>
                    <input
                        type="number"
                        name="peso"
                        value={form.peso}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                        min="1"
                        max="500"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Altura (cm)</label>
                    <input
                        type="number"
                        name="altura"
                        value={form.altura}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded bg-gray-700 text-white"
                        min="50"
                        max="250"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
                >
                    Calcular
                </button>
            </form>

            {resultado !== null && (
                <div className="mt-6 text-xl">
                    Seu IMC é: <span className="font-bold">{resultado}</span>
                </div>
            )}
        </div>
    );
}
