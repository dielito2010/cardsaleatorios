const Categorias = require("./categoria.model");
const ObjectId = require("mongoose").Types.ObjectId;

const todasCategorias = () => {
  return Categorias.find();
};

const categoriaId = (id) => {
  const objectID = new ObjectId(id);
  return Categorias.findById(objectID);
};

const criar = (categoria) => {
  return Categorias.create(categoria);
}

const excluirCategoria = (id) => {
  return Categorias.findByIdAndDelete(id);
}

module.exports = {
  todasCategorias,
  criar,
  excluirCategoria,
  categoriaId,
};
