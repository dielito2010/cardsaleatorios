import "./CardPorId.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../api/api";

export function CardEditRemv() {
  const { id } = useParams();

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

  return (
    <div className="cardPorId">
      <label htmlFor="catCardId">Categoria: </label>
      <p id="catCardId">{card.categoria.nome}</p>
      <h1>{card.nome}</h1>
      <img src={card.imageUrl} alt="Imagem do card" width={200} height={150} />
      <label htmlFor="siteRefId">Site de referência: </label>
      <a id="siteRefId" href={card.siteReferencia}>{card.siteReferencia}</a>
      <label htmlFor="textoCard">Informações adicionais: </label>
      <p id="textoCard">{card.texto}</p>
    </div>
  );
}
