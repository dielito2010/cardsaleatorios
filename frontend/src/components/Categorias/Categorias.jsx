import "./Categorias.css";
import { Api } from "../../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faDeleteLeft,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

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

  async function addCateoria(event) {
    event.preventDefault();
    const nome = event.target.nomeCategoria.value;
    const objeto = { nome };
    const criandoUrl = Api.categorias.criar();
    const resposta = await Api.buildApiPostRequest(criandoUrl, objeto);
    const resultadoStatus = await resposta.json();

    if (resposta.status === 201) {
      alert(resultadoStatus.message);
      event.target.nomeCategoria.value = ""
    } else {
      alert(resultadoStatus.message);
    }
    relizarRequisicao();
  };

  //O currentTarget sempre se refere ao elemento associado ao event handler,
  //ao invés do event.target que identifica o elemento ao qual o evento ocorreu.
  function removerCategoria({currentTarget}) {
    console.log(currentTarget.id)
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
      <form onSubmit={addCateoria}>
        <div className="entradaCategoria">
          <input
            type="text"
            id="nomeCategoria"
            placeholder="Informe uma categoria"
          />
          <input type="submit" value="Adicionar" />
          <FontAwesomeIcon icon={faCirclePlus} />
        </div>
      </form>
      {categorias.map((categoria) => (
        <div className="categoria" key={categoria._id} >
          <span>{categoria.nome}</span>
          <FontAwesomeIcon id={categoria._id} onClick={removerCategoria} icon={faTrash} />
        </div>
      ))}
    </div>
  );
}
