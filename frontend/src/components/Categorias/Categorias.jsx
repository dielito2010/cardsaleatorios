import "./Categorias.css";
import { Api } from "../../api/api";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faEdit,
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
    const respostaCriando = await Api.buildApiPostRequest(criandoUrl, objeto);
    const resultadoCriando = await respostaCriando.json();

    if (respostaCriando.status === 201) {
      alert(resultadoCriando.message);
      event.target.nomeCategoria.value = "";
    } else {
      alert(resultadoCriando.message);
    }
    relizarRequisicao();
  }

  function editarCategoria({ currentTarget }, event) {
    console.log(currentTarget.id)
  }

  //O currentTarget sempre se refere ao elemento associado ao event handler,
  //ao invés do event.target que identifica o elemento ao qual o evento ocorreu.
  async function removerCategoria({ currentTarget }) {
    if (!confirm("Deseja realmente excluir essa categoria?")) {
      return;
    }
    const excluirCategoriaUrl = Api.categorias.excluir(currentTarget.id);
    const respostaExcluindo = await Api.buildApiDeleteRequest(
      excluirCategoriaUrl
    );
    const resultadoExcluindo = await respostaExcluindo.json();

    if (resultadoExcluindo.status === 200) {
      alert(resultadoExcluindo.message);
    } else {
      alert(resultadoExcluindo.message);
    }
    relizarRequisicao();
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
      <div className="message"></div>
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
        <div className="categoria" key={categoria._id}>
          <span>{categoria.nome}</span>
          <div className="editarRemover">
            <FontAwesomeIcon
              id={categoria.id}
              icon={faEdit}
              className="iconeEditarCategoria"
              onClick={editarCategoria}
            />
            <FontAwesomeIcon
              id={categoria._id}
              className="iconeExcluirCategoria"
              onClick={removerCategoria}
              icon={faTrash}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
