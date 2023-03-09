import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navegar = useNavigate();
  function novoCard() {
    navegar("/novoCard");
  }
  function categorias() {
    navegar("/categorias");
  }

  return (
    <nav>
      <div className="conteudoNav">
        <div className="logo">
          <a href="/">
            <h1>Cards Aleatórios</h1>
          </a>
        </div>
        <div className="botoes">
          <button onClick={novoCard} id="bntNovoCard">
            Novo card &nbsp;
            <FontAwesomeIcon icon={faCirclePlus} />
          </button>
          <button onClick={categorias} id="bntCategorias">
            Categorias &nbsp;
            <FontAwesomeIcon icon={faList} />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
