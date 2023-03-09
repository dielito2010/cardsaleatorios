import { Api } from "../../api/api";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

export function CategoriasSelect() {
  const [categorias, setCategorias] = useState();

  async function relizarRequisicao() {
    const categoriasDoBanco = Api.categorias.todasCategorias();
    const categoriasCarregadas = await Api.buildApiGetRequest(
      categoriasDoBanco
    );
    const resultado = await categoriasCarregadas.json();
    setCategorias(resultado);
  }

  useEffect(function () {
    relizarRequisicao();
  }, []);

  if (categorias === undefined) {
    return (
      <div>
        <FontAwesomeIcon icon={faRotate} size="3x" color="#00a7e2"/>
      </div>
    );
  }

  return (
    <select
      id="categoria"
      className="categoria"
      title="Click para selecionar uma categoria"
    >
      {categorias.map((categoria) => (
        <option key={categoria._id} value={categoria._id}>
          {categoria.nome}
        </option>
      ))}
    </select>
  );
}
