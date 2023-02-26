const mongoose = require("mongoose");

const databaseUrl =
  "mongodb+srv://admin:YzOCE9cR7TOWpyCV@cluster0.nxhs41w.mongodb.net/";

const conexaoDb = () => {
  return mongoose
    .connect(databaseUrl)
    .then(() => console.log("Mongo conectado com sucesso!"))
    .catch((error) => console.log("Erro de conexão com o banco.\n", error));
};

const objetoValido = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = {
  conexaoDb,
  objetoValido,
};
