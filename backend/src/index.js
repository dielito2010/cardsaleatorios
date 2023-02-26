//framework que tranforma esse código em um servidor HTTP
const express = require("express");

/*mecanismo que permite que recursos restritos em uma página da web sejam recuperados
por outro domínio fora do domínio ao qual pertence o recurso que será recuperado*/
const cors = require("cors");

//Variável que vai fazer a conexão com o DB pelo arquivo importado
const { conectandoDB } = require("./db/dbConfig");

//Declarando rotas da API
const cardRouter = require("./card/card.router");
const categoriaRouter = require("./categoria/categoria.router");

// verificar se port é maiúsculo
const port = process.env.port || 3000;

//Função principal assíncrona
async function main() {
  await conectandoDB();
  const app = express();

  app.use(cors());
  //Sinalizando para API que será usado JSON
  app.use(express.json());

  //Rota principal redireciona para meu site
  app.get("/", (req, res) => {
    res.redirect("https://danielribeiro.dev.br/");
  });

  //Chamando as rotas da API
  app.use("/cards", cardRouter);
  app.use("/categorias", categoriaRouter);

  //Informando endereço principal da API
  app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port} \n Para cancelar: ctrl+c`);
  });
}

//Chamando função principal e informabdo caso dê algum erro
main().catch((err) => console.error("Um erro inesperado ocorreu. \n", err));
