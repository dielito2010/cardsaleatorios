//const { objetoValido } = require("../db/dbConfig");
const service = require("./categoria.service");

const todasCategorias = async (req, res) => {
  const Categorias = await service.todasCategorias();
  res.send(Categorias);
};

module.exports = {
  todasCategorias,
};
