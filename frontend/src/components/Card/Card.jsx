import { useNavigate } from "react-router-dom";

export function Card(props) {
  const card = props.card;
  const navegar = useNavigate();
  //console.log(card.categoria.nome)

  function editarRemover(){
    navegar("/cardEditarRemover/" + card._id)
  }
  
  return (
    <div className="conteudoCard" onClick={editarRemover}>
      <h1>{card.nome}</h1>
      <img src={card.imageUrl} width={170} height={150} />
      <label id="labelCategoria">{card.categoria.nome}</label>
    </div>
  );
}
