const Card = require("./card.model");
const ObjectId = require("mongoose").Types.ObjectId;

const todosCards = () => {
  return Card.find().select("nome imageUrl");
};

const cardPorId = (id) => {
  const objectID = new ObjectId(id);
  return Card.findById(objectID);
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

module.exports = {
  todosCards,
  cardPorId,
  criar,
  atulizar,
  excluirCard,
};
