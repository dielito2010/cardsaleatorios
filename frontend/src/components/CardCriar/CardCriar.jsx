import "./CardCriar.css";
import { Api } from "../../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { CategoriasSelect } from "../CategoriaSelect/CategoriasSelect"

export function CardCriar() {
  const navegar = useNavigate();
  const [categorias, setCategorias] = useState();

  async function buscarCategorias() {
    const categoriasDoBanco = Api.categorias.todasCategorias();
    const categoriasCarregadas = await Api.buildApiGetRequest(
      categoriasDoBanco
    );
    const resultado = await categoriasCarregadas.json();
    setCategorias(resultado);
  }

  useEffect(function () {
    buscarCategorias();
  }, []);

  if (categorias === undefined) {
    return (
      <div className="typewriter">
        <h1>Carregando...</h1>
      </div>
    );
  }
  async function addCard(event) {
    event.preventDefault();
    event.target.bntSubmitNovoCard.disable = true;
    const dadosDoForm = event.target;
    const objeto = {
      nome: dadosDoForm.tituloCard.value,
      imageUrl: dadosDoForm.imagemUrl.value,
      siteReferencia: dadosDoForm.siteReferencia.value,
      texto: dadosDoForm.textoGrande.value,
      categoria: dadosDoForm.categoria.value,
    };
    const criandoUrl = Api.cards.criar();
    const respostaCriando = await Api.buildApiPostRequest(criandoUrl, objeto);
    const resultadoCriando = await respostaCriando.json();
    event.target.bntSubmitNovoCard.disable = false;

    if (respostaCriando.status === 201) {
      if (
        confirm(
          resultadoCriando.message +
            " Se deseja ver os Cards click em 'OK' agora se quiser criar outro card click em 'CANCELAR'"
        ) === true
      ) {
        navegar("/");
      } else {
        navegar("/novoCard")
      }
    } else {
      alert(resultadoCriando.message);
    }
  }

  return (
    <div className="entradaCard">
      <form onSubmit={addCard}>
        <input
          type="text"
          id="tituloCard"
          placeholder="* Digite um nome para seu Card:"
          title="Click para digitar"
        />
        <input
          type="text"
          id="imagemUrl"
          placeholder="* Informe a URL onde está a imagem:"
          title="Click para digitar"
        />
        <input
          type="text"
          id="siteReferencia"
          placeholder="Informe o site de referência da imagem:"
          title="Clik para digitar"
        />
        <textarea
          id="textoGrande"
          placeholder="Insira qualquer informação que desejar..."
          title="Click para digitar"
          cols="30"
          rows="10"
        ></textarea>
        <CategoriasSelect />
        <button
          type="submit"
          id="bntSubmitNovoCard"
          title="Adicionar novo card"
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </form>
      <small>* Campos obrigatórios!</small>
    </div>
  );
}