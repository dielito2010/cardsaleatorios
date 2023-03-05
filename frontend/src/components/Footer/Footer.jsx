import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <div className="conteudoFooter">
      <small>
        {anoAtual} ~ Desenvolvido por:&nbsp;
        <a
          href="https://danielribeiro.dev.br/"
          target="_blank"
          title="Clik para navegar ao site: danielribeiro.dev.br"
        >
          danielribeiro.dev.br
        </a>
        &nbsp;
        <FontAwesomeIcon icon={faLink} size="2x"/>
        &nbsp;
        <a
          href="https://github.com/dielito2010/cardsaleatorios"
          target="_blank"
          title="Click ver o repositório deste site"
        >
          Cards Aleatórios
        </a>
      </small>
    </div>
  );
}
