import "./CardPorId.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import { CardRemover } from "./CardRemover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";

export function CardEditRemv() {
  const { id } = useParams();
  const navegar = useNavigate();
  function bntVoltar(){
    navegar("/")
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
    <div className="cardPorId">
      <nav className="voltar">
        <FontAwesomeIcon icon={faCircleArrowLeft} onClick={bntVoltar} />
        <FontAwesomeIcon icon={faEdit} size="3x" onClick={editarCard} />
        <CardRemover card={card} />
      </nav>
      <label htmlFor="catCardId">Categoria: </label>
      <p id="catCardId">{card.categoria.nome}</p>
      <h1>{card.nome}</h1>
      <img src={card.imageUrl} alt="Imagem do card" width={200} height={150} />
      <label htmlFor="siteRefId">Site de referência: </label>
      <a id="siteRefId" href={card.siteReferencia}>
        {card.siteReferencia}
      </a>
      <label htmlFor="textoCard">Informações adicionais: </label>
      <p id="textoCard">{card.texto}</p>
    </div>
  );
}
