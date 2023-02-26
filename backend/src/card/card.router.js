const express = require("express");
const controller = require("./card.controller");
const router = express.Router();

router.get("/", controller.todosCards);
router.get("/:id", controller.cardPorId);
router.post("/", controller.criar);
router.put("/:id", controller.atulizar);
router.delete("/:id", controller.excluirCard);

module.exports = router;
