import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"


function Header () {
    return (
        <div className="Header">
            <h1>Cards Aleatórios</h1>
            <a href="/novo-card">Novo card &nbsp;
            <FontAwesomeIcon icon= { faCirclePlus } />
            </a>
            <a href="/nova-categoria">Nova categoria &nbsp;
            <FontAwesomeIcon icon= { faCirclePlus } />
            </a>
        </div>
    )
}

export default Header