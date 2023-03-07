//import "./ItemCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Api } from "../../api/api";
//import { useNavigate } from "react-router-dom";

export function Card(props) {
  const card = props.card;
  //const navegar = useNavigate();

  //async function excluirCard() {
  //  if (
  //    !confirm("Confirme ou cancele a solicitação para excluir esse card...")
  //  ) {
  //    return;
  //  }
  //
  //  const excluirUrl = Api.cards.excluir(card._id);
  //  const response = await Api.buildApiDeleteRequest(excluirUrl);
  //  const body = await response.json();
  //
  //  if (response.status === 200) {
  //    alert(body.message);
  //    navigate(0);
  //  } else {
  //    alert("ERRO! tente novamente.");
  //  }
  //}

  return (
    <div className="conteudoCard">
      <h1>{card.nome}</h1>
      <img src={card.imageUrl} width={150} height={150} />
      <label>{card.categoria.nome}</label>
    </div>
  );
}
