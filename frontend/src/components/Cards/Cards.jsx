import "./Cards.css";
import { Card } from "./Card";
import { Api } from "../../api/api";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

export function Cards() {
  const [cards, setCards] = useState();

  async function buscarTodosCards() {
    const cardsUrl = Api.cards.todosCards();
    const cardsResposta = await Api.buildApiGetRequest(cardsUrl);
    const cardsResultado = await cardsResposta.json();

    setCards(cardsResultado);
  }

  useEffect(function () {
    buscarTodosCards();
  }, []);

  if (cards === undefined) {
    return (
      <div className="typewriter">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="todosCards">
      {cards.map((card) => (
        <div className="card" key={card._id}>
          <Card card={card} />
        </div>
      ))}
      <a href="#root" className="irParaTopo" title="Ir para o topo">
       <FontAwesomeIcon icon={faCircleArrowUp} />
      </a>
    </div>
  );
}
