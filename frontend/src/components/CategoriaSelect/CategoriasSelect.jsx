import { Api } from "../../api/api";
import { useState, useEffect } from "react";

export function CategoriasSelect(){
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
      <div className="typewriter">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return(
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
  )
}