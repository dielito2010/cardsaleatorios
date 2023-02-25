const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  name: { type: String, require: true },
});

const Categoria = mongoose.model("Categoria", categoriaSchema);

module.exports = Categoria;
