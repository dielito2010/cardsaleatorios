const Categoria = require("./categoria.model");
const ObjectId = rquire("mongoose").Types.ObjectId;

const todasCategorias = () => {
  return Categoria.find();
};

module.exports = {
  todasCategorias,
};
