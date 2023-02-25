const { objetoValido } = require("../db/dbConfig");
const service = require("./categoria.service");

const todasCategorias = async (req, res) => {
  const Categoria = await service.todasCategorias();
  res.send(Categoria);
};

module.exports = {
  todasCategorias,
};
