import "./CategoriaCriar.css";
import { useNavigate } from "react-router-dom"
import { Api } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export function CategoriaCriar(props) {
  async function addCateoria(event) {
    event.preventDefault();
    event.target.bntSubmit.disable = true;
    const nome = event.target.nomeCategoria.value;
    const objeto = { nome };
    const criandoUrl = Api.categorias.criar();
    const respostaCriando = await Api.buildApiPostRequest(criandoUrl, objeto);
    const resultadoCriando = await respostaCriando.json();
    event.target.bntSubmit.disable = false;

    if (respostaCriando.status === 201) {
      alert(resultadoCriando.message);
      event.target.nomeCategoria.value = "";
    } else {
      alert(resultadoCriando.message);
    }
    props.renderizarCategorias();
  }

  return (
    <form onSubmit={addCateoria}>
      <div className="entradaCategoria">
        <input
          type="text"
          id="nomeCategoria"
          placeholder="Digite uma nova categoria..."
          title="Click para digitar"
        />
        <button
          type="submit"
          id="bntSubmit"
          title="Adicionar nova categoria digitada"
        >
          <FontAwesomeIcon icon={faCirclePlus} id="bntIconFormSubmit" />
        </button>
      </div>
    </form>
  );
}
