const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  nome: { type: String, require: true },
});

const Categorias = mongoose.model("Categorias", categoriaSchema);

module.exports = Categorias;
