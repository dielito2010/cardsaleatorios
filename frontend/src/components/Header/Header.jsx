import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { faList } from "@fortawesome/free-solid-svg-icons"

function Header () {
    return (
        <nav>
            <div className="conteudoNav">
                <div className="logo">
                    <a href="/">
                        <h1>Cards Aleatórios</h1>
                    </a>
                </div>
                <div className="botoes">
                    <a href="/novo-card">Novo card &nbsp;
                    <FontAwesomeIcon icon= { faCirclePlus } /></a>
                    <a href="/categorias">Categorias &nbsp;
                    <FontAwesomeIcon icon= { faList } /></a>
                </div>
            </div>
        </nav>
    )
}

export default Header