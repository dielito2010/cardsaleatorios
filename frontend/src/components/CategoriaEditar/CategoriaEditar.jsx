import { Api } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export function CategoriaEditar(props) {
  async function editar() {
    const atualizar = prompt(
      "Atualize a categoria =>" + props.categoria.nome.toUpperCase(),
      props.categoria.nome
    );
    if (
      atualizar === null ||
      atualizar === "" ||
      atualizar === props.categoria.nome
    ) {
      alert("Nada foi alterado, tente novamente!");
    } else {
      const _id = props.categoria._id;
      const nome = atualizar;
      const objeto = { nome };
      const criandoUrl = Api.categorias.atualizar(_id);
      const respostaEditar = await Api.buildApiPutRequest(criandoUrl, objeto);
      const resultadoEditar = await respostaEditar.json();
      alert(resultadoEditar.message);
      props.renderizarCategorias();
    }
  }

  return (
    <FontAwesomeIcon
      icon={faEdit}
      className="iconeEditarCategoria"
      onClick={editar}
      title={"Editar categoria: "+props.categoria.nome.toUpperCase()}
    />
  );
}
