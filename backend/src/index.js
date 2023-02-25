const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db/dbConfig");

const cardRouter = require("./card/card.router");
const categoriaRouter = require("./categoria/categoria.router");

// verificar se port é maiúsculo
const port = process.env.port || 3000;

async function main() {
  await connectToDatabase();
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("Desenvolvido por: https://danielribeiro.dev.br/");
  });

  app.use("/cards", cardRouter);
  app.use("/categoria", categoriaRouter);

  app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port} \n Para cancelar: ctrl+c`);
  });
}

main().catch((err) => console.log.error("Um erro inesperado ocorreu. \n", err));
