import "./CardPorId.css"
import { useNavigate } from "react-router-dom";
import { Api } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function CardRemover(props) {
  const card = props.card;
  const navegar = useNavigate();
  async function excluirCard() {
    //console.log(card);
    if (
      !confirm(
        "Confirme ou cancele a solicitação para excluir o card:\n" +
          card.categoria.nome.toUpperCase() +
          " => " +
          card.nome
      )
    ) {
      return;
    }
    const excluirUrl = Api.cards.excluir(card._id);
    const response = await Api.buildApiDeleteRequest(excluirUrl);
    const body = await response.json();
    if (response.status === 200) {
      alert(body.message);
      navegar("/");
    } else {
      alert(body.message);
    }
  }
  return (
    <FontAwesomeIcon
      icon={faTrash}
      onClick={excluirCard}
      id="bntExcluirCard"
      title={"Remover card: "+card.nome.toUpperCase()}
    />
  );
}
