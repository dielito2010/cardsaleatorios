import "./Categorias.css";
import { Api } from "../../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

export function Categorias() {
  const [categorias, setCategorias] = useState();

  async function relizarRequisicao() {
    const categoriasDoBanco = Api.categorias.todasCategorias();
    const categoriasCarregadas = await Api.buildApiGetRequest(categoriasDoBanco);
    const resultado = await categoriasCarregadas.json();

    setCategorias(resultado);
  }

  useEffect(function () {
    relizarRequisicao();
  }, []);

  if (categorias === undefined) {
    return (
      <div className="typewriter">
        <h1>Carregando...</h1>
      </div>
    );
  }

  async function novaCateoria(event){
    event.preventDefault()
    const nome = event.target.nomeCategoria.value
    const objeto = {nome}
    
    const criandoUrl = Api.categorias.criar()
    const resposta = await Api.buildApiPostRequest(criandoUrl, objeto)
    const resultado = await resposta.json()
    console.log(resultado)
    if (resposta.status === 201) {
      alert("Categoria criada com sucesso, parabéns! ;-)")
    } else {
      alert(resultado.message)
    }

  }

  return (
    <div className="categorias">
      {/*<div className="entradaCategoria">
        <input
          type="text"
          id="entradaCategoria"
          placeholder="Informe uma categoria"
        />
        <a href="#" className="novaCateoria" onClick={novaCateoria}>
          <FontAwesomeIcon icon= { faCirclePlus } size="xl" />
        </a>
      </div>*/}
      <form onSubmit={novaCateoria}>
        <div className="entradaCategoria">
          <input 
            type="text"
            id="nomeCategoria"
            placeholder="Informe uma categoria"
          />
          <input type="submit" value="Adicionar" />
        </div>
      </form>
      {categorias.map((categoria) => (
        <div className="categoria" key={categoria._id}>
          <span>{categoria.nome}</span>
        </div>
      ))}
    </div>
  );
}
