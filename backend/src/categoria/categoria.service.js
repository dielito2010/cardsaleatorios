const Categoria = require("./categoria.model");
const ObjectId = require("mongoose").Types.ObjectId;

const todasCategorias = () => {
  return Categoria.find();
};

module.exports = {
  todasCategorias,
};
