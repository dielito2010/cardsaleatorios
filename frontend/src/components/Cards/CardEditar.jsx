import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import { useState, useEffect } from "react";

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

  function salvarEdicao() {
    return;
  }

  return (
    <div className="editarCard">
      <form onSubmit={salvarEdicao}>
        <label htmlFor="catCardId">Categoria: </label>
        <p id="catCardId">{card.categoria.nome}</p>
        <h1>{card.nome}</h1>
        <img
          src={card.imageUrl}
          alt="Imagem do card"
          width={200}
          height={150}
        />
        <label htmlFor="siteRefId">Site de referência: </label>
        <a id="siteRefId" href={card.siteReferencia}>
          {card.siteReferencia}
        </a>
        <label htmlFor="textoCard">Informações adicionais: </label>
        <p id="textoCard">{card.texto}</p>
        <button type="submit">
          <FontAwesomeIcon icon={faSave} size="3x" />
        </button>
      </form>
    </div>
  );
}
