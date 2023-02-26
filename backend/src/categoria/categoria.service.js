//importando as propriedades do model
const Categorias = require("./categoria.model");

//Usando mongoose para validar um objetoId
const ObjectId = require("mongoose").Types.ObjectId;

//Funções flechas para os serviços acessarem o DB e retornar algo:
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

////Exportando os retornos para API
module.exports = {
  todasCategorias,
  criar,
  excluirCategoria,
  categoriaId,
};
