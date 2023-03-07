import "./Cards.css";
//import ItemCard from '../ItemCard/ItemCard'
import { Card } from "./Card";
import { Api } from "../../api/api";
import { useState, useEffect } from "react";

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
    </div>
  );
}
