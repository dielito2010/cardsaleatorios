//importando as propriedades do model
const Card = require("./card.model");

//Usando mongoose para validar um objetoId
const ObjectId = require("mongoose").Types.ObjectId;

//Funções flechas para os serviços acessarem o DB e retornar algo:
const todosCards = () => {
  return Card.find().select("nome imageUrl siteReferencia texto")
  .populate("categoria");
};

const cardPorId = (id) => {
  const objectID = new ObjectId(id);
  return Card.findById(objectID).populate("categoria");
};

const criar = (card) => {
  return Card.create(card);
};

const atulizar = (id, card) => {
  const objectID = new ObjectId(id);
  return Card.findByIdAndUpdate(objectID, card);
};

const excluirCard = (id) => {
  const objectID = new ObjectId(id);
  return Card.findByIdAndDelete(objectID);
};

//Exportando os retornos para API
module.exports = {
  todosCards,
  cardPorId,
  criar,
  atulizar,
  excluirCard,
};
