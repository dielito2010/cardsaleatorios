import "./CardEditar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import { useState, useEffect } from "react";
import { CategoriasSelect } from "../Categorias/CategoriasSelect";

export function CardEditar() {
  const { id } = useParams();
  const navegar = useNavigate();
  const [card, setCard] = useState();

  async function buscarCardPorId() {
    const buscarCardUrl = Api.cards.cardId(id);
    const respostaBuscarCard = await Api.buildApiGetRequest(buscarCardUrl);
    const resultadoBuscarCard = await respostaBuscarCard.json();

    setCard(resultadoBuscarCard);
  }
  useEffect(function () {
    buscarCardPorId();
  }, []);

  if (card === undefined) {
    return (
      <div className="typewriter">
        <h1>Carregando...</h1>
      </div>
    );
  }

  async function salvarEdicao(event) {
    event.preventDefault();
    event.target.bntSubmitEditarCard.disable = true;
    const editarDados = event.target;
    const montarObjComTarget = {
      nome: editarDados.tituloCard.value,
      imageUrl: editarDados.imagemUrl.value,
      siteReferencia: editarDados.siteReferencia.value,
      texto: editarDados.textoGrande.value,
      categoria: editarDados.categoria.value,
    };
    if (card != montarObjComTarget) {
      const criarUrlEdiatrCard = Api.cards.atualizar(id);
      const respostaEditar = await Api.buildApiPutRequest(
        criarUrlEdiatrCard,
        montarObjComTarget
      );
      const resultadoEditar = await respostaEditar.json();
      event.target.bntSubmitEditarCard.disable = false;
      console.log(resultadoEditar)

      if (respostaEditar.status === 200) {
        alert(resultadoEditar.message)
        navegar("/")
      } else {
        alert(resultadoEditar.message)
      }
    }
  }

  return (
    <div className="entradaCard">
      <form onSubmit={salvarEdicao}>
        <h3>Edite os dados do card:</h3>
        <br />
        <small>*Nome:</small>
        <input
          type="text"
          id="tituloCard"
          placeholder={card.nome}
          title="Click para EDITAR"
        />
        <small>*Url da imagem:</small>
        <input
          type="text"
          id="imagemUrl"
          placeholder={card.imageUrl}
          title="Click para EDITAR"
        />
        <small>Site de referência:</small>
        <input
          type="text"
          id="siteReferencia"
          placeholder={card.siteReferencia}
          title="Clik para EDITAR"
        />
        <small>Informações adicionais:</small>
        <textarea
          id="textoGrande"
          placeholder={card.texto}
          title="Click para EDITAR"
          cols="30"
          rows="10"
        ></textarea>
        <CategoriasSelect />
        <button type="submit" id="bntSubmitEditarCard" title="Salvar edição">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </form>
      <small>* Campos obrigatórios!</small>
    </div>
  );
}
