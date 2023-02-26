const express = require("express");
const controller = require("./categoria.controller");
const router = express.Router();

router.get("/", controller.todasCategorias);
router.get("/:id", controller.categoriaId)
router.post("/", controller.criar);
router.delete("/:id", controller.excluirCategoria);

module.exports = router;
