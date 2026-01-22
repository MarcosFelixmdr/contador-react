import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  name: string;
};

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div className="container">
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
