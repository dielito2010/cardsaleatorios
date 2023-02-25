const express = require("express");
const controller = require("./categoria.controller");
const router = express.Router();

router.get("/", controller.todasCategorias);

module.exports = router;
