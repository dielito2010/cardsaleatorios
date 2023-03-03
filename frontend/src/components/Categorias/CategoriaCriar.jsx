import { Api } from "../../api/api"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export function CategoriaCriar(props){
    async function addCateoria(event) {
      event.preventDefault();
      const nome = event.target.nomeCategoria.value;
      const objeto = { nome };
      const criandoUrl = Api.categorias.criar();
      const respostaCriando = await Api.buildApiPostRequest(criandoUrl, objeto);
      const resultadoCriando = await respostaCriando.json();
    
      if (respostaCriando.status === 201) {
        alert(resultadoCriando.message);
        event.target.nomeCategoria.value = "";
      } else {
        alert(resultadoCriando.message);
      }
      props.renderizarCategorias();
    }

    return(
        <form onSubmit={addCateoria}>
            <div className="entradaCategoria">
              <input
                type="text"
                id="nomeCategoria"
                placeholder="Informe uma categoria"
              />
              <input type="submit" value="Adicionar" />
              <FontAwesomeIcon icon={faCirclePlus} />
            </div>
        </form>
    )
}