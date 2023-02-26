const { objetoValido } = require("../db/dbConfig");
const service = require("./categoria.service");

const todasCategorias = async (req, res) => {
  const Categorias = await service.todasCategorias();
  res.send(Categorias);
};

const categoriaId = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const categoriaId = await service.categoriaId(id);
  if (!categoriaId) {
    return res.status(404).send({ message: "categoria não encontrada!" });
  }

  res.send(id);
};

const criar = async (req, res) => {
  const categoria = req.body;
  if (!categoria || !categoria.nome) {
    return res.status(400).send({ message: "Dados inválidos!" });
  }

  const novaCategoria = await service.criar(categoria);

  res.status(201).send(novaCategoria);
};

const excluirCategoria = async (req, res) => {
  const id = req.params.id;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const excluirCategoria = await service.excluirCategoria(id);
  if (!excluirCategoria) {
    return res.send(404).send({ message: "Categoria não encontrada!" });
  }
  res.send({ message: "Categoria excluida com sucesso!" });
};

module.exports = {
  todasCategorias,
  categoriaId,
  criar,
  excluirCategoria,
};
