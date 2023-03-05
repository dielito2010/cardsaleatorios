import { Api } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function CategoriaRemover(props) {
  async function removeCategoria() {
    if (
      !confirm(
        "Solicitação para excluir a categoria: " +
          props.categoria.nome.toUpperCase()
      )
    ) {
      return;
    }
    const excluirCategoriaUrl = Api.categorias.excluir(props.categoria._id);
    const respostaExcluindo = await Api.buildApiDeleteRequest(
      excluirCategoriaUrl
    );
    const resultadoExcluindo = await respostaExcluindo.json();
    if (resultadoExcluindo.status === 200) {
      alert(resultadoExcluindo.message);
    } else {
      alert(resultadoExcluindo.message);
    }
    props.renderizarCategorias();
  }

  return (
    <FontAwesomeIcon
      className="iconeExcluirCategoria"
      onClick={removeCategoria}
      icon={faTrash}
      title={"Remover categoria: " + props.categoria.nome.toUpperCase()}
    />
  );
}
