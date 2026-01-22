import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ListaUsuarios from "./components/ListaUsuarios";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/usuarios">
          Usuários
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
