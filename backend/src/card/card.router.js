//import do express e express.router
const express = require("express");
const router = express.Router();

//Rota busca o que fazer no controller
const controller = require("./card.controller");

//Index direciona para essas rotas depois do /cards...
router.get("/", controller.todosCards);
router.get("/:id", controller.cardPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atulizar);
router.delete("/:id", controller.excluirCard);

module.exports = router;
