//import moongoose
const mongoose = require("mongoose");

//criando Schema "Modelo do objeto cards"
const cardSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  imageUrl: { type: String, require: true },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Categoria",
  },
});

//Declarando variável que recebe o modelo cards
const Card = mongoose.model("Card", cardSchema);

//Exportando cards e suas propriedades para API
module.exports = Card;
