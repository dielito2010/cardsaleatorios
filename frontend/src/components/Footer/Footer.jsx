import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <div className="conteudoFooter">
      <small>
        { anoAtual } ~ Desenvolvido por:&nbsp;&nbsp;
        <a href="https://danielribeiro.dev.br/" target="_blank">
          Daniel Ribeiro
        </a>
        &nbsp;&nbsp;
        <FontAwesomeIcon icon={faLink} />
        &nbsp;&nbsp;
        <a
          href="https://github.com/dielito2010/cardsaleatorios"
          target="_blank"
        >
          Cards Aleatórios
        </a>
      </small>
    </div>
  );
}
