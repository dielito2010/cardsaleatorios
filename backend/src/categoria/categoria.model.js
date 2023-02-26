//import moongoose
const mongoose = require("mongoose");

//criando Schema "Modelo do objeto categoria"
const categoriaSchema = new mongoose.Schema({
  nome: { type: String, require: true },
});

//Declarando variável que recebe o modelo categorias
const Categorias = mongoose.model("Categorias", categoriaSchema);

//Exportando categorias e suas propriedades para API
module.exports = Categorias;
