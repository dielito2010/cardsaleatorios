//import do express e express.router
const express = require("express");
const router = express.Router();

//Rota busca o que fazer no controller
const controller = require("./categoria.controller");

//Index direciona para essas rotas depois do /categorias...
router.get("/", controller.todasCategorias);
router.get("/:id", controller.categoriaId)
router.post("/", controller.criar);
router.put("/:id", controller.atualizarCategoria);
router.delete("/:id", controller.excluirCategoria);

module.exports = router;
