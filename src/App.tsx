import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState<number>(0);

  return (
    <div className="container">
      <h1>Bem-vindo ao meu projeto React com TypeScript</h1>

      <p>Contador: {contador}</p>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

export default App;
