const Categorias = require("./categoria.model");
const ObjectId = require("mongoose").Types.ObjectId;

const todasCategorias = () => {
  return Categorias.find();
};

module.exports = {
  todasCategorias,
};
