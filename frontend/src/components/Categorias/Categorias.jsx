import "./Categorias.css";
import { Api } from "../../api/api";
import { CategoriaCriar } from "./CategoriaCriar";
import { CategoriaEditar } from "./CategoriaEditar";
import { CategoriaRemover } from "./CategoriaRemover";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export function Categorias() {
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

  return (
    <div className="categorias">
      <div className="message" id="message"></div>
      <CategoriaCriar renderizarCategorias={relizarRequisicao} />
      {categorias.map((categoria) => (
        <div className="categoria" key={categoria._id}>
          <span>{categoria.nome}</span>
          <div className="editarRemover">
            <CategoriaEditar
              categoria={categoria}
              renderizarCategorias={relizarRequisicao}
            />
            <CategoriaRemover
              categoria={categoria}
              renderizarCategorias={relizarRequisicao}
            />
          </div>
        </div>
      ))}
      <a href="#root" className="irParaTopo" title="Ir para o topo">
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </a>
    </div>
  );
}
