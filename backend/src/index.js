//framework que tranforma esse código em um servidor HTTP
const express = require("express");

/*mecanismo que permite que recursos restritos em uma página da web sejam recuperados
por outro domínio fora do domínio ao qual pertence o recurso que será recuperado*/
const cors = require("cors");

//Variável que vai fazer a conexão com o DB pelo arquivo importado
const { conectandoDB } = require("./db/dbConfig");

//Rotas da API
const cardRouter = require("./card/card.router");
const categoriaRouter = require("./categoria/categoria.router");

// verificar se port é maiúsculo
const port = process.env.port || 3000;

//Função principal assíncrona
async function main() {
  await conectandoDB();
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Desenvolvido por: https://danielribeiro.dev.br/");
  });

  app.use("/cards", cardRouter);
  app.use("/categorias", categoriaRouter);

  app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port} \n Para cancelar: ctrl+c`);
  });
}

main().catch((err) => console.error("Um erro inesperado ocorreu. \n", err));
