import "./CardPorId.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import { CardRemover } from "../CardRemover/CardRemover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function CardPorId() {
  const { id } = useParams();
  const navegar = useNavigate();
  function bntVoltar() {
    navegar("/");
  }

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

  function editarCard() {
    navegar("/cardEditar/" + card._id);
  }

  return (
    <div className="cardEditarRemover">
      <nav className="voltar">
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          onClick={bntVoltar}
          id="bntVoltar"
          title="Voltar para todos os cards"
        />
        <FontAwesomeIcon 
          icon={faEdit}
          onClick={editarCard}
          id="bntEdit"
          title={"Editar card: "+card.nome.toUpperCase()}
       />
        <CardRemover card={card} />
      </nav>
      <small>Nome do card:</small>
      <h1>{card.nome}</h1>
      <small>Categoria:</small>
      <p id="catCard">{card.categoria.nome}</p>
      <a href={card.imageUrl} target="_blank">
        <img
          id="imgCard"
          src={card.imageUrl}
          alt="Imagem do card"
          width={300}
          height={200}
        />
      </a>
      <small>Site de referência:</small>
      <a id="siteCard" href={card.siteReferencia} target="_blank">
        <p>{card.siteReferencia}</p>
      </a>
      <small>Informações adicionais:</small>
      <p id="textoCard">{card.texto}</p>
    </div>
  );
}
