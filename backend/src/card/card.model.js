const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  imageUrl: { type: String, require: true },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Categoria",
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
