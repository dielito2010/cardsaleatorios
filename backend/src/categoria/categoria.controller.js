//Import de objeto validado pelo arquivo dbconfig
const { objetoValido } = require("../db/dbConfig");

//Import dos serviços
const service = require("./categoria.service");

/*Funções assíncronas que implementam as regras de negócio da API
usam os imports para fazerem as validações e relizar as tarefas(CRUD)*/
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
    return res.status(400).send({ message: "Dados inválidos, favor verificar!" });
  }

  const novaCategoria = await service.criar(categoria);

  res.status(201).send({ message: "Categoria criada com sucesso!" });
};

const atualizarCategoria = async (req, res) => {
  const id = req.params.id
  const categoria = req.body;
  if (!objetoValido(id)) {
    return res.status(400).send({ message: "Id inválido!" });
  }

  const categoriaAtualizada = await service.atualizarCategoria(id, categoria);

  res.status(201).send({ message: "Categoria atualizada com sucesso!" });
}

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

//exporta os resultados para API
module.exports = {
  todasCategorias,
  categoriaId,
  criar,
  atualizarCategoria,
  excluirCategoria,
};
