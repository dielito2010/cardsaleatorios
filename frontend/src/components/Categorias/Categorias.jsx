import "./Categorias.css";
import { Api } from "../../api/api";
import { useState } from "react";
import { useEffect } from "react";

export function Categorias() {
  const [categorias, setCategorias] = useState();

  async function relizarRequisicao() {
    const buscarCategorias = Api.categorias.todasCategorias();
    const resposta = await Api.buildApiGetRequest(buscarCategorias);
    const resultado = await resposta.json();

    setCategorias(resultado);
  }

  useEffect(function () {
    relizarRequisicao();
  }, []);

  if (categorias === undefined) {
    return (
      <div className="typewriter">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="categorias">
      <div className="entradaCategoria">
        <input
          type="text"
          id="entradaCategoria"
          placeholder="Informe uma categoria"
        />
      </div>
      {categorias.map((categoria) => (
        <div className="categoria" key={categoria._id}>
          <span>{categoria.nome}</span>
        </div>
      ))}
    </div>
  );
}
