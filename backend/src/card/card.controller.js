//Import de objeto validado pelo arquivo dbconfig
const { objetoValido } = require("../db/dbConfig");

//Import dos serviços
const service = require("./card.service");
const serviceCategoria = require("../categoria/categoria.service");

/*Funções assíncronas que implementam as regras de negócio da API
usam os imports para fazerem as validações e relizar as tarefas(CRUD)*/
const todosCards = async (req, res) => {
  const cards = await service.todosCards();
  res.send(cards);
};

const cardPorId = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const card = await service.cardPorId(id);
  if (!card) {
    return res.status(404).send({ message: "Card não encontrado!" });
  }

  res.send(card);
};

const criar = async (req, res) => {
  const card = req.body;
  if (
    !card ||
    !card.nome ||
    !card.imageUrl ||
    //!card.siteReferencia ||
    //!card.texto ||
    !card.categoria
  ) {
    return res.status(400).send({
      message: "Dados inválidos ou dados obrigatórios não informados!",
    });
  }

  const categoria = req.body;
  const categoriaId = categoria.categoria;
  const buscarId = await serviceCategoria.categoriaId(categoriaId);
  if (!buscarId) {
    return res.status(404).send({ message: "categoria não encontrada!" });
  }

  const novoCard = await service.criar(card);

  res.status(201).send({ message: "Card criado com sucesso!" });
};

const atulizar = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const card = req.body;
  if (!card || !card.nome || !card.imageUrl || !card.categoria) {
    return res.status(400).send({ message: "Dados inválidos!" });
  }

  const atulizarCard = await service.atulizar(id, card);
  if (!atulizarCard) {
    return res.send(404).send({ message: "Card não encontrado!" });
  }
  res.send({ message: "Card atualizado com sucesso!" });
};

const excluirCard = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const excluirCard = await service.excluirCard(id);
  if (!excluirCard) {
    return res.send(404).send({ message: "Card não encontrado!" });
  }
  res.send({ message: "Card excluido com sucesso!" });
};

//exporta os resultados para API
module.exports = {
  todosCards,
  cardPorId,
  criar,
  atulizar,
  excluirCard,
};
